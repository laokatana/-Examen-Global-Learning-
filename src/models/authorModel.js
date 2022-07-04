const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorModel = new Schema({
  authorName: { type: String, required: true, minLength: 3, maxLength: 30 },
  books: { type: String, required: true, minLength: 3, maxLength: 30 },
  birth: { type: Number, required: true, unique: true },
  subject: { type: String, required: true, minLength: 3, maxLength: 30 },
});

module.exports = mongoose.model("Author", authorModel);
