import { bootstrap } from "server";

async function main() {
  const app = await bootstrap();

  await app.listen({
    port: Number(process.env.PORT),
    host: process.env.HOST,
  });
}

main();
