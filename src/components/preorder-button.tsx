import { getLocale, getTranslations } from "next-intl/server";

const stripeLinks = {
  en: "https://book.stripe.com/14A9AT75K41Uce9amg0x200?locale=en",
  es: "https://book.stripe.com/4gMaEX0Hmcyqa61dys0x201?locale=es",
  de: "https://book.stripe.com/3cI6oH89O6a2did51W0x203?locale=de",
  nl: "https://book.stripe.com/5kQ00j4XC41Ufql51W0x202?locale=nl",
};

const PreorderButton = async () => {
  const locale = await getLocale();
  const stripeLink = stripeLinks[locale];

  const t = await getTranslations("common.menu");
  return (
    <a
      href={stripeLink}
      target="_blank"
      rel="noreferrer"
      className="text-subtitle-l max-sm:!text-[11px] bg-white text-black h-[calc(100%+2px)] px-3 md:px-5.5 flex items-center gap-2.5 -mt-[2px] -mb-[2px]"
    >
      <div className="size-1 bg-black" />
      {t("pre-order")}
    </a>
  );
};

export default PreorderButton;
