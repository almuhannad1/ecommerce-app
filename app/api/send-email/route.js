import { Resend } from "resend";
import { EmailTemplate } from "../../_components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [body.email],
      subject: 'Orders from couses',
      react: EmailTemplate({ body }),
    });


    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}