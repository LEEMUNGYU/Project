"use strict";(self["webpackChunkdrfoody"]=self["webpackChunkdrfoody"]||[]).push([[949],{6463:function(e,o,a){a.r(o),a.d(o,{default:function(){return W}});var l=a(6252),n=a(9963);const t=e=>((0,l.dD)("data-v-161a1792"),e=e(),(0,l.Cn)(),e),d={class:"mainContents"},c=t((()=>(0,l._)("h3",null,"비밀번호 찾기",-1))),s=t((()=>(0,l._)("hr",{id:"first_line"},null,-1))),p=t((()=>(0,l._)("option",{selected:""},"질문 유형 선택",-1))),i=t((()=>(0,l._)("option",{value:"본인의 어린시절 별명은?"},"본인의 어린시절 별명은?",-1))),r=t((()=>(0,l._)("option",{value:"본인의 어린시절 장래 희망은?"},"본인의 어린시절 장래 희망은?",-1))),u=t((()=>(0,l._)("option",{value:"본인의 어린 시절에 존경 했던 인물은?"},"본인의 어린 시절에 존경 했던 인물은?",-1))),h=[p,i,r,u],_={key:2,id:"noticeCheck"},w=t((()=>(0,l._)("p",{id:"notice"},"*6~12자의 영문 대·소문자 및 숫자만 가능",-1)));function k(e,o,a,t,p,i){const r=(0,l.up)("foody-header"),u=(0,l.up)("checkQAPopUp"),k=(0,l.up)("compleatePW");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l._)("div",d,[c,s,(0,l._)("form",null,[(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{class:"userId",placeholder:"아이디","aria-label":"아이디","onUpdate:modelValue":o[0]||(o[0]=e=>p.userId=e)},null,512),[[n.nr,p.userId]])]),(0,l._)("div",null,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":o[1]||(o[1]=e=>p.pw_question=e)},h,512),[[n.bM,p.pw_question]])]),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{class:"answer",placeholder:"질문에 대한 답변","aria-label":"기존 비밀번호","onUpdate:modelValue":o[2]||(o[2]=e=>p.pw_answer=e)},null,512),[[n.nr,p.pw_answer]])]),!1===p.checkCode?((0,l.wg)(),(0,l.iD)("div",{key:0,onClick:o[3]||(o[3]=e=>i.QAcheck()),id:"checkQnA"},"확인")):(0,l.kq)("",!0),1==this.openModal?((0,l.wg)(),(0,l.j4)(u,{key:1,onClosePopup:i.closeModalView},null,8,["onClosePopup"])):(0,l.kq)("",!0),!0===p.checkCode?((0,l.wg)(),(0,l.iD)("div",_,"본인확인이 완료 되었습니다.")):(0,l.kq)("",!0),(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"password1",class:"form-control",placeholder:"변경할 비밀번호","aria-label":"변경할 비밀번호","aria-describedby":"basic-addon1","onUpdate:modelValue":o[4]||(o[4]=e=>p.change_pw=e)},null,512),[[n.nr,p.change_pw]])]),w,(0,l._)("div",null,[(0,l.wy)((0,l._)("input",{type:"password",class:"form-control",placeholder:"변경할 비밀번호 확인","aria-label":"비밀번호 확인","aria-describedby":"basic-addon1","onUpdate:modelValue":o[5]||(o[5]=e=>p.pw_check=e)},null,512),[[n.nr,p.pw_check]])])]),1==p.openModal2?((0,l.wg)(),(0,l.j4)(k,{key:0,onGood:o[6]||(o[6]=e=>i.good())})):(0,l.kq)("",!0)]),(0,l._)("button",{type:"submit",class:"btn",id:"pwChangeGo",onClick:o[7]||(o[7]=e=>i.PWchange())},"비밀번호 변경")],64)}a(560);var v=a(5121),b=a(3937),m=a(632);const g=e=>((0,l.dD)("data-v-3b2d6666"),e=e(),(0,l.Cn)(),e),f={class:"popup-view"},y=g((()=>(0,l._)("div",{class:"hat"},null,-1))),C={id:"Q_PopUp"},P=g((()=>(0,l._)("p",null,"비밀번호 변경이 완료되었습니다",-1))),U={id:"btn_zip"};function M(e,o,a,n,t,d){return(0,l.wg)(),(0,l.iD)("div",f,[y,(0,l._)("div",C,[P,(0,l._)("div",U,[(0,l._)("button",{onClick:o[0]||(o[0]=e=>d.Good()),id:"QTcomp"},"확인")])])])}var Q={name:"QuitPopUp",methods:{Good(){this.$emit("good",!0)}}},q=a(3744);const D=(0,q.Z)(Q,[["render",M],["__scopeId","data-v-3b2d6666"]]);var V=D,Z={name:"scPW",data(){return{userId:"",pw_question:"",pw_answer:"",change_pw:"",pw_check:"",checkCode:!1,openModal:!1,openModal2:!1}},props:{msg:String},components:{FoodyHeader:b.Z,checkQAPopUp:m.Z,compleatePW:V},methods:{QAcheck(){const e=this.email,o=this.pw_question,a=this.pw_answer;(0,v.Z)({method:"post",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/checkpwdqa?",params:{email:e,pwdq:o,pwda:a}}).then((e=>{const o=e.data;switch(o.rst_cd){case"-1":console.log(o),this.openModal=!0;break;case"200":console.log(o),this.checkCode=!0;break;default:console.log(o);break}})).catch((e=>{console.log("에러!!!"),console.log(e)}))},PWchange(){if(!0===this.checkCode){const e=this.email,o=this.change_pw;(0,v.Z)({method:"put",url:"https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/replacepwd?",params:{email:e,pwd:o}}).then((e=>{const o=e.data;switch(o.rst_cd){case"-3":console.log(o);break;case"200":console.log(o),this.openModal2=!0;break;default:console.log(o);break}})).catch((e=>{console.log("에러!!!"),console.log(e)}))}},closeModalView(e){this.openModal=e},good(){this.$router.push({path:"/"})}}};const I=(0,q.Z)(Z,[["render",k],["__scopeId","data-v-161a1792"]]);var W=I},632:function(e,o,a){a.d(o,{Z:function(){return _}});var l=a(6252);const n=e=>((0,l.dD)("data-v-e00993be"),e=e(),(0,l.Cn)(),e),t={class:"popup-view"},d=n((()=>(0,l._)("div",{class:"hat"},null,-1))),c={id:"Q_PopUp"},s=n((()=>(0,l._)("p",null,[(0,l.Uk)("선택된 질문에 대한"),(0,l._)("br"),(0,l.Uk)("답변이 틀립니다")],-1))),p={id:"btn_zip"};function i(e,o,a,n,i,r){return(0,l.wg)(),(0,l.iD)("div",t,[d,(0,l._)("div",c,[s,(0,l._)("div",p,[(0,l._)("button",{onClick:o[0]||(o[0]=e=>r.closePopup()),id:"QTcomp"},"확인")])])])}var r={name:"QuitPopUp",methods:{closePopup(){this.$emit("closeModalView",!1)}}},u=a(3744);const h=(0,u.Z)(r,[["render",i],["__scopeId","data-v-e00993be"]]);var _=h}}]);
//# sourceMappingURL=949.b38e4a33.js.map