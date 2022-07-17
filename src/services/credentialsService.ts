import { Credentials } from "@prisma/client";
import { type } from "os";
import { createUrl, findUrl, registerCredential, selectCredentialByTitle } from "../repositories/credentialsRepository.js";
import Cryptr from "cryptr";

export type credentialType =  {
    userName: string;
    pass: string;
    userId: number;
    title: string;
    url: string;
}

export type credentialTypePrisma = Omit<Credentials, "id" | "createdAt">

export async function createCredentialService(infos:credentialType) {
    const existCredentialAlready = await selectCredentialByTitle(infos.title)
    if(existCredentialAlready){
        throw {type:"conflict", message:"A credential with this title already exists!"}
    }

    let existUrl = await findUrl(infos.url)
    if(!existUrl){
        existUrl = await createUrl(infos.url)
    }

    const cryptr = new Cryptr('myTotallySecretKey');
    const encryptedPass = cryptr.encrypt(infos.pass)

    const infosToCreate : credentialTypePrisma = {
        userName: infos.userName,
        pass: encryptedPass,
        userId: infos.userId,
        title: infos.title,
        urlId: existUrl.id
    }
    await registerCredential(infosToCreate)
}