"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const type_graphql_1 = require("type-graphql");
const db_1 = __importDefault(require("./db"));
const env_1 = require("./env");
const userResolver_1 = __importDefault(require("./resolvers/userResolver"));
const start = async () => {
    await db_1.default.initialize();
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const allowedOrigins = env_1.env.CORS_ALLOWED_ORIGINS.split(",");
    app.use((0, cors_1.default)({
        credentials: true,
        origin: (origin, callback) => {
            if (typeof origin === "undefined" || allowedOrigins.includes(origin))
                return callback(null, true);
            callback(new Error("Not allowed by CORS"));
        },
    }));
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [userResolver_1.default],
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        csrfPrevention: true,
        cache: "bounded",
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
            (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true }),
        ],
        context: ({ req, res }) => {
            return { req, res };
        },
    });
    await server.start();
    server.applyMiddleware({ app, cors: false, path: "/" });
    httpServer.listen({ port: env_1.env.SERVER_PORT }, () => console.log(`🚀 Server ready at ${env_1.env.SERVER_HOST}:${env_1.env.SERVER_PORT}${server.graphqlPath}`));
};
start().catch(console.error);
