const mongoose = require("mongoose");
const { Schema } = mongoose;

const subcontractorSchema = new Schema({
  subcontractor: { type: Object },
  fleet: { type: Array },
});

module.exports = mongoose.model("Subcontractor", subcontractorSchema);
