"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4822],{74088:(Z,P,s)=>{s.d(P,{s:()=>B});var i=s(83668),I=s(53314),v=s(88178),b=s(48212);function y(p){const{subscriber:g,counter:l,period:d}=p;g.next(l),this.schedule({subscriber:g,counter:l+1,period:d},d)}var u=s(23405),a=s(69279),h=s(22411),t=s(36813),T=s(18735),C=s(79204),R=s(28805),D=s(6636),E=s(38053),G=s(38580),L=s(59490),M=s(69627),w=s(39468);let B=(()=>{class p{constructor(l,d,S){this.elementRef=l,this.scrollService=d,this.dimensionsService=S,this.destroy$=new u.xQ,this.windowScroll=!1,this.bottomThreshold=new i.vpe(!0),this.topThreshold=new i.vpe(!0)}get elementScroll(){return!this.windowScroll}set listenWindowScroll(l){this.windowScroll=(0,G.e)(l)}onElementScroll(){this.elementScroll&&this.checkPosition(this.elementRef.nativeElement)}ngAfterViewInit(){this.scrollService.onScroll().pipe((0,T.h)(()=>this.windowScroll),(0,C.w)(()=>this.getContainerDimensions()),(0,R.R)(this.destroy$)).subscribe(l=>this.checkPosition(l)),this.listItems.changes.pipe((0,C.w)(()=>function(p=0,g=v.P){return(!(0,b.k)(p)||p<0)&&(p=0),(!g||"function"!=typeof g.schedule)&&(g=v.P),new I.y(l=>(l.add(g.schedule(y,p,{subscriber:l,counter:0,period:p})),l))}(50).pipe((0,T.h)(()=>this.inSyncWithDom()),(0,D.q)(1),(0,R.R)((0,a.H)(1e3)))),(0,C.w)(()=>this.getContainerDimensions()),(0,R.R)(this.destroy$)).subscribe(l=>this.checkPosition(l)),this.getContainerDimensions().subscribe(l=>this.checkPosition(l))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}checkPosition({scrollHeight:l,scrollTop:d,clientHeight:S}){const A=null==this.lastScrollPosition,Y=d<this.lastScrollPosition;(A||this.lastScrollPosition===d||d>this.lastScrollPosition)&&l-d-S<=this.threshold&&this.bottomThreshold.emit(),(A||Y)&&d<=this.threshold&&this.topThreshold.emit(),this.lastScrollPosition=d}getContainerDimensions(){if(this.elementScroll){const{scrollTop:l,scrollHeight:d,clientHeight:S}=this.elementRef.nativeElement;return(0,h.of)({scrollTop:l,scrollHeight:d,clientHeight:S})}return(0,t.D)([this.scrollService.getPosition(),this.dimensionsService.getDimensions()]).pipe((0,E.U)(([l,d])=>({scrollTop:l.y,scrollHeight:d.scrollHeight,clientHeight:d.clientHeight})))}inSyncWithDom(){return this.elementRef.nativeElement.children.length===this.listItems.length}}return p.\u0275fac=function(l){return new(l||p)(i.Y36(i.SBq),i.Y36(M.H),i.Y36(w.m))},p.\u0275dir=i.lG2({type:p,selectors:[["","nbInfiniteList",""]],contentQueries:function(l,d,S){if(1&l&&i.Suo(S,L.q,4),2&l){let A;i.iGM(A=i.CRH())&&(d.listItems=A)}},hostBindings:function(l,d){1&l&&i.NdJ("scroll",function(){return d.onElementScroll()})},inputs:{threshold:"threshold",listenWindowScroll:"listenWindowScroll"},outputs:{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}}),p})()},6283:(Z,P,s)=>{s.d(P,{B:()=>N});var i=s(83668),I=s(28805),v=s(23405),b=s(59490);let N=(()=>{class y{constructor(){this.destroy$=new v.xQ,this.startPage=1,this.pageChange=new i.vpe,this.observer=new IntersectionObserver(a=>this.checkForPageChange(a),{threshold:.5})}ngAfterViewInit(){this.listItems&&this.listItems.length&&this.observeItems(),this.listItems.changes.pipe((0,I.R)(this.destroy$)).subscribe(()=>this.observeItems())}ngOnDestroy(){this.observer.disconnect&&this.observer.disconnect()}observeItems(){this.listItems.forEach(a=>this.observer.observe(a.nativeElement))}checkForPageChange(a){const h=this.findMostVisiblePage(a);h&&this.currentPage!==h&&(this.currentPage=h,this.pageChange.emit(this.currentPage))}findMostVisiblePage(a){const h=new Map;for(const C of a){if(C.intersectionRatio<.5)continue;const R=this.elementIndex(C.target);if(-1===R)continue;const D=this.startPage+Math.floor(R/this.pageSize);let E=C.intersectionRatio;h.has(D)&&(E+=h.get(D)),h.set(D,E)}let T,t=0;return h.forEach((C,R)=>{C>t&&(t=C,T=R)}),T}elementIndex(a){return a.parentElement&&a.parentElement.children?Array.from(a.parentElement.children).indexOf(a):-1}}return y.\u0275fac=function(a){return new(a||y)},y.\u0275dir=i.lG2({type:y,selectors:[["","nbListPageTracker",""]],contentQueries:function(a,h,t){if(1&a&&i.Suo(t,b.q,4,i.SBq),2&a){let T;i.iGM(T=i.CRH())&&(h.listItems=T)}},inputs:{pageSize:"pageSize",startPage:"startPage"},outputs:{pageChange:"pageChange"}}),y})()},59490:(Z,P,s)=>{s.d(P,{z:()=>N,q:()=>y});var i=s(83668);const I=[[["nb-list-item"]]],v=["nb-list-item"],b=["*"];let N=(()=>{class u{constructor(){this.role="list"}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["nb-list"]],hostVars:1,hostBindings:function(h,t){2&h&&i.uIk("role",t.role)},inputs:{role:"role"},ngContentSelectors:v,decls:1,vars:0,template:function(h,t){1&h&&(i.F$t(I),i.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto}"]}),u})(),y=(()=>{class u{constructor(){this.role="listitem"}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["nb-list-item"]],hostVars:1,hostBindings:function(h,t){2&h&&i.uIk("role",t.role)},inputs:{role:"role"},ngContentSelectors:b,decls:1,vars:0,template:function(h,t){1&h&&(i.F$t(),i.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-shrink:0}"]}),u})()},62335:(Z,P,s)=>{s.d(P,{C:()=>y}),s(59490),s(6283),s(74088);var b=s(83668);let y=(()=>{class u{}return u.\u0275fac=function(h){return new(h||u)},u.\u0275mod=b.oAB({type:u}),u.\u0275inj=b.cJS({}),u})()},34822:(Z,P,s)=>{s.r(P),s.d(P,{AuthPlaygroundModule:()=>pt,filterInterceptorRequest:()=>j});var i=s(86019),I=s(49133),v=s(44522),b=s(85082),N=s(9114),y=s(62335),u=s(79204),a=s(83785),h=s(48299),t=s(83668);let T=(()=>{class n{constructor(e,o){this.injector=e,this.filter=o}intercept(e,o){return this.filter(e)?o.handle(e):this.authService.isAuthenticatedOrRefresh().pipe((0,u.w)(r=>r?this.authService.getToken().pipe((0,u.w)(m=>{const f=`Bearer ${m.getValue()}`;return e=e.clone({setHeaders:{Authorization:f}}),o.handle(e)})):o.handle(e)))}get authService(){return this.injector.get(a._)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.zs3),t.LFG(h.nN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var C=s(3582),R=s(11004),D=s(27431),E=s(42369),G=s(97406),L=s(3203);class M{}const w=new t.OlP("Nebular Security Options"),F=n=>Object.assign({},n),B=n=>Object.assign([],n),p=n=>{const c=n.parent;return delete n.parent,c};let g=(()=>{class n{constructor(e={}){this.settings=e,this.state={},e.accessControl&&this.setAccessControl(e.accessControl)}setAccessControl(e){for(const[o,r]of Object.entries(e)){const m=F(r),f=p(m);this.register(o,f,m)}}register(e,o=null,r={}){this.validateRole(e),this.state[e]={parent:o};for(const[m,f]of Object.entries(r))this.allow(e,m,B("string"==typeof f?[f]:f))}allow(e,o,r){this.validateRole(e),this.getRole(e)||this.register(e,null,{}),r="string"==typeof r?[r]:r;let m=B(this.getRoleResources(e,o));m=m.concat(r),this.state[e][o]=m.filter((f,z)=>m.indexOf(f)===z)}can(e,o,r){return this.validateResource(r),this.getRoleParent(e)&&this.can(this.getRoleParent(e),o,r)||this.exactCan(e,o,r)}getRole(e){return this.state[e]}validateRole(e){if(!e)throw new Error("NbAclService: role name cannot be empty")}validateResource(e){if(!e||[n.ANY_RESOURCE].includes(e))throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method")}exactCan(e,o,r){const m=this.getRoleResources(e,o);return m.includes(r)||m.includes(n.ANY_RESOURCE)}getRoleResources(e,o){return this.getRoleAbilities(e)[o]||[]}getRoleAbilities(e){const o=F(this.state[e]||{});return p(F(this.state[e]||{})),o}getRoleParent(e){return this.state[e]?this.state[e].parent:null}}return n.ANY_RESOURCE="*",n.\u0275fac=function(e){return new(e||n)(t.LFG(w,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var l=s(38053);let d=(()=>{class n{constructor(e,o){this.roleProvider=e,this.acl=o}isGranted(e,o){return this.roleProvider.getRole().pipe((0,l.U)(r=>Array.isArray(r)?r:[r]),(0,l.U)(r=>r.some(m=>this.acl.can(m,e,o))))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(M),t.LFG(g))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),S=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:w,useValue:e},g,d]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[i.ez]]}),n})();var A=s(24301);let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-playground-auth"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"router-outlet")},directives:[A.lC],encapsulation:2}),n})();var Y=s(79074),V=s(13861),W=s(45154),J=s(85304),K=s(3361),Q=s(32579),x=s(90761),O=s(60634),k=s(28805),X=s(23405);let q=(()=>{class n{constructor(e,o,r){this.templateRef=e,this.viewContainer=o,this.accessChecker=r,this.destroy$=new X.xQ,this.hasView=!1}set nbIsGranted([e,o]){this.accessChecker.isGranted(e,o).pipe((0,k.R)(this.destroy$)).subscribe(r=>{r&&!this.hasView?(this.viewContainer.createEmbeddedView(this.templateRef),this.hasView=!0):!r&&this.hasView&&(this.viewContainer.clear(),this.hasView=!1)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc),t.Y36(t.s_b),t.Y36(d))},n.\u0275dir=t.lG2({type:n,selectors:[["","nbIsGranted",""]],inputs:{nbIsGranted:"nbIsGranted"}}),n})();function _(n,c){1&n&&(t.TgZ(0,"button"),t._uU(1,"Post Comment"),t.qZA())}function tt(n,c){1&n&&(t.TgZ(0,"button"),t._uU(1,"Post Comment"),t.qZA())}const et=function(){return["create","comments"]};let nt=(()=>{class n{constructor(e){this.accessChecker=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-actions-test"]],decls:13,vars:5,consts:[[4,"ngIf"],[4,"nbIsGranted"]],template:function(e,o){1&e&&(t.TgZ(0,"nb-layout"),t.TgZ(1,"nb-layout-column"),t.TgZ(2,"nb-card"),t.TgZ(3,"nb-card-header"),t._uU(4,"Service usage"),t.qZA(),t.TgZ(5,"nb-card-body"),t.YNc(6,_,2,0,"button",0),t.ALo(7,"async"),t.qZA(),t.qZA(),t.TgZ(8,"nb-card"),t.TgZ(9,"nb-card-header"),t._uU(10,"Directive usage"),t.qZA(),t.TgZ(11,"nb-card-body"),t.YNc(12,tt,2,0,"button",1),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngIf",t.lcZ(7,2,o.accessChecker.isGranted("create","comments"))),t.xp6(6),t.Q6J("nbIsGranted",t.DdM(4,et)))},directives:[x.Aq,x.dP,O.As,O.nd,O.yK,i.O5,q],pipes:[i.Ov],encapsulation:2}),n})();var st=s(75722);let H=(()=>{class n{constructor(e,o){this.authService=e,this.router=o}canActivate(){return this.authService.isAuthenticated().pipe((0,st.b)(e=>{e||this.router.navigate(["auth/login"])}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(a._),t.LFG(A.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var ot=s(22411),it=s(5250),rt=s(52047),at=s(95170),$=s(59490);function lt(n,c){if(1&n&&(t.TgZ(0,"nb-list-item"),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.lnq(" ",e.region,", ",e.name," (",e.year,") ")}}function ct(n,c){if(1&n&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-header"),t._uU(2," Alain'wines "),t.qZA(),t.TgZ(3,"nb-list"),t.YNc(4,lt,2,3,"nb-list-item",2),t.ALo(5,"async"),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,1,e.wines$))}}const ut=[{path:"",component:U,children:[{path:"",component:Y.A,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:V.Y},{path:"register",component:W.e},{path:"logout",component:J.f},{path:"request-password",component:K.C},{path:"reset-password",component:Q.j}]}]},{path:"acl/acl-test.component",component:nt},{path:"auth-guard.service",canActivate:[H],component:U},{path:"api-calls.component",canActivate:[H],component:(()=>{class n{constructor(e,o,r,m={}){this.authService=e,this.http=o,this.router=r,this.options=m,this.redirectDelay=0,this.strategy="",this.redirectDelay=this.getConfigValue("forms.logout.redirectDelay"),this.strategy=this.getConfigValue("forms.logout.strategy"),this.authService.onTokenChange().subscribe(f=>{this.token=null,f&&f.isValid()&&(this.token=f)})}logout(){this.authService.logout(this.strategy).pipe((0,it.g)(this.redirectDelay)).subscribe(e=>this.router.navigate(["/auth/login"]))}loadWines(){this.wines$=this.http.get("http://localhost:4400/api/wines").pipe((0,rt.K)(e=>(e instanceof v.UA&&401===e.status&&this.router.navigate(["/auth/login"]),(0,ot.of)([]))))}getConfigValue(e){return(0,at.hB)(this.options,e,null)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a._),t.Y36(v.eN),t.Y36(A.F0),t.Y36(h.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-playground-api-calls"]],decls:15,vars:3,consts:[["nbButton","","status","primary",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,o){if(1&e&&(t._UZ(0,"router-outlet"),t.TgZ(1,"nb-layout"),t.TgZ(2,"nb-layout-column"),t.TgZ(3,"nb-card"),t.TgZ(4,"nb-card-body"),t.TgZ(5,"h2"),t._uU(6,"You are authenticated"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"You can call the secured API"),t.qZA(),t.TgZ(9,"button",0),t.NdJ("click",function(){return o.loadWines()}),t._uU(10,"Call API"),t.qZA(),t.TgZ(11,"button",0),t.NdJ("click",function(){return o.logout()}),t._uU(12,"Sign out"),t.qZA(),t.qZA(),t.qZA(),t.YNc(13,ct,6,3,"nb-card",1),t.ALo(14,"async"),t.qZA(),t.qZA()),2&e){let r;t.xp6(13),t.Q6J("ngIf",null==(r=t.lcZ(14,1,o.wines$))?null:r.length)}},directives:[A.lC,x.Aq,x.dP,O.As,O.yK,i.O5,O.nd,$.z,i.sg,$.q],pipes:[i.Ov],encapsulation:2}),n})()}];let dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[A.Bz.forChild(ut)],A.Bz]}),n})(),mt=(()=>{class n{constructor(e){this.authService=e}getRole(){return this.authService.onTokenChange().pipe((0,l.U)(e=>e instanceof E.OS&&e.isValid()?e.getPayload().role:"guest"))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(a._))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function j(n){return["http://localhost:4400/api/auth/","http://other.url/with/no/token/injected/"].some(c=>n.url.includes(c))}let pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[H,{provide:v.TP,useClass:T,multi:!0},{provide:h.nN,useValue:j},{provide:M,useClass:mt}],imports:[[i.ez,I.u5,v.JF,dt,b.z,N.B,y.C,C.S.forRoot({forms:{login:{strategy:"password",redirectDelay:1e3,socialLinks:[{url:"https://github.com/akveo",target:"_blank",title:"GitHub"},{url:"https://www.facebook.com/akveo",target:"_blank",icon:"home-outline"},{url:"https://www.facebook.com/akveo",target:"_blank",title:"Twitter"}]}},strategies:[R.r.setup({name:"dummy",alwaysFail:!0,delay:1e3}),D.O.setup({name:"email",token:{class:E.OS},baseEndpoint:"http://localhost:4400/api/auth/",logout:{redirect:{success:"/auth/login",failure:"/auth/login"}},requestPass:{redirect:{success:"/auth/reset-password"}},resetPass:{redirect:{success:"/auth/login"}},errors:{key:"data.errors"}}),G.F.setup({name:"password",clientId:"test",clientSecret:"secret",baseEndpoint:"http://localhost:4400/api/auth/",token:{endpoint:"token",grantType:L.sY.PASSWORD,class:E.FN},refresh:{endpoint:"refresh-token",grantType:L.sY.REFRESH_TOKEN}})]}),S.forRoot({accessControl:{guest:{view:["news","comments"]},user:{parent:"guest",create:"comments"},moderator:{parent:"user",create:"news",remove:"*"}}})]]}),n})()}}]);