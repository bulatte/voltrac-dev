import { Messages } from "next-intl";
import { getTranslations } from "next-intl/server";

import Accordion from "@/components/common/accordion";
import Container from "@/components/common/container";
import { NestedKey } from "@/types/common";

type FaqKey = NestedKey<Messages["home"]["faq"]>;

export const faqKeys: FaqKey[] = [
  "question-1",
  "question-2",
  "question-3",
  "question-4",
];

const Faq = async () => {
  const t = await getTranslations("home.faq");

  const items = faqKeys.map((key) => ({
    question: t(`${key}.question`),
    content: t(`${key}.content`),
  }));

  if (!items.length) return null;

  return (
    <div id="faq" className="border-t border-t-white-25">
      <Container>
        <div className="flex flex-col lg:flex-row gap-cyp items-start justify-between px-[var(--cxp)] py-cyp">
          <h2 className="text-subtitle-l">FAQ</h2>
          <Accordion className="lg:max-w-178 -my-10" items={items} />
        </div>
      </Container>
    </div>
  );
};

export default Faq;
