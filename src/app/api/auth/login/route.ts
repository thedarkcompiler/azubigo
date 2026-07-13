import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  console.log("Received login request for username:", username);
  console.log("Received login request for password:", password);

  const user = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username) as
      | { id: number; username: string; password: string }
      | undefined;

  if (!user) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true, 
    user: {
      id: user.id,
      username: user.username,
    },
  });


  response.cookies.set({
    name: "session",
    value: String(user.id),
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}