import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Formatting the message for WhatsApp
    const whatsappMessage = `*New Inquiry*\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    
    // CallMeBot API details from Environment Variables
    const whatsappPhone = process.env.WHATSAPP_PHONE_NUMBER;
    const callMeBotApiKey = process.env.CALLMEBOT_API_KEY;

    if (!whatsappPhone || !callMeBotApiKey) {
      console.warn("Missing WHATSAPP_PHONE_NUMBER or CALLMEBOT_API_KEY in environment variables.");
      // For development/demonstration if keys are missing, we just simulate success.
      // In production, you would return an error.
      return NextResponse.json({ success: true, message: "Simulated success due to missing API keys." });
    }

    // CallMeBot API Endpoint
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(whatsappPhone)}&text=${encodeURIComponent(whatsappMessage)}&apikey=${encodeURIComponent(callMeBotApiKey)}`;
    
    const response = await fetch(apiUrl, { method: 'GET' });
    
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      console.error("WhatsApp API Error:", errorText);
      return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 });
    }
  } catch (error) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
