(function(e){function t(t){for(var o,i,a=t[0],s=t[1],c=t[2],l=0,m=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(m.length)m.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},u=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"68dd9ba5"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=i(e);var c=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",c.name="ChunkLoadError",c.type=o,c.request=u,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/jbehave-job-tracker-js/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"0fa1":function(e,t,n){},"1d3f":function(e,t,n){},"466f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),e.loading.val?n("div",[n("Spinner",{attrs:{loading:e.loading.val}})],1):e._e(),n("router-view")],1)},u=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h1",[e._v("Job Queue")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])},a=[],s={name:"Header"},c=s,l=(n("99cd"),n("2877")),d=Object(l["a"])(c,i,a,!1,null,"39a1e3de",null),m=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"loading"},[o("h1",[e._v(" loading ")]),o("div",{staticClass:"loader-gif"},[o("img",{attrs:{src:n("70a2")}})]),o("h1",[e._v(" loading ")])])}],h={props:["start"],mounted:function(){},data:function(){return{}}},p=h,v=(n("8d1c"),Object(l["a"])(p,f,b,!1,null,"50a4c979",null)),j=v.exports,_={components:{Header:m,Spinner:j},data:function(){return{loading:{val:!0}}},provide:function(){return{loader:this.loading}},methods:{toggleLoading:function(){this.loading=!this.loading}}},g=_,y=(n("034f"),Object(l["a"])(g,r,u,!1,null,null,null)),I=y.exports,Q=(n("d3b7"),n("8c4f")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.currentItem?n("div",[n("JobQueue",{attrs:{currentJob:e.currentItem,jobQueue:e.jobQueue},on:{"extend-job":e.extendJob,"del-job":e.deleteJob,"del-current-job":e.deleteCurrentJob,"job-finished":e.deleteJob}})],1):n("div",[n("h1",[e._v(" There is currently no job ")])]),n("Members",{attrs:{members:e.members},on:{"queue-job":e.addJob}})],1)},C=[],J=(n("4de4"),n("bc3a")),w=n.n(J),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.currentJob.ID?n("div",[n("div",{key:e.currentJob.ID},[n("CurrentItem",{attrs:{jobQueueItem:e.currentJob},on:{"extend-job":function(t){return e.$emit("extend-job",e.currentJob)},"del-current-job":function(t){return e.$emit("del-current-job",e.currentJob.ID)},"job-finished":function(t){return e.$emit("job-finished",e.jobQueueItem.ID)}}})],1),n("h1",[e._v(" Next in Queue (max 10) ")]),e._l(e.jobQueue,(function(t){return n("div",{key:t.ID},[n("JobQueueItem",{attrs:{jobQueueItem:t},on:{"del-job":function(n){return e.$emit("del-job",t.ID)}}})],1)}))],2):n("div",[n("h1",[e._v(" There is currently no job ")])])},k=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"job-queue-item",class:{"is-complete":e.jobQueueItem.completed}},[n("p",[e._v(" "+e._s(e.jobQueueItem.title)+" "),n("button",{staticClass:"del",on:{click:function(t){return e.$emit("del-job",e.jobQueueItem.ID)}}},[e._v("x ")])])])},O=[],M={name:"JobQueueItem",props:["jobQueueItem"],methods:{markComplete:function(){this.jobQueueItem.completed=!this.jobQueueItem.completed}}},T=M,S=(n("fba1"),Object(l["a"])(T,D,O,!1,null,"03e82d1a",null)),E=S.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"current-item",class:{"is-complete":e.jobQueueItem.completed}},[n("h1",[e._v(" Current Job ")]),n("div",[n("Counter",{attrs:{utcTimeString:e.jobQueueItem.complete,year:2021,month:11,date:24,hour:4,minute:10,second:5,millisecond:0},on:{"job-finished":function(t){return e.$emit("job-finished",e.jobQueueItem.ID)}}})],1),n("p",[n("button",{staticClass:"extend-job",on:{click:function(t){return e.$emit("extend-job",e.jobQueueItem)}}},[e._v(" Extend Job ")]),e._v(" "+e._s(e.jobQueueItem.title)+" "),n("button",{staticClass:"del",on:{click:function(t){return e.$emit("del-current-job",e.jobQueueItem.ID)}}},[e._v(" x ")])])])},H=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loaded?n("div",[e._m(0),n("section",{staticClass:"flex text-6xl justify-center content-center"},[e._v(" "+e._s(e.displayHours)+" hours "),n("span",{staticClass:"leading-snug"},[e._v(":")]),e._v(" "+e._s(e.displayMinutes)+" minutes "),n("span",{staticClass:"leading-snug"},[e._v(":")]),e._v(" "+e._s(e.displaySeconds)+" seconds ")])]):e._e()},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"text-3xl flex mx-auto"},[n("h3",[e._v(" Remaining Time ")])])}],N=(n("fb6a"),n("ac1f"),n("1276"),{components:{},props:["utcTimeString","year","month","date","hour","minute","second","millisecond"],data:function(){return{displayDays:0,displayHours:0,displayMinutes:0,displaySeconds:0,loaded:!1}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 60*this._hours},end:function(){return this.utcTimeString?new Date(this.utcTimeString):new Date(this.year,this.month,this.date,this.hour,this.minute,this.second,this.millisecond)}},mounted:function(){this.showRemaining()},methods:{assignTimeValues:function(){if(this.utcTimeString){var e=this.utcTimeString.split(" ");this.year=e[0],this.month=e[1],this.date=e[2],this.hour=e[3],this.minute=e[4],this.second=e[5],this.millisecond=e[6]}},formatNum:function(e){return e<10?"0"+e:e},showRemaining:function(){var e=this,t=setInterval((function(){var n=new Date,o=n.toUTCString().length,r=n.toUTCString().slice(0,o-4),u=new Date(r),i=e.end.getTime()-u.getTime();if(i<0)return clearInterval(t),void e.$emit("job-finished");var a=Math.floor(i/e._days),s=Math.floor(i%e._days/e._hours),c=Math.floor(i%e._hours/e._minutes),l=Math.floor(i%e._minutes/e._seconds);e.displayMinutes=e.formatNum(c),e.displaySeconds=e.formatNum(l),e.displayHours=e.formatNum(s),e.displayDays=e.formatNum(a),e.loaded=!0}),1e3)}}}),A=N,R=Object(l["a"])(A,P,q,!1,null,"306d5444",null),U=R.exports,z={name:"CurrentItem",components:{Counter:U},props:["jobQueueItem"],methods:{}},V=z,B=(n("c412"),Object(l["a"])(V,L,H,!1,null,"15b7bde0",null)),F=B.exports,G={name:"JobQueue",props:["currentJob","jobQueue"],components:{JobQueueItem:E,CurrentItem:F}},K=G,W=Object(l["a"])(K,$,k,!1,null,"a4bbe37c",null),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(" Members ")]),e._l(e.members.people,(function(t){return n("div",{key:t.ID},[n("Member",{attrs:{member:t},on:{"queue-job":function(n){return e.$emit("queue-job",t)}}})],1)}))],2)},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"job-queue-item"},[n("p",[e._v(" "+e._s(e.member.title)+" "),n("button",{staticClass:"add",on:{click:function(t){return e.$emit("queue-job",e.member)}}},[e._v(" Queue Job ")])])])},te=[],ne={name:"Member",props:["member"],methods:{}},oe=ne,re=(n("618d"),Object(l["a"])(oe,ee,te,!1,null,"644b2913",null)),ue=re.exports,ie={name:"Members",props:["members"],components:{Member:ue}},ae=ie,se=Object(l["a"])(ae,Y,Z,!1,null,"c4c6469e",null),ce=se.exports,le={name:"Home",components:{Members:ce,JobQueue:X},data:function(){return{currentItem:{},jobQueue:[],members:[]}},methods:{isLoading:function(){this.loader.val=!0},isLoaded:function(){this.loader.val=!1},extendJob:function(e){var t=this,n=new Date(e.complete);n.setMinutes(n.getMinutes()+15);var o=n,r=e.title;this.isLoading(),w.a.put("https://secure-retreat-15328.herokuapp.com/jobs/".concat(e.ID),{complete:o,title:r}).then((function(e){var n=e.data.jobs;t.currentItem=n.shift(),t.jobQueue=n})).catch((function(e){return alert(e)})).finally((function(){t.isLoaded()}))},deleteCurrentJobCompleted:function(e){var t=this;this.isLoading(),w.a.delete("https://secure-retreat-15328.herokuapp.com/jobs/".concat(e,"/current/complete")).then((function(e){var n=e.data.jobs;t.currentItem=n?t.jobQueue.shift():void 0})).catch((function(e){return alert(e)})).finally((function(){t.isLoaded()}))},deleteCurrentJob:function(e){var t=this;this.isLoading(),w.a.delete("https://secure-retreat-15328.herokuapp.com/jobs/".concat(e,"/current")).then((function(){t.jobQueue&&t.jobQueue.length>0?t.currentItem=t.jobQueue.shift():t.currentItem=void 0})).catch((function(e){return alert(e)})).finally((function(){t.isLoaded()}))},deleteJob:function(e){var t=this;this.isLoading(),w.a.delete("https://secure-retreat-15328.herokuapp.com/jobs/".concat(e)).then((function(){t.jobQueue=t.jobQueue.filter((function(t){return t.ID!==e}))})).catch((function(e){return alert(e)})).finally((function(){t.isLoaded()}))},addJob:function(e){var t=this;if(this.jobQueue.length>=10)alert("The max queue size is 10 jobs");else{var n=e.title;if(this.jobQueue.length>0){var o=this.jobQueue[this.jobQueue.length-1],r=new Date(o.complete),u=r;u.setHours(r.getHours()+2),e.complete=u}else{n=e.title;var i=new Date;i.setHours(i.getHours()+2)}this.isLoading(),w.a.post("https://secure-retreat-15328.herokuapp.com/add/".concat(n),{title:n}).then((function(e){var n=e.data.jobs;n.length>0&&(t.currentItem&&t.currentItem===n[0]?t.jobQueue=[e.data.jobs]:t.currentItem&&t.currentItem!==n[0]?(t.currentItem=n.shift(),t.jobQueue=n):t.currentItem=n[0])})).catch((function(e){return console.log(e)})).finally((function(){t.isLoaded()}))}}},created:function(){var e=this;w.a.get("https://secure-retreat-15328.herokuapp.com/jobs").then((function(t){t.data.jobs&&(e.currentItem=t.data.jobs.shift(),e.jobQueue=t.data.jobs)})).catch((function(e){return alert(e)})),w.a.get("https://secure-retreat-15328.herokuapp.com/people").then((function(t){e.members=t.data})).catch((function(e){alert(e)})).finally((function(){e.isLoaded()}))},inject:["loader"]},de=le,me=(n("cccb"),Object(l["a"])(de,x,C,!1,null,null,null)),fe=me.exports;o["a"].use(Q["a"]);var be=[{path:"/",name:"Home",component:fe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],he=new Q["a"]({routes:be}),pe=he;o["a"].config.productionTip=!1,new o["a"]({router:pe,render:function(e){return e(I)}}).$mount("#app")},"5ced":function(e,t,n){},"5ea4":function(e,t,n){},"618d":function(e,t,n){"use strict";var o=n("96e0"),r=n.n(o);r.a},"70a2":function(e,t,n){e.exports=n.p+"img/dancing-vegeta.219b18b2.gif"},"85ec":function(e,t,n){},"8d1c":function(e,t,n){"use strict";var o=n("0fa1"),r=n.n(o);r.a},"96e0":function(e,t,n){},"99cd":function(e,t,n){"use strict";var o=n("466f"),r=n.n(o);r.a},c412:function(e,t,n){"use strict";var o=n("1d3f"),r=n.n(o);r.a},cccb:function(e,t,n){"use strict";var o=n("5ced"),r=n.n(o);r.a},fba1:function(e,t,n){"use strict";var o=n("5ea4"),r=n.n(o);r.a}});
//# sourceMappingURL=app.34f2ad8f.js.map