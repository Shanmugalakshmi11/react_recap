// routes/index.js
const express = require("express");
const router = express.Router();
const { getHomePage } = require("../controllers/indexController");

router.get("/", getHomePage);

module.exports = router;
