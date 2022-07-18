import { Credentials } from "@prisma/client";
import { type } from "os";
import { createUrl, deleteCredential, findUrl, registerCredential, selectCredentialById, selectCredentialByTitle } from "../repositories/credentialsRepository.js";
import Cryptr from "cryptr";

export type credentialType = {
    userName: string;
    pass: string;
    userId: number;
    title: string;
    url: string;
}

export type credentialTypePrisma = Omit<Credentials, "id" | "createdAt">

export async function createCredentialService(infos: credentialType) {
    const existCredentialAlready = await selectCredentialByTitle(infos.title)
    if (existCredentialAlready) {
        throw { type: "conflict", message: "A credential with this title already exists!" }
    }

    let existUrl = await findUrl(infos.url)
    if (!existUrl) {
        existUrl = await createUrl(infos.url)
    }
    console.log("existUrl:", existUrl)

    const cryptr = new Cryptr('myTotallySecretKey');
    const encryptedPass = cryptr.encrypt(infos.pass)

    const infosToCreate: credentialTypePrisma = {
        userName: infos.userName,
        pass: encryptedPass,
        userId: infos.userId,
        title: infos.title,
        urlId: existUrl.id
    }
    await registerCredential(infosToCreate)
}


export async function deleteCredentialService(credentialId: number, userId: number) {
    const credentialSelected = await selectCredentialById(credentialId)
    if (!credentialSelected) {
        throw { "type": "unprocessable entity", message: "Unable to locate credential" }

    }
    if (credentialSelected.userId !== userId) {
        throw { "type": "Conflict", message: "You have not authorization for delete this credential!" }
    }

    await deleteCredential(credentialId, userId)
}

export async function selectCredentialService(credentialId: number, userId: number) {
    const credentialSelected = await selectCredentialById(credentialId)
    if (!credentialSelected) {
        throw { "type": "unprocessable entity", message: "Unable to locate credential" }

    }
    if (credentialSelected.userId !== userId) {
        throw { "type": "Conflict", message: "You have not authorization for access this credential!" }
    }
    return credentialSelected
}
