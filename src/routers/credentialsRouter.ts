import { Router } from "express";
import { createCredentialController, getCredentailController } from "../controllers/credentialsController.js";
import { validToken } from "../middlewares/authTokenMiddleare.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { createCredentialSchema } from "../schemas/credentialsSchema.js";

const credentialRouter = Router();

credentialRouter.post("/credential/new", validToken, validateSchemaMiddleware(createCredentialSchema), createCredentialController)
credentialRouter.get("/credential", validToken, getCredentailController)

export default credentialRouter