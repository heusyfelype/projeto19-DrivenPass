import { prisma } from "../config/connectionDB.js";
import { userType } from "../Services/authService.js";

export async function createUser(infos:userType) {
    await prisma.users.create({data: infos})
}