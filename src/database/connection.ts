import knex from "knex";
import path from "path";
const dotenv = require("dotenv");

dotenv.config();

const connection = knex({
  // client: "pg",
  // connection: process.env.DB_URL,
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "databse.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;
