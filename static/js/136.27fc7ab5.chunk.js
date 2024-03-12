"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[136],{5136:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var i,o,r,a,p,d,s,x,l=t(9456),u=t(8940),c=t(7528),m=t(403),f=t(4164),h=m.Ay.div(i||(i=(0,c.A)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),g=m.Ay.h1(o||(o=(0,c.A)(["\n    color: white;\n    font-size: 30px;\n    margin-top: 50px;\n    \n    @media "," {\n        margin-top: 10px;\n        font-size: 25px;\n}\n@media "," {\n        margin-top: 40px;\n        font-size: 40px;\n}\n"])),f.j.tablet,f.j.desktop),b=m.Ay.br(r||(r=(0,c.A)(["\n       @media "," {\n        display: none;\n}\n"])),f.j.tablet),A=t(9452),y=t(4467),j=t(9379),w=t(5544),v=t(5043),k=function(n){var e=n.initialState,t=n.onSubmit,i=(0,v.useState)((0,j.A)({},e)),o=(0,w.A)(i,2),r=o[0],a=o[1];return{state:r,setState:a,handleChange:function(n){var e=n.target,t=e.value,i=e.name,o=e.type,r=e.checked,p="checkbox"===o?r:t;a((function(n){return(0,j.A)((0,j.A)({},n),{},(0,y.A)({},i,p.toLocaleLowerCase()))}))},handleSubmit:function(n){n.preventDefault(),t((0,j.A)({},r)),a((0,j.A)({},e))}}},z=t(6713),S=m.Ay.form(a||(a=(0,c.A)(["\n    margin-top: 50px;\n    @media "," {\n        width: 100%;\n    }\n    @media "," {\n        margin-top: 10px;\n}\n@media "," {\n        margin-top: 70px;\n}\n"])),f.j.mobile,f.j.tablet,f.j.desktop),F=m.Ay.div(p||(p=(0,c.A)(["\n    /* display: block;\n    align-items: center; */\n"]))),C=m.Ay.div(d||(d=(0,c.A)(["\n    display: block;\n    /* align-items: center; */\n   \n    &:not(:first-child) {\n        margin-top: 40px;\n    }\n    @media "," {\n        &:not(:first-child) {\n        margin-top: 20px;\n    }\n}\n    @media "," {\n        &:not(:first-child) {\n        margin-top: 40px;\n    }\n}\n"])),f.j.tablet,f.j.desktop),T=m.Ay.label(s||(s=(0,c.A)(["\n    color: white;\n    display: block;\n    /* font-weight: 600; */\n    @media "," {\n        /* margin-right: 5px; */\n        font-size: 20px;\n    /* width: 95px; */\n    }\n    @media "," {\n        font-size: 18px;\n    }\n    @media "," {\n        font-size: 25px;\n    }\n\n"])),f.j.mobile,f.j.tablet,f.j.desktop),L=(0,m.Ay)(z.A)(x||(x=(0,c.A)(["\n    \n"]))),R=t(6268),q=t(1328),D=t(7075),J=t(9028),N=t(579),U={email:"",password:""};function Z(n){var e=n.onSubmit,t=(0,l.d4)(J.sz);console.log("isLoadingUser",t);var i=k({initialState:U,onSubmit:e}),o=i.state,r=i.handleChange,a=i.handleSubmit,p=o.email,d=o.password,s=(0,A.Ak)(),x=(0,A.Ak)();return(0,N.jsxs)(S,{onSubmit:a,children:[(0,N.jsxs)(F,{children:[(0,N.jsxs)(C,{children:[(0,N.jsx)(T,{htmlFor:s,children:"Login"}),(0,N.jsx)(R.JF,{id:s,placeholder:"Enter name",name:"email",type:"text",required:!0,onChange:r,value:p,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"})]}),(0,N.jsxs)(C,{children:[(0,N.jsx)(T,{htmlFor:x,children:"Password"}),(0,N.jsx)(R.JF,{id:x,placeholder:"Enter password",name:"password",type:"password",required:!0,onChange:r,value:d})]})]}),(0,N.jsx)(q.Z,{type:"submit",children:(0,N.jsxs)(L,{children:["Login ",t&&(0,N.jsx)(D.A,{})]})})]})}function E(){var n=(0,l.wA)();return(0,N.jsxs)(h,{children:[(0,N.jsxs)(g,{children:["Sign in please ",(0,N.jsx)(b,{})," in your Menu"]}),(0,N.jsx)(Z,{onSubmit:function(e){n((0,u.iD)(e))}})]})}Z.defaultProps={onSubmit:function(){}}},6713:function(n,e,t){t.d(e,{A:function(){return d},t:function(){return p}});var i,o,r=t(7528),a=t(403),p=a.Ay.button(i||(i=(0,r.A)(["\n  padding: 0px 10px;\n  background-color: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    border: none;\n    border-radius: 10px;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    /* font-weight: 800; */\n    min-width: 100px;\n    height: 25px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n      &:hover,\n       &:focus {\n        background-color: ",";\n        cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.btn}),(function(n){return n.theme.colors.btnActive})),d=a.Ay.p(o||(o=(0,r.A)(["\n  color: ",";\n  font-size: 15px;\n  font-weight: 800;\n  /* line-height: 24px; */\n  /* font-style: normal; */\n\n"])),(function(n){return n.theme.colors.mainTextBtn}))},6268:function(n,e,t){t.d(e,{Dn:function(){return A},IC:function(){return j},JF:function(){return m},ZQ:function(){return b},lV:function(){return f},pC:function(){return g},uq:function(){return y},xs:function(){return h}});var i,o,r,a,p,d,s,x,l=t(7528),u=t(403),c=t(4164),m=u.Ay.input(i||(i=(0,l.A)(["\n    box-sizing: border-box;\npadding-left: 10px;\n border-radius: 5px;\n border: none;\n box-shadow: 7px 20px 14px rgba(10, 4, 1, 0.5);\n &:focus, &:hover  {\n    \n    outline: 2px solid #F59256;\n }\n @media "," {\n    margin-top: 5px;\n    width: 300px;\n    height: 50px;\n    }\n    @media "," {\n        height: 40px;\n    }\n    @media "," {\n        margin-top: 10px;\n        width: 350px;\n        height: 50px;\n}\n"])),c.j.mobile,c.j.tablet,c.j.desktop),f=u.Ay.form(o||(o=(0,l.A)(["\n font-size: 25px;\n    border: 1px solid rgb(7, 94, 138);\n    border-radius: 5px;\n    padding: 30px 10px 10px 10px;\n    width: 300px;\n    background-color: #919191;\n"]))),h=u.Ay.div(r||(r=(0,l.A)(["\n    display: flex;\n    flex-direction: column;\n    &:not(:first-child) {\n    margin-top: 10px;\n}\n    \n"]))),g=u.Ay.label(a||(a=(0,l.A)(["\nfont-size: 25px;\nfont-family: inherit;\n\n\n"]))),b=u.Ay.input(p||(p=(0,l.A)(["\nfont-family: 'Times New Roman', Times, serif;\nfont-size: 17px;\nmargin-top: 10px;\n    padding-left: 10px;\n    max-width: 100%;\n    height: 30px;\n    border-radius: 5px;\n    border: 1px solid #749574;\n    /* &:focus, &:hover  {\n    outline: 2px solid #F59256;\n } */\n"]))),A=u.Ay.textarea(d||(d=(0,l.A)(["\nfont-family: 'Times New Roman', Times, serif;\nfont-size: 17px;\nmargin-top: 10px;\n    padding-left: 10px;\n    max-width: 100%;\n    height: 100px;\n    border-radius: 5px;\n    border: 1px solid #749574;\n    /* &:focus, &:hover  {\n    outline: 2px solid #F59256;\n } */\n"]))),y=u.Ay.input(s||(s=(0,l.A)(["\nfont-family: 'Times New Roman', Times, serif;\nfont-size: 17px;\n    background-color: #FFF;\n    padding-left: 10px;\n    width: 170px;\n    height: 30px;\n    border-radius: 5px;\n    border: 1px soloid #749574;\n      &:focus, &:hover  {\n    outline: none;\n }\n"]))),j=u.Ay.p(x||(x=(0,l.A)(["\n    font-size: 20px;\n    font-family: Inter, sans-serif;\n"])))},1328:function(n,e,t){t.d(e,{Z:function(){return d}});var i,o=t(7528),r=t(403),a=t(4164),p=t(6713),d=(0,r.Ay)(p.t)(i||(i=(0,o.A)(["\n      @media "," {\n        margin-top: 70px;\n    width: 100%;\n    height: 50px;\n    }\n    @media "," {\n        margin-top: 30px;\n        width: 300px;\n}\n@media "," {\n        margin-top: 40px;\n        width: 350px;\n}\n"])),a.j.mobile,a.j.tablet,a.j.desktop)},9452:function(n,e,t){t.d(e,{Ak:function(){return i}});var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=136.27fc7ab5.chunk.js.map