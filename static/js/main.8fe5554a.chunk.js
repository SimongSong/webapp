(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,n,s){},17:function(e,n,s){},18:function(e,n,s){},25:function(e,n,s){},27:function(e,n,s){},28:function(e,n,s){},29:function(e,n,s){"use strict";s.r(n);var c=s(1),a=s.n(c),t=s(5),i=s.n(t),o=(s(17),s(18),s(4)),r=s(2),l=s(6),j=Object(l.b)({name:"component",initialState:{state:"idle",contentState:"main",showTouch:!1,showMenu:!1,showTrophy:!1,fishing:!1,fishBite:!1,fish:{name:"",size:"",text:""},coordinate:{x:0,y:0}},reducers:{setContentState:function(e,n){e.contentState=n.payload},setShowTouch:function(e,n){e.showTouch=n.payload},setShowMenu:function(e,n){e.showMenu=n.payload},setShowFishingTrophy:function(e,n){console.log("DISPATCHED"),e.showTrophy=n.payload},setFishing:function(e,n){e.fishing=n.payload},setCoordinates:function(e,n){e.coordinate=n.payload},setFishBite:function(e,n){e.fishBite=n.payload},setFish:function(e,n){e.fish=n.payload}}}),b=j.actions,h=b.setFishBite,d=b.setContentState,O=b.setShowTouch,m=b.setShowMenu,p=(b.setShowFish,b.setFish),x=b.setShowFishingTrophy,u=b.setFishing,f=b.setCoordinates,g=function(e){return e.component.contentState},N=function(e){return e.component.showTouch},v=function(e){return e.component.showMenu},S=function(e){return e.component.showTrophy},y=function(e){return e.component.fishing},L=function(e){return e.component.coordinate},w=function(e){return e.component.fishBite},k=function(e){return e.component.fish},C=j.reducer,T=(s(25),s(0));var M=function(){var e=Object(r.c)(L),n=Object(r.c)(y),s=Object(r.c)(w),a=Object(r.b)(),t=Object(c.useState)({x:-10,y:-10}),i=Object(o.a)(t,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){var c;if(n){var t=0;j(e);var i=0;!function n(){(c=window.requestAnimationFrame(n),i+=.01,s)?++t>=Math.floor(500*Math.random())+10&&(a(h(!1)),t=0):22===Math.floor(130*Math.random())&&a(h(!0));j({x:e.x,y:e.y+10*Math.sin(i*(s?50:5))})}()}else j({x:-10,y:-10});return function(){c&&window.cancelAnimationFrame(c)}}),[n,s]),Object(T.jsx)("div",{id:"Background",children:Object(T.jsxs)("svg",{children:[Object(T.jsx)("line",{x1:l.x,y1:"0",x2:l.x,y2:"100%"}),Object(T.jsx)("rect",{x:l.x-2.5,y:l.y+5,width:"5",height:"10",fill:"red"}),Object(T.jsx)("rect",{x:l.x-2.5,y:l.y-15,width:"5",height:"10",fill:"white"}),Object(T.jsx)("circle",{className:"Dot",cx:l.x,cy:l.y,r:"10",fill:"white"}),Object(T.jsx)("path",{d:"M".concat(l.x-10,",").concat(l.y," a1,1 0 0,0 20,0"),fill:"red"})]})})},F=s.p+"static/media/main.f6a7dcf3.png";var B=function(){var e=Object(r.b)();return Object(T.jsx)("div",{id:"MainTitle",children:Object(T.jsxs)("div",{className:"Wrapper",children:[Object(T.jsx)("img",{className:"MainImage",src:F,alt:""}),Object(T.jsxs)("span",{className:"Text",children:[Object(T.jsx)("span",{className:"Title",children:"Hello"}),Object(T.jsx)("span",{className:"Korean",children:"(\uc548\ub155)"}),"!",Object(T.jsx)("br",{}),"My name is",Object(T.jsx)("span",{className:"Emphasis",children:" SIMONG SONG"}),Object(T.jsx)("span",{className:"Korean",children:"(\uc1a1\uc2dc\ubabd)"}),Object(T.jsx)("br",{}),"I am a ",Object(T.jsx)("span",{className:"Emphasis",children:"SOFTWARE DEVELOPER"}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"I made this website to talk about my experience/ play cool fishing game",Object(T.jsx)("span",{className:"Button",children:Object(T.jsx)("span",{onClick:function(){return e(d("about"))},children:"To learn more about me click here"})}),Object(T.jsx)("span",{className:"Button",children:Object(T.jsx)("span",{onClick:function(){return e(d("tutorial"))},children:"To learn how to play the game click here"})})]})]})})},J=(s(27),s.p+"static/media/fishing.b2542cf7.png"),A=s.p+"static/media/camera.a8193fa4.png";var z=function(){var e=Object(r.b)();return Object(T.jsxs)("div",{id:"HowToPlay",children:[Object(T.jsx)("div",{className:"BackButton",onClick:function(){return e(d("main"))},children:"BACK"}),Object(T.jsxs)("div",{className:"Info",children:["Ok! So Let's Catch some fish!",Object(T.jsx)("br",{}),"First click PLAY BUTTON on Bottom Left Corner.",Object(T.jsx)("br",{}),"You see Two Icons",Object(T.jsx)("br",{}),Object(T.jsx)("img",{className:"IconSample",src:J,alt:""}),"This is Fishing Buton. Click this to Fish!",Object(T.jsx)("br",{}),Object(T.jsx)("img",{className:"IconSample",src:A,alt:""}),"This is Record Button. Click this to see the biggest fish you caught!",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsxs)("svg",{children:[Object(T.jsx)("rect",{x:50,y:80,width:"20",height:"40",fill:"red"}),Object(T.jsx)("rect",{x:50,y:0,width:"20",height:"40",fill:"white"}),Object(T.jsx)("circle",{className:"Dot",cx:60,cy:60,r:"40",fill:"white"}),Object(T.jsx)("path",{d:"M".concat(20,",",60," a1,1 0 0,0 80,0"),fill:"red"})]}),"Drop the Floater by clicking on the screen after pressing Fishing Button. Then once Floater moves vigorously, reel in the hook by pressing the small Floater screen on Bottom Left Corner."]})]})};var I=function(){var e=Object(r.b)();return Object(T.jsxs)("div",{id:"AboutMe",children:[Object(T.jsx)("div",{className:"BackButton",onClick:function(){return e(d("main"))},children:"BACK"}),Object(T.jsxs)("div",{className:"Info",children:[Object(T.jsx)("br",{}),Object(T.jsxs)("span",{className:"Big Line",children:["Hi! I am ",Object(T.jsx)("b",{children:"Simong SONG"}),"."]}),Object(T.jsx)("span",{className:"Divider"}),Object(T.jsxs)("span",{className:"Line",children:["On May 2020, I graduated from ",Object(T.jsx)("b",{children:"University of British Columbia"})," ","with a Bachelor\u2019s degree in"," ",Object(T.jsx)("b",{children:"Applied Science(Computer Engineering)"}),"."]}),Object(T.jsx)("span",{className:"Divider"}),Object(T.jsx)("span",{children:"At my current job I am mostly using:"}),Object(T.jsxs)("span",{children:[Object(T.jsx)("span",{className:"LOption Language",children:"JavaScript"}),Object(T.jsx)("span",{className:"LOption Language",children:"GoLang"}),Object(T.jsx)("span",{className:"LOption Web",children:"React JS"}),Object(T.jsx)("span",{className:"LOption Web",children:"Vue JS"}),Object(T.jsx)("span",{className:"LOption Web",children:"Electron JS"}),Object(T.jsx)("span",{className:"LOption Tool",children:"Docker"}),Object(T.jsx)("span",{className:"LOption Tool",children:"Kubernetes"}),Object(T.jsx)("span",{className:"LOption ETC",children:"HTML/CSS"}),Object(T.jsx)("span",{className:"LOption ETC",children:"SQL"})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"In the past, I have worked with:"}),Object(T.jsxs)("span",{children:[Object(T.jsx)("span",{className:"LOption Language",children:"Python"}),Object(T.jsx)("span",{className:"LOption Language",children:"Java"}),Object(T.jsx)("span",{className:"LOption Language",children:"PHP"}),Object(T.jsx)("span",{className:"LOption Language",children:"C#"}),Object(T.jsx)("span",{className:"LOption Web",children:"Angular JS"}),Object(T.jsx)("span",{className:"LOption Web",children:"Django"}),Object(T.jsx)("span",{className:"LOption Tool",children:"AWS"})]}),Object(T.jsx)("span",{className:"Divider"}),Object(T.jsxs)("span",{children:["Before coming to ",Object(T.jsx)("b",{children:"Canada"})," I lived in:",Object(T.jsx)("br",{}),Object(T.jsx)("span",{className:"Country",children:"[South Korea]_"}),Object(T.jsx)("span",{className:"Country",children:"[The Philippines]_"}),Object(T.jsx)("span",{className:"Country",children:"[South Africa]_"}),Object(T.jsx)("span",{className:"Country",children:"[Zambia]"})]}),Object(T.jsx)("span",{className:"Divider"}),Object(T.jsxs)("span",{children:["Currently I am working at:",Object(T.jsxs)("span",{className:"Job",children:[Object(T.jsx)("span",{className:"JobCompany",children:"Ubisoft"}),Object(T.jsx)("span",{className:"JobTitle",children:"Online Programmer"}),Object(T.jsx)("span",{className:"JobLength",children:"From June 2020 till now"}),Object(T.jsxs)("span",{className:"Description",children:[Object(T.jsx)("span",{className:"LOption Key",children:"Fullstack"}),Object(T.jsx)("span",{className:"LOption Language",children:"JavaScript"}),Object(T.jsx)("span",{className:"LOption Language",children:"GoLang"}),Object(T.jsx)("span",{className:"LOption Web",children:"React JS"}),Object(T.jsx)("span",{className:"LOption Web",children:"Vue JS"}),Object(T.jsx)("span",{className:"LOption Web",children:"Electron JS"}),Object(T.jsx)("span",{className:"LOption Tool",children:"Docker"}),Object(T.jsx)("span",{className:"LOption Tool",children:"Kubernetes"}),Object(T.jsx)("span",{className:"LOption ETC",children:"HTML/CSS"}),Object(T.jsx)("span",{className:"LOption ETC",children:"SQL"})]})]})]}),Object(T.jsx)("span",{className:"Divider"}),Object(T.jsxs)("span",{children:["I have also worked at:",Object(T.jsxs)("span",{className:"Job",children:[Object(T.jsx)("span",{className:"JobCompany",children:"The Digital Lab, BC Children\u2019s Hospital"}),Object(T.jsx)("span",{className:"JobTitle",children:"Software(Web) Developer (Part-time, Full-time)"}),Object(T.jsx)("span",{className:"JobLength",children:"From Sept 2019 to May 2020"}),Object(T.jsxs)("span",{className:"Description",children:[Object(T.jsx)("span",{className:"LOption Key",children:"Fullstack"}),Object(T.jsx)("span",{className:"LOption Language",children:"JavaScript"}),Object(T.jsx)("span",{className:"LOption Language",children:"PHP"}),Object(T.jsx)("span",{className:"LOption Language",children:"Python"}),Object(T.jsx)("span",{className:"LOption Web",children:"React JS"}),Object(T.jsx)("span",{className:"LOption Web",children:"Django"})]})]}),Object(T.jsxs)("span",{className:"Job",children:[Object(T.jsx)("span",{className:"JobCompany",children:"The Shah Lab, BC Cancer"}),Object(T.jsx)("span",{className:"JobTitle",children:"Software Developer for Molecular Oncology Research (Internship)"}),Object(T.jsx)("span",{className:"JobLength",children:"From Jan 2019 to Aug 2019"}),Object(T.jsxs)("span",{className:"Description",children:[Object(T.jsx)("span",{className:"LOption Key",children:"Fullstack"}),Object(T.jsx)("span",{className:"LOption Key",children:"Data Visualization"}),Object(T.jsx)("span",{className:"LOption Language",children:"Python"}),Object(T.jsx)("span",{className:"LOption Language",children:"JavaScript"}),Object(T.jsx)("span",{className:"LOption Web",children:"Django"}),Object(T.jsx)("span",{className:"LOption Web",children:"Vue JS"}),Object(T.jsx)("span",{className:"LOption Tool",children:"Docker"}),Object(T.jsx)("span",{className:"LOption Tool",children:"Azure"})]})]}),Object(T.jsxs)("span",{className:"Job",children:[Object(T.jsx)("span",{className:"JobCompany",children:"realtor.com"}),Object(T.jsx)("span",{className:"JobTitle",children:"Android Automation Engineer/Quality Engineer (Internship)"}),Object(T.jsx)("span",{className:"JobLength",children:"From May 2018 to December 2018"}),Object(T.jsxs)("span",{className:"Description",children:[Object(T.jsx)("span",{className:"LOption Key",children:"Testing"}),Object(T.jsx)("span",{className:"LOption Key",children:"Automation"}),Object(T.jsx)("span",{className:"LOption Key",children:"Android"}),Object(T.jsx)("span",{className:"LOption Language",children:"Python"}),Object(T.jsx)("span",{className:"LOption Language",children:"Java"}),Object(T.jsx)("span",{className:"LOption Tool",children:"Jenkins"}),Object(T.jsx)("span",{className:"LOption Tool",children:"AWS"})]})]})]}),Object(T.jsx)("span",{className:"Divider"}),Object(T.jsxs)("span",{children:["CONTACT ME!",Object(T.jsx)("br",{}),Object(T.jsx)("span",{className:"Contact",children:"email:simong.song95[at][gmail.com]"}),Object(T.jsx)("br",{}),Object(T.jsxs)("span",{className:"Contact",children:["linkedin: ",Object(T.jsx)("a",{href:"https://www.linkedin.com/in/simongsong/",children:"linkedin.com/in/simongsong"})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{})]})]})]})},D={common:[{id:1,name:"Common Carp",maxSize:80,minSize:10},{id:2,name:"Bluegill",maxSize:30,minSize:5},{id:3,name:"Minnow",maxSize:5,minSize:3},{id:4,name:"Signal Crayfish",maxSize:9,minSize:3},{id:5,name:"Red Ear slider",maxSize:40,minSize:10},{id:6,name:"Bullfrog Tadpole",maxSize:15,minSize:1},{id:7,name:"Neon Tetra",maxSize:4,minSize:1}],rare:[{id:8,name:"Blue Catfish",maxSize:165,minSize:30},{id:9,name:"Yellow Perch",maxSize:25,minSize:10},{id:10,name:"Northern Snakehead",maxSize:100,minSize:20},{id:11,name:"Oscar",maxSize:45,minSize:10}]};s(28);var E=function(){var e=Object(c.useState)(0),n=Object(o.a)(e,2),s=n[0],a=n[1],t=Object(r.c)(y),i=Object(r.c)(w);return Object(c.useEffect)((function(){var e;if(a(0),t){var n=0;!function s(){e=window.requestAnimationFrame(s),n+=.01,a(10*Math.sin(n*(i?50:5)))}()}return function(){e&&window.cancelAnimationFrame(e)}}),[t,i]),Object(T.jsxs)("div",{id:"Floater",children:[Object(T.jsx)("div",{children:"CLICK ME!"}),Object(T.jsxs)("svg",{children:[Object(T.jsx)("line",{x1:60,y1:"0",x2:60,y2:"100%"}),Object(T.jsx)("rect",{x:50,y:140+s,width:"20",height:"40",fill:"red"}),Object(T.jsx)("rect",{x:50,y:60+s,width:"20",height:"40",fill:"white"}),Object(T.jsx)("circle",{className:"Dot",cx:60,cy:120+s,r:"40",fill:"white"}),Object(T.jsx)("path",{d:"M".concat(20,",",120+s," a1,1 0 0,0 80,0"),fill:"red"})]})]})};var W=function(){var e=D,n=Object(r.c)(N),s=Object(r.c)(v),a=Object(r.c)(S),t=Object(r.c)(y),i=Object(r.c)(w),l=Object(c.useState)(!0),j=Object(o.a)(l,2),b=j[0],d=j[1],f=Object(r.b)();return Object(T.jsxs)("div",{id:"FishingMenu",className:b?"Closed":n?"Touch":"Open",children:[!b&&Object(T.jsxs)("div",{className:"Expanded",children:[n?Object(T.jsx)("div",{className:"MenuButton Cancel",onClick:function(){return f(O(!1))},children:"Cancel"}):t?Object(T.jsx)("div",{onClick:function(){if(i){console.log("CAUGHT!");var n,s=Math.floor(100*Math.random());console.log(s),n=s>0&&s<60?e.common[Math.floor(Math.random()*e.common.length)]:e.rare[Math.floor(Math.random()*e.rare.length)];var c=Math.random()*(n.maxSize-n.minSize)+n.minSize,a=localStorage.getItem("fish_simong_list");if(null===a)a=[];else try{a=JSON.parse(a),console.log("PARSED"),Array.isArray(a)||(a=[]);for(var t=0;t<a.length;t++)if(!("size"in a[t])||!("id"in a[t])){a=[];break}}catch(r){a=[]}var o=!1;for(t=0;t<a.length;t++)if(a[t].id===n.id){o=!0,a[t].size=Math.max(c,a[t].size);break}o||a.push({id:n.id,size:c}),console.log(a),localStorage.setItem("fish_simong_list",JSON.stringify(a)),console.log(n),f(p({name:n.name,size:c,id:n.id}))}else f(p({name:"",size:0,id:0}));f(x(!0)),f(h(!1)),f(m(!1)),f(u(!1))},children:Object(T.jsx)(E,{})}):Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:"FishButton",onClick:function(){f(O(!0)),f(m(!1)),f(h(!1)),f(x(!1))},children:[Object(T.jsx)("img",{className:"FishingIcon",src:J,alt:""}),"Fishing"]}),Object(T.jsxs)("div",{className:"FishButton",onClick:function(){f(m(!s)),a&&f(x(!1))},children:[Object(T.jsx)("img",{className:"FishingIcon",src:A,alt:""}),"Record"]})]}),!t&&Object(T.jsx)("div",{className:"MenuButton Close",onClick:function(){return d(!0)},children:"Close"})]}),b&&Object(T.jsx)("div",{className:"MenuButton",onClick:function(){return d(!1)},children:"PLAY"})]})};var P=function(){var e=Object(r.b)();return Object(T.jsx)("div",{id:"TouchScreen",onClick:function(n){console.log(n),e(f({x:n.clientX,y:n.clientY})),e(u(!0)),e(O(!1))},children:Object(T.jsx)("span",{children:"CLICK/TOUCH TO CAST!"})})},K=(s(11),s.p+"static/media/carp.1f161d76.png"),R=s.p+"static/media/bluegill.96ee8251.png",H=s.p+"static/media/minnow.0fe7d8b6.png",_=s.p+"static/media/crayfish.cdaaa2bf.png",U=s.p+"static/media/slider.3d224dcd.png",G=s.p+"static/media/tadpole.fadf436c.png",Y=s.p+"static/media/neontetra.9e53cf71.png",V=s.p+"static/media/cat.7064edc6.png",Q=s.p+"static/media/perch.613918dd.png",q=s.p+"static/media/snakehead.a46302af.png",X=s.p+"static/media/oscar.ef852e15.png";var Z=function(){var e=Object(r.b)(),n=Object(r.c)(y),s=Object(r.c)(v),a=Object(c.useState)([]),t=Object(o.a)(a,2),i=t[0],l=t[1];function j(e){var n;switch(e){case 1:n=K;break;case 2:n=R;break;case 3:n=H;break;case 4:n=_;break;case 5:n=U;break;case 6:n=G;break;case 7:n=Y;break;case 8:n=V;break;case 9:n=Q;break;case 10:n=q;break;case 11:n=X;break;default:n=J}return n}return Object(c.useEffect)((function(){var e=localStorage.getItem("fish_simong_list");if(null===e)e=[];else try{e=JSON.parse(e),console.log("PARSED"),Array.isArray(e)||(e=[]);for(var n=0;n<e.length;n++)if(!("size"in e[n])||!("id"in e[n])){e=[];break}}catch(s){e=[]}l(e)}),[n]),Object(T.jsxs)("div",{id:"Menu",className:s?"Show":"",children:[Object(T.jsx)("div",{className:"CloseButton",onClick:function(){return e(m(!1))},children:"Close"}),Object(T.jsxs)("div",{className:"FishTanks",children:[Object(T.jsx)("h2",{children:"Best Records"}),Object(T.jsx)("div",{className:"Wrapper",children:i.map((function(e){return Object(T.jsxs)("div",{className:"Fish",children:[Object(T.jsx)("span",{children:Object(T.jsx)("img",{src:j(e.id),alt:""})}),Object(T.jsxs)("span",{className:"Image",children:[" ",Math.round(100*e.size)/100,"cm"]})]},"".concat(e.id,"-fishrow"))}))})]})]})};var $=function(){var e=Object(r.b)(),n=Object(r.c)(S),s=Object(r.c)(k),a=Object(c.useState)(J),t=Object(o.a)(a,2),i=t[0],l=t[1];return Object(c.useEffect)((function(){var e;switch(console.log(s),s.id){case 1:e=K;break;case 2:e=R;break;case 3:e=H;break;case 4:e=_;break;case 5:e=U;break;case 6:e=G;break;case 7:e=Y;break;case 8:e=V;break;case 9:e=Q;break;case 10:e=q;break;case 11:e=X;break;default:e=J}return l(e),function(){}}),[s]),Object(T.jsxs)("div",{id:"FishingTrophy",className:n?"Show":"",onClick:function(){return e(x(!1))},children:[0!==s.id&&Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{className:"FishImage",src:i,alt:""}),Object(T.jsx)("b",{}),"Nice! You caught",Object(T.jsx)("br",{})," ",Object(T.jsx)("b",{children:s.name}),Object(T.jsx)("br",{}),"It is ",Math.round(100*s.size)/100,"cm long!"]}),0===s.id&&Object(T.jsx)("div",{className:"Oops",children:Object(T.jsxs)("b",{children:["Oops...",Object(T.jsx)("br",{})," Better luck next time!"]})})]})};var ee=function(){var e=Object(r.c)(g),n=Object(r.c)(N);return Object(T.jsxs)("div",{id:"Content",children:[n?Object(T.jsx)(P,{}):function(){var n;switch(e){case"tutorial":n=Object(T.jsx)(z,{});break;case"about":n=Object(T.jsx)(I,{});break;case"main":default:n=Object(T.jsx)(B,{})}return n}(),Object(T.jsx)(W,{}),Object(T.jsx)(Z,{}),Object(T.jsx)($,{})]})};var ne=function(){return Object(T.jsxs)("div",{id:"App",children:[Object(T.jsx)(M,{}),Object(T.jsx)(ee,{})]})},se=Object(l.a)({reducer:{component:C}}),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(r.a,{store:se,children:Object(T.jsx)(ne,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/my-app","/service-worker.js");ce?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var c=s.headers.get("content-type");404===s.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(n,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.8fe5554a.chunk.js.map