import { NextResponse } from 'next/server';

function clean(value, max = 5000) {
  return String(value || '').trim().slice(0, max);
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (clean(data.website_confirm, 100)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(data.name, 120);
    const email = clean(data.email, 180);
    const details = clean(data.details, 6000);

    if (!name || !email || !details || !email.includes('@')) {
      return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || 'info@omnifusions.com';
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
      console.error('Contact form email is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.');
      return NextResponse.json({ error: 'The form is temporarily unavailable. Please email info@omnifusions.com.' }, { status: 503 });
    }

    const company = clean(data.company, 180) || 'Not provided';
    const website = clean(data.website, 300) || 'Not provided';
    const service = clean(data.service, 120);
    const engagement = clean(data.engagement, 120);
    const budget = clean(data.budget, 120);
    const timeline = clean(data.timeline, 120);

    const text = [
      `New Omni Fusions project inquiry`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Website: ${website}`,
      `Service: ${service}`,
      `Engagement: ${engagement}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      ``,
      `Project details:`,
      details
    ].join('\n');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New project inquiry — ${service || 'Omni Fusions'}`,
        text
      })
    });

    if (!resendResponse.ok) {
      const body = await resendResponse.text();
      console.error('Resend error:', body);
      return NextResponse.json({ error: 'We could not send your inquiry. Please email us directly.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
