import { prisma } from "../config/connectionDB.js"
import { safenoteTypePrisma } from "../services/safeNotesService.js"


export async function selectSafeNoteByTitle(title: string, userId: number) {
    const safeNote = await prisma.safeNotes.findFirst({ where: { title, userId } })
    return safeNote
}

export async function createSafeNote(infos: safenoteTypePrisma) {
    await prisma.safeNotes.create({ data: infos })
}


export async function getSafeNotesByUserId(userId: number) {
    const safeNotes = await prisma.safeNotes.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            note: true,
            title: true
        }
    })
    return safeNotes
}

export async function selectSafeNoteById(id: number, userId: number) {
    const safeNote = await prisma.safeNotes.findFirst({
        where: {
            id,
            userId
        },
        select: {
            id: true,
            note: true,
            title: true
        }
    })
    return safeNote
}

export async function deleteSafeNote(id: number) {
    await prisma.safeNotes.delete({ where: { id } })
}