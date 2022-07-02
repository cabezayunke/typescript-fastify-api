import { FastifyInstance } from "fastify";
import getUser from "./controller/getUser";

export default async(app: FastifyInstance): Promise<void[]> => Promise.all([
    getUser(app),
])