
import { WifiPasses } from "@prisma/client";
import Cryptr from "cryptr";
import { createWifiPass, deleteWifiPass, selectWifiPassById } from "../repositories/wifiPassRepository.js";

export type wifiPassTypePrisma = Omit<WifiPasses, "id" | "createdAt">

export async function createWifiPassService(infos:wifiPassTypePrisma) {
    const cryptr = new Cryptr('myTotallySecretKey');
    const encryptedPass = cryptr.encrypt(infos.pass)
    infos.pass = encryptedPass
 
    await createWifiPass(infos)
}


export async function getWifiPassService(wifiPassId:number, userId:number) {
    const wifiPass = await selectWifiPassById(wifiPassId)
    if (!wifiPass) {
        throw { "type": "unprocessable entity", message: "Unable to locate wifiPass" }

    }
    if (wifiPass.userId !== userId) {
        throw { "type": "Conflict", message: "You have not authorization for access this wifiPass!" }
    }
    return wifiPass
}

export async function deleteWifiPassService(wifiPassId:number, userId:number) {
    const wifiPass = await selectWifiPassById(wifiPassId)
    if (!wifiPass) {
        throw { "type": "unprocessable entity", message: "Unable to locate wifiPass" }

    }
    if (wifiPass.userId !== userId) {
        throw { "type": "Conflict", message: "You have not authorization for access this wifiPass!" }
    }
    await deleteWifiPass(wifiPassId)
}

