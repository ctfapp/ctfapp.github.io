"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8683],{58683:(U,_,a)=>{a.r(_),a.d(_,{ActivitiesModule:()=>F});var l=a(19132),g=a(97392),f=a(44466),c=a(15439),t=a(94650),x=a(61135),d=a(18505),u=a(80529);let v=(()=>{class n{constructor(i){this._httpClient=i,this._activities=new x.X(null)}get activities(){return this._activities.asObservable()}getActivities(){return this._httpClient.get("api/pages/activities").pipe((0,d.b)(i=>{this._activities.next(i)}))}}return n.\u0275fac=function(i){return new(i||n)(t.LFG(u.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var s=a(36895);function y(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"li",11)(2,"div",16),t._uU(3),t.qZA()(),t.BQk()),2&n){const i=t.oxw().$implicit,o=t.oxw(3);t.xp6(3),t.hij(" ",o.getRelativeFormat(i.date)," ")}}function A(n,e){1&n&&(t.ynx(0),t._UZ(1,"div",17),t.BQk())}function h(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"div",18),t._UZ(2,"mat-icon",19),t.qZA(),t.BQk()),2&n){const i=t.oxw().$implicit;t.xp6(2),t.Q6J("svgIcon",i.icon)}}function T(n,e){if(1&n&&(t.ynx(0),t._UZ(1,"img",20),t.BQk()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("src",i.image,t.LSH)("alt","Activity image")}}function Q(n,e){if(1&n&&(t.ynx(0),t._UZ(1,"div",21),t.BQk()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("innerHTML",i.description,t.oJD)}}function Z(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"a",23),t._uU(2),t.qZA(),t.BQk()),2&n){const i=t.oxw(2).$implicit;t.xp6(1),t.Q6J("routerLink",i.link),t.xp6(1),t.hij(" ",i.linkedContent," ")}}function C(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"a",24),t._uU(2),t.qZA(),t.BQk()),2&n){const i=t.oxw(2).$implicit;t.xp6(1),t.Q6J("href",i.link,t.LSH),t.xp6(1),t.hij(" ",i.linkedContent," ")}}function I(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"div",22),t._uU(2,"\u2022"),t.qZA(),t.YNc(3,Z,3,2,"ng-container",10),t.YNc(4,C,3,2,"ng-container",10),t.BQk()),2&n){const i=t.oxw().$implicit;t.xp6(3),t.Q6J("ngIf",i.useRouter),t.xp6(1),t.Q6J("ngIf",!i.useRouter)}}function k(n,e){if(1&n&&(t.ynx(0),t._UZ(1,"div",25),t.BQk()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("innerHTML",i.extraContent,t.oJD)}}function w(n,e){if(1&n&&(t.ynx(0),t.YNc(1,y,4,1,"ng-container",10),t.TgZ(2,"li",11),t.YNc(3,A,2,0,"ng-container",10),t.TgZ(4,"div",12),t.YNc(5,h,3,1,"ng-container",10),t.YNc(6,T,2,2,"ng-container",10),t.TgZ(7,"div",13),t.YNc(8,Q,2,1,"ng-container",10),t.TgZ(9,"div",14)(10,"div",15),t._uU(11),t.ALo(12,"date"),t.qZA(),t.YNc(13,I,5,2,"ng-container",10),t.qZA(),t.YNc(14,k,2,1,"ng-container",10),t.qZA()()(),t.BQk()),2&n){const i=e.$implicit,o=e.index,r=e.first,O=e.last,m=t.oxw(2).ngIf,p=t.oxw();t.xp6(1),t.Q6J("ngIf",r||!p.isSameDay(i.date,m[o-1].date)),t.xp6(2),t.Q6J("ngIf",!O&&p.isSameDay(i.date,m[o+1].date)),t.xp6(2),t.Q6J("ngIf",i.icon&&!i.image),t.xp6(1),t.Q6J("ngIf",i.image),t.xp6(2),t.Q6J("ngIf",i.description),t.xp6(3),t.hij(" ",t.xi3(12,8,i.date,"MMM dd, h:mm a")," "),t.xp6(2),t.Q6J("ngIf",i.linkedContent),t.xp6(1),t.Q6J("ngIf",i.extraContent)}}function S(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"div",8)(2,"ol"),t.YNc(3,w,15,11,"ng-container",9),t.qZA()(),t.BQk()),2&n){const i=t.oxw().ngIf,o=t.oxw();t.xp6(3),t.Q6J("ngForOf",i)("ngForTrackBy",o.trackByFn)}}function J(n,e){if(1&n&&(t.ynx(0),t.YNc(1,S,4,2,"ng-container",5),t.BQk()),2&n){const i=e.ngIf;t.oxw();const o=t.MAs(12);t.xp6(1),t.Q6J("ngIf",i.length)("ngIfElse",o)}}function B(n,e){1&n&&t._uU(0," Loading... ")}function Y(n,e){1&n&&t._uU(0," There are is activity at the moment... ")}const N=[{path:"",component:(()=>{class n{constructor(i){this._activityService=i}ngOnInit(){this.activities$=this._activityService.activities}isSameDay(i,o){return c(i,c.ISO_8601).isSame(c(o,c.ISO_8601),"day")}getRelativeFormat(i){const o=c().startOf("day"),r=c().subtract(1,"day").startOf("day");return c(i,c.ISO_8601).isSame(o,"day")?"Today":c(i,c.ISO_8601).isSame(r,"day")?"Yesterday":c(i,c.ISO_8601).fromNow()}trackByFn(i,o){return o.id||i}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["activity"]],decls:13,vars:4,consts:[[1,"relative","flex","flex-col","flex-auto","min-w-0","overflow-hidden"],[1,"flex","flex-col","flex-auto","px-6","py-10","sm:px-16","sm:pt-18","sm:pb-20"],[1,"w-full","max-w-3xl"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"mt-1.5","text-lg","text-secondary"],[4,"ngIf","ngIfElse"],["loading",""],["noActivity",""],[1,"mt-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"relative","flex","py-7"],[1,"relative","flex","flex-auto"],[1,"flex","flex-col","flex-auto","items-start"],[1,"flex","flex-col","sm:flex-row","sm:items-center","mt-2","sm:mt-1","sm:space-x-2","text-md","leading-5"],[1,"text-secondary"],[1,"relative","py-2","px-8","text-md","font-medium","leading-5","rounded-full","bg-primary","text-on-primary"],[1,"absolute","top-7","left-5","w-0.5","h-full","-ml-px","bg-gray-300","dark:bg-gray-600"],[1,"flex","shrink-0","items-center","justify-center","w-10","h-10","mr-4","rounded-full","bg-gray-400"],[1,"icon-size-5","text-white",3,"svgIcon"],[1,"shrink-0","w-10","h-10","mr-4","rounded-full","overflow-hidden","object-cover","object-center",3,"src","alt"],[3,"innerHTML"],[1,"hidden","sm:block"],[1,"cursor-pointer","text-primary",3,"routerLink"],["target","_blank",1,"cursor-pointer","text-primary",3,"href"],[1,"mt-4","py-4","px-5","rounded-lg","bg-gray-200","dark:bg-gray-800",3,"innerHTML"]],template:function(i,o){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4,"All Activities"),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Application wide activities are listed here as individual items, starting with the most recent."),t.qZA(),t.YNc(7,J,2,2,"ng-container",5),t.ALo(8,"async"),t.YNc(9,B,1,0,"ng-template",null,6,t.W1O),t.YNc(11,Y,1,0,"ng-template",null,7,t.W1O),t.qZA()()()),2&i){const r=t.MAs(10);t.xp6(7),t.Q6J("ngIf",t.lcZ(8,2,o.activities$))("ngIfElse",r)}},dependencies:[l.yS,g.Hw,s.sg,s.O5,s.Ov,s.uU],encapsulation:2,changeDetection:0}),n})(),resolve:{activities:(()=>{class n{constructor(i){this._activityService=i}resolve(i,o){return this._activityService.getActivities()}}return n.\u0275fac=function(i){return new(i||n)(t.LFG(v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let F=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(N),g.Ps,f.m]}),n})()}}]);