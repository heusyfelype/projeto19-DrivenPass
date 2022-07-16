import Joi, { Schema, string } from "joi";
import { userType } from "../services/authService.js";

export const signupSchema = Joi.object<userType>({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    pass: Joi.string().min(10).required()
})