"use client";

import { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";

const pad = (num: number) => num.toString().padStart(2, "0");

const SlideshowCounter = ({
  index,
  total,
}: {
  index: number;
  total: number;
}) => {
  const isMounted = useRef(false);
  const [{ start, current }, setIndexes] = useState({
    start: 0,
    current: 0,
  });

  useEffect(() => {
    setIndexes((p) => {
      if (!isMounted.current) {
        isMounted.current = true;
        return p;
      }

      let s = p.current + 1;

      // loop to first
      if (index === 0 && p.current === total - 1) {
        s = total;
      }
      // loop to last
      else if (index === total - 1 && p.current === 0) {
        s = 1;
      }

      const n = {
        start: s,
        current: index,
      };

      return n;
    });
  }, [index, total]);

  return (
    <div className="text-subtitle-l flex gap-2.5 md:gap-10 [&_.slot-counter-item-number]:w-2.25">
      <SlotCounter
        value={pad(current + 1)}
        animateUnchanged={false}
        duration={0.3}
        dummyCharacterCount={1}
        startValue={pad(start)}
        animateOnVisible
      />
      <span>/</span>
      <span>{pad(total)}</span>
    </div>
  );
};

export default SlideshowCounter;
