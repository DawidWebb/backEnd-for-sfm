const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./_config");
const mongoose = require("mongoose");

//* mongoose conect *//
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const usersRoutes = require("./routes/users");
// const rangeRoutes = require("./routes/range");
const fleetRoutes = require("./routes/fleet");
const subcontractorRoutes = require("./routes/subcontractor");
const eventsRoutes = require("./routes/events");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use("/range", rangeRoutes);
app.use("/subcontractor", subcontractorRoutes);
app.use("/fleet", fleetRoutes);
app.use("/events", eventsRoutes);
app.use("/users", usersRoutes);

app.listen(8000, () => console.log("Server has started"));

// module.exports = app;
