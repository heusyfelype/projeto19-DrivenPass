import { Request, Response } from "express";
import { createCredentialService } from "../services/credentialsService.js";


export async function createCredentialController(req:Request, res:Response) {
    const credentialInfos = req.body;

    await createCredentialService(credentialInfos)

    res.sendStatus(201)
    
}