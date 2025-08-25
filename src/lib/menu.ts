import { Messages } from "next-intl";

type MenuItemTKey = keyof Messages["common"]["menu"];

type MenuItem = {
  tkey: MenuItemTKey;
  url: string;
  secondary?: boolean;
};

export const menu: MenuItem[] = [
  {
    tkey: "thor",
    url: "/#thor",
  },
  {
    tkey: "agriculture",
    url: "/#agriculture",
  },
  {
    tkey: "front-line",
    url: "/#front-line",
  },
  {
    tkey: "team",
    url: "/#team",
  },
  {
    tkey: "news",
    url: "/#news",
  },
  {
    tkey: "faq",
    url: "/#faq",
  },
  {
    tkey: "contact",
    url: "/#contact",
  },
  {
    tkey: "pre-order",
    url: "/#pre-order",
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
