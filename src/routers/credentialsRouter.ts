import { Router } from "express";
import { createCredentialController } from "../controllers/credentialsController.js";
import { validToken } from "../middlewares/authTokenMiddleare.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { signupSchema } from "../schemas/authSchema.js";

const credentialRouter = Router();

credentialRouter.post("/credential/new", validToken, createCredentialController)

export default credentialRouter