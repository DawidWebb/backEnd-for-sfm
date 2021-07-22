const mongoose = require("mongoose");
const { Schema } = mongoose;

const describeSchema = new Schema({
  describeName: { type: String, required: true },
});

module.exports = mongoose.model("Describe", describeSchema);
