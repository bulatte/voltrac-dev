"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import Container from "@/components/common/container";
import SlideshowCounter from "@/components/common/slideshow-counter";
import SlideshowNavigation from "@/components/common/slideshow-navigation";
import { cn } from "@/lib/utils";

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
  rows: 1,
  adaptiveHeight: false,
  slidesToShow: 1,
  // infinite: false,
};

const Agro = () => {
  const t = useTranslations("home.agro");
  const slickRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div id="agriculture" className="overflow-hidden">
      <Container>
        <div className="px-[var(--cxp)] flex gap-5 justify-between items-center py-cyp">
          <h2 className="text-subtitle-l">{t("title")}</h2>
          <div className="flex gap-5 md:gap-cyp items-center">
            <SlideshowCounter index={currentSlide} total={images.length} />
            <SlideshowNavigation
              onPrev={() => slickRef.current?.slickPrev()}
              onNext={() => slickRef.current?.slickNext()}
            />
          </div>
        </div>
        <Slider
          className={cn(
            "[&_.slick-list]:!overflow-visible",
            // left side overlay covering overflowing images
            "before:hidden before:lg:flex before:absolute before:left-[calc(-100%-1px)] before:w-full before:h-full before:bg-black before:z-[2]",
          )}
          ref={slickRef}
          beforeChange={(_current, next) => setCurrentSlide(next)}
          {...settings}
        >
          {images.map((image, index) => (
            <div key={index} className="pr-2.5 outline-none">
              <Image
                className="w-auto aspect-[1.5] h-55 md:h-75 lg:h-100 object-cover"
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>

        <div className="px-[var(--cxp)] flex gap-5 justify-between items-center pt-cyp pb-15">
          <h3 className="text-title-m">{t("description")}</h3>
        </div>
      </Container>
    </div>
  );
};

export default Agro;
