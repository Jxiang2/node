import { bootstrap } from "./server";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const app = await bootstrap();

  await app.listen({
    port: Number(process.env.PORT),
    host: process.env.HOST,
  });
}

main();
