import { prisma } from "../config/connectionDB.js";
import { registerUserType } from "../services/authService.js";


export async function selectUserByEmail(email: string) {
    const user = await prisma.users.findFirst({ where: { email } })
    return user
}

export async function createUser(infos: registerUserType) {
    const teste = await prisma.users.create({ data: infos })
}

export async function createSession(userId: number) {
    const {id} = await prisma.sessions.create({data:{userId}})
    // const sessionId = await prisma.sessions.create({data: userId})
    return id
}