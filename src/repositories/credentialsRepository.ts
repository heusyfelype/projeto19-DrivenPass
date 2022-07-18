import { prisma } from "../config/connectionDB.js";
import { credentialTypePrisma } from "../services/credentialsService.js";

import { Urls } from "@prisma/client";


export async function selectCredentialByTitle(title: string, userId:number) {
    const credential = await prisma.credentials.findFirst({ where: { title, userId } })
    return credential
}

export async function registerCredential(infos: credentialTypePrisma) {
    await prisma.credentials.create({ data: infos })
}

export async function findUrl(url: string) {
    const urlFinded = await prisma.urls.findFirst({ where: { url } })
    return urlFinded
}

export async function createUrl(url: string) {
    const urlCreated = await prisma.urls.create({ data: { url } })
    return urlCreated
}

export async function getCredentialByUserId(userId:number) {
    const allCredentials = await prisma.credentials.findMany({
        where: { 
            userId 
        }, 
        select:{
            id: true,
            userName: true, 
            title:true,
            pass:true,
            url: {select:{url:true}}
        }
    })
    return allCredentials
}

export async function deleteCredential(credentialId: number, userId:number) {
    await prisma.credentials.delete({where: {id:credentialId} })
}

export async function selectCredentialById(id:number, userId:number) {
    const credetial =  await prisma.credentials.findFirst({
        where:{
            id, 
            userId
        }, 
        select:{
            id: true,
            userName: true, 
            title:true,
            pass:true,
            url: {select:{url:true}}
        }
    })
    return credetial
}