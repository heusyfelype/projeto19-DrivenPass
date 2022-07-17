import { Users } from "@prisma/client";
import { createSession, createUser, selectUserByEmail } from "../repositories/authRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { type } from "os";

export type registerUserType = Omit<Users, "id" | "createdAt">
export type loginUserType = Omit<Users, "id" | "createdAt" | "name">


export async function registerUserService(infos: registerUserType) {
    const hasUser = await selectUserByEmail(infos.email)
    console.log("hasUser: ", hasUser)
    if (hasUser) {
        throw { type: "conflict", message: "Email já cadastrado" }
    }
    const hashPass = bcrypt.hashSync(infos.pass, 12)
    infos.pass = hashPass
    await createUser(infos)
}

export async function signInService(infos:loginUserType) {
    const user = await selectUserByEmail(infos.email)
    if(!user){
        throw {type: "unprocessable entity", message: "Usuário não cadastrado!"}
    }
    if(bcrypt.compareSync(infos.pass, user.pass)){
        const sessionId = await createSession(user.id)
        const expireConfig = {expiresIn: 60*60*48}
        const token = jwt.sign({data: {sessionId: sessionId, userId:user.id}}, process.env.JWT_SECRET, expireConfig)
        return {token, userId: user.id}
    }
    throw {type: "unauthorized", message: "Email ou senha incorretos!"}
}