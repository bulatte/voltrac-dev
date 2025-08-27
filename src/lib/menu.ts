import { faqKeys } from "@/components/home/faq";
import { Messages } from "next-intl";

type MenuItemTKey = keyof Messages["common"]["menu"];

type MenuItem = {
  tkey: MenuItemTKey;
  url: string;
  secondary?: boolean;
};

const hasFaqs = faqKeys.length > 0;

export const menu: MenuItem[] = [
  {
    tkey: "thor",
    url: "/#thor",
  },
  {
    tkey: "agriculture",
    url: "/#agriculture",
  },
  // {
  //   tkey: "front-line",
  //   url: "/#front-line",
  // },
  {
    tkey: "team",
    url: "/#team",
  },
  {
    tkey: "news",
    url: "/#news",
  },

  ...(hasFaqs
    ? ([
        {
          tkey: "faq",
          url: "/#faq",
        },
      ] as const)
    : []),

  {
    tkey: "contact",
    url: "/#contact",
  },
  {
    tkey: "terms-of-service",
    url: "/termsofservice",
    secondary: true,
  },
  {
    tkey: "privacy-policy",
    url: "/privacy",
    secondary: true,
  },
];

export const LINKEDIN_URL = "https://www.linkedin.com/company/voltrac/";
