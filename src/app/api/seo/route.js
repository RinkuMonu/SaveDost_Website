import { NextResponse } from "next/server";
import seoConfig from "@/app/seoConfig";

export async function GET(request) {
  const path = request.nextUrl.searchParams.get("path");

  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return NextResponse.json({ data: null }, { status: 400 });
  }

  const data = await seoConfig(path);
  return NextResponse.json(
    { data },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
