"use client";

import { Messages, useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { NestedKey } from "@/types/common";

// linked to translation objects within "home.about.benefits"
type BenefitsKey = NestedKey<Messages["home"]["about"]["benefits"]>;
const benefitsKeys: BenefitsKey[] = [
  "reliable",
  "cost-efficient",
  "non-stop",
  "compatible",
];

const AboutTabs = () => {
  const [activeItem, setActiveItem] = useState(0);
  const t = useTranslations("home.about.benefits");

  return (
    <div className="flex border-b border-white flex-col lg:flex-row">
      {benefitsKeys.map((tkey, index) => {
        const active = index === activeItem;

        return (
          <div
            key={index}
            className={cn(
              "cursor-pointer [transition:background-color_0.3s,flex-grow_0.8s,color_0.3s] !delay-300 lg:max-w-96 border-b last:border-b-0 lg:border-b-0 lg:border-l border-white first:border-l-0 flex items-center relative",
              active ? "flex-2 bg-white text-black" : "flex-1",
            )}
            onClick={() => setActiveItem(index)}
          >
            <div className="flex lg:items-center flex-col">
              <h3 className="p-5 text-subtitle-l lg:max-w-45 whitespace-pre-line">
                {t(`${tkey}.title`)}
              </h3>
              <div
                className={cn(
                  "grid grid-rows-[0fr] transition:[grid-template-rows] duration-500 lg:absolute top-full bg-white w-full left-0 lg:w-[calc(100%+2px)] lg:left-[-1px]",
                  active ? "grid-rows-[1fr] delay-800" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="text-title-s transition-opacity duration-300 p-5">
                    {t(`${tkey}.text`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutTabs;
