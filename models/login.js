const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginSchema = new Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
  access: { type: String, required: false },
});

module.exports = mongoose.model("Login", loginSchema);
