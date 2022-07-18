import Joi from "joi";
import { wifiPassTypePrisma } from "../services/wifiPassService";


export const wifiPassSchema = Joi.object<wifiPassTypePrisma>({
    name: Joi.string().required(),
    pass: Joi.string().required(),
    title: Joi.string().required(),
})