(this.webpackJsonpjsbook=this.webpackJsonpjsbook||[]).push([[0],{104:function(e,n,t){e.exports={editorWrapper:"CodeEditor_editorWrapper__HoH_M",buttonFormat:"CodeEditor_buttonFormat__2vc0g"}},105:function(e,n,t){e.exports={previewWrapper:"Preview_previewWrapper__1OoTK",previewError:"Preview_previewError__3z8ts"}},108:function(e,n,t){e.exports={textEditor:"TextEditor_textEditor__12dCM"}},109:function(e,n,t){e.exports={cellListItem:"CellListItem_cellListItem__31PQd",actionBarWrapper:"CellListItem_actionBarWrapper__1iviQ"}},119:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=119},175:function(e,n,t){e.exports={actionBar:"ActionBar_actionBar__3cBB4"}},179:function(e,n,t){e.exports={progressBarCover:"ProgressBar_progressBarCover__MbkTj",fadeIn:"ProgressBar_fadeIn__1bzsJ"}},180:function(e,n,t){e.exports={wrapper:"CodeCell_wrapper__2d69G"}},186:function(e,n,t){e.exports={cellList:"CellList_cellList__G-UsY"}},336:function(e,n,t){},343:function(e,n,t){},54:function(e,n,t){e.exports={addCell:"AddCell_addCell__3OUa1",addButtons:"AddCell_addButtons__3e7Pp",forceVisible:"AddCell_forceVisible__37-CE",divider:"AddCell_divider__3QdBG"}},645:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"updateCell",(function(){return B})),t.d(r,"deleteCell",(function(){return D})),t.d(r,"moveCell",(function(){return I})),t.d(r,"insertCellAfter",(function(){return M})),t.d(r,"createBundle",(function(){return S}));var a,c=t(0),i=t(43),o=t.n(i),s=t(46),u=t(39),l=t(173);!function(e){e[e.MOVE_CELL=0]="MOVE_CELL",e[e.DELETE_CELL=1]="DELETE_CELL",e[e.INSERT_CELL_AFTER=2]="INSERT_CELL_AFTER",e[e.UPDATE_CELL=3]="UPDATE_CELL",e[e.BUNDLE_START=4]="BUNDLE_START",e[e.BUNDLE_COMPLETE=5]="BUNDLE_COMPLETE"}(a||(a={}));var d=t(68),p={loading:!1,error:null,order:[],data:{}},f=function(e){var n=e.cells;return n.order.map((function(e){return n.data[e]}))},j=Object(d.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.UPDATE_CELL:var t=n.payload,r=t.id,c=t.content;return e.data[r].content=c,e;case a.DELETE_CELL:return delete e.data[n.payload],e.order=e.order.filter((function(e){return e!==n.payload})),e;case a.MOVE_CELL:var i=n.payload.direction,o=e.order.findIndex((function(e){return e===n.payload.id})),s="up"===i?o-1:o+1;return s<0||s>e.order.length-1||(e.order[o]=e.order[s],e.order[s]=n.payload.id),e;case a.INSERT_CELL_AFTER:var u={content:"",type:n.payload.type,id:h()};e.data[u.id]=u;var l=e.order.findIndex((function(e){return e===n.payload.id}));return l<0?e.order.unshift(u.id):e.order.splice(l+1,0,u.id),e;default:return e}}),p),h=function(){return Math.random().toString(36).substr(2,5)},b=j,v={},m=Object(d.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.BUNDLE_START:return e[n.payload.cellId]={loading:!0,code:"",error:""},e;case a.BUNDLE_COMPLETE:return e[n.payload.cellId]={loading:!1,code:n.payload.bundle.code,error:n.payload.bundle.error},e;default:return e}}),v),x=Object(u.c)({cells:b,bundles:m}),O=Object(u.d)(x,{},Object(u.a)(l.a));O.dispatch({type:a.INSERT_CELL_AFTER,payload:{id:null,type:"code"}});var E=t(10),w=t.n(E),_=t(21),L=t(19),y=t(45),C=t(103),g=t(174),N=t.n(g).a.createInstance({name:"filecache"}),T=function(e){return{name:"fetch-plugin",setup:function(n){n.onLoad({filter:/(^index\.js)/},(function(){return{loader:"jsx",contents:e}})),n.onLoad({filter:/.*/},function(){var e=Object(_.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getItem(n.path);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.css$/},function(){var e=Object(_.a)(w.a.mark((function e(n){var t,r,a,c,i,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.path);case 2:return t=e.sent,r=new URL("./",t.url).pathname,e.next=6,t.text();case 6:return a=e.sent,c=a.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),i="\n          const style = document.createElement('style');\n          style.innerText = '".concat(c,"'\n          document.head.appendChild(style)\n        "),o={loader:"jsx",contents:i,resolveDir:r},e.next=12,N.setItem(n.path,o);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.*/},function(){var e=Object(_.a)(w.a.mark((function e(n){var t,r,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.path);case 2:return t=e.sent,r=new URL("./",t.url).pathname,e.next=6,t.text();case 6:return a=e.sent,c={loader:"jsx",contents:a,resolveDir:r},e.next=10,N.setItem(n.path,c);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}},k=function(){function e(){Object(L.a)(this,e)}return Object(y.a)(e,[{key:"initialize",value:function(){var e=Object(_.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.initialize({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.12.22/esbuild.wasm"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"build",value:function(){var e=Object(_.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com".concat(e.resolveDir,"/")).href}})),e.onResolve({filter:/.*/},function(){var e=Object(_.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.path.includes("./")&&!n.path.includes("../")){e.next=2;break}return e.abrupt("return",{namespace:"a",path:new URL(n.path,"https://unpkg.com".concat(n.resolveDir,"/")).href});case 2:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(n.path)});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},T(n)],define:{"process.env.NODE_ENV":'"production"',global:"window"},jsxFactory:"_React.createElement",jsxFragment:"_React.Fragment"});case 3:return t=e.sent,e.abrupt("return",{code:t.outputFiles[0].text,error:""});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{code:"",error:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){var n=Object(_.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.instance){n.next=5;break}return e.instance=new e,n.next=5,e.instance.initialize();case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.abrupt("return",e.instance);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()}]),e}();k.instance=void 0;var R=k.getInstance(),B=function(e,n){return{type:a.UPDATE_CELL,payload:{id:e,content:n}}},D=function(e){return{type:a.DELETE_CELL,payload:e}},I=function(e,n){return{type:a.MOVE_CELL,payload:{id:e,direction:n}}},M=function(e,n){return{type:a.INSERT_CELL_AFTER,payload:{id:e,type:n}}},S=function(e,n){return function(){var t=Object(_.a)(w.a.mark((function t(r){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:a.BUNDLE_START,payload:{cellId:e}}),t.next=3,R;case 3:return t.next=5,t.sent.build(n);case 5:c=t.sent,r({type:a.BUNDLE_COMPLETE,payload:{cellId:e,bundle:c}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var U=function(){var e=Object(s.b)();return Object(c.useMemo)((function(){return Object(u.b)(r,e)}),[e])},A=t(175),z=t.n(A),F=t(2),W=function(e){var n=e.id,t=U(),r=t.moveCell,a=t.deleteCell;return Object(F.jsxs)("div",{className:z.a.actionBar,children:[Object(F.jsx)("button",{className:"button is-primary is-small",onClick:function(){return r(n,"up")},children:Object(F.jsx)("span",{className:"icon",children:Object(F.jsx)("i",{className:"fas fa-arrow-up"})})}),Object(F.jsx)("button",{className:"button is-primary is-small",onClick:function(){return r(n,"down")},children:Object(F.jsx)("span",{className:"icon",children:Object(F.jsx)("i",{className:"fas fa-arrow-down"})})}),Object(F.jsxs)("button",{className:"button is-primary is-small",onClick:function(){return a(n)},children:[" ",Object(F.jsx)("span",{className:"icon",children:Object(F.jsx)("i",{className:"fas fa-times"})})]})]})},P=t(187),V=t(176),H=t.n(V),q=t(26),J=t.n(q),Q=t(177),$=t(67),G=t(44),K=t.n(G),Y=t(104),X=t.n(Y),Z=(t(336),function(e){return Object($.parse)(e,{sourceType:"module",plugins:["jsx"]})}),ee=function(e){var n=e.initialValue,t=e.onChange,r=c.useRef(null);return Object(F.jsxs)("div",{className:X.a.editorWrapper,children:[Object(F.jsx)("button",{className:"button ".concat(X.a.buttonFormat," is-primary is-small"),onClick:function(){var e=r.current.getValue(),n=H.a.format(e,{parser:"babel",plugins:[J.a],useTabs:!1,singleQuote:!0,trailingComma:"all",semi:!0}).replace(/\n$/,"");r.current.setValue(n)},children:"Format"}),Object(F.jsx)(P.a,{onMount:function(e){e.onDidChangeModelContent((function(){t(e.getValue())})),r.current||(r.current=e),new Q.a(window.monaco,Z,K.a,e).highLightOnDidChangeModelContent()},value:n,height:"100%",theme:"vs-dark",language:"javascript",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2}})]})},ne=t(5),te=t(20),re=t(178);var ae=function(){var e=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),n=Object(te.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){var e;function n(){e&&clearTimeout(e),e=setTimeout((function(){r({width:window.innerWidth,height:window.innerHeight})}),200)}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t},ce=(t(343),function(e){var n,t=e.direction,r=e.children,a=ae(),i=a.width,o=a.height,s=c.useState(.75*window.innerWidth),u=Object(te.a)(s,2),l=u[0],d=u[1];return c.useEffect((function(){.75*window.innerWidth<l&&d(.75*window.innerWidth)}),[i,l]),n="horizontal"===t?{className:"resizeHorizontal",minConstraints:[.2*i,1/0],maxConstraints:[.75*i,1/0],height:1/0,width:l,resizeHandles:["e"],onResizeStop:function(e,n){d(n.size.width)}}:{minConstraints:[1/0,48],maxConstraints:[1/0,.9*o],height:300,width:1/0,resizeHandles:["s"]},Object(F.jsx)(re.ResizableBox,Object(ne.a)(Object(ne.a)({},n),{},{children:r}))}),ie=t(105),oe=t.n(ie),se="\n<html>\n  <head>\n  <style>\n    html { background-color: #fff;}\n  </style>\n  </head>\n\n  <body>\n    <div id=\"root\"></div>\n\n    <script>\n\n    const handleError = (err) => {\n      const root = document.querySelector('#root');\n      root.innerHTML = '<div style=\"color: red;\"><h4>Runtime Error</h4>' + err + '</div>';\n      console.error(err);\n    };\n\n    window.addEventListener('error', (event) => {\n      event.preventDefault();\n      handleError(event.error);\n    }); \n\n      window.addEventListener('message', (event) => {\n        try {\n          eval(event.data);\n        } catch(err) {\n          handleError(err);\n        }\n      }, false);\n    <\/script>\n  </body>\n</html>\n",ue=function(e){var n=e.code,t=e.bundleErrorMessage,r=c.useRef(null);return c.useEffect((function(){r.current&&(r.current.srcdoc=se,setTimeout((function(){var e;(null===(e=r.current)||void 0===e?void 0:e.contentWindow)&&r.current.contentWindow.postMessage(n,"*")}),50))}),[n]),Object(F.jsxs)("div",{className:oe.a.previewWrapper,children:[Object(F.jsx)("iframe",{ref:r,title:"preview",srcDoc:se,sandbox:"allow-scripts"}),t&&Object(F.jsx)("div",{className:oe.a.previewError,children:t})]})},le=s.c,de=t(179),pe=t.n(de),fe=function(){return Object(F.jsx)("div",{className:pe.a.progressBarCover,children:Object(F.jsx)("progress",{className:"progress is-small is-primary",max:"100",children:"Loading"})})},je=t(180),he=t.n(je),be=t(181);var ve=function(e){var n,t=e.cell,r=U(),a=r.updateCell,i=r.createBundle,o=le((function(e){return function(e,n){return e.bundles[n]}(e,t.id)})),s=(n=t.id,le((function(e){var t,r=e.cells,a=r.data,c=r.order.map((function(e){return a[e]})),i=[],o=Object(be.a)(c);try{for(o.s();!(t=o.n()).done;){var s=t.value;if("code"===s.type&&(s.id===n?i.push("\n    import _React from 'react';\n    import _ReactDOM from 'react-dom';\n\n    var show = async (value) => {\n      if(typeof value === 'object') {\n        if (value.$$typeof && value.props) {\n          _ReactDOM.render(value, document.querySelector('#root'));\n        } else {\n          document.querySelector('#root').innerHTML = JSON.stringify(value);\n        }\n      } else {\n        document.querySelector('#root').innerHTML = value;\n      }\n    }\n    "):i.push("var show = () => {}"),i.push(s.content)),s.id===n)break}}catch(u){o.e(u)}finally{o.f()}return i})).join("\n"));return c.useEffect((function(){if(o){var e=setTimeout(Object(_.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(t.id,s);case 1:case"end":return e.stop()}}),e)}))),750);return function(){return clearTimeout(e)}}i(t.id,s)}),[s,t.id,i]),Object(F.jsx)(ce,{direction:"vertical",children:Object(F.jsxs)("div",{style:{height:"calc(100% - 10px)",display:"flex",flexDirection:"row"},children:[Object(F.jsx)(ce,{direction:"horizontal",children:Object(F.jsx)(ee,{initialValue:t.content,onChange:function(e){return a(t.id,e)}})}),Object(F.jsx)("div",{className:he.a.wrapper,children:!o||o.loading?Object(F.jsx)(fe,{}):Object(F.jsx)(ue,{code:o.code,bundleErrorMessage:o.error})})]})})},me=t(110),xe=t(108),Oe=t.n(xe),Ee=function(e){var n=e.cell,t=U().updateCell,r=c.useState(!1),a=Object(te.a)(r,2),i=a[0],o=a[1],s=c.useRef(null);return c.useEffect((function(){var e=function(e){s.current&&e.target&&s.current.contains(e.target)||o(!1)};return document.addEventListener("click",e,{capture:!0}),function(){return document.removeEventListener("click",e,{capture:!0})}}),[]),i?Object(F.jsx)("div",{ref:s,className:Oe.a.textEditor,children:Object(F.jsx)(me.a,{value:n.content,onChange:function(e){return t(n.id,e||"")}})}):Object(F.jsx)("div",{onClick:function(){return o(!0)},className:"".concat(Oe.a.textEditor," card"),children:Object(F.jsx)("div",{className:"card-content",children:Object(F.jsx)(me.a.Markdown,{source:n.content||"Click to edit"})})})},we=t(109),_e=t.n(we),Le=function(e){var n=e.cell,t="code"===n.type?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:_e.a.actionBarWrapper,children:Object(F.jsx)(W,{id:n.id})}),Object(F.jsx)(ve,{cell:n})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Ee,{cell:n}),Object(F.jsx)(W,{id:n.id})]});return Object(F.jsx)("div",{className:_e.a.cellListItem,children:t})},ye=t(54),Ce=t.n(ye),ge=function(e){var n=e.previousCellId,t=e.forceVisible,r=void 0!==t&&t,a=U().insertCellAfter;return Object(F.jsxs)("div",{className:"".concat(Ce.a.addCell," ").concat(r&&Ce.a.forceVisible),children:[Object(F.jsxs)("div",{className:Ce.a.addButtons,children:[Object(F.jsxs)("button",{className:"button is-rounded is-primary is-small",onClick:function(){return a(n,"code")},children:[Object(F.jsx)("span",{className:"icon is-small",children:Object(F.jsx)("i",{className:"fas fa-plus"})}),Object(F.jsx)("span",{children:"Code"})]}),Object(F.jsxs)("button",{className:"button is-rounded is-primary is-small",onClick:function(){return a(n,"text")},children:[Object(F.jsx)("span",{className:"icon is-small",children:Object(F.jsx)("i",{className:"fas fa-plus"})}),Object(F.jsx)("span",{children:"Text"})]})]}),Object(F.jsx)("div",{className:Ce.a.divider})]})},Ne=t(186),Te=t.n(Ne),ke=function(){var e=le(f),n=e.map((function(e){return Object(F.jsxs)(c.Fragment,{children:[Object(F.jsx)(Le,{cell:e},e.id),Object(F.jsx)(ge,{previousCellId:e.id})]},e.id)}));return Object(F.jsxs)("div",{className:Te.a.cellList,children:[Object(F.jsx)(ge,{previousCellId:null,forceVisible:0===e.length}),n]})},Re=(t(643),t(644),function(){return Object(F.jsx)(s.a,{store:O,children:Object(F.jsx)("div",{children:Object(F.jsx)(ke,{})})})});o.a.render(Object(F.jsx)(Re,{}),document.querySelector("#root"))}},[[645,1,2]]]);
//# sourceMappingURL=main.1e54ca9f.chunk.js.map