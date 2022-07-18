import { Request, Response } from "express";
import { getSafeNotesByUserId } from "../repositories/safeNotesRepository.js";
import { createSafeNoteService, deleteSafeNoteService, getSafeNoteService } from "../services/safeNotesService.js";





export async function createSafeNoteController(req: Request, res: Response) {
    const safeNotesInfos = req.body;
    safeNotesInfos.userId = +req.headers.id

    await createSafeNoteService(safeNotesInfos)

    res.sendStatus(201)

}


export async function getSafeNotesController(req: Request, res: Response) {
    const userId = +req.headers.id
    const credentials = await getSafeNotesByUserId(userId)

    res.send(credentials)
}

export async function getUniqueSafeNoteController(req: Request, res: Response) {
    const userId = +req.headers.id
    const safeNoteId = +req.params.id

    const safeNote = await getSafeNoteService(userId, safeNoteId)

    res.send(safeNote)
}

export async function deleteSafeNoteController(req: Request, res: Response) {
    const userId = +req.headers.id
    console.log("userId", userId)
    const safeNoteId = +req.params.id

    await deleteSafeNoteService(userId, safeNoteId)

    res.sendStatus(200)

}

