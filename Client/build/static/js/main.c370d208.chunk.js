(this["webpackJsonpsample-client"]=this["webpackJsonpsample-client"]||[]).push([[0],{100:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t){},143:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=143},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(73),o=n.n(s),r=(n(81),n(7)),a=(n(82),n(11)),u=n(38),l=n.n(u),j=(n(100),n(26)),d=n(3),h=Object(c.createContext)(),b=function(e){var t=e.reducer,n=e.initialState,i=e.children;return Object(d.jsx)(h.Provider,{value:Object(c.useReducer)(t,n),children:i})},p=function(){return Object(c.useContext)(h)},f=n(48),O=f.a.initializeApp({apiKey:"AIzaSyBYdLzZfqH5kl4gKLluoVve1w8ga1imSqE",authDomain:"the-l-game-by-ng.firebaseapp.com",projectId:"the-l-game-by-ng",storageBucket:"the-l-game-by-ng.appspot.com",messagingSenderId:"839023234836",appId:"1:839023234836:web:6f0741c6be4ad30d127c01",measurementId:"G-LT1N60VCPZ"}).firestore(),m=f.a.auth();var v=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(c.useRef)(null),o=Object(a.f)(),u=p(),h=Object(r.a)(u,2),b=h[0].user;return h[1],Object(d.jsxs)("div",{className:"home",children:[Object(d.jsxs)("div",{className:"home_left",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("p",{children:"Join"})," the smartest boardgame available in the ",Object(d.jsx)("p",{children:"world"})]}),Object(d.jsx)("h2",{children:"No download necessary - play directly from your web browser"}),Object(d.jsx)("h2",{children:"With your friends and thousands of players from the whole world"}),Object(d.jsxs)("div",{className:"home_button",children:[Object(d.jsx)("button",{className:"btn",onClick:function(){b?l.a.get("https://the-l-game-1.herokuapp.com/join").then((function(e){null===o||void 0===o||o.push("/join?id=".concat(e.data.link))})):o.push("/login")},type:"",children:"Create Room"}),Object(d.jsx)("button",{className:"btn",onClick:function(){i(!n)},type:"",children:"Join Room"}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{className:"room_input",ref:s,type:"text",placeholder:"Room Id"})," ",Object(d.jsx)("button",{className:"btn",onClick:function(){b?l.a.get("https://the-l-game-1.herokuapp.com/get_rooms").then((function(e){e.data.includes(s.current.value)?null===o||void 0===o||o.push("/join?id=".concat(s.current.value)):alert("Enter A valid room ID")})):o.push("/login")},children:"JOIN"})]})]})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)(j.b,{to:!b&&"login",children:[Object(d.jsx)("h2",{children:"Hello "+((null===b||void 0===b?void 0:b.displayName)||(null===b||void 0===b?void 0:b.email)||"Guest")}),b?Object(d.jsx)("h2",{onClick:function(){m.signOut()},children:"Sign Out"}):Object(d.jsx)("h2",{children:"Sign In"})]}),Object(d.jsx)(j.b,{to:"/tutorial",children:Object(d.jsx)("h2",{children:"Tutorial"})})]})]})},x=(n(111),n.p+"static/media/video-1.2db35935.mp4"),g=n.p+"static/media/video-2.63117a36.mp4";var w=function(){var e=[x,g,"Move your L-piece by selection cells on the grid.","Move one of the neutral pieces or skip the step"],t=Object(c.useState)(0),n=Object(r.a)(t,2),i=n[0],s=n[1],o=Object(c.useState)(e[1]),a=Object(r.a)(o,2),u=a[0],l=a[1],j=Object(c.useState)(e[3]),h=Object(r.a)(j,2),b=h[0],p=h[1];return Object(c.useEffect)((function(){u===e[0]?(l(e[1]),p(e[3])):(l(e[0]),p(e[2])),function(e){var t=document.getElementById("video");t.src=e,t.play()}(u)}),[i]),Object(d.jsx)("div",{className:"tutorial",children:Object(d.jsxs)("div",{className:"tutorial-section",children:[Object(d.jsx)("div",{className:"video",children:Object(d.jsx)("video",{id:"video",width:"750",height:"400",autoPlay:!0,muted:!0,controls:!0,loop:!0,children:Object(d.jsx)("source",{type:"video/mp4"})})}),Object(d.jsx)("div",{className:"content",children:b}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(e){s(!i)},className:"button",children:"Next"})})]})})},y=(n(112),n(113),n(74)),S=n.n(y),N=n(75),E=n.n(N),k=n(40);n(144);var _=function(e){var t=Math.floor(e/4),n=Math.floor(e%4),c=[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]],i=[[]],s=[];if(t+2<4){for(var o=0;o<3;)s.push(c[t+o][n]),o++;n+1<4&&(s.push(c[t+2][n+1]),i.push(s.map((function(e,t){return e}))),s.pop()),n-1>=0&&(s.push(c[t+2][n-1]),i.push(s.map((function(e,t){return e})))),s=[]}if(t+1<4){for(var r=0;r<2;)s.push(c[t+r][n]),r++;n+2<4&&(s.push(c[t+1][n+1]),s.push(c[t+1][n+2]),i.push(s.map((function(e,t){return e}))),s.splice(2,2)),n-2>=0&&(s.push(c[t+1][n-1]),s.push(c[t+1][n-2]),i.push(s.map((function(e,t){return e})))),s=[]}if(t-2>=0){for(var a=0;a<3;)s.push(c[t-a][n]),a++;n+1<4&&(s.push(c[t-2][n+1]),i.push(s.map((function(e,t){return e}))),s.splice(3,1)),n-1>=0&&(s.push(c[t-2][n-1]),i.push(s.map((function(e,t){return e})))),s=[]}if(t-1>=0){for(var u=0;u<2;)s.push(c[t-u][n]),u++;n+2<4&&(s.push(c[t-1][n+1]),s.push(c[t-1][n+2]),i.push(s.map((function(e,t){return e}))),s.splice(2,2)),n-2>=0&&(s.push(c[t-1][n-1]),s.push(c[t-1][n-2]),i.push(s.map((function(e,t){return e})))),s=[]}if(n+2<4){for(var l=0;l<3;)s.push(c[t][n+l]),l++;t+1<4&&(s.push(c[t+1][n+2]),i.push(s.map((function(e,t){return e}))),s.splice(3,1)),t-1>=0&&(s.push(c[t-1][n+2]),i.push(s.map((function(e,t){return e})))),s=[]}if(n+1<4){for(var j=0;j<2;)s.push(c[t][n+j]),j++;t+2<4&&(s.push(c[t+1][n+1]),s.push(c[t+2][n+1]),i.push(s.map((function(e,t){return e}))),s.splice(2,2)),t-2>=0&&(s.push(c[t-1][n+1]),s.push(c[t-2][n+1]),i.push(s.map((function(e,t){return e})))),s=[]}if(n-2>=0){for(var d=0;d<3;)s.push(c[t][n-d]),d++;t+1<4&&(s.push(c[t+1][n-2]),i.push(s.map((function(e,t){return e}))),s.splice(3,1)),t-1>=0&&(s.push(c[t-1][n-2]),i.push(s.map((function(e,t){return e})))),s=[]}if(n-1>=0){for(var h=0;h<2;)s.push(c[t][n-h]),h++;t+2<4&&(s.push(c[t+1][n-1]),s.push(c[t+2][n-1]),i.push(s.map((function(e,t){return e}))),s.splice(2,2)),t-2>=0&&(s.push(c[t-1][n-1]),s.push(c[t-2][n-1]),i.push(s.map((function(e,t){return e})))),s=[]}return i},C=function(e,t){for(var n=[[1,2,3,4],[5,6,7,8],[9,1,1,1],[1,1,1,1]],c=0;c<4;c++)for(var i=0;i<4;i++)n[c][i]=e[4*c+i];var s,o=0;"red"==t?(1,s=2):(2,s=1);for(var r=0;r<4;r++)for(var a=0;a<4;a++)n[r][a]!=s&&3!=n[r][a]&&(r+1<4&&n[r+1][a]!=s&&3!=n[r+1][a]&&(a+2<4&&3!=n[r+1][a+1]&&n[r+1][a+1]!=s&&3!=n[r+1][a+2]&&n[r+1][a+2]!=s&&o++,a-2>=0&&3!=n[r+1][a-1]&&n[r+1][a-1]!=s&&3!=n[r+1][a-2]&&n[r+1][a-2]!=s&&o++),r-1>=0&&n[r-1][a]!=s&&3!=n[r-1][a]&&(a+2<4&&3!=n[r-1][a+1]&&n[r-1][a+1]!=s&&3!=n[r-1][a+2]&&n[r-1][a+2]!=s&&o++,a-2>=0&&3!=n[r-1][a-1]&&n[r-1][a-1]!=s&&3!=n[r-1][a-2]&&n[r-1][a-2]!=s&&o++),a+1<4&&n[r][a+1]!=s&&3!=n[r][a+1]&&(r+2<4&&n[r+1][a+1]!=s&&3!=n[r+1][a+1]&&n[r+2][a+1]!=s&&3!=n[r+2][a+1]&&o++,r-2>=0&&n[r-1][a+1]!=s&&3!=n[r-1][a+1]&&n[r-2][a+1]!=s&&3!=n[r-2][a+1]&&o++),a-1>=0&&n[r][a-1]!=s&&3!=n[r][a-1]&&(r+2<4&&n[r+1][a-1]!=s&&3!=n[r+1][a-1]&&n[r+2][a-1]!=s&&3!=n[r+2][a-1]&&o++,r-2>=0&&n[r-1][a-1]!=s&&3!=n[r-1][a-1]&&n[r-2][a-1]!=s&&3!=n[r-2][a-1]&&o++));return o-1};var I=function(e){var t,n,i,s=e.color,o=e.socket,a=["white","red","blue","white","pink","lightblue","#0deaff"],u=Object(c.useState)([3,0,0,0,1,2,2,2,1,1,1,2,0,0,0,3]),l=Object(r.a)(u,2),j=l[0],h=l[1],b=p(),f=Object(r.a)(b,2),m=f[0],v=m.user,x=m.win,g=m.lost,w=m.played,y=(m.win_perc,f[1]),S=Object(c.useState)(4),N=Object(r.a)(S,2),E=(N[0],N[1],Object(c.useState)([])),I=Object(r.a)(E,2),A=I[0],T=I[1],P=Object(c.useState)([]),D=Object(r.a)(P,2),L=D[0],R=D[1],B=Object(c.useState)(!1),M=Object(r.a)(B,2),U=M[0],G=M[1],W=Object(c.useState)([]),F=Object(r.a)(W,2),Y=F[0],J=F[1],q=Object(c.useState)(!1),z=Object(r.a)(q,2),H=z[0],K=z[1],V=Object(c.useState)(-1),Z=Object(r.a)(V,2),Q=Z[0],X=Z[1],$=Object(c.useState)(null),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(!1),ie=Object(r.a)(ce,2),se=ie[0],oe=ie[1],re=Object(c.useState)(C(j)),ae=Object(r.a)(re,2),ue=ae[0],le=ae[1],je=Object(c.useState)(!1),de=Object(r.a)(je,2),he=de[0],be=de[1],pe=Object(c.useState)(!1),fe=Object(r.a)(pe,2),Oe=fe[0],me=fe[1];null===o||void 0===o||o.on("state-changed",(function(e){h(e)})),o.on("your-turn",(function(){oe(!0),le(C(j,s))})),o.on("YOU-WIN",(function(){O.collection("users").doc(null===v||void 0===v?void 0:v.uid).set({win:x+1,lost:g,played:w+1,win_perc:(x+1)/(w+1)*100}),y({type:"SET_DATA",win:x+1,lost:g,played:w+1,win_perc:(x+1)/(w+1)*100}),me(!0),oe(!1)})),Object(c.useEffect)((function(){0===ue&&(null===o||void 0===o||o.emit("GAME-END"),O.collection("users").doc(null===v||void 0===v?void 0:v.uid).set({win:x,lost:g+1,played:w+1,win_perc:x/(w+1)*100}),y({type:"SET_DATA",win:x,lost:g+1,played:w+1,win_perc:x/(w+1)*100}),be(!0),oe(!1))}),[ue]),"red"===s?(t=1,n=2,i=4):(t=2,n=1,i=5),Object(c.useEffect)((function(){if(U){for(var e=j,n=0;n<j.length;n++)e[n]!==t&&e[n]!==i||(e[n]=0);for(var c=0;c<L.length;c++)e[L[c]]=t;h(e),we(!1),R([]),G(!1),T([])}}),[U]),Object(c.useEffect)((function(){if(te){var e=j;e[Q]=0,e[te]=3,h(e),null===o||void 0===o||o.emit("change-state",e),le(C(j,s)),K(!1),oe(!1),null===o||void 0===o||o.emit("move-complete",e),X(-1)}}),[te]),Object(c.useEffect)((function(){oe("red"===s),K(!1)}),[]),Object(c.useRef)(null);var ve=Object(c.useState)(!1),xe=Object(r.a)(ve,2),ge=xe[0],we=xe[1];return Object(c.useEffect)((function(){if(4===A.length){for(var e=1,t=0;t<Y.length;t++){e=1;for(var n=0;n<A.length;n++)Y[t][n]!==A[n]&&(e=0);if(e)break}for(var c=1,s=A.sort((function(e,t){return e-t})),r=L.sort((function(e,t){return e-t})),a=0;a<4;a++)if(s[a]!==r[a]){c=0;break}if(c&&(e=0),e){for(var u=j,l=0;l<u.length;l++)u[l]===i&&(u[l]=0);oe(!1),K(!0),h(u),null===o||void 0===o||o.emit("change-state",u)}else G(!0);we(!1),T([])}}),[A]),Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("h1",{style:{color:"".concat(se||H?a[t]:a[n])},children:se||H?"Your Turn":"".concat(a[n],"'s turn")}),Object(d.jsx)("div",{className:"board",children:Array(16).fill().map((function(e,n){return Object(d.jsx)("div",{className:"square",id:n,style:{background:"".concat(a[j[n]])},onClick:function(e){var c=Number(e.target.id);if(H){if(3===j[c]){X(c);var s=j;s[c]=6,h(s)}if(0===j[c]&&-1!==Q){ne(c);var o=j;o[Q]=0,h(o)}}if(se){if(0!==j[c]&&j[c]!==t&&j[c]!==i)return;if(!1===ge){we(!0),R([]),J(_(c)),T((function(e){return[].concat(Object(k.a)(e),[c])}));for(var r=j,a=function(e){r[e]===t&&(r[e]=i,R((function(t){return[].concat(Object(k.a)(t),[e])})))},u=0;u<r.length;u++)a(u);r[n]=t,h(r)}}},onMouseOver:function(e){var n=Number(e.target.id);if(ge&&!A.includes(n)){if(j[n]!==t&&0!==j[n]&&j[n]!==i)return void G(!0);T((function(e){return[].concat(Object(k.a)(e),[n])}));var c=j;c[n]=t,h(c)}},children:(3===j[n]||6===j[n])&&Object(d.jsx)("img",{id:n,className:"image",src:"https://hwwmath.looiwenli.com/loonie.gif",alt:""})},n)}))}),Object(d.jsxs)("h1",{className:"moves",children:[ue," Possible No. of Moves"]}),he&&Object(d.jsx)("h1",{className:"moves",children:" You LOST"}),Oe&&Object(d.jsx)("h1",{className:"moves",children:" You WON"}),H&&Object(d.jsx)("button",{className:"skip",onClick:function(){K(!1),oe(!1),null===o||void 0===o||o.emit("move-complete",j),X(-1)},children:"Skip"})]})},A=(n(145),n(160));var T=function(){var e=p(),t=Object(r.a)(e,2),n=t[0],c=n.win,i=n.lost,s=n.played,o=n.win_perc,a=(t[1],window.location.search),u=new URLSearchParams(a).get("id");return Object(d.jsxs)("div",{className:"room",children:[Object(d.jsx)(A.a,{className:"avatar"}),Object(d.jsxs)("div",{className:"stats",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Games Played"}),Object(d.jsx)("h2",{children:s})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Games Won"}),Object(d.jsx)("h2",{children:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Games Lost"}),Object(d.jsx)("h2",{children:i})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Win Percentage"}),Object(d.jsx)("h2",{children:o})]})]}),Object(d.jsxs)("h2",{children:["Your Room ID is ",u]})]})};var P=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)("blue"),o=Object(r.a)(s,2),a=o[0],u=o[1],l=Object(c.useState)(null),j=Object(r.a)(l,2),h=j[0],b=j[1],f=Object(c.useState)(0),O=Object(r.a)(f,2),m=(O[0],O[1]),v=p(),x=Object(r.a)(v,2),g=x[0].user;return x[1],Object(c.useEffect)((function(){var e=new E.a(null===g||void 0===g?void 0:g.uid),t=S()("https://the-l-game-1.herokuapp.com/");b(t),t.on("connect",(function(){var n=window.location.search,c=new URLSearchParams(n).get("id"),s={userID:null===g||void 0===g?void 0:g.uid,roomID:c};t.emit("join-room",s),t.on("new-user-connect",(function(e){})),t.on("get-users",(function(t){if(t[0]==(null===g||void 0===g?void 0:g.uid)){u("red"),i(t[1]);e.connect(t[1])}else u("blue"),i(t[0])}))})),e.on("connection",(function(e){i(e.peer)})),t.on("state-changed",(function(e){m(e)})),t.on("user-disconnected",(function(e){})),t.on("disconnect",(function(){e.destroy()})),t.on("error",(function(e){})),e.on("error",(function(t){e.reconnect()}))}),[]),n?Object(d.jsx)(I,{color:a,socket:h}):Object(d.jsx)(T,{})};n(146);var D=function(){var e=p(),t=(Object(r.a)(e,1)[0],Object(a.f)()),n=Object(c.useState)(""),i=Object(r.a)(n,2),s=i[0],o=i[1],u=Object(c.useState)(""),l=Object(r.a)(u,2),h=l[0],b=l[1];return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("h2",{className:"login_head",children:"THE L-GAME"})}),Object(d.jsxs)("div",{className:"login_container",children:[Object(d.jsx)("h1",{children:"Sign In"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("h5",{children:"Email"}),Object(d.jsx)("input",{type:"text",value:s,placeholder:"Email",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("h5",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:h,placeholder:"Password",onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),m.signInWithEmailAndPassword(s,h).then((function(e){t.goBack()})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign In"}),Object(d.jsx)("p",{children:"By signing-in you agree to the L-Game's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),m.createUserWithEmailAndPassword(s,h).then((function(e){e&&t.goBack()})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",type:"",children:"Create an Account"})]})]})]})};var L=function(){var e=p(),t=Object(r.a)(e,2),n=(t[0].user,t[1]);return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){if(e){var t={win:0,lost:0,played:0,win_perc:0};O.collection("users").doc(null===e||void 0===e?void 0:e.uid).get().then((function(c){c.exists&&(t=c.data()),n({type:"SET_USER",user:e,win:t.win,lost:t.lost,played:t.played,win_perc:t.win_perc})}))}else m.signOut(),n({type:"SET_USER",user:null})}))}),[]),Object(d.jsx)(j.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(a.c,{children:[Object(d.jsx)(a.a,{path:"/login",children:Object(d.jsx)(D,{})}),Object(d.jsx)(a.a,{path:"/join",children:Object(d.jsx)(P,{})}),Object(d.jsx)(a.a,{path:"/tutorial",children:Object(d.jsx)(w,{})}),Object(d.jsx)(a.a,{path:"/",children:Object(d.jsx)(v,{})})]})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))},B=n(29),M=function(e,t){switch(console.log(t),t.type){case"SET_USER":return console.log("here",t.user),Object(B.a)(Object(B.a)({},e),{},{user:t.user,win:t.win,lost:t.lost,played:t.played,win_perc:t.win_perc});case"SET_DATA":return console.log("here",t.user),Object(B.a)(Object(B.a)({},e),{},{win:t.win,lost:t.lost,played:t.played,win_perc:t.win_perc});default:return Object(B.a)({},e)}};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{initialState:{user:null,win:0,played:0,lost:0,win_perc:0},reducer:M,children:Object(d.jsx)(L,{})})}),document.getElementById("root")),R()},81:function(e,t,n){},82:function(e,t,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.c370d208.chunk.js.map