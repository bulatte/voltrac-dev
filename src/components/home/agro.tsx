"use client";

import Image from "next/image";
import Container from "../common/container";
import { useRef, useState } from "react";
import SlideshowArrow from "../icons/slideshow-arrow";
import Slider, { Settings } from "react-slick";
import SlideshowCounter from "../common/slideshow-counter";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const images = [
  {
    src: "/images/in-the-field.webp",
    width: 1100,
    height: 824,
  },
  {
    src: "/images/aguirre.webp",
    width: 1100,
    height: 824,
  },
  {
    src: "/images/in-the-field-2.webp",
    width: 1100,
    height: 825,
  },
];

const settings: Settings = {
  variableWidth: true,
  arrows: false,
};

const Agro = () => {
  const t = useTranslations("home.agro");
  const slickRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="overflow-hidden">
      <Container>
        <div className="px-[var(--cxp)] flex gap-5 justify-between items-center py-20">
          <h2 className="text-subtitle-l">{t("title")}</h2>
          <div className="flex gap-20 items-center">
            <SlideshowCounter index={currentSlide} total={images.length} />
            <div className="flex items-center has-[.swiper-prev:hover]:[&>.swiper-line]:-translate-x-2.5 has-[.swiper-next:hover]:[&>.swiper-line]:translate-x-2.5">
              <SlideshowArrow
                className="swiper-prev cursor-pointer p-2 w-auto h-auto"
                onClick={() => slickRef.current?.slickPrev()}
              />
              <div className="swiper-line w-15 h-0.5 bg-white transition-transform" />
              <SlideshowArrow
                className="rotate-180 swiper-next cursor-pointer p-2 w-auto h-auto"
                onClick={() => slickRef.current?.slickNext()}
              />
            </div>
          </div>
        </div>
        <Slider
          className={cn(
            "[&_.slick-list]:!overflow-visible",
            // left side overlay covering overflowing images
            "before:absolute before:left-[calc(-100%-1px)] before:w-full before:h-full before:bg-black before:z-[2]",
          )}
          ref={slickRef}
          beforeChange={(_current, next) => setCurrentSlide(next)}
          {...settings}
        >
          {images.map((image, index) => (
            <div key={index} className="pr-2.5 outline-none">
              <Image
                className="w-auto aspect-[1.5] h-[25rem] object-cover"
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>

        <div className="px-[var(--cxp)] flex gap-5 justify-between items-center pt-20 pb-15">
          <h3 className="text-title-m">{t("description")}</h3>
        </div>
      </Container>
    </div>
  );
};

export default Agro;
