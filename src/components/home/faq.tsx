import Container from "@/components/common/container";
import Accordion from "../common/accordion";
import { NestedKey } from "@/types/common";
import { Messages } from "next-intl";
import { getTranslations } from "next-intl/server";

type FaqKey = NestedKey<Messages["home"]["faq"]>;

const faqKeys: FaqKey[] = [
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
    <div className="border-t border-t-white-25">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-start justify-between px-[var(--cxp)] py-20 ">
          <h2 className="text-subtitle-l">FAQ</h2>
          <Accordion className="lg:max-w-178 -my-10" items={items} />
        </div>
      </Container>
    </div>
  );
};

export default Faq;
