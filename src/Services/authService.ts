import { Users } from "@prisma/client";
import { createUser } from "../Repositories/authRepository.js";

export type userType = Omit<Users, "id" | "createdAt">

export async function registerUserService(infos: userType) {
    await createUser(infos)
}