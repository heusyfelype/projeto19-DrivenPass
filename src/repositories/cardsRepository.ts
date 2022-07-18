import { prisma } from "../config/connectionDB.js"
import { createCardType } from "../services/cardService.js"

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

export async function getCardsByUserId(userId: number) {
    const cards = await prisma.cards.findMany({
        where: {
            userId
        },
        select: {

            id: true,
            type: { select: { name: true } },
            number: true,
            pass: true,
            title: true,
            printedName: true,
            cvc: true,
            expiredDate: true,
            virtual: true
        }
    })
    return cards
}

export async function selectCard(id: number, userId: number) {
    const card = await prisma.cards.findFirst({
        where: {
            id,
            userId
        },
        select: {
            id: true,
            type: { select: { name: true } },
            number: true,
            pass: true,
            title: true,
            printedName: true,
            cvc: true,
            expiredDate: true,
            virtual: true
        }
    })
    return card
}

export async function deleteCard(id: number,) {
    const card = await prisma.cards.delete({ where: { id } })
    return card
}



