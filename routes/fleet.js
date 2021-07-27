const express = require("express");
const fleetController = require("../controllers/fleet");

const router = express.Router();

router.put("/", fleetController.putFleet);

router.use((request, response) => response.status(404).end());

module.exports = router;
