"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5250],{25250:(C,c,o)=>{o.r(c),o.d(c,{AuthSignOutModule:()=>Z});var s=o(19132),l=o(4859),r=o(85804),m=o(44466),d=o(77579),g=o(5963),h=o(28746),f=o(22529),x=o(82722),v=o(18505),t=o(94650),p=o(88951),a=o(36895);function A(n,i){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&n){const u=t.oxw();t.xp6(1),t.hij(" Redirecting in ",t.xi3(2,1,u.countdown,u.countdownMapping)," ")}}function S(n,i){1&n&&(t.ynx(0),t._uU(1," You are now being redirected! "),t.BQk())}const O=function(){return["/sign-in"]},y=[{path:"",component:(()=>{class n{constructor(u,e){this._authService=u,this._router=e,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new d.x}ngOnInit(){this._authService.signOut(),(0,g.H)(1e3,1e3).pipe((0,h.x)(()=>{this._router.navigate(["sign-in"])}),(0,f.o)(()=>this.countdown>0),(0,x.R)(this._unsubscribeAll),(0,v.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(u){return new(u||n)(t.Y36(p.e),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(u,e){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"You have signed out!"),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,A,3,4,"ng-container",7),t.YNc(9,S,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8)(11,"span"),t._uU(12,"Go to"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"sign in "),t.qZA()()()()()),2&u&&(t.xp6(8),t.Q6J("ngIf",e.countdown>0),t.xp6(1),t.Q6J("ngIf",0===e.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,O)))},dependencies:[s.yS,a.O5,a.Gx],encapsulation:2}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(u){return new(u||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),l.ot,r.J,m.m]}),n})()}}]);