import type { MetadataRoute } from "next";
import { DEMO_MODE } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  if (DEMO_MODE) {
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
