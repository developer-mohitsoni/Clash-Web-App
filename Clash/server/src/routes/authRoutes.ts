import { Router, Request, Response } from "express";
import { registerSchema } from "../validation/authValidation.js";
import { ZodError } from "zod";
import { formateError } from "../helper.js";
import bcrypt from "bcrypt";
import prisma from "../config/database.js";

const router = Router();

//* Register Route

router.post("/register", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const payload = await registerSchema.parse(body);

    let user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (user) {
      return res.status(422).json({
        errors: {
          email: "Email already taken. Please use another email",
        },
      });
    }

    //* Encrypt the password
    const salt = await bcrypt.genSalt(10);
    payload.password = await bcrypt.hash(payload.password, salt);

    await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password
      }
    });

    return res.json({
      message: "Account Created Successfully",
    });

    return res.json(payload);
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formateError(error);
      return res.status(422).json({
        message: "Invalid Data",
        errors,
      });
    }
    return res.status(500).json({
      message: "Something went wrong... Please try again",
    });
  }
});

export default router;
