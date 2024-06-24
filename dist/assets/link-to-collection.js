(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,n||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}function n(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,e(r.key),r)}}function o(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(c())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var r=new(t.bind.apply(t,o));return n&&i(r,n.prototype),r}(t,arguments,r(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},a(t)}function l(t,e,n){return e=r(e),o(t,u()?Reflect.construct(e,n||[],r(t).constructor):e.apply(t,n))}function u(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(u=function(){return!!t})()}var s=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=l(this,e)).collectionLinks=t.querySelector(".collection-links"),t.collectionHeading=t.collectionLinks.querySelector(".summary span"),t.collectionList=t.collectionLinks.querySelectorAll("li"),t.paramLinks=t.querySelector(".param-links"),t.paramHeading=t.paramLinks.querySelector(".summary span"),t.paramList=t.paramLinks.querySelectorAll("li"),t.submit=t.querySelector(".submit"),t.collectionList.forEach((function(e){e.addEventListener("click",(function(){t.onClickCollection(e)}))})),t.paramList.forEach((function(e){e.addEventListener("click",(function(){t.onClickParam(e)}))})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(e,t),o=e,(r=[{key:"onClickCollection",value:function(t){this.submit.href=t.dataset.value,this.collectionHeading.dataset.value=t.dataset.value,this.collectionList.forEach((function(t){t.classList.remove("active")})),t.classList.add("active"),t.closest(".details").style.maxHeight="0",t.closest("accordion-toggle").classList.remove("active"),this.collectionHeading.textContent=t.textContent,this.paramHeading.textContent=this.paramHeading.dataset.default}},{key:"onClickParam",value:function(t){this.submit.href="".concat(this.collectionHeading.dataset.value,"?filter.p.m.custom.occasions=").concat(encodeURI(t.dataset.value)),this.paramList.forEach((function(t){t.classList.remove("active")})),t.classList.add("active"),t.closest(".details").style.maxHeight="0",t.closest("accordion-toggle").classList.remove("active"),this.paramHeading.textContent=t.textContent}}])&&n(o.prototype,r),c&&n(o,c),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,r,c}(a(HTMLElement));customElements.define("link-to-collection",s)})();