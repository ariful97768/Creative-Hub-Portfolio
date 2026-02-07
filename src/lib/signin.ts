"use server";

export default async function signIn({username, password}: {username: string, password: string}) {
  // get admin username and password from environment variables
  const adminId = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminId && password === adminPassword) {
    return { success: true, message: "Sign in successful" };
  }
  return { success: false, message: "Sign in failed" };
}
