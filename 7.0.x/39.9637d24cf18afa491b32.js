(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{YLNe:function(t,e,n){"use strict";n.r(e),n.d(e,"InfiniteListModule",function(){return B});var o=n("ofXK"),i=n("n81q"),s=n("0AKQ"),r=n("YNTD"),a=n("tyNb"),l=n("fXoL"),c=n("GyhO"),b=n("IzEk"),h=n("Kqap"),p=n("BFxc"),d=n("xbPD"),u=n("mCNh");function g(t,e,n){return 0===n?[e]:(t.push(e),t)}var f=n("MGne"),m=n("jXul"),w=n("lJxs"),v=n("3E0/"),y=n("tk/3"),P=function(){function t(t){this.http=t}return t.prototype.load=function(t,e){var n=(t-1)%7*e;return this.http.get("assets/data/news.json").pipe(Object(w.a)(function(t){return t.splice(n,e)}),Object(v.a)(1500))},t.\u0275fac=function(e){return new(e||t)(l.dc(y.b))},t.\u0275prov=l.Mb({token:t,factory:t.\u0275fac}),t}(),x=n("kztb"),O=n("V+dw"),S=n("S+eJ"),C=n("eBxF"),N=n("66B6"),I=function(){function t(){this.label="Loading"}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Kb({type:t,selectors:[["nb-news-post-placeholder"]],hostVars:1,hostBindings:function(t,e){2&t&&l.Eb("aria-label",e.label)},decls:3,vars:0,consts:[[1,"title-placeholder"],[1,"text-placeholder"],[1,"link-placeholder"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2))},styles:["[_nghost-%COMP%]{display:block;width:100%}.title-placeholder[_ngcontent-%COMP%]{height:1.8rem;margin-bottom:.5rem;width:80%}.text-placeholder[_ngcontent-%COMP%]{height:4rem;margin-bottom:1rem}.link-placeholder[_ngcontent-%COMP%]{height:1.25rem;width:5rem}.nb-theme-default   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#e4e9f2}.nb-theme-dark   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#101426}.nb-theme-cosmic   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#13132b}.nb-theme-corporate   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#e4e9f2}"]}),t}(),T=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Kb({type:t,selectors:[["nb-news-post"]],inputs:{post:"post"},decls:7,vars:3,consts:[[1,"h5"]],template:function(t,e){1&t&&(l.Wb(0,"article"),l.Wb(1,"h2",0),l.Kc(2),l.Vb(),l.Wb(3,"p"),l.Kc(4),l.Vb(),l.Wb(5,"a"),l.Kc(6,"Read full article"),l.Vb(),l.Vb()),2&t&&(l.Db(2),l.Lc(e.post.title),l.Db(2),l.Lc(e.post.text),l.Db(1),l.Eb("href",e.post.link,l.Dc))},encapsulation:2}),t}();function D(t,e){1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post-placeholder"),l.Vb())}function W(t,e){if(1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post",2),l.Vb()),2&t){var n=e.$implicit;l.Db(1),l.qc("post",n)}}function V(t,e){1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post-placeholder"),l.Vb())}var q=function(){function t(t,e,n,i,s,r,a){this.newsService=t,this.router=e,this.route=n,this.scrollService=i,this.layoutService=s,this.platformId=r,this.window=a,this.news=[],this.topPlaceholders=[],this.bottomPlaceholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(o.C)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=a.history.scrollRestoration,history.scrollRestoration="manual")}return t.prototype.ngOnInit=function(){var t=this.route.snapshot.queryParams.page;this.startPage=t?Number.parseInt(t,10):100,this.pageToLoadNext=this.startPage},t.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},t.prototype.updateUrl=function(t){this.router.navigate(["."],{queryParams:{page:t},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},t.prototype.loadPrevious=function(){var t=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.topPlaceholders=new Array(this.pageSize),this.restoreScrollPosition(),this.startPage--,this.newsService.load(this.startPage,this.pageSize).subscribe(function(e){var n;t.topPlaceholders=[],(n=t.news).unshift.apply(n,e),t.loadingPrevious=!1},function(e){return t.startPage++}))},t.prototype.loadNext=function(){var t=this;this.loadingNext||(this.loadingNext=!0,this.bottomPlaceholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(e){var n;t.bottomPlaceholders=[],(n=t.news).push.apply(n,e),t.loadingNext=!1,t.pageToLoadNext++}))},t.prototype.restoreScrollPosition=function(){var t=this;Object(c.a)(this.layoutService.getDimensions(),this.scrollService.getPosition(),this.listItems.changes.pipe(Object(b.a)(1)),this.layoutService.getDimensions(),this.scrollService.getPosition()).pipe(function(t,e){return arguments.length>=2?function(n){return Object(u.a)(Object(h.a)(t,e),Object(p.a)(1),Object(d.a)(e))(n)}:function(e){return Object(u.a)(Object(h.a)(function(e,n,o){return t(e,n,o+1)}),Object(p.a)(1))(e)}}(g,[])).subscribe(function(e){var n=e[4].y,o=e[3].scrollHeight-e[0].scrollHeight;e[1].y+o!==n&&t.scrollService.scrollTo(null,n+o)})},t.\u0275fac=function(e){return new(e||t)(l.Qb(P),l.Qb(a.c),l.Qb(a.a),l.Qb(x.a),l.Qb(O.a),l.Qb(l.C),l.Qb(f.f))},t.\u0275cmp=l.Kb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var n;1&t&&l.Qc(m.b,!0,l.l),2&t&&l.xc(n=l.hc())&&(e.listItems=n)},features:[l.Cb([P])],decls:5,vars:6,consts:[["nbInfiniteList","","listenWindowScroll","","nbListPageTracker","",3,"threshold","pageSize","startPage","topThreshold","bottomThreshold","pageChange"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(t,e){1&t&&(l.Wb(0,"nb-card"),l.Wb(1,"nb-list",0),l.gc("topThreshold",function(){return e.loadPrevious()})("bottomThreshold",function(){return e.loadNext()})("pageChange",function(t){return e.updateUrl(t)}),l.Ic(2,D,2,0,"nb-list-item",1),l.Ic(3,W,2,1,"nb-list-item",1),l.Ic(4,V,2,0,"nb-list-item",1),l.Vb(),l.Vb()),2&t&&(l.Db(1),l.qc("threshold",500)("pageSize",e.pageSize)("startPage",e.startPage),l.Db(1),l.qc("ngForOf",e.topPlaceholders),l.Db(1),l.qc("ngForOf",e.news),l.Db(1),l.qc("ngForOf",e.bottomPlaceholders))},directives:[S.b,m.a,C.a,N.a,o.n,m.b,I,T],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"]}),t}();function R(t,e){if(1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post",4),l.Vb()),2&t){var n=e.$implicit;l.Db(1),l.qc("post",n)}}function k(t,e){1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post-placeholder"),l.Vb())}function L(t,e){if(1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post",4),l.Vb()),2&t){var n=e.$implicit;l.Db(1),l.qc("post",n)}}function M(t,e){1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post-placeholder"),l.Vb())}var z=function(){function t(t){this.newsService=t,this.firstCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.secondCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.pageSize=10}return t.prototype.loadNext=function(t){t.loading||(t.loading=!0,t.placeholders=new Array(this.pageSize),this.newsService.load(t.pageToLoadNext,this.pageSize).subscribe(function(e){var n;t.placeholders=[],(n=t.news).push.apply(n,e),t.loading=!1,t.pageToLoadNext++}))},t.\u0275fac=function(e){return new(e||t)(l.Qb(P))},t.\u0275cmp=l.Kb({type:t,selectors:[["ng-component"]],features:[l.Cb([P])],decls:12,vars:6,consts:[[1,"own-scroll"],["nbInfiniteList","",3,"threshold","bottomThreshold"],[4,"ngFor","ngForOf"],["nbInfiniteList","","listenWindowScroll","",3,"threshold","bottomThreshold"],[3,"post"]],template:function(t,e){1&t&&(l.Wb(0,"nb-card",0),l.Wb(1,"nb-card-header"),l.Kc(2," Own scroll "),l.Vb(),l.Wb(3,"nb-list",1),l.gc("bottomThreshold",function(){return e.loadNext(e.firstCard)}),l.Ic(4,R,2,1,"nb-list-item",2),l.Ic(5,k,2,0,"nb-list-item",2),l.Vb(),l.Vb(),l.Wb(6,"nb-card"),l.Wb(7,"nb-card-header"),l.Kc(8," Window scroll "),l.Vb(),l.Wb(9,"nb-list",3),l.gc("bottomThreshold",function(){return e.loadNext(e.secondCard)}),l.Ic(10,L,2,1,"nb-list-item",2),l.Ic(11,M,2,0,"nb-list-item",2),l.Vb(),l.Vb()),2&t&&(l.Db(3),l.qc("threshold",500),l.Db(1),l.qc("ngForOf",e.firstCard.news),l.Db(1),l.qc("ngForOf",e.firstCard.placeholders),l.Db(4),l.qc("threshold",500),l.Db(1),l.qc("ngForOf",e.secondCard.news),l.Db(1),l.qc("ngForOf",e.secondCard.placeholders))},directives:[S.b,S.d,m.a,C.a,o.n,m.b,T,I],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}","[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}nb-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 45%;flex:1 1 45%;margin:0 2.5%}nb-card.own-scroll[_ngcontent-%COMP%]{height:30rem}"]}),t}();function _(t,e){if(1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post",2),l.Vb()),2&t){var n=e.$implicit;l.Db(1),l.qc("post",n)}}function F(t,e){1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post-placeholder"),l.Vb())}var j=function(){function t(t){this.newsService=t,this.news=[],this.placeholders=[],this.pageSize=10,this.pageToLoadNext=1,this.loading=!1}return t.prototype.loadNext=function(){var t=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(e){var n;t.placeholders=[],(n=t.news).push.apply(n,e),t.loading=!1,t.pageToLoadNext++}))},t.\u0275fac=function(e){return new(e||t)(l.Qb(P))},t.\u0275cmp=l.Kb({type:t,selectors:[["ng-component"]],features:[l.Cb([P])],decls:4,vars:3,consts:[["nbInfiniteList","","listenWindowScroll","",3,"threshold","bottomThreshold"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(t,e){1&t&&(l.Wb(0,"nb-card"),l.Wb(1,"nb-list",0),l.gc("bottomThreshold",function(){return e.loadNext()}),l.Ic(2,_,2,1,"nb-list-item",1),l.Ic(3,F,2,0,"nb-list-item",1),l.Vb(),l.Vb()),2&t&&(l.Db(1),l.qc("threshold",500),l.Db(1),l.qc("ngForOf",e.news),l.Db(1),l.qc("ngForOf",e.placeholders))},directives:[S.b,m.a,C.a,o.n,m.b,T,I],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"]}),t}(),Q=n("pLZG"),K=n("1Ei1");function $(t,e){if(1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post",3),l.Vb()),2&t){var n=e.$implicit;l.Db(1),l.qc("post",n)}}function E(t,e){1&t&&(l.Wb(0,"nb-list-item"),l.Rb(1,"nb-news-post-placeholder"),l.Vb())}function A(t,e){var n=t.getComputedStyle(e),o=parseInt(n.getPropertyValue("margin-top"),10),i=parseInt(n.getPropertyValue("margin-bottom"),10);return e.offsetHeight+o+i}var U=[{path:"infinite-list-placeholders.component",component:q},{path:"infinite-list-scroll-modes.component",component:z},{path:"infinite-list-showcase.component",component:j},{path:"infinite-news-list.component",component:function(){function t(t,e,n,i,s,r){this.newsService=t,this.router=e,this.route=n,this.scrollService=i,this.platformId=s,this.window=r,this.news=[],this.placeholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(o.C)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=r.history.scrollRestoration,history.scrollRestoration="manual")}return t.prototype.ngOnInit=function(){var t=this.route.snapshot.queryParams.page;this.startPage=t?Number.parseInt(t,10):1,this.pageToLoadNext=this.startPage},t.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},t.prototype.updateUrl=function(t){this.router.navigate(["."],{queryParams:{page:t},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},t.prototype.loadPrevious=function(){var t=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.newsService.load(this.startPage-1,this.pageSize).subscribe(function(e){var n;(n=t.news).unshift.apply(n,e),t.loadingPrevious=!1,t.restoreScrollPosition(),t.startPage--}))},t.prototype.loadNext=function(){var t=this;this.loadingNext||(this.loadingNext=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(e){var n;t.placeholders=[],(n=t.news).push.apply(n,e),t.loadingNext=!1,t.pageToLoadNext++}))},t.prototype.restoreScrollPosition=function(){var t=this,e=this.listItems.length>0?this.listItems.first.nativeElement:null;this.listItems.changes.pipe(Object(w.a)(function(){return t.listItems.first.nativeElement}),Object(Q.a)(function(t){return t!==e}),Object(b.a)(1)).subscribe(function(){for(var n=0,o=0,i=t.listItems.toArray();o<i.length;o++){var s=i[o].nativeElement;if(s===e)break;n+=A(t.window,s)}t.scrollService.scrollTo(null,n)})},t.\u0275fac=function(e){return new(e||t)(l.Qb(P),l.Qb(a.c),l.Qb(a.a),l.Qb(x.a),l.Qb(l.C),l.Qb(f.f))},t.\u0275cmp=l.Kb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var n;1&t&&l.Qc(m.b,!0,l.l),2&t&&l.xc(n=l.hc())&&(e.listItems=n)},features:[l.Cb([P])],decls:5,vars:6,consts:[[3,"nbSpinner"],["nbInfiniteList","","listenWindowScroll","","nbListPageTracker","",3,"threshold","pageSize","startPage","topThreshold","bottomThreshold","pageChange"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(t,e){1&t&&(l.Wb(0,"nb-card"),l.Rb(1,"div",0),l.Wb(2,"nb-list",1),l.gc("topThreshold",function(){return e.loadPrevious()})("bottomThreshold",function(){return e.loadNext()})("pageChange",function(t){return e.updateUrl(t)}),l.Ic(3,$,2,1,"nb-list-item",2),l.Ic(4,E,2,0,"nb-list-item",2),l.Vb(),l.Vb()),2&t&&(l.Db(1),l.qc("nbSpinner",e.loadingPrevious),l.Db(1),l.qc("threshold",500)("pageSize",e.pageSize)("startPage",e.startPage),l.Db(1),l.qc("ngForOf",e.news),l.Db(1),l.qc("ngForOf",e.placeholders))},directives:[S.b,K.a,m.a,C.a,N.a,o.n,m.b,T,I],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"]}),t}()}],H=function(){function t(){}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(U)],a.g]}),t}(),B=function(){function t(){}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(e){return new(e||t)},imports:[[o.c,i.a,s.a,r.a,H]]}),t}()}}]);