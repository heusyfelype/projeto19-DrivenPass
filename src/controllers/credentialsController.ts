import { Request, Response } from "express";
import { getCredentialByUserId, selectCredentialById } from "../repositories/credentialsRepository.js";
import { createCredentialService, credentialType, deleteCredentialService, selectCredentialService } from "../services/credentialsService.js";


export async function createCredentialController(req:Request, res:Response) {
    const credentialInfos: credentialType = req.body;
    credentialInfos.userId = +res.locals.userData.data.userId

    await createCredentialService(credentialInfos)

    res.sendStatus(201) 
}

export async function getCredentailController(req:Request, res:Response) {
    const userId = +res.locals.userData.data.userId
    const credentials = await getCredentialByUserId(userId)

    res.send(credentials)
}

export async function getUniqueCredentailController(req:Request, res:Response) {
    const credentialId = +req.params.id
    const userId = +res.locals.userData.data.userId

    const credential = await selectCredentialService(credentialId, userId)

    res.send(credential)
}



export async function deleteCredentialController(req:Request, res:Response) {
    const credentialId = +req.params.id
    const userId = +res.locals.userData.data.userId

    await deleteCredentialService(credentialId, userId)

    res.sendStatus(200)
}