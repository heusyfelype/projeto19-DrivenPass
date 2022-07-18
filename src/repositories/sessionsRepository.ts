import { prisma } from "../config/connectionDB.js";


export async function getSessionByUserId(id: number) {
    const session = prisma.sessions.findFirst({ where: { id } })
    return session
}