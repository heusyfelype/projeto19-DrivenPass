import Joi from "joi"

import { SafeNotes } from "@prisma/client";
import { type } from "os";

type safenoteType = Pick<SafeNotes, "note" | "title">


export const safenotesSchema = Joi.object<safenoteType>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
})