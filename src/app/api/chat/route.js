import { NextResponse } from "next/server";

// This route runs on the server only. Your API key is never sent to the browser.
export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the AI assistant for SaveDost, a utility, insurance, and travel-booking
platform in India, powered by Finunique. Be warm, concise, and professional.

SaveDost's services are:
- Utility Services: Bill Payments, Recharges (mobile/DTH), BBPS Services
- Financial Services — Insurance: Car Insurance, Bike Insurance, Taxi Insurance, Commercial Insurance
- Travels & Booking: Bus Booking

Help visitors with questions about these services, how to use the platform, and general
account queries. If you don't know a specific policy detail, price, or coverage figure,
say so honestly and suggest they contact the SaveDost support team via the Contact Us
page rather than guessing. Keep replies short (2-4 sentences) unless the user asks for
detail. Do not invent prices, policy numbers, or guarantees.

If the user asks to talk to a human agent, acknowledge the request warmly and let them
know a support agent will be with them shortly, and point them to the Contact Us page
in the meantime.`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages array is required" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY is not set on the server.");
      return NextResponse.json({ error: "Chatbot is not configured yet." }, { status: 500 });
    }

    // Keep only the last 12 turns so the request stays fast and cheap.
    const trimmedMessages = messages.slice(-12).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content ?? "").slice(0, 4000),
    }));

    // Groq uses the OpenAI-compatible chat completions format.
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // current recommended Groq free-tier model
        max_tokens: 400,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmedMessages],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API error:", response.status, errText);

      if (response.status === 401) {
        return NextResponse.json(
          { error: "Chatbot is not configured correctly. Please contact support." },
          { status: 502 }
        );
      }

      if (response.status === 429) {
        return NextResponse.json(
          { error: "We're getting a lot of requests right now. Please try again in a moment." },
          { status: 502 }
        );
      }

      return NextResponse.json(
        { error: "The assistant is temporarily unavailable. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
