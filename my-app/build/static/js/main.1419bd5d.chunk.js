(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{254:function(e,t,n){},258:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},270:function(e,t,n){},425:function(e,t,n){},457:function(e,t,n){},458:function(e,t,n){},460:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(13),r=n.n(c),i=(n(254),n(27)),o=n(19),l=n(9),u=(n(258),n(7)),d=n.n(u),j=n(15),p=n(12),b=(n(260),n(261),n(494)),m=n(493),O=n(489),h=n(1),f=function(e){var t=e.conversation,n=Object(l.c)((function(e){return e.AuthReducer})),s=n.user,c=(n.conversationUser,n.newUserData,Object(o.f)()),r=Object(o.h)().id,i=t.members.find((function(e){return e!==s._id})),u=Object(a.useState)([]),f=Object(p.a)(u,2),x=f[0],v=f[1],g=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/user/".concat(i),{method:"get"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,v(n.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/delete/friendconversation/".concat(t._id),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent,200===n.status&&c.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g()}),[r]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"leftChatUser",children:x.username?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(h.jsx)("img",{className:"profileImage",src:null===x||void 0===x?void 0:x.profilePicture,alt:""}),Object(h.jsx)("div",{className:"profileName",children:null===x||void 0===x?void 0:x.username})]}),Object(h.jsx)(O.a,{children:Object(h.jsx)(m.a,{onClick:function(){return y(x)}})})]}):Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"0px"},children:[Object(h.jsx)(b.a,{variant:"circle",width:40,height:40,style:{background:"rgb(0 0 0 / 20%)"}}),Object(h.jsx)(b.a,{variant:"text",width:100,height:30,style:{background:"rgb(0 0 0 / 20%)",marginLeft:"20px"}})]})})})},x=function(e){var t=e.currentConversation,n=Object(l.c)((function(e){return e.AuthReducer})).user,s=Object(l.b)(),c=Object(a.useState)(),r=Object(p.a)(c,2),o=r[0],u=r[1],b=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/conversation/".concat(n._id),{method:"get"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(a.message),s({type:"ADD_CONVERSATIONS_USER",payload:a.message});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b()}),[t]),Object(h.jsxs)("section",{className:t?"leftContainer":"leftContainer mobileLeftActive",children:[Object(h.jsx)("div",{className:"leftHeader",children:Object(h.jsx)("div",{className:"leftHeaderTitle",children:"Chat"})}),Object(h.jsx)("div",{className:"leftChatUsers",children:o?o.length>=1?o.map((function(e){return Object(h.jsx)(i.c,{onClick:function(){return setTimeout((function(){s({type:"SCROLL_BOTTOM"})}),500)},activeClassName:"active",to:"/message/".concat(e._id),children:Object(h.jsx)(f,{conversation:e})})})):Object(h.jsx)("h2",{style:{textAlign:"center",color:"gray",userSelect:"none"},children:"No user found! Search Your Friends...\ud83e\udd37\u200d\u2640\ufe0f"}):Object(h.jsx)("h1",{children:"Loading..."})})]})},v=(n(264),n(497)),g=n(498),y=(n(265),function(e){var t=e.searchInput,n=e.setSearchInput,s=Object(l.c)((function(e){return e.AuthReducer})),c=s.user,r=s.conversationUser,i=Object(o.f)(),u=Object(a.useState)([]),b=Object(p.a)(u,2),m=b[0],O=b[1],f=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(""),!r.some((function(e){return e.members.some((function(e){return e===t._id}))}))){e.next=5;break}i.push("/message/".concat(r.find((function(e){return e.members.some((function(e){return e===t._id}))}))._id)),e.next=12;break;case 5:return e.next=7,fetch("/api/conversation",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({senderId:t._id})});case 7:return a=e.sent,e.next=10,a.json();case 10:s=e.sent,i.push("/message/"+s.message._id);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users",{method:"get"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n.message);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),Object(h.jsx)("div",{className:"searchResultComponent",children:t?Object(h.jsx)("div",{className:"searchUsers",children:(null===m||void 0===m?void 0:m.filter((function(e){return e._id!==c._id&&e.username.toLowerCase().includes(null===t||void 0===t?void 0:t.trim().toLowerCase())})).length)?null===m||void 0===m?void 0:m.filter((function(e){return e._id!==c._id&&e.username.toLowerCase().includes(null===t||void 0===t?void 0:t.trim().toLowerCase())})).map((function(e,t){return Object(h.jsxs)("div",{onClick:function(){return f(e)},className:"searchUser",children:[Object(h.jsx)("img",{className:"userProfile",src:(null===e||void 0===e?void 0:e.profilePicture)||"../images/noAvatar.png",alt:""}),Object(h.jsx)("span",{className:"userName",children:e.username})]},t+100)})):Object(h.jsx)("div",{className:"noUserFound",children:"No User is Found"})}):null})}),N=n(496),C=(n(266),n(495)),w=(n(267),function(e){var t=e.props,n=t.deletePopup,a=t.setDeletePopup,s=t.deleteUser;return Object(h.jsx)("div",{className:n?"deletePopup active":"deletePopup",children:Object(h.jsxs)("div",{className:"showPopup",children:[Object(h.jsxs)("div",{className:"icon-text",children:[Object(h.jsx)(C.a,{className:"warningIcon"}),Object(h.jsx)("h1",{children:"Want to Delete Your Account?"})]}),Object(h.jsxs)("div",{className:"button",children:[Object(h.jsx)(N.a,{onClick:function(){return a(!1)},variant:"outlined",color:"secondary",children:"Cancel"}),Object(h.jsx)(N.a,{onClick:function(){return s()},variant:"contained",color:"secondary",children:"Delete"})]})]})})}),k=(n(268),function(e){var t=e.props,n=t.imagePopup,s=t.setImagePopup,c=(t.deleteUser,Object(l.c)((function(e){return e.AuthReducer}))),r=(c.user,c.newUserData),i=(Object(l.b)(),Object(a.useState)("")),o=Object(p.a)(i,2),u=o[0],b=o[1],m=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("image",u),e.next=4,fetch("/api/user/profilpicture",{method:"PATCH",heades:{"Content-Type":"application/json"},body:t});case 4:return n=e.sent,e.next=7,n.json();case 7:e.sent,200===n.status&&setTimeout((function(){s(!1)}),1e3);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:n?"imagePopup active":"imagePopup",children:Object(h.jsxs)("div",{className:"showPopup",children:[Object(h.jsxs)("div",{className:"icon-text",children:[Object(h.jsx)("label",{className:"profileImage",htmlFor:"profileImage",children:Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:u?URL.createObjectURL(u):null===r||void 0===r?void 0:r.profilePicture,alt:""})})}),Object(h.jsx)("input",{onChange:function(e){b(e.target.files[0])},accept:".png,.jpeg,.jpg",type:"file",id:"profileImage",style:{display:"none"}}),Object(h.jsx)("h1",{children:"Change Your Profile Picture"})]}),Object(h.jsxs)("div",{className:"button",children:[Object(h.jsx)(N.a,{onClick:function(){s(!1),b("")},variant:"outlined",color:"secondary",children:"Cancel"}),Object(h.jsx)(N.a,{onClick:function(){return m()},variant:"contained",color:"secondary",children:"Upload"})]})]})})}),S=function(e){var t,n=e.props,s=Object(l.c)((function(e){return e.AuthReducer})),c=s.user,r=(s.newUserData,Object(l.b)()),i=Object(a.useState)(),o=Object(p.a)(i,2),u=o[0],b=o[1],m=Object(a.useState)(!1),O=Object(p.a)(m,2),f=O[0],x=O[1],v=Object(a.useState)(!1),g=Object(p.a)(v,2),y=g[0],C=g[1],S=Object(a.useState)(!1),T=Object(p.a)(S,2),I=T[0],U=T[1],_=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/deleteaccount",{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.sent,e.next=8,fetch("/api/delete/conversation",{method:"DELETE",headers:{"Content-Type":"application/json"}});case 8:return a=e.sent,e.next=11,a.json();case 11:s=e.sent,console.log(a),console.log(s),n.logoutHandle();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/"+c._id,{method:"get"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n.message),r({type:"PROFILE_CHANGED",payload:n.message});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){L()}),[I]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(N.a,{onClick:function(){return x(!f)},className:"profile",children:[Object(h.jsx)("img",{src:(null===u||void 0===u?void 0:u.profilePicture)||"../images/noAvatar.png",alt:"",className:"profileImage"}),Object(h.jsx)("sapn",{className:"profileName",children:null===(t=c.username)||void 0===t?void 0:t.split(" ")[0]})]}),Object(h.jsxs)("div",{className:f?"profilePopup active":"profilePopup",children:[Object(h.jsx)(N.a,{className:"changeImage",onClick:function(){return U(!0)},children:Object(h.jsx)("div",{onClick:function(){return x(!f)},children:"Change Image"})}),Object(h.jsx)(N.a,{onClick:function(){x(!f),C(!0)},className:"changeImage",children:"Delete Account"}),Object(h.jsx)(N.a,{onClick:function(){x(!f),n.logoutHandle()},className:"logoutButton",children:"LOGOUT"})]}),Object(h.jsx)(w,{props:{deletePopup:y,setDeletePopup:C,deleteUser:_}}),Object(h.jsx)(k,{props:{imagePopup:I,setImagePopup:U,deleteUser:_}})]})},T=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.AuthReducer})),n=(t.user,t.userProfile,Object(a.useState)()),s=Object(p.a)(n,2),c=s[0],r=s[1],u=Object(a.useState)(!1),d=Object(p.a)(u,2),j=d[0],b=d[1],m=Object(o.g)().pathname;return Object(a.useEffect)((function(){r("")}),[m]),Object(h.jsx)("header",{children:Object(h.jsxs)("nav",{children:[Object(h.jsxs)("div",{className:"headerLeft",children:[Object(h.jsx)(v.a,{onClick:function(){b(!0),r()},className:"searchIconFormMobile"}),Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)("img",{src:"../images/logo.png",alt:""})})]}),Object(h.jsx)("div",{className:j?"headerMiddle active":"headerMiddle",children:Object(h.jsxs)("div",{className:"searchBar",children:[Object(h.jsx)(g.a,{onClick:function(){return b(!1)},className:"searchCancelMobile"}),Object(h.jsx)("input",{onChange:function(e){return r(e.target.value)},value:c,placeholder:"Search A User",className:"searchInput",type:"text"}),Object(h.jsx)(y,{searchInput:c,setSearchInput:r})]})}),Object(h.jsx)("div",{className:"headerRight",children:Object(h.jsx)(S,{props:{logoutHandle:function(){e({type:"LOGOUT"})}}})})]})})},I=n(240),U=n(500),_=n(225),L=n.n(_),E=(n(270),n(239)),P=function(e){var t=e.message,n=e.own,a=e.currentChatUser,s=Object(l.c)((function(e){return e.AuthReducer})).newUserData;return Object(h.jsx)(E.a,{children:Object(h.jsxs)("div",{className:"message ".concat(n),children:[Object(h.jsxs)("div",{className:"messageTop",children:[n?Object(h.jsx)("img",{className:"messageImg",src:(null===s||void 0===s?void 0:s.profilePicture)||"../images/noAvatar.png",alt:""}):Object(h.jsx)("img",{className:"messageImg",src:a||"../images/noAvatar.png",alt:""}),Object(h.jsx)("p",{className:"messageText",children:null===t||void 0===t?void 0:t.text})]}),Object(h.jsx)("div",{className:"messageBottom",children:L()(null===t||void 0===t?void 0:t.createdAt).fromNow()})]})})},R=(n(425),n(499)),D=function(){var e=Object(o.h)().id,t=Object(l.c)((function(e){return e.AuthReducer})),n=t.user,s=t.conversationUser,c=Object(l.b)(),r=Object(a.useState)(),u=Object(p.a)(r,2),m=u[0],O=u[1],f=function(){var t=Object(j.a)(d.a.mark((function t(){var a,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/user/".concat(null===(a=s.find((function(t){return t._id===e})))||void 0===a?void 0:a.members.find((function(e){return e!==n._id}))),{method:"get"});case 2:return r=t.sent,t.next=5,r.json();case 5:i=t.sent,200===r.status?(O(i.message),c({type:"CURRENT_CHAT_USER",payload:i.message})):c({type:"CURRENT_CHAT_USER",payload:null});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[e]),Object(h.jsx)("div",{className:"profile",children:m?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)(R.a,{className:"backMobileButton"})}),Object(h.jsx)("img",{className:"profileImage",src:null===m||void 0===m?void 0:m.profilePicture,alt:""}),Object(h.jsx)("div",{className:"profileName",children:null===m||void 0===m?void 0:m.username})]}):Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(h.jsx)(b.a,{variant:"circle",width:50,height:50,style:{background:"rgb(0 0 0 / 20%)"}}),Object(h.jsx)(b.a,{variant:"text",width:100,height:30,style:{background:"rgb(0 0 0 / 20%)",marginLeft:"20px"}})]})})},A=(n(426),function(e){var t=e.currentConversation,n=Object(l.c)((function(e){return e.AuthReducer})),s=n.user,c=n.conversationUser,r=n.scrollBottom,i=n.currentChatUser,u=Object(l.b)(),b=Object(o.h)(),m=Object(a.useState)(),O=Object(p.a)(m,2),f=O[0],x=O[1],v=Object(a.useState)(),g=Object(p.a)(v,2),y=g[0],N=g[1],C=function(){var e=Object(j.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/message/".concat(t),{method:"get"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,x(a.message),200===n.status&&setTimeout((function(){u({type:"SCROLL_BOTTOM"})}),500);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){C()}),[t]);var w=function(){var e=Object(j.a)(d.a.mark((function e(n){var a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(null===y||void 0===y?void 0:y.trim())){e.next=12;break}return a={senderId:s._id,text:y,conversationId:t},e.next=5,fetch("/api/newMessage",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,x([].concat(Object(I.a)(f),[r.message])),setTimeout((function(){u({type:"SCROLL_BOTTOM"})}),100),N("");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(a.useRef)();return Object(a.useEffect)((function(){var e;null===(e=k.current)||void 0===e||e.scrollIntoView({behavior:"auto"})}),[f,r]),Object(h.jsx)("section",{className:b.id?"RightContainer mobileActive":"RightContainer",children:t?(null===c||void 0===c?void 0:c.some((function(e){return e._id===t})))?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"rightTopBar",children:Object(h.jsx)(D,{})}),Object(h.jsx)("div",{className:"rightMiddle",children:Object(h.jsx)("div",{className:"messages",children:Object(h.jsx)("div",{className:"message",children:f?f.length?f.map((function(e,t){return Object(h.jsx)("div",{ref:k,children:Object(h.jsx)(P,{currentChatUser:null===i||void 0===i?void 0:i.profilePicture,message:e,own:(null===e||void 0===e?void 0:e.senderId)===s._id?"own":""},t)})})):Object(h.jsx)("h1",{style:{alignSelf:"center",top:"50%",position:"absolute"},children:"No message\ud83d\ude2a"}):Object(h.jsx)("h1",{style:{alignSelf:"center",top:"50%",position:"absolute"},children:"Loading..."})})})}),Object(h.jsx)("div",{className:"rightBottom",children:Object(h.jsxs)("form",{onSubmit:w,className:"messageForm",children:[Object(h.jsx)("input",{value:y,onChange:function(e){return N(e.target.value)},placeholder:"Type Message...",type:"text",className:"messageInput"}),Object(h.jsx)("button",{className:"submitButton",type:"submit",children:Object(h.jsx)(U.a,{})})]})})]}):Object(h.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:"Nothis is found\ud83e\udd37\u200d\u2642\ufe0f\ud83e\udd26\u200d\u2642\ufe0f..."}):Object(h.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:"Select Your Friend To Chat\ud83d\udcac\ud83d\udc4f"})})}),B=function(){var e=Object(o.h)().id;return Object(h.jsxs)("div",{children:[Object(h.jsx)(T,{}),Object(h.jsxs)("section",{className:"mainMessage",children:[Object(h.jsx)(x,{currentConversation:e}),e?Object(h.jsx)(A,{currentConversation:e}):Object(h.jsx)(A,{})]})]})},F=n(53),H=n(22),M=(n(457),n(113)),G=n.n(M),J=n(505),V=n(507),z=n(506),W=n(502),X=n(503),Y=n(504),q=(n(458),n(501)),K=n(76),Q=function(e){var t=e.setHandlePopup,n=e.handlePopup,s=Object(l.b)(),c=Object(a.useState)(!0),r=Object(p.a)(c,2),i=r[0],o=r[1],u=Object(a.useState)({username:"",email:"",password:"",cpassword:""}),b=Object(p.a)(u,2),m=b[0],O=b[1],f=function(e){O(Object(H.a)(Object(H.a)({},m),{},Object(F.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.name&&t.email&&t.id)){e.next=8;break}return e.next=3,fetch("/api/registration",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.name,email:t.email,password:t.id,cpassword:t.id})});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,400===n.status?K.b.error(a.error.username||a.error.email||a.error.password||a.error.cpassword||a.error,{style:{padding:"10px",color:"#fff",fontSize:"16px",background:"red"},iconTheme:{primary:"white",secondary:"red"}}):(K.b.success(a.message,{style:{padding:"10px",color:"#fff",fontSize:"16px",background:"#62D346"},iconTheme:{primary:"white",secondary:"#62D346"}}),s({type:"LOGIN",payload:a.token}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/registration",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,400===n.status?K.b.error(a.error.username||a.error.email||a.error.password||a.error.cpassword||a.error,{style:{padding:"10px",color:"#fff",fontSize:"16px",background:"red"},iconTheme:{primary:"white",secondary:"red"}}):(K.b.success(a.message,{style:{padding:"10px",color:"#fff",fontSize:"16px",background:"#62D346"},iconTheme:{primary:"white",secondary:"#62D346"}}),s({type:"LOGIN",payload:a.token}),O({username:"",email:"",password:"",cpassword:""}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:n?"signupContainer":"hide signupContainer",children:[Object(h.jsx)(K.a,{position:"top-center",reverseOrder:!1}),Object(h.jsxs)("div",{className:"signupBox",children:[Object(h.jsx)(q.a,{className:"hideSignup",onClick:function(){return t(!1)}}),Object(h.jsx)("h4",{className:"signupTitle",children:"Sign Up"}),Object(h.jsx)("p",{className:"signupDesc",children:"It's quick and easy"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{onSubmit:v,autoComplete:"off",className:"signupForm",children:[Object(h.jsx)(J.a,{className:"fields",id:"outlined-basic",label:"Full Name",type:"text",autoComplete:"off",variant:"outlined",name:"username",value:m.username,onChange:f}),Object(h.jsx)(J.a,{className:"fields",id:"outlined-basic",label:"Email",type:"email",autoComplete:"off",variant:"outlined",name:"email",value:m.email,onChange:f}),Object(h.jsxs)("div",{className:"fields",children:[Object(h.jsx)(J.a,{id:"outlined-password-input",label:"Password",type:i?"text":"password",autoComplete:"off",variant:"outlined",name:"password",value:m.password,onChange:f}),Object(h.jsx)(V.a,{onClick:function(){return o(!i)},control:Object(h.jsx)(z.a,{icon:Object(h.jsx)(W.a,{}),checkedIcon:Object(h.jsx)(X.a,{})})})]}),Object(h.jsx)("div",{className:"fields",children:Object(h.jsx)(J.a,{id:"outlined-password-input",label:"Confirm Password",type:i?"text":"password",autoComplete:"off",variant:"outlined",name:"cpassword",value:m.cpassword,onChange:f})}),Object(h.jsx)("input",{className:"signupButton",type:"submit",value:"Sign Up"})]}),Object(h.jsxs)("div",{className:"alternateLogin",children:[Object(h.jsx)("div",{className:"signupWth",children:"Or"}),Object(h.jsx)(N.a,{className:"facebookButton",variant:"contained",color:"primary",children:Object(h.jsx)(G.a,{appId:"240379330783555",autoLoad:!1,fields:"name,email,picture",callback:x,icon:Object(h.jsx)(Y.a,{className:"facebookIcon"}),textButton:"Sign up with Facebook"})})]})]})]})},Z=n(75),$=(n(459),function(){var e=Object(l.b)(),t=Object(a.useState)(!1),n=Object(p.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(!1),i=Object(p.a)(r,2),o=i[0],u=i[1],b=Object(a.useState)({email:"",password:""}),m=Object(p.a)(b,2),O=m[0],f=m[1],x=function(e){f(Object(H.a)(Object(H.a)({},O),{},Object(F.a)({},e.target.name,e.target.value)))},v=function(){var t=Object(j.a)(d.a.mark((function t(n){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.email||!n.id){t.next=8;break}return t.next=3,fetch("https://shajib-chat.herokuapp.com/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,password:n.id})});case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,400===a.status?Z.b.error(s.error.email||s.error.password||s.error,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):(Z.b.success(s.message,{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e({type:"LOGIN",payload:s.token}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(j.a)(d.a.mark((function t(n){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("https://shajib-chat.herokuapp.com/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,400===a.status?Z.b.error(s.error.email||s.error.password||s.error,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):(Z.b.success(s.message,{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),f({email:"",password:""}),e({type:"LOGIN",payload:s.token}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("section",{className:"loginContainer",children:[Object(h.jsx)(Z.a,{}),Object(h.jsxs)("div",{className:"loginWrapper",children:[Object(h.jsxs)("div",{className:"loginLeft",children:[Object(h.jsx)("div",{className:"loginLeftTitle",children:"Chat-Box"}),Object(h.jsx)("div",{className:"loginLeftDesc",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magnam eum, atque sequi animi molestiae!"})]}),Object(h.jsx)("div",{className:"loginRight",children:Object(h.jsxs)("div",{className:"loginBox",children:[Object(h.jsxs)("form",{onSubmit:g,className:"loginForm",noValidate:!0,autoComplete:"off",children:[Object(h.jsx)(J.a,{onChange:x,value:O.email,name:"email",id:"outlined-basic",type:"email",label:"Email",variant:"outlined"}),Object(h.jsxs)("div",{className:"fields",children:[Object(h.jsx)(J.a,{onChange:x,value:O.password,name:"password",id:"outlined-basic",label:"Password",variant:"outlined",type:o?"text":"password"}),Object(h.jsx)(V.a,{onClick:function(){return u(!o)},control:Object(h.jsx)(z.a,{icon:Object(h.jsx)(W.a,{}),checkedIcon:Object(h.jsx)(X.a,{})})})]}),Object(h.jsx)(N.a,{className:"loginButton",type:"submit",variant:"contained",color:"primary",children:"Login"})]}),Object(h.jsx)("div",{className:"loginWith",children:"or "}),Object(h.jsx)("div",{className:"alternateLogin",children:Object(h.jsx)(N.a,{className:"facebookButton",variant:"contained",color:"primary",children:Object(h.jsx)(G.a,{appId:"240379330783555",autoLoad:!1,fields:"id,email,picture",callback:v,icon:Object(h.jsx)(Y.a,{className:"facebookIcon"})})})}),Object(h.jsx)("div",{className:"dontAccount",children:"Don't have any accont?"}),Object(h.jsx)(N.a,{onClick:function(){return c(!0)},className:"RegisterButton",type:"submit",variant:"contained",children:"Create New Account"})]})})]}),Object(h.jsx)(Q,{handlePopup:s,setHandlePopup:c})]})}),ee=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"404! Not found page..."}),Object(h.jsx)(i.b,{to:"/",children:"Back To Home"})]})};var te=function(){var e=Object(l.c)((function(e){return e.AuthReducer})).user;return Object(h.jsx)(i.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,children:e?Object(h.jsx)(B,{}):Object(h.jsx)($,{})}),Object(h.jsx)(o.a,{path:"/message/:id",exact:!0,children:e?Object(h.jsx)(B,{}):Object(h.jsx)($,{})}),Object(h.jsx)(o.a,{exact:!0,component:ee})]})})})},ne=n(155),ae=n(238),se={loading:!1,user:"",token:"",conversationUser:[],currentChatUser:null,newUserData:""},ce=function(e){var t=Object(ae.a)(e),n=new Date(1e3*t.exp);if(!(new Date>n))return localStorage.setItem("myTokenChat",e),t;localStorage.removeItem("myTokenChat")},re=localStorage.getItem("myTokenChat");if(re){var ie=ce(re);se.token=re,ie&&(se.user=ie)}else se.user="";var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return"LOGIN"===t.type?Object(H.a)(Object(H.a)({},e),{},{user:ce(t.payload),newUserData:ce(t.payload),token:t.payload}):"LOGOUT"===t.type?(localStorage.removeItem("myTokenChat"),Object(H.a)(Object(H.a)({},e),{},{user:"",token:""})):"ADD_CONVERSATIONS_USER"===t.type?Object(H.a)(Object(H.a)({},e),{},{conversationUser:t.payload}):"SCROLL_BOTTOM"===t.type?Object(H.a)(Object(H.a)({},e),{},{scrollBottom:Date.now()}):"CURRENT_CHAT_USER"===t.type?Object(H.a)(Object(H.a)({},e),{},{currentChatUser:t.payload}):"PROFILE_CHANGED"===t.type?Object(H.a)(Object(H.a)({},e),{},{newUserData:t.payload}):e},le=Object(ne.a)({AuthReducer:oe}),ue=Object(ne.b)(le,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(l.a,{store:ue,children:Object(h.jsx)(te,{})})}),document.getElementById("root"))}},[[460,1,2]]]);
//# sourceMappingURL=main.1419bd5d.chunk.js.map