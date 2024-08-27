// config/config.js
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5050,
  databaseUrl: process.env.DATABASE_URL,
  secretKey: process.env.SECRET_KEY,
};
