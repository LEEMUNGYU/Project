(function(){"use strict";var e={1084:function(e,t,n){var o=n(9963),i=n(6252);function r(e,t,n,o,r,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var a={name:"App",components:{}},s=n(3744);const c=(0,s.Z)(a,[["render",r]]);var l=c,u=n(3907),d=n(4702),m=n(5008);const f=(0,u.MT)({state(){return{email:"",cookieID:(0,m.cd)()||"",userId:"",cookiePWD:(0,m.Zl)()||"",diseaseNm:[],allergieList:[],spareAllergie:"",pwd:"",pwdq:"",pwda:"",codeAlle:[],codeDise:[],Allco:"",Diseco:"",DietList:[],FoodsNutri:[],TodayList:"",todayOccasion:"",MealItems:[],showSituation:[],visibleSituation:[],callRecord:""}},getters:{isLogin(e){return""!==e.result.nickNm}},mutations:{setUserEmail(e,t){e.email=t},setUserIdx(e,t){e.userId=t},setUserName(e,t){e.nickNm=t},setDiseaseNm(e,t){e.diseaseNm="#"+t.replace(/#/g," #")},setAllergie(e,t){e.allergieList="#"+t.replace(/#/g," #")},setToken(e,t){e.token=t},callRecord(e,t){e.callRecord=t},resetState(e){const t=()=>({email:"",token:"",userId:"",nickNm:"",diseaseNm:"",allergieList:[],spareAllergie:"",pwd:"",pwdq:"",pwda:"",codeAlle:[],codeDise:[],Allco:"",Diseco:"",todayOccasion:"",DietList:[],FoodsNutri:"",TodayList:"",MealItems:[],showSituation:[],visibleSituation:[]});Object.assign(e,t())},setAllergieList(e,t){e.allergieList=t.map((e=>" #"+e.name))},setAllergieList2(e,t){e.allergieList=t.map((e=>" #"+e))},setSpearAllergie(e,t){e.spareAllergie="#"+t},setCreateUserData(e,t){e.email=t.email,e.pwd=t.pwd,e.pwdq=t.pwdq,e.pwda=t.pwda,e.nickNm=t.nickname},setCodeDise(e,t){e.codeDise=t},setDiseco(e,t){e.Diseco=t},setCodeAlle(e,t){e.codeAlle=t},setAllco(e,t){e.Allco=t},setDietList(e,t){e.DietList=t},setFoodsNutri(e,t){e.DietList=t},setTodayList(e,t){e.TodayList=t},setTodayOccasion(e,t){e.todayOccasion=t},updateMyMealItems(e,t){e.MealItems=t},updateShowSituation(e,t){e.showSituation=t},updateVisibleSituation(e,t){e.visibleSituation=t}},actions:{updateUserData({commit:e},t){e("setCreateUserData",t)}},plugins:[(0,d.Z)()]});var p=f,h=n(2201);const b=[{path:"/",name:"FoodyLogin",component:()=>Promise.all([n.e(950),n.e(121),n.e(452)]).then(n.bind(n,4360))},{path:"/SignInUser",name:"SignInUser",component:()=>Promise.all([n.e(950),n.e(97)]).then(n.bind(n,8440))},{path:"/checkda",name:"checkDA",component:()=>Promise.all([n.e(950),n.e(468)]).then(n.bind(n,3234))},{path:"/SignLast",name:"SignInLast",component:()=>Promise.all([n.e(950),n.e(121),n.e(14)]).then(n.bind(n,5644))},{path:"/scPW",name:"scPW",component:()=>Promise.all([n.e(950),n.e(121),n.e(949)]).then(n.bind(n,6463))},{path:"/board",name:"DashBoard",component:()=>Promise.all([n.e(950),n.e(121),n.e(989)]).then(n.bind(n,4621))},{path:"/dietlist",name:"DietList",component:()=>Promise.all([n.e(950),n.e(121),n.e(954)]).then(n.bind(n,2429))},{path:"/quit",name:"FoodyQuit",component:()=>Promise.all([n.e(950),n.e(121),n.e(277)]).then(n.bind(n,5692))},{path:"/QuitComp",name:"QuitComp",component:()=>Promise.all([n.e(950),n.e(299)]).then(n.bind(n,3806))},{path:"/SignInComp",name:"SignInComp",component:()=>Promise.all([n.e(121),n.e(563)]).then(n.bind(n,3563))},{path:"/request",name:"FoodyRequest",component:()=>Promise.all([n.e(950),n.e(121),n.e(376)]).then(n.bind(n,1244))},{path:"/RequestComp",name:"RequestComp",component:()=>Promise.all([n.e(950),n.e(787)]).then(n.bind(n,7389))},{path:"/rule",name:"UserRule",component:()=>Promise.all([n.e(950),n.e(61)]).then(n.bind(n,626))},{path:"/change",name:"ChangeInfo",component:()=>Promise.all([n.e(950),n.e(121),n.e(693)]).then(n.bind(n,9630))},{path:"/changePW",name:"changePW",component:()=>Promise.all([n.e(950),n.e(121),n.e(325)]).then(n.bind(n,6503))},{path:"/UserInfo",name:"UserInfo",component:()=>Promise.all([n.e(950),n.e(236)]).then(n.bind(n,7727))},{path:"/changeDis",name:"ChangeDiseases",component:()=>Promise.all([n.e(950),n.e(121),n.e(930)]).then(n.bind(n,6138))},{path:"/changeAle",name:"ChangeAllergy",component:()=>Promise.all([n.e(950),n.e(121),n.e(53)]).then(n.bind(n,522))},{path:"/manage",name:"DietManage",component:()=>Promise.all([n.e(950),n.e(121),n.e(345)]).then(n.bind(n,811))},{path:"/manage2",name:"DietManage2",component:()=>Promise.all([n.e(950),n.e(121),n.e(126)]).then(n.bind(n,4800))}],g=(0,h.p7)({history:(0,h.PO)("/"),routes:b});var v=g;(0,o.ri)(l).use(v).use(p).mount("#app")},5008:function(e,t,n){function o(e){document.cookie=`til_auth=${e}`}function i(e){document.cookie=`til_user=${e}`}function r(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function a(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,"$1")}function s(){let e=document.cookie.split(";");for(let t=0;t<e.length;t++){let n=e[t],o=n.indexOf("="),i=o>-1?n.substring(0,o):n;document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"}}n.d(t,{QR:function(){return i},Zl:function(){return a},aZ:function(){return o},cd:function(){return r},kT:function(){return s}})}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{14:"d0fa0241",53:"9273b6c3",61:"be439a1d",97:"21cea268",121:"f9f6598c",126:"188e79de",236:"a829892c",277:"56922749",299:"f032f93f",325:"6f1541e1",345:"1b4d35b1",376:"5c22fb1b",452:"11913906",468:"0e08edb4",563:"af8d3fb4",693:"a6653cff",787:"3f183edf",930:"2eb96be9",949:"b38e4a33",950:"29d600e9",954:"09982630",989:"edb8c668"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{14:"7751c0ac",53:"87bdeb09",61:"7838d3cc",97:"4c5ac1ca",126:"38378aad",236:"3b1d41cc",277:"4313f6aa",299:"f87cb7f9",325:"481f69be",345:"37acb784",376:"316f7366",452:"7e4ecdda",468:"5d2a2394",563:"5638631e",693:"dce5501c",787:"132da7f6",930:"91d2e5dc",949:"a6fa40c0",954:"96985c74",989:"6199c83c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="drfoody:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[i];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode&&r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=a,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return i();e(o,s,null,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={14:1,53:1,61:1,97:1,126:1,236:1,277:1,299:1,325:1,345:1,376:1,452:1,468:1,563:1,693:1,787:1,930:1,949:1,954:1,989:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkdrfoody"]=self["webpackChunkdrfoody"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1084)}));o=n.O(o)})();
//# sourceMappingURL=app.a8a59da3.js.map