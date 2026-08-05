import { NextResponse } from "next/server";

const AADHAAR_VERIFY_URL = "https://server.finuniques.in/api/kyc/aadhar-verify";

export async function POST(request) {
  try {
    const body = await request.json();
    const aadharNumber = String(body?.aadharNumber || "").replace(/\s/g, "");

    if (!/^[2-9]\d{11}$/.test(aadharNumber)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid 12-digit Aadhaar number." },
        { status: 400 }
      );
    }

    const response = await fetch(AADHAAR_VERIFY_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aadharNumber }),
      cache: "no-store",
    });

    const responseText = await response.text();
    let data;

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = { message: responseText || "The Aadhaar provider returned an invalid response." };
    }

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to verify Aadhaar. Please try again." },
      { status: 502 }
    );
  }
}
