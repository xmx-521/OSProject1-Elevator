(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);a&&a(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,c=1;c<o.length;c++){var u=o[c];0!==n[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var a=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1421:function(e,t,o){"use strict";o("6456")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),n=o("3fd4"),s=(o("7dd6"),{style:{overflow:"auto"}});function i(e,t,o,n,i,c){var u=this,l=Object(r["K"])("outer-panel"),a=Object(r["K"])("elevator");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])("div",null,[Object(r["m"])(l,{floorNum:this.floorNum,upRequests:this.upRequests,downRequests:this.downRequests,onAdd:c.changeRequest,ref:"pannel"},null,8,["floorNum","upRequests","downRequests","onAdd"])]),Object(r["m"])("div",s,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.elevatorNum,(function(e){return Object(r["D"])(),Object(r["i"])(a,{ref:c.setItemRef,key:e,floorNum:u.floorNum,upRequests:u.upRequests,downRequests:u.downRequests,onCancel:c.changeRequest},null,8,["floorNum","upRequests","downRequests","onCancel"])})),128))])],64)}var c=o("2909"),u=(o("d81d"),{class:"left"}),l={class:"floorInfo"},a={class:"left currentFloor"},f={class:"bg-gray-100 shadow-2xl elevatorInside left"},d={class:"elevatorBoarderLeft left"},m={class:"elevatorBoarderRight right"};function h(e,t,o,n,s,i){var c=this,h=Object(r["K"])("el-button");return Object(r["D"])(),Object(r["i"])("div",u,[Object(r["m"])("div",{class:["indicateLight",i.indicateLightStyle]},[Object(r["m"])("div",l,[Object(r["m"])("div",{class:["el-icon-caret-top left arrow leftArrow",i.arrowStyle(1)]},null,2),Object(r["m"])("div",a,Object(r["O"])(this.currentFloor)+"F ",1),Object(r["m"])("div",{class:["el-icon-caret-bottom right arrow rightArrow",i.arrowStyle(-1)]},null,2)]),Object(r["m"])("div",{class:i.indicateLightStyle},Object(r["O"])(this.isBusy?"忙碌":"空闲"),3)],2),Object(r["m"])("div",f,[Object(r["m"])("div",d,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.floorNum,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e,class:["floorNumber",i.numberBackground(c.floorNum+1-e)]},Object(r["O"])(c.floorNum+1-e),3)})),128))]),Object(r["m"])("div",{class:"floor left bg-gray-400",style:{"margin-top":i.topGap}},[Object(r["m"])("div",{class:"door left ",style:{"margin-left":i.doorGap}},null,4),Object(r["m"])("div",{class:"door right",style:{"margin-right":i.doorGap}},null,4)],4),Object(r["m"])("div",m,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.floorNum/2,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e},[(Object(r["D"])(),Object(r["i"])(r["b"],null,Object(r["I"])(2,(function(t){return Object(r["m"])(h,{key:t,size:"mini",type:"primary",class:i.buttonBackground(c.floorNum+t-2*e-1),circle:"",onClick:function(o){return i.selectFloor(c.floorNum+t-2*e,o)}},{default:Object(r["Z"])((function(){return[Object(r["l"])(Object(r["O"])(c.floorNum+t-2*e),1)]})),_:2},1032,["class","onClick"])})),64))])})),128)),Object(r["m"])("div",null,[Object(r["m"])(h,{type:"success",icon:"el-icon-phone",circle:""}),Object(r["m"])(h,{type:"danger",icon:"el-icon-message-solid",circle:""})])])])])}o("a9e3"),o("d3b7"),o("25f0");var p={name:"Elevator",props:{floorNum:{type:Number,default:20},downRequests:Array,upRequests:Array},data:function(){return{currentFloor:1,topGapNumber:570,doorGapNumber:19.5,selectedFloor:Object(c["a"])(Array(20)).map((function(){return!1})),assignedDownRequests:Object(c["a"])(Array(20)).map((function(){return!1})),assignedUpRequests:Object(c["a"])(Array(20)).map((function(){return!1})),moveDirection:1}},computed:{isBusy:function(){for(var e=!0,t=0;t<this.floorNum;t++)if(!0===this.selectedFloor[t]||!0===this.assignedUpRequests[t]||!0===this.assignedDownRequests[t]){e=!1;break}return!e},topGap:function(){return"".concat(this.topGapNumber,"px")},doorGap:function(){return"".concat(this.doorGapNumber,"px")},indicateLightStyle:function(){return this.isBusy?"busy":"free"}},mounted:function(){},emits:["cancel"],methods:{selectFloor:function(e,t){console.log(this.isBusy),this.clickHandler(t),!1===this.isBusy?(this.selectedFloor[e-1]=!0,this.moveOneFloor()):this.selectedFloor[e-1]=!0},dispatch:function(e,t){1===t?!1===this.isBusy?(this.assignedUpRequests[e-1]=!0,this.moveOneFloor()):this.assignedUpRequests[e-1]=!0:!1===this.isBusy?(this.assignedDownRequests[e-1]=!0,this.moveOneFloor()):this.assignedDownRequests[e-1]=!0},moveOneFloor:function(){var e=this;if(this.computeMoveDirection(),!0===this.selectedFloor[this.currentFloor-1]||!0===this.upRequests[this.currentFloor-1]||!0===this.downRequests[this.currentFloor-1])!0===this.upRequests[this.currentFloor-1]?this.moveDirection=1:!0===this.downRequests[this.currentFloor-1]&&(this.moveDirection=-1),this.openTheDoor();else var t=setInterval((function(){e.arriveAnotherFloor()&&(clearInterval(t),e.currentFloor=e.currentFloor+e.moveDirection,console.log(e.currentFloor),!0===e.selectedFloor[e.currentFloor-1]||!0===e.upRequests[e.currentFloor-1]&&1===e.moveDirection||!0===e.downRequests[e.currentFloor-1]&&-1===e.moveDirection?e.openTheDoor():e.moveOneFloor()),e.topGapNumber=e.topGapNumber-e.moveDirection}),33)},arriveAnotherFloor:function(){return 1===this.moveDirection&&this.topGapNumber<=this.getTopGap(this.currentFloor+1)||-1===this.moveDirection&&this.topGapNumber>=this.getTopGap(this.currentFloor-1)},getTopGap:function(e){return 600-30*e},computeMoveDirection:function(){if(1===this.moveDirection){this.moveDirection=-1;for(var e=this.currentFloor-1;e<this.floorNum;e++)if(!0===this.selectedFloor[e]||!0===this.assignedUpRequests[e]||!0===this.assignedDownRequests[e]){this.moveDirection=1;break}}else{this.moveDirection=1;for(var t=0;t<this.currentFloor;t++)if(!0===this.selectedFloor[t]||!0===this.assignedUpRequests[t]||!0===this.assignedDownRequests[t]){this.moveDirection=-1;break}}},openTheDoor:function(){var e=this;setTimeout((function(){var t=setInterval((function(){e.doorGapNumber<=.5&&(clearInterval(t),e.closeTheDoor()),e.doorGapNumber=e.doorGapNumber-.5}),20)}),500)},closeTheDoor:function(){var e=this;setTimeout((function(){var t=setInterval((function(){if(e.doorGapNumber>=19.5){if(clearInterval(t),e.selectedFloor[e.currentFloor-1]=!1,!0===e.upRequests[e.currentFloor-1]&&1===e.moveDirection&&e.$emit("cancel",{floor:e.currentFloor,direction:1,state:!1}),!0===e.downRequests[e.currentFloor-1]&&-1===e.moveDirection&&e.$emit("cancel",{floor:e.currentFloor,direction:-1,state:!1}),!1===e.isBusy)return;setTimeout((function(){e.moveOneFloor()}),500)}e.doorGapNumber=e.doorGapNumber+.5}),25)}),2e3)},clickHandler:function(e){var t=e.target;"SPAN"==t.nodeName&&(t=e.target.parentNode),t.blur()},buttonBackground:function(e){return!1===this.selectedFloor[e]?"white":"blue"},numberBackground:function(e){return this.currentFloor===e?"blue":"bogus"},arrowStyle:function(e){return this.isBusy&&e===this.moveDirection?"arrowSelected":"arrowUnSelected"},console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){console.log("我是子组件的方法")})),getFarestFloor:function(e){if(-1===e){for(var t=this.currentFloor,o=0;o<this.floorNum;o++)!0!==this.selectedFloor[o]&&!0!==this.assignedUpRequests[o]&&!0!==this.assignedDownRequests[o]||(t=o+1);return t}if(1===e){for(var r=this.currentFloor,n=this.floorNum-1;n>=0;n--)!0!==this.selectedFloor[n]&&!0!==this.assignedUpRequests[n]&&!0!==this.assignedDownRequests[n]||(r=n+1);return r}},getStopTimes:function(e,t){for(var o=0,r=e-1;r<t;r++)!0===this.selectedFloor[r]&&o++;return o}}};o("7997");p.render=h;var b=p,v={class:"pannelBackground"};function O(e,t,o,n,s,i){var c=Object(r["K"])("el-button"),u=Object(r["K"])("el-button-group");return Object(r["D"])(),Object(r["i"])("div",v,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["I"])(this.floorNum,(function(e){return Object(r["D"])(),Object(r["i"])("div",{key:e,class:"left pannelButton"},[Object(r["m"])("div",null,Object(r["O"])(e)+"F ",1),Object(r["m"])(u,null,{default:Object(r["Z"])((function(){return[Object(r["m"])(c,{type:"primary",icon:"el-icon-top",circle:"",onClick:function(t){return i.addRequest(e,1,t)},class:i.getButtonClass(e,1)},null,8,["onClick","class"]),Object(r["m"])(c,{type:"primary",icon:"el-icon-bottom",circle:"",onClick:function(t){return i.addRequest(e,-1,t)},class:i.getButtonClass(e,-1)},null,8,["onClick","class"])]})),_:2},1024)])})),128))])}var g={name:"OuterPanel",props:{floorNum:{type:Number,default:20},upRequests:{type:Array,default:Object(c["a"])(Array(20)).map((function(){return!1}))},downRequests:{type:Array,default:Object(c["a"])(Array(20)).map((function(){return!1}))}},emits:["add"],methods:{clickHandler:function(e){var t=e.target;" SPAN"==t.nodeName&&(t=e.target.parentNode),t.blur()},addRequest:function(e,t,o){this.clickHandler(o),console.log("emit"),this.$emit("add",{floor:e,direction:t,state:!0})},getButtonClass:function(e,t){return 1===t?!0===this.upRequests[e-1]?"pannelSelected":"pannelUnSelected":!0===this.downRequests[e-1]?"pannelSelected":"pannelUnSelected"}}};o("aefa");g.render=O;var j=g,R={name:"App",data:function(){return{elevatorNum:5,floorNum:20,upRequests:Object(c["a"])(Array(20)).map((function(){return!1})),downRequests:Object(c["a"])(Array(20)).map((function(){return!1})),ItemRefs:[]}},components:{Elevator:b,OuterPanel:j},methods:{changeRequest:function(e){console.log(e),1===e.direction?this.upRequests[e.floor-1]=e.state:this.downRequests[e.floor-1]=e.state,!0===e.state?this.dispatchRequest(e.floor,e.direction):this.cancelDisPatchRequest(e.floor,e.direction)},setItemRef:function(e){this.ItemRefs.push(e)},dispatchRequest:function(e,t){console.log("dispatch");for(var o=0,r=1e5,n=0;n<this.elevatorNum;n++){var s=this.ItemRefs[n].currentFloor,i=this.ItemRefs[n].getFarestFloor(-1),c=this.ItemRefs[n].getFarestFloor(1),u=1000001;1===this.ItemRefs[n].moveDirection?(console.log("enter"),1===t?s<=e?u=5*this.ItemRefs[n].getStopTimes(s,e)+e-i:(u=5*this.ItemRefs[n].getStopTimes(i,c)+(c-s),u+=i>=e?c-e:c-i+(e-i)):u=s<=e?c<=e?5*this.ItemRefs[n].getStopTimes(s,e)+(e-s):5*this.ItemRefs[n].getStopTimes(s,c)+(c-s)+(c-e):5*this.ItemRefs[n].getStopTimes(e,c)+(c-s)+(c-e)):1===t?u=s<e?5*this.ItemRefs[n].getStopTimes(i,e)+(s-i)+(e-i):i<e?5*this.ItemRefs[n].getStopTimes(i,s)+(s-i)+(e-i):5*this.ItemRefs[n].getStopTimes(e,s)+(s-e):s<e?(u=5*this.ItemRefs[n].getStopTimes(i,e)+(s-i),u+=e>=c?e-i:c-i+(c-e)):u=5*this.ItemRefs[n].getStopTimes(e,s)+(s-e),r>u&&(o=n,r=u)}this.ItemRefs[o].dispatch(e,t)},cancelDisPatchRequest:function(e,t){for(var o=0;o<this.elevatorNum;o++)1===t?this.ItemRefs[o].assignedUpRequests[e-1]=!1:this.ItemRefs[o].assignedDownRequests[e-1]=!1}}};o("1421");R.render=i;var y=R,q=Object(r["h"])(y);q.use(n["a"]),q.mount("#app")},6456:function(e,t,o){},7997:function(e,t,o){"use strict";o("f0f3")},"90c1":function(e,t,o){},aefa:function(e,t,o){"use strict";o("90c1")},f0f3:function(e,t,o){}});
//# sourceMappingURL=app.670ace17.js.map