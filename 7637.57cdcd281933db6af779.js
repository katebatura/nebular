(self.webpackChunknebular=self.webpackChunknebular||[]).push([[7637],{67637:function(t,n,o){"use strict";o.r(n),o.d(n,{AutocompleteModule:function(){return L}});var e=o(37219),i=o(46489),r=o(55074),p=o(86884),l=o(63260),u=o(40878),c=o(79996),s=o(11785),a=o(96843),f=o(45773),m=o(74191),d=o(98187),h=o(61116),g=o(77125),b=["autoInput"];function v(t,n){if(1&t&&(s.TgZ(0,"nb-option",6),s._uU(1),s.qZA()),2&t){var o=n.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o," ")}}var Z=function(){function t(){}return t.prototype.ngOnInit=function(){this.options=["Option 1","Option 2","Option 3"],this.filteredOptions$=(0,u.of)(this.options)},t.prototype.filter=function(t){var n=t.toLowerCase();return this.options.filter(function(t){return t.toLowerCase().includes(n)})},t.prototype.getFilteredOptions=function(t){var n=this;return(0,u.of)(t).pipe((0,c.U)(function(t){return n.filter(t)}))},t.prototype.onChange=function(){this.filteredOptions$=this.getFilteredOptions(this.input.nativeElement.value)},t.prototype.onSelectionChange=function(t){this.filteredOptions$=this.getFilteredOptions(t)},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-autocomplete-showcase"]],viewQuery:function(t,n){var o;1&t&&s.Gf(b,5),2&t&&s.iGM(o=s.CRH())&&(n.input=o.first)},decls:8,vars:4,consts:[["size","small"],["nbInput","","type","text","placeholder","Enter value",3,"nbAutocomplete","input"],["autoInput",""],[3,"selectedChange"],["auto",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t&&(s.TgZ(0,"nb-card",0),s.TgZ(1,"nb-card-body"),s.TgZ(2,"input",1,2),s.NdJ("input",function(){return n.onChange()}),s.qZA(),s.TgZ(4,"nb-autocomplete",3,4),s.NdJ("selectedChange",function(t){return n.onSelectionChange(t)}),s.YNc(6,v,2,2,"nb-option",5),s.ALo(7,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){var o=s.MAs(5);s.xp6(2),s.Q6J("nbAutocomplete",o),s.xp6(4),s.Q6J("ngForOf",s.lcZ(7,2,n.filteredOptions$))}},directives:[a.As,a.yK,f.h,m.w,d.X,h.sg,g.q],pipes:[h.Ov],encapsulation:2,changeDetection:0}),t}(),A=o(31041),O=o(56238);function C(t,n){if(1&t&&(s.TgZ(0,"nb-option",7),s._uU(1),s.qZA()),2&t){var o=n.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o," ")}}function y(t,n){if(1&t&&(s.TgZ(0,"nb-option",7),s._uU(1),s.qZA()),2&t){var o=n.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o," ")}}var F=function(){function t(){}return t.prototype.ngOnInit=function(){var t=this;this.options=["Option 1","Option 2","Option 3"],this.filteredControlOptions$=(0,u.of)(this.options),this.filteredNgModelOptions$=(0,u.of)(this.options),this.inputFormControl=new A.NI,this.filteredControlOptions$=this.inputFormControl.valueChanges.pipe((0,O.O)(""),(0,c.U)(function(n){return t.filter(n)}))},t.prototype.filter=function(t){var n=t.toLowerCase();return this.options.filter(function(t){return t.toLowerCase().includes(n)})},t.prototype.onModelChange=function(t){this.filteredNgModelOptions$=(0,u.of)(this.filter(t))},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-autocomplete-showcase"]],decls:12,vars:10,consts:[["size","small"],[1,"example-items-rows"],["nbInput","","type","text","placeholder","Form control",3,"formControl","nbAutocomplete"],["autoControl",""],[3,"value",4,"ngFor","ngForOf"],["nbInput","","type","text","placeholder","ngModel",3,"ngModel","nbAutocomplete","ngModelChange"],["autoNgModel",""],[3,"value"]],template:function(t,n){if(1&t&&(s.TgZ(0,"nb-card",0),s.TgZ(1,"nb-card-body",1),s._UZ(2,"input",2),s.TgZ(3,"nb-autocomplete",null,3),s.YNc(5,C,2,2,"nb-option",4),s.ALo(6,"async"),s.qZA(),s.TgZ(7,"input",5),s.NdJ("ngModelChange",function(t){return n.onModelChange(t)}),s.qZA(),s.TgZ(8,"nb-autocomplete",null,6),s.YNc(10,y,2,2,"nb-option",4),s.ALo(11,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){var o=s.MAs(4),e=s.MAs(9);s.xp6(2),s.Q6J("formControl",n.inputFormControl)("nbAutocomplete",o),s.xp6(3),s.Q6J("ngForOf",s.lcZ(6,6,n.filteredControlOptions$)),s.xp6(2),s.Q6J("ngModel",n.value)("nbAutocomplete",e),s.xp6(3),s.Q6J("ngForOf",s.lcZ(11,8,n.filteredNgModelOptions$))}},directives:[a.As,a.yK,f.h,A.Fj,m.w,A.JJ,A.oH,d.X,h.sg,A.On,g.q],pipes:[h.Ov],encapsulation:2,changeDetection:0}),t}(),q=o(13831);function J(t,n){if(1&t&&(s.TgZ(0,"nb-option",6),s._uU(1),s.qZA()),2&t){var o=n.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o," ")}}function T(t,n){if(1&t&&(s.TgZ(0,"nb-option-group",4),s.YNc(1,J,2,2,"nb-option",5),s.qZA()),2&t){var o=n.$implicit;s.Q6J("title",o.name),s.xp6(1),s.Q6J("ngForOf",o.children)}}var w=function(){function t(){}return t.prototype.ngOnInit=function(){var t=this;this.groups=[{name:"Group 1",children:["Option 11","Option 12","Option 13"]},{name:"Group 2",children:["Option 21","Option 22","Option 23"]},{name:"Group 3",children:["Option 31","Option 32","Option 33"]}],this.filteredGroups$=(0,u.of)(this.groups),this.inputFormControl=new A.NI,this.filteredGroups$=this.inputFormControl.valueChanges.pipe((0,O.O)(""),(0,c.U)(function(n){return t.filter(n)}))},t.prototype.filterChildren=function(t,n){return t.filter(function(t){return t.toLowerCase().includes(n)})},t.prototype.filter=function(t){var n=this,o=t.toLowerCase();return this.groups.map(function(t){return{name:t.name,children:n.filterChildren(t.children,o)}}).filter(function(t){return t.children.length})},t.prototype.trackByFn=function(t,n){return n.name},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-autocomplete-group"]],decls:7,vars:6,consts:[["size","medium"],["nbInput","","type","text","placeholder","Enter value",3,"formControl","nbAutocomplete"],["auto",""],[3,"title",4,"ngFor","ngForOf","ngForTrackBy"],[3,"title"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t&&(s.TgZ(0,"nb-card",0),s.TgZ(1,"nb-card-body"),s._UZ(2,"input",1),s.TgZ(3,"nb-autocomplete",null,2),s.YNc(5,T,2,2,"nb-option-group",3),s.ALo(6,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){var o=s.MAs(4);s.xp6(2),s.Q6J("formControl",n.inputFormControl)("nbAutocomplete",o),s.xp6(3),s.Q6J("ngForOf",s.lcZ(6,4,n.filteredGroups$))("ngForTrackBy",n.trackByFn)}},directives:[a.As,a.yK,f.h,A.Fj,m.w,A.JJ,A.oH,d.X,h.sg,q.$,g.q],pipes:[h.Ov],encapsulation:2,changeDetection:0}),t}();function x(t,n){if(1&t&&(s.TgZ(0,"nb-option",5),s._uU(1),s.qZA()),2&t){var o=n.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o," ")}}var $=function(){function t(){}return t.prototype.ngOnInit=function(){var t=this;this.options=["Option 1","Option 2","Option 3"],this.filteredOptions$=(0,u.of)(this.options),this.inputFormControl=new A.NI,this.filteredOptions$=this.inputFormControl.valueChanges.pipe((0,O.O)(""),(0,c.U)(function(n){return t.filter(n)}))},t.prototype.filter=function(t){var n=t.toLowerCase();return this.options.filter(function(t){return t.toLowerCase().includes(n)})},t.prototype.viewHandle=function(t){return t.toUpperCase()},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-autocomplete-custom-display"]],decls:7,vars:6,consts:[["size","small"],["nbInput","","type","text","placeholder","Enter value",3,"formControl","nbAutocomplete"],[3,"handleDisplayFn"],["auto",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t&&(s.TgZ(0,"nb-card",0),s.TgZ(1,"nb-card-body"),s._UZ(2,"input",1),s.TgZ(3,"nb-autocomplete",2,3),s.YNc(5,x,2,2,"nb-option",4),s.ALo(6,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){var o=s.MAs(4);s.xp6(2),s.Q6J("formControl",n.inputFormControl)("nbAutocomplete",o),s.xp6(1),s.Q6J("handleDisplayFn",n.viewHandle),s.xp6(2),s.Q6J("ngForOf",s.lcZ(6,4,n.filteredOptions$))}},directives:[a.As,a.yK,f.h,A.Fj,m.w,A.JJ,A.oH,d.X,h.sg,g.q],pipes:[h.Ov],encapsulation:2,changeDetection:0}),t}();function Q(t,n){if(1&t&&(s.TgZ(0,"nb-option",5),s._uU(1),s.qZA()),2&t){var o=n.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o," ")}}var U=function(){function t(){}return t.prototype.ngOnInit=function(){var t=this;this.options=["Option 1","Option 2","Option 3"],this.filteredOptions$=(0,u.of)(this.options),this.inputFormControl=new A.NI,this.filteredOptions$=this.inputFormControl.valueChanges.pipe((0,O.O)(""),(0,c.U)(function(n){return t.filter(n)}))},t.prototype.filter=function(t){var n=t.toLowerCase();return this.options.filter(function(t){return t.toLowerCase().includes(n)})},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["nb-autocomplete-active-first"]],decls:7,vars:6,consts:[["size","small"],["nbInput","","type","text","placeholder","Enter value",3,"formControl","nbAutocomplete"],[3,"activeFirst"],["auto",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t&&(s.TgZ(0,"nb-card",0),s.TgZ(1,"nb-card-body"),s._UZ(2,"input",1),s.TgZ(3,"nb-autocomplete",2,3),s.YNc(5,Q,2,2,"nb-option",4),s.ALo(6,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){var o=s.MAs(4);s.xp6(2),s.Q6J("formControl",n.inputFormControl)("nbAutocomplete",o),s.xp6(1),s.Q6J("activeFirst",!0),s.xp6(2),s.Q6J("ngForOf",s.lcZ(6,4,n.filteredOptions$))}},directives:[a.As,a.yK,f.h,A.Fj,m.w,A.JJ,A.oH,d.X,h.sg,g.q],pipes:[h.Ov],encapsulation:2,changeDetection:0}),t}(),M=o(42177);function N(t,n){if(1&t&&(s.TgZ(0,"nb-option",8),s._uU(1),s.qZA()),2&t){var o=n.$implicit;s.Q6J("value",o),s.xp6(1),s.hij(" ",o," ")}}var I=[{path:"autocomplete-showcase.component",component:Z},{path:"autocomplete-form.component",component:F},{path:"autocomplete-group.component",component:w},{path:"autocomplete-custom-display.component",component:$},{path:"autocomplete-active-first.component",component:U},{path:"autocomplete-disabled.component",component:function(){function t(){this.options=["Option 1","Option 2","Option 3"],this.disabled=!0,this.inputFormControl=new A.NI}return t.prototype.toggleDisabled=function(){this.disabled=!this.disabled,this.disabled?this.inputFormControl.disable():this.inputFormControl.enable()},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["ng-component"]],decls:20,vars:5,consts:[["size","small"],[1,"example-items-col"],["nbButton","",3,"click"],[1,"label"],["nbInput","","type","text","placeholder","Plain input",3,"nbAutocomplete","disabled"],["nbInput","","type","text","placeholder","Form control",3,"nbAutocomplete","formControl"],["auto",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t&&(s.TgZ(0,"nb-card",0),s.TgZ(1,"nb-card-body",1),s.TgZ(2,"button",2),s.NdJ("click",function(){return n.toggleDisabled()}),s._uU(3,"Toggle disabled"),s.qZA(),s.TgZ(4,"label"),s.TgZ(5,"span",3),s._uU(6,"Disabled via "),s.TgZ(7,"i"),s._uU(8,"disabled"),s.qZA(),s._uU(9," attribute"),s.qZA(),s._UZ(10,"input",4),s.qZA(),s.TgZ(11,"label"),s.TgZ(12,"span",3),s._uU(13,"Disabled via "),s.TgZ(14,"i"),s._uU(15,"formControl"),s.qZA(),s.qZA(),s._UZ(16,"input",5),s.qZA(),s.TgZ(17,"nb-autocomplete",null,6),s.YNc(19,N,2,2,"nb-option",7),s.qZA(),s.qZA(),s.qZA()),2&t){var o=s.MAs(18);s.xp6(10),s.Q6J("nbAutocomplete",o)("disabled",n.disabled),s.xp6(6),s.Q6J("nbAutocomplete",o)("formControl",n.inputFormControl),s.xp6(3),s.Q6J("ngForOf",n.options)}},directives:[a.As,a.yK,M.D,f.h,m.w,A.Fj,A.JJ,A.oH,d.X,h.sg,g.q],styles:[".label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}"],changeDetection:0}),t}()}],_=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[l.Bz.forChild(I)],l.Bz]}),t}(),L=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[h.ez,A.u5,A.UX,e.C,i.n,_,r.z,p.T]]}),t}()}}]);