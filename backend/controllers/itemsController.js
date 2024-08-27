// controllers/itemsController.js
const items = []; // In-memory storage

exports.getAllItems = (req, res) => {
  res.json(items);
};

exports.addItem = (req, res) => {
  const newItem = req.body;
  if (!newItem.name || !newItem.price) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.deleteItem = (req, res) => {
  const index = req.params.index;
  if (index < 0 || index >= items.length) {
    return res.status(404).json({ error: "Item not found" });
  }
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem);
};
