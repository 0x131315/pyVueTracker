webpackJsonp([2],{Cdx3:function(t,e,n){var s=n("sB3e"),i=n("lktj");n("uqUo")("keys",function(){return function(t){return i(s(t))}})},KYvs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("fZjL"),i=n.n(s),a=n("BO1k"),o=n.n(a),l=n("mtWM"),r=n.n(l),c={data:function(){return{taskName:"",taskCompletitions:[],showSuggestion:!1}},computed:{filteredSuggestion:function(){var t=[],e=this.taskName.replace(this.getTimeDelta(this.taskName,"",0),"").trim(),n=new RegExp(e,"i"),s=!0,i=!1,a=void 0;try{for(var l,r=o()(this.taskCompletitions);!(s=(l=r.next()).done);s=!0){var c=l.value;if(c.match(n)&&c!==e&&t.push(c),t.length>=10)break}}catch(t){i=!0,a=t}finally{try{!s&&r.return&&r.return()}finally{if(i)throw a}}return t}},methods:{getCompletitions:function(){var t=this;r.a.get("http://localhost:5000/api/completitions").then(function(e){t.taskCompletitions=e.data.values}).catch(function(t){console.log(["getCompletitions error",t])})},addTask:function(){var t=this;r.a.post("http://localhost:5000/api/task",this.urlEncode({name:this.taskName}),{headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){t.taskName="",t.$refs.tasks.getTasks()}).catch(function(t){console.log(["getCompletitions error",t])})},urlEncode:function(t){return i()(t).reduce(function(e,n){return e.push(n+"="+encodeURIComponent(t[n])),e},[]).join("&")},getTimeDelta:function(t,e,n){var s="",i=[new RegExp(/^-[0-9]{0,3}/),new RegExp(/^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])/),new RegExp(/^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])-([0-1]?[0-9]|[2][0-3]):([0-5][0-9])/)];if(0===n&&t.match(i[2]))return t.match(i[2])[0];if(t.match(i[0])?s=t.match(i[0])[0]:t.match(i[1])&&(s=t.match(i[1])[0]),""!==s&&0===n)return this.getTimeDelta(t.replace(s,"").trim(),s,1);if(""!==e&&""!==s)s=e+" "+s;else if(""!==e&&""===s)return e;return console.log(s),s},setTaskBody:function(t){var e=this.getTimeDelta(this.taskName,"",0);console.log(e),this.taskName=""!==e?e+" "+t:t},onFocus:function(){this.showSuggestion=!0}},mounted:function(){this.getCompletitions()}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"md-layout md-gutter md-alignment-top-center",attrs:{action:"",method:"post"},on:{submit:function(e){e.preventDefault(),t.addTask()}}},[n("md-card",{staticClass:"md-layout-item md-large-size-50 md-xlarge-size-50 md-medium-size-70 md-small-size-100"},[n("md-card-content",[n("div",{staticClass:"md-layout"},[n("md-field",{staticClass:"md-layout-item md-size-80",attrs:{"md-clearable":""}},[n("label",[t._v("Task")]),t._v(" "),n("md-input",{nativeOn:{focus:function(e){return t.onFocus(e)}},model:{value:t.taskName,callback:function(e){t.taskName=e},expression:"taskName"}})],1),t._v(" "),n("div",{staticClass:"md-layout-item md-size-20"},[n("md-button",{staticClass:"md-primary",staticStyle:{"margin-top":"18px"},attrs:{type:"submit"}},[t._v("Add")])],1)],1)])],1)],1),t._v(" "),t.filteredSuggestion.length&&t.showSuggestion?n("div",{staticClass:"md-layout md-gutter md-alignment-top-center"},[n("md-list",{staticClass:"md-layout-item md-large-size-50 md-xlarge-size-50 md-medium-size-70 md-small-size-100"},t._l(t.filteredSuggestion,function(e){return n("md-list-item",{key:e.id,on:{click:function(n){t.setTaskBody(e)}}},[n("span",{staticClass:"md-list-item-text"},[t._v(t._s(e))])])}))],1):t._e()])},staticRenderFns:[]},u=n("VU/8")(c,m,!1,null,null,null);e.default=u.exports},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},uqUo:function(t,e,n){var s=n("kM2E"),i=n("FeBl"),a=n("S82l");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),s(s.S+s.F*a(function(){n(1)}),"Object",o)}}});
//# sourceMappingURL=2.29bb525ddb89579a6090.js.map