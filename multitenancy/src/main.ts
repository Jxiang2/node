import { bootstrap } from "./server";

async function main() {
  const app = await bootstrap();

  await app.listen({
    port: 8080,
  });

  console.log("Hello world!!!!!");
}

main();
