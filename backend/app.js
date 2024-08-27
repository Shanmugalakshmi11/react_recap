// app.js
const express = require("express");
const path = require("path");
const app = express();
const port = 5050; // Set port to 5050

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// In-memory store for items (this will reset on server restart)
let items = [];

// Route to serve the main HTML page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Item List</title>
      <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
      <header>
        <h1>Item List</h1>
      </header>
      <div class="container">
        <form action="/add-item" method="POST">
          <input type="text" name="item" required>
          <button type="submit">Add Item</button>
        </form>
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <script src="/js/app.js"></script>
    </body>
    </html>
  `);
});

// Route to handle POST requests for adding items
app.post("/add-item", (req, res) => {
  const newItem = req.body.item;
  if (newItem) {
    items.push(newItem);
  }
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
