import { Users } from "@prisma/client";
import { createUser, selectUserByEmail } from "../repositories/authRepository.js";
import bcrypt from "bcrypt";

export type userType = Omit<Users, "id" | "createdAt">

export async function registerUserService(infos: userType) {
    const hasUser = await selectUserByEmail(infos.email)
    console.log("hasUser: ", hasUser)
    if (hasUser) {
        throw { type: "conflict", message: "Email já cadastrado" }
    }
    const hashPass = bcrypt.hashSync(infos.pass, 12)
    infos.pass = hashPass
    await createUser(infos)
}