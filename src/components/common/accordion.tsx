"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export type FaqItem = {
  title: string;
  content: string;
};

const Accordion = ({ items }: { items: FaqItem[] }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (activeIndexes.includes(index)) {
      if (activeIndexes.length === 1) return;
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="lg:max-w-140 -my-10">
      {items.map((item, index) => {
        const active = activeIndexes.includes(index);

        return (
          <div
            key={index}
            className="border-b border-b-white-25 last:border-b-0"
          >
            <div
              className={cn(
                "flex items-center gap-2.5 justify-between cursor-pointer pt-10 transition-[padding] duration-500",
                active ? "pb-5" : "pb-10",
              )}
              onClick={() => toggleIndex(index)}
            >
              <h3 className="text-title-s">{item.title}</h3>
              <Plus
                className={cn(
                  "size-5.5 transition-transform duration-800 ease-in-out",
                  active ? "rotate-585" : "rotate-0",
                )}
              />
            </div>

            <div
              className={cn(
                "grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-500",
                active
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden min-h-0">
                <p className="text-paragraph-m text-white-3 mb-10">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
