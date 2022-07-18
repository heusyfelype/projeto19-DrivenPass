import { prisma } from "../config/connectionDB.js"
import { safenoteTypePrisma } from "../services/safeNotesService.js"


export async function selectSafeNoteByTitle(title: string) {
    const safeNote = await prisma.safeNotes.findFirst({ where: { title } })
    return safeNote
}

export async function createSafeNote(infos: safenoteTypePrisma) {
    await prisma.safeNotes.create({ data: infos })
}


export async function getSafeNotesByUserId(userId: number) {
    const safeNotes = await prisma.safeNotes.findMany({ where: { userId }, select:{id:true, note:true, title:true} })
    return safeNotes
}

export async function selectSafeNoteById(id: number) {
    const safeNote = await prisma.safeNotes.findFirst({ where: { id } })
    return safeNote
}

export async function deleteSafeNote(id:number) {
    await prisma.safeNotes.delete({where:{id}})
}