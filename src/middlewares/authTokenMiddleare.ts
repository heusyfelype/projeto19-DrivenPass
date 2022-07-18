import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getSessionByUserId } from "../repositories/sessionsRepository.js";

export async function validToken(req: Request, res: Response, next: NextFunction) {

    const auth = req.headers.authorization
    const token = auth?.replace('Bearer ', "");
    if (!token) {
        throw { type: "unauthorized", message: "no token" }
    }

    const JWTKey = process.env.JWT_SECRET

    if(jwt.verify(token, JWTKey)){
        res.locals.userData = jwt.decode(token)
    }

    const session = await getSessionByUserId(res.locals.userData.data.sessionId)
    if (!session) {
        throw { type: "unauthorized", message: "session id invalid!" }
    }

    next()
}