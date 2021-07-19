const { v4: uuid } = require("uuid");
const Login = require("../models/login");

// Dodanie do bazy - opcjonalne
//   const login = "";
//   const password = "";
//   new Login({ login, password }).save();

exports.addUser = (request, response, next) => {
  try {
    const { login, password, access } = request.body;
    Login.find({ login }, (err, data) => {
      if (data.length) {
        response.status(404).json({
          status: 404,
          message: "Użytkownik o podanym loginie już istnieje",
        });
      } else {
        new Login({ login, password, access }).save();
        response.status(200).json({
          status: 200,
        });
      }
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Coś poszło nie tak, przy metodzie POST w endpointcie /users",
    });
  }
};

exports.postUser = (request, response, next) => {
  try {
    const { login, password, access } = request.body;
    Login.find({ login }, (err, data) => {
      if (!data.length) {
        response.status(404).json({
          message: "Użytkownik o podanym loginie nie istnieje",
        });
        return;
      } else {
        if (data[0].password !== password) {
          response.status(404).json({
            message: "Login lub hasło się nie zgadza",
          });
          return;
        } else {
          const user = {
            loginId: uuid(),
            user: data[0].login,
            access: data[0].access,
          };
          response.status(200).json({
            status: 200,
            user,
          });
        }
      }
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /users",
    });
  }
};
