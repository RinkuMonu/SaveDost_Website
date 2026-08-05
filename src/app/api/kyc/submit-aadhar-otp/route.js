import { NextResponse } from "next/server";

const SUBMIT_AADHAAR_OTP_URL = "https://server.finuniques.in/api/kyc/submit-aadhar-otp";

export async function POST(request) {
  try {
    const body = await request.json();
    const aadharNumber = String(body?.aadharNumber || "").replace(/\s/g, "");
    const otp = String(body?.otp || "").trim();
    const clientId = String(body?.client_id || "").trim();
    const userId = String(body?.userId || "").trim();

    if (!/^[2-9]\d{11}$/.test(aadharNumber)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid 12-digit Aadhaar number." },
        { status: 400 }
      );
    }
    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json(
        { success: false, message: "Enter the valid 6-digit Aadhaar OTP." },
        { status: 400 }
      );
    }
    if (!clientId) {
      return NextResponse.json(
        { success: false, message: "Aadhaar verification session is missing. Please resend OTP." },
        { status: 400 }
      );
    }
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User ID is missing from the verification flow." },
        { status: 400 }
      );
    }

    const response = await fetch(SUBMIT_AADHAAR_OTP_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aadharNumber,
        otp,
        client_id: clientId,
        userId,
      }),
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
      { success: false, message: "Unable to submit Aadhaar OTP. Please try again." },
      { status: 502 }
    );
  }
}
