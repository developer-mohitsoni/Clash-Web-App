import nodemailer from "nodemailer";

import "dotenv/config";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (to: string, subject: string, body: string) => {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: to,
    subject: subject,
    html: body,
  });
};
