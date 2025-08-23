import Logo from "@/components/icons/logo";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/common/lang-switcher";

const Header = () => {
  return (
    <header className="w-full px-10 py-5 border-b border-b-white-25">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Logo />
        </Link>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
