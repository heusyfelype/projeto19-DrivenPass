import { Router } from "express";

import authRouter from "./authRouter.js";
import cardsRouter from "./cardsRouters.js";
import credentialRouter from "./credentialsRouter.js";
import safeNotesRouter from "./safeNotesRouter.js";
import wifiPassRouter from "./wifiPassRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safeNotesRouter);
router.use(cardsRouter);
router.use(wifiPassRouter);


export default router