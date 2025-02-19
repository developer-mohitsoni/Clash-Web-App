import nodemailer from "nodemailer";

import "dotenv/config";

export const auth = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (to: string, subject: string, body: string) => {
  await auth.sendMail({
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: body,
  });
};
