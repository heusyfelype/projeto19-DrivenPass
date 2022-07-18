import { Request, Response } from "express";
import { createCardService } from "../services/createCardService.js";


export async function createCardController(req:Request, res:Response) {
    const infos = req.body
    infos.userId = +req.headers.id

    await createCardService(infos)

    res.sendStatus(201)
}
export async function getCardsController(req:Request, res:Response) {
}
export async function getUniqueCardController(req:Request, res:Response) {
}
export async function deleteCardController(req:Request, res:Response) {
}

