"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var path_1 = __importDefault(require("path"));
var database = process.env.NODE_ENV !== 'production' ? 'dev_database.sqlite' : 'prod_database.sqlite';
console.log(path_1.default.resolve(__dirname, "..", "..", "database", "sqlite_databases", database));
// Initialize knex.
var knexFeed = knex_1.default({
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, "..", "..", "..", "database", "sqlite_databases", database),
    },
    useNullAsDefault: true
});
exports.default = knexFeed;
