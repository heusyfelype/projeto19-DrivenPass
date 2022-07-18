import { prisma } from "../config/connectionDB.js"
import { createCardType } from "../services/createCardService.js"

import { CardTypes } from "@prisma/client"



export async function selectCardByTitle(title: string, userId: number) {
    const card = await prisma.cards.findFirst({ where: { title, userId } })
    return card
}

export async function selectCardTypeIdBytype(name: string) {
    const cardType = await prisma.cardTypes.findFirst({ where: { name } })
    return cardType.id
}

export async function registerCard(infos: createCardType) {
    await prisma.cards.create({ data: infos })
}


