(this["webpackJsonpkale-stew-talks"]=this["webpackJsonpkale-stew-talks"]||[]).push([[0],{15:function(e,t,n){},24:function(e,t,n){e.exports=n(38)},31:function(e,t,n){e.exports=n.p+"static/media/github.db4fb8da.png"},32:function(e,t,n){e.exports=n.p+"static/media/instagram.699a77c2.png"},33:function(e,t,n){e.exports=n.p+"static/media/linkedin.c7019d12.png"},34:function(e,t,n){e.exports=n.p+"static/media/email.602af25f.png"},35:function(e,t,n){e.exports=n.p+"static/media/twitter.614e6458.png"},38:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(3),i=n(0),o=n.n(i),l=n(16),c=n.n(l),s=n(4),u={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},p=[{name:"Sort by Date (Newest First)",function:function(e){return e&&e.sort((function(e,t){var n=new Date(e.eventDate),a=new Date(t.eventDate);return n>a?-1:n<a?1:0}))}},{name:"Sort by Date (Oldest First)",function:function(e){return e&&e.sort((function(e,t){var n=new Date(e.eventDate),a=new Date(t.eventDate);return n<a?-1:n>a?1:0}))}},{name:"Sort by Title (A \u2192 Z)",function:function(e){return e&&e.sort((function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0}))}},{name:"Sort by Title (Z \u2192 A)",function:function(e){return e&&e.sort((function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n>a?-1:n<a?1:0}))}},{name:"Show all Meetup talks",function:function(e){return e&&e.filter((function(e){return"meetup"===e.eventType}))}},{name:"Show all Conference talks",function:function(e){return e&&e.filter((function(e){return"conference"===e.eventType}))}}];function m(){var e=Object(r.a)(["\n  background-color: #ddaa03;\n  color: #fff;\n  font-size: 10px;\n  height: 12px;\n  align-self: center;\n  padding: 0.2rem;\n  margin-top: 0.6rem;\n"]);return m=function(){return e},e}function d(){var e=Object(r.a)(["\n  background-color: #db0606;\n  color: #fff;\n  font-size: 10px;\n  height: 12px;\n  align-self: center;\n  padding: 0.2rem;\n  margin-top: 0.6rem;\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n  color: #cb067a;\n"]);return f=function(){return e},e}function h(){var e=Object(r.a)(["\n  width: 300px;\n  align-self: center;\n  font-size: 28px;\n  font-weight: 300;\n  padding-bottom: 0.45rem;\n"]);return h=function(){return e},e}function g(){var e=Object(r.a)(["\n  font-style: italic;\n  word-wrap: break-word;\n  width: 345px;\n  align-self: center;\n"]);return g=function(){return e},e}function v(){var e=Object(r.a)([""]);return v=function(){return e},e}function b(){var e=Object(r.a)(["\n  padding: 2rem 0;\n"]);return b=function(){return e},e}function w(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n\n  @media (max-width: 1024px) {\n    margin-bottom: 3rem;\n  }\n"]);return w=function(){return e},e}var y=Object(s.a)("div")(w()),k=Object(s.a)("div")(b()),E=Object(s.a)("div")(v()),S=Object(s.a)("span")(g()),x=Object(s.a)("span")(h()),O=Object(s.a)("a")(f()),j=Object(s.a)("span")(d()),U=Object(s.a)("span")(m()),D=function(e){var t=e.talk;return o.a.createElement(y,null,o.a.createElement(x,null,t.title),o.a.createElement(S,null,t.description),t.previewImg&&o.a.createElement(E,null,o.a.createElement("img",{src:t.previewImg,alt:"".concat(t.title," slide preview")})),"meetup"===t.eventType?o.a.createElement(j,null,"MEETUP"):o.a.createElement(U,null,"CONFERENCE"),o.a.createElement(k,null,o.a.createElement("span",null,t.eventName," \uff0d "),o.a.createElement("span",null,function(e){var t=e.split("/");return"".concat(u[t[0]]," ").concat(t[1],", ").concat(t[2])}(t.eventDate))),o.a.createElement(O,{href:t.hostedSlidesUrl,title:"Link to live hosted slides for ".concat(t.title)},o.a.createElement("span",{role:"img","aria-label":"Click to visit the slides"},"\ud83d\udcbb \u2192 Check out the slides")),t.recordedPresentationUrl&&o.a.createElement(O,{href:t.recordedPresentationUrl,title:"Link to a recording of ".concat(t.title)},o.a.createElement("span",{role:"img","aria-label":"Click to watch the recorded presentation"},"\ud83d\udcf9 \u2192 Watch a recording of the presentation")))},L=n(9),T=n(50),C=(n(15),{LogoGithub:n(31),LogoInstagram:n(32),LogoLinkedIn:n(33),LogoMail:n(34),LogoTwitter:n(35)}),A=Object(L.a)({root:{background:"transparent"}})(T.a),N=function(){return o.a.createElement("footer",null,o.a.createElement("a",{href:"https://kyliestewart.tech"},o.a.createElement(A,null,"KS")),o.a.createElement("a",{href:"https://twitter.com/kyliestew"},o.a.createElement(T.a,{alt:"Link to Kylie's Twitter account",src:C.LogoTwitter})),o.a.createElement("a",{href:"https://www.linkedin.com/in/kylieastewart/"},o.a.createElement(T.a,{alt:"Link to Kylie's LinkedIn account",src:C.LogoLinkedIn})),o.a.createElement("a",{href:"https://instagram.com/kalestews"},o.a.createElement(T.a,{alt:"Link to Kylie's Instagram account",src:C.LogoInstagram})),o.a.createElement("a",{href:"mailto:kylie@kyliestewart.tech"},o.a.createElement(T.a,{alt:"Link to email Kylie",src:C.LogoMail})))},I=[{eventDate:"6/28/2018",title:"Machine Learning on the Command Line",description:"Using Node.js to create scripts that utilize popular machine learning algorithms.",eventName:"js.la",eventType:"meetup",exportedSlidesUrl:"https://github.com/kale-stew/ml-on-the-cl/blob/master/final.pdf",hostedSlidesUrl:"https://kale-stew.github.io/ml-on-the-cl",recordedPresentationUrl:"https://youtu.be/MzrDy4s8MF8"},{eventDate:"10/25/2018",title:"How TypeScript Made Me a Better JavaScript Developer",description:"An overview of helpful patterns for writing TypeScript, and how they apply to a similarly-structured JavaScript code base.",eventName:"Formidable Denver Open House",eventType:"meetup",exportedSlidesUrl:"https://github.com/kale-stew/typescript-is-awesome/blob/master/final.pdf",hostedSlidesUrl:"https://kale-stew.github.io/typescript-is-awesome/",recordedPresentationUrl:null},{eventDate:"11/15/2019",title:"React to React Native: How Hard Could It Be?",description:"Comparing the browser framework to it's native companion, and contrasting the development approaches.",eventName:"RVA.js",eventType:"conference",exportedSlidesUrl:"",hostedSlidesUrl:"",recordedPresentationUrl:"https://www.youtube.com/watch?v=i3DYPaHXLeo"},{eventDate:"9/20/2019",title:"Evolution of an API: A Case for GraphQL",description:"A discussion of API development over the years, and how GraphQL has evolved to address the problems that have arisen in that time.",eventName:"UtahJS",eventType:"conference",exportedSlidesUrl:"https://github.com/kale-stew/talks/blob/master/evolution-of-an-api/final.pdf",hostedSlidesUrl:"",recordedPresentationUrl:"https://www.youtube.com/watch?v=RhQx579OTVc"},{eventDate:"4/16/2019",title:"TypeScript in React: A Love Story",description:"An overview of practices my team found beneficial while integrating TypeScript into a React monorepo.",eventName:"React Denver",eventType:"meetup",exportedSlidesUrl:"https://github.com/kale-stew/ts-in-react/blob/master/final.pdf",hostedSlidesUrl:"https://kale-stew.github.io/ts-in-react/",recordedPresentationUrl:"https://youtu.be/iBlGIS-UQsw?t=1638"},{eventDate:"4/28/2018",title:"Using JavaScript to Teach Machines How to do Cool Things",description:"A gentle introduction to machine learning - defining basic algorithms and discussing why we wouldn't usually use JS to implement them.",eventName:"Zeit Day",eventType:"conference",exportedSlidesUrl:"https://github.com/kale-stew/zeit-day-2018/blob/master/final.pdf",hostedSlidesUrl:"https://kale-stew.github.io/zeit-day-2018/",recordedPresentationUrl:"https://youtu.be/QaV7a64mUYE"}];function P(){var e=Object(r.a)(["\n  line-height: 18px;\n  font-weight: 700;\n  padding-right: 55px;\n\n  @media (max-width: 1024px) {\n    padding-right: 15px;\n  }\n"]);return P=function(){return e},e}function M(){var e=Object(r.a)(["\n  margin-top: 2.9rem;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-template-rows: repeat(3, auto);\n  justify-items: center;\n  grid-row-gap: 2.3rem;\n\n  @media (max-width: 1024px) {\n    grid-template-columns: auto;\n    margin-bottom: 2.9rem;\n  }\n"]);return M=function(){return e},e}function J(){var e=Object(r.a)(["\n  height: 100%;\n  padding: 0.6rem 1.5rem;\n"]);return J=function(){return e},e}var R=Object(s.a)("div")(J()),z=Object(s.a)("div")(M()),F=Object(s.a)("h3")(P());c.a.render(o.a.createElement((function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2)[1],n=Object(i.useState)(I),r=Object(a.a)(n,2),l=r[0],c=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("a",{className:"header-link",href:"https://kylieis.online"},"\u2190 head home"),o.a.createElement(F,null,"Kylie Stewart")),o.a.createElement(R,null,o.a.createElement("h1",null,"Presentations"),o.a.createElement("h4",null,"All of my talks, slides, and abstracts, in one place."),o.a.createElement("select",{name:"filter",id:"filter-select",onChange:function(e){var n=p.find((function(t){return t.name===e.target.value}));t(n),c(n?n.function(I):I)}},o.a.createElement("option",{value:"",default:!0},"Sort by..."),p.map((function(e){return o.a.createElement("option",{value:e.name,key:e.name,onChange:function(){return t(e.function)}},e.name)}))),o.a.createElement(z,null,l.map((function(e){return o.a.createElement(D,{talk:e,key:e.eventDate})})))),o.a.createElement(N,null))}),null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f92985c2.chunk.js.map