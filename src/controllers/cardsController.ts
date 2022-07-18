import { Request, Response } from "express";
import { getCardsByUserId } from "../repositories/cardsRepository.js";
import { createCardService, deleteCardService, getUniqueCardService } from "../services/cardService.js";

import { cardType } from "../services/cardService.js";

export async function createCardController(req:Request, res:Response) {
    const infos : cardType = req.body
    infos.userId = +res.locals.userData.data.userId

    await createCardService(infos)

    res.sendStatus(201)
}
export async function getCardsController(req:Request, res:Response) {
    const userId = +res.locals.userData.data.userId
    const cards = await getCardsByUserId(userId)

    res.send(cards)
}
export async function getUniqueCardController(req:Request, res:Response) {
    const userId = +res.locals.userData.data.userId
    const cardId = +req.params.id

    const card = await getUniqueCardService(cardId, userId)

    res.send(card)

}
export async function deleteCardController(req:Request, res:Response) {
    const userId = +res.locals.userData.data.userId
    const cardId = +req.params.id

    const card = await deleteCardService(cardId, userId)

    res.sendStatus(200)

}

