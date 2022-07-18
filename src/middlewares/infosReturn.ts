import { NextFunction, Request, Response } from "express";


export function infosReturn(req: Request, res: Response, next:NextFunction) {
    return res.send(req.body);

}
