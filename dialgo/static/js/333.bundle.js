"use strict";(self.webpackChunkdialgo=self.webpackChunkdialgo||[]).push([[333],{8333:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var i=r(7294),a=r(5998),f=r(811),y=r(7904);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function m(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach(function(e){var t,r;t=n,r=o[e=e],(e=function(e){e=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))})}return n}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,l,c=[],i=!0,a=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=u.call(r)).done)&&(c.push(n.value),c.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(a)throw o}}return c}}(e,t)||function(e,t){var r;if(e)return"string"==typeof e?n(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){var t=e.closeModal,r=(0,a.I0)(),e=(0,a.v9)(function(e){return e.project}),n=e.projects,o=e.projectIndex,e=b((0,i.useState)(n[o].name),2),u=e[0],l=e[1],c=(0,i.useRef)(null);(0,i.useEffect)(function(){return c.current.select()},[]);return i.createElement(y.JX,null,i.createElement(y.l0,{onSubmit:function(e){e.preventDefault(),r((0,f.j4)({index:o,project:m(m({},n[o]),{},{name:u})})),t()}},i.createElement(y.cw,{row:!0},i.createElement(y.JX,null,i.createElement(y.__,null,"Name"),i.createElement(y.II,{innerRef:c,type:"text",name:"name",value:u,onChange:function(e){return l(e.target.value)}}))),i.createElement(y.cw,{row:!0},i.createElement(y.JX,null,i.createElement(y.zx,{type:"submit",className:"w-100",color:"primary"},"OK")))))}}}]);