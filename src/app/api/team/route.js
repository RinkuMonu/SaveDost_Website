import { NextResponse } from "next/server";

export const dynamic = "force-static";

const TEAM_API_URL = "https://cms.sevenunique.com/apis/our-team/get-our-team.php?website_id=6";

export async function GET() {
  try {
    const response = await fetch(TEAM_API_URL, {
      headers: {
        Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Unable to fetch team members" },
        { status: response.status }
      );
    }

    return NextResponse.json(await response.json());
  } catch {
    return NextResponse.json(
      { message: "The team service is currently unavailable" },
      { status: 502 }
    );
  }
}
