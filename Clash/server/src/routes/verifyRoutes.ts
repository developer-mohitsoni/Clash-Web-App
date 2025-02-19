import { Router, Request, Response } from "express";
import prisma from "../config/database.js";

const router = Router();

router.get("/verify-email", async (req: Request, res: Response) => {
  const { email, token } = req.query;

  if (email && token) {
    const user = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (!user) {
      return res.redirect("/verify-error");
    }
    if (user && token === user.email_verified_token) {
      await prisma.user.update({
        where: {
          email: email as string,
        },
        data: {
          email_verified_token: null,
          email_verified_at: new Date().toISOString(),
        },
      });

      return res.redirect(`${process.env.CLIENT_APP_URL}/login`);
    }
  }

  return res.redirect("/verify-error");
});

router.get("/verify-error", async (req: Request, res: Response) => {
  return res.render("auth/emailVerifyError");
});

export default router;
