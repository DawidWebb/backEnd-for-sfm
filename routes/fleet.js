const express = require("express");
const fleetController = require("../controllers/fleet");

const router = express.Router();

router.get("/", fleetController.getFleet);
router.post("/", fleetController.postFleet);
router.put("/", fleetController.putFleet);
router.delete("/:id", fleetController.deleteFleet);

router.use((request, response) => response.status(404).end());

module.exports = router;
