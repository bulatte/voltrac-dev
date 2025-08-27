import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "de", "nl"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
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

    // {
    //   domain: "timerzap.com",
    //   locales: ["en"],
    //   defaultLocale: "en",
    // },
    // {
    //   domain: "es.timerzap.com",
    //   locales: ["es"],
    //   defaultLocale: "es",
    // },
    // {
    //   domain: "de.timerzap.com",
    //   locales: ["de"],
    //   defaultLocale: "de",
    // },
    // {
    //   domain: "nl.timerzap.com",
    //   locales: ["nl"],
    //   defaultLocale: "nl",
    // },
  ],
});
