!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector(".feedback-form"),r="feedback-form-state",i={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,y=v||s||Function("return this")(),m=Object.prototype.toString,b=Math.max,p=Math.min,g=function(){return y.Date.now()};function j(e,t,n){var r,i,o,a,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(u);function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function m(e){return c=e,f=setTimeout(O,t),d?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=o}function O(){var e=g();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?p(n,o-(e-c)):n}(e))}function S(e){return f=void 0,s&&r?y(e):(r=i=void 0,a)}function T(){var e=g(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return m(l);if(v)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=h(t)||0,w(n)&&(d=!!n.leading,o=(v="maxWait"in n)?b(h(n.maxWait)||0,t):o,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?a:S(g())},T}function w(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=l.test(e);return r||c.test(e)?d(e.slice(2),r?2:8):f.test(e)?NaN:+e}i=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return w(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),j(e,t,{leading:r,maxWait:t,trailing:i})};var O={};n.addEventListener("input",i((function(e){O[e.target.name]=e.target.value.trim(),localStorage.setItem(r,JSON.stringify(O))}),500));window.addEventListener("load",(function(){var e=localStorage.getItem(r);if(e){O=JSON.parse(e);var t=Object.keys(O),i=!0,o=!1,u=void 0;try{for(var a,f=t[Symbol.iterator]();!(i=(a=f.next()).done);i=!0){var l=a.value;n.elements[l].value=O[l]}}catch(e){o=!0,u=e}finally{try{i||null==f.return||f.return()}finally{if(o)throw u}}}}));n.addEventListener("submit",(function(e){e.preventDefault(),console.log(O),localStorage.removeItem(r),n.reset()}))}();
//# sourceMappingURL=03-feedback.11e072a0.js.map