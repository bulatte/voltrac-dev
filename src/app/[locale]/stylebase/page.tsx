import React from "react";

const Divider: React.FC = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 border-t border-white pointer-events-none"
  />
);

const Section: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = "",
}) => (
  <div className={`relative flex flex-col gap-10 py-cyp ${className}`}>
    <Divider />
    {children}
  </div>
);

type Swatch = {
  label: string;
  hex: string;
  bg: string; // background utility class
  text: string; // text color utility classes
  badgeBorder: string; // border color for badge
};

const SwatchCard: React.FC<{
  title: string;
  titleClass: string;
  entries: Swatch[];
}> = ({ title, titleClass, entries }) => {
  const [base, ...rest] = entries;
  return (
    <div className="flex flex-col h-[720px] w-full">
      <div
        className={`flex grow items-start justify-between w-full p-10 ${base.bg} ${base.text}`}
      >
        <div className="flex flex-col items-start justify-between w-full h-full">
          <div className={titleClass}>{title}</div>
          <div
            className={`relative flex gap-1 items-center px-1 py-0.5 ${base.text}`}
          >
            <div
              className={`absolute inset-0 rounded-xs border pointer-events-none ${base.badgeBorder}`}
            />
            <div className="leading-none text-overline">HEX</div>
            <div className="leading-none text-overline">
              {base.hex.replace("#", "").toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {rest.map((entry) => (
          <div
            key={entry.hex}
            className={`flex items-center justify-between p-10 ${entry.bg} ${entry.text}`}
          >
            <div className="leading-none text-title-xs">{entry.label}</div>
            <div
              className={`relative flex gap-1 items-center px-1 py-0.5 ${entry.text}`}
            >
              <div
                className={`absolute inset-0 rounded-xs border pointer-events-none ${entry.badgeBorder}`}
              />
              <div className="leading-none text-overline">HEX</div>
              <div className="leading-none text-overline">
                {entry.hex.replace("#", "").toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StylebasePage = () => {
  const blackSwatches: Swatch[] = [
    {
      label: "Black",
      hex: "#000000",
      bg: "bg-black",
      text: "text-white",
      badgeBorder: "border-white",
    },
    {
      label: "Tint 1",
      hex: "#0F0F0F",
      bg: "bg-black-1",
      text: "text-white",
      badgeBorder: "border-white",
    },
    {
      label: "Tint 2",
      hex: "#1A1919",
      bg: "bg-black-2",
      text: "text-white",
      badgeBorder: "border-white",
    },
    {
      label: "Tint 3",
      hex: "#2F2E2E",
      bg: "bg-black-3",
      text: "text-white",
      badgeBorder: "border-white",
    },
  ];
  const whiteSwatches: Swatch[] = [
    {
      label: "White",
      hex: "#FFFFFF",
      bg: "bg-white",
      text: "text-black",
      badgeBorder: "border-black",
    },
    {
      label: "Shade 1",
      hex: "#F0F0F0",
      bg: "bg-white-1",
      text: "text-black",
      badgeBorder: "border-black",
    },
    {
      label: "Shade 2",
      hex: "#D5D7D4",
      bg: "bg-white-2",
      text: "text-black",
      badgeBorder: "border-black",
    },
    {
      label: "Shade 3",
      hex: "#B3B6B1",
      bg: "bg-white-3",
      text: "text-black",
      badgeBorder: "border-black",
    },
  ];
  const greenSwatches: Swatch[] = [
    {
      label: "Green",
      hex: "#4B5320",
      bg: "bg-green",
      text: "text-white",
      badgeBorder: "border-white",
    },
    {
      label: "Tint 1",
      hex: "#8F985F",
      bg: "bg-green-1",
      text: "text-black",
      badgeBorder: "border-black",
    },
    {
      label: "Tint 2",
      hex: "#B3BB88",
      bg: "bg-green-2",
      text: "text-black",
      badgeBorder: "border-black",
    },
    {
      label: "Tint 3",
      hex: "#D1DBB0",
      bg: "bg-green-3",
      text: "text-black",
      badgeBorder: "border-black",
    },
  ];

  return (
    <div className="relative flex flex-col p-cyp gap-10" data-name="Stylebase">
      <Section>
        <div className="text-display-xl">Display XL</div>
        <div className="text-display-l">Display L</div>
        <div className="text-display-m">Display M</div>
        <div className="text-display-s">Display S</div>
        <div className="text-display-xs">Display XS</div>
      </Section>
      <div className="flex w-full gap-10">
        <Section className="flex-1">
          <div className="text-title-xl">Title XLarge</div>
          <div className="text-title-l">Title Large</div>
          <div className="text-title-m">Title Medium</div>
          <div className="text-title-s">Title Small</div>
          <div className="text-title-xs">Title XSmall</div>
        </Section>
        <div className="flex flex-col flex-1">
          <Section>
            <div className="text-overline">Overline</div>
            <div className="text-subtitle-l">Subtitle L</div>
            <div className="text-subtitle-l-spaced">Subtitle L Spaced</div>
            <div className="text-subtitle-m">Subtitle M</div>
            <div className="text-subtitle-m-spaced">Subtitle M Spaced</div>
            <div className="text-subtitle-s">Subtitle S</div>
            <div className="text-subtitle-s-spaced">Subtitle S Spaced</div>
            <div className="text-paragraph-l">Paragraph Large</div>
            <div className="text-paragraph-m">Paragraph Medium</div>
            <div className="text-paragraph-s">Paragraph Small</div>
          </Section>
          <Section>
            <div className="whitespace-pre text-numerals-xxl">
              Numerals XXLarge
            </div>
            <div className="whitespace-pre text-numerals-xl">
              Numerals XLarge 798
            </div>
            <div className="whitespace-pre text-numerals-l">
              Numerals Large 798
            </div>
            <div className="whitespace-pre text-numerals-m">
              Numerals Medium 798
            </div>
          </Section>
        </div>
      </div>
      <Section>
        <div className="flex flex-wrap items-stretch w-full">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SwatchCard
              title="Black"
              titleClass="text-title-xl"
              entries={blackSwatches}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SwatchCard
              title="White"
              titleClass="text-title-m text-black"
              entries={whiteSwatches}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SwatchCard
              title="Green"
              titleClass="text-title-m"
              entries={greenSwatches}
            />
          </div>
        </div>
        <div className="w-full h-px bg-white-25" />
      </Section>
    </div>
  );
};

export default StylebasePage;
