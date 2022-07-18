import { prisma } from "../config/connectionDB.js";
import { wifiPassTypePrisma } from "../services/wifiPassService.js";


export async function createWifiPass(infos: wifiPassTypePrisma) {
    await prisma.wifiPasses.create({ data: infos })
}

export async function getWifiPassesByUserId(userId: number) {
    const wifiPasses = await prisma.wifiPasses.findMany({ where: { userId }, select: { name: true, pass: true, title: true } })
    return wifiPasses
}

export async function selectWifiPassById(id: number) { 
    const wifiPass = await prisma.wifiPasses.findFirst({where:{id}})
    return wifiPass
}

export async function deleteWifiPass(id:number) {
    await prisma.wifiPasses.delete({where:{id}})
}


