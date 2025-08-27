import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "de", "nl"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "never",
  domains: [
    {
      domain: "timerzap.com",
      locales: ["en"],
      defaultLocale: "en",
    },
    {
      domain: "es.timerzap.com",
      locales: ["es"],
      defaultLocale: "es",
    },
    {
      domain: "de.timerzap.com",
      locales: ["de"],
      defaultLocale: "de",
    },
    {
      domain: "nl.timerzap.com",
      locales: ["nl"],
      defaultLocale: "nl",
    },
  ],
});
