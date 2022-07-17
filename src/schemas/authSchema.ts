import Joi from "joi";
import { registerUserType } from "../services/authService.js";

export const signupSchema = Joi.object<registerUserType>({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    pass: Joi.string().min(10).required()
})


export const signinSchema = Joi.object<registerUserType>({
    email: Joi.string().email().required(),
    pass: Joi.string().required()
})

