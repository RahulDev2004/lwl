"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8944,3739],{43739:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var o=a(72791),n=a(11087),c=a(43360),s=a(80184);const r=e=>{const t=e.themeColor&&e.themeColor[0],a=e.themeColor&&e.themeColor[1],o=e.color&&e.color[0],r=e.color&&e.color[1],l={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(o,", ").concat(r,", ").concat(o,")"):e.color};return e.href||"submit"===e.type?(0,s.jsx)(c.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:l,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,s.jsx)(i,{...e})}):(0,s.jsx)(n.rU,{style:l,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,s.jsx)(i,{...e})})},i=e=>(0,s.jsxs)(s.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,s.jsx)("span",{})]});r.defaultProps={size:"lg",style:"primary"};const l=(0,o.memo)(r)},17418:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(72791),n=a(89743),c=a(2677),s=a(43739),r=a(34290),i=a(12495),l=a(80184);const d=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.Z,{className:"".concat(e.grid).concat(e.className?" ".concat(e.className):""),children:e.data.map(((e,t)=>(0,l.jsx)(c.Z,{children:(0,l.jsx)(r.m.div,{className:"rm-rotate-box text-center",initial:{opacity:0,transform:"perspective(400px) rotateY(90deg)"},whileInView:{opacity:1,transform:"perspective(400px) rotateY(0deg)"},viewport:{once:!0},transition:{type:"spring",stiffness:100,duration:1},children:(0,l.jsx)("div",{className:"flipper to-left",children:(0,l.jsxs)("div",{className:"thumb-wrap",children:[(0,l.jsxs)("div",{className:"card-side front overflow-hidden rounded-[4px] h-[490px] lg:h-[450px]",style:{backgroundImage:"url(".concat(e.img,")")},children:[(0,l.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-70 overlay-rotatebox"}),(0,l.jsxs)("div",{className:"content-wrap px-[15px]",children:[(0,l.jsx)("span",{className:"text-white text-lg tracking-[1px] uppercase font-serif inline-block font-medium mb-[10px]",children:e.title}),(0,l.jsx)("span",{className:"text-white opacity-60 text-md uppercase tracking-[.5px] font-serif block",children:e.subtitle})]})]}),(0,l.jsxs)("div",{className:"card-side back rounded-[4px] overflow-hidden",children:[(0,l.jsx)("div",{className:"absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#fb7f87] via-[#fc8a82] to-[#f7aa80]"}),(0,l.jsxs)("div",{className:"content-wrap p-[60px] lg:px-[30px] md:px-[40px] xs:p-[30px]",children:[(0,l.jsx)("i",{className:"".concat(e.icon," text-[50px] text-white mb-[35px] inline-block")}),(0,l.jsx)("span",{className:"text-white text-xmd tracking-[1px] font-medium uppercase font-serif block mb-[10px]",children:e.title}),(0,l.jsx)("p",{className:"text-white opacity-70 mb-[25px]",children:e.content}),(0,l.jsx)(s.default,{ariaLabel:"pricing table",href:e.btnLink,className:"font-medium text-darkgray hover:text-darkgray font-serif after:bg-black uppercase btn-link after:h-[1px] md:text-md",color:"#232323",size:"xl",title:e.btnTitle})]})]})]})})})},t)))})});d.defaultProps={data:i.Z};const m=(0,o.memo)(d)},12495:(e,t,a)=>{a.d(t,{Z:()=>o});const o=[{img:"https://via.placeholder.com/720x828",title:"Ayurvedic",subtitle:"Starting from $50",icon:"line-icon-Environmental-3",btnLink:"#",btnTitle:"Discover more",content:"Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"},{img:"https://via.placeholder.com/720x828",title:"Fairness",subtitle:"Starting from $90",icon:"line-icon-Crown",btnLink:"#",btnTitle:"Discover more",content:"Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"},{img:"https://via.placeholder.com/720x828",title:"Herbal",subtitle:"Starting from $75",icon:"line-icon-Daylight",btnLink:"#",btnTitle:"Discover more",content:"Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"}]},43943:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(72791);var o=a(47022),n=a(89743),c=a(2677),s=a(11087),r=a(17418),i=a(21240),l=a(12495),d=a(80184);const m=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,d.jsx)(o.Z,{children:(0,d.jsxs)(n.Z,{className:"items-center justify-center mb-0",children:[(0,d.jsx)(c.Z,{xl:8,lg:6,children:(0,d.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Rotate box"})}),(0,d.jsx)(c.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,d.jsxs)("ul",{className:"xs-text-center",children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{"aria-label":"breadcrumb",to:"/",className:"hover:text-white",children:"Home"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{"aria-label":"breadcrumb",to:"#",className:"hover:text-white",children:"Elements"})}),(0,d.jsx)("li",{children:"Rotate box"})]})})]})})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsx)(o.Z,{children:(0,d.jsx)(n.Z,{className:"justify-center",children:(0,d.jsx)(c.Z,{xs:12,sm:8,md:12,children:(0,d.jsx)(r.Z,{data:l.Z,grid:"row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center",animation:i.Ji})})})})})]})},15341:(e,t,a)=>{a.d(t,{FT:()=>s,ZP:()=>i});var o=a(72791),n=a(80184);const c=["as","disabled"];function s(e){let{tagName:t,disabled:a,href:o,target:n,rel:c,role:s,onClick:r,tabIndex:i=0,type:l}=e;t||(t=null!=o||null!=n||null!=c?"a":"button");const d={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},d];const m=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(o))&&e.preventDefault(),a?e.stopPropagation():null==r||r(e)};return"a"===t&&(o||(o="#"),a&&(o=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:a?void 0:i,href:o,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?c:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const r=o.forwardRef(((e,t)=>{let{as:a,disabled:o}=e,r=function(e,t){if(null==e)return{};var a,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)a=c[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,c);const[i,{tagName:l}]=s(Object.assign({tagName:a,disabled:o},r));return(0,n.jsx)(l,Object.assign({},r,i,{ref:t}))}));r.displayName="Button";const i=r},43360:(e,t,a)=>{a.d(t,{Z:()=>d});var o=a(41418),n=a.n(o),c=a(72791),s=a(15341),r=a(10162),i=a(80184);const l=c.forwardRef(((e,t)=>{let{as:a,bsPrefix:o,variant:c="primary",size:l,active:d=!1,disabled:m=!1,className:x,...p}=e;const b=(0,r.vE)(o,"btn"),[f,{tagName:u}]=(0,s.FT)({tagName:a,disabled:m,...p}),h=u;return(0,i.jsx)(h,{...f,...p,ref:t,disabled:m,className:n()(x,b,d&&"active",c&&"".concat(b,"-").concat(c),l&&"".concat(b,"-").concat(l),p.href&&m&&"disabled")})}));l.displayName="Button";const d=l},47022:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(41418),n=a.n(o),c=a(72791),s=a(10162),r=a(80184);const i=c.forwardRef(((e,t)=>{let{bsPrefix:a,fluid:o=!1,as:c="div",className:i,...l}=e;const d=(0,s.vE)(a,"container"),m="string"===typeof o?"-".concat(o):"-fluid";return(0,r.jsx)(c,{ref:t,...l,className:n()(i,o?"".concat(d).concat(m):d)})}));i.displayName="Container";const l=i},89743:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(41418),n=a.n(o),c=a(72791),s=a(10162),r=a(80184);const i=c.forwardRef(((e,t)=>{let{bsPrefix:a,className:o,as:c="div",...i}=e;const l=(0,s.vE)(a,"row"),d=(0,s.pi)(),m=(0,s.zG)(),x="".concat(l,"-cols"),p=[];return d.forEach((e=>{const t=i[e];let a;delete i[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const o=e!==m?"-".concat(e):"";null!=a&&p.push("".concat(x).concat(o,"-").concat(a))})),(0,r.jsx)(c,{ref:t,...i,className:n()(o,l,...p)})}));i.displayName="Row";const l=i},92199:(e,t,a)=>{a.d(t,{L:()=>n});var o=a(72791),n=a(26219).j?o.useLayoutEffect:o.useEffect}}]);
//# sourceMappingURL=8944.be07d02d.chunk.js.map