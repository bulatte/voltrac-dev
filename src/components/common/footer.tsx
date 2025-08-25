import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { menu } from "@/lib/menu";
import FooterLogo from "@/components/icons/footer-logo";
import Container from "./container";
import BackToTopButton from "./back-to-top";
import ContactForm from "../contact-form";
import { cn } from "@/lib/utils";

const Footer = async () => {
  const t = await getTranslations("common.menu");

  // background: linear-gradient(180deg, #000 37.98%, #1C1E13 67.79%, #4B5320 100%);

  return (
    <footer className={cn("border-t border-t-white-25 relative")}>
      <div className="bg-gradient-to-b from-black via-[#1C1E13] to-[#4B5320] text-white absolute inset-0" />
      <Container className="relative">
        <div className="px-[var(--cxp)] py-20 flex flex-col gap-40">
          <ContactForm />
          <FooterLogo className="w-full h-auto" />
        </div>
      </Container>
      <Container className="border-t border-t-white-25 relative">
        <div className="px-[var(--cxp)] py-7.5 flex items-end justify-between gap-10">
          <nav className="flex flex-wrap gap-x-5">
            {menu.map((item) => (
              <Link
                className={cn(
                  item.secondary ? "!text-green-1" : "text-white",
                  "py-2.5 text-subtitle-s",
                )}
                key={item.tkey}
                href={item.url}
              >
                {t(item.tkey)}
              </Link>
            ))}
          </nav>
          <BackToTopButton />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
