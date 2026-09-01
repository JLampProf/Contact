import express from "express";
import { createServer } from "http";
import cors from "cors";

//config imports
import { PORT } from "./config/config.js";
import { corsOptions } from "./config/config.js";

const app = express();
const server = createServer(app);

//middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
