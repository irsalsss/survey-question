import{r,_ as E,k as Jn,l as Xn,b as Zn,j as Ye,O as Qn}from"./index.cd7f7a59.js";import{A as nt,a as w,e as ne,O as er,J as tn,g as xe,c as U,_ as P,j as It,k as St,l as Mt,n as Pt,o as Fe,q as nn,d as rn,f as q,w as De,B as tr,C as Ve,p as Et,I as Qe,u as nr}from"./useRoute.dee269ba.js";import{s as an,K as ve,b as rr,d as ar,u as Je,T as or,e as ir,f as lr}from"./index.4fad54eb.js";import{F as je}from"./Overflow.b119b9ff.js";var sr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},ur=sr,on=function(t,a){return r.exports.createElement(nt,w(w({},t),{},{ref:a,icon:ur}))};on.displayName="EllipsisOutlined";var cr=r.exports.forwardRef(on),dr=["children","locked"],le=r.exports.createContext(null);function vr(e,t){var a=w({},e);return Object.keys(t).forEach(function(n){var o=t[n];o!==void 0&&(a[n]=o)}),a}function ze(e){var t=e.children,a=e.locked,n=ne(e,dr),o=r.exports.useContext(le),l=er(function(){return vr(o,n)},[o,n],function(i,s){return!a&&(i[0]!==s[0]||!an(i[1],s[1]))});return r.exports.createElement(le.Provider,{value:l},t)}function ln(e,t,a,n){var o=r.exports.useContext(le),l=o.activeKey,i=o.onActive,s=o.onInactive,u={active:l===e};return t||(u.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),i(e)},u.onMouseLeave=function(c){n==null||n({key:e,domEvent:c}),s(e)}),u}var fr=["item"];function et(e){var t=e.item,a=ne(e,fr);return Object.defineProperty(a,"item",{get:function(){return tn(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),t}}),a}function sn(e){var t=e.icon,a=e.props,n=e.children,o;return typeof t=="function"?o=r.exports.createElement(t,w({},a)):o=t,o||n||null}function un(e){var t=r.exports.useContext(le),a=t.mode,n=t.rtl,o=t.inlineIndent;if(a!=="inline")return null;var l=e;return n?{paddingRight:l*o}:{paddingLeft:l*o}}var pr=[],cn=r.exports.createContext(null);function rt(){return r.exports.useContext(cn)}var dn=r.exports.createContext(pr);function Oe(e){var t=r.exports.useContext(dn);return r.exports.useMemo(function(){return e!==void 0?[].concat(xe(t),[e]):t},[t,e])}var vn=r.exports.createContext(null),fn=r.exports.createContext(null);function Nt(e,t){return e===void 0?null:"".concat(e,"-").concat(t)}function pn(e){var t=r.exports.useContext(fn);return Nt(t,e)}var Ot=r.exports.createContext({}),mr=["title","attribute","elementRef"],xr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],hr=["active"],gr=function(e){It(a,e);var t=St(a);function a(){return Mt(this,a),t.apply(this,arguments)}return Pt(a,[{key:"render",value:function(){var o=this.props,l=o.title,i=o.attribute,s=o.elementRef,u=ne(o,mr),c=Fe(u,["eventKey"]);return tn(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.exports.createElement(je.Item,E({},i,{title:typeof l=="string"?l:void 0},c,{ref:s}))}}]),a}(r.exports.Component),Cr=function(t){var a,n=t.style,o=t.className,l=t.eventKey;t.warnKey;var i=t.disabled,s=t.itemIcon,u=t.children,c=t.role,d=t.onMouseEnter,C=t.onMouseLeave,p=t.onClick,S=t.onKeyDown,x=t.onFocus,g=ne(t,xr),y=pn(l),b=r.exports.useContext(le),M=b.prefixCls,f=b.onItemClick,m=b.disabled,h=b.overflowDisabled,v=b.itemIcon,K=b.selectedKeys,I=b.onActive,z=r.exports.useContext(Ot),B=z._internalRenderMenuItem,L="".concat(M,"-item"),V=r.exports.useRef(),A=r.exports.useRef(),D=m||i,F=Oe(l),R=function(H){return{key:l,keyPath:xe(F).reverse(),item:V.current,domEvent:H}},j=s||v,G=ln(l,D,d,C),se=G.active,re=ne(G,hr),te=K.includes(l),ue=un(F.length),ce=function(H){if(!D){var W=R(H);p==null||p(et(W)),f(W)}},Y=function(H){if(S==null||S(H),H.which===ve.ENTER){var W=R(H);p==null||p(et(W)),f(W)}},J=function(H){I(l),x==null||x(H)},_={};t.role==="option"&&(_["aria-selected"]=te);var N=r.exports.createElement(gr,E({ref:V,elementRef:A,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":h&&y?null:y},g,re,_,{component:"li","aria-disabled":i,style:w(w({},ue),n),className:U(L,(a={},P(a,"".concat(L,"-active"),se),P(a,"".concat(L,"-selected"),te),P(a,"".concat(L,"-disabled"),D),a),o),onClick:ce,onKeyDown:Y,onFocus:J}),u,r.exports.createElement(sn,{props:w(w({},t),{},{isSelected:te}),icon:j}));return B&&(N=B(N,t,{selected:te})),N};function at(e){var t=e.eventKey,a=rt(),n=Oe(t);return r.exports.useEffect(function(){if(a)return a.registerPath(t,n),function(){a.unregisterPath(t,n)}},[n]),a?null:r.exports.createElement(Cr,e)}var yr=["label","children","key","type"];function wt(e,t){return nn(e).map(function(a,n){if(r.exports.isValidElement(a)){var o,l,i=a.key,s=(o=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&o!==void 0?o:i,u=s==null;u&&(s="tmp_key-".concat([].concat(xe(t),[n]).join("-")));var c={key:s,eventKey:s};return r.exports.cloneElement(a,c)}return a})}function xt(e){return(e||[]).map(function(t,a){if(t&&rn(t)==="object"){var n=t.label,o=t.children,l=t.key,i=t.type,s=ne(t,yr),u=l!=null?l:"tmp-".concat(a);return o||i==="group"?i==="group"?r.exports.createElement(it,E({key:u},s,{title:n}),xt(o)):r.exports.createElement(ot,E({key:u},s,{title:n}),xt(o)):i==="divider"?r.exports.createElement($t,E({key:u},s)):r.exports.createElement(at,E({key:u},s),n)}return null}).filter(function(t){return t})}function br(e,t,a){var n=e;return t&&(n=xt(t)),wt(n,a)}function Ne(e){var t=r.exports.useRef(e);t.current=e;var a=r.exports.useCallback(function(){for(var n,o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return(n=t.current)===null||n===void 0?void 0:n.call.apply(n,[t].concat(l))},[]);return e?a:void 0}var Ir=["className","children"],Sr=function(t,a){var n=t.className,o=t.children,l=ne(t,Ir),i=r.exports.useContext(le),s=i.prefixCls,u=i.mode,c=i.rtl;return r.exports.createElement("ul",E({className:U(s,c&&"".concat(s,"-rtl"),"".concat(s,"-sub"),"".concat(s,"-").concat(u==="inline"?"inline":"vertical"),n)},l,{"data-menu-list":!0,ref:a}),o)},Rt=r.exports.forwardRef(Sr);Rt.displayName="SubMenuList";var me={adjustX:1,adjustY:1},Mr={topLeft:{points:["bl","tl"],overflow:me,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:me,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:me,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:me,offset:[4,0]}},Pr={topLeft:{points:["bl","tl"],overflow:me,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:me,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:me,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:me,offset:[4,0]}};function mn(e,t,a){if(t)return t;if(a)return a[e]||a.other}var Er={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Nr(e){var t=e.prefixCls,a=e.visible,n=e.children,o=e.popup,l=e.popupClassName,i=e.popupOffset,s=e.disabled,u=e.mode,c=e.onVisibleChange,d=r.exports.useContext(le),C=d.getPopupContainer,p=d.rtl,S=d.subMenuOpenDelay,x=d.subMenuCloseDelay,g=d.builtinPlacements,y=d.triggerSubMenuAction,b=d.forceSubMenuRender,M=d.rootClassName,f=d.motion,m=d.defaultMotions,h=r.exports.useState(!1),v=q(h,2),K=v[0],I=v[1],z=p?w(w({},Pr),g):w(w({},Mr),g),B=Er[u],L=mn(u,f,m),V=w(w({},L),{},{leavedClassName:"".concat(t,"-hidden"),removeOnLeave:!1,motionAppear:!0}),A=r.exports.useRef();return r.exports.useEffect(function(){return A.current=De(function(){I(a)}),function(){De.cancel(A.current)}},[a]),r.exports.createElement(rr,{prefixCls:t,popupClassName:U("".concat(t,"-popup"),P({},"".concat(t,"-rtl"),p),l,M),stretch:u==="horizontal"?"minWidth":null,getPopupContainer:C,builtinPlacements:z,popupPlacement:B,popupVisible:K,popup:o,popupAlign:i&&{offset:i},action:s?[]:[y],mouseEnterDelay:S,mouseLeaveDelay:x,onPopupVisibleChange:c,forceRender:b,popupMotion:V},n)}function Or(e){var t=e.id,a=e.open,n=e.keyPath,o=e.children,l="inline",i=r.exports.useContext(le),s=i.prefixCls,u=i.forceSubMenuRender,c=i.motion,d=i.defaultMotions,C=i.mode,p=r.exports.useRef(!1);p.current=C===l;var S=r.exports.useState(!p.current),x=q(S,2),g=x[0],y=x[1],b=p.current?a:!1;r.exports.useEffect(function(){p.current&&y(!1)},[C]);var M=w({},mn(l,c,d));n.length>1&&(M.motionAppear=!1);var f=M.onVisibleChanged;return M.onVisibleChanged=function(m){return!p.current&&!m&&y(!0),f==null?void 0:f(m)},g?null:r.exports.createElement(ze,{mode:l,locked:!p.current},r.exports.createElement(tr,E({visible:b},M,{forceRender:u,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),function(m){var h=m.className,v=m.style;return r.exports.createElement(Rt,{id:t,className:h,style:v},o)}))}var wr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Rr=["active"],_r=function(t){var a,n=t.style,o=t.className,l=t.title,i=t.eventKey;t.warnKey;var s=t.disabled,u=t.internalPopupClose,c=t.children,d=t.itemIcon,C=t.expandIcon,p=t.popupClassName,S=t.popupOffset,x=t.onClick,g=t.onMouseEnter,y=t.onMouseLeave,b=t.onTitleClick,M=t.onTitleMouseEnter,f=t.onTitleMouseLeave,m=ne(t,wr),h=pn(i),v=r.exports.useContext(le),K=v.prefixCls,I=v.mode,z=v.openKeys,B=v.disabled,L=v.overflowDisabled,V=v.activeKey,A=v.selectedKeys,D=v.itemIcon,F=v.expandIcon,R=v.onItemClick,j=v.onOpenChange,G=v.onActive,se=r.exports.useContext(Ot),re=se._internalRenderSubMenuItem,te=r.exports.useContext(vn),ue=te.isSubPathKey,ce=Oe(),Y="".concat(K,"-submenu"),J=B||s,_=r.exports.useRef(),N=r.exports.useRef(),$=d||D,H=C||F,W=z.includes(i),X=!L&&W,fe=ue(A,i),Ie=ln(i,J,M,f),de=Ie.active,he=ne(Ie,Rr),we=r.exports.useState(!1),ge=q(we,2),Ce=ge[0],st=ge[1],ae=function(oe){J||st(oe)},ut=function(oe){ae(!0),g==null||g({key:i,domEvent:oe})},Ue=function(oe){ae(!1),y==null||y({key:i,domEvent:oe})},Re=r.exports.useMemo(function(){return de||(I!=="inline"?Ce||ue([V],i):!1)},[I,de,V,Ce,i,ue]),ct=un(ce.length),Se=function(oe){J||(b==null||b({key:i,domEvent:oe}),I==="inline"&&j(i,!W))},_e=Ne(function(Q){x==null||x(et(Q)),R(Q)}),$e=function(oe){I!=="inline"&&j(i,oe)},dt=function(){G(i)},Me=h&&"".concat(h,"-popup"),Z=r.exports.createElement("div",E({role:"menuitem",style:ct,className:"".concat(Y,"-title"),tabIndex:J?null:-1,ref:_,title:typeof l=="string"?l:null,"data-menu-id":L&&h?null:h,"aria-expanded":X,"aria-haspopup":!0,"aria-controls":Me,"aria-disabled":J,onClick:Se,onFocus:dt},he),l,r.exports.createElement(sn,{icon:I!=="horizontal"?H:null,props:w(w({},t),{},{isOpen:X,isSubMenu:!0})},r.exports.createElement("i",{className:"".concat(Y,"-arrow")}))),qe=r.exports.useRef(I);if(I!=="inline"&&(qe.current=ce.length>1?"vertical":I),!L){var ke=qe.current;Z=r.exports.createElement(Nr,{mode:ke,prefixCls:Y,visible:!u&&X&&I!=="inline",popupClassName:p,popupOffset:S,popup:r.exports.createElement(ze,{mode:ke==="horizontal"?"vertical":ke},r.exports.createElement(Rt,{id:Me,ref:N},c)),disabled:J,onVisibleChange:$e},Z)}var Pe=r.exports.createElement(je.Item,E({role:"none"},m,{component:"li",style:n,className:U(Y,"".concat(Y,"-").concat(I),o,(a={},P(a,"".concat(Y,"-open"),X),P(a,"".concat(Y,"-active"),Re),P(a,"".concat(Y,"-selected"),fe),P(a,"".concat(Y,"-disabled"),J),a)),onMouseEnter:ut,onMouseLeave:Ue}),Z,!L&&r.exports.createElement(Or,{id:Me,open:X,keyPath:ce},c));return re&&(Pe=re(Pe,t,{selected:fe,active:Re,open:X,disabled:J})),r.exports.createElement(ze,{onItemClick:_e,mode:I==="horizontal"?"vertical":I,itemIcon:$,expandIcon:H},Pe)};function ot(e){var t=e.eventKey,a=e.children,n=Oe(t),o=wt(a,n),l=rt();r.exports.useEffect(function(){if(l)return l.registerPath(t,n),function(){l.unregisterPath(t,n)}},[n]);var i;return l?i=o:i=r.exports.createElement(_r,e,o),r.exports.createElement(dn.Provider,{value:n},i)}function Ut(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ar(e)){var a=e.nodeName.toLowerCase(),n=["input","select","textarea","button"].includes(a)||e.isContentEditable||a==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),l=Number(o),i=null;return o&&!Number.isNaN(l)?i=l:n&&i===null&&(i=0),n&&e.disabled&&(i=null),i!==null&&(i>=0||t&&i<0)}return!1}function $r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=xe(e.querySelectorAll("*")).filter(function(n){return Ut(n,t)});return Ut(e,t)&&a.unshift(e),a}var ht=ve.LEFT,gt=ve.RIGHT,Ct=ve.UP,Xe=ve.DOWN,Ze=ve.ENTER,xn=ve.ESC,Le=ve.HOME,Ae=ve.END,qt=[Ct,Xe,ht,gt];function kr(e,t,a,n){var o,l,i,s,u="prev",c="next",d="children",C="parent";if(e==="inline"&&n===Ze)return{inlineTrigger:!0};var p=(o={},P(o,Ct,u),P(o,Xe,c),o),S=(l={},P(l,ht,a?c:u),P(l,gt,a?u:c),P(l,Xe,d),P(l,Ze,d),l),x=(i={},P(i,Ct,u),P(i,Xe,c),P(i,Ze,d),P(i,xn,C),P(i,ht,a?d:C),P(i,gt,a?C:d),i),g={inline:p,horizontal:S,vertical:x,inlineSub:p,horizontalSub:x,verticalSub:x},y=(s=g["".concat(e).concat(t?"":"Sub")])===null||s===void 0?void 0:s[n];switch(y){case u:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case C:return{offset:-1,sibling:!1};case d:return{offset:1,sibling:!1};default:return null}}function Tr(e){for(var t=e;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}function Kr(e,t){for(var a=e||document.activeElement;a;){if(t.has(a))return a;a=a.parentElement}return null}function hn(e,t){var a=$r(e,!0);return a.filter(function(n){return t.has(n)})}function Gt(e,t,a){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=hn(e,t),l=o.length,i=o.findIndex(function(s){return a===s});return n<0?i===-1?i=l-1:i-=1:n>0&&(i+=1),i=(i+l)%l,o[i]}function Lr(e,t,a,n,o,l,i,s,u,c){var d=r.exports.useRef(),C=r.exports.useRef();C.current=t;var p=function(){De.cancel(d.current)};return r.exports.useEffect(function(){return function(){p()}},[]),function(S){var x=S.which;if([].concat(qt,[Ze,xn,Le,Ae]).includes(x)){var g,y,b,M=function(){g=new Set,y=new Map,b=new Map;var F=l();return F.forEach(function(R){var j=document.querySelector("[data-menu-id='".concat(Nt(n,R),"']"));j&&(g.add(j),b.set(j,R),y.set(R,j))}),g};M();var f=y.get(t),m=Kr(f,g),h=b.get(m),v=kr(e,i(h,!0).length===1,a,x);if(!v&&x!==Le&&x!==Ae)return;(qt.includes(x)||[Le,Ae].includes(x))&&S.preventDefault();var K=function(F){if(F){var R=F,j=F.querySelector("a");j!=null&&j.getAttribute("href")&&(R=j);var G=b.get(F);s(G),p(),d.current=De(function(){C.current===G&&R.focus()})}};if([Le,Ae].includes(x)||v.sibling||!m){var I;!m||e==="inline"?I=o.current:I=Tr(m);var z,B=hn(I,g);x===Le?z=B[0]:x===Ae?z=B[B.length-1]:z=Gt(I,g,m,v.offset),K(z)}else if(v.inlineTrigger)u(h);else if(v.offset>0)u(h,!0),p(),d.current=De(function(){M();var D=m.getAttribute("aria-controls"),F=document.getElementById(D),R=Gt(F,g);K(R)},5);else if(v.offset<0){var L=i(h,!0),V=L[L.length-2],A=y.get(V);u(V,!1),K(A)}}c==null||c(S)}}var Ar=Math.random().toFixed(5).toString().slice(2),Yt=0;function Dr(e){var t=Je(e,{value:e}),a=q(t,2),n=a[0],o=a[1];return r.exports.useEffect(function(){Yt+=1;var l="".concat(Ar,"-").concat(Yt);o("rc-menu-uuid-".concat(l))},[]),n}function jr(e){Promise.resolve().then(e)}var _t="__RC_UTIL_PATH_SPLIT__",Jt=function(t){return t.join(_t)},zr=function(t){return t.split(_t)},yt="rc-menu-more";function Fr(){var e=r.exports.useState({}),t=q(e,2),a=t[1],n=r.exports.useRef(new Map),o=r.exports.useRef(new Map),l=r.exports.useState([]),i=q(l,2),s=i[0],u=i[1],c=r.exports.useRef(0),d=r.exports.useRef(!1),C=function(){d.current||a({})},p=r.exports.useCallback(function(f,m){var h=Jt(m);o.current.set(h,f),n.current.set(f,h),c.current+=1;var v=c.current;jr(function(){v===c.current&&C()})},[]),S=r.exports.useCallback(function(f,m){var h=Jt(m);o.current.delete(h),n.current.delete(f)},[]),x=r.exports.useCallback(function(f){u(f)},[]),g=r.exports.useCallback(function(f,m){var h=n.current.get(f)||"",v=zr(h);return m&&s.includes(v[0])&&v.unshift(yt),v},[s]),y=r.exports.useCallback(function(f,m){return f.some(function(h){var v=g(h,!0);return v.includes(m)})},[g]),b=function(){var m=xe(n.current.keys());return s.length&&m.push(yt),m},M=r.exports.useCallback(function(f){var m="".concat(n.current.get(f)).concat(_t),h=new Set;return xe(o.current.keys()).forEach(function(v){v.startsWith(m)&&h.add(o.current.get(v))}),h},[]);return r.exports.useEffect(function(){return function(){d.current=!0}},[]),{registerPath:p,unregisterPath:S,refreshOverflowKeys:x,isSubPathKey:y,getKeyPath:g,getKeys:b,getSubPathKeys:M}}var Vr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Ee=[],Hr=r.exports.forwardRef(function(e,t){var a,n,o=e.prefixCls,l=o===void 0?"rc-menu":o,i=e.rootClassName,s=e.style,u=e.className,c=e.tabIndex,d=c===void 0?0:c,C=e.items,p=e.children,S=e.direction,x=e.id,g=e.mode,y=g===void 0?"vertical":g,b=e.inlineCollapsed,M=e.disabled,f=e.disabledOverflow,m=e.subMenuOpenDelay,h=m===void 0?.1:m,v=e.subMenuCloseDelay,K=v===void 0?.1:v,I=e.forceSubMenuRender,z=e.defaultOpenKeys,B=e.openKeys,L=e.activeKey,V=e.defaultActiveFirst,A=e.selectable,D=A===void 0?!0:A,F=e.multiple,R=F===void 0?!1:F,j=e.defaultSelectedKeys,G=e.selectedKeys,se=e.onSelect,re=e.onDeselect,te=e.inlineIndent,ue=te===void 0?24:te,ce=e.motion,Y=e.defaultMotions,J=e.triggerSubMenuAction,_=J===void 0?"hover":J,N=e.builtinPlacements,$=e.itemIcon,H=e.expandIcon,W=e.overflowedIndicator,X=W===void 0?"...":W,fe=e.overflowedIndicatorPopupClassName,Ie=e.getPopupContainer,de=e.onClick,he=e.onOpenChange,we=e.onKeyDown;e.openAnimation,e.openTransitionName;var ge=e._internalRenderMenuItem,Ce=e._internalRenderSubMenuItem,st=ne(e,Vr),ae=r.exports.useMemo(function(){return br(p,C,Ee)},[p,C]),ut=r.exports.useState(!1),Ue=q(ut,2),Re=Ue[0],ct=Ue[1],Se=r.exports.useRef(),_e=Dr(x),$e=S==="rtl",dt=r.exports.useMemo(function(){return(y==="inline"||y==="vertical")&&b?["vertical",b]:[y,!1]},[y,b]),Me=q(dt,2),Z=Me[0],qe=Me[1],ke=r.exports.useState(0),Pe=q(ke,2),Q=Pe[0],oe=Pe[1],vt=Q>=ae.length-1||Z!=="horizontal"||f,En=Je(z,{value:B,postState:function(O){return O||Ee}}),Lt=q(En,2),pe=Lt[0],At=Lt[1],ft=function(O){At(O),he==null||he(O)},Nn=r.exports.useState(pe),Dt=q(Nn,2),On=Dt[0],wn=Dt[1],pt=Z==="inline",jt=r.exports.useRef(!1);r.exports.useEffect(function(){pt&&wn(pe)},[pe]),r.exports.useEffect(function(){if(!jt.current){jt.current=!0;return}pt?At(On):ft(Ee)},[pt]);var ye=Fr(),zt=ye.registerPath,Ft=ye.unregisterPath,Rn=ye.refreshOverflowKeys,Vt=ye.isSubPathKey,_n=ye.getKeyPath,$n=ye.getKeys,kn=ye.getSubPathKeys,Tn=r.exports.useMemo(function(){return{registerPath:zt,unregisterPath:Ft}},[zt,Ft]),Kn=r.exports.useMemo(function(){return{isSubPathKey:Vt}},[Vt]);r.exports.useEffect(function(){Rn(vt?Ee:ae.slice(Q+1).map(function(k){return k.key}))},[Q,vt]);var Ln=Je(L||V&&((a=ae[0])===null||a===void 0?void 0:a.key),{value:L}),Ht=q(Ln,2),Te=Ht[0],mt=Ht[1],An=Ne(function(k){mt(k)}),Dn=Ne(function(){mt(void 0)});r.exports.useImperativeHandle(t,function(){return{list:Se.current,focus:function(O){var T,ie=Te!=null?Te:(T=ae.find(function(Yn){return!Yn.props.disabled}))===null||T===void 0?void 0:T.key;if(ie){var ee,be,Ke;(ee=Se.current)===null||ee===void 0||(be=ee.querySelector("li[data-menu-id='".concat(Nt(_e,ie),"']")))===null||be===void 0||(Ke=be.focus)===null||Ke===void 0||Ke.call(be,O)}}}});var jn=Je(j||[],{value:G,postState:function(O){return Array.isArray(O)?O:O==null?Ee:[O]}}),Wt=q(jn,2),Ge=Wt[0],zn=Wt[1],Fn=function(O){if(D){var T=O.key,ie=Ge.includes(T),ee;R?ie?ee=Ge.filter(function(Ke){return Ke!==T}):ee=[].concat(xe(Ge),[T]):ee=[T],zn(ee);var be=w(w({},O),{},{selectedKeys:ee});ie?re==null||re(be):se==null||se(be)}!R&&pe.length&&Z!=="inline"&&ft(Ee)},Vn=Ne(function(k){de==null||de(et(k)),Fn(k)}),Bt=Ne(function(k,O){var T=pe.filter(function(ee){return ee!==k});if(O)T.push(k);else if(Z!=="inline"){var ie=kn(k);T=T.filter(function(ee){return!ie.has(ee)})}an(pe,T)||ft(T)}),Hn=Ne(Ie),Wn=function(O,T){var ie=T!=null?T:!pe.includes(O);Bt(O,ie)},Bn=Lr(Z,Te,$e,_e,Se,$n,_n,mt,Wn,we);r.exports.useEffect(function(){ct(!0)},[]);var Un=r.exports.useMemo(function(){return{_internalRenderMenuItem:ge,_internalRenderSubMenuItem:Ce}},[ge,Ce]),qn=Z!=="horizontal"||f?ae:ae.map(function(k,O){return r.exports.createElement(ze,{key:k.key,overflowDisabled:O>Q},k)}),Gn=r.exports.createElement(je,E({id:x,ref:Se,prefixCls:"".concat(l,"-overflow"),component:"ul",itemComponent:at,className:U(l,"".concat(l,"-root"),"".concat(l,"-").concat(Z),u,(n={},P(n,"".concat(l,"-inline-collapsed"),qe),P(n,"".concat(l,"-rtl"),$e),n),i),dir:S,style:s,role:"menu",tabIndex:d,data:qn,renderRawItem:function(O){return O},renderRawRest:function(O){var T=O.length,ie=T?ae.slice(-T):null;return r.exports.createElement(ot,{eventKey:yt,title:X,disabled:vt,internalPopupClose:T===0,popupClassName:fe},ie)},maxCount:Z!=="horizontal"||f?je.INVALIDATE:je.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(O){oe(O)},onKeyDown:Bn},st));return r.exports.createElement(Ot.Provider,{value:Un},r.exports.createElement(fn.Provider,{value:_e},r.exports.createElement(ze,{prefixCls:l,rootClassName:i,mode:Z,openKeys:pe,rtl:$e,disabled:M,motion:Re?ce:null,defaultMotions:Re?Y:null,activeKey:Te,onActive:An,onInactive:Dn,selectedKeys:Ge,inlineIndent:ue,subMenuOpenDelay:h,subMenuCloseDelay:K,forceSubMenuRender:I,builtinPlacements:N,triggerSubMenuAction:_,getPopupContainer:Hn,itemIcon:$,expandIcon:H,onItemClick:Vn,onOpenChange:Bt},r.exports.createElement(vn.Provider,{value:Kn},Gn),r.exports.createElement("div",{style:{display:"none"},"aria-hidden":!0},r.exports.createElement(cn.Provider,{value:Tn},ae)))))}),Wr=["className","title","eventKey","children"],Br=["children"],Ur=function(t){var a=t.className,n=t.title;t.eventKey;var o=t.children,l=ne(t,Wr),i=r.exports.useContext(le),s=i.prefixCls,u="".concat(s,"-item-group");return r.exports.createElement("li",E({},l,{onClick:function(d){return d.stopPropagation()},className:U(u,a)}),r.exports.createElement("div",{className:"".concat(u,"-title"),title:typeof n=="string"?n:void 0},n),r.exports.createElement("ul",{className:"".concat(u,"-list")},o))};function it(e){var t=e.children,a=ne(e,Br),n=Oe(a.eventKey),o=wt(t,n),l=rt();return l?o:r.exports.createElement(Ur,Fe(a,["warnKey"]),o)}function $t(e){var t=e.className,a=e.style,n=r.exports.useContext(le),o=n.prefixCls,l=rt();return l?null:r.exports.createElement("li",{className:U("".concat(o,"-item-divider"),t),style:a})}var qr=Oe,He=Hr;He.Item=at;He.SubMenu=ot;He.ItemGroup=it;He.Divider=$t;var Gr={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},Yr=Gr,gn=function(t,a){return r.exports.createElement(nt,w(w({},t),{},{ref:a,icon:Yr}))};gn.displayName="BarsOutlined";var Jr=r.exports.forwardRef(gn),Xr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},Zr=Xr,Cn=function(t,a){return r.exports.createElement(nt,w(w({},t),{},{ref:a,icon:Zr}))};Cn.displayName="LeftOutlined";var Xt=r.exports.forwardRef(Cn),Qr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},ea=Qr,yn=function(t,a){return r.exports.createElement(nt,w(w({},t),{},{ref:a,icon:ea}))};yn.displayName="RightOutlined";var Zt=r.exports.forwardRef(yn),ta=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},na=ta,bn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},In=r.exports.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function lt(e){var t=e.suffixCls,a=e.tagName;return e.displayName,function(n){var o=r.exports.forwardRef(function(l,i){var s=r.exports.useContext(Ve),u=s.getPrefixCls,c=l.prefixCls,d=u(t,c);return r.exports.createElement(n,E({ref:i,prefixCls:d,tagName:a},l))});return o}}var kt=r.exports.forwardRef(function(e,t){var a=e.prefixCls,n=e.className,o=e.children,l=e.tagName,i=bn(e,["prefixCls","className","children","tagName"]),s=U(a,n);return r.exports.createElement(l,E(E({className:s},i),{ref:t}),o)}),ra=r.exports.forwardRef(function(e,t){var a,n=r.exports.useContext(Ve),o=n.direction,l=r.exports.useState([]),i=q(l,2),s=i[0],u=i[1],c=e.prefixCls,d=e.className,C=e.children,p=e.hasSider,S=e.tagName,x=bn(e,["prefixCls","className","children","hasSider","tagName"]),g=U(c,(a={},P(a,"".concat(c,"-has-sider"),typeof p=="boolean"?p:s.length>0),P(a,"".concat(c,"-rtl"),o==="rtl"),a),d),y=r.exports.useMemo(function(){return{siderHook:{addSider:function(M){u(function(f){return[].concat(xe(f),[M])})},removeSider:function(M){u(function(f){return f.filter(function(m){return m!==M})})}}}},[]);return r.exports.createElement(In.Provider,{value:y},r.exports.createElement(S,E({ref:t,className:g},x),C))}),aa=lt({suffixCls:"layout",tagName:"section",displayName:"Layout"})(ra),oa=lt({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(kt),ia=lt({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(kt),la=lt({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(kt),sa=aa,ua=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},Qt={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},Tt=r.exports.createContext({}),ca=function(){var e=0;return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),da=r.exports.forwardRef(function(e,t){var a=e.prefixCls,n=e.className,o=e.trigger,l=e.children,i=e.defaultCollapsed,s=i===void 0?!1:i,u=e.theme,c=u===void 0?"dark":u,d=e.style,C=d===void 0?{}:d,p=e.collapsible,S=p===void 0?!1:p,x=e.reverseArrow,g=x===void 0?!1:x,y=e.width,b=y===void 0?200:y,M=e.collapsedWidth,f=M===void 0?80:M,m=e.zeroWidthTriggerStyle,h=e.breakpoint,v=e.onCollapse,K=e.onBreakpoint,I=ua(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),z=r.exports.useContext(In),B=z.siderHook,L=r.exports.useState("collapsed"in I?I.collapsed:s),V=q(L,2),A=V[0],D=V[1],F=r.exports.useState(!1),R=q(F,2),j=R[0],G=R[1];r.exports.useEffect(function(){"collapsed"in I&&D(I.collapsed)},[I.collapsed]);var se=function(N,$){"collapsed"in I||D(N),v==null||v(N,$)},re=r.exports.useRef();re.current=function(_){G(_.matches),K==null||K(_.matches),A!==_.matches&&se(_.matches,"responsive")},r.exports.useEffect(function(){function _(W){return re.current(W)}var N;if(typeof window!="undefined"){var $=window,H=$.matchMedia;if(H&&h&&h in Qt){N=H("(max-width: ".concat(Qt[h],")"));try{N.addEventListener("change",_)}catch{N.addListener(_)}_(N)}}return function(){try{N==null||N.removeEventListener("change",_)}catch{N==null||N.removeListener(_)}}},[h]),r.exports.useEffect(function(){var _=ca("ant-sider-");return B.addSider(_),function(){return B.removeSider(_)}},[]);var te=function(){se(!A,"clickTrigger")},ue=r.exports.useContext(Ve),ce=ue.getPrefixCls,Y=function(){var N,$=ce("layout-sider",a),H=Fe(I,["collapsed"]),W=A?f:b,X=na(W)?"".concat(W,"px"):String(W),fe=parseFloat(String(f||0))===0?r.exports.createElement("span",{onClick:te,className:U("".concat($,"-zero-width-trigger"),"".concat($,"-zero-width-trigger-").concat(g?"right":"left")),style:m},o||r.exports.createElement(Jr,null)):null,Ie={expanded:g?r.exports.createElement(Zt,null):r.exports.createElement(Xt,null),collapsed:g?r.exports.createElement(Xt,null):r.exports.createElement(Zt,null)},de=A?"collapsed":"expanded",he=Ie[de],we=o!==null?fe||r.exports.createElement("div",{className:"".concat($,"-trigger"),onClick:te,style:{width:X}},o||he):null,ge=E(E({},C),{flex:"0 0 ".concat(X),maxWidth:X,minWidth:X,width:X}),Ce=U($,"".concat($,"-").concat(c),(N={},P(N,"".concat($,"-collapsed"),!!A),P(N,"".concat($,"-has-trigger"),S&&o!==null&&!fe),P(N,"".concat($,"-below"),!!j),P(N,"".concat($,"-zero-width"),parseFloat(X)===0),N),n);return r.exports.createElement("aside",E({className:Ce},H,{style:ge,ref:t}),r.exports.createElement("div",{className:"".concat($,"-children")},l),S||j&&fe?we:null)},J=r.exports.useMemo(function(){return{siderCollapsed:A}},[A]);return r.exports.createElement(Tt.Provider,{value:J},Y())}),va=da,fa=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},pa=function(t){var a=t.prefixCls,n=t.className,o=t.dashed,l=fa(t,["prefixCls","className","dashed"]),i=r.exports.useContext(Ve),s=i.getPrefixCls,u=s("menu",a),c=U(P({},"".concat(u,"-item-divider-dashed"),!!o),n);return r.exports.createElement($t,E({className:c},l))},Sn=pa,ma=r.exports.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),tt=ma,xa=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},Kt=function(e){It(a,e);var t=St(a);function a(){var n;return Mt(this,a),n=t.apply(this,arguments),n.renderItem=function(o){var l,i=o.siderCollapsed,s,u=n.context,c=u.prefixCls,d=u.firstLevel,C=u.inlineCollapsed,p=u.direction,S=u.disableMenuItemTitleTooltip,x=n.props,g=x.className,y=x.children,b=n.props,M=b.title,f=b.icon,m=b.danger,h=xa(b,["title","icon","danger"]),v=M;typeof M=="undefined"?v=d?y:"":M===!1&&(v="");var K={title:v};!i&&!C&&(K.title=null,K.visible=!1);var I=nn(y).length,z=r.exports.createElement(at,E({},h,{className:U((l={},P(l,"".concat(c,"-item-danger"),m),P(l,"".concat(c,"-item-only-child"),(f?I+1:I)===1),l),g),title:typeof M=="string"?M:void 0}),Et(f,{className:U(Qe(f)?(s=f.props)===null||s===void 0?void 0:s.className:"","".concat(c,"-item-icon"))}),n.renderItemChildren(C));return S||(z=r.exports.createElement(or,E({},K,{placement:p==="rtl"?"left":"right",overlayClassName:"".concat(c,"-inline-collapsed-tooltip")}),z)),z},n}return Pt(a,[{key:"renderItemChildren",value:function(o){var l=this.context,i=l.prefixCls,s=l.firstLevel,u=this.props,c=u.icon,d=u.children,C=r.exports.createElement("span",{className:"".concat(i,"-title-content")},d);return(!c||Qe(d)&&d.type==="span")&&d&&o&&s&&typeof d=="string"?r.exports.createElement("div",{className:"".concat(i,"-inline-collapsed-noicon")},d.charAt(0)):C}},{key:"render",value:function(){return r.exports.createElement(Tt.Consumer,null,this.renderItem)}}]),a}(r.exports.Component);Kt.contextType=tt;function Mn(e){var t,a=e.popupClassName,n=e.icon,o=e.title,l=e.theme,i=r.exports.useContext(tt),s=i.prefixCls,u=i.inlineCollapsed,c=i.antdMenuTheme,d=qr(),C;if(!n)C=u&&!d.length&&o&&typeof o=="string"?r.exports.createElement("div",{className:"".concat(s,"-inline-collapsed-noicon")},o.charAt(0)):r.exports.createElement("span",{className:"".concat(s,"-title-content")},o);else{var p=Qe(o)&&o.type==="span";C=r.exports.createElement(r.exports.Fragment,null,Et(n,{className:U(Qe(n)?(t=n.props)===null||t===void 0?void 0:t.className:"","".concat(s,"-item-icon"))}),p?o:r.exports.createElement("span",{className:"".concat(s,"-title-content")},o))}var S=r.exports.useMemo(function(){return E(E({},i),{firstLevel:!1})},[i]);return r.exports.createElement(tt.Provider,{value:S},r.exports.createElement(ot,E({},Fe(e,["icon"]),{title:C,popupClassName:U(s,"".concat(s,"-").concat(l||c),a)})))}var ha=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};function bt(e){return(e||[]).map(function(t,a){if(t&&rn(t)==="object"){var n=t,o=n.label,l=n.children,i=n.key,s=n.type,u=ha(n,["label","children","key","type"]),c=i!=null?i:"tmp-".concat(a);return l||s==="group"?s==="group"?r.exports.createElement(it,E({key:c},u,{title:o}),bt(l)):r.exports.createElement(Mn,E({key:c},u,{title:o}),bt(l)):s==="divider"?r.exports.createElement(Sn,E({key:c},u)):r.exports.createElement(Kt,E({key:c},u),o)}return null}).filter(function(t){return t})}function ga(e){return r.exports.useMemo(function(){return e&&bt(e)},[e])}globalThis&&globalThis.__rest;var Ca=r.exports.createContext(null),en=Ca,ya=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},ba=r.exports.forwardRef(function(e,t){var a,n=r.exports.useContext(en)||{},o=r.exports.useContext(Ve),l=o.getPrefixCls,i=o.getPopupContainer,s=o.direction,u=l(),c=e.prefixCls,d=e.className,C=e.theme,p=C===void 0?"light":C,S=e.expandIcon,x=e._internalDisableMenuItemTitleTooltip,g=e.inlineCollapsed,y=e.siderCollapsed,b=e.items,M=e.children,f=e.mode,m=e.selectable,h=e.onClick,v=ya(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable","onClick"]),K=Fe(v,["collapsedWidth"]),I=ga(b)||M;(a=n.validator)===null||a===void 0||a.call(n,{mode:f});var z=ir(function(){var G;h==null||h.apply(void 0,arguments),(G=n==null?void 0:n.onClick)===null||G===void 0||G.call(n)}),B=n.mode||f,L=m!=null?m:n.selectable,V=r.exports.useMemo(function(){return y!==void 0?y:g},[g,y]),A={horizontal:{motionName:"".concat(u,"-slide-up")},inline:lr,other:{motionName:"".concat(u,"-zoom-big")}},D=l("menu",c||n.prefixCls),F=U("".concat(D,"-").concat(p),d),R;typeof S=="function"?R=S:R=Et(S||n.expandIcon,{className:"".concat(D,"-submenu-expand-icon")});var j=r.exports.useMemo(function(){return{prefixCls:D,inlineCollapsed:V||!1,antdMenuTheme:p,direction:s,firstLevel:!0,disableMenuItemTitleTooltip:x}},[D,V,p,s,x]);return r.exports.createElement(en.Provider,{value:null},r.exports.createElement(tt.Provider,{value:j},r.exports.createElement(He,E({getPopupContainer:i,overflowedIndicator:r.exports.createElement(cr,null),overflowedIndicatorPopupClassName:"".concat(D,"-").concat(p),mode:B,selectable:L,onClick:z},K,{inlineCollapsed:V,className:F,prefixCls:D,direction:s,defaultMotions:A,expandIcon:R,ref:t}),I)))}),We=function(e){It(a,e);var t=St(a);function a(){var n;return Mt(this,a),n=t.apply(this,arguments),n.focus=function(o){var l;(l=n.menu)===null||l===void 0||l.focus(o)},n}return Pt(a,[{key:"render",value:function(){var o=this;return r.exports.createElement(Tt.Consumer,null,function(l){return r.exports.createElement(ba,E({ref:function(s){o.menu=s}},o.props,l))})}}]),a}(r.exports.Component);We.Divider=Sn;We.Item=Kt;We.SubMenu=Mn;We.ItemGroup=it;var Ia=We,Be=sa;Be.Header=oa;Be.Footer=ia;Be.Content=la;Be.Sider=va;var Pn=Be;const Sa=[{key:"",label:"List"},{key:"create",label:"Create"}],{Header:Ma,Content:Pa}=Pn,Ra=()=>{const{goTo:e}=nr();Jn();const{pathname:t}=Xn(),a=r.exports.useMemo(()=>t.length===1?t:t.replace("/survey-question/",""),[t]);return Zn(Pn,{children:[Ye(Ma,{className:"fixed z-[1] w-full",children:Ye(Ia,{theme:"dark",mode:"horizontal",selectedKeys:[a],items:Sa,onClick:n=>e(`/${n.key}`)})}),Ye(Pa,{className:"mt-[64px] py-[36px] px-[64px] bg-white",children:Ye(Qn,{})})]})};export{Ra as default};