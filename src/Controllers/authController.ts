import { Request, Response } from "express";
import { registerUserService, userType } from "../Services/authService.js";

export async function registerUserController(req:Request, res:Response) {

    console.log("está vindo até aqui")
    const infos : userType = req.body

    await registerUserService(infos)
    
    res.sendStatus(201);
}