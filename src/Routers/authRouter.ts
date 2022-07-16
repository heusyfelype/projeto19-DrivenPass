import { Router } from "express";
import { registerUserController } from "../Controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", registerUserController)

export default authRouter