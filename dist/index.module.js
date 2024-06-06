import React, { useEffect } from 'react';

//import PropTypes from "prop-types";

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
var fontUrl = "https://country-flag.proca.app/font/TwemojiCountryFlags.woff2";
var fontName = "countryFlags";
var className = "country-flag";
var hasEffectRun = false;
var nativeFlag = function nativeFlag() {
  var userAgent = window.navigator.userAgent;
  return userAgent.indexOf("Win") === -1;
};
function useCountryFlag(options) {
  var cn = (options == null ? void 0 : options.className) || className;
  useEffect(function () {
    if (hasEffectRun) {
      // Run the effect logic only once
      return;
    }
    hasEffectRun = true;
    var css = "." + cn + " {font-family: \"" + fontName + "\"}";
    var loadFont = function loadFont() {
      try {
        var customFont = new FontFace(fontName, "url(" + fontUrl + ")", {
          unicodeRange: "U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067, U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F"
        });
        var _temp = _catch(function () {
          return Promise.resolve(customFont.load()).then(function () {
            document.fonts.add(customFont);
          });
        }, function () {
          console.log("can't load font");
        });
        return Promise.resolve(_temp && _temp.then ? _temp.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    if (nativeFlag()) return;
    loadFont();
    var style = document.createElement("style");
    style.textContent = css;
    style.id = "react-emoji-flag";
    document.head.appendChild(style);
  }, [cn]);
}
var flag = function flag(isoCode) {
  var offset = 127397;
  if (!isoCode || isoCode.toUpperCase() === "ZZ") return "";
  return isoCode.toUpperCase().replace(/./g, function (_char) {
    return String.fromCodePoint(_char.charCodeAt(0) + offset);
  });
  // U+1F6A9
};
var CountryFlag = function CountryFlag(props) {
  var cn = (props == null ? void 0 : props.className) || className;
  useCountryFlag({
    className: cn
  }); // load the font and create style if needed
  return /*#__PURE__*/React.createElement("span", {
    className: cn,
    title: props.title || props.countryCode
  }, flag(props.countryCode));
};

export { CountryFlag, CountryFlag as default, flag, useCountryFlag };
//# sourceMappingURL=index.module.js.map
