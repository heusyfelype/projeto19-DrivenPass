import { SafeNotes } from "@prisma/client";
import { type } from "os";
import { createSafeNote, deleteSafeNote, selectSafeNoteById, selectSafeNoteByTitle } from "../repositories/safeNotesRepository.js";

export type safenoteTypePrisma = Omit<SafeNotes, "id" | "createdAt">
export type safenoteType = Pick<SafeNotes, "note" | "title" | "userId">

export async function createSafeNoteService(infos: safenoteTypePrisma) {
    const existSafeNoteAlready = await selectSafeNoteByTitle(infos.title, infos.userId)
    if (existSafeNoteAlready) {
        throw { type: "conflict", message: "A safenote with this title already exists!" }
    }

    await createSafeNote(infos);
}

export async function getSafeNoteService(userId: number, safeNoteId: number) {
    const safeNoteSelected = await selectSafeNoteById(safeNoteId, userId)
    if (!safeNoteSelected) {
        throw { "type": "not found", message: "Unable to locate safeNote" }

    }
    // if (safeNoteSelected.userId !== userId) {
    //     throw { "type": "Conflict", message: "You have not authorization for access this safeNote!" }
    // }
    return safeNoteSelected
}

export async function deleteSafeNoteService(userId: number, safeNoteId: number) {
    const safeNoteSelected = await selectSafeNoteById(safeNoteId, userId)
    if (!safeNoteSelected) {
        throw { "type": "not found", message: "Unable to locate safeNote" }

    }
    // if (safeNoteSelected.userId !== userId) {
    //     throw { "type": "Conflict", message: "You have not authorization for delete this credential!" }
    // }

    await deleteSafeNote(safeNoteId)
}
