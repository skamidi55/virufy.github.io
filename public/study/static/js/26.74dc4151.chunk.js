(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[26],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return k}));var r=n(214),a=n(204),o=n(9),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var l=function(e){return void 0===e};function c(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var s=Object(o.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:u(r,n),currentStoreData:a})};function f(e,t,n){var o=e,i=t.syncStores;if(!i)return o;try{if(Array.isArray(i))i.forEach((function(e){o=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return d({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:o});Object.entries(i).forEach((function(e){var t=Object(a.a)(e,2),i=t[0],l=t[1],c=u(n,i);l.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),c[e])))}))}))}}catch(l){return o}return o}var v,m,p,b="undefined"!==typeof window,h=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},g=[];function O(e){h=e}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(h,n);p=r.getName,v=r.get,m=r.set,g=t.middleWares,c(!1,h,p,v),m(f(v()||e,t,h))}function E(e){var t=Object(o.useState)(v()),n=Object(a.a)(t,2),r=n[0],u=n[1],i=Object(o.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(o.createElement)(s.Provider,Object.assign({value:i},e))}var y=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(v(),e)),m(l(a)?v():a),h.setItem(p(),JSON.stringify(v())),l(t)||t&&!1!==t.shouldReRenderApp){var o=v();Array.isArray(g)&&g.length&&(o=g.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function k(e,t){var n=Object(o.useContext)(s),u=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(a.a)(n,2),l=u[0],c=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},l,Object(o.useCallback)(y({options:t,callback:c,updateStore:i}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(o.useCallback)(e?y({options:t,callback:e,updateStore:i}):function(){},[]),state:u}}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(9),a=n.n(r),o=n(209),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var i=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,l=e.render,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),s=Object(o.f)(),d=Object(o.c)(n||s.errors,r);if(!d)return null;var f=d.message,v=d.types,m=u(u({},c),{children:f||i});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):l?l({message:f||i,messages:v}):a.a.createElement(a.a.Fragment,u({},m))}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(226),a=n(204),o=n(9),u=n.n(o),i=n(206),l=n(205);function c(){var e=Object(i.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return c=function(){return e},e}function s(){var e=Object(i.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(i.a)(["\n  width: 22px;\n  height: 22px; \n  border-radius: ",";\n  border: 3px solid ",";\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 14px;\n  margin-right: 29px;\n  \n  @media screen and (","){\n    margin-right: 31px;\n  }\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: ","; \n    top: ",";\n    height: ",";\n    width: ",";\n    border-radius: ",";\n    background-color: ","; \n    display: ",";\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0005 2L6.00018 10L2 6.00018' stroke='%233578DE' stroke-width='2.18192' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(i.a)(["\n  font-weight: bold;\n"]);return f=function(){return e},e}function v(){var e=Object(i.a)(["\n  display: block;\n  width: 250px;\n  @media screen and (","){\n    width: auto;\n    text-align: left;\n    margin: auto;\n  }\n"]);return v=function(){return e},e}function m(){var e=Object(i.a)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  padding: 0 20px;\n  margin: 3px auto;\n  border: none;\n  border-radius: 10px;\n  background-color: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: left;\n  }\n"]);return m=function(){return e},e}var p=l.default.button(m(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.purple_10:e.theme.colors.mercury}),(function(e){return e.theme.breakpoints.tablet})),b=l.default.span(v(),(function(e){return e.theme.breakpoints.tablet})),h=Object(l.default)(p)(f()),g=l.default.div(d(),(function(e){return e.checkbox?"10%":"50%"}),(function(e){return e.isSelected?e.theme.colors.purple:"#C1C1C1"}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"0%":"50%"}),(function(e){return e.checkbox?e.theme.colors.purple_10:e.theme.colors.purple}),(function(e){return e.isSelected?"block":"none"})),O=l.default.div(s(),(function(e){return e.theme.breakpoints.tablet})),x=l.default.input(c(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),E={selected:[],other:""},y=function(e){var t=e.value,n=void 0===t?E:t,i=e.items,l=e.excludableValues,c=e.singleSelection,s=e.isCheckbox,d=e.onChange,f=e.allowAddOther,v=e.addOtherLabel,m=e.enableOther,y=e.otherPlaceholder,k=Object(o.useState)(!1),S=Object(a.a)(k,2),j=S[0],w=S[1];Object(o.useEffect)((function(){w(!!m||!!(null===n||void 0===n?void 0:n.other))}),[n,m]);var T=function(e){var t,r=n.selected;t=c||l&&r.some((function(e){return l.includes(e)}))?[]:r,d&&d({selected:t,other:e}),e||w(!1)};return u.a.createElement(u.a.Fragment,null,i.map((function(e,t){var a,o=null===n||void 0===n||null===(a=n.selected)||void 0===a?void 0:a.includes(e.value);return u.a.createElement(p,{key:e.value,lastItem:i.length===t+1&&!f&&!m,onClick:function(){return function(e){var t,a,o=n.selected,u=n.other,i=o.indexOf(e.value);i>=0?(t=[].concat(Object(r.a)(o.slice(0,i)),Object(r.a)(o.slice(i+1))),a=u):c||(null===l||void 0===l?void 0:l.includes(e.value))||l&&o.some((function(e){return l.includes(e)}))?(t=[e.value],a=void 0):(t=[].concat(Object(r.a)(o),[e.value]),a=u),d&&d({selected:t,other:a})}(e)},isSelected:o},u.a.createElement(b,null,e.label),u.a.createElement(g,{isSelected:o,checkbox:s}))})),f&&!j&&u.a.createElement(h,{onClick:function(){w(!0)},lastItem:!0},v),j&&u.a.createElement(O,null,u.a.createElement(x,{placeholder:y,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return T(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&u.a.createElement(g,null)))};y.defaultProps={value:E,excludableValues:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var k=u.a.memo(y)},223:function(e,t,n){"use strict";var r=n(9),a=n(207),o=n(208);t.a=function(e,t){var n=Object(a.d)(Object(o.b)(e)).state,u=Object(r.useMemo)((function(){var r={total:null===t||void 0===t?void 0:t.total,current:null===t||void 0===t?void 0:t.current};if(n[e]){var a,o,u,i,l,c,s=null===(a=n["submit-steps"])||void 0===a||null===(o=a.typeCovidFlu)||void 0===o?void 0:o.selected.includes("antigenTaken"),d=null===(u=n["submit-steps"])||void 0===u||null===(i=u.typeCovidFlu)||void 0===i?void 0:i.selected.includes("PCRTaken"),f=null===(l=n["submit-steps"])||void 0===l||null===(c=l.typeCovidFlu)||void 0===c?void 0:c.selected.includes("fluTaken");switch(!0){case s&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-2-2,r.current=(null===t||void 0===t?void 0:t.current)-2-2;break;case s&&d&&!f||s&&!d&&f:r.total=(null===t||void 0===t?void 0:t.total)-2,r.current=(null===t||void 0===t?void 0:t.current)-2;break;case!s&&!d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2-2;break;case!s&&d&&f:r.total=(null===t||void 0===t?void 0:t.total)-1,r.current=(null===t||void 0===t?void 0:t.current)-1;break;case!s&&!d&&f||!s&&d&&!f:r.total=(null===t||void 0===t?void 0:t.total)-1-2,r.current=(null===t||void 0===t?void 0:t.current)-1-2}}return r}),[n,t,e]),i=Object(r.useMemo)((function(){if(n[e]){var t,r,a,o=null===(t=n["submit-steps"].typeCovidFlu)||void 0===t?void 0:t.selected.includes("PCRTaken"),i=null===(r=n["submit-steps"].typeCovidFlu)||void 0===r?void 0:r.selected.includes("antigenTaken"),l=null===(a=n["submit-steps"].typeCovidFlu)||void 0===a?void 0:a.selected.includes("fluTaken");return o&&!i&&!l||o&&i&&!l?u.current+2:u.current}return 0}),[n,e,u]);return{customSteps:u,customCurrentStepPCR:i}}},276:function(e,t,n){e.exports=n.p+"static/media/calendar.ffdaf43c.svg"},277:function(e,t,n){e.exports=n.p+"static/media/chevron.66e5f21f.svg"},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(9),a=n.n(r),o=n(23),u=n.n(o),i=n(151),l=n(276),c=n.n(l),s=n(277),d=n.n(s),f=n(206),v=n(205);function m(){var e=Object(f.a)(["\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  line-height: 142.69%;\n  color: ",";\n"]);return m=function(){return e},e}function p(){var e=Object(f.a)(["\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  line-height: 142.69%;\n  color: ",";\n"]);return p=function(){return e},e}function b(){var e=Object(f.a)(["\n  flex: 1;\n  text-align: left;\n  padding-left: 14px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return b=function(){return e},e}function h(){var e=Object(f.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n  padding: 0 19.69px 0 14px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return h=function(){return e},e}function g(){var e=Object(f.a)(["\n  .react-datepicker-wrapper {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return g=function(){return e},e}var O=v.default.div(g()),x=v.default.button(h(),(function(e){return e.theme.colors.lightGray})),E=v.default.div(b()),y=v.default.div(p(),(function(e){return e.theme.colors.darkGray})),k=v.default.div(m(),(function(e){return e.theme.colors.darkBlack})),S=a.a.forwardRef((function(e,t){var n=e.label,r=e.value,o=e.onClick;return a.a.createElement(x,{ref:t,onClick:o},a.a.createElement("img",{alt:"calendar",src:c.a}),a.a.createElement(E,null,a.a.createElement(y,null,n),a.a.createElement(k,null,r)),a.a.createElement("img",{alt:"calendar",src:d.a}))}));S.defaultProps={value:void 0,onClick:void 0};var j=a.a.memo((function(e){var t=e.label,n=e.value,r=e.locale,o=e.onChange,l=a.a.useMemo((function(){return Object(i.default)(new Date)}),[]);return a.a.createElement(O,null,a.a.createElement(u.a,{selected:n,customInput:a.a.createElement(S,{label:t}),onChange:o,dateFormat:"EEE, MMM d, Y",locale:r,maxDate:l}))}))},355:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),u=n(204),i=n(9),l=n.n(i),c=n(242),s=n(219),d=n.n(s),f=n(863),v=n(209),m=n(207),p=n(221),b=n(213),h=n(222),g=n(220),O=n(211),x=n(208),E=n(210),y=n(223),k=n(218),S=n(280),j=n(215),w=n(227),T=n(224),C=h.object({fluTestDate:h.date().required(),fluTestResult:h.string().required()}).defined();t.default=l.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,s=e.metadata,h=e.otherBackSteps,_=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,A=Object(E.a)(),I=A.setDoGoBack,N=A.setTitle,M=A.setSubtitle,P=A.setType,B=Object(c.g)(),D=Object(f.a)(),R=D.t,F=D.i18n,q=Object(m.d)(Object(x.b)(r)),H=q.state,G=q.action,V=Object(g.e)(),L=Object(g.d)(),z=Object(y.a)(r,s).customSteps,J=l.a.useState(!0),Q=Object(u.a)(J,2),U=Q[0],W=Q[1],K=Object(v.e)({mode:"onChange",defaultValues:null===H||void 0===H?void 0:H[r],context:{country:L},resolver:Object(p.a)(C)}),Y=K.control,X=K.handleSubmit,Z=K.formState,$=Z.errors,ee=Z.isValid,te=l.a.useCallback((function(){var e,n;W(!1);var r=null===(e=H["submit-steps"].typeCovidFlu)||void 0===e?void 0:e.selected.includes("PCRTaken"),a=null===(n=H["submit-steps"].typeCovidFlu)||void 0===n?void 0:n.selected.includes("antigenTaken");r&&h?B.push(h.PCRTakenStep):a&&h?B.push(h.antigenTakenStep):t?B.push(t):B.goBack()}),[H,h,t,B]);Object(i.useEffect)((function(){Object(O.a)(),V?(N(""),P("tertiary")):(N(R("questionary:fluTest.title")),P("primary")),M(""),I((function(){return te}))}),[te,I,N,P,M,V,R]);var ne=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(G(t),n&&(W(!1),B.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=l.a.useMemo((function(){return[{value:"negative",label:R("questionary:fluTestResult.options.negative")},{value:"positiveA",label:R("questionary:fluTestResult.options.positiveA")},{value:"positiveB",label:R("questionary:fluTestResult.options.positiveB")}]}),[R]);return l.a.createElement(T.MainContainer,null,l.a.createElement(w.a,{currentStep:z.current,totalSteps:z.total,progressBar:!0}),l.a.createElement(T.QuestionText,{extraSpace:!0,first:!0},R("questionary:whenFluTest"),l.a.createElement(T.QuestionAllApply,null,R("questionary:whenFluTestCaption"))),l.a.createElement(v.a,{control:Y,name:"fluTestDate",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(S.a,{label:n?"":"Date",value:n?new Date(n):null,locale:F.language,onChange:t})}}),l.a.createElement(b.a,{errors:$,name:"fluTestDate",render:function(e){var t=e.message;return l.a.createElement("p",null,t)}}),l.a.createElement(T.QuestionText,{extraSpace:!0},R("questionary:fluTestResult.question")),l.a.createElement(v.a,{control:Y,name:"fluTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return l.a.createElement(k.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:re})}}),l.a.createElement(b.a,{errors:$,name:"fluTestResult",render:function(e){var t=e.message;return l.a.createElement("p",null,t)}}),U&&l.a.createElement(_,null,l.a.createElement(j.a,{leftLabel:R("questionary:nextButton"),leftHandler:X(ne),leftDisabled:!ee,invert:!0})))}))}}]);
//# sourceMappingURL=26.74dc4151.chunk.js.map