const Joi = require("joi");

const schema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).trim().required(),
  lastName: Joi.string().alphanum().min(3).max(30).trim().required(),
  username: Joi.string().min(6).max(16).required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  phone: Joi.number().required(),
});

module.exports = schema;

/*
    min() y max() funcionan distinto en number() o string()
    por lo que hay que ver si usar number o string
*/

/*
    password2: Joi.string().required(),

    funcionalidad innecesaria, se dejará al FrontEnd dicha verificación
*/
