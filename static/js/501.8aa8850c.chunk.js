"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[501],{8501:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9439),r=n(2791),o=n(5984),c="ContactForm_form__zqkUM",s="ContactForm_formInput__4newl",i="ContactForm_formInputName__MS9gi",l="ContactForm_formInputTel__QLeAr",d="ContactForm_formBtn__EULMB",u=n(9434),m=function(e){return e.contacts.items},h=function(e){var t=e.contacts;return{loading:t.loading,error:t.error}},f=function(e){var t=e.filter,n=e.contacts;if(!t)return n.items},v=n(4039),_=n(5264),p=n(184);function x(){var e=(0,u.v9)(f),t=(0,u.I0)(),n=(0,r.useState)(""),m=(0,a.Z)(n,2),h=m[0],x=m[1],C=(0,r.useState)(""),j=(0,a.Z)(C,2),g=j[0],N=j[1],b=(0,o.x0)(),y=(0,o.x0)(),F=function(e){switch(e.currentTarget.name){case"name":x(e.currentTarget.value);break;case"phone":N(e.currentTarget.value)}};return(0,p.jsxs)("form",{className:c,onSubmit:function(n){n.preventDefault();var a=e.find((function(e){return e.name.toLocaleLowerCase()===h.toLocaleLowerCase()}));console.log(a),console.log(e),a?_.Notify.failure("".concat(h," is already in contact")):(t((0,v.el)({name:h,phone:g})),x(""),N(""))},children:[(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("label",{htmlFor:b,children:"Name"}),(0,p.jsx)("input",{className:i,id:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:h,onChange:F})]}),(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("label",{htmlFor:y,children:"Phone"}),(0,p.jsx)("input",{className:l,id:y,type:"number",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:g,onChange:F,required:!0})]}),(0,p.jsx)("button",{className:d,type:"submit",children:"Add"})]})}var C=function(e){return e.filter},j=function(e){var t=e.active,n=(e.className,e.onClick),a=e.setActive,r=e.children;return window.addEventListener("keydown",(function(e){"Escape"===e.code&&(a(!1),document.body.style.overflow="")})),(0,p.jsx)("div",{className:t?"modal active":"modal",onClick:n,children:r})},g={contactList:"ContactList_contactList__d3iOA",delContacts:"ContactList_delContacts__+Ilco"};function N(e){var t=e.filteredContact,n=t.name,o=t.phone,c=t._id;console.log(t);var s=(0,u.I0)(),i=(0,r.useState)(!1),l=(0,a.Z)(i,2),d=l[0],m=l[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("li",{className:g.contactList,children:[(0,p.jsx)("b",{children:"Name:"}),"  ",n," ",(0,p.jsx)("br",{}),(0,p.jsx)("b",{className:g.tel,children:"Tel:"})," ",o,(0,p.jsx)("span",{className:g.delContacts,onClick:function(){return m(!0)},children:"Delete"})]},c),d&&(0,p.jsx)(j,{onClick:function(){return m(!1),void(document.body.style.overflow="")},active:d,setActive:m,children:(0,p.jsxs)("div",{onClick:function(e){return e.stopPropagation()},active:d,children:["Do you really wont to delete?",(0,p.jsx)("button",{onClick:function(){s((0,v.GK)(c))},children:"yes"})]})})]})}var b=function(){var e=(0,u.v9)(m),t=(0,u.v9)(C);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:function(){if(!t)return e;var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))}().map((function(e){return(0,p.jsx)(N,{filteredContact:e},e._id)}))})})},y="Filter_contactFilterInput__A7VY6",F="Filter_contactFilterLabel__EgZcb",k="Filter_contactFilter__CK3n0",w=n(5653),L=function(){var e=(0,u.v9)(C),t=(0,u.I0)(),n=(0,o.x0)();return(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("label",{className:F,htmlFor:n,children:"Find contacts by name"}),(0,p.jsx)("input",{className:y,type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t((0,w.T)(n))},title:"Search",required:!0})]})},A="Contacts_phoneBook__+krXn",I="Contacts_titlePhoneBook__zzISd",S="Contacts_contactForm__Pmztk",z="Contacts_contacts__B9d10",B="Contacts_contactsLoading__GlHiY";function Z(){var e=(0,u.I0)(),t=(0,u.v9)(m),n=(0,u.v9)(h),a=n.loading,o=n.error;return(0,r.useEffect)((function(){e((0,v.yF)())}),[e]),(0,p.jsxs)("div",{className:A,children:[(0,p.jsxs)("div",{className:S,children:[(0,p.jsx)("h2",{className:I,children:"PhoneBook"}),(0,p.jsx)(x,{})]}),(0,p.jsxs)("div",{className:z,children:[(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(L,{}),!a&&t.length>0&&(0,p.jsx)(b,{}),a&&(0,p.jsx)("p",{className:B,children:"...loading"}),o&&(0,p.jsx)("p",{children:"oops, something went wrong"})]})]})}},5984:function(e,t,n){n.d(t,{x0:function(){return a}});var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t}}}]);
//# sourceMappingURL=501.8aa8850c.chunk.js.map