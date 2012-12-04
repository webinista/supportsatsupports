supportsatsupports
==================

A polyfill to add window.CSS.supports support to browsers that lack it. Uses window.supportsCSS if available.

window.CSS.supports is the proposed object defined in the [CSS Conditional Rules Module Level 3](http://www.w3.org/TR/css3-conditional/) specification. Opera added support for `window.supportsCSS()` in version 12.10 of the browser. Though `@support` is enabled in Firefox 17.0 behind a flag, the JavaScript API is not yet available. Other browsers have not yet added support. Check [current support tables](http://caniuse.com/#search=supports) periodically to find out when support becomes available.

Browser support
-------------

atsupports.js 1.0 supports any browser with [support for `Array.prototype.map.`](http://kangax.github.com/es5-compat-table/) This means that it doesn't work in versions of Internet Explorer prior to version 9.