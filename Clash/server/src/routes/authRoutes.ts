import { Router, Request, Response } from "express";

const router = Router();

//* Register Route

router.post("/",async(req:Request, res:Response)=>{
    const body = req.body
})

export default router;
