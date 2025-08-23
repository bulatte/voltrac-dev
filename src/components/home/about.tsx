import { getTranslations } from "next-intl/server";
import Container from "../common/container";
import AboutTabs from "./about-tabs";
import Image from "next/image";
import AboutStats from "./about-stats";

const About = async () => {
  const t = await getTranslations("home.about");

  return (
    <div className="border-b border-b-white-25">
      <Container>
        <div className="px-[var(--cxp)] pb-20 pt-48 flex flex-col gap-20">
          <h2 className="text-title-l">{t("title")}</h2>
          <div className="relative flex flex-col overflow-hidden border border-white">
            <AboutTabs />
            <div className="pt-40 px-10 pb-10 mb-24 flex justify-center [background-image:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.25),rgba(255,255,255,0.25)_1px,transparent_1px,transparent_3.4375rem)] ">
              <Image
                className="-mb-12"
                src="/images/thor-preview.webp"
                alt=""
                width={745}
                height={333}
              />
            </div>
          </div>
          <AboutStats />
        </div>
      </Container>
    </div>
  );
};

export default About;
