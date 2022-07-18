import { Request, Response } from "express";
import { getWifiPassesByUserId } from "../repositories/wifiPassRepository.js";
import { createWifiPassService, deleteWifiPassService, getWifiPassService, wifiPassTypePrisma } from "../services/wifiPassService.js";



export async function createWifiPassController(req: Request, res: Response) {
    const infos : wifiPassTypePrisma = req.body
    infos.userId = +res.locals.userData.data.userId

    await createWifiPassService(infos)
    res.sendStatus(201)
}

export async function getWifiPassesController(req: Request, res: Response) {
    const userId = +res.locals.userData.data.userId;

    const wifiPasses = await getWifiPassesByUserId(userId)

    res.send(wifiPasses)

}
export async function getUniqueWifiPassController(req: Request, res: Response) {
    const userId = +res.locals.userData.data.userId;
    const wifiPassId = +req.params.id;

    const wifiPass = await getWifiPassService(wifiPassId, userId)

    res.send(wifiPass)
}
export async function deleteWifiPassController(req: Request, res: Response) {
    const userId = +res.locals.userData.data.userId;
    const wifiPassId = +req.params.id;

    await deleteWifiPassService(wifiPassId, userId)

    res.sendStatus(200)
}

