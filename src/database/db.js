const mongoose = require("mongoose");

console.log("Connecting to MongoDB...");

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));
