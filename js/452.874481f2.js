"use strict";(self["webpackChunkdrfoody"]=self["webpackChunkdrfoody"]||[]).push([[452],{4360:function(e,o,t){t.r(o),t.d(o,{default:function(){return U}});var s=t(6252),a=t(9963);const l=e=>((0,s.dD)("data-v-71e5f38e"),e=e(),(0,s.Cn)(),e),i={class:"mainContents"},n=l((()=>(0,s._)("h2",null,"반갑습니다",-1))),r=l((()=>(0,s._)("p",{class:"p"},[(0,s.Uk)("Dr.Food 서비스를 이용하기 위해서는"),(0,s._)("br"),(0,s.Uk)("로그인이 필요합니다.")],-1))),d=l((()=>(0,s._)("br",null,null,-1))),u=l((()=>(0,s._)("br",null,null,-1))),c={class:"input-group mb-3"},m=l((()=>(0,s._)("span",{class:"input-group-text",id:"basic-addon1"},null,-1))),p={class:"input-group mb-3"},h=l((()=>(0,s._)("span",{class:"input-group-text",id:"basic-addon1"},null,-1))),g={for:"autologin"};function b(e,o,t,l,b,_){const f=(0,s.up)("foody-header"),k=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(f),(0,s._)("div",i,[n,r,d,u,(0,s._)("main",null,[(0,s._)("form",{onSubmit:o[2]||(o[2]=(0,a.iM)(((...e)=>_.fnLogin&&_.fnLogin(...e)),["prevent"])),method:"get"},[(0,s._)("div",c,[m,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"아이디","aria-label":"아이디","aria-describedby":"basic-addon1","onUpdate:modelValue":o[0]||(o[0]=e=>b.user_id=e)},null,512),[[a.nr,b.user_id]])]),(0,s._)("div",p,[h,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",placeholder:"비밀번호","aria-label":"비밀번호","aria-describedby":"basic-addon1","onUpdate:modelValue":o[1]||(o[1]=e=>b.user_pw=e)},null,512),[[a.nr,b.user_pw]])])],32)]),(0,s._)("label",g,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"autologin","onUpdate:modelValue":o[3]||(o[3]=e=>b.autoLogin=e)},null,512),[[a.e8,b.autoLogin]]),(0,s.Uk)("자동 로그인")]),(0,s.Wm)(k,{to:"/SignInUser",class:"alink"},{default:(0,s.w5)((()=>[(0,s.Uk)("회원가입")])),_:1}),(0,s.Wm)(k,{to:"/scPW",class:"alink"},{default:(0,s.w5)((()=>[(0,s.Uk)("비밀번호 찾기")])),_:1})]),(0,s._)("button",{type:"submit",class:"btn",id:"loginGo",onClick:o[4]||(o[4]=e=>_.fnLogin())},"로그인")],64)}t(560);var _=t(3937),f=t(5121),k=t(5008),w={name:"FoodyLogin",data(){return{user_id:"",user_pw:"",autoLogin:!1}},props:{msg:String},mounted(){this.performAutoLogin()},methods:{fnLogin(){const e=this.user_id,o=this.user_pw,t=this.autoLogin;(0,f.Z)({method:"get",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/login?",params:{email:e,pwd:o}}).then((s=>{const a=()=>this.$router.push({path:"/board",name:"DashBoard"}),l=s.data;switch(l.rst_cd){case"-1":console.log(l);break;case"-2":console.log(l);break;case"200":console.log(l),this.$store.commit("setUserEmail",e),this.$store.commit("setUserIdx",l.user_idx),this.$store.commit("setUserName",l.nickNm),this.$store.commit("setDiseaseNm",l.diseaseNm),this.$store.commit("setAllergieList",l.allergieList),!0===t&&(0,k.aZ)(e),!0===t&&(0,k.QR)(o),a();break;default:console.log(l);break}})).catch((e=>{console.log("에러!!!"),console.log(e)}))},performAutoLogin(){const e=k.cd.call(this),o=k.Zl.call(this);""!=e&&""!=o&&(0,f.Z)({method:"get",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/login?",params:{email:e,pwd:o}}).then((o=>{const t=()=>this.$router.push({path:"/board",name:"DashBoard"}),s=o.data;this.$store.commit("setUserEmail",e),this.$store.commit("setUserIdx",s.user_idx),this.$store.commit("setUserName",s.nickNm),this.$store.commit("setDiseaseNm",s.diseaseNm),this.$store.commit("setAllergieList",s.allergieList),t()})).catch((e=>{console.log("에러!!!"),console.log(e)}))}},components:{FoodyHeader:_.Z}},y=t(3744);const L=(0,y.Z)(w,[["render",b],["__scopeId","data-v-71e5f38e"]]);var U=L}}]);
//# sourceMappingURL=452.874481f2.js.map