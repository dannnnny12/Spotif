(function(t){function e(e){for(var i,c,o=e[0],a=e[1],l=e[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0429":function(t,e,n){t.exports=n.p+"media/YOUI-IU.8479c23c.mp3"},"0a1f":function(t,e,n){t.exports=n.p+"media/LILAC-IU.7e6e6fcf.mp3"},1713:function(t,e,n){t.exports=n.p+"media/eight-IU.a5cb16eb.mp3"},4622:function(t,e,n){t.exports=n.p+"media/Into_the_I-LAND-IU.27d58665.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r={id:"app"},s=Object(i["e"])("header",null,[Object(i["e"])("h1",null,"Danny's Music Lists of IU")],-1),c=Object(i["e"])("div",{id:"bg"},null,-1),o={class:"player"},a={class:"song-title"},l={class:"controls"},u={class:"playlist"},p=Object(i["e"])("h5",null,null,-1);function d(t,e,n,d,f,h){return Object(i["f"])(),Object(i["c"])("div",r,[s,Object(i["e"])("main",null,[c,Object(i["e"])("section",o,[Object(i["e"])("h2",a,[Object(i["d"])(" >>"+Object(i["h"])(f.current.title)+" - ",1),Object(i["e"])("span",null,Object(i["h"])(f.current.artist),1)]),Object(i["e"])("div",l,[Object(i["e"])("button",{class:"prev",onClick:e[1]||(e[1]=function(){return h.prev&&h.prev.apply(h,arguments)})},"Prev"),f.isPlaying?(Object(i["f"])(),Object(i["c"])("button",{key:1,class:"pause",onClick:e[3]||(e[3]=function(){return h.pause&&h.pause.apply(h,arguments)})},"Pause")):(Object(i["f"])(),Object(i["c"])("button",{key:0,class:"play",onClick:e[2]||(e[2]=function(){return h.play&&h.play.apply(h,arguments)})},"Play")),Object(i["e"])("button",{class:"next",onClick:e[4]||(e[4]=function(){return h.next&&h.next.apply(h,arguments)})},"Next")])]),Object(i["e"])("section",u,[p,(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(f.songs,(function(t){return Object(i["f"])(),Object(i["c"])("button",{key:t.src,onClick:function(e){return h.play(t)},class:t.src==f.current.src?"song playing":"song"},Object(i["h"])(t.title)+" - "+Object(i["h"])(t.artist),11,["onClick"])})),128))])])])}var f={name:"app",data:function(){return{current:{},index:0,isPlaying:!1,songs:[{title:"BBIBBI",artist:"IU",src:n("ddd3")},{title:"Coin",artist:"IU",src:n("adce")},{title:"Blueming",artist:"IU",src:n("88db")},{title:"Eight",artist:"IU",src:n("1713")},{title:"Palette",artist:"IU",src:n("ef51")},{title:"Celebrity",artist:"IU",src:n("ed66")},{title:"LILAC",artist:"IU",src:n("0a1f")},{title:"Above the Time",artist:"IU",src:n("c6b60")},{title:"Into the I-Land",artist:"IU",src:n("4622")},{title:"Lullaby",artist:"IU",src:n("751b")},{title:"YOU & I",artist:"IU",src:n("0429")}],player:new Audio}},methods:{play:function(t){"undefined"!=typeof t.src&&(this.current=t,this.player.src=this.current.src),this.player.play(),this.player.addEventListener("ended",function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)}.bind(this)),this.isPlaying=!0},pause:function(){this.player.pause(),this.isPlaying=!1},next:function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)},prev:function(){this.index--,this.index<0&&(this.index=this.songs.length-1),this.play(this.songs[this.index])}},created:function(){this.current=this.songs[this.index],this.player.src=this.current.src}};n("a7e7");f.render=d;var h=f;Object(i["b"])(h).mount("#app")},5957:function(t,e,n){},"751b":function(t,e,n){t.exports=n.p+"media/Lullaby-IU.7d42b186.mp3"},"88db":function(t,e,n){t.exports=n.p+"media/Blueming-IU.78f6ecfa.mp3"},a7e7:function(t,e,n){"use strict";n("5957")},adce:function(t,e,n){t.exports=n.p+"media/Coin-IU.4c5cce81.mp3"},c6b60:function(t,e,n){t.exports=n.p+"media/above_the_time-IU.bd75176c.mp3"},ddd3:function(t,e,n){t.exports=n.p+"media/BBIBBI-IU.59f8e36d.mp3"},ed66:function(t,e,n){t.exports=n.p+"media/Celebrity-IU.0fadf60b.mp3"},ef51:function(t,e,n){t.exports=n.p+"media/Palette-IU.e3d59438.mp3"}});
//# sourceMappingURL=app.428b0a85.js.map