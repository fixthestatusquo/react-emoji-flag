import React, {useEffect} from "react";
const fontUrl = "https://country-flag.proca.app/font/TwemojiCountryFlags.woff2";
const fontName = "countryFlags";
const className = "country-flag";
let hasEffectRun = false;


const nativeFlag = () => {
  const userAgent = window.navigator.userAgent;
  return userAgent.indexOf("Win") === -1;
}


export function useCountryFlag (options)  {
  
  React.useEffect(() => {
    if (hasEffectRun) {
      // Run the effect logic only once
      return;
    }
 
    const cn = options?.className || className;   
    hasEffectRun = true;
    const css = `.${cn} {font-family: "${fontName}"}`;

    const loadFont = async () => {
      const customFont = new FontFace(
        fontName,
        "url(" + fontUrl + ")",
        {
          unicodeRange:
            "U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067, U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F",
        }
      );


      try {
        await customFont.load();
        document.fonts.add(customFont);
      } catch  {
        console.log("can't load font");
      }
    };


    if (nativeFlag()) 
      return;

    loadFont();
    const style = document.createElement("style");
    style.textContent = css;
    style.id = "react-emoji-flag";
    document.head.appendChild(style);
  }, []);

};

export const flag = (isoCode) => {
  const offset = 127397;
  if (!isoCode || isoCode.toUpperCase() === "ZZ") return "";
  return isoCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + offset));
// U+1F6A9
};

const CountryFlag = (props) => {
  const cn = props.className || className;
  useCountryFlag({className:cn}); // load the font and create style if needed
  return (
    <span className={cn} title={props.title || props.countryCode}>
      {flag(props.countryCode)}
    </span>
  );
};

export default CountryFlag;
