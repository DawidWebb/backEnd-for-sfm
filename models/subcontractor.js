const mongoose = require("mongoose");
const { Schema } = mongoose;

const subcontractorSchema = new Schema({
  subcontractor: { type: Object },
  fleet: { type: Object },
  price: { type: Object },
  agreements: { type: Object },
});

module.exports = mongoose.model("Subcontractor", subcontractorSchema);
