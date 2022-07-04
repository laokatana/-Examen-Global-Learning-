const Joi = require("joi");

const autorSchema = Joi.object({
  authorName: Joi.string().alphanum().min(3).max(30).trim().required(),
  books: Joi.string().alphanum().min(3).max(30).trim().required(),
  birth: Joi.number().required(),
  subject: Joi.string().required(),
});

//const Joi = require("joi");

const paramSchema = Joi.object({
  id: Joi.string().min(24).max(24).required(),
});

const querySchema = Joi.alternatives().try(
  Joi.object({
    authorName: Joi.string().required(),
  }),
  Joi.object({
    books: Joi.string().required(),
  }),
  Joi.object({
    username: Joi.string().required(),
  }),
  Joi.object({})
);

module.exports = paramSchema,autorSchema,querySchema;




//module.exports = 