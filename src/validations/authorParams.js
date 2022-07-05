const Joi = require('joi')

const autorParamSchema = Joi.object({
    id: Joi.string().min(24).max(24).required(),
  });

  module.exports = autorParamSchema