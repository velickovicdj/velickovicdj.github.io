"use strict";(self.webpackChunkdialgo=self.webpackChunkdialgo||[]).push([[892],{2892:function(t,n,e){e.r(n),e.d(n,{default:function(){return i}});var f=e(7294),s=e(5998),m=e(811),p=e(7904),n=e(4184),y=e.n(n),n=e(1193),b=e.n(n);function h(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||r(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){var e;if(t)return"string"==typeof t?o(t,n):"Map"===(e="Object"===(e=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:e)||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var j=document.title;function i(t){function e(n){return u.findIndex(function(t){return t.id===n})}function n(t){d(t),i({projectIndex:e(t)})}function r(n){return function(t){t.stopPropagation();t=e(n);c===n?0<e(n)?(d(u[t-1].id),i({projectIndex:t-1})):(1<u.length&&d(u[t+1].id),i({projectIndex:t})):t<e(c)&&i({projectIndex:l-1}),a(n)}}function o(i){return function(t,n){var e,r,o=n.x,n=(n.y,u.findIndex(function(t){return t.id===i})),o=(e=n,o=o,r=document.querySelector(".tabs").getBoundingClientRect().width,o+=r/u.length/2,r<o?e=u.length-1:0<o&&(e=Math.floor(o/(r/u.length))),e);if(o!==n)return(r=h(u)).splice(n,1),r.splice(o,0,u[n]),d(i),r}}var u=t.projects,t=(0,m.j)(),i=t.updateProjectSetting,a=t.removeProject,l=(0,s.v9)(function(t){return t.project.projectIndex}),t=v((0,f.useState)(null!=(t=null==(t=u[0])?void 0:t.id)?t:null),2),c=t[0],d=t[1];(0,f.useEffect)(function(){var t;return d(null==(t=u[l])?void 0:t.id),document.title="".concat(null==(t=u[l])?void 0:t.name," | Dialgo"),function(){return document.title=j}},[l]);return f.createElement(p.JL,{className:"tabs"},u.map(function(t){return f.createElement(b(),{key:"tabs-"+t.id,axis:"x",onStop:o(t.id),position:{x:0,y:0}},f.createElement(p.LY,null,f.createElement(p.OL,{className:y()({active:c===t.id}),onClick:function(){return n(t.id)},onDoubleClick:function(){return i({modal:"renameProject"})},onTouchEnd:function(){return c===t.id?i({modal:"renameProject"}):n(t.id)}},f.createElement("span",{className:"text-truncate"},t.name,".da"),f.createElement(p.zx,{close:!0,className:"ml-2",onClick:r(t.id),onTouchEnd:r(t.id)}))))}))}}}]);