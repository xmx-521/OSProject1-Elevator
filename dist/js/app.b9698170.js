(function(e){function t(t){for(var n,u,i=t[0],l=t[1],a=t[2],b=0,s=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(s.length)s.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b82":function(e,t,r){"use strict";r("715b")},"0ec5":function(e,t,r){},"1a8cc":function(e,t,r){"use strict";r("0ec5")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=r("3fd4"),c=(r("7dd6"),{style:{overflow:"auto"}});function u(e,t,r,o,u,i){var l=this,a=Object(n["K"])("elevator");return Object(n["D"])(),Object(n["i"])("div",c,[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["I"])(this.elevatorNum,(function(e){return Object(n["D"])(),Object(n["i"])(a,{key:e,floorNum:l.floorNum},null,8,["floorNum"])})),128))])}var i={class:"elevator left"},l={class:"elevatorBoarderLeft left"},a=Object(n["m"])("div",{class:"floor inline"},[Object(n["m"])("div",{class:"door left"}),Object(n["m"])("div",{class:"door left"})],-1),f={class:"elevatorBoarderRight right"};function b(e,t,r,o,c,u){var b=this,s=Object(n["K"])("el-button");return Object(n["D"])(),Object(n["i"])("div",i,[Object(n["m"])("div",l,[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["I"])(this.floorNum,(function(e){return Object(n["D"])(),Object(n["i"])("div",{key:e,class:"floorNumber"},Object(n["O"])(b.floorNum+1-e),1)})),128))]),a,Object(n["m"])("div",f,[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["I"])(this.floorNum/2,(function(e){return Object(n["D"])(),Object(n["i"])("div",{key:e},[Object(n["m"])(s,{type:"primary",size:"mini"},{default:Object(n["Z"])((function(){return[Object(n["l"])(Object(n["O"])(b.floorNum+1-2*e),1)]})),_:2},1024),Object(n["m"])(s,{type:"primary",size:"mini"},{default:Object(n["Z"])((function(){return[Object(n["l"])(Object(n["O"])(b.floorNum+2-2*e),1)]})),_:2},1024)])})),128))])])}r("a9e3");var s={name:"Elevator",props:{floorNum:Number}};r("1a8cc");s.render=b;var O=s,p={name:"App",data:function(){return{elevatorNum:5,floorNum:20}},components:{Elevator:O}};r("0b82");p.render=u;var j=p,d=Object(n["h"])(j);d.use(o["a"]),d.mount("#app")},"715b":function(e,t,r){}});
//# sourceMappingURL=app.b9698170.js.map