"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var dotenv = require("dotenv");
dotenv.config();
module.exports = {
    client: "pg",
    connection: process.env.DB_URL,
    // client: "sqlite3",
    // connection: {
    //   filename: path.resolve(__dirname, "src", "database", "databse.sqlite"),
    // },
    migrations: {
        directory: path_1.default.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
};
