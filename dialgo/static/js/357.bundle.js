"use strict";(self.webpackChunkdialgo=self.webpackChunkdialgo||[]).push([[357],{3357:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var o=n(7294),s=n(5998),d=n(811),g=n(7904);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){p(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function p(e,t,n){return(t=function(e){e=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"===r(e)?e:String(e)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}(e,t)||function(e,t){var n;if(e)return"string"==typeof e?a(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=[{size:"A3",width:"297",height:"420",unit:"mm"},{size:"A4",width:"210",height:"297",unit:"mm"},{size:"A5",width:"148",height:"210",unit:"mm"},{size:"B3",width:"353",height:"500",unit:"mm"},{size:"B4",width:"250",height:"353",unit:"mm"},{size:"B5",width:"176",height:"250",unit:"mm"}];function l(e){function n(){switch(a.unit){case"px":return 5;case"cm":return 3;case"mm":return 4;case"in":return 3}}function r(e){return function(){l(f(f({},a),{},{name:e.name||a.name,width:e.width||a.width,height:e.height||a.height,unit:e.unit||a.unit}))}}function t(e){var t=(n=e.target).name,n=n.value;l(f(f({},a),{},p({},t,n))),e.target.classList.contains("error")&&e.target.classList.remove("error")}function i(){var e=parseFloat(a.width),t=parseFloat(a.height);return isNaN(e)||Math.round(e)<1?l(f(f({},a),{},{width:"1"})):isNaN(t)||Math.round(t)<1?l(f(f({},a),{},{height:"1"})):void 0}var u=e.closeModal,e=(0,d.j)(),c=e.addProject,h=e.updateProjectSetting,e=(0,s.v9)(function(e){return e.project}),m=e.projects,e=(e.projectIndex,w((0,o.useState)({id:null,name:"New Project",width:window.innerWidth.toString(),height:window.innerHeight.toString(),unit:"px",scale:null}),2)),a=e[0],l=e[1];(0,o.useEffect)(function(){var t=n();(a.width.length>t||a.height.length>t)&&l(function(e){return f(f({},e),{},{width:e.width.slice(0,t),height:e.height.slice(0,t)})})},[a.unit]);return o.createElement(o.Fragment,null,o.createElement(g.JX,{md:"8"},o.createElement("div",{className:"paper-container"},v.map(function(e,t){return o.createElement("div",{key:t,className:"paper",onClick:r({width:e.width,height:e.height,unit:e.unit})},o.createElement("div",{className:"outline",style:{width:"".concat(e.width/5,"px"),height:"".concat(e.height/5,"px")}}),e.size,o.createElement("p",{className:"small"},e.width," X ",e.height," ",e.unit))}))),o.createElement(g.JX,{md:"4"},o.createElement(g.l0,{onSubmit:function(e){e.preventDefault();var t,e=e.target,n=e.name,r=e.width,i=e.height,a=e.unit;switch(a.value){case"px":l=r.value,o=i.value;break;case"cm":var l=37.8*r.value,o=37.8*i.value;break;case"mm":l=3.78*r.value,o=3.78*i.value;break;case"in":l=96*r.value,o=96*i.value;break;default:h({alert:{message:"Invalid unit: ",unit:a}}),l=r.value,o=i.value}1e4<l||1e4<o?1e4<l&&1e4<o?(r.classList.add("error"),i.classList.add("error"),h({alert:{message:"Both width and height exceed the maximum value"}})):1e4<l?(r.classList.add("error"),h({alert:{message:"The width exceeds the maximum value"}})):(i.classList.add("error"),h({alert:{message:"The height exceeds the maximum value"}})):(e=(e=window.innerWidth)/(t=window.innerHeight)<l/o?e/l:t/o,c({id:function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz",r=n.length,i=0;i<e;i++)t+=n.charAt(Math.floor(Math.random()*r));return t}(6),name:n.value,width:r.value,height:i.value,widthPx:l,heightPx:o,unit:a.value,scale:e.toFixed().toString(),position:{top:"50%",left:"50%"}}),h({projectIndex:m.length}),u())}},o.createElement(g.cw,{row:!0},o.createElement(g.JX,null,o.createElement(g.__,null,"Name"),o.createElement(g.II,{type:"text",name:"name",value:a.name,onChange:t,onBlur:function(){0===a.name.trim().length&&l(f(f({},a),{},{name:"New Project"}))},maxLength:50}))),o.createElement(g.cw,{row:!0},o.createElement(g.JX,null,o.createElement(g.__,null,"Width"),o.createElement(g.II,{type:"text",name:"width",value:a.width,onChange:t,onBlur:i,maxLength:n()})),o.createElement(g.JX,null,o.createElement(g.__,null,"Unit"),o.createElement("br",null),o.createElement("select",{name:"unit",value:a.unit,onChange:t},o.createElement("option",null,"px"),o.createElement("option",null,"cm"),o.createElement("option",null,"mm"),o.createElement("option",null,"in")))),o.createElement(g.cw,{row:!0},o.createElement(g.JX,null,o.createElement(g.__,null,"Height"),o.createElement(g.II,{type:"text",name:"height",value:a.height,onChange:t,onBlur:i,maxLength:n()})),o.createElement(g.JX,null,o.createElement(g.zx,{color:"secondary",onClick:r({width:a.height,height:a.width})},"⇅"))),o.createElement(g.cw,{row:!0},o.createElement(g.JX,null,o.createElement(g.zx,{type:"submit",className:"w-100",color:"primary"},"Create"))))))}}}]);