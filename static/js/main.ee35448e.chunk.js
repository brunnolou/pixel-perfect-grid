(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),l=n.n(i);n(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(3),u=(n(22),n(12)),m=n(11);function o(e){var t=e.padding,n=void 0===t?"":t,a=e.margin,i=e.width,l=e.style,c=Object(m.a)(e,["padding","margin","width","style"]);return r.a.createElement("div",Object.assign({style:Object(u.a)({width:i,padding:n,marginLeft:a,marginRight:a},l)},c))}var d=n(1),g=n(2);function s(){var e=Object(d.a)(["\n  opacity: ",";\n\tbackground-color: ",";\n\t/* background-image: linear-gradient(to right, rgba(0,0,0,.1) 0%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 100%); */\n\tbox-shadow: 1px 0px 0px rgba(255,255,255,.8) inset;\n"]);return s=function(){return e},e}var h=g.a.div(s(),function(e){return e.number%e.baseUnit!==0?.5:1},function(e){return e.bg});h.defaultProps={baseUnit:1};var E=h;function p(){var e=Object(d.a)(["\n  padding: 12px 0;\n"]);return p=function(){return e},e}var b=g.a.p(p()),f=function(e){var t,n=e.width,a=e.division,i=e.margin,l=e.baseUnit,c=0,u=Array.isArray(a);return c=u?n*a[0]/a[1]-2*i:n/a-2*i,r.a.createElement(E,{number:c,baseUnit:l,bg:"#4DD4E0"},r.a.createElement(b,null,u?a[0]+"/"+a[1]:"1 /"+a,r.a.createElement("br",null),(t=c,Math.round(100*t)/100),"px",r.a.createElement("br",null)))};function v(){var e=Object(d.a)(["\n  position: relative;\n  width: ","px;\n  height: ","px;\n  margin: 0 auto;\n  background-size: ","px ","px;\n  background-image: linear-gradient(\n    to right,\n    "," 1px,\n    transparent 1px\n  );\n  box-shadow: 1px 0 0 ",";\n"]);return v=function(){return e},e}var w=g.a.div(v(),function(e){return e.width},function(e){return e.height},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.color});w.defaultProps={color:"rgba(0, 0, 0, 0.05)"};var x=w;function j(){var e=Object(d.a)(["\n  width: ","px;\n  height: ","px;\n  max-height: ","px;\n  background-color: ",";\n  margin-left: ","px;\n  margin-bottom: ","px;\n  white-space: nowrap;\n"]);return j=function(){return e},e}var O=g.a.div(j(),function(e){return e.size},function(e){return e.size},function(e){return 8*e.unit},function(e){return e.color},function(e){return e.unit},function(e){return 2*e.unit});O.defaultProps={color:"#4DD4E0"};var y=O;function U(){var e=Object(d.a)(["\n\tborder: 1px solid #eee;\n\tpadding: 3px 6px;\n\tborder-radius: 3px;\n\tfont-size: 12px;\n\tfont-family: monospace;\n"]);return U=function(){return e},e}var k=g.a.div(U()),z=function(e){return 100*e+"%"},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Array(e).fill().map(function(e,a){return Math.round(a*t*Math.pow(n,a))})},C=function(e){return e%2===0&&e%3===0&&e%4===0};function N(){var e=Object(d.a)(["\n  background: rgba(100, 100, 100, 0.1);\n"]);return N=function(){return e},e}function W(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n"]);return W=function(){return e},e}var A=g.a.div(W()),B=g.a.div(N());function P(e){var t=e.margin,n=e.width,a=e.children;return r.a.createElement(B,{style:{position:"relative",margin:"12px auto",width:"100%",maxWidth:n}},r.a.createElement(A,{style:{marginLeft:-1*t,marginRight:-1*t}},a||r.a.createElement("small",{style:{opacity:C(n)?1:Number.isInteger(n)?.5:.2}},n)))}function S(){var e=Object(d.a)(["\n  opacity: ",";\n  background-color: ",";\n"]);return S=function(){return e},e}var L=g.a.div(S(),function(e){var t=e.number;return C(t)?1:.5},function(e){return e.bg});L.defaultProps={baseUnit:1};var M=L;var I=function(){var e=Object(a.useState)(6),t=Object(c.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(39),u=Object(c.a)(l,2),m=u[0],d=u[1],g=Object(a.useState)(3),s=Object(c.a)(g,2),h=s[0],p=s[1],b=D(256,n,1),v=D(256,1,1.09),w=b.map(function(e,t){return n*b[t+m]}).filter(C).slice(0,1).reverse(),j=b[h],O=2*j;return r.a.createElement("div",{className:"App"},r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Base unit: "),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(e){return i(Number(e.target.value))},type:"number",min:"0",max:"50",step:"2",value:n}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Container: "),r.a.createElement("td",null,r.a.createElement(M,{number:m*n*n},r.a.createElement("input",{onChange:function(e){return d(Number(e.target.value))},type:"number",min:"0",max:256,value:m})))),r.a.createElement("tr",null,r.a.createElement("th",null,"Gutter"),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(e){return p(Number(e.target.value))},type:"number",min:"0",max:256,value:h})),r.a.createElement("td",null,r.a.createElement(k,null,O,"px"))))),w.map(function(e){return r.a.createElement(x,{size:n,width:e+2*O,height:"auto"},r.a.createElement(P,{margin:j,width:e+2*O},r.a.createElement("div",null,r.a.createElement("p",null,e+2*O,r.a.createElement("small",null,"px")),r.a.createElement("small",null,"With 2 gutters: ",2*O,"px"))),r.a.createElement(P,{margin:j,width:e+O},r.a.createElement("center",null,r.a.createElement("h1",null,e+O),!!O&&r.a.createElement("small",null,"With half gutter on each side: 2 \xd7 ",O/2,"px"))),r.a.createElement("h1",null,"Containers size"),r.a.createElement("div",{style:{marginBottom:12}},r.a.createElement(o,{margin:0,width:e+2*O},r.a.createElement(E,{number:e+2*O,bg:"#4DD4E0"},e+2*O))),r.a.createElement(o,{margin:j,width:e+O},r.a.createElement(E,{number:e+O,bg:"#4DD4E0"},e+O)),[[1,1],[10,12],[2,3],[1,2],[1,3]].map(function(t){var n=Object(c.a)(t,2),a=n[0],i=n[1],l=a*((e+O)/i-O)+(a-1)*O;return r.a.createElement(P,{margin:j,width:e},r.a.createElement(o,{margin:j,width:l},r.a.createElement(E,{number:l,bg:"#4DD4E0"},l)))}),r.a.createElement("h1",null,"Column widths"),e>1152&&r.a.createElement(P,{margin:j,width:e},[12,12,12,12,12,12,12,12,12,12,12,12].map(function(t){return r.a.createElement(o,{margin:j,width:z(1/t)},r.a.createElement(f,{width:e+O,division:t,margin:j,baseUnit:n}))})),e>540&&r.a.createElement(P,{margin:j,width:e},[6,6,6,6,6,6].map(function(t){return r.a.createElement(o,{margin:j,width:z(1/t)},r.a.createElement(f,{width:e+O,division:t,margin:j,baseUnit:n}))})),e>360&&r.a.createElement(P,{margin:j,width:e},[4,4,4,4].map(function(t){return r.a.createElement(o,{margin:j,width:z(1/t)},r.a.createElement(f,{width:e+O,division:t,margin:j,baseUnit:n}))})),e>324&&r.a.createElement(P,{margin:j,width:e},[3,3,3].map(function(t){return r.a.createElement(o,{margin:j,width:z(1/t)},r.a.createElement(f,{width:e+O,division:t,margin:j,baseUnit:n}))})),r.a.createElement(P,{margin:j,width:e},[2,2].map(function(t){return r.a.createElement(o,{margin:j,width:z(1/t)},r.a.createElement(f,{width:e+O,division:t,margin:j,baseUnit:n}))})),r.a.createElement("section",null,r.a.createElement("h1",null,"Layout"),r.a.createElement(P,{margin:j,width:e},[[1,6],[5,6]].map(function(t){var a=Object(c.a)(t,2),i=a[0],l=a[1];return r.a.createElement(o,{margin:0,width:z(i/l)},r.a.createElement(f,{width:e+O,division:[i,l],margin:0,baseUnit:n}))})),r.a.createElement(P,{margin:j,width:e},[[1,4],[3,4]].map(function(t){var a=Object(c.a)(t,2),i=a[0],l=a[1];return r.a.createElement(o,{margin:0,width:z(i/l)},r.a.createElement(f,{width:e+O,division:[i,l],margin:0,baseUnit:n}))})),r.a.createElement(P,{margin:j,width:e},[[1,3],[2,3]].map(function(t){var a=Object(c.a)(t,2),i=a[0],l=a[1];return r.a.createElement(o,{margin:0,width:z(i/l)},r.a.createElement(f,{width:e+O,division:[i,l],margin:0,baseUnit:n}))})),r.a.createElement(P,{margin:j,width:e},[[1,2],[1,2]].map(function(t){var a=Object(c.a)(t,2),i=a[0],l=a[1];return r.a.createElement(o,{margin:0,width:z(i/l)},r.a.createElement(f,{width:e+O,division:[i,l],margin:0,baseUnit:n}))})),r.a.createElement(P,{margin:j,width:e},[[1,3],[1,3],[1,3]].map(function(t){var a=Object(c.a)(t,2),i=a[0],l=a[1];return r.a.createElement(o,{margin:0,width:z(i/l)},r.a.createElement(f,{width:e+O,division:[i,l],margin:0,baseUnit:n}))})),r.a.createElement(P,{margin:j,width:e},[[1,4],[2,4],[1,4]].map(function(t){var a=Object(c.a)(t,2),i=a[0],l=a[1];return r.a.createElement(o,{margin:0,width:z(i/l)},r.a.createElement(f,{width:e+O,division:[i,l],margin:0,baseUnit:n}))})),r.a.createElement(P,{margin:j,width:e},[[1,6],[4,6],[1,6]].map(function(t){var a=Object(c.a)(t,2),i=a[0],l=a[1];return r.a.createElement(o,{margin:0,width:z(i/l)},r.a.createElement(f,{width:e+O,division:[i,l],margin:0,baseUnit:n}))}))),r.a.createElement("h1",null,"Spacing"),r.a.createElement(y,{size:n/2,unit:n,title:e},1," - ",r.a.createElement("small",null,n/2,"px")),b.slice(0,8).map(function(e,t){return!!t&&r.a.createElement(y,{size:e,unit:n,title:t},t+1," - ",r.a.createElement("small",null,e,"px"))}),v.slice(5).map(function(e,t){return!!t&&!!b[e]&&r.a.createElement(y,{size:b[e],unit:n,title:t},t+8," - ",r.a.createElement("small",null,b[e],"px"))}))}))};l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.ee35448e.chunk.js.map