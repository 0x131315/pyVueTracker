webpackJsonp([1,2,4],{"+tPU":function(t,e,n){n("xGkn");for(var r=n("7KvD"),i=n("hJx8"),s=n("/bQp"),o=n("dSzd")("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var c=a[u],l=r[c],d=l&&l.prototype;d&&!d[o]&&i(d,o,c),s[c]=s.Array}},"/bQp":function(t,e){t.exports={}},"3fs2":function(t,e,n){var r=n("RY/4"),i=n("dSzd")("iterator"),s=n("/bQp");t.exports=n("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||s[r(t)]}},"4mcu":function(t,e){t.exports=function(){}},"880/":function(t,e,n){t.exports=n("hJx8")},"94VQ":function(t,e,n){"use strict";var r=n("Yobk"),i=n("X8DO"),s=n("e6n0"),o={};n("hJx8")(o,n("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),s(t,e+" Iterator")}},BO1k:function(t,e,n){t.exports={default:n("fxRn"),__esModule:!0}},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},KYvs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("BO1k"),i=n.n(r),s=n("mtWM"),o=n.n(s),a=n("lbUa"),u=n("qAKh"),c={data:function(){return{taskName:"",taskCompletitions:[],showSuggestion:!1}},components:{Autocomplete:a.default},computed:{filteredSuggestion:function(){console.log(["name",this.taskName]);var t=[],e=this.taskName.toLowerCase(),n=this.getTimeDelta(e,"",0),r=e.replace(n,"").trim(),s=new RegExp(r,"i"),o=!0,a=!1,u=void 0;try{for(var c,l=i()(this.taskCompletitions);!(o=(c=l.next()).done);o=!0){var d=c.value;if(d.match(s)&&d!==r&&t.push(n+" "+d),t.length>=10)break}}catch(t){a=!0,u=t}finally{try{!o&&l.return&&l.return()}finally{if(a)throw u}}return t}},methods:{getCompletitions:function(){var t=this;o.a.get("http://localhost:5000/api/completitions").then(function(e){t.taskCompletitions=e.data.values}).catch(function(t){console.log(["getCompletitions error",t])})},addTask:function(){var t=this;o.a.post("http://localhost:5000/api/task",Object(u.a)({name:this.taskName}),{headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){t.taskName="",t.$emit("add-task"),t.$refs.autocomplete.clear()}).catch(function(t){console.log(["getCompletitions error",t])})},getTimeDelta:function(t,e,n){var r="",i=[new RegExp(/^-[0-9]{0,3}/),new RegExp(/^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])/),new RegExp(/^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])-([0-1]?[0-9]|[2][0-3]):([0-5][0-9])/)];if(0===n&&t.match(i[2]))return t.match(i[2])[0];if(t.match(i[0])?r=t.match(i[0])[0]:t.match(i[1])&&(r=t.match(i[1])[0]),""!==r&&0===n)return this.getTimeDelta(t.replace(r,"").trim(),r,1);if(""!==e&&""!==r)r=e+" "+r;else if(""!==e&&""===r)return e;return r},onFocus:function(){this.showSuggestion=!0}},mounted:function(){this.getCompletitions()}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"md-layout md-gutter md-alignment-top-center",attrs:{action:"",method:"post"},on:{submit:function(e){e.preventDefault(),t.addTask()}}},[n("md-card",{staticClass:"md-layout-item md-large-size-50 md-xlarge-size-50 md-medium-size-70 md-small-size-100"},[n("md-card-content",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-size-80"},[n("Autocomplete",{ref:"autocomplete",attrs:{suggestions:t.filteredSuggestion},model:{value:t.taskName,callback:function(e){t.taskName=e},expression:"taskName"}})],1),t._v(" "),n("div",{staticClass:"md-layout-item md-size-20"},[n("md-button",{staticClass:"md-primary",staticStyle:{"margin-top":"18px"},attrs:{type:"submit"}},[t._v("Add")])],1)])])],1)],1)])},staticRenderFns:[]},d=n("VU/8")(c,l,!1,null,null,null);e.default=d.exports},PzxK:function(t,e,n){var r=n("D2L2"),i=n("sB3e"),s=n("ax3d")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},RPLV:function(t,e,n){var r=n("7KvD").document;t.exports=r&&r.documentElement},"RY/4":function(t,e,n){var r=n("R9M2"),i=n("dSzd")("toStringTag"),s="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:s?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},Ty68:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("tiaN"),i=n("mtWM"),s=n.n(i),o={data:function(){return{current:null}},methods:{getCurrentTask:function(){var t=this;s.a.get("http://localhost:5000/api/current").then(function(e){t.current=e.data}).catch(function(t){console.log(["getCurrentTask error",t])})},stopTask:function(){var t=this;this.current=null;s.a.post("http://localhost:5000/api/stop").then(function(e){t.$emit("stop-task")}).catch(function(t){console.log(["getCompletitions error",t])})}},components:{TaskItem:r.default},mounted:function(){this.getCurrentTask()}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.current?n("div",[n("form",{staticClass:"md-layout md-gutter md-alignment-top-center",attrs:{action:"",method:"post"},on:{submit:function(e){e.preventDefault(),t.stopTask()}}},[n("md-card",{staticClass:"md-layout-item md-large-size-50 md-xlarge-size-50 md-medium-size-70 md-small-size-100"},[n("md-card-content",[n("div",{staticClass:"md-layout"},[n("md-list",{staticClass:"md-layout-item md-size-80"},[n("TaskItem",{attrs:{task:t.current}})],1),t._v(" "),n("div",{staticClass:"md-layout-item md-size-20"},[n("md-button",{staticClass:"md-primary",staticStyle:{"margin-top":"12px"},attrs:{type:"submit"}},[t._v("Stop")])],1)],1)])],1)],1)]):t._e()},staticRenderFns:[]},u=n("VU/8")(o,a,!1,null,null,null);e.default=u.exports},Yobk:function(t,e,n){var r=n("77Pl"),i=n("qio6"),s=n("xnc9"),o=n("ax3d")("IE_PROTO"),a=function(){},u=function(){var t,e=n("ON07")("iframe"),r=s.length;for(e.style.display="none",n("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[s[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},dSzd:function(t,e,n){var r=n("e8AB")("wks"),i=n("3Eo+"),s=n("7KvD").Symbol,o="function"==typeof s;(t.exports=function(t){return r[t]||(r[t]=o&&s[t]||(o?s:i)("Symbol."+t))}).store=r},e6n0:function(t,e,n){var r=n("evD5").f,i=n("D2L2"),s=n("dSzd")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},fxRn:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("g8Ux")},g8Ux:function(t,e,n){var r=n("77Pl"),i=n("3fs2");t.exports=n("FeBl").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},h65t:function(t,e,n){var r=n("UuGF"),i=n("52gC");t.exports=function(t){return function(e,n){var s,o,a=String(i(e)),u=r(n),c=a.length;return u<0||u>=c?t?"":void 0:(s=a.charCodeAt(u))<55296||s>56319||u+1===c||(o=a.charCodeAt(u+1))<56320||o>57343?t?a.charAt(u):s:t?a.slice(u,u+2):o-56320+(s-55296<<10)+65536}}},lO7g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("N1EC"),i=n("KYvs"),s=n("Ty68"),o={data:function(){return{}},methods:{refreshData:function(){this.$refs.taskStop.getCurrentTask(),this.$refs.taskAdd.getCompletitions(),this.$refs.tasks.getTasks()}},components:{Tasks:r.default,TaskAdd:i.default,TaskStop:s.default},mounted:function(){setInterval(this.refreshData,6e4)}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("TaskStop",{ref:"taskStop",on:{"stop-task":this.refreshData}}),this._v(" "),e("TaskAdd",{ref:"taskAdd",on:{"add-task":this.refreshData}}),this._v(" "),e("Tasks",{ref:"tasks"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md-layout md-gutter md-alignment-top-center"},[e("div",{staticClass:"md-layout-item md-large-size-50 md-xlarge-size-50 md-medium-size-70 md-small-size-100"})])}]},u=n("VU/8")(o,a,!1,null,null,null);e.default=u.exports},qio6:function(t,e,n){var r=n("evD5"),i=n("77Pl"),s=n("lktj");t.exports=n("+E39")?Object.defineProperties:function(t,e){i(t);for(var n,o=s(e),a=o.length,u=0;a>u;)r.f(t,n=o[u++],e[n]);return t}},"vIB/":function(t,e,n){"use strict";var r=n("O4g8"),i=n("kM2E"),s=n("880/"),o=n("hJx8"),a=n("/bQp"),u=n("94VQ"),c=n("e6n0"),l=n("PzxK"),d=n("dSzd")("iterator"),f=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,p,h,v,g){u(n,e,p);var y,k,x,S=function(t){if(!f&&t in b)return b[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},T=e+" Iterator",C="values"==h,_=!1,b=t.prototype,L=b[d]||b["@@iterator"]||h&&b[h],z=L||S(h),O=h?C?S("entries"):z:void 0,A="Array"==e&&b.entries||L;if(A&&(x=l(A.call(new t)))!==Object.prototype&&x.next&&(c(x,T,!0),r||"function"==typeof x[d]||o(x,d,m)),C&&L&&"values"!==L.name&&(_=!0,z=function(){return L.call(this)}),r&&!g||!f&&!_&&b[d]||o(b,d,z),a[e]=z,a[T]=m,h)if(y={values:C?z:S("values"),keys:v?z:S("keys"),entries:O},g)for(k in y)k in b||s(b,k,y[k]);else i(i.P+i.F*(f||_),e,y);return y}},xGkn:function(t,e,n){"use strict";var r=n("4mcu"),i=n("EGZi"),s=n("/bQp"),o=n("TcQ7");t.exports=n("vIB/")(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},zQR9:function(t,e,n){"use strict";var r=n("h65t")(!0);n("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})}});
//# sourceMappingURL=1.3c3fed4f73d945b08741.js.map