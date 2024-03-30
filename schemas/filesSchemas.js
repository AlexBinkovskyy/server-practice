import Joi from "joi";

export const createFilesSchema = Joi.object({
    filename: Joi.string().required(),
    content: Joi.string().required(),
});
