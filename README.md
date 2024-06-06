# react-emoji-flag

display countries as flag. no need for external pics or svg, even on window.

The most efficient way to display countries as flag: using unicode directly on all modern operating systems.

"🇨🇭" if this looks like a flag, you are on a modern browser and operating system.

## workaround for window

if it does look like "CH", I'm sorry that you are on window, that doesn't display country codes natively. 

In that case, it loads a special font that does display the flag properly


on your react project:


    import CountryFlag from 'react-emoji-flag';


    <CountryFlag countryCode="CH" title="Switzerland"/> 

### alternate usage

    import { useCountryFlag, flag} from "react-emoji-flag";

   const YourComponent = (props) => {
      useCountryFlag({ className: "country-flag" });


     return (<div class="country-flag">{flag ("CH")} do not forget to call useCountryFlag and have the class set in a dom parent</div>);
   }

## inspiration and technical explanations

https://github.com/talkjs/country-flag-emoji-polyfill
