const subcontractorSchema = require("../models/subcontractor");

// update truckItems in DB
exports.putFleet = (request, response, next) => {
  try {
    const { id, fleet, price, agreements } = request.body;

    const filter = id;
    const update = {
      fleet,
    };

    subcontractorSchema.findByIdAndUpdate(
      filter,
      update,
      { new: true },
      (err, data) => {
        if (err) {
          response.status(404).json({
            message: "coś poszło nie tak przy putFleet",
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
