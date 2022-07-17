import { NextFunction, Request, Response } from "express";

export function handleError(error, req:Request, res:Response, next:NextFunction){
    console.log("caiu no handle error. Erro: ", error)

    if(error.type){
        return res.send(error)
    }

    return res.sendStatus(500);
}

//melhorar a função handle error@