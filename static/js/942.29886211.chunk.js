"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[942],{332:function(n,t,r){r.d(t,{z:function(){return a}});var e="Button_Button__XMdsc",i=r(184),a=function(n){var t=n.style,r=n.text,a=n.onClick;return(0,i.jsx)("button",{style:t,className:e,onClick:a,children:r})}},5942:function(n,t,r){r.r(t),r.d(t,{default:function(){return O}});var e,i,a,o=r(5984),c=[{id:(0,o.x0)(),to:"/items",text:"Items"},{id:(0,o.x0)(),to:"/users",text:"Users"}],s=r(168),u=r(6444),l=r(1087),d=u.ZP.ul(e||(e=(0,s.Z)(["\n    display: flex;\n    margin-right: auto;\n    margin-left: auto;\n    align-items: center;\n    justify-content: center;\n"]))),x=u.ZP.li(i||(i=(0,s.Z)(["\n    &:not(:last-child) {\n    margin-right: 20px;\n}\n"]))),v=(0,u.ZP)(l.OL)(a||(a=(0,s.Z)(["\n    text-decoration: none;\n    font-size: 40px;\n    font-weight: 700;\n    color: rgb(10, 3, 3);\n    &.active {\n        padding-left: 5px;\n        padding-right: 5px;\n        color: white;\n        background-color: #3f51b5;\n        border-radius: 5px;\n    }\n    &:hover, \n    :focus {\n        color: #333d72;\n    }\n"]))),f=r(184);function m(){return(0,f.jsx)(d,{children:c.map((function(n){var t=n.id,r=n.to,e=n.text;return(0,f.jsx)(x,{children:(0,f.jsx)(v,{to:r,end:!0,children:e})},t)}))})}var h=[{id:(0,o.x0)(),to:"/register",text:"Registration"},{id:(0,o.x0)(),to:"/login",text:"Login"}],g="NavbarAuth_navbarAuthList__uq7f4",p="NavbarAuth_link__uB6Cb",_="NavbarAuth_active__uFY6G",j="NavbarAuth_navbarAuthListItem__lWQZW",b=function(n){return n.isActive?"".concat(p," ").concat(_):"".concat(p)};function N(){return(0,f.jsx)("ul",{className:g,children:h.map((function(n){var t=n.id,r=n.to,e=n.text;return(0,f.jsx)("li",{className:j,children:(0,f.jsx)(l.OL,{className:b,to:r,end:!0,children:e})},t)}))})}var y,Z,k=r(9434),L=r(5029),A="NavbarUser_navbarUser__qA+4s",C="NavbarUser_navbarUserName__2jqzv",U=r(4654),P=r(332);function w(){var n=(0,k.v9)(U.PR),t=(0,k.I0)(),r=Boolean(n);return(0,f.jsxs)("div",{className:A,children:[r?(0,f.jsxs)("p",{className:C,children:[(0,f.jsx)("img",{src:n.avatarURL,alt:"avatar"}),"Welcome, ",(0,f.jsx)("b",{children:n.name})]}):(0,f.jsxs)("p",{children:["Welcome, ",(0,f.jsx)("b",{children:"User"})]}),(0,f.jsx)(P.z,{style:{position:"absolute",right:"0px",height:"25px",padding:"0px 0px",minWidth:"100px",fontSize:15,color:"#010101"},text:"Logout",type:"button",onClick:function(){t((0,L.kS)())}})]})}var z=u.ZP.div(y||(y=(0,s.Z)(["\nmargin-top: 20px;\n    text-align: center;\nmargin-left: auto;\nmargin-right: auto;\n\n"]))),B=(0,u.ZP)(l.OL)(Z||(Z=(0,s.Z)(["\n\ncolor: #7e2323;\ntext-decoration: none;\nfont-size: 20px;\nfont-family: 'Goudy Stout';\n\n"])));function R(){var n=(0,k.v9)(U.PR);console.log(n);var t=Boolean(n),r=t?[{id:(0,o.x0)(),to:"/live/".concat(n._id),text:"".concat(n.name)}]:"";return(0,f.jsx)(z,{children:t?r.map((function(n){n.id;var t=n.to,r=n.text;return(0,f.jsx)(B,{to:t,end:!0,children:r})})):(0,f.jsx)(f.Fragment,{})})}var S="Navbar_navbarMenu__RH5i-",W="Navbar_navbarList__wJY-l",q=r(8074),F=r(8770),I=function(){return(0,k.v9)(F.fN)};function O(){var n=(0,q.Z)(),t=I();return(0,f.jsx)(f.Fragment,{children:t?(0,f.jsx)(R,{}):(0,f.jsx)("nav",{className:S,children:(0,f.jsxs)("div",{className:W,children:[n&&(0,f.jsx)(m,{}),n?(0,f.jsx)(w,{}):(0,f.jsx)(N,{})]})})})}},8770:function(n,t,r){r.d(t,{C3:function(){return i},Z9:function(){return o},fN:function(){return a},kk:function(){return e},y0:function(){return c}});var e=function(n){return n.items.items},i=function(n){return n.items.itemsLive},a=function(n){return n.items.isLive},o=function(n){return n.items.itemsByCategory},c=function(n){var t=n.items;return{loading:t.loading,error:t.error}}},5984:function(n,t,r){r.d(t,{x0:function(){return e}});var e=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var e=63&r[n];t+=e<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-"}return t}}}]);
//# sourceMappingURL=942.29886211.chunk.js.map