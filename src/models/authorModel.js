const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorModel = new Schema({
  authorName: { type: String, required: true, minLength: 3, maxLength: 30 },
  books: { type: String, required: true, minLength: 3, maxLength: 30 },
  publicationDate: { type: Number, required: true, },
  subject: { type: String, required: true, minLength: 3, maxLength: 30 },
});

module.exports = mongoose.model("Author", authorModel);


/**authorName: Joi.string().min(3).max(30).trim().required(),
  books: Joi.string().min(3).max(30).required(),
  publicationDate: Joi.number().required(),
  subject: Joi.string().required(),
}); */