import HttpError from "../helpers/HttpError.js";

export const checkExtension = (req, res, next) => {
    const EXTENSIONS = ["doc", "txt", "rtf", "jpeg", "png"];
    const { filename } = req.body;
    const { dynamicFilename } = req.params;

    let fileExt = null;

    dynamicFilename
        ? (fileExt = dynamicFilename.split(".").pop().toLowerCase())
        : (fileExt = filename.split(".").pop().toLowerCase());

    const result = EXTENSIONS.includes(fileExt);

    if (!result) {
        next(HttpError(400, `Sorry this app doesn't support file with ${fileExt} extension`));
        return;
    }
    next();
};
