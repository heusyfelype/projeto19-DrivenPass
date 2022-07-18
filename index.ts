import express from "express";// import "express-async-errors";
import "express-async-errors";
import dotenv from "dotenv";

import { handleError } from "./src/middlewares/handleErrors.js";
import router from "./src/routers/index.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(router);
app.use(handleError);

const PORT = +process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});