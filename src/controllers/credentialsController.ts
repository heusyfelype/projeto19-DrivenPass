import { Request, Response } from "express";
import { getCredentialByUserId } from "../repositories/credentialsRepository.js";
import { createCredentialService } from "../services/credentialsService.js";


export async function createCredentialController(req:Request, res:Response) {
    const credentialInfos = req.body;

    await createCredentialService(credentialInfos)

    res.sendStatus(201)
    
}

export async function getCredentailController(req:Request, res:Response) {
    const userId = +req.headers.id
    const credentials = await getCredentialByUserId(userId)

    res.send(credentials)
}