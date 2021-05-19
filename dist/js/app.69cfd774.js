(function(e){function t(t){for(var r,c,u=t[0],l=t[1],a=t[2],f=0,b=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(b.length)b.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,u=1;u<o.length;u++){var l=o[u];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={app:0},i=[];function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0b82":function(e,t,o){"use strict";o("715b")},"3b84":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),n=o("3fd4"),i=(o("7dd6"),{style:{overflow:"auto"}});function c(e,t,o,n,c,u){var l=this,a=Object(r["K"])("elevator");return Object(r["D"])(),Object(r["i"])("div",i,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.elevatorNum,(function(e){return Object(r["D"])(),Object(r["i"])(a,{key:e,floorNum:l.floorNum},null,8,["floorNum"])})),128))])}var u=Object(r["m"])("div",null,null,-1),l={class:"bg-gray-100 shadow-2xl elevatorInside left"},a={class:"elevatorBoarderLeft left"},s={class:"elevatorBoarderRight right"};function f(e,t,o,n,i,c){var f=this,b=Object(r["K"])("el-button");return Object(r["D"])(),Object(r["i"])(r["b"],null,[u,Object(r["m"])("div",l,[Object(r["m"])("div",a,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.floorNum,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e,class:["floorNumber",c.numberBackground(f.floorNum+1-e)]},Object(r["O"])(f.floorNum+1-e),3)})),128))]),Object(r["m"])("div",{class:"floor left bg-gray-400",style:{"margin-top":c.topGap}},[Object(r["m"])("div",{class:"door left ",style:{"margin-left":c.doorGap}},null,4),Object(r["m"])("div",{class:"door right",style:{"margin-right":c.doorGap}},null,4)],4),Object(r["m"])("div",s,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.floorNum/2,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e},[(Object(r["D"])(),Object(r["i"])(r["b"],null,Object(r["I"])(2,(function(t){return Object(r["m"])(b,{key:t,size:"mini",type:"primary",class:c.buttonBackground(f.floorNum+t-2*e-1),circle:"",onClick:function(o){return c.selectFloor(f.floorNum+t-2*e,o)}},{default:Object(r["Z"])((function(){return[Object(r["l"])(Object(r["O"])(f.floorNum+t-2*e),1)]})),_:2},1032,["class","onClick"])})),64))])})),128)),Object(r["m"])("div",null,[Object(r["m"])(b,{type:"success",icon:"el-icon-phone",circle:""}),Object(r["m"])(b,{type:"danger",icon:"el-icon-message-solid",circle:""})])])])],64)}var b=o("2909"),p=(o("a9e3"),o("d81d"),{name:"Elevator",props:{floorNum:{type:Number,default:20}},data:function(){return{currentFloor:1,topGapNumber:570,doorGapNumber:18.5,selectedFloor:Object(b["a"])(Array(20)).map((function(){return!1})),moveDirection:1}},computed:{isBusy:function(){for(var e=!0,t=0;t<this.floorNum;t++)if(!0===this.selectedFloor[t]){e=!1;break}return!e},topGap:function(){return"".concat(this.topGapNumber,"px")},doorGap:function(){return"".concat(this.doorGapNumber,"px")}},mounted:function(){},methods:{selectFloor:function(e,t){console.log(this.isBusy),this.clickHandler(t),!1===this.isBusy?(this.selectedFloor[e-1]=!0,this.moveOneFloor()):this.selectedFloor[e-1]=!0},moveOneFloor:function(){var e=this;if(this.computeMoveDirection(),!0===this.selectedFloor[this.currentFloor-1])this.openTheDoor();else var t=setInterval((function(){e.arriveAnotherFloor()&&(clearInterval(t),e.currentFloor=e.currentFloor+e.moveDirection,console.log(e.currentFloor),!0===e.selectedFloor[e.currentFloor-1]?e.openTheDoor():e.moveOneFloor()),e.topGapNumber=e.topGapNumber-e.moveDirection}),20)},arriveAnotherFloor:function(){return 1===this.moveDirection&&this.topGapNumber<=this.getTopGap(this.currentFloor+1)||-1===this.moveDirection&&this.topGapNumber>=this.getTopGap(this.currentFloor-1)},getTopGap:function(e){return 600-30*e},computeMoveDirection:function(){if(1===this.moveDirection){this.moveDirection=-1;for(var e=this.currentFloor-1;e<this.floorNum;e++)if(!0===this.selectedFloor[e]){this.moveDirection=1;break}}else{this.moveDirection=1;for(var t=0;t<this.currentFloor;t++)if(!0===this.selectedFloor[t]){this.moveDirection=-1;break}}},openTheDoor:function(){var e=this;setTimeout((function(){var t=setInterval((function(){e.doorGapNumber<=1&&(clearInterval(t),e.closeTheDoor()),e.doorGapNumber=e.doorGapNumber-.5}),20)}),500)},closeTheDoor:function(){var e=this;setTimeout((function(){var t=setInterval((function(){if(e.doorGapNumber>=18.5){if(clearInterval(t),e.selectedFloor[e.currentFloor-1]=!1,!1===e.isBusy)return;e.moveOneFloor()}e.doorGapNumber=e.doorGapNumber+.5}),20)}),2e3)},clickHandler:function(e){var t=e.target;"SPAN"==t.nodeName&&(t=e.target.parentNode),t.blur()},buttonBackground:function(e){return!1===this.selectedFloor[e]?"white":"blue"},numberBackground:function(e){return this.currentFloor===e?"blue":"bogus"}}});o("e31b");p.render=f;var d=p,m={name:"App",data:function(){return{elevatorNum:5,floorNum:20}},components:{Elevator:d}};o("0b82");m.render=c;var v=m,h=Object(r["h"])(v);h.use(n["a"]),h.mount("#app")},"715b":function(e,t,o){},e31b:function(e,t,o){"use strict";o("3b84")}});
//# sourceMappingURL=app.69cfd774.js.map