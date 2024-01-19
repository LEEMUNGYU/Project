(function(){"use strict";var e={1084:function(e,n,t){var o=t(9963),i=t(6252);function r(e,n,t,o,r,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var a={name:"App",components:{}},s=t(3744);const c=(0,s.Z)(a,[["render",r]]);var l=c,u=t(3907),d=t(4702),m=t(5008);const p=(0,u.MT)({state(){return{email:"",cookieID:(0,m.cd)()||"",userId:"",cookiePWD:(0,m.Zl)()||"",diseaseNm:[],allergieList:[],spareAllergie:"",pwd:"",pwdq:"",pwda:"",codeAlle:[],codeDise:[],Allco:"",Diseco:"",DietList:[],FoodsNutri:[],TodayList:"",todayOccasion:"",MealItems:[],showSituation:[],visibleSituation:[],callRecord:"",signInCount:1}},getters:{isLogin(e){return""!==e.result.nickNm}},mutations:{setSignInCount(e,n){e.signInCount=n},setUserEmail(e,n){e.email=n},setUserIdx(e,n){e.userId=n},setUserName(e,n){e.nickNm=n},setDiseaseNm(e,n){e.diseaseNm="#"+n.replace(/#/g," #")},setAllergie(e,n){e.allergieList="#"+n.replace(/#/g," #")},setToken(e,n){e.token=n},callRecord(e,n){e.callRecord=n},resetState(e){const n=()=>({email:"",token:"",userId:"",nickNm:"",diseaseNm:"",allergieList:[],spareAllergie:"",pwd:"",pwdq:"",pwda:"",codeAlle:[],codeDise:[],Allco:"",Diseco:"",todayOccasion:"",DietList:[],FoodsNutri:"",TodayList:"",MealItems:[],showSituation:[],visibleSituation:[],callRecord:"",signInCount:1});Object.assign(e,n())},setAllergieList(e,n){e.allergieList=n.map((e=>" #"+e.name))},setAllergieList2(e,n){e.allergieList=n.map((e=>" #"+e))},setSpearAllergie(e,n){e.spareAllergie="#"+n},setCreateUserData(e,n){e.email=n.email,e.pwd=n.pwd,e.pwdq=n.pwdq,e.pwda=n.pwda,e.nickNm=n.nickname},setCodeDise(e,n){e.codeDise=n},setDiseco(e,n){e.Diseco=n},setCodeAlle(e,n){e.codeAlle=n},setAllco(e,n){e.Allco=n},setDietList(e,n){e.DietList=n},setFoodsNutri(e,n){e.DietList=n},setTodayList(e,n){e.TodayList=n},setTodayOccasion(e,n){e.todayOccasion=n},updateMyMealItems(e,n){e.MealItems=n},updateShowSituation(e,n){e.showSituation=n},updateVisibleSituation(e,n){e.visibleSituation=n}},actions:{updateUserData({commit:e},n){e("setCreateUserData",n)}},plugins:[(0,d.Z)()]});var f=p,h=t(2201);const g=[{path:"/",name:"FoodyLogin",component:()=>Promise.all([t.e(950),t.e(121),t.e(452)]).then(t.bind(t,4360))},{path:"/SignInUser",name:"SignInUser",component:()=>Promise.all([t.e(950),t.e(355)]).then(t.bind(t,7030))},{path:"/checkda",name:"checkDA",component:()=>Promise.all([t.e(950),t.e(468)]).then(t.bind(t,3234))},{path:"/SignLast",name:"SignInLast",component:()=>Promise.all([t.e(950),t.e(121),t.e(90)]).then(t.bind(t,1941))},{path:"/scPW",name:"scPW",component:()=>Promise.all([t.e(950),t.e(121),t.e(949)]).then(t.bind(t,6463))},{path:"/board",name:"DashBoard",component:()=>Promise.all([t.e(950),t.e(121),t.e(739)]).then(t.bind(t,636))},{path:"/dietlist",name:"DietList",component:()=>Promise.all([t.e(950),t.e(121),t.e(954)]).then(t.bind(t,2429))},{path:"/quit",name:"FoodyQuit",component:()=>Promise.all([t.e(950),t.e(121),t.e(277)]).then(t.bind(t,5692))},{path:"/QuitComp",name:"QuitComp",component:()=>Promise.all([t.e(950),t.e(299)]).then(t.bind(t,3806))},{path:"/SignInComp",name:"SignInComp",component:()=>Promise.all([t.e(121),t.e(375)]).then(t.bind(t,2375))},{path:"/request",name:"FoodyRequest",component:()=>Promise.all([t.e(950),t.e(121),t.e(376)]).then(t.bind(t,1244))},{path:"/RequestComp",name:"RequestComp",component:()=>Promise.all([t.e(950),t.e(787)]).then(t.bind(t,7389))},{path:"/rule",name:"UserRule",component:()=>Promise.all([t.e(950),t.e(586)]).then(t.bind(t,2160))},{path:"/change",name:"ChangeInfo",component:()=>Promise.all([t.e(950),t.e(121),t.e(693)]).then(t.bind(t,9630))},{path:"/changePW",name:"changePW",component:()=>Promise.all([t.e(950),t.e(121),t.e(325)]).then(t.bind(t,6503))},{path:"/UserInfo",name:"UserInfo",component:()=>Promise.all([t.e(950),t.e(236)]).then(t.bind(t,7727))},{path:"/changeDis",name:"ChangeDiseases",component:()=>Promise.all([t.e(950),t.e(121),t.e(104)]).then(t.bind(t,2813))},{path:"/changeAle",name:"ChangeAllergy",component:()=>Promise.all([t.e(950),t.e(121),t.e(53)]).then(t.bind(t,522))},{path:"/manage",name:"DietManage",component:()=>Promise.all([t.e(950),t.e(121),t.e(345)]).then(t.bind(t,811))},{path:"/manage2",name:"DietManage2",component:()=>Promise.all([t.e(950),t.e(121),t.e(126)]).then(t.bind(t,4800))}],b=(0,h.p7)({history:(0,h.PO)("/"),routes:g});var v=b;(0,o.ri)(l).use(v).use(f).mount("#app")},5008:function(e,n,t){function o(e){document.cookie=`til_auth=${e}`}function i(e){document.cookie=`til_user=${e}`}function r(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function a(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,"$1")}function s(){let e=document.cookie.split(";");for(let n=0;n<e.length;n++){let t=e[n],o=t.indexOf("="),i=o>-1?t.substring(0,o):t;document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"}}t.d(n,{QR:function(){return i},Zl:function(){return a},aZ:function(){return o},cd:function(){return r},kT:function(){return s}})}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{53:"8848b432",90:"726cccd3",104:"d330b547",121:"87127801",126:"6d5e3049",236:"563dbdb4",277:"626e2895",299:"c17ff867",325:"eea527dc",345:"09dbce0e",355:"8711ec80",375:"4570e95e",376:"4314d4ce",452:"874481f2",468:"eedbc170",586:"71137081",693:"a1437347",739:"a578a21a",787:"28d08312",949:"5a4df263",950:"b48b6254",954:"656b570c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{53:"87bdeb09",90:"e1095d15",104:"f7d25f04",126:"38378aad",236:"3b1d41cc",277:"4313f6aa",299:"f87cb7f9",325:"481f69be",345:"37acb784",355:"002dd767",375:"08d63621",376:"316f7366",452:"7e4ecdda",468:"5d2a2394",586:"860e10a1",693:"dce5501c",739:"6333585f",787:"132da7f6",949:"a6fa40c0",954:"96985c74"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="drfoody:";t.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+r),s.src=o),e[o]=[i];var m=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(t){if(r.onerror=r.onload=null,"load"===t.type)o();else{var a=t&&t.type,s=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode&&r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=a,r.href=n,t?t.parentNode.insertBefore(r,t.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var i=t[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===n))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===n)return i}},o=function(o){return new Promise((function(i,r){var a=t.miniCssF(o),s=t.p+a;if(n(a,s))return i();e(o,s,null,i,r)}))},i={143:0};t.f.miniCss=function(e,n){var t={53:1,90:1,104:1,126:1,236:1,277:1,299:1,325:1,345:1,355:1,375:1,376:1,452:1,468:1,586:1,693:1,739:1,787:1,949:1,954:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=o(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=r);var a=t.p+t.u(n),s=new Error,c=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(c)var u=c(t)}for(n&&n(o);l<a.length;l++)r=a[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunkdrfoody"]=self["webpackChunkdrfoody"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1084)}));o=t.O(o)})();
//# sourceMappingURL=app.d397ef30.js.map