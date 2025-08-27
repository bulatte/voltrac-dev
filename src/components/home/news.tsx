"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@/components/common/container";
import { cn } from "@/lib/utils";
import SlideshowNavigation from "@/components/common/slideshow-navigation";

// news are not translated
const items = [
  {
    title:
      "Spanish startup Voltrac raises €2 million to launch autonomous tractor platform for agriculture and frontline logistics",
    image: "/images/news/eu-startups.webp",
    url: "https://www.eu-startups.com/2025/06/spanish-startup-voltrac-raises-e2-million-and-launches-autonomous-tractor-platform-for-agriculture-and-frontline-logistics/",
  },
  {
    title: "Tractor de día y robot de defensa de noche",
    image: "/images/news/el-mundo.jpg",
    url: "https://www.instagram.com/p/DLSvxgNpBmf/?img_index=1",
  },
];

const News = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const t = useTranslations("home.news");

  return (
    <div id="news" className="w-full overflow-hidden">
      <Container>
        <div className="px-[var(--cxp)] py-cyp flex items-center justify-between gap-2.5">
          <h2 className="text-subtitle-l">{t("title")}</h2>

          {items.length > 3 && (
            <SlideshowNavigation
              onPrev={() => swiper?.slidePrev()}
              onNext={() => swiper?.slideNext()}
            />
          )}
        </div>

        <div
          className={cn(
            "relative",
            // left side overlay covering overflowing images
            "before:hidden lg:before:flex before:absolute before:left-[calc(-100%-1px)] before:w-full before:h-full before:bg-black before:z-[2]",
            // line above text
            "after:absolute after:left-0 after:w-screen after:top-72 md:after:top-100 after:h-[1px] after:bg-white-25 after:z-[2]",
          )}
        >
          <Swiper
            spaceBetween={1}
            slidesPerView="auto"
            className="!overflow-visible"
            onSwiper={setSwiper}
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="max-w-70 md:max-w-[27.5rem] box-content last:mr-[var(--cxp)]"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col gap-5 md:gap-10"
                >
                  <div className="w-full pl-[var(--cxp)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1080}
                      height={1080}
                      className="object-cover aspect-square"
                    />
                  </div>
                  <div className="flex justify-between gap-2.5 pl-[var(--cxp)] pt-10">
                    <h3 className="text-title-s pb-cyp">{item.title}</h3>
                    <ArrowUpRight className="shrink-0" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default News;
