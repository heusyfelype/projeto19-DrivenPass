import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  function validateSchema(req: Request, res: Response, next: NextFunction) {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw { type: "joi", error: error.details.map(detail => detail.message) }
    }
    next();
  };

  return validateSchema
}