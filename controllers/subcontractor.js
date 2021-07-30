const subcontractorSchema = require("../models/subcontractor");

// get all subcontractors from DB
exports.getSubcontractors = (request, response, next) => {
  try {
    const findSubcontractors = subcontractorSchema.find();
    findSubcontractors.exec((err, data) => {
      response.status(200).json({
        data,
      });
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /getSubcontractors",
    });
  }
};

// get one subcontractor
exports.getSubcontractor = (request, response, next) => {
  try {
    const search = request.params.search;
    const item = request.params.item;
    if (search === "vatNo") {
      const findSubcontractor = subcontractorSchema.find({
        vatNo: new RegExp(item, "i"),
      });
      findSubcontractor.exec((err, data) => {
        if (data.length === 0 || data === null) {
          response.status(404).json({
            message: "Nie znaleziono przewoźnika",
          });
          return;
        }
        response.status(200).json({
          data,
        });
      });
    } else {
      const findSubcontractor = subcontractorSchema.find({
        carrierName: new RegExp(item, "i"),
      });
      findSubcontractor.exec((err, data) => {
        if (data.length === 0 || data === null) {
          response.status(404).json({
            message: "Nie znaleziono przewoźnika",
          });
          return;
        }
        response.status(200).json({
          data,
        });
      });
    }
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /getSubcontractor",
    });
  }
};

// add subcontractor to DB
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
    const {
      _id,
      carrierName,
      adress,
      zip,
      city,
      vatNo,
      phone,
      mail,
      contactP,
      www,
      additional,
      fleetSize,
      kindOf,
      topDir1,
      topDir2,
      topDir3,
    } = request.body;

    const filter = _id;
    const update = {
      carrierName,
      adress,
      zip,
      city,
      vatNo,
      phone,
      mail,
      contactP,
      www,
      additional,
      fleetSize,
      kindOf,
      topDir1,
      topDir2,
      topDir3,
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
          message: "Nie ma przewoźnika do usunięcia",
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
