module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pivot=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=a(n(1)),f=a(n(2)),l=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var c=t.Pivot=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.DOMNodeRef=f.default.createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.DOMNodeRef.current;this.webdatarocks=new l.default(r({},this.props,{container:e}))}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){this.webdatarocks.dispose()}},{key:"render",value:function(){return f.default.createElement("div",{ref:this.DOMNodeRef},"Pivot")}}]),t}(f.default.Component);c.propTypes={beforetoolbarcreated:u.default.func,cellclick:u.default.func,celldoubleclick:u.default.func,customizeCell:u.default.func,datachanged:u.default.func,dataerror:u.default.func,datafilecancelled:u.default.func,dataloaded:u.default.func,fieldslistclose:u.default.func,fieldslistopen:u.default.func,filteropen:u.default.func,fullscreen:u.default.func,global:u.default.object,height:u.default.oneOfType([u.default.string,u.default.number]),loadingdata:u.default.func,loadinglocalization:u.default.func,loadingreportfile:u.default.func,localizationerror:u.default.func,localizationloaded:u.default.func,openingreportfile:u.default.func,querycomplete:u.default.func,queryerror:u.default.func,ready:u.default.func,report:u.default.oneOfType([u.default.string,u.default.object]),reportchange:u.default.func,reportcomplete:u.default.func,reportfilecancelled:u.default.func,reportfileerror:u.default.func,reportfileloaded:u.default.func,runningquery:u.default.func,toolbar:u.default.bool,update:u.default.func,width:u.default.oneOfType([u.default.string,u.default.number])},t.default=c},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("webdatarocks")}]);