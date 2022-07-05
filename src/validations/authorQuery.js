const Joi = require("joi")

const autorQuerySchema = Joi.alternatives().try(
    Joi.object({
      authorName: Joi.string().required(),
    }),
    Joi.object({
      books: Joi.string().required(),
    }),
    Joi.object({
      subject: Joi.string().required(),
    }),
    Joi.object({})
  );

  module.exports = autorQuerySchema;