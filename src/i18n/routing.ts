import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "nl", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en"
});
