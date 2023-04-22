"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[794],{5794:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var r=t(9439),i=t(2791),a=t(5984),o="ItemForm_form__MqImS",s="ItemForm_formInput__8YeUO",c="ItemForm_formInputName__0o+kP",l="ItemForm_formInputTel__NDaoU",d="ItemForm_formBtn__MJzn3",u=t(9434),m=function(e){return e.items.items},p=function(e){return e.items.itemsByCategory},f=function(e){var n=e.items;return{loading:n.loading,error:n.error}},v=function(e){var n=e.filter,t=e.items;if(!n)return t.items},x=t(3965),h=t(5264),g=t(184);function j(e){e.onClick;var n=e.setModalActive,t=(0,u.v9)(v);console.log(t);var m=(0,u.I0)(),p=(0,i.useState)(""),f=(0,r.Z)(p,2),j=f[0],b=f[1],y=(0,i.useState)(""),_=(0,r.Z)(y,2),N=_[0],C=_[1],k=(0,i.useState)(""),w=(0,r.Z)(k,2),I=w[0],F=w[1],A=(0,a.x0)(),Z=(0,a.x0)(),z=(0,a.x0)(),L=function(e){switch(e.currentTarget.name){case"itemName":b(e.currentTarget.value);break;case"description":F(e.currentTarget.value);break;case"price":C(e.currentTarget.value)}};return(0,g.jsx)("form",{onClick:function(e){return e.stopPropagation()},className:o,onSubmit:function(e){e.preventDefault(),t.find((function(e){return e.itemName.toLocaleLowerCase()===j.toLocaleLowerCase()}))?h.Notify.failure("".concat(j," is already in item")):""===I?(m((0,x.$)({itemName:j,price:N})),b(""),C(""),n(!1)):(m((0,x.$)({itemName:j,description:I,price:N})),b(""),F(""),C(""),n(!1))},children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:s,children:[(0,g.jsx)("label",{htmlFor:A,children:"Name"}),(0,g.jsx)("input",{className:c,id:A,type:"text",name:"itemName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:j,onChange:L})]}),(0,g.jsxs)("div",{className:s,children:[(0,g.jsx)("label",{htmlFor:z,children:"Description"}),(0,g.jsx)("input",{className:c,id:z,type:"text",name:"description",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:I,onChange:L})]}),(0,g.jsxs)("div",{className:s,children:[(0,g.jsx)("label",{htmlFor:Z,children:"Price"}),(0,g.jsx)("input",{className:l,id:Z,type:"number",name:"price",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:N,onChange:L,required:!0})]}),(0,g.jsx)("button",{className:d,type:"submit",children:"Add"})]})})}var b=function(e){return e.filter};function y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var _,N=t(6444),C=N.ZP.div(_||(_=y(["\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(17, 17, 17, 0.6);\n  backdrop-filter: blur(10px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  transition: 0.5s;\n  align-items: center;\njustify-content: center;\n  display: flex;\n  opacity: 0;\npointer-events: none;\ntransition: 1s;\n&.active {\n    opacity: 1;\n    pointer-events: all;\n  };\n"]))),k=function(e){var n=e.active,t=(e.className,e.onClick),r=e.setActive,i=e.children;return window.addEventListener("keydown",(function(e){"Escape"===e.code&&(r(!1),document.body.style.overflow="")})),(0,g.jsx)(C,{className:n?"modal active":"modal",onClick:t,children:i})},w="ItemInList_contactList__+imzO",I="ItemInList_delContacts__KmERu";function F(e){var n=e.filteredItem,t=(0,u.v9)(p);console.log(t);var a=n.itemName,o=n.description,s=n.price,c=n.section,l=n._id,d=n.itemImg;console.log("section",c);var m=(0,u.I0)(),f=(0,i.useState)(!1),v=(0,r.Z)(f,2),h=v[0],j=v[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("li",{className:w,children:[(0,g.jsx)("b",{children:"Name:"}),"  ",a," ",(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Description:"}),"  ",o," ",(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Price:"})," ",s," ",(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"img:"})," ",d,(0,g.jsx)("b",{children:"Section:"})," ",c,(0,g.jsx)("span",{className:I,onClick:function(){return j(!0)},children:"Delete"})]},l),h&&(0,g.jsx)(k,{onClick:function(){return j(!1),void(document.body.style.overflow="")},active:h,setActive:j,children:(0,g.jsxs)("div",{onClick:function(e){return e.stopPropagation()},children:["Do you really wont to delete?",(0,g.jsx)("button",{onClick:function(){m((0,x.wz)(l))},children:"yes"})]})})]})}var A,Z,z,L,P,M,S=function(e){var n=e.itemsCategory;console.log(n);var t=(0,u.v9)(m);console.log(t);var r=(0,u.v9)(b);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("ul",{children:function(){if(!r)return n;var e=r.toLocaleLowerCase();return n.filter((function(n){return n.itemName.toLocaleLowerCase().includes(e)}))}().map((function(e){return(0,g.jsx)(F,{filteredItem:e},e._id)}))})})},T="Filter_contactFilterInput__A7VY6",D="Filter_contactFilterLabel__EgZcb",E="Filter_contactFilter__CK3n0",O=t(5653),B=function(){var e=(0,u.v9)(b),n=(0,u.I0)(),t=(0,a.x0)();return(0,g.jsxs)("div",{className:E,children:[(0,g.jsx)("label",{className:D,htmlFor:t,children:"Find items by name"}),(0,g.jsx)("input",{className:T,type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,O.T)(t))},title:"Search",required:!0})]})},$="MenuItems_phoneBook__F5LYd",q="MenuItems_contactForm__7640z",U="MenuItems_contacts__9spuF",Y="MenuItems_contactsLoading__XYypV",J=t(1087),V=N.ZP.div(A||(A=y(["\n  position: relative;\n\n"]))),K=N.ZP.ul(Z||(Z=y(["\n  list-style: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n\n"]))),R=N.ZP.li(z||(z=y(["\n  display: flex;\n"]))),H=(0,N.ZP)(J.OL)(L||(L=y(["\n\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n  \n  padding: 8px 28px;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover,\n  &:focus {\n   \n    cursor: pointer;\n  }\n  &.active {\n   \n  }\n\n"]))),X=N.ZP.div(P||(P=y(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap-reverse;\n  gap: 12px;\n \n"]))),G=(N.ZP.div(M||(M=y(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 12px;\n"]))),[{btn:"first",link:"first"},{btn:"second",link:"second"},{btn:"third",link:"third"}]);var Q=function(){return(0,g.jsx)(V,{children:(0,g.jsx)(K,{children:(0,g.jsx)(X,{children:G.map((function(e){return(0,g.jsx)(R,{children:(0,g.jsx)(H,{to:"/items/"+e.link,name:e.link,children:e.btn})},(0,a.x0)())}))})})})},W=t(7689);function ee(){var e=(0,W.TH)().pathname.split("/")[2];console.log("category",e);var n=(0,i.useState)(!1),t=(0,r.Z)(n,2),a=t[0],o=t[1];var s=(0,u.I0)(),c=(0,u.v9)(m),l=(0,u.v9)(p);console.log(l);var d=(0,u.v9)(f),v=d.loading,h=d.error;return(0,i.useEffect)((function(){s((0,x.Ez)()),void 0===e?console.log("undef"):(console.log("else"),s((0,x.$0)({category:e})))}),[s,e]),(0,g.jsxs)("div",{className:$,children:[(0,g.jsxs)("div",{className:q,children:[(0,g.jsx)(Q,{}),a&&(0,g.jsx)(k,{onClick:function(){return o(!1),void(document.body.style.overflow="")},active:a,setActive:o,children:(0,g.jsx)(j,{onClick:function(e){return e.stopPropagation()},setModalActive:o})})]}),(0,g.jsxs)("div",{className:U,children:[(0,g.jsx)("h2",{children:"Menu"}),(0,g.jsx)(B,{}),!v&&c.length>0&&(0,g.jsx)(S,{items:c,itemsCategory:l}),v&&(0,g.jsx)("p",{className:Y,children:"...loading"}),h&&(0,g.jsx)("p",{children:"oops, something went wrong"})]}),(0,g.jsx)("button",{type:"button",onClick:function(){return o(!0)},children:"Add Item"})]})}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n}}}]);
//# sourceMappingURL=794.329ea03c.chunk.js.map