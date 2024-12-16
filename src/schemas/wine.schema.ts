import { z } from "zod";

export const wineSchema = z.object({
  name: z.string().min(2).max(15),
  region: z.string().min(2).max(15),
});

export type Wine = z.infer<typeof wineSchema> & { _id: string };
