"use strict";(self["webpackChunkdrfoody"]=self["webpackChunkdrfoody"]||[]).push([[869,452],{8121:function(e,t,o){o.r(t),o.d(t,{default:function(){return T}});var s=o(6252),a=o(3577),i=o(3464);const n=e=>((0,s.dD)("data-v-32ab0471"),e=e(),(0,s.Cn)(),e),l={class:"mainContents"},r={class:"box_zip"},d=n((()=>(0,s._)("div",{id:"n_box"},"질환",-1))),c={id:"i_box"},u={class:"box_zip"},m=n((()=>(0,s._)("div",{id:"n_box"},"알레르기",-1))),g={id:"i_box"},p={class:"dash_contents"},h=n((()=>(0,s._)("div",{id:"diet_icon"},[(0,s._)("img",{src:i,id:"imgList"})],-1))),f={id:"dash_diet"},_=n((()=>(0,s._)("div",null,"추천식단",-1))),b={class:"dash_dietList"},v={id:"mealTime"};function y(e,t,o,i,n,y){const k=(0,s.up)("FoodyHeader"),w=(0,s.up)("FoodyNav");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(k),(0,s._)("div",l,[(0,s._)("h2",null,(0,a.zw)(e.$store.state.nickNm)+"님의 건강정보",1),(0,s._)("div",r,[d,(0,s._)("div",c,(0,a.zw)(e.$store.state.diseaseNm),1)]),(0,s._)("div",u,[m,(0,s._)("div",g,(0,a.zw)(e.$store.state.allergieList.join("")),1)]),(0,s._)("div",p,[h,(0,s._)("div",f,[(0,s._)("div",null,(0,a.zw)(n.currentDate),1),_])]),(0,s._)("div",b,[(0,s._)("div",v,(0,a.zw)(n.mealTime),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.food,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{id:"todayList",key:t},(0,a.zw)(e),1)))),128))])]),(0,s.Wm)(w)],64)}var k=o(5121),w=o(4360),$=o(3937),L=o(5506),D={name:"DashBoard",data(){return{email:this.$store.state.email,currentDate:"",mealTime:"",nickNm:"",allergieNm:"",nowTimes:"",food:[]}},mounted(){this.getCurrentDate(),this.updateMealTime(),setInterval((()=>{this.updateMealTime()}),1e3),console.log(this.$store.state.diseaseNm),this.createListWeek(),this.callTodayList()},methods:{getCurrentDate(){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");this.currentDate=`${t}년 ${o}월 ${s}일`,this.nowTimes=`${t}-${o}-${s}`},updateMealTime(){const e=new Date,t=e.getHours(),o=e.getMinutes(),s=e.getSeconds();this.mealTime=t>=6&&t<=10&&o<=59&&s<=59?"아침":t>=11&&t<=16&&o<=59&&s<=59?"점심":t>=17&&t<=22&&o<=59&&s<=59?"저녁":"다른 시간대"},getUser(){console.log(w["default"].params.nickNm)},callTodayList(){const e=this.$store.state.userId;(0,k.Z)({method:"get",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderRecommend/recommended?",params:{idx:e}}).then((e=>{const t=e.data;switch(t.rst_cd){case"200":console.log(t),this.$store.commit("setTodayList",t.foodList),this.food=this.$store.state.TodayList;break;case"-1":console.log(t),this.$router.go(0),console.log("실패");break;case"-5":console.log(t),console.log("기기오류");break;default:console.log(t);break}})).catch((e=>{console.log("에러!!!"),console.log(e)}))},createListWeek(){const e=new Date,t=e.toDateString(),o=this.$store.state.userId;console.log(t),this.$store.state.callRecord<=0?(t.includes("Mon")&&(0,k.Z)({method:"get",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodBuild/getWeeklyMeals?",params:{userIdx:o}}),this.$store.commit("callRecord",1)):this.$store.commit("callRecord",0)}},props:{msg:String},components:{FoodyHeader:$.Z,FoodyNav:L.Z}},x=o(3744);const N=(0,x.Z)(D,[["render",y],["__scopeId","data-v-32ab0471"]]);var T=N},4360:function(e,t,o){o.r(t),o.d(t,{default:function(){return $}});var s=o(6252),a=o(9963);const i=e=>((0,s.dD)("data-v-71e5f38e"),e=e(),(0,s.Cn)(),e),n={class:"mainContents"},l=i((()=>(0,s._)("h2",null,"반갑습니다",-1))),r=i((()=>(0,s._)("p",{class:"p"},[(0,s.Uk)("Dr.Food 서비스를 이용하기 위해서는"),(0,s._)("br"),(0,s.Uk)("로그인이 필요합니다.")],-1))),d=i((()=>(0,s._)("br",null,null,-1))),c=i((()=>(0,s._)("br",null,null,-1))),u={class:"input-group mb-3"},m=i((()=>(0,s._)("span",{class:"input-group-text",id:"basic-addon1"},null,-1))),g={class:"input-group mb-3"},p=i((()=>(0,s._)("span",{class:"input-group-text",id:"basic-addon1"},null,-1))),h={for:"autologin"};function f(e,t,o,i,f,_){const b=(0,s.up)("foody-header"),v=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(b),(0,s._)("div",n,[l,r,d,c,(0,s._)("main",null,[(0,s._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>_.fnLogin&&_.fnLogin(...e)),["prevent"])),method:"get"},[(0,s._)("div",u,[m,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"아이디","aria-label":"아이디","aria-describedby":"basic-addon1","onUpdate:modelValue":t[0]||(t[0]=e=>f.user_id=e)},null,512),[[a.nr,f.user_id]])]),(0,s._)("div",g,[p,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",placeholder:"비밀번호","aria-label":"비밀번호","aria-describedby":"basic-addon1","onUpdate:modelValue":t[1]||(t[1]=e=>f.user_pw=e)},null,512),[[a.nr,f.user_pw]])])],32)]),(0,s._)("label",h,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"autologin","onUpdate:modelValue":t[3]||(t[3]=e=>f.autoLogin=e)},null,512),[[a.e8,f.autoLogin]]),(0,s.Uk)("자동 로그인")]),(0,s.Wm)(v,{to:"/SignInUser",class:"alink"},{default:(0,s.w5)((()=>[(0,s.Uk)("회원가입")])),_:1}),(0,s.Wm)(v,{to:"/scPW",class:"alink"},{default:(0,s.w5)((()=>[(0,s.Uk)("비밀번호 찾기")])),_:1})]),(0,s._)("button",{type:"submit",class:"btn",id:"loginGo",onClick:t[4]||(t[4]=e=>_.fnLogin())},"로그인")],64)}o(560);var _=o(3937),b=o(5121),v=o(5008),y={name:"FoodyLogin",data(){return{user_id:"",user_pw:"",autoLogin:!1}},props:{msg:String},mounted(){this.performAutoLogin()},methods:{fnLogin(){const e=this.user_id,t=this.user_pw,o=this.autoLogin;(0,b.Z)({method:"get",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/login?",params:{email:e,pwd:t}}).then((s=>{const a=()=>this.$router.push({path:"/board",name:"DashBoard"}),i=s.data;switch(i.rst_cd){case"-1":console.log(i);break;case"-2":console.log(i);break;case"200":console.log(i),this.$store.commit("setUserEmail",e),this.$store.commit("setUserIdx",i.user_idx),this.$store.commit("setUserName",i.nickNm),this.$store.commit("setDiseaseNm",i.diseaseNm),this.$store.commit("setAllergieList",i.allergieList),!0===o&&(0,v.aZ)(e),!0===o&&(0,v.QR)(t),a();break;default:console.log(i);break}})).catch((e=>{console.log("에러!!!"),console.log(e)}))},performAutoLogin(){const e=v.cd.call(this),t=v.Zl.call(this);""!=e&&""!=t&&(0,b.Z)({method:"get",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/login?",params:{email:e,pwd:t}}).then((t=>{const o=()=>this.$router.push({path:"/board",name:"DashBoard"}),s=t.data;this.$store.commit("setUserEmail",e),this.$store.commit("setUserIdx",s.user_idx),this.$store.commit("setUserName",s.nickNm),this.$store.commit("setDiseaseNm",s.diseaseNm),this.$store.commit("setAllergieList",s.allergieList),o()})).catch((e=>{console.log("에러!!!"),console.log(e)}))}},components:{FoodyHeader:_.Z}},k=o(3744);const w=(0,k.Z)(y,[["render",f],["__scopeId","data-v-71e5f38e"]]);var $=w},5506:function(e,t,o){o.d(t,{Z:function(){return $}});var s=o(6252),a=o(3464),i=o.p+"img/ManageOffBTN.44e364f2.svg",n=o.p+"img/UserOffBTN.bdd8aae0.svg",l=o.p+"img/ExitOffBTN.58e4b041.svg";const r=e=>((0,s.dD)("data-v-2f106f78"),e=e(),(0,s.Cn)(),e),d={class:"nav"},c=r((()=>(0,s._)("div",null,"식단추천",-1))),u=r((()=>(0,s._)("img",{src:a,id:"icon1"},null,-1))),m=r((()=>(0,s._)("div",null,"식단관리",-1))),g=r((()=>(0,s._)("img",{src:i,id:"icon2"},null,-1))),p=r((()=>(0,s._)("div",null,"회원정보",-1))),h=r((()=>(0,s._)("img",{src:n,id:"icon3"},null,-1))),f=r((()=>(0,s._)("div",null,"로그아웃",-1))),_=r((()=>(0,s._)("img",{src:l,id:"icon4"},null,-1)));function b(e,t,o,a,i,n){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(l,{to:"/dietlist",id:"s_effect1"},{default:(0,s.w5)((()=>[c,u])),_:1}),(0,s.Wm)(l,{to:"/manage2",id:"s_effect2"},{default:(0,s.w5)((()=>[m,g])),_:1}),(0,s.Wm)(l,{to:"/UserInfo",id:"s_effect3"},{default:(0,s.w5)((()=>[p,h])),_:1}),(0,s.Wm)(l,{to:"/",onClick:t[0]||(t[0]=e=>n.resetState()),id:"s_effect4"},{default:(0,s.w5)((()=>[f,_])),_:1})])}var v=o(5008),y={name:"FoodyNav",mounted(){this.changeIconOnScreens()},methods:{resetState(){const e=v.cd.call(this),t=v.Zl.call(this);this.$store.commit("resetState"),this.$router.replace({path:"/",name:"FoodyLogin"}),(0,v.kT)(e),(0,v.kT)(t)},changeIconOnScreens(){const e=this.$route.path,t=document.getElementById("s_effect1"),o=document.getElementById("s_effect2"),s=document.getElementById("s_effect3");"/dietlist"===e?(t.style.color="#fff",t.style.backgroundColor="#001335"):"/manage2"===e?(o.style.color="#fff",o.style.backgroundColor="#001335"):"/UserInfo"!==e&&"/quit"!==e&&"/change"!==e&&"/changeDis"!==e&&"/changeAle"!==e&&"/rule"!==e||(s.style.color="#fff",s.style.backgroundColor="#001335")}}},k=o(3744);const w=(0,k.Z)(y,[["render",b],["__scopeId","data-v-2f106f78"]]);var $=w},3464:function(e,t,o){e.exports=o.p+"img/ListOffBTN.f19ca086.svg"}}]);
//# sourceMappingURL=869.511f9e6d.js.map