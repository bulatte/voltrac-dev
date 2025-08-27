import { Link } from "@/i18n/navigation";

import LanguageSwitcher from "@/components/common/lang-switcher";
import Logo from "@/components/icons/logo";
import PreorderButton from "../preorder-button";
import HeaderMenu from "./header-menu";

const Header = () => {
  return (
    <header className="pointer-events-auto fixed top-0 bg-black z-[90] w-full px-[var(--cxp)] lg:px-10 border-b border-b-white-25">
      <div className="flex items-center justify-between w-full h-15">
        <Link href="/">
          <Logo className="h-auto w-25 md:w-50" />
        </Link>

        <div className="flex items-center h-full gap-5 md:gap-cyp">
          <PreorderButton />
          <div className="flex items-center h-full gap-5 md:gap-10">
            <HeaderMenu />
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
