import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  // 1. Fail fast if credentials are missing
  if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
  ) {
    return Response.json(
      { success: false, message: "Cloudinary credentials not found" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return Response.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }

    // 2. Size limit validation (2MB)
    if (image.size > 2 * 1024 * 1024) {
      return Response.json(
        { success: false, message: "Image size must be less than 2MB" },
        { status: 400 }
      );
    }

    // 3. Image type validation
    if (!["image/jpeg", "image/png", "image/jpg"].includes(image.type)) {
      return Response.json(
        { success: false, message: "Image must be jpg, jpeg or png" },
        { status: 400 }
      );
    }

    // 4. Convert file to Buffer for streaming (more efficient than Base64)
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 5. Upload using Cloudinary Upload Stream
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "image",
          folder: "form_uploads", // Optional: keeps your Cloudinary dashboard organized
          format: "webp",         // Converts heavy PNGs to WebP automatically
          quality: "auto",        // Applies Cloudinary's intelligent compression
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as UploadApiResponse);
        }
      );
      
      // Pipe the buffer to Cloudinary
      uploadStream.end(buffer);
    });
console.log(result)
    return Response.json({
      success: true,
      message: "Image uploaded successfully",
      data: {
        url: result.secure_url,
        time: result.created_at,
        format: result.format, // Will now be 'webp'
      },
    });
    
  } catch (error) {
    console.error("Upload route error:", error);
    const msg = error instanceof Error ? error.message : "Something bad happened while uploading the image";
    return Response.json({ success: false, message: msg }, { status: 500 });
  }
}