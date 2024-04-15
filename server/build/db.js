"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const env_1 = require("./env");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    host: typeof env_1.env.DB_HOST !== "undefined" ? env_1.env.DB_HOST : "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    entities: [],
    logging: ["error"],
});
