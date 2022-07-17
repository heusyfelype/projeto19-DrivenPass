import { prisma } from "../config/connectionDB.js";
import { credentialTypePrisma } from "../services/credentialsService.js";

import { Urls } from "@prisma/client";


export async function selectCredentialByTitle(title: string) {
    const credential = await prisma.credentials.findFirst({ where: { title } })
    return credential
}

export async function registerCredential(infos: credentialTypePrisma) {
    const credential = await prisma.credentials.create({ data: infos })
}

export async function findUrl(url: string) {
    const urlFinded = await prisma.urls.findFirst({ where: { url } })
    return urlFinded
}

export async function createUrl(url: string) {
    const urlCreated = await prisma.urls.create({ data: { url } })
    return urlCreated
}