import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(1),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY no configurada");

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Innova Chem <noreply@innovachemlabs.com>",
      to: ["innovachemlabs@gmail.com"],
      replyTo: data.email,
      subject: `Nuevo contacto de ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a6b5e;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nombre</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;">${data.email}</td>
            </tr>
            ${data.company ? `<tr>
              <td style="padding: 8px 0; font-weight: bold;">Empresa</td>
              <td style="padding: 8px 0;">${data.company}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; margin-bottom: 4px;">Mensaje</p>
            <p style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 8px;">${data.message}</p>
          </div>
        </div>
      `,
    });

    if (error) throw new Error(error.message);

    return { ok: true };
  });
