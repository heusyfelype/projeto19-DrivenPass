import { Request, Response } from "express";
import { loginUserType, registerUserService, registerUserType, signInService } from "../services/authService.js";

export async function registerUserController(req:Request, res:Response) {

    const infos : registerUserType = req.body
    await registerUserService(infos)

    res.sendStatus(201);
}

export async function signInController(req:Request, res:Response) {

    const infos : loginUserType = req.body
    const tokenAndUserId = await signInService(infos)

    res.locals.token = tokenAndUserId.token
    res.send(tokenAndUserId); 

}
