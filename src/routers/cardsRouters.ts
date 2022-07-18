import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validToken } from "../middlewares/authTokenMiddleare.js";
import { createCardController, deleteCardController, getCardsController, getUniqueCardController } from "../controllers/cardsController.js";
import { cardSchema } from "../schemas/cardsSchema.js";

const cardsRouter = Router();

cardsRouter.post("/card", validToken, validateSchemaMiddleware(cardSchema), createCardController)
cardsRouter.get("/cards", validToken, getCardsController)
cardsRouter.get("/card/:id", validToken, getUniqueCardController)
cardsRouter.delete("/card/:id", validToken, deleteCardController)

export default cardsRouter