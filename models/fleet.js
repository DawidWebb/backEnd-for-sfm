const mongoose = require("mongoose");
const { Schema } = mongoose;

const invoiceNumber = new Schema({
  month: { type: String, required: true },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("InvoiceNumber", invoiceNumber);
