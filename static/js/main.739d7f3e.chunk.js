(this["webpackJsonpuser-search"]=this["webpackJsonpuser-search"]||[]).push([[0],{10:function(e,r,a){e.exports={searchWrapper:"UserSearch_searchWrapper__POy3a",searchInput:"UserSearch_searchInput__2xoaS",searchIcon:"UserSearch_searchIcon__2SeR1"}},11:function(e,r,a){e.exports={userBody:"Users_userBody__Ie0Ft",preloader:"Users_preloader__3uUBs",rotate:"Users_rotate__1fhDw",preloaderWrapper:"Users_preloaderWrapper__2rAVC"}},24:function(e,r,a){e.exports={usersList:"UsersList_usersList__1z-VL"}},29:function(e,r,a){},30:function(e,r,a){},56:function(e,r,a){"use strict";a.r(r);var t,s=a(0),c=a.n(s),n=a(8),u=a.n(n),o=(a(29),a(30),a(9)),l=a(6),i=a.n(l),h=a(1),d=function(){return Object(h.jsx)("footer",{className:i.a.footer,children:Object(h.jsx)("div",{className:i.a.footerContent,children:Object(h.jsxs)("div",{className:i.a.footerBlock,children:[Object(h.jsx)("div",{className:i.a.title,children:"My Links"}),Object(h.jsx)("a",{href:"https://github.com/maxkrasiloff",children:"github"}),Object(h.jsx)("a",{href:"https://perm.hh.ru/resume/3854309cff08b835530039ed1f7a6754476945",children:"hh.ru"}),Object(h.jsx)("a",{href:"https://career.habr.com/mark-zolotaryov",children:"\u0425\u0430\u0431\u0440 \u041a\u0430\u0440\u044c\u0435\u0440\u0430"})]})})})},j=a(3),f=a(4),b=a(5),p=a(23),v=a.n(p).a.create({baseURL:"https://jsonplaceholder.typicode.com/",withCredentials:!0}),_={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.get("users/".concat(e)).then((function(e){return e.data}))},getUsersAvatar:function(){return v.get("photos/").then((function(e){return e.data}))}},m=Object(f.b)("SET_USERS",(function(e){return{payload:{users:e}}})),O=Object(f.b)("SET_AVATAR",(function(e){return{payload:{avatars:e}}})),x=Object(f.b)("SET_SEARCH_VALUE",(function(e){return{payload:{value:e}}})),g=Object(f.c)({users:[],searchValue:"",avatars:[]},(t={},Object(b.a)(t,m.type,(function(e,r){e.users=r.payload})),Object(b.a)(t,x.type,(function(e,r){e.searchValue=r.payload})),Object(b.a)(t,O.type,(function(e,r){e.avatars=r.payload})),t)),U=Object(j.b)({users:g}),V=Object(f.a)({reducer:U}),S=a(7),y=a.n(S),N=function(e){var r=e.name,a=e.username,t=e.avatar,s=e.setSearchValue,c="";return t&&(c=t.thumbnailUrl),Object(h.jsxs)("div",{className:y.a.userBlock,onClick:function(){s(r)},"aria-hidden":"true",children:[Object(h.jsx)("div",{className:y.a.userAvatar,style:{backgroundImage:"url(".concat(c,")")}}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:y.a.name,children:r}),Object(h.jsxs)("div",{className:y.a.username,children:["@",a]})]})]})},k=a(24),L=a.n(k),A=function(e){var r=e.users,a=e.setSearchValue,t=e.avatars;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:L.a.usersList,children:r&&r.map((function(e){return Object(h.jsx)(N,{name:e.name,username:e.username,avatar:t?t.find((function(r){return r.id===e.id})):null,setSearchValue:a},e.id)}))})})},E=a.p+"static/media/search.29a450ef.svg",F=a(10),B=a.n(F),I=function(e){var r=e.setSearchValue,a=e.searchValue;return Object(h.jsxs)("div",{className:B.a.searchWrapper,children:[Object(h.jsx)("div",{className:B.a.searchIcon,style:{backgroundImage:"url(".concat(E,")")}}),Object(h.jsx)("input",{className:B.a.searchInput,placeholder:"Search",value:a.value,onChange:function(e){r(e.currentTarget.value)}})]})},C=a(11),w=a.n(C),R=a.p+"static/media/preloader.cc35a836.svg",T=function(e){var r=e.users,a=e.setSearchValue,t=e.avatars,s=e.searchValue;return console.log(s.value),Object(h.jsxs)("div",{className:w.a.userBody,children:[Object(h.jsx)(I,{searchValue:s,setSearchValue:a}),r?Object(h.jsx)(A,{users:r,setSearchValue:a,avatars:t}):Object(h.jsx)("div",{className:w.a.preloaderWrapper,children:Object(h.jsx)("div",{className:w.a.preloader,style:{backgroundImage:"url(".concat(R,")")}})})]})},W=Object(j.c)(Object(o.b)((function(e){return{users:e.users,searchValue:e.users.searchValue}}),{getUsersFunc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(r){m(null),_.getUsers().then((function(a){r(m(a.filter((function(r){return r.name.toLowerCase().includes(e.toLowerCase())}))))}))}},getAvatarsFunc:function(){return function(e){_.getUsersAvatar().then((function(r){e(O(r))}))}},setSearchValueFunc:x}))((function(e){var r=e.users,a=e.getUsersFunc,t=e.getAvatarsFunc,c=e.setSearchValueFunc;return Object(s.useEffect)((function(){a(),t()}),[]),Object(h.jsx)(T,{users:r.users.users,avatars:r.avatars.avatars,setSearchValue:function(e){c(e),console.log(e),a(e)},searchValue:r.searchValue})})),z=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.a,{store:V,children:[Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(W,{})}),Object(h.jsx)(d,{})]})})};u.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root"))},6:function(e,r,a){e.exports={footer:"Footer_footer__24xzY",footerContent:"Footer_footerContent__2dODJ",footerBlock:"Footer_footerBlock__aaeh0",title:"Footer_title__2U0T6"}},7:function(e,r,a){e.exports={userBlock:"UsersListElement_userBlock__1vGDV",name:"UsersListElement_name__3eNlg",username:"UsersListElement_username__3-LvR",userAvatar:"UsersListElement_userAvatar__2NY1N"}}},[[56,1,2]]]);
//# sourceMappingURL=main.739d7f3e.chunk.js.map