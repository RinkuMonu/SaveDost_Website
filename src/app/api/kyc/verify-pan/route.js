import { NextResponse } from "next/server";

const VERIFY_PAN_URL = "https://server.finuniques.in/api/kyc/verifyPAN";

export async function POST(request) {
  try {
    const body = await request.json();
    const panNumber = String(body?.id_number || "")
      .trim()
      .toUpperCase();
    const userId = String(body?.userId || "").trim();

    if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(panNumber)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid PAN number." },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User ID is missing from the verification flow." },
        { status: 400 }
      );
    }

    const response = await fetch(VERIFY_PAN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_number: panNumber,
        userId,
      }),
      cache: "no-store",
    });

    const responseText = await response.text();
    let data;

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = { message: responseText || "The PAN provider returned an invalid response." };
    }

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to verify PAN. Please try again." },
      { status: 502 }
    );
  }
}
