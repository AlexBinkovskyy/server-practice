import HttpError from "../helpers/HttpError.js";

export const checkExtension = (req, res, next) => {
  const EXTENSIONS = ["doc", "txt", "rtf", "jpeg", "png"];
  const { filename } = req.body;

  const fileExt = filename.split(".").pop();
  const result = EXTENSIONS.includes(fileExt);
  if (!result) {
    next(
      HttpError(
        400,
        `Sorry this app doesn't support file with ${fileExt} extension`
      )
    );
    return;
  }
  next();
};
