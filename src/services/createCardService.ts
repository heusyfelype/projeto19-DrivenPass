import { Cards } from "@prisma/client"
import Cryptr from "cryptr";
import { type } from "os"
import { registerCard, selectCardByTitle, selectCardTypeIdBytype } from "../repositories/cardsRepository.js";

export type createCardType = Omit<Cards, "id" | "createdAt">
export type cardType = {
    title: string;
    number: string;
    printedName: string;
    cvc: string;
    expiredDate: string;
    virtual: boolean;
    pass: string;
    type: string;
    userId: number;
} 

export async function createCardService(infos: cardType) {
    const existCardAlready = await selectCardByTitle(infos.title, infos.userId)
    if (existCardAlready) {
        throw { type: "conflict", message: "A card with this title already exists!" }
    }
    const cardTypeId = await selectCardTypeIdBytype(infos.type) 


     const cryptr = new Cryptr('myTotallySecretKey');
     const encryptedPass = cryptr.encrypt(infos.pass);
     const encryptedcvc = cryptr.encrypt(infos.cvc);

    const infosToCreate: createCardType = {
        "number": infos.number,
        "title": infos.title,
        "printedName": infos.printedName,
        "cvc": encryptedcvc,
        "expiredDate": infos.expiredDate,
        "virtual": infos.virtual,
        "pass": encryptedPass,
        "typeId": cardTypeId,
        "userId": infos.userId,
    }
    await registerCard(infosToCreate)
}
