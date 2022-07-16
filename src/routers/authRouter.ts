import { Router } from "express";
import { registerUserController } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { signupSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(signupSchema), registerUserController)

export default authRouter