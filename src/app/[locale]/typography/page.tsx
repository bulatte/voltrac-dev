import React from "react";

const TypographyStyles = () => {
  return (
    <div className="bg-black flex flex-col gap-10 p-20">
      {/* Display Styles */}
      <div className="flex flex-col gap-10">
        <div className="text-display-xl text-white">Display XL</div>
        <div className="text-display-l text-white">Display L</div>
        <div className="text-display-m text-white">Display M</div>
        <div className="text-display-s text-white">Display S</div>
        <div className="text-display-xs text-white">Display XS</div>
      </div>

      {/* Title Styles */}
      <div className="flex flex-col gap-10">
        <div className="text-title-xl text-white">Title XLarge</div>
        <div className="text-title-l text-white">Title Large</div>
        <div className="text-title-m text-white">Title Medium</div>
        <div className="text-title-s text-white">Title Small</div>
        <div className="text-title-xs text-white">Title XSmall</div>
      </div>

      {/* Support Styles */}
      <div className="flex flex-col gap-10">
        <div className="text-overline text-white">Overline</div>
        <div className="text-subtitle-l text-white">Subtitle L</div>
        <div className="text-subtitle-l-spaced text-white">
          Subtitle L Spaced
        </div>
        <div className="text-subtitle-m text-white">Subtitle M</div>
        <div className="text-subtitle-m-spaced text-white">
          Subtitle M Spaced
        </div>
        <div className="text-subtitle-s text-white">Subtitle S</div>
        <div className="text-subtitle-s-spaced text-white">
          Subtitle S Spaced
        </div>
        <div className="text-paragraph-l text-white">Paragraph Large</div>
        <div className="text-paragraph-m text-white">Paragraph Medium</div>
        <div className="text-paragraph-s text-white">Paragraph Small</div>
      </div>

      {/* Numerals Styles */}
      <div className="flex flex-col gap-10">
        <div className="text-numerals-xxl text-white">Numerals XXLarge</div>
        <div className="text-numerals-xl text-white">Numerals XLarge</div>
        <div className="text-numerals-l text-white">Numerals Large</div>
        <div className="text-numerals-m text-white">Numerals Medium</div>
      </div>
    </div>
  );
};

export default TypographyStyles;
