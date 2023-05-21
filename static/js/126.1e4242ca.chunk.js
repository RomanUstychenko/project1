"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[126,73],{6632:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var a=t(9439),r=t(2791),o=t(5984),i="ModalItemForm_form__-+3k4",s="ModalItemForm_formInput__adINV",c="ModalItemForm_formInputName__Q6Z+x",l="ModalItemForm_formInputTel__URgjM",u="ModalItemForm_formBtn__f7UqB",d=t(9434),m=t(3965),p=t(5264),f=t(184);function x(e){var n=e.setModalActive,t=e.category,x=e.itemsCategory;console.log(x);var h=(0,d.I0)(),g=(0,r.useState)(""),v=(0,a.Z)(g,2),j=v[0],_=v[1],y=(0,r.useState)(""),N=(0,a.Z)(y,2),C=N[0],b=N[1],Z=(0,r.useState)(""),A=(0,a.Z)(Z,2),S=A[0],k=A[1],M=(0,r.useState)(t),F=(0,a.Z)(M,2),I=F[0],w=F[1],z=(0,o.x0)(),L=(0,o.x0)(),P=(0,o.x0)(),T=function(e){switch(e.currentTarget.name){case"itemName":_(e.currentTarget.value);break;case"description":k(e.currentTarget.value);break;case"price":b(e.currentTarget.value)}};return(0,f.jsx)("form",{onClick:function(e){return e.stopPropagation()},className:i,onSubmit:function(e){e.preventDefault(),x.find((function(e){return e.itemName.toLocaleLowerCase()===j.toLocaleLowerCase()}))?p.Notify.failure("".concat(j," is already in item")):""===S?(w(t),h((0,m.$)({itemName:j,price:C,section:I})),_(""),b(""),w(""),n(!1)):(w(t),h((0,m.$)({itemName:j,description:S,price:C,section:I})),_(""),k(""),b(""),w(""),n(!1))},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)("label",{htmlFor:z,children:"Name"}),(0,f.jsx)("input",{className:c,id:z,type:"text",name:"itemName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:j,onChange:T})]}),(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)("label",{htmlFor:P,children:"Description"}),(0,f.jsx)("input",{className:c,id:P,type:"text",name:"description",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:S,onChange:T})]}),(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)("label",{htmlFor:L,children:"Price"}),(0,f.jsx)("input",{className:l,id:L,type:"number",name:"price",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:C,onChange:T,required:!0})]}),(0,f.jsx)("button",{className:u,type:"submit",children:"Add"})]})})}var h="ModalSectionForm_form__tsdCk",g="ModalSectionForm_formInput__0syn9",v="ModalSectionForm_formInputName__uNNee",j="ModalSectionForm_formBtn__-DNOk",_=t(6002),y=t(8818);function N(e){e.onClick;var n=e.setModalSectionActive,t=(0,d.v9)(_.OY),i=(0,d.I0)(),s=(0,r.useState)(""),c=(0,a.Z)(s,2),l=c[0],u=c[1],m=(0,o.x0)();return(0,f.jsx)("form",{onClick:function(e){return e.stopPropagation()},className:h,onSubmit:function(e){e.preventDefault(),t.find((function(e){return e.category.toLocaleLowerCase()===l.toLocaleLowerCase()}))?p.Notify.failure("".concat(l," is already in item")):(i((0,y.qG)({category:l})),u(""),n(!1))},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("label",{htmlFor:m,children:"Name"}),(0,f.jsx)("input",{className:v,id:m,type:"text",name:"category",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:l,onChange:function(e){if("category"===e.currentTarget.name)u(e.currentTarget.value)}})]}),(0,f.jsx)("button",{className:j,type:"submit",children:"Add"})]})})}var C,b,Z,A,S,k,M="MenuItems_phoneBook__F5LYd",F="MenuItems_contactForm__7640z",I=t(8770),w=t(2658),z=t(168),L=t(6444),P=t(1087),T=(L.ZP.div(C||(C=(0,z.Z)(["\n  position: relative;\n\n"]))),L.ZP.li(b||(b=(0,z.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n\n"])))),B=(L.ZP.li(Z||(Z=(0,z.Z)(["\n  display: flex;\n"]))),(0,L.ZP)(P.OL)(A||(A=(0,z.Z)(["\n\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n  \n  padding: 8px 28px;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover,\n  &:focus {\n   \n    cursor: pointer;\n  }\n  &.active {\n   \n  }\n\n"])))),$=(L.ZP.div(S||(S=(0,z.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap-reverse;\n  gap: 12px;\n \n"]))),L.ZP.div(k||(k=(0,z.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 12px;\n"]))),"ModalChangeSectionName_form__SoU6b"),q="ModalChangeSectionName_formInput__zg-bf",O="ModalChangeSectionName_formInputName__NYHJd",D="ModalChangeSectionName_formBtn__i8Tos";function Y(e){var n=e.category,t=e._id,i=e.closeModal,s=(0,d.v9)(_.OY),c=(0,d.I0)(),l=(0,r.useState)(n),u=(0,a.Z)(l,2),m=u[0],x=u[1],h=(0,o.x0)();return(0,f.jsx)("form",{onClick:function(e){return e.stopPropagation()},className:$,onSubmit:function(e){e.preventDefault(),s.find((function(e){return e.category.toLocaleLowerCase()===m.toLocaleLowerCase()}))?p.Notify.failure("".concat(m," is already in item")):(c((0,y.$n)({_id:t,category:m})),x(""),i())},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:q,children:[(0,f.jsx)("label",{htmlFor:h,children:"Name"}),(0,f.jsx)("input",{className:O,id:h,type:"text",name:"newSectionName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may ",required:!0,defaultValue:n,onChange:function(e){if("newSectionName"===e.currentTarget.name)x(e.currentTarget.value)}})]}),(0,f.jsx)("button",{className:D,type:"submit",children:"Change Section"})]})})}var J=function(e){var n=e.section,t=(0,r.useState)(!1),i=(0,a.Z)(t,2),s=i[0],c=i[1],l=(0,d.I0)();function u(){c(!1),document.body.style.overflow="",l((0,y.Gr)())}var m=n._id,p=n.category,x=[{btn:p,link:m}];return(0,f.jsxs)(T,{children:[x.map((function(e){return(0,f.jsx)(B,{to:"/items/"+e.link,name:e.link,children:e.btn},(0,o.x0)())})),(0,f.jsx)("button",{onClick:function(){return c(!0)},children:"change"},(0,o.x0)()),s&&(0,f.jsx)(w.u,{onClick:function(){return u()},active:s,setActive:c,children:(0,f.jsx)(Y,{closeModal:u,_id:m,category:p})})]},(0,o.x0)())},G=t(7689),U=t(5601),E=t(4654);function H(){var e=(0,d.v9)(E.PR);console.log(e);var n=Boolean(e),t=n?[{id:(0,o.x0)(),to:"/live/".concat(e._id),text:"live"}]:"";return(0,f.jsx)("ul",{children:n?t.map((function(e){var n=e.id,t=e.to,a=e.text;return(0,f.jsx)("li",{children:(0,f.jsx)(P.OL,{target:"_blank",rel:"noreferrer noopener",to:t,end:!0,children:a})},n)})):(0,f.jsx)(f.Fragment,{})})}function R(){var e=(0,G.TH)().pathname.split("/")[2],n=(0,r.useState)(!1),t=(0,a.Z)(n,2),o=t[0],i=t[1],s=(0,r.useState)(!1),c=(0,a.Z)(s,2),l=c[0],u=c[1];function p(){i(!1),u(!1),document.body.style.overflow=""}var h=(0,d.I0)(),g=(0,d.v9)(I.Z9),v=(0,d.v9)(_.OY);return(0,r.useEffect)((function(){h((0,m.Ez)()),h((0,y.Gr)())}),[h]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(H,{}),(0,f.jsxs)("div",{className:M,children:[(0,f.jsxs)("div",{className:F,children:[(0,f.jsx)("ul",{children:v.map((function(e){return(0,f.jsx)(J,{section:e})}))}),(0,f.jsx)("button",{type:"button",onClick:function(){return u(!0)},children:"Add Section"}),l&&(0,f.jsx)(w.u,{onClick:function(){return p()},active:l,setActive:u,children:(0,f.jsx)(N,{onClick:function(e){return e.stopPropagation()},setModalSectionActive:u})}),o&&(0,f.jsx)(w.u,{onClick:function(){return p()},active:o,setActive:i,children:(0,f.jsx)(x,{onClick:function(e){return e.stopPropagation()},setModalActive:i,category:e,itemsCategory:g})})]}),(0,f.jsx)(U.default,{setModalActive:i})]})]})}}}]);
//# sourceMappingURL=126.1e4242ca.chunk.js.map