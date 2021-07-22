const InvoiceNumber = require("../models/fleet");

// get all orders from DB
exports.getInvoiceNumber = (request, response, next) => {
  try {
    const findInvoiceNumber = InvoiceNumber.find();
    findInvoiceNumber.exec((err, data) => {
      response.status(200).json({
        data,
      });
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /invoiceNumber",
    });
  }
};

// // add client to DB from addClientFrom
exports.postInvoiceNumber = (request, response, next) => {
  try {
    const body = request.body;

    const newInvoiceNumber = new InvoiceNumber(body);

    newInvoiceNumber.save((err, data) => {
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
        "Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /invoiceNumber/add",
    });
  }
};

// edit and change data of order
exports.putInvoiceNumber = (request, response, next) => {
  try {
    const { month, number, _id } = request.body;

    const filter = _id;
    const update = {
      month,
      number,
    };

    InvoiceNumber.findByIdAndUpdate(
      filter,
      update,
      { new: true },
      (err, data) => {
        if (err) {
          response.status(404).json({
            message: "coś poszło nie tak przy putInvoiceNumber",
          });
          return;
        }
        response.status(202).json({
          data,
        });
      }
    );
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /invoiceNumber",
    });
  }
};
