"use client";

import BackToTop from "@/components/icons/back-to-top";
import { useTranslations } from "next-intl";

const BackToTopButton = () => {
  const t = useTranslations("common.footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="flex items-center gap-2 cursor-pointer py-2.5 text-right"
      onClick={scrollToTop}
    >
      <BackToTop className="size-3.25 text-green-1" />
      <span className="text-subtitle-s whitespace-nowrap">
        {t("back-to-top")}
      </span>
    </button>
  );
};

export default BackToTopButton;
