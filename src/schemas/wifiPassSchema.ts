import Joi from "joi"

import { WifiPasses } from "@prisma/client"
import { type } from "os"

export type wifiPassType = Pick<WifiPasses, "name" | "pass" | "title" >

export const wifiPassSchema = Joi.object<wifiPassType>({
    name: Joi.string().required(),
    pass: Joi.string().required(),
    title: Joi.string().required(),
})