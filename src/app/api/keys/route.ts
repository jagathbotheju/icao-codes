import { NextResponse } from "next/server";

export async function GET() {
  try {
    const keys = {
      api_key: process.env.API_KEY,
      api_host: process.env.API_HOST,
    };
    if (!keys) return null;
    return NextResponse.json(keys);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
