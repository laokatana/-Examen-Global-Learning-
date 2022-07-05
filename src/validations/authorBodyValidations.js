const Joi = require("joi");

const autorBodySchema = Joi.object({
  authorName: Joi.string().min(3).max(30).trim().required(),
  books: Joi.string().min(3).max(30).required(),
  publicationDate: Joi.number().required(),
  subject: Joi.string().required(),
});

module.exports = autorBodySchema;
