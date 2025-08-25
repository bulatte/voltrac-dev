import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "de", "nl"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});
