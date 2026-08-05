import { NextResponse } from "next/server";

const VERIFY_OTP_URL = "https://server.finuniques.in/api/v1/auth/verify-otp";

export async function POST(request) {
  try {
    const body = await request.json();
    const mobileNumber = String(body?.mobileNumber || "").trim();
    const otp = String(body?.otp || "").trim();
    const purpose = body?.purpose === "login" ? "login" : "verification";

    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json(
        { success: false, message: "Enter the valid 6-digit OTP." },
        { status: 400 }
      );
    }

    const response = await fetch(VERIFY_OTP_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNumber, otp }),
      cache: "no-store",
    });

    const responseText = await response.text();
    let data;

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = { message: responseText || "The OTP provider returned an invalid response." };
    }

    const nextResponse = NextResponse.json(data, { status: response.status });
    const accessToken =
      data?.accessToken || data?.token || data?.data?.accessToken || data?.data?.token;

    if (response.ok && data?.success !== false && purpose === "login") {
      nextResponse.cookies.set(
        "finunique_session",
        accessToken || `verified-mobile:${mobileNumber}`,
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        }
      );
    }

    return nextResponse;
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to verify OTP. Please try again." },
      { status: 502 }
    );
  }
}
