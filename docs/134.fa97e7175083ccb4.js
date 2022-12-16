"use strict";(self.webpackChunknavigator=self.webpackChunknavigator||[]).push([[134],{8134:(E,c,r)=>{r.r(c),r.d(c,{AuthResetPasswordModule:()=>k});var l=r(9132),p=r(4859),d=r(9549),f=r(7392),h=r(4144),w=r(1572),g=r(6236),A=r(7775),P=r(4466),u=r(4006),y=r(8746),v=r(8288);class C{static isEmptyInputValue(o){return null==o||0===o.length}static mustMatch(o,e){return n=>{const a=n.get(o),i=n.get(e);if(!a||!i||(i.hasError("mustMatch")&&(delete i.errors.mustMatch,i.updateValueAndValidity()),this.isEmptyInputValue(i.value)||a.value===i.value))return null;const m={mustMatch:!0};return i.setErrors(m),m}}}var t=r(4650),Z=r(8951),x=r(2494),I=r(6895);const R=["resetPasswordNgForm"];function J(s,o){if(1&s&&(t.TgZ(0,"fuse-alert",22),t._uU(1),t.qZA()),2&s){const e=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",e.alert.type)("@shake","error"===e.alert.type),t.xp6(1),t.hij(" ",e.alert.message," ")}}function T(s,o){1&s&&t._UZ(0,"mat-icon",23),2&s&&t.Q6J("svgIcon","heroicons_solid:eye")}function F(s,o){1&s&&t._UZ(0,"mat-icon",23),2&s&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function N(s,o){1&s&&t._UZ(0,"mat-icon",23),2&s&&t.Q6J("svgIcon","heroicons_solid:eye")}function Q(s,o){1&s&&t._UZ(0,"mat-icon",23),2&s&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function U(s,o){1&s&&(t.TgZ(0,"mat-error"),t._uU(1," Password confirmation is required "),t.qZA())}function M(s,o){1&s&&(t.TgZ(0,"mat-error"),t._uU(1," Passwords must match "),t.qZA())}function _(s,o){1&s&&(t.TgZ(0,"span"),t._uU(1," Reset your password "),t.qZA())}function b(s,o){1&s&&t._UZ(0,"mat-progress-spinner",24),2&s&&t.Q6J("diameter",24)("mode","indeterminate")}const Y=function(){return["/sign-in"]},q=[{path:"",component:(()=>{class s{constructor(e,n,a){this._route=e,this._authService=n,this._formBuilder=a,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this._route.queryParams.subscribe(e=>{if(e.id){let n=JSON.parse(atob(e.id));this.username=n.username,this.token=n.token}(!e.id||!this.username||!this.token)&&(this.showAlert=!0,this.alert={type:"error",message:"Invalid request. Request a new link."})}),this.resetPasswordForm=this._formBuilder.group({password:["",u.kI.required],passwordConfirm:["",u.kI.required]},{validators:C.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword({username:this.username,token:this.token,password:this.resetPasswordForm.get("password").value}).pipe((0,y.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(e=>{this.alert={type:"success",message:"Your password has been reset."}},e=>{this.alert={type:"error",message:"Something went wrong, request a new link."}}))}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(l.gz),t.Y36(Z.e),t.Y36(u.QS))},s.\u0275cmp=t.Xpm({type:s,selectors:[["auth-reset-password"]],viewQuery:function(e,n){if(1&e&&t.Gf(R,5),2&e){let a;t.iGM(a=t.CRH())&&(n.resetPasswordNgForm=a.first)}},decls:40,vars:16,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Reset your password"),t.qZA(),t.TgZ(7,"div",6),t._uU(8,"Create a new password for your account"),t.qZA(),t.YNc(9,J,2,5,"fuse-alert",7),t.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",11,12),t.TgZ(17,"button",13),t.NdJ("click",function(){t.CHM(a);const m=t.MAs(16);return t.KtG(m.type="password"===m.type?"text":"password")}),t.YNc(18,T,1,1,"mat-icon",14),t.YNc(19,F,1,1,"mat-icon",14),t.qZA(),t.TgZ(20,"mat-error"),t._uU(21," Password is required "),t.qZA()(),t.TgZ(22,"mat-form-field",10)(23,"mat-label"),t._uU(24,"Password (Confirm)"),t.qZA(),t._UZ(25,"input",15,16),t.TgZ(27,"button",13),t.NdJ("click",function(){t.CHM(a);const m=t.MAs(26);return t.KtG(m.type="password"===m.type?"text":"password")}),t.YNc(28,N,1,1,"mat-icon",14),t.YNc(29,Q,1,1,"mat-icon",14),t.qZA(),t.YNc(30,U,2,0,"mat-error",17),t.YNc(31,M,2,0,"mat-error",17),t.qZA(),t.TgZ(32,"button",18),t.NdJ("click",function(){return n.resetPassword()}),t.YNc(33,_,2,0,"span",17),t.YNc(34,b,1,2,"mat-progress-spinner",19),t.qZA(),t.TgZ(35,"div",20)(36,"span"),t._uU(37,"Return to"),t.qZA(),t.TgZ(38,"a",21),t._uU(39,"sign in "),t.qZA()()()()()()}if(2&e){const a=t.MAs(16),i=t.MAs(26);t.xp6(9),t.Q6J("ngIf",n.showAlert),t.xp6(1),t.Q6J("formGroup",n.resetPasswordForm),t.xp6(5),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(6),t.Q6J("formControlName","passwordConfirm"),t.xp6(3),t.Q6J("ngIf","password"===i.type),t.xp6(1),t.Q6J("ngIf","text"===i.type),t.xp6(1),t.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),t.xp6(1),t.Q6J("color","primary")("disabled",n.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",!n.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",n.resetPasswordForm.disabled),t.xp6(4),t.Q6J("routerLink",t.DdM(15,Y))}},dependencies:[l.yS,p.lW,d.TO,d.KE,d.hX,d.R9,f.Hw,h.Nt,w.Ou,x.W,I.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u],encapsulation:2,data:{animation:v.L}}),s})()}];let k=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[l.Bz.forChild(q),p.ot,d.lN,f.Ps,h.c,w.Cq,g.J,A.fC,P.m]}),s})()}}]);