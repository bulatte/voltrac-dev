import Image from "next/image";
import Container from "../common/container";
import { getTranslations } from "next-intl/server";
import { NestedKey } from "@/types/common";
import { Messages } from "next-intl";
import { ArrowUpRight } from "lucide-react";

type Position = {
  tkey: NestedKey<Messages["home"]["team"]["open-positions"]>;
  url: string;
};

const positions: Position[] = [
  {
    tkey: "senior-mechanical-engineer",
    url: "https://join.com/companies/voltraceu/14712731-senior-mechanical-aerospace-engineer",
  },
  {
    tkey: "sales-manager-agriculture",
    url: "https://join.com/companies/voltraceu/14706814-sales-manager-agriculture-in-spain",
  },
];

const Team = async () => {
  const t = await getTranslations("home.team");

  return (
    <div className="min-h-svh relative flex flex-col">
      <div className="absolute inset-0">
        <div className="h-svh sticky top-0">
          <Image
            src="/images/join-team.jpg"
            className="object-cover"
            fill
            alt={t("img-alt")}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
      <Container className="relative flex flex-col w-full flex-1 [&>div]:flex-1">
        <div className="py-20 px-[var(--cxp)] flex justify-between min-h-full">
          <h2 className="text-title-xl flex-1 sticky top-36 self-start">
            {t("title")}
          </h2>

          <div className="flex flex-col w-[22.5rem] bg-white/20 backdrop-blur-xs self-start">
            {positions.map((pos, i) => (
              <a
                href={pos.url}
                target="_blank"
                rel="noreferrer noopener"
                key={i}
                className="flex flex-col gap-5 p-10  hover:bg-white group text-white transition-all hover:text-black border-b border-b-white-25 last:border-b-0"
              >
                <div className="flex items-center justify-center gap-2.5">
                  <h3 className="text-title-s">
                    {t(`open-positions.${pos.tkey}.title`)}
                  </h3>
                  <ArrowUpRight className="text-current shrink-0" />
                </div>
                <p className="text-paragraph-s group-hover:text-white-3 transition-colors">
                  {t(`open-positions.${pos.tkey}.description`)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
