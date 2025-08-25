"use client";

import { useTranslations } from "next-intl";
import SlotCounter from "react-slot-counter";

const items = [
  {
    stat: (
      <>
        <SlotCounter value={4} animateOnVisible startValue={0} />
        <span>×</span>
        <SlotCounter value={20} animateOnVisible />
      </>
    ),
    suffix: "KW",
    title: "all-wheel-power",
  },
  {
    stat: (
      <>
        <SlotCounter value={8} animateOnVisible startValue={0} />
        <span>–</span>
        <SlotCounter value={20} animateOnVisible startValue={0} />
      </>
    ),
    suffix: "H",
    title: "operational-time",
  },
  {
    stat: <SlotCounter value={4000} animateOnVisible />,
    suffix: "KG",
    title: "cargo-capacity",
  },
] as const;

const AboutStats = () => {
  const t = useTranslations("home.about.stats");

  return (
    <div className="flex items-center gap-8 justify-between [&_.slot-counter]:!flex [&_.slot-counter-item-number]:pr-0.5">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start gap-5 flex-1 max-w-60"
        >
          <div className="flex gap-1.5">
            <div className="text-numerals-m leading-none flex items-end">
              {item.stat}
            </div>
            <span className="text-subtitle-l text-white-25">{item.suffix}</span>
          </div>
          <p className="text-subtitle-m text-right whitespace-pre-line">
            {t(item.title)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
