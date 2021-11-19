"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[155],{30155:(y,c,s)=>{s.r(c),s.d(c,{RadioModule:()=>J});var d=s(86019),t=s(49133),b=s(71220),v=s(85082),m=s(24301),o=s(83668),l=s(60634),r=s(11707),p=s(18939);function Z(n,a){if(1&n&&(o.TgZ(0,"nb-radio",2),o._uU(1),o.qZA()),2&n){const e=a.$implicit;o.Q6J("disabled",e.disabled)("value",e.value),o.xp6(1),o.hij(" ",e.label," ")}}function T(n,a){if(1&n&&(o.TgZ(0,"nb-radio",2),o._uU(1),o.qZA()),2&n){const e=a.$implicit;o.Q6J("value",e.value),o.xp6(1),o.hij(" ",e.label," ")}}function C(n,a){if(1&n&&(o.TgZ(0,"nb-radio",4),o._uU(1),o.qZA()),2&n){const e=a.$implicit;o.Q6J("checked",e.checked)("disabled",e.disabled)("value",e.value),o.xp6(1),o.hij(" ",e.label," ")}}function A(n,a){if(1&n&&(o.TgZ(0,"nb-radio-group",2),o.YNc(1,C,2,4,"nb-radio",3),o.qZA()),2&n){const e=a.$implicit,i=o.oxw();o.ekj("control-status-example","control"===e),o.Q6J("name",e)("status",e),o.xp6(1),o.Q6J("ngForOf",i.options)}}function O(n,a){if(1&n&&(o.TgZ(0,"nb-radio",3),o._uU(1),o.qZA()),2&n){const e=a.$implicit;o.Q6J("value",e.value),o.xp6(1),o.hij(" ",e.label," ")}}function R(n,a){if(1&n&&(o.TgZ(0,"nb-radio",3),o._uU(1),o.qZA()),2&n){const e=a.$implicit;o.Q6J("value",e.value),o.xp6(1),o.hij(" ",e.label," ")}}const M=[{path:"radio-disabled.component",component:(()=>{class n{constructor(){this.options=[{value:"This is value 1",label:"Option 1"},{value:"This is value 2",label:"Option 2",disabled:!0},{value:"This is value 3",label:"Option 3"},{value:"This is value 4",label:"Option 4",disabled:!0},{value:"This is value 5",label:"Option 5"}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["nb-radio-disabled"]],decls:6,vars:3,consts:[[3,"ngModel","ngModelChange"],[3,"disabled","value",4,"ngFor","ngForOf"],[3,"disabled","value"]],template:function(e,i){1&e&&(o.TgZ(0,"nb-card"),o.TgZ(1,"nb-card-header"),o._uU(2),o.qZA(),o.TgZ(3,"nb-card-body"),o.TgZ(4,"nb-radio-group",0),o.NdJ("ngModelChange",function(u){return i.option=u}),o.YNc(5,Z,2,3,"nb-radio",1),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.hij("Selected Option: ",i.option,""),o.xp6(2),o.Q6J("ngModel",i.option),o.xp6(1),o.Q6J("ngForOf",i.options))},directives:[l.As,l.nd,l.yK,r.M,t.JJ,t.On,d.sg,p.r],encapsulation:2}),n})()},{path:"radio-showcase.component",component:(()=>{class n{constructor(){this.options=[{value:"This is value 1",label:"Option 1"},{value:"This is value 2",label:"Option 2"},{value:"This is value 3",label:"Option 3"},{value:"This is value 4",label:"Option 4"}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["nb-radio-showcase"]],decls:6,vars:3,consts:[[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,i){1&e&&(o.TgZ(0,"nb-card"),o.TgZ(1,"nb-card-header"),o._uU(2),o.qZA(),o.TgZ(3,"nb-card-body"),o.TgZ(4,"nb-radio-group",0),o.NdJ("ngModelChange",function(u){return i.option=u}),o.YNc(5,T,2,2,"nb-radio",1),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.hij("Selected Option: ",i.option,""),o.xp6(2),o.Q6J("ngModel",i.option),o.xp6(1),o.Q6J("ngForOf",i.options))},directives:[l.As,l.nd,l.yK,r.M,t.JJ,t.On,d.sg,p.r],encapsulation:2}),n})()},{path:"radio-statuses.component",component:(()=>{class n{constructor(){this.options=[{value:"This is value 1",label:"Option 1",checked:!0},{value:"This is value 2",label:"Option 2"},{value:"This is value 3",label:"Option 3"},{value:"This is value 4",label:"Option 4",disabled:!0}],this.statuses=["basic","primary","success","warning","danger","info","control"]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:1,consts:[[1,"example-items-rows"],[3,"name","status","control-status-example",4,"ngFor","ngForOf"],[3,"name","status"],[3,"checked","disabled","value",4,"ngFor","ngForOf"],[3,"checked","disabled","value"]],template:function(e,i){1&e&&(o.TgZ(0,"nb-card"),o.TgZ(1,"nb-card-body",0),o.YNc(2,A,2,5,"nb-radio-group",1),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("ngForOf",i.statuses))},directives:[l.As,l.yK,d.sg,r.M,p.r],styles:["nb-radio-group[_ngcontent-%COMP%]{padding:1rem}"]}),n})()},{path:"radio-disabled-group.component",component:(()=>{class n{constructor(){this.options=[{value:"This is value 1",label:"Option 1"},{value:"This is value 2",label:"Option 2"},{value:"This is value 3",label:"Option 3"},{value:"This is value 4",label:"Option 4"},{value:"This is value 5",label:"Option 5"}],this.formControl=new t.NI({value:"This is value 1",disabled:!0})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["ng-component"]],decls:12,vars:3,consts:[["disabled","","name","disabled","value","This is value 1"],[3,"value",4,"ngFor","ngForOf"],[3,"formControl"],[3,"value"]],template:function(e,i){1&e&&(o.TgZ(0,"nb-card"),o.TgZ(1,"nb-card-header"),o._uU(2," Attribute "),o.qZA(),o.TgZ(3,"nb-card-body"),o.TgZ(4,"nb-radio-group",0),o.YNc(5,O,2,2,"nb-radio",1),o.qZA(),o.qZA(),o.qZA(),o.TgZ(6,"nb-card"),o.TgZ(7,"nb-card-header"),o._uU(8," Reactive forms "),o.qZA(),o.TgZ(9,"nb-card-body"),o.TgZ(10,"nb-radio-group",2),o.YNc(11,R,2,2,"nb-radio",1),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(5),o.Q6J("ngForOf",i.options),o.xp6(5),o.Q6J("formControl",i.formControl),o.xp6(1),o.Q6J("ngForOf",i.options))},directives:[l.As,l.nd,l.yK,r.M,d.sg,t.JJ,t.oH,p.r],encapsulation:2}),n})()},{path:"radio-form.component",component:(()=>{class n{constructor(){this.ngModelValue="1",this.formControl=new t.NI("1")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["ng-component"]],decls:22,vars:4,consts:[[1,"subtitle"],["name","ng-model-group",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["name","reactive-forms-group",3,"formControl"]],template:function(e,i){1&e&&(o.TgZ(0,"nb-card"),o.TgZ(1,"nb-card-body"),o.TgZ(2,"p",0),o._uU(3),o.qZA(),o.TgZ(4,"nb-radio-group",1),o.NdJ("ngModelChange",function(u){return i.ngModelValue=u}),o.TgZ(5,"nb-radio",2),o._uU(6,"Option 1"),o.qZA(),o.TgZ(7,"nb-radio",3),o._uU(8,"Option 2"),o.qZA(),o.TgZ(9,"nb-radio",4),o._uU(10,"Option 3"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"nb-card"),o.TgZ(12,"nb-card-body"),o.TgZ(13,"p",0),o._uU(14),o.qZA(),o.TgZ(15,"nb-radio-group",5),o.TgZ(16,"nb-radio",2),o._uU(17,"Option 1"),o.qZA(),o.TgZ(18,"nb-radio",3),o._uU(19,"Option 2"),o.qZA(),o.TgZ(20,"nb-radio",4),o._uU(21,"Option 3"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(3),o.hij("NgModel value: ",i.ngModelValue,""),o.xp6(1),o.Q6J("ngModel",i.ngModelValue),o.xp6(10),o.hij("Form control value: ",i.formControl.value,""),o.xp6(1),o.Q6J("formControl",i.formControl))},directives:[l.As,l.yK,r.M,t.JJ,t.On,p.r,t.oH],styles:["p[_ngcontent-%COMP%]{margin-top:0}"],changeDetection:0}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[m.Bz.forChild(M)],m.Bz]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[d.ez,t.u5,t.UX,b.Y,v.z,F]]}),n})()}}]);