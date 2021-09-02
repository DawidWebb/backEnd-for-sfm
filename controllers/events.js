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

// edit and change data of order
// exports.putDescribe = (request, response, next) => {
//   try {
//     const {
//       carrierAdress,
//       carrierName,
//       carrierVatNo,
//       clientAdress,
//       clientName,
//       clientVatNo,
//       orderAdr,
//       orderCarrierCurr,
//       orderCarrierPrice,
//       orderCarrierTerms,
//       orderClientCurr,
//       orderClientPrice,
//       orderClientTerms,
//       orderDriver,
//       orderFix,
//       orderLoadAdress,
//       orderLoadCity,
//       orderLoadCountry,
//       orderLoadDate,
//       orderLoadHrs,
//       orderLoadZip,
//       orderTruck,
//       orderUnloadAdress,
//       orderUnloadCity,
//       orderUnloadCountry,
//       orderUnloadDate,
//       orderUnloadHrs,
//       orderUnloadZip,
//       orderNumber,
//     } = request.body;

//     const filter = orderNumber;
//     const update = {
//       carrierAdress,
//       carrierName,
//       carrierVatNo,
//       clientAdress,
//       clientName,
//       clientVatNo,
//       orderAdr,
//       orderCarrierCurr,
//       orderCarrierPrice,
//       orderCarrierTerms,
//       orderClientCurr,
//       orderClientPrice,
//       orderClientTerms,
//       orderDriver,
//       orderFix,
//       orderLoadAdress,
//       orderLoadCity,
//       orderLoadCountry,
//       orderLoadDate,
//       orderLoadHrs,
//       orderLoadZip,
//       orderTruck,
//       orderUnloadAdress,
//       orderUnloadCity,
//       orderUnloadCountry,
//       orderUnloadDate,
//       orderUnloadHrs,
//       orderUnloadZip,
//     };

//     Order.findByIdAndUpdate(filter, update, { new: true }, (err, data) => {
//       if (err) {
//         response.status(404).json({
//           message: "coś poszło nie tak przy OrderUpdate",
//         });
//         return;
//       }
//       response.status(202).json({
//         data,
//       });
//     });
//   } catch (error) {
//     response.status(500).json({
//       error,
//       message:
//         "Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /order",
//     });
//   }
// };

// delete one order by _id
// exports.deleteDescribe = (request, response, next) => {
//   try {
//     Order.findByIdAndDelete(request.params.id, (err) => {
//       if (err) {
//         response.status(404).json({
//           message: "Nie znaleziono zlecenia o podanym id",
//         });
//         return;
//       }
//       response.status(200).end();
//     });
//   } catch (error) {
//     response.status(500).json({
//       error,
//       message:
//         "Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /orders/:id",
//     });
//   }
// };
