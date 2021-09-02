const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  eventName: { type: String },
  eventDate: { type: Number },
  eventStartHrs: { type: String },
  eventEndHrs: { type: String },
  eventContent: { type: String },
});

module.exports = mongoose.model("Event", eventSchema);
