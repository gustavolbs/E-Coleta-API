"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var path_1 = __importDefault(require("path"));
var dotenv = require("dotenv");
dotenv.config();
var connection = knex_1.default({
    // client: "pg",
    // connection: process.env.DB_URL,
    client: "sqlite3",
    connection: {
        filename: path_1.default.resolve(__dirname, "databse.sqlite"),
    },
    useNullAsDefault: true,
});
exports.default = connection;
