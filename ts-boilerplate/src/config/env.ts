import zenv from "zennv";
import { z } from "zod";

export const env = zenv({
  dotenv: true,
  schema: z.object({
    PORT: z.number().default(process.env.PORT),
    HOST: z.string().default(process.env.HOST),
  }),
});
