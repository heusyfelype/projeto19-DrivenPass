import { Request, Response } from "express";
import { getWifiPassesByUserId } from "../repositories/wifiPassRepository.js";
import { createWifiPassService, deleteWifiPassService, getWifiPassService } from "../services/wifiPassService.js";



export async function createWifiPassController(req: Request, res: Response) {
    const infos = req.body
    infos.userId = +req.headers.id

    await createWifiPassService(infos)
    res.sendStatus(201)
}

export async function getWifiPassesController(req: Request, res: Response) {
    const userId = +req.headers.id;

    const wifiPasses = await getWifiPassesByUserId(userId)

    res.send(wifiPasses)

}
export async function getUniqueWifiPassController(req: Request, res: Response) {
    const userId = +req.headers.id;
    const wifiPassId = +req.params.id;

    const wifiPass = await getWifiPassService(wifiPassId, userId)

    res.send(wifiPass)
}
export async function deleteWifiPassController(req: Request, res: Response) {
    const userId = +req.headers.id;
    const wifiPassId = +req.params.id;

    await deleteWifiPassService(wifiPassId, userId)

    res.sendStatus(200)
}

