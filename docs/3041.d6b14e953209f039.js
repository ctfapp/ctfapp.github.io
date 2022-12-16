"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3041],{38120:(E,T,c)=>{c.r(T),c.d(T,{FinanceModule:()=>N});var w=c(19132),A=c(4859),x=c(44850),U=c(97392),Z=c(28255),q=c(73162),v=c(96308),d=c(30671),b=c(6205),D=c(44466),S=c(77579),C=c(82722),t=c(94650),n=c(61135),i=c(18505),s=c(80529);let u=(()=>{class e{constructor(o){this._httpClient=o,this._data=new n.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/finance").pipe((0,i.b)(o=>{this._data.next(o)}))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(s.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=c(36895);const m=["recentTransactionsTable"];function f(e,r){1&e&&(t.TgZ(0,"th",89),t._uU(1," Transaction ID "),t.qZA())}function p(e,r){if(1&e&&(t.TgZ(0,"td",90)(1,"span",91),t._uU(2),t.qZA()()),2&e){const o=r.$implicit;t.xp6(2),t.hij(" ",o.transactionId," ")}}function h(e,r){1&e&&(t.TgZ(0,"th",89),t._uU(1," Date "),t.qZA())}function g(e,r){if(1&e&&(t.TgZ(0,"td",90)(1,"span",92),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&e){const o=r.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,o.date,"MMM dd, y")," ")}}function _(e,r){1&e&&(t.TgZ(0,"th",89),t._uU(1," Name "),t.qZA())}function F(e,r){if(1&e&&(t.TgZ(0,"td",90)(1,"span",92),t._uU(2),t.qZA()()),2&e){const o=r.$implicit;t.xp6(2),t.hij(" ",o.name," ")}}function M(e,r){1&e&&(t.TgZ(0,"th",89),t._uU(1," Amount "),t.qZA())}function Q(e,r){if(1&e&&(t.TgZ(0,"td",90)(1,"span",93),t._uU(2),t.ALo(3,"currency"),t.qZA()()),2&e){const o=r.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,o.amount,"USD")," ")}}function k(e,r){1&e&&(t.TgZ(0,"th",89),t._uU(1," Status "),t.qZA())}const I=function(e,r){return{"bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-50":e,"bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50":r}};function J(e,r){if(1&e&&(t.TgZ(0,"td",90)(1,"span",94)(2,"span",95),t._uU(3),t.qZA()()()),2&e){const o=r.$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,I,"pending"===o.status,"completed"===o.status)),t.xp6(2),t.Oqu(o.status)}}function O(e,r){1&e&&(t.TgZ(0,"td",96)(1,"button",97),t._uU(2,"See all transactions"),t.qZA()())}function B(e,r){1&e&&t._UZ(0,"tr",98)}function V(e,r){1&e&&t._UZ(0,"tr",99)}function L(e,r){1&e&&t._UZ(0,"tr",100)}const R=function(){return["recentOrdersTableFooter"]},Y=[{path:"",component:(()=>{class e{constructor(o){this._financeService=o,this.recentTransactionsDataSource=new d.by,this.recentTransactionsTableColumns=["transactionId","date","name","amount","status"],this._unsubscribeAll=new S.x}ngOnInit(){this._financeService.data$.pipe((0,C.R)(this._unsubscribeAll)).subscribe(o=>{this.data=o,this.recentTransactionsDataSource.data=o.recentTransactions,this._prepareChartData()})}ngAfterViewInit(){this.recentTransactionsDataSource.sort=this.recentTransactionsTableMatSort}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(o,a){return a.id||o}_prepareChartData(){this.accountBalanceOptions={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#A3BFFA","#667EEA"],fill:{colors:["#CED9FB","#AECDFD"],opacity:.5,type:"solid"},series:this.data.accountBalance.series,stroke:{curve:"straight",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:o=>o+"%"}},xaxis:{type:"datetime"}}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["finance"]],viewQuery:function(o,a){if(1&o&&t.Gf(m,5,v.YE),2&o){let y;t.iGM(y=t.CRH())&&(a.recentTransactionsTableMatSort=y.first)}},decls:309,vars:96,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],["mat-stroked-button","",1,"hidden","sm:inline-flex"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-stroked-button","",1,"hidden","sm:inline-flex","ml-3"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-8","w-full","mt-8"],[1,"grid","gap-8","sm:grid-flow-col","xl:grid-flow-row"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-green-500","dark:text-green-400",3,"svgIcon"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-green-600","font-medium","text-sm"],[1,"ml-auto","-mt-2"],["previousStatementMenu","matMenu"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"my-2"],[1,"flex","flex-row","flex-wrap","mt-4","-mx-6"],[1,"flex","flex-col","mx-6","my-3"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"mt-2","font-medium","text-3xl","leading-none"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"text-red-600","font-medium","text-sm"],["currentStatementMenu","matMenu"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","p-6","pb-4"],[1,"flex","items-center","justify-between"],[1,"mr-4","text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-secondary","font-medium"],["mat-button","",1,"h-6","min-h-6","px-2","rounded-full","bg-hover",3,"matMenuTriggerFor"],[1,"font-medium","text-sm","text-secondary"],["accountBalanceMenu","matMenu"],[1,"flex","items-start","mt-6","mr-2"],[1,"font-semibold","text-3xl","md:text-5xl","tracking-tighter"],[1,"font-medium","text-sm","text-secondary","leading-none"],[1,"flex","flex-col","ml-8","md:ml-16"],[1,"flex","flex-col","flex-auto"],[1,"flex-auto","w-full","h-full",3,"chart","colors","fill","series","stroke","tooltip","xaxis"],[1,"grid","grid-cols-1","xl:grid-cols-3","gap-8","w-full","mt-8"],[1,"xl:col-span-2","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"p-6"],[1,"overflow-x-auto","mx-6"],["mat-table","","matSort","",1,"w-full","bg-transparent",3,"dataSource","trackBy"],["recentTransactionsTable",""],["matColumnDef","transactionId"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","name"],["matColumnDef","amount"],["matColumnDef","status"],["matColumnDef","recentOrdersTableFooter"],["class","py-6 px-0 border-0","mat-footer-cell","","colspan","6",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","order-row h-16","mat-row","",4,"matRowDef","matRowDefColumns"],["class","h-16 border-0","mat-footer-row","",4,"matFooterRowDef"],[1,"flex","flex-col","flex-auto","p-6","bg-card","rounded-2xl","shadow"],[1,"ml-auto","-mt-2","-mr-2"],["budgetMenu","matMenu"],[1,"mt-6"],[1,"my-8","space-y-8"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-red-100","text-red-800","dark:bg-red-600","dark:text-red-50"],[1,"text-current",3,"svgIcon"],[1,"flex-auto","ml-4","leading-none"],[1,"text-sm","font-medium","text-secondary"],[1,"mt-2","font-medium","text-2xl"],[1,"mt-3","rounded-full",3,"color","mode","value"],[1,"flex","items-end","justify-end","min-w-18","mt-auto","ml-6"],[1,"text-lg","leading-none"],[1,"text-green-600","icon-size-4","ml-1",3,"svgIcon"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-indigo-100","text-indigo-800","dark:bg-indigo-600","dark:text-indigo-50"],[1,"mt-3","rounded-full",3,"mode","value"],[1,"text-red-600","icon-size-4","ml-1",3,"svgIcon"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-teal-100","text-teal-800","dark:bg-teal-600","dark:text-teal-50"],[1,"mt-3","text-md","text-secondary"],[1,"flex","items-center","mt-auto"],["mat-stroked-button","",1,"mt-2"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"pr-6","font-medium","text-sm","text-secondary","whitespace-nowrap"],[1,"pr-6","whitespace-nowrap"],[1,"pr-6","font-medium","whitespace-nowrap"],[1,"inline-flex","items-center","font-bold","text-xs","px-2.5","py-0.5","rounded-full","tracking-wide","uppercase",3,"ngClass"],[1,"leading-relaxed","whitespace-nowrap"],["mat-footer-cell","","colspan","6",1,"py-6","px-0","border-0"],["mat-stroked-button",""],["mat-header-row",""],["mat-row","",1,"order-row","h-16"],["mat-footer-row","",1,"h-16","border-0"]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h2",3),t._uU(5,"Finance dashboard"),t.qZA(),t.TgZ(6,"div",4),t._uU(7,"Keep track of your financial status"),t.qZA()(),t.TgZ(8,"div",5)(9,"button",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"span",8),t._uU(12,"Reports"),t.qZA()(),t.TgZ(13,"button",9),t._UZ(14,"mat-icon",7),t.TgZ(15,"span",8),t._uU(16,"Settings"),t.qZA()(),t.TgZ(17,"button",10),t._UZ(18,"mat-icon",7),t.TgZ(19,"span",8),t._uU(20,"Export"),t.qZA()(),t.TgZ(21,"div",11)(22,"button",12),t._UZ(23,"mat-icon",13),t.qZA(),t.TgZ(24,"mat-menu",null,14)(26,"button",15),t._uU(27,"Export"),t.qZA(),t.TgZ(28,"button",15),t._uU(29,"Reports"),t.qZA(),t.TgZ(30,"button",15),t._uU(31,"Settings"),t.qZA()()()()(),t.TgZ(32,"div",16)(33,"div",17)(34,"div",18)(35,"div",19),t._UZ(36,"mat-icon",20),t.qZA(),t.TgZ(37,"div",21)(38,"div",22)(39,"div",23),t._uU(40,"Previous Statement"),t.qZA(),t.TgZ(41,"div",24),t._uU(42),t.qZA()(),t.TgZ(43,"div",25)(44,"button",12),t._UZ(45,"mat-icon",7),t.qZA(),t.TgZ(46,"mat-menu",null,26)(48,"button",15)(49,"span",21),t._UZ(50,"mat-icon",27),t.TgZ(51,"span"),t._uU(52,"View statement"),t.qZA()()(),t.TgZ(53,"button",15)(54,"span",21),t._UZ(55,"mat-icon",27),t.TgZ(56,"span"),t._uU(57,"Spending breakdown"),t.qZA()()(),t.TgZ(58,"button",15)(59,"span",21),t._UZ(60,"mat-icon",27),t.TgZ(61,"span"),t._uU(62,"Tax breakdown"),t.qZA()()(),t._UZ(63,"mat-divider",28),t.TgZ(64,"button",15)(65,"span",21),t._UZ(66,"mat-icon",27),t.TgZ(67,"span"),t._uU(68,"Print statement"),t.qZA()()(),t.TgZ(69,"button",15)(70,"span",21),t._UZ(71,"mat-icon",27),t.TgZ(72,"span"),t._uU(73,"Email statement"),t.qZA()()()()()(),t.TgZ(74,"div",29)(75,"div",30)(76,"div",31),t._uU(77,"Card Limit"),t.qZA(),t.TgZ(78,"div",32),t._uU(79),t.ALo(80,"currency"),t.qZA()(),t.TgZ(81,"div",30)(82,"div",31),t._uU(83,"Spent"),t.qZA(),t.TgZ(84,"div",32),t._uU(85),t.ALo(86,"currency"),t.qZA()(),t.TgZ(87,"div",30)(88,"div",31),t._uU(89,"Minimum"),t.qZA(),t.TgZ(90,"div",32),t._uU(91),t.ALo(92,"currency"),t.qZA()()()(),t.TgZ(93,"div",18)(94,"div",19),t._UZ(95,"mat-icon",33),t.qZA(),t.TgZ(96,"div",21)(97,"div",22)(98,"div",23),t._uU(99,"Current Statement"),t.qZA(),t.TgZ(100,"div",34),t._uU(101),t.qZA()(),t.TgZ(102,"div",25)(103,"button",12),t._UZ(104,"mat-icon",7),t.qZA(),t.TgZ(105,"mat-menu",null,35)(107,"button",15)(108,"span",21),t._UZ(109,"mat-icon",27),t.TgZ(110,"span"),t._uU(111,"View statement"),t.qZA()()(),t.TgZ(112,"button",15)(113,"span",21),t._UZ(114,"mat-icon",27),t.TgZ(115,"span"),t._uU(116,"Spending breakdown"),t.qZA()()(),t.TgZ(117,"button",15)(118,"span",21),t._UZ(119,"mat-icon",27),t.TgZ(120,"span"),t._uU(121,"Tax breakdown"),t.qZA()()(),t._UZ(122,"mat-divider",28),t.TgZ(123,"button",15)(124,"span",21),t._UZ(125,"mat-icon",27),t.TgZ(126,"span"),t._uU(127,"Print statement"),t.qZA()()(),t.TgZ(128,"button",15)(129,"span",21),t._UZ(130,"mat-icon",27),t.TgZ(131,"span"),t._uU(132,"Email statement"),t.qZA()()()()()(),t.TgZ(133,"div",29)(134,"div",30)(135,"div",31),t._uU(136,"Card Limit"),t.qZA(),t.TgZ(137,"div",32),t._uU(138),t.ALo(139,"currency"),t.qZA()(),t.TgZ(140,"div",30)(141,"div",31),t._uU(142,"Spent"),t.qZA(),t.TgZ(143,"div",32),t._uU(144),t.ALo(145,"currency"),t.qZA()(),t.TgZ(146,"div",30)(147,"div",31),t._uU(148,"Minimum"),t.qZA(),t.TgZ(149,"div",32),t._uU(150),t.ALo(151,"currency"),t.qZA()()()()(),t.TgZ(152,"div",36)(153,"div",37)(154,"div",38)(155,"div",22)(156,"div",39),t._uU(157,"Account Balance"),t.qZA(),t.TgZ(158,"div",40),t._uU(159,"Monthly balance growth and avg. monthly income"),t.qZA()(),t.TgZ(160,"div",8)(161,"button",41)(162,"span",42),t._uU(163,"12 months"),t.qZA()(),t.TgZ(164,"mat-menu",null,43)(166,"button",15),t._uU(167,"3 months"),t.qZA(),t.TgZ(168,"button",15),t._uU(169,"6 months"),t.qZA(),t.TgZ(170,"button",15),t._uU(171,"9 months"),t.qZA(),t.TgZ(172,"button",15),t._uU(173,"12 months"),t.qZA()()()(),t.TgZ(174,"div",44)(175,"div",22)(176,"div",45),t._uU(177),t.qZA(),t.TgZ(178,"div",46),t._uU(179,"Average Monthly Growth"),t.qZA()(),t.TgZ(180,"div",47)(181,"div",45),t._uU(182),t.ALo(183,"currency"),t.qZA(),t.TgZ(184,"div",46),t._uU(185,"Average Monthly Income"),t.qZA()()()(),t.TgZ(186,"div",48),t._UZ(187,"apx-chart",49),t.qZA()()(),t.TgZ(188,"div",50)(189,"div",51)(190,"div",52)(191,"div",39),t._uU(192,"Recent transactions"),t.qZA(),t.TgZ(193,"div",40),t._uU(194,"1 pending, 4 completed"),t.qZA()(),t.TgZ(195,"div",53)(196,"table",54,55),t.ynx(198,56),t.YNc(199,f,2,0,"th",57),t.YNc(200,p,3,1,"td",58),t.BQk(),t.ynx(201,59),t.YNc(202,h,2,0,"th",57),t.YNc(203,g,4,4,"td",58),t.BQk(),t.ynx(204,60),t.YNc(205,_,2,0,"th",57),t.YNc(206,F,3,1,"td",58),t.BQk(),t.ynx(207,61),t.YNc(208,M,2,0,"th",57),t.YNc(209,Q,4,4,"td",58),t.BQk(),t.ynx(210,62),t.YNc(211,k,2,0,"th",57),t.YNc(212,J,4,5,"td",58),t.BQk(),t.ynx(213,63),t.YNc(214,O,3,0,"td",64),t.BQk(),t.YNc(215,B,1,0,"tr",65),t.YNc(216,V,1,0,"tr",66),t.YNc(217,L,1,0,"tr",67),t.qZA()()(),t.TgZ(218,"div",68)(219,"div",21)(220,"div",22)(221,"div",39),t._uU(222,"Budget"),t.qZA(),t.TgZ(223,"div",40),t._uU(224,"Monthly budget summary"),t.qZA()(),t.TgZ(225,"div",69)(226,"button",12),t._UZ(227,"mat-icon",7),t.qZA(),t.TgZ(228,"mat-menu",null,70)(230,"button",15),t._uU(231,"Expenses breakdown"),t.qZA(),t.TgZ(232,"button",15),t._uU(233,"Savings breakdown"),t.qZA(),t.TgZ(234,"button",15),t._uU(235,"Bills breakdown"),t.qZA(),t._UZ(236,"mat-divider",28),t.TgZ(237,"button",15)(238,"span",21),t._UZ(239,"mat-icon",27),t.TgZ(240,"span"),t._uU(241,"Print budget summary"),t.qZA()()(),t.TgZ(242,"button",15)(243,"span",21),t._UZ(244,"mat-icon",27),t.TgZ(245,"span"),t._uU(246,"Email budget summary"),t.qZA()()()()()(),t.TgZ(247,"div",71),t._uU(248," Last month; you had "),t.TgZ(249,"strong"),t._uU(250,"223"),t.qZA(),t._uU(251," expense transactions, "),t.TgZ(252,"strong"),t._uU(253,"12"),t.qZA(),t._uU(254," savings entries and "),t.TgZ(255,"strong"),t._uU(256,"4"),t.qZA(),t._uU(257," bills. "),t.qZA(),t.TgZ(258,"div",72)(259,"div",22)(260,"div",21)(261,"div",73),t._UZ(262,"mat-icon",74),t.qZA(),t.TgZ(263,"div",75)(264,"div",76),t._uU(265,"Expenses"),t.qZA(),t.TgZ(266,"div",77),t._uU(267),t.ALo(268,"currency"),t.qZA(),t._UZ(269,"mat-progress-bar",78),t.qZA(),t.TgZ(270,"div",79)(271,"div",80),t._uU(272,"2.6%"),t.qZA(),t._UZ(273,"mat-icon",81),t.qZA()()(),t.TgZ(274,"div",22)(275,"div",21)(276,"div",82),t._UZ(277,"mat-icon",74),t.qZA(),t.TgZ(278,"div",75)(279,"div",76),t._uU(280,"Savings"),t.qZA(),t.TgZ(281,"div",77),t._uU(282),t.ALo(283,"currency"),t.qZA(),t._UZ(284,"mat-progress-bar",83),t.qZA(),t.TgZ(285,"div",79)(286,"div",80),t._uU(287,"12.7%"),t.qZA(),t._UZ(288,"mat-icon",84),t.qZA()()(),t.TgZ(289,"div",22)(290,"div",21)(291,"div",85),t._UZ(292,"mat-icon",74),t.qZA(),t.TgZ(293,"div",75)(294,"div",76),t._uU(295,"Bills"),t.qZA(),t.TgZ(296,"div",77),t._uU(297),t.ALo(298,"currency"),t.qZA(),t._UZ(299,"mat-progress-bar",83),t.qZA(),t.TgZ(300,"div",79)(301,"div",80),t._uU(302,"105.7%"),t.qZA(),t._UZ(303,"mat-icon",84),t.qZA()(),t.TgZ(304,"div",86),t._uU(305,"Exceeded your personal limit! Be careful next month."),t.qZA()()(),t.TgZ(306,"div",87)(307,"button",88),t._uU(308," Download Summary "),t.qZA()()()()()()),2&o){const y=t.MAs(25),j=t.MAs(47),z=t.MAs(106),P=t.MAs(165),W=t.MAs(229);t.xp6(10),t.Q6J("svgIcon","heroicons_solid:document-report"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:cog"),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:save"),t.xp6(4),t.Q6J("matMenuTriggerFor",y),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(13),t.Q6J("svgIcon","heroicons_outline:check-circle"),t.xp6(6),t.hij(" Paid on ",a.data.previousStatement.date," "),t.xp6(2),t.Q6J("matMenuTriggerFor",j),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:credit-card"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:cash"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:receipt-tax"),t.xp6(6),t.Q6J("svgIcon","heroicons_solid:printer"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(8),t.Oqu(t.xi3(80,65,a.data.previousStatement.limit,"USD")),t.xp6(6),t.Oqu(t.xi3(86,68,a.data.previousStatement.spent,"USD")),t.xp6(6),t.Oqu(t.xi3(92,71,a.data.previousStatement.minimum,"USD")),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:exclamation-circle"),t.xp6(6),t.hij(" Must be paid before ",a.data.currentStatement.date," "),t.xp6(2),t.Q6J("matMenuTriggerFor",z),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:credit-card"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:cash"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:receipt-tax"),t.xp6(6),t.Q6J("svgIcon","heroicons_solid:printer"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(8),t.Oqu(t.xi3(139,74,a.data.currentStatement.limit,"USD")),t.xp6(6),t.Oqu(t.xi3(145,77,a.data.currentStatement.spent,"USD")),t.xp6(6),t.Oqu(t.xi3(151,80,a.data.currentStatement.minimum,"USD")),t.xp6(11),t.Q6J("matMenuTriggerFor",P),t.xp6(16),t.hij("",a.data.accountBalance.growRate,"%"),t.xp6(5),t.Oqu(t.xi3(183,83,a.data.accountBalance.ami,"USD")),t.xp6(5),t.Q6J("chart",a.accountBalanceOptions.chart)("colors",a.accountBalanceOptions.colors)("fill",a.accountBalanceOptions.fill)("series",a.accountBalanceOptions.series)("stroke",a.accountBalanceOptions.stroke)("tooltip",a.accountBalanceOptions.tooltip)("xaxis",a.accountBalanceOptions.xaxis),t.xp6(9),t.Q6J("dataSource",a.recentTransactionsDataSource)("trackBy",a.trackByFn),t.xp6(19),t.Q6J("matHeaderRowDef",a.recentTransactionsTableColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.recentTransactionsTableColumns),t.xp6(1),t.Q6J("matFooterRowDef",t.DdM(95,R)),t.xp6(9),t.Q6J("matMenuTriggerFor",W),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(12),t.Q6J("svgIcon","heroicons_solid:printer"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(18),t.Q6J("svgIcon","heroicons_outline:credit-card"),t.xp6(5),t.Oqu(t.xi3(268,86,a.data.budget.expenses,"USD")),t.xp6(2),t.Q6J("color","warn")("mode","determinate")("value",100*a.data.budget.expenses/a.data.budget.expensesLimit),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:cash"),t.xp6(5),t.Oqu(t.xi3(283,89,a.data.budget.savings,"USD")),t.xp6(2),t.Q6J("mode","determinate")("value",100*a.data.budget.savings/a.data.budget.savingsGoal),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:light-bulb"),t.xp6(5),t.Oqu(t.xi3(298,92,a.data.budget.bills,"USD")),t.xp6(2),t.Q6J("mode","determinate")("value",100*a.data.budget.bills/a.data.budget.billsLimit),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up")}},dependencies:[A.lW,x.d,U.Hw,Z.VK,Z.OP,Z.p6,q.pW,v.YE,v.nU,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.mD,d.Ke,d.ge,d.ev,d.yh,d.XQ,d.Gk,d.Q2,b.x,l.mk,l.H9,l.uU],encapsulation:2,changeDetection:0}),e})(),resolve:{data:(()=>{class e{constructor(o){this._financeService=o}resolve(o,a){return this._financeService.getData()}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(u))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}];let N=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[w.Bz.forChild(Y),A.ot,x.t,U.Ps,Z.Tx,q.Cv,v.JX,d.p0,b.X,D.m]}),e})()},95017:(E,T,c)=>{c.d(T,{A8:()=>S,Ov:()=>b,Z9:()=>Z,eX:()=>d,k:()=>C,o2:()=>U,yy:()=>v});var w=c(94033),A=c(77579),x=c(94650);class U{}function Z(t){return t&&"function"==typeof t.connect&&!(t instanceof w.c)}class v{applyChanges(n,i,s,u,l){n.forEachOperation((m,f,p)=>{let h,g;if(null==m.previousIndex){const _=s(m,f,p);h=i.createEmbeddedView(_.templateRef,_.context,_.index),g=1}else null==p?(i.remove(f),g=3):(h=i.get(f),i.move(h,p),g=2);l&&l({context:h?.context,operation:g,record:m})})}detach(){}}class d{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(n,i,s,u,l){n.forEachOperation((m,f,p)=>{let h,g;null==m.previousIndex?(h=this._insertView(()=>s(m,f,p),p,i,u(m)),g=h?1:0):null==p?(this._detachAndCacheView(f,i),g=3):(h=this._moveView(f,p,i,u(m)),g=2),l&&l({context:h?.context,operation:g,record:m})})}detach(){for(const n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,i,s,u){const l=this._insertViewFromCache(i,s);if(l)return void(l.context.$implicit=u);const m=n();return s.createEmbeddedView(m.templateRef,m.context,m.index)}_detachAndCacheView(n,i){const s=i.detach(n);this._maybeCacheView(s,i)}_moveView(n,i,s,u){const l=s.get(n);return s.move(l,i),l.context.$implicit=u,l}_maybeCacheView(n,i){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{const s=i.indexOf(n);-1===s?n.destroy():i.remove(s)}}_insertViewFromCache(n,i){const s=this._viewCache.pop();return s&&i.insert(s,n),s||null}}class b{constructor(n=!1,i,s=!0,u){this._multiple=n,this._emitChanges=s,this.compareWith=u,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new A.x,i&&i.length&&(n?i.forEach(l=>this._markSelected(l)):this._markSelected(i[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...n){this._verifyValueAssignment(n),n.forEach(s=>this._markSelected(s));const i=this._hasQueuedChanges();return this._emitChangeEvent(),i}deselect(...n){this._verifyValueAssignment(n),n.forEach(s=>this._unmarkSelected(s));const i=this._hasQueuedChanges();return this._emitChangeEvent(),i}setSelection(...n){this._verifyValueAssignment(n);const i=this.selected,s=new Set(n);n.forEach(l=>this._markSelected(l)),i.filter(l=>!s.has(l)).forEach(l=>this._unmarkSelected(l));const u=this._hasQueuedChanges();return this._emitChangeEvent(),u}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();const i=this._hasQueuedChanges();return n&&this._emitChangeEvent(),i}isSelected(n){if(this.compareWith){for(const i of this._selection)if(this.compareWith(i,n))return!0;return!1}return this._selection.has(n)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}}let S=(()=>{class t{constructor(){this._listeners=[]}notify(i,s){for(let u of this._listeners)u(i,s)}listen(i){return this._listeners.push(i),()=>{this._listeners=this._listeners.filter(s=>i!==s)}}ngOnDestroy(){this._listeners=[]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=x.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const C=new x.OlP("_ViewRepeater")}}]);