"use strict";(self.webpackChunkdialgo=self.webpackChunkdialgo||[]).push([[892],{2892:function(t,n,e){e.r(n),e.d(n,{default:function(){return a}});var i=e(7294),l=e(5998),c=e(3543),f=e(7904),n=e(4184),s=e.n(n),n=e(1193),d=e.n(n);function m(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=i.call(e)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,n)||r(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){var e;if(t)return"string"==typeof t?o(t,n):"Map"===(e="Object"===(e=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:e)||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(){function e(n){return a.findIndex(function(t){return t.id===n})}function t(i){return function(t,n){var e,r,o=n.x,n=(n.y,a.findIndex(function(t){return t.id===i})),o=(e=n,o=o,r=document.querySelector(".tabs").getBoundingClientRect().width,o+=r/a.length/2,r<o?e=a.length-1:0<o&&(e=Math.floor(o/(r/a.length))),e);if(o!==n)return(r=m(a)).splice(n,1),r.splice(o,0,a[n]),u(i),r}}var a=(0,l.v9)(function(t){return t.project.projects}),r=((0,l.v9)(function(t){return t.project.currentProjectIndex}),(0,l.I0)()),n=y((0,i.useState)(a[0].id),2),o=n[0],u=n[1];(0,i.useEffect)(function(){1<a.length?u(a[a.length-1].id):u(a[0].id)},[a]);return i.createElement(f.JL,{tabs:!0,className:"tabs"},a.map(function(n){return i.createElement(d(),{key:n.id,axis:"x",onStop:t(n.id),position:{x:0,y:0}},i.createElement(f.LY,null,i.createElement(f.OL,{className:s()({active:o===n.id}),onClick:function(){return t=n.id,u(t),void r((0,c.XE)(e(t)));var t},onDoubleClick:function(){return r((0,c.o)("name"))}},i.createElement("span",{className:"text-truncate"},n.name,".da"),i.createElement(f.zx,{close:!0,className:"ml-2",onClick:function(){return t=n.id,r((0,c.rR)(t)),void(o===t&&1<=e(t)&&(r((0,c.XE)(e(t)-1)),u(a[e(t)-1].id)));var t}}))))}))}}}]);