(function(e){function t(t){for(var r,i,u=t[0],l=t[1],a=t[2],f=0,b=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,a||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,u=1;u<o.length;u++){var l=o[u];0!==n[l]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},c=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0230":function(e,t,o){"use strict";o("9cf4")},"0b82":function(e,t,o){"use strict";o("715b")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),n=o("3fd4"),c=(o("7dd6"),{style:{overflow:"auto"}});function i(e,t,o,n,i,u){var l=this,a=Object(r["K"])("elevator");return Object(r["D"])(),Object(r["i"])("div",c,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.elevatorNum,(function(e){return Object(r["D"])(),Object(r["i"])(a,{key:e,floorNum:l.floorNum},null,8,["floorNum"])})),128))])}var u=Object(r["m"])("div",null,null,-1),l={class:"bg-gray-100 shadow-2xl elevatorInside left"},a={class:"elevatorBoarderLeft left"},s=Object(r["m"])("div",{class:"floor left bg-gray-400"},[Object(r["m"])("div",{class:"door left left-door"}),Object(r["m"])("div",{class:"door right right-door"})],-1),f={class:"elevatorBoarderRight right"};function b(e,t,o,n,c,i){var b=this,p=Object(r["K"])("el-button");return Object(r["D"])(),Object(r["i"])(r["b"],null,[u,Object(r["m"])("div",l,[Object(r["m"])("div",a,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.floorNum,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e,class:"floorNumber"},Object(r["O"])(b.floorNum+1-e),1)})),128))]),s,Object(r["m"])("div",f,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.floorNum/2,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e},[(Object(r["D"])(),Object(r["i"])(r["b"],null,Object(r["I"])(2,(function(t){return Object(r["m"])(p,{key:t,size:"mini",type:"primary",class:c.buttonBackground[b.floorNum+t-2*e-1],circle:"",onClick:function(o){return i.selectFloor(b.floorNum+t-2*e,o)}},{default:Object(r["ab"])((function(){return[Object(r["l"])(Object(r["O"])(b.floorNum+t-2*e),1)]})),_:2},1032,["class","onClick"])})),64))])})),128)),Object(r["m"])("div",null,[Object(r["m"])(p,{type:"success",icon:"el-icon-phone",circle:""}),Object(r["m"])(p,{type:"danger",icon:"el-icon-message-solid",circle:""})])])])],64)}var p=o("ade3"),d=o("2909"),m=(o("a9e3"),o("d81d"),{name:"Elevator",props:{floorNum:{type:Number,default:20}},data:function(){return{currentFloor:1,topGapNumber:570,doorGapNumber:18.5,selectedFloor:Object(d["a"])(Array(20)).map((function(){return!1})),moveDirection:1,buttonBackground:Object(d["a"])(Array(20)).map((function(){return"white"}))}},computed:{isBusy:function(){for(var e=!0,t=0;t<this.floorNum;t++)if(!0===this.selectedFloor[t]){e=!1;break}return!e},topGap:function(){return"".concat(this.topGapNumber,"px")},doorGap:function(){return"".concat(this.doorGapNumber,"px")}},mounted:function(){},methods:{selectFloor:function(e,t){console.log(this.isBusy),this.clickHandler(t),!1===this.isBusy?(this.selectedFloor[e-1]=!0,this.buttonBackground[e-1]="blue",this.moveOneFloor()):(this.selectedFloor[e-1]=!0,this.buttonBackground[e-1]="blue")},moveOneFloor:function(){var e=this;if(this.computeMoveDirection(),!0===this.selectedFloor[this.currentFloor-1])this.openTheDoor();else var t=setInterval((function(){e.arriveAnotherFloor()&&(clearInterval(t),e.currentFloor=e.currentFloor+e.moveDirection,console.log(e.currentFloor),!0===e.selectedFloor[e.currentFloor-1]?e.openTheDoor():e.moveOneFloor()),e.topGapNumber=e.topGapNumber-e.moveDirection}),20)},arriveAnotherFloor:function(){return 1===this.moveDirection&&this.topGapNumber<=this.getTopGap(this.currentFloor+1)||-1===this.moveDirection&&this.topGapNumber>=this.getTopGap(this.currentFloor-1)},getTopGap:function(e){return 600-30*e},computeMoveDirection:function(){if(1===this.moveDirection){this.moveDirection=-1;for(var e=this.currentFloor-1;e<this.floorNum;e++)if(!0===this.selectedFloor[e]){this.moveDirection=1;break}}else{this.moveDirection=1;for(var t=0;t<this.currentFloor;t++)if(!0===this.selectedFloor[t]){this.moveDirection=-1;break}}},openTheDoor:function(){var e=this;setTimeout((function(){var t=setInterval((function(){e.doorGapNumber<=1&&(clearInterval(t),e.closeTheDoor()),e.doorGapNumber=e.doorGapNumber-.5}),20)}),500)},closeTheDoor:function(){var e=this;setTimeout((function(){var t=setInterval((function(){if(e.doorGapNumber>=18.5){if(clearInterval(t),e.selectedFloor[e.currentFloor-1]=!1,e.buttonBackground[e.currentFloor-1]="white",!1===e.isBusy)return;e.moveOneFloor()}e.doorGapNumber=e.doorGapNumber+.5}),20)}),2e3)},clickHandler:function(e){var t=e.target;"SPAN"==t.nodeName&&(t=e.target.parentNode),t.blur()}}}),v=function(){Object(r["T"])((function(e){return Object(p["a"])({"5b385bc4-topGap":e.topGap,"5b385bc4-doorGap":e.doorGap},"5b385bc4-doorGap",e.doorGap)}))},h=m.setup;m.setup=h?function(e,t){return v(),h(e,t)}:v;var O=m;o("0230");O.render=b;var j=O,y={name:"App",data:function(){return{elevatorNum:5,floorNum:20}},components:{Elevator:j}};o("0b82");y.render=i;var N=y,g=Object(r["h"])(N);g.use(n["a"]),g.mount("#app")},"715b":function(e,t,o){},"9cf4":function(e,t,o){}});
//# sourceMappingURL=app.ed4154f1.js.map