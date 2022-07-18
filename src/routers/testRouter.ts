import { Request, Router } from "express";
import test from "node:test";
import { infosReturn } from "../middlewares/infosReturn.js";


const testRouter = Router();

testRouter.post("/test", infosReturn)

export default testRouter
