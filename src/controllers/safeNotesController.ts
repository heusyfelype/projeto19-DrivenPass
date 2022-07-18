import { Request, Response } from "express";
import { getSafeNotesByUserId } from "../repositories/safeNotesRepository.js";
import { createSafeNoteService, deleteSafeNoteService, getSafeNoteService, safenoteType } from "../services/safeNotesService.js";




export async function createSafeNoteController(req: Request, res: Response) {
    const safeNotesInfos : safenoteType = req.body;
    safeNotesInfos.userId = +res.locals.userData.data.userId

    await createSafeNoteService(safeNotesInfos)

    res.sendStatus(201)
}


export async function getSafeNotesController(req: Request, res: Response) {
    const userId = +res.locals.userData.data.userId
    const credentials = await getSafeNotesByUserId(userId)

    res.send(credentials)
}

export async function getUniqueSafeNoteController(req: Request, res: Response) {
    const userId = +res.locals.userData.data.userId
    const safeNoteId = +req.params.id

    const safeNote = await getSafeNoteService(userId, safeNoteId)

    res.send(safeNote)
}

export async function deleteSafeNoteController(req: Request, res: Response) {
    const userId = +res.locals.userData.data.userId
    console.log("userId", userId)
    const safeNoteId = +req.params.id

    await deleteSafeNoteService(userId, safeNoteId)

    res.sendStatus(200)

}

