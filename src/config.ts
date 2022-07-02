import * as dotenv from "dotenv";
import { getOptionalNumberEnvVar, getOptionalStringEnvVar } from "./shared/config/utils";
dotenv.config({ path: __dirname+'/.env' });

const serverConfig = {
    port: getOptionalNumberEnvVar(process.env.SERVER_PORT, 3000),
    host: getOptionalStringEnvVar(process.env.SERVER_HOST, '0.0.0.0'),
};

const appConfig = {
    logger: true,
    withSwagger: process.env.NODE_ENV !== 'production',
}

export {
    serverConfig,
    appConfig
}