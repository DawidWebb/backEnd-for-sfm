const Event = require("../models/event");

exports.getEvents = (request, response, next) => {
  try {
    const findEvents = Event.find();
    findEvents.exec((err, data) => {
      response.status(200).json({
        data,
      });
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /events",
    });
  }
};

// get one order from DB by search
// exports.getDescribe = (request, response, next) => {
//   try {
//     const value = request.params.value;

//     const findDescribe = Describe.find({
//       describeName: new RegExp(value, "i"),
//     });
//     findDescribe.exec((err, data) => {
//       if (data.length === 0 || data === null) {
//         response.status(404).json({
//           message: "Nie ma takiego opisu",
//         });
//         return;
//       }
//       response.status(200).json({
//         data,
//       });
//     });
//   } catch (error) {
//     response.status(500).json({
//       error,
//       message:
//         "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /describe/search",
//     });
//   }
// };

// // add client to DB from addClientFrom
exports.postEvent = (request, response, next) => {
  try {
    const body = request.body;

    const newEvent = new Event(body);

    newEvent.save((err, data) => {
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
        "Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /events/add",
    });
  }
};

exports.putEvent = (request, response, next) => {
  try {
    const {
      _id,
      eventStart,
      hrsStart,
      eventEnd,
      hrsEnd,
      eventName,
      isImportant,
      isDone,
      eventContent,
    } = request.body;

    const filter = _id;
    const update = {
      eventStart,
      hrsStart,
      eventEnd,
      hrsEnd,
      eventName,
      isImportant,
      isDone,
      eventContent,
    };

    Event.findByIdAndUpdate(filter, update, { new: true }, (err, data) => {
      if (err) {
        response.status(404).json({
          message: "coś poszło nie tak przy EventUpdate",
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
        "Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /event",
    });
  }
};

exports.deleteEvent = (request, response, next) => {
  try {
    Event.findByIdAndDelete(request.params.id, (err) => {
      if (err) {
        response.status(404).json({
          message: "Nie znaleziono zdrzenia o podanym ID",
        });
        return;
      }
      response.status(200).end();
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /orders/:id",
    });
  }
};
