"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2236],{92954:(e,t,s)=>{s.d(t,{Z:()=>m});var n=s(72791),i=s(34290),r=s(89743),c=s(40835),l=s(76758),a=s(80184);const o=e=>((0,n.useEffect)((()=>{let e=document.querySelectorAll(".vertical-counter"),t=0;e.forEach((e=>{t=e.querySelector("li").clientHeight,e.style.height="".concat(t,"px")})),window.addEventListener("resize",(()=>{document.querySelectorAll(".vertical-counter").forEach((e=>{t=e.querySelector("li").clientHeight,e.style.height="".concat(t,"px")}))}))}),[]),(0,a.jsx)(r.Z,{className:e.grid,children:"counter-style-02"===e.theme||"counter-style-03"===e.theme?e.data.map(((t,s)=>{let n=t.number.text&&t.number.text.toString(),r=n&&n.split("");return(0,a.jsxs)(i.m.div,{className:"".concat(e.theme," ").concat(e.className," relative"),...e.animation,transition:{delay:s*e.animationDelay},children:[(0,a.jsx)(e.as,{className:"vertical-counter inline-flex overflow-hidden mb-0".concat(t.number.class?" ".concat(t.number.class):""),children:r.map(((t,s)=>(0,a.jsx)("span",{className:"vertical-counter-number font-serif tracking-[-0.5px]","data-to":t,children:(0,a.jsxs)(i.m.ul,{className:"p-0 font-semibold",initial:{y:0},whileInView:{y:"-".concat(10*t,"%")},viewport:{once:!0},transition:{ease:"linear",duration:e.duration},children:[(0,a.jsx)("li",{children:"0"}),(0,a.jsx)("li",{children:"1"}),(0,a.jsx)("li",{children:"2"}),(0,a.jsx)("li",{children:"3"}),(0,a.jsx)("li",{children:"4"}),(0,a.jsx)("li",{children:"5"}),(0,a.jsx)("li",{children:"6"}),(0,a.jsx)("li",{children:"7"}),(0,a.jsx)("li",{children:"8"}),(0,a.jsx)("li",{children:"9"})]})},s)))}),e.postfix_sign&&(0,a.jsx)("span",{className:"postfix_sign",children:e.postfix_sign}),(0,a.jsx)("div",{children:(0,a.jsxs)("span",{className:"counter-content",children:[t.title&&(0,a.jsx)("span",{className:"counter-title",children:t.title}),t.content&&t.content]})})]},s)})):e.data.map(((t,s)=>(0,a.jsxs)(i.m.div,{className:"".concat(e.theme," ").concat(e.className," counter-col"),...e.animation,transition:{delay:s*e.animationDelay},children:[t.number&&(0,a.jsxs)(e.as,{className:"counter-numbers".concat(t.number.class?" ".concat(t.number.class):""),children:[(0,a.jsx)(c.ZP,{start:0,end:t.number.text,duration:e.duration,easing:!1,children:e=>{let{countUpRef:t,start:s}=e;return(0,a.jsx)(i.m.span,{ref:t,whileInView:s,viewport:{once:!0}})}}),e.postfix_sign&&(0,a.jsx)("span",{className:"postfix_sign",children:e.postfix_sign})]}),(t.title||t.content)&&(0,a.jsxs)("div",{className:"counter-content-section",children:[t.title&&(0,a.jsx)("span",{className:"counter-heading",children:t.title}),t.content&&(0,a.jsx)("span",{className:"counter-content",children:t.content})]})]},s)))}));o.defaultProps={data:l.zJ,theme:"counter-style-01",duration:5,animationDelay:.2,as:"h2"};const m=(0,n.memo)(o)},76758:(e,t,s)=>{s.d(t,{ID:()=>i,Z1:()=>r,kP:()=>c,ws:()=>l,zJ:()=>n});const n=[{number:{text:"2530"},title:"Custom shortcodes",content:"Lorem ipsum is simply dummy text the printing typesetting"},{number:{text:"2000"},title:"Completed projects",content:"Lorem ipsum is simply dummy text the printing typesetting"},{number:{text:"1958"},title:"Working hours",content:"Lorem ipsum is simply dummy text the printing typesetting"}],i=[{number:{text:"2500"},title:"WORKING",content:"HOURS"},{number:{text:"3250"},title:"PHOTO",content:"CAPTURE"},{number:{text:"2800"},title:"WORK",content:"COMPLETED"},{number:{text:"2750"},title:"TELEPHONIC",content:"TALK"}],r=[{number:{text:"24"},title:"COUNTRIES"},{number:{text:"28"},title:"LANGUAGES"},{number:{text:"72"},title:"CHANNELS"},{number:{text:"92"},title:"BRANDS"}],c=[{number:{text:"220"},title:"PEOPLE"},{number:{text:"380"},title:"PROJECTS"},{number:{text:"700"},title:"CHANNELS"},{number:{text:"240"},title:"BRANDS"}],l=[{number:{text:"1227",class:"text-gradient bg-gradient-to-r from-[#556fff] to-[#e66176] inline-block"},title:"Winning awards",content:"For creative design"},{number:{text:"1947",class:"text-gradient bg-gradient-to-r from-[#556fff] to-[#e66176] inline-block"},title:"Working hours",content:"Desperate for work"},{number:{text:"1587",class:"text-gradient bg-gradient-to-r from-[#556fff] to-[#e66176] inline-block"},title:"Happy clients",content:"We love clients"}]},86113:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(72791);var n=s(47022),i=s(89743),r=s(2677),c=s(34290),l=s(11087),a=s(21240),o=s(92954),m=s(76758),x=s(80184);const d=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,x.jsx)(n.Z,{children:(0,x.jsxs)(i.Z,{className:"items-center justify-center mb-0",children:[(0,x.jsx)(r.Z,{xl:8,lg:6,children:(0,x.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Counters"})}),(0,x.jsx)(r.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,x.jsxs)("ul",{className:"xs-text-center",children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"#","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,x.jsx)("li",{children:"Counters"})]})})]})})}),(0,x.jsx)(c.m.section,{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...a.Ji,children:(0,x.jsxs)(n.Z,{children:[(0,x.jsx)(i.Z,{children:(0,x.jsx)(r.Z,{className:"mb-[6%]",children:(0,x.jsx)("h6",{className:"font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]",children:"Counters style 01"})})}),(0,x.jsx)(o.Z,{as:"h5",theme:"counter-style-01",grid:"row-cols-1 row-cols-md-3 row-cols-sm-2 gap-y-10",className:"text-black",duration:7,data:m.zJ,postfix_sign:"+"})]})}),(0,x.jsx)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...a.Ji,children:(0,x.jsxs)(n.Z,{children:[(0,x.jsx)(i.Z,{children:(0,x.jsx)(r.Z,{className:"mb-[6%]",children:(0,x.jsx)("h6",{className:"font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]",children:"Counters style 02"})})}),(0,x.jsx)(o.Z,{as:"h3",theme:"counter-style-02",grid:"row-cols-1 row-cols-md-4 row-cols-sm-2 items-center justify-center md:text-center gap-y-10",className:"text-black text-[70px] text-center",data:m.ID,duration:2,animation:a.Ji,animationDelay:.2})]})}),(0,x.jsx)(c.m.section,{className:"bg-darkgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...a.Ji,children:(0,x.jsxs)(n.Z,{children:[(0,x.jsx)(i.Z,{children:(0,x.jsx)(r.Z,{className:"mb-[6%]",children:(0,x.jsx)("h6",{className:"font-serif text-white text-center font-medium mb-[25px] lg:mb-[15px]",children:"Counters style 03"})})}),(0,x.jsx)(o.Z,{theme:"counter-style-03",grid:"row-cols-1 row-cols-md-4 row-cols-sm-2 items-center justify-center gap-y-10",className:"font-serif text-white text-center md:text-start",data:m.Z1,duration:2,postfix_sign:"+",animation:a.Ji,animationDelay:.2})]})}),(0,x.jsx)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...a.Ji,children:(0,x.jsxs)(n.Z,{children:[(0,x.jsx)(i.Z,{children:(0,x.jsx)(r.Z,{className:"mb-[6%]",children:(0,x.jsx)("h6",{className:"font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]",children:"Counters style 04"})})}),(0,x.jsx)(o.Z,{theme:"counter-style-04",grid:"row-cols-1 row-cols-md-4 row-cols-sm-2 gap-y-10",className:"text-black",duration:7,data:m.kP,animation:a.Ji,animationDelay:.2})]})}),(0,x.jsx)(c.m.section,{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...a.Ji,children:(0,x.jsxs)(n.Z,{children:[(0,x.jsx)(i.Z,{children:(0,x.jsx)(r.Z,{className:"mb-[6%]",children:(0,x.jsx)("h6",{className:"font-serif text-darkgray text-center font-medium mb-[25px] lg:mb-[15px]",children:"Counters style 05"})})}),(0,x.jsx)(o.Z,{theme:"counter-style-05",grid:"row-cols-1 row-cols-md-3 text-center gap-y-10",className:"text-black",duration:2,data:m.ws,animation:a.Ji,animationDelay:.2})]})})]})},47022:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(41418),i=s.n(n),r=s(72791),c=s(10162),l=s(80184);const a=r.forwardRef(((e,t)=>{let{bsPrefix:s,fluid:n=!1,as:r="div",className:a,...o}=e;const m=(0,c.vE)(s,"container"),x="string"===typeof n?"-".concat(n):"-fluid";return(0,l.jsx)(r,{ref:t,...o,className:i()(a,n?"".concat(m).concat(x):m)})}));a.displayName="Container";const o=a},89743:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(41418),i=s.n(n),r=s(72791),c=s(10162),l=s(80184);const a=r.forwardRef(((e,t)=>{let{bsPrefix:s,className:n,as:r="div",...a}=e;const o=(0,c.vE)(s,"row"),m=(0,c.pi)(),x=(0,c.zG)(),d="".concat(o,"-cols"),p=[];return m.forEach((e=>{const t=a[e];let s;delete a[e],null!=t&&"object"===typeof t?({cols:s}=t):s=t;const n=e!==x?"-".concat(e):"";null!=s&&p.push("".concat(d).concat(n,"-").concat(s))})),(0,l.jsx)(r,{ref:t,...a,className:i()(n,o,...p)})}));a.displayName="Row";const o=a},92199:(e,t,s)=>{s.d(t,{L:()=>i});var n=s(72791),i=s(26219).j?n.useLayoutEffect:n.useEffect}}]);
//# sourceMappingURL=2236.6769bd20.chunk.js.map