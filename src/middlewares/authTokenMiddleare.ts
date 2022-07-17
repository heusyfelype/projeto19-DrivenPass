import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
// import { getSessionById } from "../repositories/sessionsRepository";

export async function validToken(req: Request, res: Response, next: NextFunction) {

    const auth = req.headers.authorization
    const token = auth?.replace('Bearer ', "");
    if (!token) {
        throw { type: "unauthorized", message: "no token" }
    }

    const JWTKey = process.env.JWT_SECRET

    const reverseToken = jwt.verify(token, JWTKey)

    // const session = await getSessionById(reverseToken.sessionId)

    //decriptedData será um objeto, depois é só acessa o id do usuário e da sessão para verificar 
    // se existe no brotliDecompress. Em seguida, verificar se a data de expiração já foi ultrapassada.

    next()
}