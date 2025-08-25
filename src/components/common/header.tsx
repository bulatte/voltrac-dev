import { Link } from "@/i18n/navigation";

import LanguageSwitcher from "@/components/common/lang-switcher";
import Logo from "@/components/icons/logo";

const Header = () => {
  return (
    <header className="sticky top-0 bg-black z-10 w-full px-[var(--cxp)] lg:px-10 py-5 border-b border-b-white-25">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Logo className="w-50 h-auto" />
        </Link>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
