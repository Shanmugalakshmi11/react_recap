// models/itemModel.js
// Example for in-memory storage; in a real app, this would interface with a database.
let items = [];

const getItems = () => items;
const addItem = (item) => {
  items.push(item);
  return item;
};
const deleteItem = (index) => items.splice(index, 1);

module.exports = { getItems, addItem, deleteItem };
