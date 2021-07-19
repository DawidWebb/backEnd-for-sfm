const express = require("express");
const { postUser, addUser } = require("../controllers/users");

const router = express.Router();

router.post("/", postUser);
router.post("/add", addUser);

router.use((request, response) => response.status(404).end());

module.exports = router;
