"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[8610],{63267:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});s(67294);var a=s(90512),n=s(95999),l=s(88824),i=s(1944),r=s(35281),o=s(33692),c=s(31560),d=s(68955),m=s(85893);function h(e){const{metadata:t}=e,{previousPage:s,nextPage:a}=t;return(0,m.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,m.jsx)(d.Z,{permalink:s,title:(0,m.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),a&&(0,m.jsx)(d.Z,{permalink:a,title:(0,m.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}var g=s(90197),u=s(23798),p=s(22212),x=s(92503);function b(e){const t=function(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const s=b(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.d,{title:s}),(0,m.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:s,sidebar:a,listMetadata:l}=e;const i=b(t);return(0,m.jsxs)(c.Z,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(p.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(x.Z,{as:"h1",children:i}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:s}),(0,m.jsx)(h,{metadata:l})]})}function v(e){return(0,m.jsxs)(i.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(f,{...e})]})}},22212:(e,t,s)=>{s.d(t,{Z:()=>g});s(67294);var a=s(90512),n=s(95999),l=s(35742),i=s(85893);function r(){return(0,i.jsx)(n.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(n.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(l.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(35281),m=s(59047);function h(e){let{className:t}=e;return(0,i.jsx)(m.Z,{type:"caution",title:(0,i.jsx)(r,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,i.jsx)(o,{})})}function g(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(h,{...e})]})}},88824:(e,t,s)=>{s.d(t,{c:()=>c});var a=s(67294),n=s(52263);const l=["zero","one","two","few","many","other"];function i(e){return l.filter((t=>e.includes(t)))}const r={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),r}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),l=s.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(s,t,e)}}},61311:(e,t,s)=>{s.d(t,{Z:()=>j});var a,n=s(16550),l=s(67294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},i.apply(this,arguments)}const r=e=>{let{title:t,titleId:s,...n}=e;return l.createElement("svg",i({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":s},n),t?l.createElement("title",{id:s},t):null,a||(a=l.createElement("path",{d:"M15 15a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 15V8.25H.75L8.495 1.21a.75.75 0 0 1 1.01 0L17.25 8.25H15V15ZM5.625 9.75a3.375 3.375 0 0 0 6.75 0h-1.5a1.875 1.875 0 0 1-3.75 0h-1.5Z",fill:"#212121"})))};var o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},c.apply(this,arguments)}const d=e=>{let{title:t,titleId:s,...a}=e;return l.createElement("svg",c({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":s},a),t?l.createElement("title",{id:s},t):null,o||(o=l.createElement("path",{d:"M15 15a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 15V8.25H.75L8.495 1.21a.75.75 0 0 1 1.01 0L17.25 8.25H15V15ZM5.625 9.75a3.375 3.375 0 0 0 6.75 0h-1.5a1.875 1.875 0 0 1-3.75 0h-1.5Z",fill:"#fff",opacity:.3})))};var m;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},h.apply(this,arguments)}const g=e=>{let{title:t,titleId:s,...a}=e;return l.createElement("svg",h({className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:16,height:16,"aria-labelledby":s},a),t?l.createElement("title",{id:s},t):null,m||(m=l.createElement("path",{d:"m403.5 870.1 135.1-741.3h81.9L485.4 870.1z",fill:"#606060"})))};var u=s(90512),p=s(12714);const x={breadcrumbs:"breadcrumbs_JXRB",mdxPage:"mdxPage_GpzV",backPath:"backPath_eKch",backLogoA:"backLogoA_iDmL",backLogoSvg:"backLogoSvg_u_DG",backLogoLightSvg:"backLogoLightSvg_VeXY",line:"line_H094",path:"path_MxGL",leafPath:"leafPath_R5jn"};var b=s(85893);function j(e){let t=function(){let e=(0,n.TH)().pathname.slice(1);e.endsWith("/")&&(e=e.slice(0,-1)),e=e.replace("zh/",""),e=e[0].toUpperCase()+e.slice(1);const t=e.split("/").map((e=>({name:e})));for(let s=0;s<t.length-1;s++)t[s].href=`/${t[s].name.toLocaleLowerCase()}`;return t}();const s=(0,n.TH)();e.path?.length&&(t=e.path);const a=s.pathname.split("/").filter((e=>""!=e&&"zh"!=e&&"blog"!=e)).length;return(0,b.jsxs)("div",{className:(0,u.Z)(x.breadcrumbs,e.className,{[x.mdxPage]:2===a}),style:e.style,children:[(0,b.jsxs)(p.Z,{to:"/",className:x.backLogoA,children:[(0,b.jsx)(d,{className:x.backLogoSvg}),(0,b.jsx)(r,{className:x.backLogoLightSvg})]}),(0,b.jsx)("div",{className:x.path,children:t.map((e=>{const t=e.href?(0,b.jsx)(p.Z,{className:x.backPath,to:e.href,children:e.name}):(0,b.jsx)("span",{className:x.leafPath,children:e.name});return(0,b.jsxs)(l.Fragment,{children:[(0,b.jsx)(g,{className:x.line}),t]},e.name)}))})]})}},31560:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(16550),n=s(61311),l=s(76801),i=s(90512),r=s(67294),o=s(87524);const c={aside:"aside_uZWJ",sidebar:"sidebar_me8e",sidebarItemTitle:"sidebarItemTitle_MDMA",sidebarItem:"sidebarItem_PSMt",active:"active_GuJd"};var d=s(85893);function m(e){const t=(0,a.TH)(),s=new URLSearchParams(t.search).get("tag"),n=(e.items||[]).map((e=>e.content.metadata.tags.map((e=>e.label)))).flat(1),l=n.filter(((e,t)=>n.indexOf(e)===t));l.unshift("All");const[o,m]=(0,r.useState)(s||l[0]),h=(0,a.k6)();return(0,d.jsx)("aside",{className:c.aside,children:(0,d.jsxs)("nav",{className:(0,i.Z)(c.sidebar,"thin-scrollbar"),children:[(0,d.jsx)("div",{className:(0,i.Z)(c.sidebarItemTitle),children:"Blog categories"}),(0,d.jsx)("ul",{className:(0,i.Z)(c.sidebarItemList,"clean-list"),children:l.map((e=>(0,d.jsx)("li",{className:(0,i.Z)(c.sidebarItem,{[c.active]:o===e}),onClick:()=>(e=>{m(e),h.push({search:`?tag=${e}`})})(e),children:e},e)))})]})})}var h=s(13961),g=s(13102),u=s(12714);function p(e){let{sidebar:t}=e;const s=(0,h.c)(t.items);return(0,d.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,d.jsx)("li",{className:"menu__list-item",children:(0,d.jsx)(u.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,d.jsx)(g.Zo,{component:p,props:e})}function b(e){let{sidebar:t,items:s}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?(0,d.jsx)(x,{sidebar:t}):(0,d.jsx)(m,{items:s}):null}const j={main:"main_RZsv",blogList:"blogList_hWaw",breadcrumbs:"breadcrumbs_SbBL",listWrap:"listWrap_wBG_",blogDetail:"blogDetail_l7Ou"};function f(e){const[t,s]=(0,r.useState)(),{sidebar:o,toc:c,children:m,...h}=e,g=(0,a.TH)();return(0,r.useEffect)((()=>{let e=g.pathname.replace("/zh","").match(/^\/(blog)\/(.+)$/);s(e?[{name:e[1][0].toUpperCase()+e[1].slice(1),href:"/blog"},{name:e[2][0].toUpperCase()+e[2].slice(1)}]:[])}),[g]),(0,d.jsx)(l.Z,{...h,children:(0,d.jsx)("div",{className:"blog-container",style:{marginBottom:62},children:(0,d.jsxs)("div",{className:"flex",style:{padding:"0 var(--mobile-padding-width)"},children:[e.items&&(0,d.jsx)(b,{sidebar:o,items:e.items}),(0,d.jsxs)("main",{className:(0,i.Z)(j.main,{[j.blogList]:!!e.items,[j.blogDetail]:!e.items}),itemScope:!0,itemType:"https://schema.org/Blog",children:[(0,d.jsx)(n.Z,{className:j.breadcrumbs,path:t}),(0,d.jsx)("div",{className:j.listWrap,children:m})]})]})})})}},59534:(e,t,s)=>{s.d(t,{Z:()=>T});var a=s(9460),n=s(67294),l=s(85893);function i(e){let{children:t,className:s}=e;const{isBlogPostPage:n}=(0,a.C)();return(0,l.jsx)("article",{style:{width:n?"auto":440,height:n?"auto":383},className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:t})}var r=s(90512),o=s(18780),c=s(44332);function d(e){let{children:t,className:s}=e;const{isBlogPostPage:n}=(0,a.C)();return(0,l.jsx)("div",{id:n?o.blogPostContainerID:void 0,className:(0,r.Z)("markdown",s),itemProp:"articleBody",children:n&&(0,l.jsx)(c.Z,{children:t})})}const m="title_Ktoa",h="detailTitle_mU9U";function g(e){let{className:t}=e;const{metadata:s,isBlogPostPage:n}=(0,a.C)(),{title:i}=s;return(0,l.jsx)("div",{className:(0,r.Z)(m,t),itemProp:"headline",children:n?(0,l.jsx)("span",{className:(0,r.Z)(h),children:i}):(0,l.jsx)("div",{className:"two-lines-ellipsis",children:i})})}function u(e){let{style:t}=e;const{frontMatter:{tags:s}}=(0,a.C)(),n=s.map((e=>(0,l.jsx)("span",{style:{marginRight:14,borderRadius:24,fontSize:12,background:"var(--tags-bg-color)",color:"var(--active-color)",padding:"5px 9px"},children:e.toString()},e.toString())));return(0,l.jsx)("div",{style:t,children:n})}var p=s(44996);function x(e){const{metadata:t}=(0,a.C)();return(0,l.jsx)("img",{style:{width:"100%",cursor:"pointer",...e.style},onClick:e.onClick,src:(0,p.Z)(t.frontMatter.image),alt:""})}function b(e){let{style:t}=e;const{metadata:s}=(0,a.C)();return(0,l.jsx)("div",{className:"two-lines-ellipsis",style:{color:"var(--sub-text-color-2)",lineHeight:"26px",...t},children:s.description})}var j=s(95551);const f={popperContent:"popperContent_KhBW",isOpen:"isOpen_Y9Y2",arrow:"arrow_rqaT"};function v(e){const t=(0,n.useRef)(),s=(0,n.useRef)(),[a,i]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{(0,j.fi)(t.current,s.current,{placement:"bottom",modifiers:[]})}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"popper-target",ref:t,onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},children:e.children}),(0,l.jsx)("div",{ref:s,className:f.contentRef,children:(0,l.jsxs)("div",{className:(0,r.Z)(f.popperContent,{[f.isOpen]:a}),children:[(0,l.jsx)("span",{children:e.content}),(0,l.jsx)("div",{className:f.arrow})]})})]})}function w(e){let{styles:t}=e;const{metadata:{authors:s,formattedDate:n},assets:i}=(0,a.C)();if(0===s.length)return null;const r=s.map((e=>(0,l.jsx)("span",{style:{width:20,height:20,borderRadius:"50%",display:"inline-block",overflow:"hidden",boxSizing:"border-box",border:"1px solid var(--portrait-border-color)"},children:(0,l.jsx)(v,{content:e.name,children:(0,l.jsx)("img",{style:{width:18,height:18},src:(0,p.Z)(e.imageURL),srcSet:e.imageURL,alt:""})})},e.name)));return(0,l.jsxs)("div",{style:{color:"var(--sub-text-color-2)",fontSize:12,display:"flex",alignItems:"center",marginTop:17,...t},children:[(0,l.jsx)("span",{children:"By "}),(0,l.jsx)("span",{style:{marginRight:23,marginLeft:10,height:22},children:r}),(0,l.jsx)("span",{children:n})]})}const _="blogList_FFmj",N="blogDetail_lT_X",Z="tags_c74R",y="text_ny23";var k=s(12714),P=s(79910);const L=()=>{const{metadata:{permalink:e}}=(0,a.C)();return(0,a.C)().metadata.frontMatter.zh_hidden&&(0,P.cD)()?null:(0,l.jsx)(i,{className:_,children:(0,l.jsx)("header",{style:{padding:"7px 6px"},className:"link-wrap",children:(0,l.jsxs)(k.Z,{to:e,children:[(0,l.jsx)(x,{}),(0,l.jsxs)("div",{style:{padding:"0 11px"},children:[(0,l.jsxs)("div",{style:{cursor:"pointer"},children:[(0,l.jsx)(u,{style:{marginTop:6,marginBottom:17}}),(0,l.jsx)(g,{}),(0,l.jsx)(b,{style:{marginTop:17}})]}),(0,l.jsx)(w,{styles:{position:"absolute",bottom:26}})]})]})})})},C=e=>{let{children:t}=e;return(0,l.jsxs)(i,{className:N,children:[(0,l.jsxs)("header",{children:[(0,l.jsx)(g,{}),(0,l.jsx)(w,{})]}),(0,l.jsx)(d,{children:t}),(0,l.jsxs)("div",{className:Z,children:[(0,l.jsx)("span",{className:y,children:"Tags:"}),(0,l.jsx)(u,{})]})]})};function T(e){let{children:t}=e;const{isBlogPostPage:s}=(0,a.C)(),n=s?C:L;return(0,l.jsx)(n,{children:t})}},23798:(e,t,s)=>{s.d(t,{Z:()=>i});s(67294);var a=s(9460),n=s(59534),l=s(85893);function i(e){let{items:t,component:s=n.Z}=e;return(0,l.jsx)(l.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,l.jsx)(a.n,{content:t,children:(0,l.jsx)(s,{children:(0,l.jsx)(t,{})})},t.metadata.permalink)}))})}},68955:(e,t,s)=>{s.d(t,{Z:()=>i});s(67294);var a=s(90512),n=s(12714),l=s(85893);function i(e){const{permalink:t,title:s,subLabel:i,isNext:r}=e;return(0,l.jsxs)(n.Z,{className:(0,a.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,l.jsx)("div",{className:"pagination-nav__label single-line-overflow hide-before-after",children:s})]})}}}]);