import express from "express";
import { createServer } from "http";
import { PORT } from "./config/config.js";

const app = express();
const server = createServer(app);

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
