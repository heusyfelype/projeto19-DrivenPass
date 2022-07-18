import { Router } from "express";

import authRouter from "./authRouter.js";
import credentialRouter from "./credentialsRouter.js";
import safeNotesRouter from "./safeNotesRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safeNotesRouter)

export default router