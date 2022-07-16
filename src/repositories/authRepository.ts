import { prisma } from "../config/connectionDB.js";
import { userType } from "../services/authService.js";


export async function selectUserByEmail(email: string) {
    const user = await prisma.users.findFirst({ where: { email } })
    return user
}
export async function createUser(infos: userType) {
    await prisma.users.create({ data: infos })
}