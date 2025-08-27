import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "de", "nl"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  domains: [
    {
      domain: "voltrac.eu",
      locales: ["en"],
      defaultLocale: "en",
    },
    {
      domain: "voltrac.es",
      locales: ["es"],
      defaultLocale: "es",
    },
    {
      domain: "voltrac.de",
      locales: ["de"],
      defaultLocale: "de",
    },
    {
      domain: "voltrac.nl",
      locales: ["nl"],
      defaultLocale: "nl",
    },
  ],
});
