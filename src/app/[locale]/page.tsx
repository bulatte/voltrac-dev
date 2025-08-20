import { getTranslations, setRequestLocale } from "next-intl/server";
import Cover from "./components/cover";
import { Locale } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import { redirect, usePathname, useRouter } from "next/navigation";

export default async function Home({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("home");

  return (
    <div>
      <header>
        <h1>{t("hello")}</h1>
      </header>
      <main>
        <Cover />
      </main>
      <footer>
        <p>{t("hello")}</p>
      </footer>
    </div>
  );
}
