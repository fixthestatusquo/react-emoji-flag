(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react/jsx-runtime')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react/jsx-runtime'], factory) :
  (global = global || self, factory(global.reactEmojiFlag = {}, global.react, global.jsx));
})(this, (function (exports, React, jsxRuntime) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  var hasEffectRun = false;
  var nativeFlag = function nativeFlag() {
    var userAgent = window.navigator.userAgent;
    return userAgent.indexOf("Win") === -1;
  };
  var useCountryFlag = function useCountryFlag(options) {
    React__default["default"].useEffect(function () {
      if (hasEffectRun) {
        // Run the effect logic only once
        return;
      }
      hasEffectRun = true;
      var css = "." + options.className + " {font-family: \"'" + fontName + "'\"}";
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
    }, []);
  };
  var flag = function flag(isoCode) {
    var offset = 127397;
    if (!isoCode || isoCode.toUpperCase() === "ZZ") return "";
    return isoCode.toUpperCase().replace(/./g, function (_char) {
      return String.fromCodePoint(_char.charCodeAt(0) + offset);
    });
    // U+1F6A9
  };
  var CountryFlag = function CountryFlag(props) {
    var className = props.className || "country-flag";
    useCountryFlag({
      className: className
    }); // load the font and create style if needed
    var d = flag(props.countryCode);
    return /*#__PURE__*/jsxRuntime.jsx("span", {
      className: className,
      title: props.title || props.countryCode,
      children: d
    });
  };

  exports["default"] = CountryFlag;
  exports.flag = flag;
  exports.useCountryFlag = useCountryFlag;

}));
//# sourceMappingURL=index.umd.js.map
