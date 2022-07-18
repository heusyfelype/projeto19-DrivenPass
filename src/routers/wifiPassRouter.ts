import { Router } from "express";
import { createWifiPassController, deleteWifiPassController, getUniqueWifiPassController, getWifiPassesController } from "../controllers/wifiPassController.js";
import { validToken } from "../middlewares/authTokenMiddleare.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { wifiPassSchema } from "../schemas/wifiPassSchema.js";

const wifiPassRouter = Router();

wifiPassRouter.post("/wifipass", validToken, validateSchemaMiddleware(wifiPassSchema), createWifiPassController)
wifiPassRouter.get("/wifipasses", validToken, getWifiPassesController)
wifiPassRouter.get("/wifipass/:id", validToken, getUniqueWifiPassController)
wifiPassRouter.delete("/wifipass/:id", validToken, deleteWifiPassController)


export default wifiPassRouter