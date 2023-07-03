import { env } from "./config/env";
import { bootstrap } from "./server";

async function main() {
  const app = await bootstrap();

  await app.listen({
    port: env.PORT,
    host: env.HOST,
  });

  console.log("Hello world!!!");
}

main();
