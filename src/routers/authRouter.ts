import { Router } from "express";
import { registerUserController, signInController } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { signinSchema, signupSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(signupSchema), registerUserController)
authRouter.post("/signin", validateSchemaMiddleware(signinSchema), signInController)

export default authRouter