import express, { json } from "express";
import "express-async-errors";

import dotenv from "dotenv";

import router from "./src/Routers/index.js"
import handleErrors from "./src/Middlewares/handleErrors.js";


dotenv.config();
const app = express();

app.use(json());
app.use(router);
app.use(handleErrors);

const PORT = +process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});