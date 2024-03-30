import express from "express";
import { createFile } from "../controllers/filesControllers.js";
import { createFilesSchema } from "../schemas/filesSchemas.js";
import validateBody from "../helpers/validateBody.js";
import { checkExtension } from "../midleWares/checkExtensions.js";

// import {
//   getAllContacts,
//   getOneContact,
//   deleteContact,
//   createContact,
//   updateContact,
// } from "../controllers/contactsControllers.js";

const filesRouter = express.Router();

// contactsRouter.get("/", getAllContacts);
// contactsRouter.get("/:id", getOneContact);
// contactsRouter.delete("/:id", deleteContact);
// contactsRouter.post("/", createContact);
// contactsRouter.put("/:id", updateContact);

filesRouter.post('/', validateBody(createFilesSchema), checkExtension, createFile);

export default filesRouter;
