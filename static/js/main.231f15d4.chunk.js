(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var c,i=e(1),r=e.n(i),s=e(6),o=e.n(s),a=e(3),l=e(2),u=e.n(l),d=(e(4),e(0)),j=r.a.createContext({dark:!1,switchTheme:function(){}}),b=function(){var t=Object(i.useContext)(j);if(void 0===t)throw new Error("useTheme must be used within a ThemeCtx");return t},h=function(t){var n=t.children,e=Object(i.useState)(!1),c=Object(a.a)(e,2),r=c[0],s=c[1];return Object(d.jsx)(j.Provider,{value:{dark:r,switchTheme:function(){s((function(t){return!t}))}},children:n})},O=function(t){var n=t.display,e=b().dark,c=u()("display",e?"display_dark":null);return Object(d.jsx)("div",{className:c,children:Object(d.jsx)("span",{children:n})})},f=function(t){var n=t.onNumClick,e=t.onPointButtonClick,c=t.onOperatorButtonClick,r=t.onChangeSignButtonClick,s=t.onResultButtonClick,o=t.onClearButtonClick,a=t.switchHistory,l=b().dark,j=u()("button",l?"num-button_dark":"num-button_light"),h=u()("button",l?"etc-button_dark":"etc-button_light"),O=u()("button",l?"operator-button_dark":"operator-button_light"),f=function(t){var e=t.keyCode,i=t.shiftKey;console.log(e),e>=48&&e<=57&&!i?n(e-48):e>=96&&e<=105?n(e-96):107===e||187===e&&i?c("+"):109===e||189===e?c("-"):106===e||56===e&&i?c("\xd7"):111===e||191===e?c("\xf7"):13===e||187===e&&!i?s():46===e||27===e?o():78===e&&r()};return Object(i.useEffect)((function(){return document.body.addEventListener("keydown",f),function(){return document.body.removeEventListener("keydown",f)}})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"buttonRow",children:[Object(d.jsx)("div",{className:h,onClick:function(){return o()},children:"AC"}),Object(d.jsx)("div",{className:h,onClick:function(){return r()},children:"\xb1"}),Object(d.jsx)("div",{className:h,children:"%"}),Object(d.jsx)("div",{className:O,onClick:function(){return c("\xf7")},children:"\xf7"})]}),Object(d.jsxs)("div",{className:"buttonRow",children:[Object(d.jsx)("div",{className:j,onClick:function(){return n(7)},children:"7"}),Object(d.jsx)("div",{className:j,onClick:function(){return n(8)},children:"8"}),Object(d.jsx)("div",{className:j,onClick:function(){return n(9)},children:"9"}),Object(d.jsx)("div",{className:O,onClick:function(){return c("\xd7")},children:"x"})]}),Object(d.jsxs)("div",{className:"buttonRow",children:[Object(d.jsx)("div",{className:j,onClick:function(){return n(4)},children:"4"}),Object(d.jsx)("div",{className:j,onClick:function(){return n(5)},children:"5"}),Object(d.jsx)("div",{className:j,onClick:function(){return n(6)},children:"6"}),Object(d.jsx)("div",{className:O,onClick:function(){return c("-")},children:"-"})]}),Object(d.jsxs)("div",{className:"buttonRow",children:[Object(d.jsx)("div",{className:j,onClick:function(){return n(1)},children:"1"}),Object(d.jsx)("div",{className:j,onClick:function(){return n(2)},children:"2"}),Object(d.jsx)("div",{className:j,onClick:function(){return n(3)},children:"3"}),Object(d.jsx)("div",{className:O,onClick:function(){return c("+")},children:"+"})]}),Object(d.jsxs)("div",{className:"buttonRow",children:[Object(d.jsx)("div",{className:j,onClick:function(){return n(0)},children:"0"}),Object(d.jsx)("div",{className:j,onClick:function(){return a()},children:"\u2261"}),Object(d.jsx)("div",{className:j,onClick:function(){return e()},children:"."}),Object(d.jsx)("div",{className:O,onClick:function(){return s()},children:"="})]})]})},m=null===(c=window.localStorage.getItem("history"))||void 0===c?void 0:c.split(",");console.log(m);var v=function(t){var n=t.switchHistory,e=b().dark,c=u()("wrapper",e?"wrapper_dark":"wrapper_light"),i=u()("button",e?"num-button_dark":"num-button_light"),r=u()(e?"num-button_dark":"num-button_light");return Object(d.jsxs)("div",{className:c,children:[Object(d.jsx)("div",{className:i,onClick:function(){return n()},children:"\u2190"}),null===m||void 0===m?void 0:m.map((function(t){return Object(d.jsx)("p",{className:r,children:t},t)}))]})},k=[],x=function(){var t=b().dark,n=Object(i.useState)(0),e=Object(a.a)(n,2),c=e[0],r=e[1],s=Object(i.useState)(!0),o=Object(a.a)(s,2),l=o[0],j=o[1],h=Object(i.useState)(),m=Object(a.a)(h,2),x=m[0],C=m[1],N=Object(i.useState)("0"),p=Object(a.a)(N,2),w=p[0],g=p[1],y=Object(i.useState)(!1),S=Object(a.a)(y,2),_=S[0],B=S[1],T=function(){B((function(t){return!t}))},R=u()("wrapper",t?"wrapper_dark":"wrapper_light"),F=function(t,n){var e=c;switch(n){case"+":e+=t;break;case"-":e-=t;break;case"\xd7":e*=t;break;case"\xf7":if(0===t)return!1;e/=t}var i="".concat(c).concat(n).concat(l?"":w," = ").concat(e);return k.push(i),window.localStorage.setItem("history",k),r(e),g(e.toString().toString().slice(0,7)),!0};return Object(d.jsx)(d.Fragment,{children:_?Object(d.jsx)(v,{switchHistory:T}):Object(d.jsxs)("div",{className:R,children:[Object(d.jsx)(O,{display:w}),Object(d.jsx)(f,{onNumClick:function(t){var n=w;"0"===w&&0===t||w.length>7||(l&&(n="",j(!1)),"0"!==w?n+=t.toString():n=t.toString(),g(n))},onPointButtonClick:function(){var t=w;l&&(t="0"),-1===t.indexOf(".")&&(t+="."),g(t),j(!1)},onOperatorButtonClick:function(t){var n=Number(w);if("undefined"===typeof x||l)r(n);else if(!F(n,x))return;C(t),j(!0)},onChangeSignButtonClick:function(){var t=Number(w);t>0?g("-"+w):t<0&&g(w.slice(1))},onResultButtonClick:function(){var t=Number(w);if("undefined"===typeof x||l)g(t.toString());else{if(!F(t,x))return;C(void 0)}r(t),j(!0)},onClearButtonClick:function(){r(0),C(void 0),g("0"),j(!0)},switchHistory:T})]})})},C=function(){var t=b(),n=t.dark,e=t.switchTheme;return Object(d.jsxs)("div",{className:"switchBox",children:[Object(d.jsx)("span",{className:"switchText",children:"light"}),Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",checked:n,onChange:e}),Object(d.jsx)("span",{className:"slider round"})]}),Object(d.jsx)("span",{className:"switchText",children:"dark"})]})},N=function(){return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(C,{}),Object(d.jsx)(x,{})]})},p=(e(12),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,14)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;e(t),c(t),i(t),r(t),s(t)}))});o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{children:Object(d.jsx)(N,{})})}),document.getElementById("root")),p()},4:function(t,n,e){}},[[13,1,2]]]);
//# sourceMappingURL=main.231f15d4.chunk.js.map