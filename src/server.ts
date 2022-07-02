import { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import { buildApp, start } from "./app";
import { appConfig } from './config';

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = buildApp(appConfig);

start(app)

