const subcontractorSchema = require("../models/subcontractor");

// get all orders from DB
// exports.getSubcontractors = (request, response, next) => {
//   try {
//     const findInvoiceNumber = InvoiceNumber.find();
//     findInvoiceNumber.exec((err, data) => {
//       response.status(200).json({
//         data,
//       });
//     });
//   } catch (error) {
//     response.status(500).json({
//       error,
//       message:
//         "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /invoiceNumber",
//     });
//   }
// };

// // add subcontractor to DB
exports.postSubcontractor = (request, response, next) => {
  try {
    const body = request.body;

    const newSubcontractor = new subcontractorSchema(body);

    newSubcontractor.save((err, data) => {
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
        "Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /subcontractorSchema/add",
    });
  }
};

// edit and change data of Subcontractor
exports.putSubcontractor = (request, response, next) => {
  try {
    const { _id, subcontractor, fleet, price, agreements } = request.body;

    const filter = _id;
    const update = {
      subcontractor,
    };

    subcontractorSchema.findByIdAndUpdate(
      filter,
      update,
      { new: true },
      (err, data) => {
        if (err) {
          response.status(404).json({
            message: "coś poszło nie tak przy putSubcontractor",
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
        "Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /subcontractor",
    });
  }
};
// delete subcontractor
exports.deleteSubcontractor = (request, response, next) => {
  try {
    subcontractorSchema.findByIdAndDelete(request.params.id, (err) => {
      if (err) {
        response.status(404).json({
          message: "Nie przewoźnika fv o podanym numerze",
        });
        return;
      }
      response.status(200).end();
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /subcontractor/:id",
    });
  }
};
