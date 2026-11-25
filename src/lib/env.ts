import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_DEMO_MODE: z
    .string()
    .default("true")
    .transform((v) => v !== "false"),
  NEXT_PUBLIC_SHOW_PLACEHOLDER_CAPTIONS: z
    .string()
    .default("true")
    .transform((v) => v !== "false"),
  NEXT_PUBLIC_MAPS_EMBED_URL: z.string().optional().default(""),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_DEMO_MODE: process.env.NEXT_PUBLIC_DEMO_MODE,
  NEXT_PUBLIC_SHOW_PLACEHOLDER_CAPTIONS: process.env.NEXT_PUBLIC_SHOW_PLACEHOLDER_CAPTIONS,
  NEXT_PUBLIC_MAPS_EMBED_URL: process.env.NEXT_PUBLIC_MAPS_EMBED_URL,
});

export function isDemoMode(): boolean {
  return clientEnv.NEXT_PUBLIC_DEMO_MODE;
}
