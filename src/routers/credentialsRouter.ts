import { Router } from "express";
import { createCredentialController, deleteCredentialController, getCredentailController, getUniqueCredentailController } from "../controllers/credentialsController.js";
import { validToken } from "../middlewares/authTokenMiddleare.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { createCredentialSchema } from "../schemas/credentialsSchema.js";

const credentialRouter = Router();

credentialRouter.post("/credential/new", validToken, validateSchemaMiddleware(createCredentialSchema), createCredentialController)
credentialRouter.get("/credential", validToken, getCredentailController)
credentialRouter.get("/credential/:id", validToken, getUniqueCredentailController)
credentialRouter.delete("/credential/:id", validToken, deleteCredentialController)

export default credentialRouter