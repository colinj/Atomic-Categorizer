(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)r=i[d],s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},s={app:0},a=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Atomic-Categorizer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0786":function(e,t,o){"use strict";var n=o("2a74"),s=o.n(n);s.a},"0b4a":function(e,t,o){},"0be3":function(e,t,o){},"1a5e":function(e,t,o){},2682:function(e,t,o){},"2a74":function(e,t,o){},"30b9":function(e,t,o){"use strict";var n=o("5b51"),s=o.n(n);s.a},"388b":function(e,t,o){"use strict";var n=o("6edc"),s=o.n(n);s.a},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"o-app",attrs:{id:"app"}},[o("header",{staticClass:"o-app__header"},[e._m(0),o("a_infoBlock",[o("p",[e._v("This is an unofficial tool to help you categorize "),o("a",{attrs:{href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[e._v("Atomic Design")]),e._v(" components.")]),o("p",[e._v("Answer the following quiz to help you figure out what category a particular component belongs to.")])])],1),o("main",{staticClass:"o-app__main"},[o("o_quiz",{on:{update:e.updateScores}}),o("o_recommendation",{attrs:{scores:e.finalScores}})],1),o("footer",{staticClass:"o-app__footer"},[o("a_infoBlock",[o("p",[e._v("Fork this project on "),o("a",{attrs:{href:"https://github.com/Dan503/Atomic-Categorizer"}},[e._v("GitHub")])]),o("p",[e._v("This tool is intended to be used as a guide. The scoring system may not be perfect.")])])],1)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",{staticClass:"o-app__title"},[e._v("Atomic Categorizer"),o("sup",[e._v(" [Beta]")])])}],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"o-quiz"},[o("a_restrictor",{staticClass:"o-quiz__restrictor"},[o("ol",{staticClass:"o-quiz__list"},e._l(e.questions,function(t,n){return o("li",{staticClass:"o-quiz__item"},[o("m_question",{key:t.q,attrs:{index:n,question:t},on:{update:e.updateScores}})],1)}),0)])],1)},i=[],c=[{q:"Will the component only ever be used once per page?",a:{yes:{o:4,m:1,a:0},no:{o:0,m:2,a:3}}},{q:"Do you expect to use the component in multiple different contexts?",a:{yes:{o:0,m:2,a:3},no:{o:3,m:2,a:0}}},{q:"What element is the outer wrapper for the component?",a:{section:{o:3,m:2,a:0},article:{o:2,m:3,a:0},aside:{o:2,m:2,a:1},nav:{o:4,m:1,a:0},li:{o:0,m:4,a:1},a:{o:0,m:2,a:3},button:{o:0,m:1,a:4},"div wrapped around a single dt and dd element":{o:0,m:1,a:4},other:{o:0,m:0,a:0}}},{q:"Does the component contain a list of repeating components?",a:{yes:{o:4,m:1,a:0},no:{o:1,m:2,a:2}}},{q:"Is the component an item in a list of components?",a:{yes:{o:0,m:4,a:1},no:{o:2,m:1,a:2}}},{q:"Is the component large and complex?",a:{yes:{o:4,m:1,a:0},no:{o:0,m:2,a:3}}},{q:"Does the component consist of only a single element?",a:{yes:{o:0,m:0,a:5},no:{o:2,m:2,a:1}}},{q:"Are there any atom components embedded into the component?",a:{yes:{o:2,m:3,a:0},no:{o:4,m:1,a:0},"not sure":{o:0,m:0,a:0}}},{q:"Are there any molecule components embedded into the component?",a:{yes:{o:4,m:1,a:0},no:{o:0,m:2,a:3},"not sure":{o:0,m:0,a:0}}},{q:"Is or will the component ever be embedded inside a molecule component?",a:{yes:{o:0,m:1,a:4},no:{o:3,m:2,a:0},"not sure":{o:0,m:0,a:0}}},{q:"Is or will the component ever be embedded inside an organism component?",a:{yes:{o:0,m:3,a:2},no:{o:3,m:1,a:1},"not sure":{o:0,m:0,a:0}}}],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{staticClass:"m-question"},[o("fieldset",{staticClass:"m-question__fieldset"},[o("legend",{staticClass:"m-question__legend"},[e._v(e._s(e.question.q))]),o("ul",{staticClass:"m-question__answers"},e._l(e.question.a,function(t,n){return o("li",{staticClass:"m-question__answer"},[o("a_radio",{attrs:{describedby:e.descID,label:n,name:e.question.q,points:t,index:e.index},on:{update:e.updateScores}})],1)}),0),o("div",{attrs:{id:e.descID}},[e.scores?o("m_scores",{staticClass:"m-question__scores",attrs:{scores:e.scores}}):e._e()],1)])])},u=[],d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"a-radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenValue,expression:"chosenValue"}],staticClass:"a-radio__input -visuallyHidden",attrs:{type:"radio",name:e.name,"aria-describedby":e.describedby},domProps:{value:e.label,checked:e._q(e.chosenValue,e.label)},on:{change:[function(t){e.chosenValue=e.label},e.update]}}),o("span",{staticClass:"a-radio__label"},[e._v(e._s(e.label))])])},m=[],p={data(){return{chosenValue:""}},props:["name","label","points","index","describedby"],methods:{update(){this.$emit("update",this.selectionData())},selectionData(){return{points:this.points,qIndex:this.index,question:this.name,selection:this.chosenValue}}}},f=p,_=(o("ecfe"),o("2877")),h=Object(_["a"])(f,d,m,!1,null,null,null),v=h.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"a-score",class:{"-selected":e.selected}},[o("dt",{staticClass:"a-score__name",attrs:{"aria-current":e.selected}},[e._v(e._s(e.name))]),o("dd",{staticClass:"a-score__value"},[e._v(e._s(e.value))])])},g=[],y={props:["name","value","selected"]},q=y,C=(o("ec07"),Object(_["a"])(q,b,g,!1,null,null,null)),w=C.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("dl",{staticClass:"m-scores"},[o("a_score",{staticClass:"m-scores__score",attrs:{name:"Atom",value:e.scores.a,selected:e.selected.a}}),o("a_score",{staticClass:"m-scores__score",attrs:{name:"Molecule",value:e.scores.m,selected:e.selected.m}}),o("a_score",{staticClass:"m-scores__score",attrs:{name:"Organism",value:e.scores.o,selected:e.selected.o}})],1)},O=[],j={components:{a_score:w},props:{scores:{type:Object,default:()=>({a:0,m:0,o:0})},highlight:{type:Boolean,default:!1}},computed:{selected(){const e={a:!1,m:!1,o:!1};if(!this.highlight)return e;const t=Object.keys(this.scores),o=Object.values(this.scores),n=Math.max(...o),s=o.filter(e=>e===n),a=o.indexOf(n),r=t[a];let i={...e};return 1===s.length&&(i[r]=!0),i}}},k=j,S=(o("388b"),Object(_["a"])(k,x,O,!1,null,null,null)),$=S.exports,z={data(){return{scores:!1}},components:{a_radio:v,a_score:w,m_scores:$},props:["question","index"],computed:{descID(){return this.question.q.replace(/\W/g,"")}},methods:{updateScores(e){function t(e){let t={...e};return Object.keys(t).forEach(e=>t[e]=`+${t[e]}`),t}this.$emit("update",e),this.scores=t(e.points)}}},A=z,E=(o("f351"),Object(_["a"])(A,l,u,!1,null,null,null)),D=E.exports,I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"a-restrictor"},[e._t("default")],2)},P=[],B=(o("888f"),{}),M=Object(_["a"])(B,I,P,!1,null,null,null),T=M.exports,V={data:()=>({questions:c}),components:{m_question:D,a_restrictor:T},props:["scores"],methods:{updateScores(e){this.$emit("update",e)}}},N=V,F=(o("30b9"),Object(_["a"])(N,r,i,!1,null,null,null)),W=F.exports,H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"a-infoBlock"},[o("a_restrictor",{staticClass:"a-infoBlock__restrictor"},[e._t("default")],2)],1)},J=[],G={components:{a_restrictor:T}},K=G,L=(o("8207"),Object(_["a"])(K,H,J,!1,null,null,null)),Q=L.exports,R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{staticClass:"o-recommendation"},[o("a_restrictor",{staticClass:"o-recommendation__restrictor"},[o("div",{staticClass:"o-recommendation__inner"},[o("h2",{staticClass:"o-recommendation__title"},[e._v("Current recommendation:")]),o("m_scores",{staticClass:"o-recommendation__list",attrs:{scores:e.scores,highlight:!0}})],1)])],1)},U=[],X={components:{a_score:w,a_restrictor:T,m_scores:$},props:["scores"]},Y=X,Z=(o("d66b"),Object(_["a"])(Y,R,U,!1,null,null,null)),ee=Z.exports,te={name:"app",data(){return{scores:{a:[],m:[],o:[]},finalScores:{a:0,m:0,o:0}}},components:{o_quiz:W,o_recommendation:ee,a_infoBlock:Q},methods:{updateScores(e){const t=oe(this.scores,e),o=ne(t);this.finalScores=o}}};function oe(e,t){for(const o in e)e.hasOwnProperty(o)&&(e[o][t.qIndex]=t.points[o]);return e}function ne(e){let t={};for(const o in e)if(e.hasOwnProperty(o)){const n=e[o],s=n.reduce((e,t)=>t+e,0);t[o]=s}return t}var se=te,ae=(o("0786"),o("e7cd"),Object(_["a"])(se,s,a,!1,null,null,null)),re=ae.exports,ie=o("9483");Object(ie["a"])("/Atomic-Categorizer/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(re)}}).$mount("#app")},5806:function(e,t,o){},"5b51":function(e,t,o){},"6edc":function(e,t,o){},"81a9":function(e,t,o){},8207:function(e,t,o){"use strict";var n=o("2682"),s=o.n(n);s.a},"888f":function(e,t,o){"use strict";var n=o("af87"),s=o.n(n);s.a},af87:function(e,t,o){},d66b:function(e,t,o){"use strict";var n=o("0be3"),s=o.n(n);s.a},e7cd:function(e,t,o){"use strict";var n=o("0b4a"),s=o.n(n);s.a},ec07:function(e,t,o){"use strict";var n=o("81a9"),s=o.n(n);s.a},ecfe:function(e,t,o){"use strict";var n=o("5806"),s=o.n(n);s.a},f351:function(e,t,o){"use strict";var n=o("1a5e"),s=o.n(n);s.a}});
//# sourceMappingURL=app-legacy.a956e14a.js.map