//import {useEffect} from 'react';
const fontUrl = "https://country-flag.proca.app/font/TwemojiCountryFlags.woff2";

export const useCountryFlag = () => {

  React.useEffect ( () => {
    const css = 
`<style>
@font-face {
  font-family: 'Twemoji Country Flags';
  unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067, U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
  src: url(${fontUrl}) format('woff2');
}

.country-flag {
  fontFamily: "'Twemoji Country Flags'"
}
</style>`;
    return css;
  }, [fontUrl]);
};

export const flag = (isoCode, options) => {
  const offset = 127397;
  let emoji = "";

  if (!isoCode || isoCode.toUpperCase() === "ZZ") return "";

  isoCode
    .toUpperCase()
    .split("")
    .forEach(
      (char) => (emoji += String.fromCodePoint(char.charCodeAt(0) + offset))
    );

  return emoji;
};

export const CountryFlag = (props) => {
  useCountryFlag ();
  const d = emoji(props.country);
  return (
    <span className="country-flag" title={props.title || props.country}>
      {d}
    </span>
  );
};

//export default CountryFlag;
