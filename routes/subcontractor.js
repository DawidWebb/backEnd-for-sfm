const express = require("express");
const subcontractorController = require("../controllers/subcontractor");

const router = express.Router();

router.get("/", subcontractorController.getSubcontractors);
// router.get("/:value", subcontractorController.getSubcontractor);
router.post("/", subcontractorController.postSubcontractor);
router.put("/", subcontractorController.putSubcontractor);
router.delete("/:id", subcontractorController.deleteSubcontractor);

router.use((request, response) => response.status(404).end());

module.exports = router;
