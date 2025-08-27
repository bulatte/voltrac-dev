"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { LINKEDIN_URL, menu } from "@/lib/menu";
import { Link } from "@/i18n/navigation";
import LinkedinIcon from "../icons/linkedin";
import LanguageSwitcher from "./lang-switcher";

const Cell = ({ className }: { className?: string }) => (
  <div
    className={cn("bg-white size-1 shrink-0 transition-transform", className)}
  />
);

const MenuIcon = () => (
  <div className="relative flex flex-col justify-center w-5 h-3">
    <div className="flex justify-end w-full pr-1 group-hover:pr-3 transition-[padding] duration-300">
      <Cell />
    </div>
    <div className="relative flex justify-between flex-1 h-1 group-hover:mx-2 transition-[margin] duration-300 delay-300 group-hover:delay-0">
      <Cell
        className={cn(
          "absolute transition-transform duration-300",
          "group-hover:translate-x-full group-hover:-translate-y-full group-hover:delay-300",
        )}
      />
      <Cell className="absolute top-1/2 left-1/2 -translate-1/2" />
      <Cell
        className={cn(
          "absolute right-0 transition-transform duration-300",
          "group-hover:-translate-x-full group-hover:translate-y-full group-hover:delay-300",
        )}
      />
    </div>
    <div className="flex justify-start w-full pl-1 group-hover:pl-3 transition-[padding] duration-300">
      <Cell />
    </div>
  </div>
);

const MenuPopup = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (o: boolean) => void;
}) => {
  const t = useTranslations("common.menu");
  const menuItems = menu.filter(({ secondary }) => !secondary);

  return (
    <Sheet open={open}>
      <SheetContent
        className="!max-w-full w-full border-0 shadow-none outline-none"
        aria-describedby={undefined}
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 to-[#4B5320]" />
        <SheetHeader className="pt-20">
          <SheetTitle className="hidden">Voltrac Menu</SheetTitle>
        </SheetHeader>

        <div className="flex justify-between flex-1 px-[var(--cxp)] lg:px-10 pb-10 relative">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-end"
          >
            <LinkedinIcon />
          </a>
          <div className="flex flex-col items-end text-right flex-1">
            <div className="flex mb-auto mt-0 md:hidden">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col items-end mt-auto">
              {menuItems.map((item, i) => (
                <Link
                  className="text-title-m py-2.5"
                  key={i}
                  href={item.url}
                  onClick={() => setOpen(false)}
                >
                  {t(item.tkey)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const HeaderMenu = () => {
  const t = useTranslations("common.menu");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center h-full gap-2.5 cursor-pointer group"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="text-subtitle-l hidden sm:flex">{t("menu")}</span>
        <MenuIcon />
      </div>
      <MenuPopup open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
};

export default HeaderMenu;
