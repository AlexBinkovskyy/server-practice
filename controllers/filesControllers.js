import fs from "fs/promises";
import path from "path";
import HttpError from "../helpers/HttpError.js";

const folderPath = path.resolve("./files");

export const createFile = async (req, res, next) => {
  const { filename, content } = req.body;
  const filePath = path.resolve("./files", filename);
  try {
    await fs.writeFile(filePath, content, "utf8");
    res.status(201).json({ message: "File created success" });
  } catch (err) {
    next(err);
  }
};

export const getFiles = async (_, res, next) => {
  try {
    const result = await fs.readdir(folderPath);
    if (!result.length) {
      throw HttpError("404", "Nothing was found");
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getFileInfo = async (req, res, next) => {
  try {
    const { filename } = req.params;

    const resultFolder = await fs.readdir(folderPath);
    if (!resultFolder.includes(filename)) {
      throw HttpError("404", "File is not found");
    }
    const filePath = path.resolve("./files", filename);
    const resultFile = await fs.readFile(filePath, "utf8");
    res.json({ content: resultFile });
  } catch (err) {
    next(err);
  }
};
