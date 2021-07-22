const Invoice = require("../models/subcontractor");

// get all orders from DB
exports.getInvoices = (request, response, next) => {
  try {
    const findInvoives = Invoice.find();
    findInvoives.exec((err, data) => {
      response.status(200).json({
        data,
      });
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /invoices",
    });
  }
};

// get one order from DB by search
exports.getInvoice = (request, response, next) => {
  try {
    const value = request.params.value;

    const findInvoice = Invoice.find({
      invoiceNo: new RegExp(value, "i"),
    });
    findInvoice.exec((err, data) => {
      if (data.length === 0 || data === null) {
        response.status(404).json({
          message: "Nie ma takiej faktury",
        });
        return;
      }
      response.status(200).json({
        data,
      });
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /invoice/search",
    });
  }
};

// // add client to DB from addClientFrom
exports.postInvoice = (request, response, next) => {
  try {
    const body = request.body;

    const newInvoice = new Invoice(body);

    newInvoice.save((err, data) => {
      if (err) {
        console.log(body, err);
        return;
      }
      response.status(201).json({
        data,
      });
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /invoice/add",
    });
  }
};

// edit and change data of order
exports.putInvoice = (request, response, next) => {
  try {
    const { exchange, invoice, client, invoiceNo, id } = request.body;

    const update = {
      invoiceNo,
      exchange,
      invoice,
      client,
    };
    const filter = id;

    Invoice.findByIdAndUpdate(filter, update, { new: true }, (err, data) => {
      if (err) {
        response.status(404).json({
          message: "coś poszło nie tak przy InvoiceUpdate",
        });
        return;
      }
      response.status(202).json({
        data,
      });
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /order",
    });
  }
};

// delete one order by _id
exports.deleteInvoice = (request, response, next) => {
  try {
    Invoice.findByIdAndDelete(request.params.id, (err) => {
      if (err) {
        response.status(404).json({
          message: "Nie znaleziono fv o podanym numerze",
        });
        return;
      }
      response.status(200).end();
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /invoive/:id",
    });
  }
};
