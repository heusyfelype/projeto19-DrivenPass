import Joi from "joi"
import { safenoteType } from "../services/safeNotesService.js"

export const safenotesSchema = Joi.object<safenoteType>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
})