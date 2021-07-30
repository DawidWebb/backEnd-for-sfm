const mongoose = require("mongoose");
const { Schema } = mongoose;

const subcontractorSchema = new Schema({
  carrierName: { type: String },
  adress: { type: String },
  zip: { type: String },
  city: { type: String },
  vatNo: { type: String },
  phone: { type: String },
  mail: { type: String },
  contactP: { type: String },
  www: { type: String },
  additional: { type: String },
  fleetSize: { type: Number },
  kindOf: { type: String },
  topDir1: { type: String },
  topDir2: { type: String },
  topDir3: { type: String },
  fleet: { type: Array },
});

module.exports = mongoose.model("Subcontractor", subcontractorSchema);
