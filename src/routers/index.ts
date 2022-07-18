import { Router } from "express";

import authRouter from "./authRouter.js";
import cardsRouter from "./cardsRouters.js";
import credentialRouter from "./credentialsRouter.js";
import safeNotesRouter from "./safeNotesRouter.js";
import testRouter from "./testRouter.js";
import wifiPassRouter from "./wifiPassRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safeNotesRouter);
router.use(cardsRouter);
router.use(wifiPassRouter);
router.use(testRouter)


export default router