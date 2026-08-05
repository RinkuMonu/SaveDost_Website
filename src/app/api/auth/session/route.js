import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function decodeJwtPayload(token) {
  try {
    const payload = token.split(".")[1];
    if (!payload) return {};
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(Buffer.from(normalized, "base64").toString("utf8"));
  } catch {
    return {};
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("finunique_session")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const claims = decodeJwtPayload(token);
  const verifiedMobile = token.startsWith("verified-mobile:")
    ? token.slice("verified-mobile:".length)
    : "";
  return NextResponse.json({
    authenticated: true,
    user: {
      name: claims.name || claims.fullName || claims.username || "SaveDost User",
      email: claims.email || "",
      mobile: claims.mobileNumber || claims.mobile || claims.phone_number || verifiedMobile,
    },
  });
}
