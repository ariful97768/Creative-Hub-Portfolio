const TWO_MB = 2 * 1024 * 1024;
export async function uploadImage(image: File) {
  try {
    if (image.size > TWO_MB)
      throw new Error(`Image size must be less then 2MB`);

    if (
      image.type !== "image/jpeg" &&
      image.type !== "image/png" &&
      image.type !== "image/jpg"
    ) {
      throw new Error("Image must be jpg, jpeg or png");
    }

    const imageFile = new FormData();
    imageFile.append("image", image);

    // Fetch api route
    const result = await fetch("/api/upload-image", {
      method: "POST",
      body: imageFile,
    });

    if (!result.ok)
      return { success: false, message: "Failed to upload image" };

    const data = await result.json();

    return {
      success: true,
      message: "Image uploaded successfully",
      data: { url: data.data.data.url, time: data.data.data.time },
    };
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "Failed to upload image";
    return { success: false, message: msg };
  }
}
