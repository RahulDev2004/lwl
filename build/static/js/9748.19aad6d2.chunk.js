(self.webpackChunklitho=self.webpackChunklitho||[]).push([[9748,5705,2502,4368],{43739:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var a=o(72791),i=o(11087),n=o(43360),s=o(80184);const c=e=>{const t=e.themeColor&&e.themeColor[0],o=e.themeColor&&e.themeColor[1],a=e.color&&e.color[0],c=e.color&&e.color[1],r={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(a,", ").concat(c,", ").concat(a,")"):e.color};return e.href||"submit"===e.type?(0,s.jsx)(n.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:r,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,s.jsx)(l,{...e})}):(0,s.jsx)(i.rU,{style:r,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,s.jsx)(l,{...e})})},l=e=>(0,s.jsxs)(s.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,s.jsx)("span",{})]});c.defaultProps={size:"lg",style:"primary"};const r=(0,a.memo)(c)},55347:(e,t,o)=>{"use strict";o.d(t,{Z:()=>k});var a=o(72791),i=o(47022),n=o(89743),s=o(2677),c=o(11087),l=o(71856),r=o(34290),m=o(81724),d=o(92506),f=o(29213),p=o(54198),h=o(17728),b=o(28033),g=o(38480),x=o(80184);const u=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],w=e=>(0,x.jsx)(p.Footer,{className:"footer-style-09".concat(e.className?" ".concat(e.className):""),theme:e.theme,children:(0,x.jsx)(i.Z,{className:"py-[6%] xs:py-[13%]",children:(0,x.jsxs)(n.Z,{className:"items-center",children:[(0,x.jsxs)(s.Z,{className:"md:text-center last:m-0 md:mt-[25px]",lg:{span:3,order:1},md:{span:12,order:3},xs:{span:12,order:3},children:[(0,x.jsx)(c.rU,{"aria-label":"link",to:"/",children:(0,x.jsx)("img",{src:e.logo,alt:"logo",width:"111",height:"36",className:"mb-[15px] md:mx-auto md:mt-0"})}),(0,x.jsxs)("p",{children:["\xa9 Copyright ",(new Date).getFullYear()," ",(0,x.jsx)(c.rU,{"aria-label":"link",to:"/",rel:"noreferrer",className:"underline underline-offset-4 font-medium hover:text-themecolor",children:"Litho"})]})]}),(0,x.jsxs)(s.Z,{lg:{order:2},md:{span:6,order:1},xs:{span:12,order:1},className:"text-center items-center flex flex-col md:items-start sm:mb-[50px] sm:items-center xs:mb-[30px]",children:[(0,x.jsxs)("span",{className:"mb-[25px] block sm:w-full md:text-start md:w-4/5 sm:text-center leading-[18px]",children:[(0,x.jsx)("span",{className:"text-themecolor",children:"Newsletter sign-up. \xa0"}),"Get monthly updates and resources."]}),(0,x.jsx)("div",{className:"form w-[75%] justify-center md:justify-start xs:w-full",children:(0,x.jsx)(d.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,t)=>{t.setSubmitting(!0);"success"===(await(0,g.sendEmail)(e)).status&&(0,g.resetForm)(t)},children:e=>{let{isSubmitting:t,status:o}=e;return(0,x.jsxs)("div",{className:"relative subscribe-style-05",children:[(0,x.jsxs)(d.l0,{className:"relative",children:[(0,x.jsx)(h.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] small-input border-solid border-[rgba(255,255,255,0.2)] placeholder-[#A6A6A6] rounded-none\tbg-transparent py-[13px] px-[15px] text-md m-0 w-full xs:py-[13px] xs:px-[15px]",placeholder:"Enter your email address"}),(0,x.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] top-1/2 translate-y-2/4 uppercase xs:text-center dark".concat(t?" loading":""),children:(0,x.jsx)("i",{className:"far fa-envelope text-lg leading-none m-0 mr-[10px] text-basecolor xs:mr-0"})})]}),(0,x.jsx)(l.M,{children:o&&(0,x.jsx)(r.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,x.jsx)(b.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]}),(0,x.jsxs)(s.Z,{className:"text-center md:text-right mb-[10px]",lg:{span:3,order:3},md:{span:6,order:2},xs:{span:12,order:2},children:[(0,x.jsx)("span",{className:"mb-[15px] block text-right sm:text-center leading-[18px]",children:"Connect with social"}),(0,x.jsx)(f.default,{theme:"social-icon-style-01",className:"justify-end sm:justify-center",size:"xs",iconColor:"dark"===e.theme?"light":"dark",data:u})]})]})})});w.defaultProps={logo:"https://via.placeholder.com/111x36"};const k=(0,a.memo)(w)},44368:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var a=o(72791),i=o(89743),n=o(34290),s=o(11087),c=o(43739),l=o(98899),r=o(80184);const m=e=>(0,r.jsx)(i.Z,{className:"".concat(e.grid," md:justify-center"),children:e.data.map(((t,o)=>(0,r.jsx)(n.m.div,{className:"col".concat(e.theme?" ".concat(e.theme):"").concat(e.className?" ".concat(e.className):""),...e.animation,transition:{delay:o*e.animationDelay,ease:e.animationTransition,duration:e.animationDuration},children:(0,r.jsxs)("div",{className:"rounded-md w-full",children:[t.img?(0,r.jsx)("img",{height:42,width:51,className:"inline-block items-center justify-center mb-[30px]",src:t.img,alt:"featurebox"}):t.icon?"icon-with-text-05"===e.theme?(0,r.jsx)(s.rU,{"aria-label":"link for icon",to:"#",children:(0,r.jsx)("i",{className:t.icon})}):(0,r.jsx)("i",{className:t.icon}):t.textIcon?(0,r.jsx)("span",{className:"text-basecolor inline-block icon-text",children:t.textIcon}):(0,r.jsx)("span",{className:"text-basecolor inline-block icon-text",children:"".concat(o<=9?"0":"").concat(o+1)}),(0,r.jsxs)("div",{className:"feature-box-content",children:[t.title&&(0,r.jsx)("span",{className:"font-medium title font-serif",children:t.title}),t.content&&(0,r.jsx)("p",{children:t.content}),"icon-with-text-11"===e.theme?(0,r.jsx)(c.default,{ariaLabel:"iconwithtext",href:"#",className:"font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]",size:"xl",color:"#232323",title:"Read more"}):""]}),(t.linkTitle||t.link)&&(0,r.jsx)(c.default,{ariaLabel:"iconwithtext",className:"font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor",to:t.link,title:t.linkTitle})]})},o)))});m.defaultProps={data:l.y_,animationDelay:.6,animationDuration:.8,animationTransition:"circOut",theme:"icon-with-text-01"};const d=(0,a.memo)(m)},28033:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var a=o(72791),i=o(30018),n=o(80184);const s=e=>{const[t,o]=(0,a.useState)(!0);if(t)return(0,n.jsx)(i.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:()=>o(!1),dismissible:e.dismissible,children:e.message})};s.defaultProps={className:"",theme:"message-box01"};const c=(0,a.memo)(s)},25705:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var a=o(72791),i=o(92520),n=o(80184);const s=e=>{let{theme:t,children:o,className:s,...c}=e;return(0,a.useEffect)((()=>{let e=document.querySelectorAll(".smooth-scrollbar");const t=()=>{e.forEach((e=>{setTimeout((()=>{let t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((e=>{e.addEventListener("click",t)}));let o=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof o&&null!=o&&o.forEach((e=>{let o=e.querySelector(".fa");"undefined"!=typeof o&&null!=o&&o.addEventListener("click",t)}))}),[]),(0,n.jsx)(i.Scrollbar,{...c,className:"smooth-scrollbar ".concat(t).concat(s?" ".concat(s):""),plugins:{overscroll:{effect:"bounce"}},children:o})};s.defaultProps={theme:"light"};const c=(0,a.memo)(s)},29213:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var a=o(72791),i=o(34290),n=o(96006),s=o(80184);const c=e=>(0,s.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map(((t,o)=>"social-icon-style-11"!==e.theme?(0,s.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:o*e.animationDelay},children:(0,s.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,s.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,s.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,s.jsx)("span",{})]})},o):(0,s.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:o*e.animationDelay},children:(0,s.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,s.jsx)("div",{className:"social-back",children:(0,s.jsx)("span",{children:t.socialback})}),(0,s.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,s.jsx)("i",{className:t.icon}),t.name&&(0,s.jsx)("span",{children:t.name?t.name:"icon"})]})]})},o)))});c.defaultProps={data:n.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};const l=(0,a.memo)(c)},96006:(e,t,o)=>{"use strict";o.d(t,{Fg:()=>c,JV:()=>h,Q6:()=>r,Tq:()=>s,X_:()=>i,Xy:()=>m,gE:()=>f,k9:()=>l,kJ:()=>d,mc:()=>a,y:()=>n,zm:()=>p});const a=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],h=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},25308:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var a=o(72791),i=o(81620),n=o(34290),s=o(89743),c=o(58563),l=o(51496),r=o(80184);const m=(e,t,o)=>{switch(e.theme){case"testimonials-style-01":return(0,r.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,r.jsx)("i",{className:"ti-quote-left absolute -top-[25px] left-[50px] inline-block text-[50px] z-10"}),(0,r.jsx)("p",{className:"text-xmd w-[75%] mb-0 lg:w-[85%] md:w-[80%]",children:t.content}),(0,r.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",alt:"",src:t.img}),(0,r.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md font-medium leading-[20px] text-darkgray block uppercase",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"block text-sm uppercase",children:t.designation})]})]})]});case"testimonials-style-02":return(0,r.jsxs)("div",{className:"".concat(e.theme," "),children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"w-full h-auto",src:t.img,alt:""}),(0,r.jsxs)("div",{className:"bg-white p-[49px] text-center relative",children:[(0,r.jsx)("div",{className:"testimonials-rounded-icon absolute -top-[40px] left-1/2 text-[28px] h-[75px] w-[75px] leading-[71px] overflow-hidden bg-white rounded-full flex items-center justify-center",children:(0,r.jsx)("i",{className:"fa fa-quote-left"})}),t.content&&(0,r.jsx)("p",{className:"mb-7",children:t.content}),t.name&&(0,r.jsx)("span",{className:"font-serif font-medium text-center text-darkgray block",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"block font-serif text-sm font-medium",children:t.designation})]})]});case"testimonials-style-03":return(0,r.jsxs)("div",{className:"".concat(e.theme),children:[(0,r.jsx)("div",{className:"testimonials-bubble py-8 px-12 lg:px-8 relative bg-white mb-[35px] rounded",children:t.content&&(0,r.jsx)("p",{className:"mb-0",children:t.content})}),(0,r.jsxs)("div",{className:"px-[20px] flex items-center",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",src:t.img,alt:""}),(0,r.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md font-medium leading-[24px] text-darkgray block",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"block text-sm",children:t.designation})]})]})]});case"testimonials-style-04":return(0,r.jsxs)("div",{className:"".concat(e.theme),children:[(0,r.jsx)("div",{className:"testimonials-bubble relative rounded-[5px] py-[30px] px-[40px] bg-white mb-[35px]",children:t.content&&(0,r.jsx)("p",{className:"mb-0",children:t.content})}),(0,r.jsxs)("div",{className:"items-center px-[20px] flex",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[15px]",src:t.img,alt:""}),(0,r.jsxs)("div",{className:"items-center",children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md leading-[16px] font-medium text-darkgray block",children:t.name}),t.rating&&(0,r.jsx)("div",{className:"star-rating",children:(0,r.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})})]})]})]});case"testimonials-style-05":return(0,r.jsx)("div",{className:"".concat(e.theme," bg-white py-[3rem] px-[3.5rem] rounded-lg lg:p-10"),children:(0,r.jsxs)("div",{className:"items-center flex flex-wrap",children:[t&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[20px]",alt:"",src:t.img}),(0,r.jsxs)("div",{children:[t.rating&&(0,r.jsx)("div",{className:"star-rating",children:(0,r.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})}),t.name&&(0,r.jsx)("span",{className:"font-serif text-md leading-5 font-medium text-gray-900 block",children:t.name}),t.company&&(0,r.jsx)("span",{className:"text-sm",children:t.company})]}),(0,r.jsx)("div",{className:"testimonials-bubble relative bg-white mt-[25px]",children:t.content&&(0,r.jsx)("p",{className:"mb-0",children:t.content})})]})});default:return(0,r.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,r.jsx)("i",{className:"ti-quote-left"}),(0,r.jsx)("p",{className:"text-xmd w-75 mb-0",children:t.content}),(0,r.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[16px]",alt:"",src:t.img}),(0,r.jsxs)("div",{children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md font-medium text-darkgray block",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"text-sm",children:t.designation})]})]})]})}},d=e=>{const t=(0,a.useRef)(null);return!0===e.carousel?(0,r.jsx)(c.tq,{ref:t,modules:[l.W_,l.tl,l.pt,l.N1],className:"testimonials-swiper".concat(e.className?" ".concat(e.className):""),...e.carouselOption,children:e.data.map(((t,o)=>(0,r.jsxs)(c.o5,{...e.animation,transition:{delay:o*e.animationDelay},children:[" ",m(e,t)]},o)))}):(0,r.jsx)(s.Z,{className:e.grid,children:e.data.map(((t,o)=>(0,r.jsxs)(n.m.div,{className:"col flex justify-center".concat(e.className?" ".concat(e.className):""),...e.animation,transition:{delay:o*e.animationDelay},children:[" ",m(e,t)]},o)))})};d.defaultProps={data:i.W7,animationDelay:.5,theme:"testimonials-style-01",carouselOption:{slidesPerView:1,loop:!0,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:3}}}};const f=(0,a.memo)(d)},81620:(e,t,o)=>{"use strict";o.d(t,{A7:()=>s,J4:()=>c,Mh:()=>n,W7:()=>a,_g:()=>i});const a=[{name:"SHOKO MUGIKURA",designation:"GRAPHIC DESIGNER",content:"Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work.",img:"https://via.placeholder.com/125x125"},{name:"JONSAN DONNER",designation:"SALES MANAGER",content:"Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.",img:"https://via.placeholder.com/125x125"},{name:"MACKANGY ROSE",designation:"CREATIVE DIRECTOR",content:"This is an excellent company! I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",img:"https://via.placeholder.com/125x125"}],i=[{name:"JEREMY SMITH",designation:"CO FOUNDER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"SHOKO MUGIKURA",designation:"CREATIVE HEAD",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"HERMAN MILLER",designation:"HR MANAGER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"}],n=[{name:"Herman Miller",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Jeremy Girard",designation:"Microsoft Corporation",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Alexander Harvard",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"}],s=[{name:"Herman Miller",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Alexander Harvard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5}],c=[{name:"Herman Miller",content:"Simply superb resort. Management and staff deserve special appreciation and thanks for hospitality.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Loretta Smith",content:"We are back home now and feel that it is only right to write to you to express our warmest gratitude.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Wonderful place to live for holidays. Can\u2019t believe can have such beautiful environment to spend peaceful.",img:"https://via.placeholder.com/125x125",rating:5}]},62752:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var a=o(72791);function i(e,t){(0,a.useEffect)((()=>{const o=o=>{e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}}),[e,t])}},36515:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>g});o(72791);var a=o(47022),i=o(89743),n=o(2677),s=o(11087),c=o(34290),l=o(55347),r=o(21240),m=o(44368),d=o(49823),f=o(25308),p=o(81620),h=o(98899),b=o(80184);const g=e=>(0,b.jsxs)("div",{style:e.style,children:[(0,b.jsx)(d.default,{}),(0,b.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,b.jsx)(a.Z,{children:(0,b.jsxs)(i.Z,{className:"items-center justify-center mb-0",children:[(0,b.jsx)(n.Z,{xl:8,lg:6,children:(0,b.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Footer style 09"})}),(0,b.jsx)(n.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,b.jsxs)("ul",{className:"xs-text-center",children:[(0,b.jsx)("li",{children:(0,b.jsx)(s.rU,{to:"/","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Home"})}),(0,b.jsx)("li",{children:(0,b.jsx)(s.rU,{to:"#","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Features"})}),(0,b.jsx)("li",{children:"Footer"})]})})]})})}),(0,b.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white",children:(0,b.jsx)(a.Z,{children:(0,b.jsx)(m.default,{grid:"row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-5",theme:"icon-with-text-03 text-center",data:h.RR,animation:r.Ji,animationDelay:0})})}),(0,b.jsx)("section",{className:"bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(i.Z,{className:"justify-center",children:(0,b.jsxs)(c.m.div,{className:"text-center mb-20 col-xl-5 col-lg-6 col-sm-8",...r.Ji,children:[(0,b.jsx)("span",{className:"text-center font-serif text-md inline-block font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] uppercase mb-[20px] sm:mb-[15px]",children:" What people are saying "}),(0,b.jsx)("h5",{className:"font-serif text-[2.3rem] justify-center text-center text-darkgray font-semibold -tracking-[1px]",children:" What our valuable customer are saying about us? "})]})}),(0,b.jsx)(i.Z,{className:"justify-center",children:(0,b.jsx)(n.Z,{className:"col-12 col-md-12 col-sm-8",children:(0,b.jsx)(f.Z,{grid:"row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center",theme:"testimonials-style-03",data:p.Mh,animation:r.Ji,animationDelay:.3})})})]})}),(0,b.jsx)(l.Z,{className:"bg-darkgray",logo:"https://via.placeholder.com/111x36",theme:"dark"})]})},80888:(e,t,o)=>{"use strict";var a=o(79047);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,o,i,n,s){if(s!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return o.PropTypes=o,o}},52007:(e,t,o)=>{e.exports=o(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43360:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var a=o(41418),i=o.n(a),n=o(72791),s=o(15341),c=o(10162),l=o(80184);const r=n.forwardRef(((e,t)=>{let{as:o,bsPrefix:a,variant:n="primary",size:r,active:m=!1,disabled:d=!1,className:f,...p}=e;const h=(0,c.vE)(a,"btn"),[b,{tagName:g}]=(0,s.FT)({tagName:o,disabled:d,...p}),x=g;return(0,l.jsx)(x,{...b,...p,ref:t,disabled:d,className:i()(f,h,m&&"active",n&&"".concat(h,"-").concat(n),r&&"".concat(h,"-").concat(r),p.href&&d&&"disabled")})}));r.displayName="Button";const m=r},80473:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var a=o(52007),i=o.n(a),n=o(72791),s=o(41418),c=o.n(s),l=o(80184);const r={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},m=n.forwardRef(((e,t)=>{let{className:o,variant:a,"aria-label":i="Close",...n}=e;return(0,l.jsx)("button",{ref:t,type:"button",className:c()("btn-close",a&&"btn-close-".concat(a),o),"aria-label":i,...n})}));m.displayName="CloseButton",m.propTypes=r;const d=m},47022:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(41418),i=o.n(a),n=o(72791),s=o(10162),c=o(80184);const l=n.forwardRef(((e,t)=>{let{bsPrefix:o,fluid:a=!1,as:n="div",className:l,...r}=e;const m=(0,s.vE)(o,"container"),d="string"===typeof a?"-".concat(a):"-fluid";return(0,c.jsx)(n,{ref:t,...r,className:i()(l,a?"".concat(m).concat(d):m)})}));l.displayName="Container";const r=l},27472:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var a=o(72791),i=o(41418),n=o.n(i),s=o(80184);const c=e=>a.forwardRef(((t,o)=>(0,s.jsx)("div",{...t,ref:o,className:n()(t.className,e)})))},92199:(e,t,o)=>{"use strict";o.d(t,{L:()=>i});var a=o(72791),i=o(26219).j?a.useLayoutEffect:a.useEffect}}]);
//# sourceMappingURL=9748.19aad6d2.chunk.js.map