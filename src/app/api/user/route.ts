import { oAuthSignin } from "@/lib/actions/user-control";
import { NextRequest, NextResponse } from "next/server";
/**
 * This is the API route for user sign-in.
 * It handles the OAuth sign-in process.
 */
export async function POST(req: NextRequest) {
  const data = await req.json();
  // console.log(data, "data form api route");

  try {
    const result = await oAuthSignin(data);
    return NextResponse.json(result);
  } catch (error) {
    const msg =
      error instanceof Error
        ? error.message
        : "Unknown error happened during OAuth sign-in";
    console.error("oAuthSignin error:", error);
    return NextResponse.json({ success: false, error: msg });
  }
}
