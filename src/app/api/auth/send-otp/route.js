import { NextResponse } from "next/server";

const SEND_OTP_URL = "https://server.finuniques.in/api/v1/auth/send-otp";

export async function POST(request) {
  try {
    const body = await request.json();
    const mobileNumber = String(body?.mobileNumber || "").trim();

    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    const response = await fetch(SEND_OTP_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNumber }),
      cache: "no-store",
    });

    const responseText = await response.text();
    let data;

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = { message: responseText || "The OTP provider returned an invalid response." };
    }

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to send OTP. Please try again." },
      { status: 502 }
    );
  }
}
