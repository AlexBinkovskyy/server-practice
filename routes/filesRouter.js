import express from "express";
import {
  createFile,
  getFileInfo,
  getFiles,
} from "../controllers/filesControllers.js";
import { createFilesSchema } from "../schemas/filesSchemas.js";
import validateBody from "../helpers/validateBody.js";
import { checkExtension } from "../midleWares/checkExtensions.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFilesSchema),
  checkExtension,
  createFile
);

filesRouter.get("/", getFiles);

filesRouter.get("/:dynamicFilename", checkExtension, getFileInfo);

export default filesRouter;
