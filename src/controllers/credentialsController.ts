import { Request, Response } from "express";
import { getCredentialByUserId } from "../repositories/credentialsRepository.js";
import { createCredentialService, deleteCredentialService } from "../services/credentialsService.js";


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

export async function deleteCredentialController(req:Request, res:Response) {
    const credentialId = +req.params.id
    const userId = +req.headers.id

    await deleteCredentialService(credentialId, userId)

    res.sendStatus(200)
}