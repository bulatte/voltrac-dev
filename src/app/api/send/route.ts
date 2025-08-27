import { EmailTemplate } from "@/components/email-template";
import { contactFormSchema } from "@/lib/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const values = contactFormSchema.safeParse(data);

    if (!values.success) {
      console.error("values validation failed");
      console.error(values.error);
      return Response.json({ error: true, success: false }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Voltrac <tom@voltrac.eu>",
      to: ["info@voltrac.eu"],
      subject: `Voltrac - New Message from ${values.data.name}`,
      react: EmailTemplate(values.data),
    });

    if (error) {
      console.error("Failed to send email");
      console.error(error);

      return Response.json({ error: true, success: false }, { status: 500 });
    }

    return Response.json({ success: true, error: false });
  } catch (error) {
    console.error("Unexpected error occurred");
    console.error(error);

    return Response.json({ error: true, success: false }, { status: 500 });
  }
}
