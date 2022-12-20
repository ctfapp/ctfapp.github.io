"use strict";(self.webpackChunknavigator=self.webpackChunknavigator||[]).push([[883],{2883:(Y,d,r)=>{r.r(d),r.d(d,{AuthForgotPasswordModule:()=>U});var l=r(9132),u=r(4859),m=r(9549),p=r(7392),f=r(4144),g=r(1572),c=r(6236),h=r(7775),w=r(4466),n=r(4006),F=r(8746),v=r(8288),o=r(4650),P=r(8951),A=r(2494),y=r(6895);const Z=["forgotPasswordNgForm"];function x(t,a){if(1&t&&(o.TgZ(0,"fuse-alert",17),o._uU(1),o.qZA()),2&t){const s=o.oxw();o.Q6J("appearance","outline")("showIcon",!1)("type",s.alert.type)("@shake","error"===s.alert.type),o.xp6(1),o.hij(" ",s.alert.message," ")}}function C(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Email address is required "),o.qZA())}function T(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Please enter a valid email address "),o.qZA())}function J(t,a){1&t&&(o.TgZ(0,"span"),o._uU(1," Send reset link "),o.qZA())}function I(t,a){1&t&&o._UZ(0,"mat-progress-spinner",18),2&t&&o.Q6J("diameter",24)("mode","indeterminate")}const N=function(){return["/sign-in"]},Q=[{path:"",component:(()=>{class t{constructor(s,e){this._authService=s,this._formBuilder=e,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({email:["",[n.kI.required,n.kI.email]]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe((0,F.x)(()=>{this.forgotPasswordForm.enable(),this.forgotPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(s=>{this.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},s=>{this.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}}))}}return t.\u0275fac=function(s){return new(s||t)(o.Y36(P.e),o.Y36(n.QS))},t.\u0275cmp=o.Xpm({type:t,selectors:[["auth-forgot-password"]],viewQuery:function(s,e){if(1&s&&o.Gf(Z,5),2&s){let i;o.iGM(i=o.CRH())&&(e.forgotPasswordNgForm=i.first)}},decls:26,vars:11,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(s,e){1&s&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"img",4),o.qZA(),o.TgZ(5,"div",5),o._uU(6,"Forgot password?"),o.qZA(),o.TgZ(7,"div",6),o._uU(8,"Fill the form to reset your password"),o.qZA(),o.YNc(9,x,2,5,"fuse-alert",7),o.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),o._uU(14,"Email address"),o.qZA(),o._UZ(15,"input",11),o.YNc(16,C,2,0,"mat-error",12),o.YNc(17,T,2,0,"mat-error",12),o.qZA(),o.TgZ(18,"button",13),o.NdJ("click",function(){return e.sendResetLink()}),o.YNc(19,J,2,0,"span",12),o.YNc(20,I,1,2,"mat-progress-spinner",14),o.qZA(),o.TgZ(21,"div",15)(22,"span"),o._uU(23,"Return to"),o.qZA(),o.TgZ(24,"a",16),o._uU(25,"sign in "),o.qZA()()()()()()),2&s&&(o.xp6(9),o.Q6J("ngIf",e.showAlert),o.xp6(1),o.Q6J("formGroup",e.forgotPasswordForm),o.xp6(5),o.Q6J("formControlName","email"),o.xp6(1),o.Q6J("ngIf",e.forgotPasswordForm.get("email").hasError("required")),o.xp6(1),o.Q6J("ngIf",e.forgotPasswordForm.get("email").hasError("email")),o.xp6(1),o.Q6J("color","primary")("disabled",e.forgotPasswordForm.disabled),o.xp6(1),o.Q6J("ngIf",!e.forgotPasswordForm.disabled),o.xp6(1),o.Q6J("ngIf",e.forgotPasswordForm.disabled),o.xp6(4),o.Q6J("routerLink",o.DdM(10,N)))},dependencies:[l.yS,u.lW,m.TO,m.KE,m.hX,f.Nt,g.Ou,A.W,y.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],encapsulation:2,data:{animation:v.L}}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(Q),u.ot,m.lN,p.Ps,f.c,g.Cq,c.J,h.fC,w.m]}),t})()}}]);