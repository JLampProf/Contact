import express from "express";
import { contactUpload } from "../../controllers/contactController.js";

export const contactsRouter = express.Router();

contactsRouter.post("/", contactUpload);
