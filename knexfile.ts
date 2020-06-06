import path from "path";
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  // client: "pg",
  // connection: process.env.DB_URL,
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "databse.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
  //
};
