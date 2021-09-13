const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  eventStart: { type: String },
  hrsStart: { type: String },
  eventEnd: { type: String },
  hrsEnd: { type: String },
  eventName: { type: String },
  isImportant: { type: Array },
  isDone: { type: Array },
  eventContent: { type: String },
});

module.exports = mongoose.model("Event", eventSchema);
