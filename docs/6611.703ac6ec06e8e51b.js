"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6611],{36611:(S,m,t)=>{t.r(m),t.d(m,{AdvancedSearchModule:()=>U,routes:()=>v});var l=t(19132),h=t(4859),u=t(56709),n=t(59549),f=t(284),p=t(84385),g=t(10921),A=t(44466),c=t(21281),Z=t(77579),x=t(82722),e=t(94650),o=t(24006),y=t(3238),T=t(9572),b=t(36895);const v=[{path:"",component:(()=>{class s{constructor(r,a,d){this._activatedRoute=r,this._formBuilder=a,this._router=d,this.searchFormDefaults={keywords:"",type:"any",isTrashed:!1,isArchived:!1,isStarred:!1},this._unsubscribeAll=new Z.x,this.searchForm=this._formBuilder.group({keywords:[this.searchFormDefaults.keywords],type:[this.searchFormDefaults.type],isTrashed:[this.searchFormDefaults.isTrashed],isArchived:[this.searchFormDefaults.isArchived],isStarred:[this.searchFormDefaults.isStarred]})}ngOnInit(){this._activatedRoute.queryParams.pipe((0,x.R)(this._unsubscribeAll)).subscribe(r=>{this.queryParams=r,this.searchForm.setValue({keywords:r?.keywords??this.searchFormDefaults.keywords,type:r?.type??this.searchFormDefaults.type,isTrashed:r?.isTrashed?(0,c.Ig)(r?.isTrashed):this.searchFormDefaults.isTrashed,isArchived:r?.isArchived?(0,c.Ig)(r?.isArchived):this.searchFormDefaults.isArchived,isStarred:r?.isStarred?(0,c.Ig)(r?.isStarred):this.searchFormDefaults.isStarred},{emitEvent:!1})})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}reset(){this.searchForm.reset(this.searchFormDefaults)}search(){this._router.navigate(["./"],{queryParams:this.searchForm.value,relativeTo:this._activatedRoute})}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(l.gz),e.Y36(o.QS),e.Y36(l.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["advanced-search"]],decls:64,vars:18,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"max-w-3xl","prose","prose-sm"],[1,"flex","flex-col","items-start","w-full","max-w-3xl","mt-8","p-8","space-y-8","rounded-2xl","shadow","overflow-hidden","bg-card",3,"formGroup"],[1,"fuse-mat-no-subscript","w-full"],["matInput","",3,"autocomplete","formControlName"],[3,"formControlName"],[3,"value"],[1,"flex","items-center","space-x-8"],[3,"color","formControlName"],[1,"flex","items-center","justify-end","w-full","mt-8"],["type","button","mat-button","",3,"click"],["type","button","mat-flat-button","",1,"ml-2",3,"color","click"],[1,"dark","w-full","mt-8","p-4","rounded-2xl","overflow-hidden"],["fuse-highlight","",3,"code","lang"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"User Interface"),e.qZA()()(),e.TgZ(7,"div",5)(8,"h2",6),e._uU(9," Advanced Search "),e.qZA()()()(),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"p"),e._uU(14," This page demonstrates a query parameters based search using Angular's built-in "),e.TgZ(15,"code"),e._uU(16,"routerLink"),e.qZA(),e._uU(17," directive and its "),e.TgZ(18,"code"),e._uU(19,"queryParams"),e.qZA(),e._uU(20," input. "),e.qZA(),e.TgZ(21,"p"),e._uU(22," Fill the form, hit the "),e.TgZ(23,"strong"),e._uU(24,"Search"),e.qZA(),e._uU(25," button and then observe the address bar of your browser. If you reload the page with the parameters, you will see that the form will be populated automatically. We also added an output window so you can observe the query parameters object. "),e.qZA(),e.TgZ(26,"p"),e._uU(27," This method can be used for implementing "),e.TgZ(28,"em"),e._uU(29,"Advanced search"),e.qZA(),e._uU(30," mechanics as well as "),e.TgZ(31,"em"),e._uU(32,"Filtering"),e.qZA(),e._uU(33," similar to the products filtering that you can find in most eCommerce websites. "),e.qZA()(),e.TgZ(34,"form",10)(35,"mat-form-field",11)(36,"mat-label"),e._uU(37,"Keywords"),e.qZA(),e._UZ(38,"input",12),e.qZA(),e.TgZ(39,"mat-form-field",11)(40,"mat-label"),e._uU(41,"Type"),e.qZA(),e.TgZ(42,"mat-select",13)(43,"mat-option",14),e._uU(44,"Any"),e.qZA(),e.TgZ(45,"mat-option",14),e._uU(46,"Files"),e.qZA(),e.TgZ(47,"mat-option",14),e._uU(48,"Folders"),e.qZA()()(),e.TgZ(49,"div",15)(50,"mat-checkbox",16),e._uU(51," In trash "),e.qZA(),e.TgZ(52,"mat-checkbox",16),e._uU(53," Archived "),e.qZA(),e.TgZ(54,"mat-checkbox",16),e._uU(55," Starred "),e.qZA()(),e.TgZ(56,"div",17)(57,"button",18),e.NdJ("click",function(){return a.reset()}),e._uU(58,"Reset "),e.qZA(),e.TgZ(59,"button",19),e.NdJ("click",function(){return a.search()}),e._uU(60,"Search "),e.qZA()()(),e.TgZ(61,"div",20),e._UZ(62,"textarea",21),e.ALo(63,"json"),e.qZA()()()()),2&r&&(e.xp6(34),e.Q6J("formGroup",a.searchForm),e.xp6(4),e.Q6J("autocomplete","off")("formControlName","keywords"),e.xp6(4),e.Q6J("formControlName","type"),e.xp6(1),e.Q6J("value","any"),e.xp6(2),e.Q6J("value","files"),e.xp6(2),e.Q6J("value","folders"),e.xp6(3),e.Q6J("color","primary")("formControlName","isTrashed"),e.xp6(2),e.Q6J("color","primary")("formControlName","isArchived"),e.xp6(2),e.Q6J("color","primary")("formControlName","isStarred"),e.xp6(5),e.Q6J("color","primary"),e.xp6(3),e.Q6J("code",e.lcZ(63,16,a.queryParams))("lang","json"))},dependencies:[h.lW,u.oG,n.KE,n.hX,f.Nt,p.gD,y.ey,T.L,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,b.Ts],encapsulation:2,changeDetection:0}),s})()}];let U=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[l.Bz.forChild(v),h.ot,u.p9,n.lN,f.c,p.LD,g.$A,A.m]}),s})()}}]);