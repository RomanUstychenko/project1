"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[601],{5601:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(9434),i=function(e){return e.filter},a=n(9439),o=n(2791),c=n(2658),s="ItemInList_contactList__ZeV7i",l="ItemInList_delContacts__9o6iY",u=n(5984),d="ModalItemDetail_form__x-gZ-",m="ModalItemDetail_formInput__-IBL2",f="ModalItemDetail_formInputName__FASfh",v="ModalItemDetail_formBtn__dFB10",x=n(3965),h=n(184);function p(e){var t=e.itemName,n=e.price,i=e.description,c=e._id,s=e.closeModal,l=(0,r.I0)(),p=(0,o.useState)(t),j=(0,a.Z)(p,2),g=j[0],_=j[1],y=(0,o.useState)(n),N=(0,a.Z)(y,2),C=N[0],b=N[1],k=(0,o.useState)(i),w=(0,a.Z)(k,2),I=w[0],F=w[1],Z=(0,u.x0)(),A=(0,u.x0)(),L=(0,u.x0)();console.log(t,n);var M=function(e){switch(e.currentTarget.name){case"newItemName":_(e.currentTarget.value);break;case"newPrice":b(e.currentTarget.value);break;case"newDescription":F(e.currentTarget.value)}};return(0,h.jsx)("form",{onClick:function(e){return e.stopPropagation()},className:d,onSubmit:function(e){e.preventDefault(),""===C&&b(n),l((0,x.LM)({_id:c,itemName:g,description:I,price:C})),_(""),F(""),b(""),s()},children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("label",{htmlFor:Z,children:"Name"}),(0,h.jsx)("input",{className:f,id:Z,type:"text",name:"newItemName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may ",required:!0,defaultValue:t,onChange:M})]}),(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("label",{htmlFor:A,children:"Price"}),(0,h.jsx)("input",{className:f,id:A,type:"text",name:"newPrice",pattern:"[0-9]{1,10}",title:"Name may ",required:!0,defaultValue:n,onChange:M})]}),(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("label",{htmlFor:L,children:"Description"}),(0,h.jsx)("input",{className:f,id:L,type:"text",name:"newDescription",pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may ",required:!0,defaultValue:i,onChange:M})]}),(0,h.jsx)("button",{className:v,type:"submit",children:"Change Name"})]})})}function j(e){var t=e._id,n=e.closeModal,i=(0,r.I0)();return(0,h.jsxs)("div",{onClick:function(e){return e.stopPropagation()},children:["Do you really wont to delete?",(0,h.jsx)("button",{onClick:function(){i((0,x.wz)(t)),n()},children:"yes"})]})}function g(e){var t=e.filteredItem,n=e.itemsCategory,r=(0,u.x0)(),i=t.itemName,d=t.description,m=t.price,f=t._id,v=(0,o.useState)(!1),x=(0,a.Z)(v,2),g=x[0],_=x[1],y=(0,o.useState)(!1),N=(0,a.Z)(y,2),C=N[0],b=N[1];function k(){_(!1),b(!1),document.body.style.overflow=""}return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{onClick:function(){return b(!0)},children:(0,h.jsxs)("li",{className:s,children:[(0,h.jsx)("b",{children:"Name:"}),"  ",i," ",(0,h.jsx)("br",{}),(0,h.jsx)("b",{children:"Price:"})," ",m," ",(0,h.jsx)("br",{})]},r)}),(0,h.jsx)("span",{className:l,onClick:function(){return _(!0)},children:"Delete"})]}),g&&(0,h.jsx)(c.u,{onClick:function(){return k()},active:g,setActive:_,children:(0,h.jsx)(j,{closeModal:k,_id:f})}),C&&(0,h.jsx)(c.u,{onClick:function(){return k()},active:C,setActive:b,children:(0,h.jsx)(p,{itemName:i,price:m,description:d,_id:f,itemsCategory:n,closeModal:k,setModalDetailActive:b})})]})}var _=n(7689),y=n(8818),N=function(e){var t=e.itemsCategory,n=e.items,a=(0,_.TH)().pathname.split("/")[2],c=(0,r.I0)();console.log(t);var s=(0,r.v9)(i);return(0,o.useEffect)((function(){c((0,y.Gr)()),void 0===a||c((0,x.$0)({category:a}))}),[c,a,n]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{children:function(){if(!s)return t;var e=s.toLocaleLowerCase();return t.filter((function(t){return t.itemName.toLocaleLowerCase().includes(e)}))}().map((function(e){return(0,h.jsx)(g,{itemsCategory:t,filteredItem:e},e._id)}))})})},C="Filter_contactFilterInput__A7VY6",b="Filter_contactFilterLabel__EgZcb",k="Filter_contactFilter__CK3n0",w=n(5653),I=function(){var e=(0,r.v9)(i),t=(0,r.I0)(),n=(0,u.x0)();return(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)("label",{className:b,htmlFor:n,children:"Find items by name"}),(0,h.jsx)("input",{className:C,type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t((0,w.T)(n))},title:"Search",required:!0})]})},F="MenuItems_contacts__t9EFF",Z="MenuItems_contactsLoading__PzTnD",A=n(8770),L=n(6002);function M(e){var t=e.setModalActive,n=(0,r.v9)(A.kk),i=(0,r.v9)(A.Z9),a=(0,r.v9)(L.OY);console.log("sections",a);var o=(0,r.v9)(A.y0),c=o.loading,s=o.error;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:F,children:[(0,h.jsx)("h2",{children:"Menu"}),(0,h.jsx)(I,{}),!c&&n.length>0&&(0,h.jsx)(N,{items:n,itemsCategory:i}),c&&(0,h.jsx)("p",{className:Z,children:"...loading"}),s&&(0,h.jsx)("p",{children:"No items yet"})]}),(0,h.jsx)("button",{type:"button",onClick:function(){return t(!0)},children:"Add Item"})]})}},2658:function(e,t,n){n.d(t,{u:function(){return c}});n(2791);var r,i=n(168),a=n(6444).ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(17, 17, 17, 0.6);\n  backdrop-filter: blur(10px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  transition: 0.5s;\n  align-items: center;\njustify-content: center;\n  display: flex;\n  opacity: 0;\npointer-events: none;\ntransition: 1s;\n&.active {\n    opacity: 1;\n    pointer-events: all;\n  };\n"]))),o=n(184),c=function(e){var t=e.active,n=(e.className,e.onClick),r=e.setActive,i=e.children;return window.addEventListener("keydown",(function(e){"Escape"===e.code&&(r(!1),document.body.style.overflow="")})),(0,o.jsx)(a,{className:t?"modal active":"modal",onClick:n,children:i})}},8770:function(e,t,n){n.d(t,{C3:function(){return i},Z9:function(){return o},fN:function(){return a},kk:function(){return r},y0:function(){return c}});var r=function(e){return e.items.items},i=function(e){return e.items.itemsLive},a=function(e){return e.items.isLive},o=function(e){return e.items.itemsByCategory},c=function(e){var t=e.items;return{loading:t.loading,error:t.error}}},6002:function(e,t,n){n.d(t,{OY:function(){return r}});var r=function(e){return e.sections.sections}},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}}}]);
//# sourceMappingURL=601.8a4cad6e.chunk.js.map