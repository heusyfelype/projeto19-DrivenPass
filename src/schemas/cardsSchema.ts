import Joi, { string } from "joi";

import { Cards } from "@prisma/client";
import { type } from "os";

import { cardType } from "../services/createCardService";

const cardTypes = ["credit", "debit", "both"]
export const cardSchema = Joi.object<cardType>({
    title: Joi.string().required(),
    number: Joi.string().pattern(/^[0-9]{16}$/).required(),
    printedName: Joi.string().min(3).required(),
    cvc: Joi.string().pattern(/^[0-9]{3}$/).required(),
    expiredDate: Joi.string().pattern(/^[0-9]{2}\/[0-9]{2}$/).required(),
    virtual: Joi.boolean().required(),
    pass: Joi.string().required(),
    type: Joi.string().valid(...cardTypes).required()
})

