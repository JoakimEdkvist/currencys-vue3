import{a as k,o as a,c as l,b as r,t as c,w as _,v as A,F as f,r as C,p as g,d as y,n as D,e as h,f as N,g as L,h as v,i as I,j as B,k as R,l as b,m,q as F,s as Q,u as w,x as Y,y as O}from"./vendor.6ffb1b98.js";const H=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}};H();var p=(t,s)=>{const u=t.__vccOpts||t;for(const[d,e]of s)u[d]=e;return u};const P={created(){this.fetchData()},computed:{},watch:{chosenCurrency(){this.fetchData()}},data(){return{chosenCurrency:"sek",currencies:null,positiveClass:"positive",negativeClass:"negative"}},methods:{fetchData(){k.get(`
           https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.chosenCurrency}.json`).then(t=>{this.currencies=t.data[this.chosenCurrency]})},updateChosenCurrency(t){this.chosenCurrency=t.target.value},getColor(t){return t>1?"positive":"negative"}}},S=t=>(g("data-v-75e54747"),t=t(),y(),t),q={class:"box"},j=S(()=>r("h1",null,"Overview",-1)),J=S(()=>r("label",{for:"currency-selector"},"Local Currency:",-1)),W=["value"],G=["value"],z={id:"table-wrapper"},T={class:"table table-sm table-hover table-dark"},K=S(()=>r("thead",null,[r("tr",null,[r("th",{class:"thead",scope:"col"},"Name"),r("th",{class:"thead",scope:"col"},"Rate of this currency")])],-1)),Z={scope:"row"};function X(t,s,u,d,e,n){return a(),l("div",q,[j,r("h2",null,"for "+c(e.chosenCurrency.toUpperCase()),1),J,_(r("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.chosenCurrency=o),onChange:s[1]||(s[1]=o=>n.updateChosenCurrency(o))},[r("option",{value:e.chosenCurrency},c(e.chosenCurrency.toUpperCase()),9,W),(a(!0),l(f,null,C(e.currencies,(o,i)=>(a(),l("option",{key:i,value:i},c(i.toUpperCase()),9,G))),128))],544),[[A,e.chosenCurrency]]),r("div",z,[r("table",T,[K,r("tbody",null,[(a(!0),l(f,null,C(e.currencies,(o,i)=>(a(),l("tr",{key:i},[r("th",Z,c(i.toUpperCase()),1),r("td",{class:D(n.getColor(o))},c(o),3)]))),128))])])])])}var $=p(P,[["render",X],["__scopeId","data-v-75e54747"]]);const ee={components:{MainContent:$}};function te(t,s,u,d,e,n){const o=h("MainContent");return a(),N(o)}var re=p(ee,[["render",te]]);const se={emits:["updatedAmount"],created(){this.fetchData()},computed:{},watch:{ForeignCurrency(){this.fetchData()},localCurrency(){this.fetchData()}},data(){return{localCurrency:"sek",rateOfLocalCurrency:1,ForeignCurrency:"currency",rateOfForeignCurrency:1,currencies:null,amount:1}},methods:{fetchData(){k.get(`
           https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.localCurrency}.json`).then(t=>{this.currencies=t.data[this.localCurrency]})},updateForeignCurrency(t){this.ForeignCurrency=t.target.value,this.findForeignCurrencyRate()},findForeignCurrencyRate(){this.rateOfForeignCurrency=this.currencies[this.ForeignCurrency]},updateLocalCurrency(t){this.localCurrency=t.target.value,this.ForeignCurrency="currency",this.rateOfForeignCurrency=null},findLocalCurrencyRate(){this.rateOfLocalCurrency=this.currencies[this.localCurrency]},updateAmount(t){this.amount=t.target.value}}},V=t=>(g("data-v-786899ad"),t=t(),y(),t),oe={class:"card"},ne={class:"card-body"},ae=V(()=>r("label",{for:"currency-selector"},"Choose your local currency:",-1)),ie=["value"],ce=["value"],le=V(()=>r("label",{for:"currency-selector"},"Choose your foreign currency:",-1)),ue=["value"],de=["value"],pe=["value"],he={key:0};function ve(t,s,u,d,e,n){return a(),l("div",oe,[r("div",ne,[ae,_(r("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.localCurrency=o),onChange:s[1]||(s[1]=o=>n.updateLocalCurrency(o))},[r("option",{value:e.localCurrency},c(e.localCurrency.toUpperCase()),9,ie),(a(!0),l(f,null,C(e.currencies,(o,i)=>(a(),l("option",{key:i,value:i},c(i.toUpperCase()),9,ce))),128))],544),[[A,e.localCurrency]]),r("div",null,[r("h2",null," Rate of "+c(e.localCurrency.toUpperCase())+" : "+c(e.rateOfLocalCurrency),1)]),le,_(r("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.ForeignCurrency=o),onChange:s[3]||(s[3]=o=>n.updateForeignCurrency(o))},[r("option",{value:e.ForeignCurrency},c(e.ForeignCurrency.toUpperCase()),9,ue),(a(!0),l(f,null,C(e.currencies,(o,i)=>(a(),l("option",{key:i,value:i},c(i.toUpperCase()),9,de))),128))],544),[[A,e.ForeignCurrency]]),r("div",null,[r("input",{type:"numbers",value:e.amount,onInput:s[4]||(s[4]=o=>n.updateAmount(o)),onChange:s[5]||(s[5]=o=>t.$emit("updatedAmount",o.target.value))},null,40,pe),e.ForeignCurrency!=="currency"?(a(),l("h2",he,c(e.amount)+" "+c(e.localCurrency.toUpperCase())+" = "+c(e.rateOfForeignCurrency*e.amount)+" "+c(e.ForeignCurrency.toUpperCase()),1)):L("",!0)])])])}var _e=p(se,[["render",ve],["__scopeId","data-v-786899ad"]]);const fe={props:{firstSpons:{required:!0,type:String,default:"We are currently looking for a main sponsor"},secondSpons:{type:String,default:"We are currently looking for a second sponsor"},thirdSpons:{type:String,default:"We are currently looking for a third sponsor"},fourthSpons:{type:String,default:"We are currently looking for a fourth sponsor"}}},me=t=>(g("data-v-64b20089"),t=t(),y(),t),ge=me(()=>r("h2",null,"Thanks to all of our sponsors",-1));function ye(t,s,u,d,e,n){return a(),l("div",null,[ge,r("h4",null,c(u.firstSpons),1),r("h3",null,c(u.secondSpons),1),r("h3",null,c(u.thirdSpons),1),r("h3",null,c(u.fourthSpons),1)])}var Ce=p(fe,[["render",ye],["__scopeId","data-v-64b20089"]]);const ke={components:{CalculatorComponent:_e,MarketingComponent:Ce},methods:{amountChange(t){console.log(t)}},data(){return{sponsors:{firstSpons:"NASA BANK",secondSpons:"Forex",thirdSpons:"Bank of Switzerland",fourthSpons:"British Bank"}}}};function Ae(t,s,u,d,e,n){const o=h("CalculatorComponent"),i=h("MarketingComponent");return a(),l(f,null,[r("h1",null,c(t.$route.params.calculator),1),v(o,{onUpdatedAmount:n.amountChange},null,8,["onUpdatedAmount"]),v(i,I(B(e.sponsors)),null,16)],64)}var be=p(ke,[["render",Ae],["__scopeId","data-v-6521c8e0"]]),x=R({mutations:{addUser(t,s){t.users.pop(),t.users.push(s)}},state:{users:[{firstName:"Jon",lastName:"Snow",imageAdress:""}]},strict:!0}),we="/undermapp/assets/logocurrency.1a135bbe.png";const Se={created(){},computed:{completeName(){return this.userDetails.firstName+" "+this.userDetails.lastName}},data(){return{userDetails:{firstName:"",lastName:"",imageAdress:""},showOrHide:!1}},methods:{registerUser(){x.commit("addUser",this.userDetails),this.showOrHide=!1},toggleRegister(){this.showOrHide===!0?this.showOrHide=!1:this.showOrHide=!0}}},U=t=>(g("data-v-d5387cba"),t=t(),y(),t),Ue={class:"component"},Me=U(()=>r("div",{id:"intro"},[r("img",{src:we,alt:"logo"}),r("h1",null,"CurrencyAdvisor")],-1)),De={class:"midsection"},Ne={key:0,class:"card text-center"},Le={class:"card-body"},Ve=U(()=>r("h1",{class:"card-title"},"Login",-1)),xe={key:1,id:"welcome"},Ee=U(()=>r("h1",null,[m(" Welcome to "),r("br"),m(" Project Currency Advisor "),r("br"),m(" By Joakim E ")],-1)),Ie=[Ee];function Be(t,s,u,d,e,n){return a(),l("div",Ue,[Me,r("div",De,[r("button",{class:"btn btn-dark",onClick:s[0]||(s[0]=o=>n.toggleRegister())}," Click here to change user! ")]),e.showOrHide?(a(),l("div",Ne,[r("div",Le,[Ve,_(r("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.userDetails.firstName=o),placeholder:"First name"},null,512),[[b,e.userDetails.firstName,void 0,{trim:!0}]]),_(r("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.userDetails.lastName=o),placeholder:"Last name"},null,512),[[b,e.userDetails.lastName,void 0,{trim:!0}]]),_(r("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>e.userDetails.imageAdress=o),placeholder:"Image Adress"},null,512),[[b,e.userDetails.imageAdress]]),r("input",{class:"btn btn-success",type:"button",value:"Register",onClick:s[4]||(s[4]=o=>n.registerUser())})])])):(a(),l("div",xe,Ie))])}var Re=p(Se,[["render",Be],["__scopeId","data-v-d5387cba"]]);const Fe={components:{LoginBox:Re}};function Qe(t,s,u,d,e,n){const o=h("LoginBox");return a(),N(o)}var Ye=p(Fe,[["render",Qe]]),Oe=F({history:Q(),routes:[{component:re,path:"/page/1"},{component:be,path:"/page/:calculator"},{component:Ye,path:"/"}]}),He="data:image/png;base64,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";const Pe={computed:{collectName(){return this.$store.state.users}},data(){return{imgSrc:this.$store.state.users.imageAdress,showMenuLinks:!1}},methods:{showMenuFunction(){this.showMenuLinks===!0?this.showMenuLinks=!1:this.showMenuLinks=!0}}},M=t=>(g("data-v-87d5c5c4"),t=t(),y(),t),qe={class:"navbar sticky-top navbar-dark"},je={class:"container-fluid"},Je=M(()=>r("div",{class:"line01 all-lines"},null,-1)),We=M(()=>r("div",{class:"line02 all-lines"},null,-1)),Ge=M(()=>r("div",{class:"line03 all-lines"},null,-1)),ze=[Je,We,Ge],Te={key:0,class:"secondsection"},Ke=m("Home"),Ze=m(" Rates "),Xe=m(" Calculator "),$e=["src"],et={key:1,src:He,alt:"profileimage"},tt={class:"navbar-text"};function rt(t,s,u,d,e,n){const o=h("RouterLink");return a(),l("nav",qe,[r("ul",je,[r("div",null,[r("div",{class:D(["line-container",{change:e.showMenuLinks}]),onClick:s[0]||(s[0]=i=>n.showMenuFunction())},ze,2),e.showMenuLinks!==!1?(a(),l("div",Te,[r("li",{onClick:s[1]||(s[1]=i=>e.showMenuLinks=!1)},[v(o,{class:"navbar-text",to:"/"},{default:w(()=>[Ke]),_:1})]),r("li",{onClick:s[2]||(s[2]=i=>e.showMenuLinks=!1)},[v(o,{class:"navbar-text",to:"/page/1"},{default:w(()=>[Ze]),_:1})]),r("li",{onClick:s[3]||(s[3]=i=>e.showMenuLinks=!1)},[v(o,{class:"navbar-text",to:"/page/Calculator"},{default:w(()=>[Xe]),_:1})])])):L("",!0)]),r("li",null,[t.$store.state.users[0].imageAdress!==""?(a(),l("img",{key:0,src:t.$store.state.users[0].imageAdress,alt:"profileimage"},null,8,$e)):(a(),l("img",et)),r("p",tt,c(t.$store.state.users[0].firstName)+" "+c(t.$store.state.users[0].lastName),1)])])])}var st=p(Pe,[["render",rt],["__scopeId","data-v-87d5c5c4"]]),ot={};const nt={components:{NavBar:st},data(){return{}},methods:{}};function at(t,s,u,d,e,n){const o=h("NavBar"),i=h("RouterView");return a(),l(f,null,[v(o),r("main",null,[v(i)])],64)}const E={};E.$style=ot;var it=p(nt,[["render",at],["__cssModules",E]]);Y(it).use(Oe).use(x).use(O,k).mount("#app");
