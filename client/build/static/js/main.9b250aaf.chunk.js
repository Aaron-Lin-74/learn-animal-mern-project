(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(29),r=n.n(a),i=(n(18),n(5)),l=n(3),o=(n(39),n(10)),j=n(15),u=n(4),b=n(1),d=s.a.createContext(),h=function(e){var t=e.children,n=Object(c.useState)(!1),s=Object(u.a)(n,2),a=s[0],r=s[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),o=l[0],j=l[1],h=Object(c.useState)(!0),m=Object(u.a)(h,2),p=m[0],O=m[1],f=Object(c.useState)(!1),x=Object(u.a)(f,2),v=x[0],g=x[1],w=Object(c.useState)(0),N=Object(u.a)(w,2),k=N[0],y=N[1],S=Object(c.useCallback)((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),[]),T=Object(c.useState)({}),C=Object(u.a)(T,2),E=C[0],U=C[1],I=function(){r(!1)},F=function(){window.innerWidth<=960?O(!1):O(!0)};return Object(c.useEffect)((function(){return window.addEventListener("resize",F),function(){return window.removeEventListener("resize",F)}}),[]),Object(b.jsx)(d.Provider,{value:{isSubmenuOpen:a,openSubmenu:function(e,t){U(t),r(!0)},closeSubmenu:I,toggleSubmenu:function(){r(!a)},location:E,setLocation:U,largeScreenMode:p,setLargeScreenMode:O,scrollTop:S,screenBreakPoint:960,isSidebarClicked:o,toggleSidebar:function(){return j(!o)},closeMobileMenu:function(){j(!1),I()},isModalOpen:v,openModal:function(e){y(e),g(!0),document.body.style.setProperty("overflow","hidden","important"),document.getElementById("hero-video").pause()},closeModal:function(){g(!1),document.body.style.overflow="visible",document.getElementById("hero-video").play()},galleryImageNames:["quokka","panda","koala","red_panda"],modalIndex:k},children:t})},m=function(){return Object(c.useContext)(d)},p=n(34),O=n(7),f=n(6),x=n.n(f),v=s.a.createContext();function g(e){var t=e.children,n=Object(c.useState)(null),s=Object(u.a)(n,2),a=s[0],r=s[1],i=Object(l.h)();function o(){return(o=Object(O.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Network response was not OK");case 6:return e.next=8,n.json();case 8:return c=e.sent,r(c.user),localStorage.setItem("accessToken",c.accessToken),e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function j(){return(j=Object(O.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Network response was not OK");case 6:return e.next=8,n.json();case 8:return c=e.sent,r(c.user),localStorage.setItem("accessToken",c.accessToken),e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function d(){return(d=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(null),localStorage.removeItem("accessToken"),i("/login",{replace:!0});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(O.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users",{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))},body:JSON.stringify(Object(p.a)({},t))});case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",n.status);case 6:return e.next=8,n.json();case 8:return c=e.sent,r(c.user),e.abrupt("return",c.message);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function m(){return(m=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users",{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}});case 3:if(e.sent.ok){e.next=6;break}throw new Error("Network response was not Ok");case 6:r(null),localStorage.removeItem("accessToken"),i("/",{replace:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(b.jsx)(v.Provider,{value:{currentUser:a,signUp:function(e){return o.apply(this,arguments)},login:function(e){return j.apply(this,arguments)},logout:function(e){return d.apply(this,arguments)},updateUserProfile:function(e){return h.apply(this,arguments)},deleteUser:function(){return m.apply(this,arguments)}},children:t})}function w(){return Object(c.useContext)(v)}var N=function(){var e=m(),t=e.openSubmenu,n=e.closeSubmenu,c=e.toggleSubmenu,s=e.isSidebarClicked,a=e.toggleSidebar,r=e.closeMobileMenu,l=w(),u=l.currentUser,d=l.logout;return Object(b.jsx)("nav",{className:"navbar",onMouseOver:function(e){e.target.classList.contains("nav-links")||n()},children:Object(b.jsxs)("div",{className:"navbar-container",children:[Object(b.jsxs)(i.b,{to:"/",className:"navbar-logo",onClick:r,children:["Learn Animals ",Object(b.jsx)(j.a,{})]}),Object(b.jsx)("div",{className:"menu-icon",onClick:a,children:s?Object(b.jsx)(o.e,{}):Object(b.jsx)(o.a,{})}),Object(b.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/",className:"nav-links",onClick:r,children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("span",{className:"nav-links",onClick:c,onMouseOver:function(e){var n=e.target.textContent,c=e.target.getBoundingClientRect(),s=(c.left+c.right)/2,a=c.bottom;t(n,{coorX:s,coorY:a})},children:"Animals"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/services",className:"nav-links",onClick:r,children:"Services"})}),u&&Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/dashboard",className:"nav-links",onClick:r,children:u.name})}),u?Object(b.jsx)("li",{children:Object(b.jsx)("span",{className:"nav-links-sign-up",onClick:d,children:"Log out"})}):Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/sign-up",className:"nav-links-sign-up",onClick:r,children:"Sign Up"})})]})]})})},k=(n(42),n(43),["btn--primary","btn--outline","btn--danger","btn--confirm"]),y=["btn--medium","btn--large"],S=function(e){var t=e.children,n=e.type,c=e.onClick,s=e.buttonStyle,a=e.buttonSize,r=e.path,l=e.disabled,o=k.includes(s)?s:k[0],j=y.includes(a)?a:y[0];return r?Object(b.jsx)(i.b,{to:r,children:Object(b.jsx)("button",{className:"btns ".concat(o," ").concat(j),onClick:c,type:n,disabled:l,children:t})}):Object(b.jsx)("button",{className:"btns ".concat(o," ").concat(j),onClick:c,type:n,disabled:l,children:t})},T=n(11),C=function(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsxs)("section",{className:"footer-subscription",children:[Object(b.jsx)("h3",{className:"footer-subscription-heading",children:"Join the Learn Animals newsletter to receive our latest updates"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(b.jsx)("div",{className:"input-areas",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"email",name:"email",className:"footer-input",placeholder:"Your Email",required:!0}),Object(b.jsx)(S,{buttonStyle:"btn--outline",buttonSize:"btn--medium",children:"Subscribe"})]})})]}),Object(b.jsx)("section",{className:"footer-links",children:Object(b.jsxs)("div",{className:"footer-nav-items",children:[Object(b.jsx)(i.b,{className:"footer-btn",to:"/contact",children:"Contact"}),Object(b.jsx)(i.b,{className:"footer-btn",to:"/about-us",children:"About Us"}),Object(b.jsx)(i.b,{className:"footer-btn",to:"/faq",children:"FAQ"}),Object(b.jsx)(i.b,{className:"footer-btn",to:"/terms-of-use",children:"Terms of Use"})]})}),Object(b.jsx)("section",{className:"social-media",children:Object(b.jsxs)("div",{className:"social-media-wrapper",children:[Object(b.jsx)("div",{className:"footer-logo",children:Object(b.jsxs)(i.b,{to:"/",className:"social-logo",children:["Learn Animals ",Object(b.jsx)(j.a,{})]})}),Object(b.jsx)("small",{className:"website-rights",children:"Learn Animals \xa9 2021"}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)("a",{className:"social-icon-link facebook",href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:Object(b.jsx)(T.a,{})}),Object(b.jsx)("a",{className:"social-icon-link instagram",href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:Object(b.jsx)(T.b,{})}),Object(b.jsx)("a",{className:"social-icon-link twitter",href:"https://twitter.com/",target:"_blank",rel:"noreferrer","aria-label":"Twitter",children:Object(b.jsx)(T.d,{})}),Object(b.jsx)("a",{className:"social-icon-link youtube",href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer","aria-label":"Youtube",children:Object(b.jsx)(T.e,{})})]})]})})]})},E=(n(44),function(){var e=Object(c.useRef)(),t=Object(c.useState)(!0),n=Object(u.a)(t,2),s=n[0],a=n[1];return Object(b.jsxs)("section",{className:"hero-container",children:[Object(b.jsxs)("video",{id:"hero-video",ref:e,autoPlay:!0,loop:!0,muted:!0,poster:"/images/panda.jpg",children:[Object(b.jsx)("source",{src:"/videos/animals.mp4",type:"video/mp4"}),Object(b.jsx)("source",{src:"/videos/animals.webm",type:"video/webm"})]}),Object(b.jsx)("div",{className:"toggle-hero-video",children:Object(b.jsx)(S,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--medium",onClick:function(){a(!s),e.current.paused||e.current.ended?e.current.play():e.current.pause()},children:s?Object(b.jsx)(o.b,{}):Object(b.jsx)(o.c,{})})}),Object(b.jsx)("h1",{children:"Adventure awaits"}),Object(b.jsx)("p",{children:"What are you waiting for?"}),Object(b.jsxs)("div",{className:"hero-btns",children:[Object(b.jsx)(S,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",path:"/sign-up",children:"GET STARTED"}),Object(b.jsxs)(S,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:function(){window.open("https://www.youtube.com/watch?v=MhhAox6Zei8","_blank")},children:["Watch ",Object(b.jsx)(o.c,{})]})]})]})}),U=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("li",{className:"card-item",children:Object(b.jsxs)(i.b,{className:"card-item-link",to:e.path,children:[Object(b.jsx)("figure",{className:"card-item-img-wrap","data-category":e.label,children:Object(b.jsx)("img",{className:"card-item-img",src:e.src,alt:"Animal"})}),Object(b.jsx)("div",{className:"card-item-info",children:Object(b.jsx)("h5",{className:"card-item-text",children:e.text})})]})})})},I=(n(45),function(){return Object(b.jsxs)("section",{className:"cards",children:[Object(b.jsx)("h2",{children:" Explore different types of animals "}),Object(b.jsx)("div",{className:"cards-container",children:Object(b.jsxs)("div",{className:"cards-wrapper",children:[Object(b.jsxs)("ul",{className:"card-items-l",children:[Object(b.jsx)(U,{src:"images/fennec.jpg",text:"Mammals include humans and all other animals that are warm-blooded vertebrates (vertebrates have backbones) with hair. They feed their young with milk and have a more well-developed brain.  ",label:"Mammals",path:"/animals/mammal"}),Object(b.jsx)(U,{src:"images/cockatoo.jpg",text:"Birds are warm-blooded vertebrates (vertebrates have backbones) and are the only animals with feathers. Although all birds have wings, a few species can't fly.",label:"Birds",path:"/animals/bird"})]}),Object(b.jsxs)("ul",{className:"card-items-s",children:[Object(b.jsx)(U,{src:"images/the_frilled_neck_lizard.jpg",text:"Reptiles are cold-blooded vertebrates. (Vertebrates have backbones.) They have dry skin covered with scales or bony plates and usually lay soft-shelled eggs.",label:"Reptiles",path:"/animals/reptile"}),Object(b.jsx)(U,{src:"images/lion_fish.jpg",text:"Fish are vertebrates (vertebrates have backbones) that live in water. They breathe using special organs called gills.",label:"Fish",path:"/animals/fish"}),Object(b.jsx)(U,{src:"images/tree_frog.jpg",text:"Amphibians are cold-blooded vertebrates (vertebrates have backbones) that don\u2019t have scales. They live part of their lives in water and part on land.",label:"Amphibians",path:"/animals/amphibian"}),Object(b.jsx)(U,{src:"images/sea_star.jpg",text:"Invertebrates are animals without a backbone or bony skeleton. They range in size from microscopic mites and almost invisible flies to giant squid with soccer-ball-size eyes.",label:"Invertebrates ",path:"/animals/invertebrate"})]})]})})]})}),F=(n(46),n(30)),A=(n(47),n(12)),L=function(){var e=m(),t=e.closeModal,n=e.galleryImageNames,s=e.modalIndex,a=Object(c.useState)(!0),r=Object(u.a)(a,2),i=r[0],l=r[1],j=Object(c.useState)(s),d=Object(u.a)(j,2),h=d[0],p=d[1];Object(c.useEffect)((function(){h<0?p(n.length-1):h>n.length-1&&p(0)}),[n,h]),Object(c.useEffect)((function(){var e;return i?e=setInterval((function(){p((function(e){return e+1}))}),4e3):clearInterval(e),function(){return clearInterval(e)}}),[i]);return Object(b.jsxs)("div",{className:"modal-overlay show-modal",children:[Object(b.jsx)("div",{className:"modal-container",children:n.map((function(e,t){var c="next-image";return h===t&&(c="current-image"),(t===h-1||0===h&&t===n.length-1)&&(c="last-image"),Object(b.jsx)("figure",{className:c,children:Object(b.jsx)("img",{className:"gal-modal-img",src:"/images/".concat(e,".jpg"),alt:"modal"})},e)}))}),Object(b.jsxs)("div",{className:"modal-btns",children:[Object(b.jsx)("button",{onClick:function(){p((function(e){return e-1})),l(!1)},children:Object(b.jsx)(A.a,{})}),Object(b.jsx)("button",{onClick:function(){p((function(e){return e+1})),l(!1)},children:Object(b.jsx)(A.b,{})})," ",Object(b.jsx)("button",{onClick:function(){return l(!i)},children:i?Object(b.jsx)(o.b,{}):Object(b.jsx)(o.c,{})}),Object(b.jsx)("button",{onClick:t,children:Object(b.jsx)(o.e,{})})]})]})},M=function(){var e=m(),t=e.isModalOpen,n=e.openModal,c=e.galleryImageNames;return Object(b.jsxs)("section",{className:"gallery",children:[Object(b.jsx)("div",{className:"ani-info",children:Object(b.jsx)("div",{className:"ani-text",children:Object(b.jsx)("h2",{children:"Animals share the world around us "})})}),Object(b.jsx)("div",{className:"gallery-wrapper",children:Object(b.jsx)("div",{className:"gallery-flex",children:c.map((function(e,t){return Object(b.jsx)("div",{className:"gal-flex-item",onClick:function(){return n(t)},children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{className:"gal-img",src:"/images/".concat(e,".jpg"),alt:"gallery"}),Object(b.jsx)("span",{className:"gal-add",children:Object(b.jsx)(F.a,{})})]})},t)}))})}),t&&Object(b.jsx)(L,{})]})},P=n(31),R=n.n(P),q=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(c.useState)([]),s=Object(u.a)(n,2),a=s[0],r=s[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),o=l[0],j=l[1];return Object(c.useEffect)((function(){var n=function(){var n=Object(O.a)(x.a.mark((function n(){var c,s;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t&&(c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}}),n.next=4,R.a.get(e,c);case 4:s=n.sent,r(s.data),j(!0),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),{data:a,isLoaded:o}},_=(n(66),function(){var e=q("/api/reviews"),t=e.data.reviews,n=e.isLoaded,s=Object(c.useState)(0),a=Object(u.a)(s,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){if(n){var e=t.length-1;r<0?i(e):r>e&&i(0)}}),[r,t,n]),Object(c.useEffect)((function(){var e=setInterval((function(){i((function(e){return e+1}))}),4e3);return function(){return clearInterval(e)}})),Object(b.jsxs)("section",{className:"reviews",children:[Object(b.jsx)("h2",{className:"rev-title",children:"/ Reviews"}),Object(b.jsxs)("div",{className:"reviews-center",children:[n&&t.map((function(e,n){var c=e.id,s=e.image,a=e.name,i=e.title,l=e.quote,j="nextSlide";return n===r&&(j="activeSlide"),(n===r-1||0===r&&n===t.length-1)&&(j="lastSlide"),Object(b.jsxs)("article",{className:j,children:[Object(b.jsx)("img",{src:s,alt:a,className:"person-img"}),Object(b.jsx)("h4",{children:a}),Object(b.jsx)("p",{className:"title",children:i}),Object(b.jsx)("p",{className:"text",children:l}),Object(b.jsx)(o.d,{className:"icon"})]},c)})),Object(b.jsx)("button",{className:"prev",onClick:function(){return i(r-1)},children:Object(b.jsx)(A.a,{})}),Object(b.jsx)("button",{className:"next",onClick:function(){return i(r+1)},children:Object(b.jsx)(A.b,{})})]})]})}),z=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsx)(E,{}),Object(b.jsx)(M,{}),Object(b.jsx)(I,{}),Object(b.jsx)(_,{})]})},B=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"services",children:Object(b.jsx)("h1",{children:"Services"})})},D=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"products",children:Object(b.jsx)("h1",{children:"Products"})})},J=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),s=Object(c.useRef)(),a=Object(c.useState)(""),r=Object(u.a)(a,2),o=r[0],j=r[1],d=Object(c.useState)(!1),h=Object(u.a)(d,2),m=h[0],p=h[1],f=Object(l.h)(),v=w().signUp;function g(){return(g=Object(O.a)(x.a.mark((function c(a){var r;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),n.current.value===s.current.value){c.next=3;break}return c.abrupt("return",N("Passwords do not match"));case 3:return c.prev=3,j(""),p(!0),r={name:e.current.value,email:t.current.value,password:n.current.value},c.next=9,v(r);case 9:if(c.sent){c.next=13;break}return N("The error from the fetch"),c.abrupt("return");case 13:f("/dashboard"),c.next=20;break;case 16:c.prev=16,c.t0=c.catch(3),N("Failed to create an account"),p(!1);case 20:case"end":return c.stop()}}),c,null,[[3,16]])})))).apply(this,arguments)}function N(e){j(e),setTimeout((function(){return j("")}),5e3)}return Object(b.jsxs)(b.Fragment,{children:[o&&Object(b.jsx)("div",{className:"sign-up-error",children:o}),Object(b.jsxs)("form",{className:"sign-up-form",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(b.jsx)("h3",{children:"Sign Up"}),Object(b.jsx)("label",{htmlFor:"sign-up-username",children:"User Name"}),Object(b.jsx)("input",{id:"sign-up-username",type:"text",ref:e,placeholder:"user name",required:!0}),Object(b.jsx)("label",{htmlFor:"sign-up-email",children:"Email"}),Object(b.jsx)("input",{id:"sign-up-email",type:"email",ref:t,placeholder:"example@example.com",required:!0}),Object(b.jsx)("label",{htmlFor:"sign-up-password",children:"Password"}),Object(b.jsx)("input",{id:"sign-up-password",type:"password",ref:n,placeholder:"password",required:!0}),Object(b.jsx)("label",{htmlFor:"sign-up-password2",children:"Password Confirmation"}),Object(b.jsx)("input",{id:"sign-up-password2",type:"password",placeholder:"password",ref:s,required:!0}),Object(b.jsx)("button",{disabled:m,type:"submit",children:"Sign Up"}),Object(b.jsxs)("div",{className:"switch",children:["Already have an account? ",Object(b.jsx)(i.b,{to:"/login",children:"Log In"})]})]})]})},W=(n(27),function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"sign-up",children:Object(b.jsx)("div",{className:"sign-up-flex",children:Object(b.jsx)(J,{})})})}),Y=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useState)(""),s=Object(u.a)(n,2),a=s[0],r=s[1],o=Object(c.useState)(!1),j=Object(u.a)(o,2),d=j[0],h=j[1],m=Object(l.h)(),p=w().login,f=l.g.state;function v(){return(v=Object(O.a)(x.a.mark((function n(c){var s;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,r(""),h(!0),s={email:e.current.value,password:t.current.value},n.next=7,p(s);case 7:if(n.sent){n.next=11;break}return g("Failed to login to account"),n.abrupt("return");case 11:m((null===f||void 0===f?void 0:f.path)||"/dashboard"),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(1),g("Failed to login to account"),h(!1);case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))).apply(this,arguments)}function g(e){r(e),setTimeout((function(){return r("")}),5e3)}return Object(b.jsxs)(b.Fragment,{children:[a&&Object(b.jsx)("div",{className:"login-error",children:a}),Object(b.jsxs)("form",{className:"login-form",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(b.jsx)("h3",{children:"Log In"}),Object(b.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(b.jsx)("input",{id:"login-email",type:"email",placeholder:"example@example.com",ref:e,required:!0}),Object(b.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(b.jsx)("input",{id:"login-password",type:"password",placeholder:"password",ref:t,required:!0}),Object(b.jsx)("button",{disabled:d,type:"submit",children:"Log In"}),Object(b.jsxs)("div",{className:"switch",children:["Need to create an account? ",Object(b.jsx)(i.b,{to:"/sign-up",children:"Sign Up"})]})]})]})},H=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"login",children:Object(b.jsx)("div",{className:"login-flex",children:Object(b.jsx)(Y,{})})})},V=(n(67),function(){var e=m(),t=e.location,n=e.isSubmenuOpen,s=e.closeSubmenu,a=e.largeScreenMode,r=e.closeMobileMenu,l=Object(c.useRef)();return Object(c.useEffect)((function(){a?(l.current.style.top="90px",l.current.style.left="".concat(t.coorX,"px")):(l.current.style.top="".concat(t.coorY,"px"),l.current.style.left="0")}),[t,a]),Object(b.jsx)("aside",{className:n?"submenu show":"submenu",ref:l,onMouseLeave:s,children:Object(b.jsxs)("div",{className:"".concat(a?"submenu-center col-3":"submenu-center"),children:[Object(b.jsx)(i.b,{to:"/animals/mammals",onClick:r,children:Object(b.jsx)("h4",{children:"Mammals"})}),Object(b.jsx)(i.b,{to:"/animals/birds",onClick:r,children:Object(b.jsx)("h4",{children:"Birds"})}),Object(b.jsx)(i.b,{to:"/animals/reptiles",onClick:r,children:Object(b.jsxs)("h4",{children:["Reptiles ",Object(b.jsx)(T.c,{})]})}),Object(b.jsx)(i.b,{to:"/animals/fish",onClick:r,children:Object(b.jsxs)("h4",{children:["Fish",Object(b.jsx)(T.c,{})]})}),Object(b.jsx)(i.b,{to:"/animals/amphibians",onClick:r,children:Object(b.jsxs)("h4",{children:["Amphibians",Object(b.jsx)(T.c,{})]})}),Object(b.jsx)(i.b,{to:"/animals/invertebrates",onClick:r,children:Object(b.jsxs)("h4",{children:["Invertebrates ",Object(b.jsx)(T.c,{})]})})]})})}),K=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsxs)("div",{className:"error",children:[Object(b.jsx)("h1",{children:"404"}),Object(b.jsx)("p",{children:"Sorry, we can't find that page. Don't worry through, everything is still awesome."}),Object(b.jsx)(S,{children:"Home"})]})},Q=n(32),X=function(){var e=Object(c.useRef)(),t=m().scrollTop;Object(c.useEffect)((function(){return t(),window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[t,e]);var n=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.current.style.display="block":e.current.style.display="none"};return Object(b.jsxs)("div",{className:"animals",children:[Object(b.jsx)(l.b,{}),Object(b.jsx)("button",{className:"scroll-top",ref:e,onClick:t,children:Object(b.jsx)(Q.a,{})})]})},G=(n(68),function(){var e=w(),t=e.currentUser,n=e.deleteUser;return Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)("h1",{children:"Profile"}),Object(b.jsxs)("h2",{children:["User Name: ",t.name]}),Object(b.jsxs)("h2",{children:["Email: ",t.email]}),Object(b.jsx)(S,{path:"/update-profile",children:"Update Profile"}),Object(b.jsx)(S,{onClick:function(){!0===window.confirm("Deleting your account is permanent and will remove all content and profile settings. Are you sure you want to delete your account?")&&n()},buttonStyle:"btn--danger",children:"Delete Account"})]})}),Z=function(){var e=w().currentUser,t=m().scrollTop;return Object(c.useEffect)((function(){t()}),[t]),e&&Object(b.jsx)("div",{className:"dashboard",children:Object(b.jsx)(G,{})})},$=n(33),ee=function(e){var t=e.animal;return Object(b.jsxs)("div",{className:"animal-card",children:[Object(b.jsx)("div",{className:"animal-img-container",children:Object(b.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(b.jsxs)("aside",{className:"animal-info",children:[Object(b.jsxs)("div",{className:"animal-name",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("button",{onClick:function(){return function(e){var t=new SpeechSynthesisUtterance(e);t.rate=.75,speechSynthesis.speak(t)}(t.name)},children:Object(b.jsx)($.a,{})})]}),Object(b.jsxs)("h4",{children:["Population: ",t.population]}),Object(b.jsxs)("h4",{children:["Life span: ",t.life]}),Object(b.jsxs)("h4",{children:["Weight: ",t.weight]}),Object(b.jsxs)("h4",{children:["Length: ",t.length]}),Object(b.jsx)("button",{className:"learn-more",onClick:function(){return e=t.link,void window.open(e,"_blank");var e},children:"Learn more"})]}),Object(b.jsx)("article",{className:"animal-desc",children:Object(b.jsx)("p",{children:t.desc})})]},t._id)},te=(n(69),function(){var e=Object(l.i)().animalType,t=e.endsWith("s")?e.slice(0,-1):e,n=["mammal","fish","bird","reptile","amphibian","invertebrate"],s=w().currentUser,a=Object(l.h)(),r=Object(l.g)(),i=Object(c.useState)(3),o=Object(u.a)(i,2),j=o[0],d=o[1],h=m().scrollTop,p=Object(c.useRef)(),O=Object(c.useState)("/api/animals/".concat(t,"?limit=").concat(j)),f=Object(u.a)(O,2),x=f[0],v=f[1],g=Object(c.useState)(!1),N=Object(u.a)(g,2),k=N[0],y=N[1],S=q(x,k).data;Object(c.useEffect)((function(){h(),n.includes(t)?s||"mammal"===t||"bird"===t?s&&"mammal"!==t&&"bird"!==t&&y(!0):a("/login",{replace:!0,path:r.pathname}):a("/error",{replace:!0})}),[t,s,h]),Object(c.useEffect)((function(){v("/api/animals/".concat(t,"?limit=").concat(j))}),[t,j]);return Object(b.jsxs)("main",{className:"animals-container-flex",children:[S.map((function(e){return Object(b.jsx)(ee,{animal:e},e.name)})),Object(b.jsx)("button",{className:"load-more",ref:p,onClick:function(){d((function(e){return e+3})),j>S.length&&(p.current.style.visibility="hidden")},children:"Load more"})]})});var ne=function(e){var t=e.children,n=w().currentUser,c=Object(l.g)();return n?t:Object(b.jsx)(l.a,{to:"/login",replace:!0,state:{path:c.pathname}})},ce=(n(28),function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),s=Object(c.useRef)(),a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],o=r[1],j=Object(c.useState)(!1),d=Object(u.a)(j,2),h=d[0],m=d[1],p=Object(l.h)(),f=w(),v=f.currentUser,g=f.updateUserProfile,N=f.logout;function k(){return(k=Object(O.a)(x.a.mark((function c(a){var r,i;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),n.current.value===s.current.value){c.next=3;break}return c.abrupt("return",y("Passwords do not match"));case 3:return c.prev=3,o(""),m(!0),r={},e.current.value!==v.name&&(r.name=e.current.value),t.current.value!==v.email&&(r.email=t.current.value),n.current.value&&(r.password=n.current.value),c.next=12,g(r);case 12:if(i=c.sent){c.next=16;break}return y("Failed to update the profile"),c.abrupt("return");case 16:if(403!==i){c.next=20;break}return y("Session expires, please login again"),setTimeout(N,3e3),c.abrupt("return");case 20:p("/dashboard"),c.next=27;break;case 23:c.prev=23,c.t0=c.catch(3),y("Failed to update the profile"),m(!1);case 27:case"end":return c.stop()}}),c,null,[[3,23]])})))).apply(this,arguments)}function y(e){o(e),setTimeout((function(){return o("")}),5e3)}return Object(b.jsxs)(b.Fragment,{children:[i&&Object(b.jsx)("div",{className:"update-profile-error",children:i}),Object(b.jsxs)("form",{className:"update-profile-form",onSubmit:function(e){return k.apply(this,arguments)},children:[Object(b.jsx)("h3",{children:"Update Profile"}),Object(b.jsx)("label",{htmlFor:"update-profile-username",children:"User Name"}),Object(b.jsx)("input",{id:"update-profile-username",type:"text",ref:e,required:!0,defaultValue:v.name}),Object(b.jsx)("label",{htmlFor:"update-profile-email",children:"Email"}),Object(b.jsx)("input",{id:"update-profile-email",type:"email",ref:t,required:!0,defaultValue:v.email}),Object(b.jsx)("label",{htmlFor:"update-profile-password",children:"Password"}),Object(b.jsx)("input",{id:"update-profile-password",type:"password",ref:n,placeholder:"Leave blank to keep the same"}),Object(b.jsx)("label",{htmlFor:"update-profile-password2",children:"Password Confirmation"}),Object(b.jsx)("input",{id:"update-profile-password2",type:"password",placeholder:"Leave blank to keep the same",ref:s}),Object(b.jsx)(S,{disabled:h,type:"submit",buttonStyle:"btn--confirm",children:"Update"}),Object(b.jsx)(S,{path:"/dashboard",buttonStyle:"btn--outline",children:"Cancel"})]})]})}),se=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"update-profile",children:Object(b.jsx)("div",{className:"update-profile-flex",children:Object(b.jsx)(ce,{})})})},ae=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"contact",children:Object(b.jsx)("h1",{children:"Contact"})})},re=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"about-us",children:Object(b.jsx)("h1",{children:"About Us"})})},ie=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"faq",children:Object(b.jsx)("h1",{children:"FAQ"})})},le=function(){var e=m().scrollTop;return Object(c.useEffect)((function(){e()}),[e]),Object(b.jsx)("div",{className:"terms-of-use",children:Object(b.jsx)("h1",{children:"Terms of Use"})})};var oe=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(g,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(V,{}),Object(b.jsxs)(l.e,{children:[Object(b.jsx)(l.c,{path:"/",element:Object(b.jsx)(z,{})}),Object(b.jsx)(l.c,{path:"/services",element:Object(b.jsx)(B,{})}),Object(b.jsx)(l.c,{path:"/products",element:Object(b.jsx)(D,{})}),Object(b.jsx)(l.c,{path:"/sign-up",element:Object(b.jsx)(W,{})}),Object(b.jsx)(l.c,{path:"/login",element:Object(b.jsx)(H,{})}),Object(b.jsx)(l.c,{path:"/animals",element:Object(b.jsx)(X,{}),children:Object(b.jsx)(l.c,{path:":animalType",element:Object(b.jsx)(te,{})})}),Object(b.jsx)(l.c,{path:"/dashboard",element:Object(b.jsx)(ne,{children:Object(b.jsx)(Z,{})})}),Object(b.jsx)(l.c,{path:"/update-profile",element:Object(b.jsx)(ne,{children:Object(b.jsx)(se,{})})}),Object(b.jsx)(l.c,{path:"/contact",element:Object(b.jsx)(ae,{})}),Object(b.jsx)(l.c,{path:"/about-us",element:Object(b.jsx)(re,{})}),Object(b.jsx)(l.c,{path:"/faq",element:Object(b.jsx)(ie,{})}),Object(b.jsx)(l.c,{path:"/terms-of-use",element:Object(b.jsx)(le,{})}),Object(b.jsx)(l.c,{path:"*",element:Object(b.jsx)(K,{})})]}),Object(b.jsx)(C,{})]})})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{children:Object(b.jsx)(oe,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.9b250aaf.chunk.js.map