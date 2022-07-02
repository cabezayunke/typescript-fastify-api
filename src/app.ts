import fastify, { FastifyInstance, FastifyServerOptions } from "fastify";
import fastifySwagger from "@fastify/swagger";
import UserRoutes from "./users";
import { serverConfig } from "./config";

interface AppParams extends FastifyServerOptions {
  withSwagger?: boolean;
}

export const buildApp = (opts: AppParams = {}): FastifyInstance => {
  const { withSwagger, ...fastifyOpts } = opts;
  const app = fastify(fastifyOpts);

  if (withSwagger) {
    app.register(fastifySwagger, {
        routePrefix: '/docs',
        swagger: {
          info: {
            title: 'Fastify CRUD API',
            description: 'Testing the Fastify swagger API',
            version: '1.0.0'
          },
          host: 'localhost',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json'],
          tags: [
            { name: 'user', description: 'User related end-points' },
          ],
          definitions: {}
        },
        exposeRoute: true
    });
  }

  /*
   * Routes
   */
  app.register(UserRoutes, { prefix: '/v1/users' })

  return app;
};


/**
 * Run the server!
 */
 export const start = async (app: FastifyInstance) => {
    try {
        const server = await app.listen({ port: serverConfig.port, host: serverConfig.host })
        return server;
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
