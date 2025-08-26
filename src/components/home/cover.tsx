"use client";

import { ReactNode, useEffect, useState } from "react";
import Logo from "../icons/logo";
import { cn } from "@/lib/utils";

import { useInView } from "react-intersection-observer";
import Container from "../common/container";
import { TypeAnimation } from "react-type-animation";

type Position = "down" | "center" | "up";

const AnimatedToken = ({
  children,
  delay,
  position: inheritedPosition,
}: {
  children: Readonly<ReactNode>;
  delay: number;
  position: Position;
}) => {
  const [position, setPosition] = useState<Position>(inheritedPosition);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition(inheritedPosition);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, inheritedPosition]);

  return (
    <span className="overflow-hidden">
      <div
        className={cn("transition-transform duration-500", {
          "translate-y-full": position === "down",
          "translate-y-0": position === "center",
          "-translate-y-full": position === "up",
        })}
      >
        {children}
      </div>
    </span>
  );
};

const Cover = () => {
  const [position, setPosition] = useState<Position>("down");
  const [ref, inView] = useInView({ threshold: 0 });
  const [mainContentVisible, setMainContentVisible] = useState(false);

  const p = mainContentVisible ? "up" : position;

  useEffect(() => {
    if (inView) {
      setPosition("center");
    } else {
      setPosition("down");
    }
  }, [inView]);

  useEffect(() => {
    // if user scrolls down, avoid all of this convoluted logic and set main content to visible
    const onScroll = () => {
      if (window.scrollY > 50 && !mainContentVisible) {
        setPosition("up");
        // setTimeout(() => {
        setMainContentVisible(true);
        // }, 1200);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mainContentVisible]);

  return (
    <div
      className={cn(
        "home-cover flex h-svh relative border-b border-b-white-25",
        { "home-cover--animated": mainContentVisible },
      )}
      ref={ref}
    >
      <video
        className="absolute w-full h-full object-cover opacity-60"
        onTimeUpdate={(e) => {
          if (inView && e.timeStamp > 7000 && !mainContentVisible) {
            setPosition("up");
            setTimeout(() => {
              setMainContentVisible(true);
            }, 1200);
          }
        }}
        autoPlay
        muted
        loop
      >
        <source src="/video/cover.mp4" type="video/mp4" />
      </video>
      <div className="relative w-full h-full flex items-center justify-center">
        <h1
          className={cn(
            "flex items-center gap-7.5 justify-center w-full transition-opacity",
            {
              "opacity-0": mainContentVisible,
            },
          )}
        >
          <AnimatedToken delay={600} position={p}>
            <span className="text-subtitle-l-spaced">Meet</span>
          </AnimatedToken>
          <AnimatedToken delay={900} position={p}>
            <Logo />
          </AnimatedToken>
          <span className="hidden">Voltrac</span>
          <AnimatedToken delay={1200} position={p}>
            <span className="text-subtitle-l-spaced">THOR</span>
          </AnimatedToken>
        </h1>
      </div>

      {mainContentVisible && (
        <Container className="absolute inset-0 flex items-stretch flex-col [&>div]:flex-1">
          <div className="flex px-[var(--cxp)] pb-20 h-full w-full">
            <h2 className="flex text-display-xs lg:mt-[calc(100svh-18rem)] max-lg:!text-[12vw] mt-[calc(100svh-35vw)]">
              <TypeAnimation
                className="after:!content-['\_'] whitespace-pre-line"
                sequence={["The driving force\n on any field"]}
              />
            </h2>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Cover;
