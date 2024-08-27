// routes/items.js
const express = require("express");
const router = express.Router();
const {
  getAllItems,
  addItem,
  deleteItem,
} = require("../controllers/itemsController");

router.get("/", getAllItems);
router.post("/", addItem);
router.delete("/:index", deleteItem);

module.exports = router;
