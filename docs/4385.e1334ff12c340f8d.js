"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[4385],{95017:(Z,B,c)=>{c.d(B,{A8:()=>O,Ov:()=>A,Z9:()=>R,eX:()=>F,k:()=>I,o2:()=>y,yy:()=>x});var D=c(94033),w=c(77579),i=c(94650);class y{}function R(m){return m&&"function"==typeof m.connect&&!(m instanceof D.c)}class x{applyChanges(n,l,r,v,g){n.forEachOperation((C,M,E)=>{let f,_;if(null==C.previousIndex){const T=r(C,M,E);f=l.createEmbeddedView(T.templateRef,T.context,T.index),_=1}else null==E?(l.remove(M),_=3):(f=l.get(M),l.move(f,E),_=2);g&&g({context:f?.context,operation:_,record:C})})}detach(){}}class F{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(n,l,r,v,g){n.forEachOperation((C,M,E)=>{let f,_;null==C.previousIndex?(f=this._insertView(()=>r(C,M,E),E,l,v(C)),_=f?1:0):null==E?(this._detachAndCacheView(M,l),_=3):(f=this._moveView(M,E,l,v(C)),_=2),g&&g({context:f?.context,operation:_,record:C})})}detach(){for(const n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,l,r,v){const g=this._insertViewFromCache(l,r);if(g)return void(g.context.$implicit=v);const C=n();return r.createEmbeddedView(C.templateRef,C.context,C.index)}_detachAndCacheView(n,l){const r=l.detach(n);this._maybeCacheView(r,l)}_moveView(n,l,r,v){const g=r.get(n);return r.move(g,l),g.context.$implicit=v,g}_maybeCacheView(n,l){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{const r=l.indexOf(n);-1===r?n.destroy():l.remove(r)}}_insertViewFromCache(n,l){const r=this._viewCache.pop();return r&&l.insert(r,n),r||null}}class A{constructor(n=!1,l,r=!0,v){this._multiple=n,this._emitChanges=r,this.compareWith=v,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new w.x,l&&l.length&&(n?l.forEach(g=>this._markSelected(g)):this._markSelected(l[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...n){this._verifyValueAssignment(n),n.forEach(r=>this._markSelected(r));const l=this._hasQueuedChanges();return this._emitChangeEvent(),l}deselect(...n){this._verifyValueAssignment(n),n.forEach(r=>this._unmarkSelected(r));const l=this._hasQueuedChanges();return this._emitChangeEvent(),l}setSelection(...n){this._verifyValueAssignment(n);const l=this.selected,r=new Set(n);n.forEach(g=>this._markSelected(g)),l.filter(g=>!r.has(g)).forEach(g=>this._unmarkSelected(g));const v=this._hasQueuedChanges();return this._emitChangeEvent(),v}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();const l=this._hasQueuedChanges();return n&&this._emitChangeEvent(),l}isSelected(n){if(this.compareWith){for(const l of this._selection)if(this.compareWith(l,n))return!0;return!1}return this._selection.has(n)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}}let O=(()=>{class m{constructor(){this._listeners=[]}notify(l,r){for(let v of this._listeners)v(l,r)}listen(l){return this._listeners.push(l),()=>{this._listeners=this._listeners.filter(r=>l!==r)}}ngOnDestroy(){this._listeners=[]}}return m.\u0275fac=function(l){return new(l||m)},m.\u0275prov=i.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const I=new i.OlP("_ViewRepeater")},84385:(Z,B,c)=>{c.d(B,{$L:()=>_e,LD:()=>ge,gD:()=>pe});var D=c(98184),w=c(36895),i=c(94650),y=c(3238),R=c(59549),V=c(67376),x=c(12687),F=c(40445),A=c(21281),U=c(95017),O=c(29521),I=c(24006),m=c(77579),n=c(49770),l=c(56451),r=c(68675),v=c(63900),g=c(95698),C=c(39300),M=c(54004),E=c(71884),f=c(82722),_=c(37340);const T=["trigger"],X=["panel"];function J(a,u){if(1&a&&(i.TgZ(0,"span",8),i._uU(1),i.qZA()),2&a){const e=i.oxw();i.xp6(1),i.Oqu(e.placeholder)}}function $(a,u){if(1&a&&(i.TgZ(0,"span",12),i._uU(1),i.qZA()),2&a){const e=i.oxw(2);i.xp6(1),i.Oqu(e.triggerValue)}}function q(a,u){1&a&&i.Hsn(0,0,["*ngSwitchCase","true"])}function ee(a,u){if(1&a&&(i.TgZ(0,"span",9),i.YNc(1,$,2,1,"span",10),i.YNc(2,q,1,0,"ng-content",11),i.qZA()),2&a){const e=i.oxw();i.Q6J("ngSwitch",!!e.customTrigger),i.xp6(2),i.Q6J("ngSwitchCase",!0)}}function te(a,u){if(1&a){const e=i.EpF();i.TgZ(0,"div",13)(1,"div",14,15),i.NdJ("@transformPanel.done",function(s){i.CHM(e);const o=i.oxw();return i.KtG(o._panelDoneAnimatingStream.next(s.toState))})("keydown",function(s){i.CHM(e);const o=i.oxw();return i.KtG(o._handleKeydown(s))}),i.Hsn(3,1),i.qZA()()}if(2&a){const e=i.oxw();i.Q6J("@transformPanelWrap",void 0),i.xp6(1),i.Gre("mat-select-panel ",e._getPanelTheme(),""),i.Udp("transform-origin",e._transformOrigin)("font-size",e._triggerFontSize,"px"),i.Q6J("ngClass",e.panelClass)("@transformPanel",e.multiple?"showing-multiple":"showing"),i.uIk("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const ie=[[["mat-select-trigger"]],"*"],se=["mat-select-trigger","*"],G={transformPanelWrap:(0,_.X$)("transformPanelWrap",[(0,_.eR)("* => void",(0,_.IO)("@transformPanel",[(0,_.pV)()],{optional:!0}))]),transformPanel:(0,_.X$)("transformPanel",[(0,_.SB)("void",(0,_.oB)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),(0,_.SB)("showing",(0,_.oB)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),(0,_.SB)("showing-multiple",(0,_.oB)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),(0,_.eR)("void => *",(0,_.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")),(0,_.eR)("* => void",(0,_.jt)("100ms 25ms linear",(0,_.oB)({opacity:0})))])};let z=0;const P=256,j=new i.OlP("mat-select-scroll-strategy"),oe=new i.OlP("MAT_SELECT_CONFIG"),re={provide:j,deps:[D.aV],useFactory:function le(a){return()=>a.scrollStrategies.reposition()}};class ce{constructor(u,e){this.source=u,this.value=e}}const he=(0,y.Kr)((0,y.sb)((0,y.Id)((0,y.FD)(class{constructor(a,u,e,t,s){this._elementRef=a,this._defaultErrorStateMatcher=u,this._parentForm=e,this._parentFormGroup=t,this.ngControl=s,this.stateChanges=new m.x}})))),Q=new i.OlP("MatSelectTrigger");let _e=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275dir=i.lG2({type:a,selectors:[["mat-select-trigger"]],features:[i._Bn([{provide:Q,useExisting:a}])]}),a})(),de=(()=>{class a extends he{constructor(e,t,s,o,h,p,d,b,H,K,ue,me,fe,W){super(h,o,d,b,K),this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=s,this._dir=p,this._parentFormField=H,this._liveAnnouncer=fe,this._defaultOptions=W,this._panelOpen=!1,this._compareWith=(S,Y)=>S===Y,this._uid="mat-select-"+z++,this._triggerAriaLabelledBy=null,this._destroy=new m.x,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+z++,this._panelDoneAnimatingStream=new m.x,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.optionSelectionChanges=(0,n.P)(()=>{const S=this.options;return S?S.changes.pipe((0,r.O)(S),(0,v.w)(()=>(0,l.T)(...S.map(Y=>Y.onSelectionChange)))):this._ngZone.onStable.pipe((0,g.q)(1),(0,v.w)(()=>this.optionSelectionChanges))}),this.openedChange=new i.vpe,this._openedStream=this.openedChange.pipe((0,C.h)(S=>S),(0,M.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,C.h)(S=>!S),(0,M.U)(()=>{})),this.selectionChange=new i.vpe,this.valueChange=new i.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=W?.typeaheadDebounceInterval&&(this._typeaheadDebounceInterval=W.typeaheadDebounceInterval),this._scrollStrategyFactory=me,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(ue)||0,this.id=this.id}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(I.kI.required)??!1}set required(e){this._required=(0,A.Ig)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,A.Ig)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,A.Ig)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,A.su)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new U.Ov(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,E.x)(),(0,f.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,f.R)(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe((0,r.O)(null),(0,f.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){const s=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?s.setAttribute("aria-labelledby",e):s.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(void 0!==this._previousControl&&null!==t.disabled&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const t=e.keyCode,s=t===O.JH||t===O.LH||t===O.oh||t===O.SV,o=t===O.K5||t===O.L_,h=this._keyManager;if(!h.isTyping()&&o&&!(0,O.Vb)(e)||(this.multiple||e.altKey)&&s)e.preventDefault(),this.open();else if(!this.multiple){const p=this.selected;h.onKeydown(e);const d=this.selected;d&&p!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){const t=this._keyManager,s=e.keyCode,o=s===O.JH||s===O.LH,h=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(h||s!==O.K5&&s!==O.L_||!t.activeItem||(0,O.Vb)(e))if(!h&&this._multiple&&s===O.A&&e.ctrlKey){e.preventDefault();const p=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(p?d.select():d.deselect())})}else{const p=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}else e.preventDefault(),t.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,g.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this._selectionModel.selected.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{const t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){const t=this.options.find(s=>{if(this._selectionModel.isSelected(s))return!1;try{return null!=s.value&&this._compareWith(s.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return!!(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e,!0)}_initKeyManager(){this._keyManager=new x.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe((0,f.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.pipe((0,f.R)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,l.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,f.R)(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,l.T)(...this.options.map(t=>t._stateChanges)).pipe((0,f.R)(e)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}_onSelect(e,t){const s=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(s!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),s!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((t,s)=>this.sortComparator?this.sortComparator(t,s,e):e.indexOf(t)-e.indexOf(s)),this.stateChanges.next()}}_propagateChanges(e){let t=null;t=this.multiple?this.selected.map(s=>s.value):this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();return this.ariaLabelledby?(e?e+" ":"")+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();let t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return a.\u0275fac=function(e){return new(e||a)(i.Y36(V.rL),i.Y36(i.sBO),i.Y36(i.R0b),i.Y36(y.rD),i.Y36(i.SBq),i.Y36(F.Is,8),i.Y36(I.F,8),i.Y36(I.sg,8),i.Y36(R.G_,8),i.Y36(I.a5,10),i.$8M("tabindex"),i.Y36(j),i.Y36(x.Kd),i.Y36(oe,8))},a.\u0275dir=i.lG2({type:a,viewQuery:function(e,t){if(1&e&&(i.Gf(T,5),i.Gf(X,5),i.Gf(D.pI,5)),2&e){let s;i.iGM(s=i.CRH())&&(t.trigger=s.first),i.iGM(s=i.CRH())&&(t.panel=s.first),i.iGM(s=i.CRH())&&(t._overlayDir=s.first)}},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[i.qOj,i.TTD]}),a})(),pe=(()=>{class a extends de{constructor(){super(...arguments),this._scrollTop=0,this._triggerFontSize=0,this._transformOrigin="top",this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}]}_calculateOverlayScroll(e,t,s){const o=this._getItemHeight();return Math.min(Math.max(0,o*e-t+o/2),s)}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,f.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}open(){super._canOpen()&&(super.open(),this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._calculateOverlayPosition(),this._ngZone.onStable.pipe((0,g.q)(1)).subscribe(()=>{this._triggerFontSize&&this._overlayDir.overlayRef&&this._overlayDir.overlayRef.overlayElement&&(this._overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}_scrollOptionIntoView(e){const t=(0,y.CB)(e,this.options,this.optionGroups),s=this._getItemHeight();this.panel.nativeElement.scrollTop=0===e&&1===t?0:(0,y.jH)((e+t)*s,s,this.panel.nativeElement.scrollTop,P)}_positioningSettled(){this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop}_panelDoneAnimating(e){this.panelOpen?this._scrollTop=0:(this._overlayDir.offsetX=0,this._changeDetectorRef.markForCheck()),super._panelDoneAnimating(e)}_getChangeEvent(e){return new ce(this,e)}_calculateOverlayOffsetX(){const e=this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),t=this._viewportRuler.getViewportSize(),s=this._isRtl(),o=this.multiple?56:32;let h;if(this.multiple)h=40;else if(this.disableOptionCentering)h=16;else{let b=this._selectionModel.selected[0]||this.options.first;h=b&&b.group?32:16}s||(h*=-1);const p=0-(e.left+h-(s?o:0)),d=e.right+h-t.width+(s?0:o);p>0?h+=p+8:d>0&&(h-=d+8),this._overlayDir.offsetX=Math.round(h),this._overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(e,t,s){const o=this._getItemHeight(),h=(o-this._triggerRect.height)/2,p=Math.floor(P/o);let d;return this.disableOptionCentering?0:(d=0===this._scrollTop?e*o:this._scrollTop===s?(e-(this._getItemCount()-p))*o+(o-(this._getItemCount()*o-P)%o):t-o/2,Math.round(-1*d-h))}_checkOverlayWithinViewport(e){const t=this._getItemHeight(),s=this._viewportRuler.getViewportSize(),o=this._triggerRect.top-8,h=s.height-this._triggerRect.bottom-8,p=Math.abs(this._offsetY),b=Math.min(this._getItemCount()*t,P)-p-this._triggerRect.height;b>h?this._adjustPanelUp(b,h):p>o?this._adjustPanelDown(p,o,e):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(e,t){const s=Math.round(e-t);this._scrollTop-=s,this._offsetY-=s,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(e,t,s){const o=Math.round(e-t);if(this._scrollTop+=o,this._offsetY+=o,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=s)return this._scrollTop=s,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_calculateOverlayPosition(){const e=this._getItemHeight(),t=this._getItemCount(),s=Math.min(t*e,P),h=t*e-s;let p;p=this.empty?0:Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]),0),p+=(0,y.CB)(p,this.options,this.optionGroups);const d=s/2;this._scrollTop=this._calculateOverlayScroll(p,d,h),this._offsetY=this._calculateOverlayOffsetY(p,d,h),this._checkOverlayWithinViewport(h)}_getOriginBasedOnOption(){const e=this._getItemHeight(),t=(e-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-t+e/2}px 0px`}_getItemHeight(){return 3*this._triggerFontSize}_getItemCount(){return this.options.length+this.optionGroups.length}}return a.\u0275fac=function(){let u;return function(t){return(u||(u=i.n5z(a)))(t||a)}}(),a.\u0275cmp=i.Xpm({type:a,selectors:[["mat-select"]],contentQueries:function(e,t,s){if(1&e&&(i.Suo(s,Q,5),i.Suo(s,y.ey,5),i.Suo(s,y.K7,5)),2&e){let o;i.iGM(o=i.CRH())&&(t.customTrigger=o.first),i.iGM(o=i.CRH())&&(t.options=o),i.iGM(o=i.CRH())&&(t.optionGroups=o)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:19,hostBindings:function(e,t){1&e&&i.NdJ("keydown",function(o){return t._handleKeydown(o)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),2&e&&(i.uIk("id",t.id)("tabindex",t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-activedescendant",t._getAriaActiveDescendant()),i.ekj("mat-select-disabled",t.disabled)("mat-select-invalid",t.errorState)("mat-select-required",t.required)("mat-select-empty",t.empty)("mat-select-multiple",t.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[i._Bn([{provide:R.Eo,useExisting:a},{provide:y.HF,useExisting:a}]),i.qOj],ngContentSelectors:se,decls:9,vars:12,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder mat-select-min-line",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder","mat-select-min-line"],[1,"mat-select-value-text",3,"ngSwitch"],["class","mat-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-min-line"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(e,t){if(1&e&&(i.F$t(ie),i.TgZ(0,"div",0,1),i.NdJ("click",function(){return t.toggle()}),i.TgZ(3,"div",2),i.YNc(4,J,2,1,"span",3),i.YNc(5,ee,3,2,"span",4),i.qZA(),i.TgZ(6,"div",5),i._UZ(7,"div",6),i.qZA()(),i.YNc(8,te,4,14,"ng-template",7),i.NdJ("backdropClick",function(){return t.close()})("attach",function(){return t._onAttached()})("detach",function(){return t.close()})),2&e){const s=i.MAs(1);i.uIk("aria-owns",t.panelOpen?t.id+"-panel":null),i.xp6(3),i.Q6J("ngSwitch",t.empty),i.uIk("id",t._valueId),i.xp6(1),i.Q6J("ngSwitchCase",!0),i.xp6(1),i.Q6J("ngSwitchCase",!1),i.xp6(3),i.Q6J("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",s)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayMinWidth",null==t._triggerRect?null:t._triggerRect.width)("cdkConnectedOverlayOffsetY",t._offsetY)}},dependencies:[w.mk,w.RF,w.n9,w.ED,D.pI,D.xu],styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[G.transformPanelWrap,G.transformPanel]},changeDetection:0}),a})(),ge=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({providers:[re],imports:[w.ez,D.U8,y.Ng,y.BQ,V.ZD,R.lN,y.Ng,y.BQ]}),a})()}}]);