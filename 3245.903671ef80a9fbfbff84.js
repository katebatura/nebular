(self.webpackChunknebular=self.webpackChunknebular||[]).push([[3245],{73245:function(t,n,e){"use strict";e.r(n),e.d(n,{TabsetModule:function(){return I}});var a=e(75656),o=e(27054),s=e(11785),i=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.P,o.K]]}),t}(),b=e(91882),r=e(55074),c=e(63260),g="[_nghost-%COMP%]   p[_ngcontent-%COMP%]{padding:1.25rem}",Z=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-route-tabset-showcase-child1"]],decls:5,vars:0,template:function(t,n){1&t&&(s.TgZ(0,"p"),s._uU(1,"List of "),s.TgZ(2,"strong"),s._uU(3,"users"),s.qZA(),s._uU(4,"."),s.qZA())},styles:[g]}),t}(),u=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-route-tabset-showcase-child2"]],decls:5,vars:0,template:function(t,n){1&t&&(s.TgZ(0,"p"),s._uU(1,"List of "),s.TgZ(2,"strong"),s._uU(3,"orders"),s.qZA(),s._uU(4,"."),s.qZA())},styles:[g]}),t}(),T=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-route-tabset-showcase-child3"]],decls:2,vars:0,template:function(t,n){1&t&&(s.TgZ(0,"p"),s._uU(1,"Hello world"),s.qZA())},styles:[g]}),t}(),p=e(96843),l=e(91161),d=e(61116),A=e(88543);function f(t,n){if(1&t&&s._UZ(0,"nb-icon",8),2&t){var e=s.oxw(2).$implicit;s.Q6J("config",e.icon)}}function q(t,n){if(1&t&&(s.TgZ(0,"span",9),s._uU(1),s.qZA()),2&t){var e=s.oxw(2).$implicit;s.xp6(1),s.Oqu(e.title)}}function _(t,n){if(1&t&&(s.TgZ(0,"li",4),s.TgZ(1,"a",5),s.YNc(2,f,1,1,"nb-icon",6),s.YNc(3,q,2,1,"span",7),s.qZA(),s.qZA()),2&t){var e=s.oxw().$implicit;s.ekj("responsive",e.responsive),s.xp6(2),s.Q6J("ngIf",e.icon),s.xp6(1),s.Q6J("ngIf",e.title)}}function m(t,n){if(1&t&&s._UZ(0,"nb-icon",12),2&t){var e=s.oxw(2).$implicit;s.Q6J("icon",e.icon)}}function U(t,n){if(1&t&&(s.TgZ(0,"span",9),s._uU(1),s.qZA()),2&t){var e=s.oxw(2).$implicit;s.xp6(1),s.Oqu(e.title)}}function h(t,n){if(1&t){var e=s.EpF();s.TgZ(0,"li",10),s.NdJ("click",function(t){s.CHM(e);var n=s.oxw().$implicit,a=s.oxw();return t.preventDefault(),a.selectTab(n)}),s.TgZ(1,"a",5),s.YNc(2,m,1,1,"nb-icon",11),s.YNc(3,U,2,1,"span",7),s.qZA(),s.qZA()}if(2&t){var a=s.oxw().$implicit,o=s.oxw();s.ekj("responsive",a.responsive),s.Q6J("routerLink",a.route)("routerLinkActiveOptions",o.activeLinkOptions)("queryParams",a.queryParams)("queryParamsHandling",a.queryParamsHandling)("fragment",a.fragment)("preserveFragment",a.preserveFragment)("skipLocationChange",a.skipLocationChange)("replaceUrl",a.replaceUrl)("state",a.state),s.xp6(2),s.Q6J("ngIf",a.icon),s.xp6(1),s.Q6J("ngIf",a.title)}}function C(t,n){if(1&t&&(s.ynx(0),s.YNc(1,_,4,4,"li",2),s.YNc(2,h,4,13,"ng-template",null,3,s.W1O),s.BQk()),2&t){var e=n.$implicit,a=s.MAs(3);s.xp6(1),s.Q6J("ngIf",e.disabled)("ngIfElse",a)}}var v=function(){function t(){this.fullWidthValue=!1,this.activeLinkOptions={exact:!0},this.changeTab=new s.vpe}return Object.defineProperty(t.prototype,"fullWidth",{set:function(t){this.fullWidthValue=(0,l.eB)(t)},enumerable:!1,configurable:!0}),t.prototype.selectTab=function(t){this.changeTab.emit(t)},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-route-tabset"]],hostVars:2,hostBindings:function(t,n){2&t&&s.ekj("full-width",n.fullWidthValue)},inputs:{tabs:"tabs",activeLinkOptions:"activeLinkOptions",fullWidth:"fullWidth"},outputs:{changeTab:"changeTab"},decls:3,vars:1,consts:[[1,"route-tabset"],[4,"ngFor","ngForOf"],["class","route-tab disabled","tabindex","-1",3,"responsive",4,"ngIf","ngIfElse"],["enabled",""],["tabindex","-1",1,"route-tab","disabled"],["tabindex","-1",1,"tab-link"],[3,"config",4,"ngIf"],["class","tab-text",4,"ngIf"],[3,"config"],[1,"tab-text"],["routerLinkActive","active","tabindex","0",1,"route-tab",3,"routerLink","routerLinkActiveOptions","queryParams","queryParamsHandling","fragment","preserveFragment","skipLocationChange","replaceUrl","state","click"],[3,"icon",4,"ngIf"],[3,"icon"]],template:function(t,n){1&t&&(s.TgZ(0,"ul",0),s.YNc(1,C,4,2,"ng-container",1),s.qZA(),s._UZ(2,"router-outlet")),2&t&&(s.xp6(1),s.Q6J("ngForOf",n.tabs))},directives:[d.sg,c.lC,d.O5,A.f,c.Od,c.rH],styles:['.route-tabset[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;list-style-type:none;margin:0;padding:0}.route-tabset[_ngcontent-%COMP%]   .route-tab[_ngcontent-%COMP%]{margin-bottom:-1px;text-align:center;padding:0}.route-tabset[_ngcontent-%COMP%]   .route-tab.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{display:block}.route-tabset[_ngcontent-%COMP%]   .route-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;text-decoration:none;display:inline-block}.route-tabset[_ngcontent-%COMP%]   .route-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{position:absolute;content:"";width:100%;border-radius:3px;bottom:-2px;left:0}.route-tabset[_ngcontent-%COMP%]   .route-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{vertical-align:middle}[dir=ltr]   [_nghost-%COMP%]   .tab-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   [_nghost-%COMP%]   .tab-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-right:.5rem}.full-width[_nghost-%COMP%]   .route-tabset[_ngcontent-%COMP%]{-ms-flex-pack:distribute;justify-content:space-around}']}),t}(),y=function(){function t(){this.tabs=[{title:"Users",icon:"person",route:"./tab1"},{title:"Orders",icon:"paper-plane-outline",responsive:!0,route:["./tab2"]},{title:"Query params",icon:"flash-outline",responsive:!0,disabled:!1,route:"./tab3",queryParams:{param1:123456,param2:"test"}},{title:"Transaction",icon:"flash-outline",responsive:!0,disabled:!0}]}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-route-tabset-showcase"]],decls:3,vars:1,consts:[["fullWidth","",3,"tabs"]],template:function(t,n){1&t&&(s.TgZ(0,"nb-card"),s.TgZ(1,"nb-card-body"),s._UZ(2,"nb-route-tabset",0),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Q6J("tabs",n.tabs))},directives:[p.As,p.yK,v],encapsulation:2}),t}(),O=e(88416),P=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-tabset-badge"]],decls:27,vars:0,consts:[["tabTitle","Users","badgeText","99+","badgeStatus","danger"],["tabTitle","Orders","badgeText","12","badgePosition","bottom right","badgeStatus","warning"],["tabTitle","Transactions","badgeText","new","badgePosition","top right","badgeStatus","success"],["tabTitle","Notifications","badgeDot","","badgePosition","center start","badgeStatus","danger"]],template:function(t,n){1&t&&(s.TgZ(0,"nb-card"),s.TgZ(1,"nb-card-body"),s.TgZ(2,"nb-tabset"),s.TgZ(3,"nb-tab",0),s.TgZ(4,"p"),s._uU(5,"List of "),s.TgZ(6,"strong"),s._uU(7,"users"),s.qZA(),s._uU(8,"."),s.qZA(),s.qZA(),s.TgZ(9,"nb-tab",1),s.TgZ(10,"p"),s._uU(11,"List of "),s.TgZ(12,"strong"),s._uU(13,"orders"),s.qZA(),s._uU(14,"."),s.qZA(),s.qZA(),s.TgZ(15,"nb-tab",2),s.TgZ(16,"p"),s._uU(17,"List of "),s.TgZ(18,"strong"),s._uU(19,"transactions"),s.qZA(),s._uU(20,"."),s.qZA(),s.qZA(),s.TgZ(21,"nb-tab",3),s.TgZ(22,"p"),s._uU(23,"List of "),s.TgZ(24,"strong"),s._uU(25,"notifications"),s.qZA(),s._uU(26,"."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())},directives:[p.As,p.yK,O.k,O.T],styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}"],changeDetection:0}),t}(),x=function(){function t(){this.bellIconConfig={icon:"bell-outline",pack:"eva"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-tabset-icon"]],decls:63,vars:1,consts:[["tabIcon","person-outline"],[3,"tabIcon"],["tabIcon","email-outline"],["fullWidth",""],["tabIcon","bell-outline"],["tabTitle","Users","tabIcon","person-outline","responsive",""],["tabTitle","Orders","tabIcon","bell-outline","responsive",""],["tabTitle","Transactions","tabIcon","email-outline","responsive",""]],template:function(t,n){1&t&&(s.TgZ(0,"nb-card"),s.TgZ(1,"nb-card-body"),s.TgZ(2,"nb-tabset"),s.TgZ(3,"nb-tab",0),s.TgZ(4,"p"),s._uU(5,"List of "),s.TgZ(6,"strong"),s._uU(7,"users"),s.qZA(),s._uU(8,"."),s.qZA(),s.qZA(),s.TgZ(9,"nb-tab",1),s.TgZ(10,"p"),s._uU(11,"List of "),s.TgZ(12,"strong"),s._uU(13,"orders"),s.qZA(),s._uU(14,"."),s.qZA(),s.qZA(),s.TgZ(15,"nb-tab",2),s.TgZ(16,"p"),s._uU(17,"List of "),s.TgZ(18,"strong"),s._uU(19,"transactions"),s.qZA(),s._uU(20,"."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"nb-card"),s.TgZ(22,"nb-card-body"),s.TgZ(23,"nb-tabset",3),s.TgZ(24,"nb-tab",0),s.TgZ(25,"p"),s._uU(26,"List of "),s.TgZ(27,"strong"),s._uU(28,"users"),s.qZA(),s._uU(29,"."),s.qZA(),s.qZA(),s.TgZ(30,"nb-tab",4),s.TgZ(31,"p"),s._uU(32,"List of "),s.TgZ(33,"strong"),s._uU(34,"orders"),s.qZA(),s._uU(35,"."),s.qZA(),s.qZA(),s.TgZ(36,"nb-tab",2),s.TgZ(37,"p"),s._uU(38,"List of "),s.TgZ(39,"strong"),s._uU(40,"transactions"),s.qZA(),s._uU(41,"."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(42,"nb-card"),s.TgZ(43,"nb-card-body"),s.TgZ(44,"nb-tabset"),s.TgZ(45,"nb-tab",5),s.TgZ(46,"p"),s._uU(47,"List of "),s.TgZ(48,"strong"),s._uU(49,"users"),s.qZA(),s._uU(50,"."),s.qZA(),s.qZA(),s.TgZ(51,"nb-tab",6),s.TgZ(52,"p"),s._uU(53,"List of "),s.TgZ(54,"strong"),s._uU(55,"orders"),s.qZA(),s._uU(56,"."),s.qZA(),s.qZA(),s.TgZ(57,"nb-tab",7),s.TgZ(58,"p"),s._uU(59,"List of "),s.TgZ(60,"strong"),s._uU(61,"transactions"),s.qZA(),s._uU(62,"."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(9),s.Q6J("tabIcon",n.bellIconConfig))},directives:[p.As,p.yK,O.k,O.T],styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}"],changeDetection:0}),t}(),w=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-tabset-showcase"]],decls:21,vars:0,consts:[["tabTitle","Users"],["tabTitle","Orders"],["tabTitle","Transactions","disabled",""]],template:function(t,n){1&t&&(s.TgZ(0,"nb-card"),s.TgZ(1,"nb-card-body"),s.TgZ(2,"nb-tabset"),s.TgZ(3,"nb-tab",0),s.TgZ(4,"p"),s._uU(5,"List of "),s.TgZ(6,"strong"),s._uU(7,"users"),s.qZA(),s._uU(8,"."),s.qZA(),s.qZA(),s.TgZ(9,"nb-tab",1),s.TgZ(10,"p"),s._uU(11,"List of "),s.TgZ(12,"strong"),s._uU(13,"orders"),s.qZA(),s._uU(14,"."),s.qZA(),s.qZA(),s.TgZ(15,"nb-tab",2),s.TgZ(16,"p"),s._uU(17,"List of "),s.TgZ(18,"strong"),s._uU(19,"transactions"),s.qZA(),s._uU(20,"."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())},directives:[p.As,p.yK,O.k,O.T],styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}"],changeDetection:0}),t}(),M=function(){function t(t){this.router=t}return t.prototype.changeTab=function(t){this.router.navigate(["tabset","tabset-test.component",t.route])},t.\u0275fac=function(n){return new(n||t)(s.Y36(c.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-tabset-test"]],decls:95,vars:2,consts:[["tabTitle","Tab #1"],["tabTitle","Tab #2"],["tabTitle","Tab #3"],["tabTitle","Tab #2",3,"active"],["tabTitle","Tab #3",3,"active"],["routeParam","tab",3,"changeTab"],["tabTitle","Tab #1","route","tab1"],["tabTitle","Tab #2","route","tab2"],["tabTitle","Tab #3","route","tab3"],["fullWidth",""],["tabTitle","Tab #1","badgeText","29"],["tabTitle","Tab #2","badgeText","29","badgeStatus","info","badgePosition","top left"],["tabTitle","Tab #3","badgeText","29","badgeStatus","success","badgePosition","bottom right"],["tabTitle","Tab #4","badgeText","29","badgeStatus","danger","badgePosition","bottom left"],["tabTitle","Tab #5","badgeText","29","badgeStatus","warning","badgePosition","bottom right"],["tabTitle","Tab #2","badgeText","29","badgeStatus","info","badgePosition","bottom right"],["tabTitle","Tab #3","badgeText","29","badgeStatus","success","badgePosition","top left"],["tabTitle","Tab #3","lazyLoad",""],["tabTitle","Tab #4","lazyLoad",""]],template:function(t,n){1&t&&(s.TgZ(0,"nb-tabset"),s.TgZ(1,"nb-tab",0),s.TgZ(2,"span"),s._uU(3,"Content #1"),s.qZA(),s.qZA(),s.TgZ(4,"nb-tab",1),s.TgZ(5,"span"),s._uU(6,"Content #2"),s.qZA(),s.qZA(),s.TgZ(7,"nb-tab",2),s.TgZ(8,"span"),s._uU(9,"Content #3"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"nb-tabset"),s.TgZ(11,"nb-tab",0),s.TgZ(12,"span"),s._uU(13,"Content #1"),s.qZA(),s.qZA(),s.TgZ(14,"nb-tab",3),s.TgZ(15,"span"),s._uU(16,"Content #2"),s.qZA(),s.qZA(),s.TgZ(17,"nb-tab",2),s.TgZ(18,"span"),s._uU(19,"Content #3"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(20,"nb-tabset"),s.TgZ(21,"nb-tab",0),s.TgZ(22,"span"),s._uU(23,"Content #1"),s.qZA(),s.qZA(),s.TgZ(24,"nb-tab",1),s.TgZ(25,"span"),s._uU(26,"Content #2"),s.qZA(),s.qZA(),s.TgZ(27,"nb-tab",4),s.TgZ(28,"span"),s._uU(29,"Content #3"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(30,"nb-tabset",5),s.NdJ("changeTab",function(t){return n.changeTab(t)}),s.TgZ(31,"nb-tab",6),s.TgZ(32,"span"),s._uU(33,"Content #1"),s.qZA(),s.qZA(),s.TgZ(34,"nb-tab",7),s.TgZ(35,"span"),s._uU(36,"Content #2"),s.qZA(),s.qZA(),s.TgZ(37,"nb-tab",8),s.TgZ(38,"span"),s._uU(39,"Content #3"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(40,"nb-tabset",9),s.TgZ(41,"nb-tab",0),s.TgZ(42,"span"),s._uU(43,"Content #1"),s.qZA(),s.qZA(),s.TgZ(44,"nb-tab",1),s.TgZ(45,"span"),s._uU(46,"Content #2"),s.qZA(),s.qZA(),s.TgZ(47,"nb-tab",2),s.TgZ(48,"span"),s._uU(49,"Content #3"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(50,"nb-tabset",9),s.TgZ(51,"nb-tab",10),s.TgZ(52,"span"),s._uU(53,"Content #1"),s.qZA(),s.qZA(),s.TgZ(54,"nb-tab",11),s.TgZ(55,"span"),s._uU(56,"Content #2"),s.qZA(),s.qZA(),s.TgZ(57,"nb-tab",12),s.TgZ(58,"span"),s._uU(59,"Content #3"),s.qZA(),s.qZA(),s.TgZ(60,"nb-tab",13),s.TgZ(61,"span"),s._uU(62,"Content #4"),s.qZA(),s.qZA(),s.TgZ(63,"nb-tab",14),s.TgZ(64,"span"),s._uU(65,"Content #5"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(66,"nb-tabset"),s.TgZ(67,"nb-tab",10),s.TgZ(68,"span"),s._uU(69,"Content #1"),s.qZA(),s.qZA(),s.TgZ(70,"nb-tab",15),s.TgZ(71,"span"),s._uU(72,"Content #2"),s.qZA(),s.qZA(),s.TgZ(73,"nb-tab",16),s.TgZ(74,"span"),s._uU(75,"Content #3"),s.qZA(),s.qZA(),s.TgZ(76,"nb-tab",13),s.TgZ(77,"span"),s._uU(78,"Content #4"),s.qZA(),s.qZA(),s.TgZ(79,"nb-tab",14),s.TgZ(80,"span"),s._uU(81,"Content #5"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(82,"nb-tabset"),s.TgZ(83,"nb-tab",0),s.TgZ(84,"span"),s._uU(85,"Content #1"),s.qZA(),s.qZA(),s.TgZ(86,"nb-tab",1),s.TgZ(87,"span"),s._uU(88,"Content #2"),s.qZA(),s.qZA(),s.TgZ(89,"nb-tab",17),s.TgZ(90,"span"),s._uU(91,"Content #3"),s.qZA(),s.qZA(),s.TgZ(92,"nb-tab",18),s.TgZ(93,"span"),s._uU(94,"Content #4"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(14),s.Q6J("active",!0),s.xp6(13),s.Q6J("active",!0))},directives:[O.k,O.T],styles:["nb-tabset[_ngcontent-%COMP%]{margin-bottom:40px}"]}),t}(),k=[{path:"route-tabset-showcase.component",component:y,children:[{path:"",redirectTo:"tab1",pathMatch:"full"},{path:"tab1",component:Z},{path:"tab2",component:u},{path:"tab3",component:T}]},{path:"tabset-badge.component",component:P},{path:"tabset-icon.component",component:x},{path:"tabset-showcase.component",component:w},{path:"tabset-test.component",component:M},{path:"tabset-test.component/:tab",component:M},{path:"tabset-width.component",component:function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-tabset-width"]],decls:15,vars:0,consts:[["fullWidth",""],["tabTitle","Users"],["tabTitle","Orders"]],template:function(t,n){1&t&&(s.TgZ(0,"nb-card"),s.TgZ(1,"nb-card-body"),s.TgZ(2,"nb-tabset",0),s.TgZ(3,"nb-tab",1),s.TgZ(4,"p"),s._uU(5,"List of "),s.TgZ(6,"strong"),s._uU(7,"users"),s.qZA(),s._uU(8,"."),s.qZA(),s.qZA(),s.TgZ(9,"nb-tab",2),s.TgZ(10,"p"),s._uU(11,"List of "),s.TgZ(12,"strong"),s._uU(13,"orders"),s.qZA(),s._uU(14,"."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())},directives:[p.As,p.yK,O.k,O.T],styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}"],changeDetection:0}),t}()},{path:"tabset-disabled.component",component:function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-tabset-disabled"]],decls:16,vars:0,consts:[["tabTitle","Users"],["tabTitle","Orders"],["tabTitle","Disabled Tab","disabled",""]],template:function(t,n){1&t&&(s.TgZ(0,"nb-card"),s.TgZ(1,"nb-card-body"),s.TgZ(2,"nb-tabset"),s.TgZ(3,"nb-tab",0),s.TgZ(4,"p"),s._uU(5,"List of "),s.TgZ(6,"strong"),s._uU(7,"users"),s.qZA(),s._uU(8,"."),s.qZA(),s.qZA(),s.TgZ(9,"nb-tab",1),s.TgZ(10,"p"),s._uU(11,"List of "),s.TgZ(12,"strong"),s._uU(13,"orders"),s.qZA(),s._uU(14,"."),s.qZA(),s.qZA(),s._UZ(15,"nb-tab",2),s.qZA(),s.qZA(),s.qZA())},directives:[p.As,p.yK,O.k,O.T],styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}"],changeDetection:0}),t}()}],L=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.Bz.forChild(k)],c.Bz]}),t}(),I=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[b.E,i,r.z,L]]}),t}()}}]);