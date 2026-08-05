import { NextResponse } from "next/server";

export const dynamic = "force-static";

const BLOGS_API_URL =
  "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=6&status=2&page=1&limit=10";

export async function GET() {
  try {
    const response = await fetch(BLOGS_API_URL, {
      headers: {
        Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Unable to fetch blogs" }, { status: response.status });
    }

    return NextResponse.json(await response.json());
  } catch {
    return NextResponse.json(
      { message: "The blog service is currently unavailable" },
      { status: 502 }
    );
  }
}
