const express = require("express");
const rengeController = require("../controllers/range");

const router = express.Router();

router.get("/", describeController.getRanges);
router.get("/:value", describeController.getRange);
router.post("/", describeController.postRange);
router.put("/", describeController.putRange);
router.delete("/:id", describeController.deleteRange);

router.use((request, response) => response.status(404).end());

module.exports = router;
