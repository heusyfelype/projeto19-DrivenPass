import { Request, Response } from "express";
import { registerUserService, userType } from "../services/authService.js";

export async function registerUserController(req:Request, res:Response) {

    const infos : userType = req.body
    await registerUserService(infos)

    res.sendStatus(201);
}

//verificar o JWT do projetão