import { setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";

import About from "@/components/home/about";
import Agro from "@/components/home/agro";
import Team from "@/components/home/team";
import News from "@/components/home/news";
import Faq from "@/components/home/faq";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <About />
      <Agro />
      <Team />
      <News />
      <Faq />
    </>
  );
}
