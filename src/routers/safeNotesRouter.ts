import { Router } from "express";
import { createSafeNoteController, deleteSafeNoteController, getSafeNotesController, getUniqueSafeNoteController } from "../controllers/safeNotesController.js";
import { validToken } from "../middlewares/authTokenMiddleare.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { safenotesSchema } from "../schemas/safeNotesSchemas.js";


const safeNotesRouter = Router();

safeNotesRouter.post("/safenote", validToken, validateSchemaMiddleware(safenotesSchema), createSafeNoteController)
safeNotesRouter.get("/safenotes", validToken, getSafeNotesController)
safeNotesRouter.get("/safenote/:id", validToken, getUniqueSafeNoteController)
safeNotesRouter.delete("/safenote/:id", validToken, deleteSafeNoteController)

export default safeNotesRouter