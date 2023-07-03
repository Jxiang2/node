import fastify from "fastify";
import { logger } from "./config/logger";

export async function bootstrap() {
  const app = fastify({
    logger,
  });

  // register plugins

  // register routes

  return app;
}
