"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[297],{8297:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(9439),r=n(2791),o=n(5984),c="ContactForm_form__zqkUM",i="ContactForm_formInput__4newl",s="ContactForm_formInputName__MS9gi",l="ContactForm_formInputTel__QLeAr",d="ContactForm_formBtn__EULMB",u=n(9434),m=function(e){return e.contacts.items},h=function(e){var t=e.contacts;return{loading:t.loading,error:t.error}},p=function(e){var t=e.filter,n=e.contacts;if(!t)return n.items},f=n(4039),v=n(5264),x=n(184);function j(e){e.onClick;var t=e.setModalActive,n=(0,u.v9)(p),m=(0,u.I0)(),h=(0,r.useState)(""),j=(0,a.Z)(h,2),_=j[0],C=j[1],b=(0,r.useState)(""),g=(0,a.Z)(b,2),y=g[0],N=g[1],k=(0,r.useState)(""),w=(0,a.Z)(k,2),F=w[0],A=w[1],L=(0,o.x0)(),z=(0,o.x0)(),Z=(0,o.x0)(),I=function(e){switch(e.currentTarget.name){case"name":C(e.currentTarget.value);break;case"description":A(e.currentTarget.value);break;case"phone":N(e.currentTarget.value)}};return(0,x.jsx)("form",{onClick:function(e){return e.stopPropagation()},className:c,onSubmit:function(e){e.preventDefault(),n.find((function(e){return e.name.toLocaleLowerCase()===_.toLocaleLowerCase()}))?v.Notify.failure("".concat(_," is already in contact")):""===F?(m((0,f.el)({name:_,phone:y})),C(""),N(""),t(!1)):(m((0,f.el)({name:_,description:F,phone:y})),C(""),A(""),N(""),t(!1))},children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:i,children:[(0,x.jsx)("label",{htmlFor:L,children:"Name"}),(0,x.jsx)("input",{className:s,id:L,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:_,onChange:I})]}),(0,x.jsxs)("div",{className:i,children:[(0,x.jsx)("label",{htmlFor:Z,children:"Description"}),(0,x.jsx)("input",{className:s,id:Z,type:"text",name:"description",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:F,onChange:I})]}),(0,x.jsxs)("div",{className:i,children:[(0,x.jsx)("label",{htmlFor:z,children:"Phone"}),(0,x.jsx)("input",{className:l,id:z,type:"number",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:y,onChange:I,required:!0})]}),(0,x.jsx)("button",{className:d,type:"submit",children:"Add"})]})})}var _=function(e){return e.filter};var C,b,g,y=n(6444).ZP.div(C||(b=["\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(17, 17, 17, 0.6);\n  backdrop-filter: blur(10px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n  transition: 0.5s;\n  align-items: center;\njustify-content: center;\n  display: flex;\n  opacity: 0;\npointer-events: none;\ntransition: 1s;\n&.active {\n    opacity: 1;\n    pointer-events: all;\n  };\n"],g||(g=b.slice(0)),C=Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(g)}})))),N=function(e){var t=e.active,n=(e.className,e.onClick),a=e.setActive,r=e.children;return window.addEventListener("keydown",(function(e){"Escape"===e.code&&(a(!1),document.body.style.overflow="")})),(0,x.jsx)(y,{className:t?"modal active":"modal",onClick:n,children:r})},k={contactList:"ContactList_contactList__d3iOA",delContacts:"ContactList_delContacts__+Ilco"};function w(e){var t=e.filteredContact,n=t.name,o=t.description,c=t.phone,i=t._id,s=(0,u.I0)(),l=(0,r.useState)(!1),d=(0,a.Z)(l,2),m=d[0],h=d[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("li",{className:k.contactList,children:[(0,x.jsx)("b",{children:"Name:"}),"  ",n," ",(0,x.jsx)("br",{}),(0,x.jsx)("b",{children:"Description:"}),"  ",o," ",(0,x.jsx)("br",{}),(0,x.jsx)("b",{className:k.tel,children:"Tel:"})," ",c,(0,x.jsx)("span",{className:k.delContacts,onClick:function(){return h(!0)},children:"Delete"})]},i),m&&(0,x.jsx)(N,{onClick:function(){return h(!1),void(document.body.style.overflow="")},active:m,setActive:h,children:(0,x.jsxs)("div",{onClick:function(e){return e.stopPropagation()},children:["Do you really wont to delete?",(0,x.jsx)("button",{onClick:function(){s((0,f.GK)(i))},children:"yes"})]})})]})}var F=function(){var e=(0,u.v9)(m),t=(0,u.v9)(_);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("ul",{children:function(){if(!t)return e;var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))}().map((function(e){return(0,x.jsx)(w,{filteredContact:e},e._id)}))})})},A="Filter_contactFilterInput__A7VY6",L="Filter_contactFilterLabel__EgZcb",z="Filter_contactFilter__CK3n0",Z=n(5653),I=function(){var e=(0,u.v9)(_),t=(0,u.I0)(),n=(0,o.x0)();return(0,x.jsxs)("div",{className:z,children:[(0,x.jsx)("label",{className:L,htmlFor:n,children:"Find contacts by name"}),(0,x.jsx)("input",{className:A,type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t((0,Z.T)(n))},title:"Search",required:!0})]})},S="Contacts_phoneBook__+krXn",P="Contacts_titlePhoneBook__zzISd",B="Contacts_contactForm__Pmztk",M="Contacts_contacts__B9d10",T="Contacts_contactsLoading__GlHiY";function D(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],o=t[1];var c=(0,u.I0)(),i=(0,u.v9)(m),s=(0,u.v9)(h),l=s.loading,d=s.error;return(0,r.useEffect)((function(){c((0,f.yF)())}),[c]),(0,x.jsxs)("div",{className:S,children:[(0,x.jsxs)("div",{className:B,children:[(0,x.jsx)("h2",{className:P,children:"New Item"}),n&&(0,x.jsx)(N,{onClick:function(){return o(!1),void(document.body.style.overflow="")},active:n,setActive:o,children:(0,x.jsx)(j,{onClick:function(e){return e.stopPropagation()},setModalActive:o})})]}),(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(I,{}),!l&&i.length>0&&(0,x.jsx)(F,{}),l&&(0,x.jsx)("p",{className:T,children:"...loading"}),d&&(0,x.jsx)("p",{children:"oops, something went wrong"})]}),(0,x.jsx)("button",{type:"button",onClick:function(){return o(!0)},children:"Add Item"})]})}},5984:function(e,t,n){n.d(t,{x0:function(){return a}});var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t}}}]);
//# sourceMappingURL=297.c9ee4e90.chunk.js.map