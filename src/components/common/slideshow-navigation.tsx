"use client";

import SlideshowArrow from "../icons/slideshow-arrow";

const SlideshowNavigation = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => (
  <div className="flex items-center has-[.swiper-prev:hover]:[&>.swiper-line]:-translate-x-2.5 has-[.swiper-next:hover]:[&>.swiper-line]:translate-x-2.5">
    <SlideshowArrow
      className="swiper-prev cursor-pointer p-2 w-auto h-auto"
      onClick={onPrev}
    />
    <div className="swiper-line w-15 h-0.5 bg-white transition-transform" />
    <SlideshowArrow
      className="rotate-180 swiper-next cursor-pointer p-2 w-auto h-auto"
      onClick={onNext}
    />
  </div>
);

export default SlideshowNavigation;
