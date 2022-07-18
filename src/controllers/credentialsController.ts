import { Request, Response } from "express";
import { getCredentialByUserId, selectCredentialById } from "../repositories/credentialsRepository.js";
import { createCredentialService, deleteCredentialService, selectCredentialService } from "../services/credentialsService.js";


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

export async function getUniqueCredentailController(req:Request, res:Response) {
    const credentialId = +req.params.id
    const userId = +req.headers.id

    const credential = await selectCredentialService(credentialId, userId)

    res.send(credential)
}



export async function deleteCredentialController(req:Request, res:Response) {
    const credentialId = +req.params.id
    const userId = +req.headers.id

    await deleteCredentialService(credentialId, userId)

    res.sendStatus(200)
}