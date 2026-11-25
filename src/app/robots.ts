import type { MetadataRoute } from "next";
import { isDemoMode } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  if (isDemoMode()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
  };
}
