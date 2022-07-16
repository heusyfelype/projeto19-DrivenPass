import { NextFunction, Request, Response } from "express";

export function handleError(error, req:Request, res:Response, next:NextFunction){
    console.log("caiu no handle error. Erro: ", error)

    if(error.type === "joi"){
        return res.status(422).send(error.error)
    }
    if(error.type === "conflict"){
        return res.status(409).send("Email já em uso!")
    }

    return res.sendStatus(500);
}