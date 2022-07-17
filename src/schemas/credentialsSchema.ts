import Joi from "joi"
import { credentialType } from "../services/credentialsService.js";


export const createCredentialSchema = Joi.object<credentialType>({
    userName: Joi.string().required(),
    pass: Joi.string().required(),
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    userId: Joi.number().required()
})