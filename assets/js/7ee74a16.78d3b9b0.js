"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[4512],{9214:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=t(85893),n=t(11151);const l={slug:"january-2024-cloudberrydb-community-newsletter",title:"January 2024 - Cloudberry Database Community Newsletter",authors:["cloudberrydbteam"],tags:["Newsletter"],image:"/img/blog/202401.png"},i=void 0,o={permalink:"/blog/january-2024-cloudberrydb-community-newsletter",source:"@site/blog/2024-02-04-jan-monthly.md",title:"January 2024 - Cloudberry Database Community Newsletter",description:"Hello, welcome to the first issue of our community newsletter for 2024. In this newsletter, I'll share the latest updates on the Cloudberry Database project and the community.",date:"2024-02-04T00:00:00.000Z",formattedDate:"February 4, 2024",tags:[{label:"Newsletter",permalink:"/blog/tags/newsletter"}],readingTime:2.745,hasTruncateMarker:!1,authors:[{name:"Cloudberrydb Team",imageURL:"/img/blog/dbteam.png",key:"cloudberrydbteam"}],frontMatter:{slug:"january-2024-cloudberrydb-community-newsletter",title:"January 2024 - Cloudberry Database Community Newsletter",authors:["cloudberrydbteam"],tags:["Newsletter"],image:"/img/blog/202401.png"},unlisted:!1,prevItem:{title:"February 2024 - Cloudberry Database Community Newsletter",permalink:"/blog/february-2024-cloudberrydb-community-newsletter"},nextItem:{title:"PostgreSQL Technical Insights (Part 1): Data Organization",permalink:"/blog/postgresql-technical-insights-1"}},a={authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"Cloudberry Database Roadmap 2024",id:"cloudberry-database-roadmap-2024",level:3},{value:"New fresh-look Website",id:"new-fresh-look-website",level:3},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Issues",id:"issues",level:2},{value:"Tools",id:"tools",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Join us",id:"join-us",level:2}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Hello, welcome to the first issue of our community newsletter for 2024. In this newsletter, I'll share the latest updates on the Cloudberry Database project and the community."}),"\n",(0,s.jsx)(r.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(r.h3,{id:"cloudberry-database-roadmap-2024",children:"Cloudberry Database Roadmap 2024"}),"\n",(0,s.jsxs)(r.p,{children:["We have just released the Cloudberry Database Roadmap for 2024 and you can find it on ",(0,s.jsx)(r.a,{href:"https://github.com/orgs/cloudberrydb/discussions/369",children:"GitHub Discussions #369"}),". The roadmap outlines the milestones for the Cloudberry Database project in 2024, including features and enhancements, kernel updates, streaming, lakehouse, AI/ML, ecosystem, and release plan."]}),"\n",(0,s.jsx)(r.p,{children:"We would be delighted if you could join us in shaping the future of Cloudberry Database. We welcome your thoughts and ideas, so feel free to share them."}),"\n",(0,s.jsx)(r.h3,{id:"new-fresh-look-website",children:"New fresh-look Website"}),"\n",(0,s.jsx)(r.p,{children:"At the beginning of 2024, we launched our new Cloudberry Database website which has a fresh and modern design. We are confident that you will have an excellent browsing experience on the website. In case you have any suggestions, please feel free to let us know."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"New Website Screenshot",src:t(85666).Z+"",width:"1200",height:"715"})}),"\n",(0,s.jsx)(r.p,{children:"In the coming months, we will introduce support for responsive layout, light mode, and more features. Please stay tuned for these updates."}),"\n",(0,s.jsx)(r.h2,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Fix: unstable ao vacuum icw test ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/376",children:"#376"})," by @jiaqizho"]}),"\n",(0,s.jsxs)(r.li,{children:["Don't inherit parent's reloptions if child partition's AM differs ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/375",children:"#375"}),"  by @yjhjstz"]}),"\n",(0,s.jsxs)(r.li,{children:["Extend a new AM method to do acquire sample rows. ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/374",children:"#374"}),"  by @wenchaozhang-123"]}),"\n",(0,s.jsxs)(r.li,{children:["Fix configue not consistent with configure.ac ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/373",children:"#373"}),"  by @lss602726449"]}),"\n",(0,s.jsxs)(r.li,{children:["Fix CopyCreateStmtFields, lost intoPolicy field. ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/372",children:"#372"}),"  by @yjhjstz"]}),"\n",(0,s.jsxs)(r.li,{children:["As ci will failed in upterm stage, revert it now. ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/371",children:"#371"}),"  by @wenchaozhang-123"]}),"\n",(0,s.jsxs)(r.li,{children:["[AQUMV] Use view's TupleDesc to construct final columns. ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/366",children:"#366"}),"  by @avamingli"]}),"\n",(0,s.jsxs)(r.li,{children:["Fix AO/AOCS insertDesc memory issue. ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/365",children:"#365"}),"  by @avamingli"]}),"\n",(0,s.jsxs)(r.li,{children:["Fix greenplum_path.sh change PATH ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/363",children:"#363"}),"  by @Ray-Eldath"]}),"\n",(0,s.jsxs)(r.li,{children:["make  ",(0,s.jsx)(r.code,{children:"shareinput_Xslice_dsm_handle_ptr"}),"  and  ",(0,s.jsx)(r.code,{children:"shareinput_Xslice_hash"}),"  non-static ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/361",children:"#361"}),"  by @shmiwy"]}),"\n",(0,s.jsxs)(r.li,{children:["[Answer Query Using Materialized Views] Support ORDER BY in origin query ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/358",children:"#358"}),"  by @avamingli"]}),"\n",(0,s.jsxs)(r.li,{children:["[AQUMV] Avoid misbehaviors that are not supported currently. ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/357",children:"#357"}),"  by @avamingli"]}),"\n",(0,s.jsxs)(r.li,{children:["gpssh: removing b and \\r getting added to command output ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/355",children:"#355"}),"  by @wenchaozhang-123"]}),"\n",(0,s.jsxs)(r.li,{children:["[Answer Query Using Materialized Views] Support HAVING clause in origin query ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/354",children:"#354"}),"  by @avamingli"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"issues",children:"Issues"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:['[Bug] a table specified with "appendonly=true, orientation=column" appears not as an ao table ',(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/issues/368",children:"#368"}),"  by @congxuebin"]}),"\n",(0,s.jsxs)(r.li,{children:["[Bug] Copy from will fail when talble is ao_row ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/issues/364",children:"#364"}),"  by @shmiwy"]}),"\n",(0,s.jsxs)(r.li,{children:["ERROR: found two entries in pg_aocsseg_73427122 ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/issues/362",children:"#362"}),"  by @liyxbeijing"]}),"\n",(0,s.jsxs)(r.li,{children:["TeardownTCPInterconnect issue when interconnect type set as TCP ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/issues/360",children:"#360"}),"  by @liyxbeijing"]}),"\n",(0,s.jsxs)(r.li,{children:["ic-proxy: interconnect error: connection closed prematurely ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/issues/359",children:"#359"}),"  by @liyxbeijing"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"tools",children:"Tools"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"gpbackup for Cloudberry Database"})," release v1.0.3 is out, you can download the latest from its ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/gpbackup",children:"GitHub repo"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"contributors",children:"Contributors"}),"\n",(0,s.jsx)(r.p,{children:"\ud83c\udf88\ufe0f\ud83c\udf8a\ufe0f Thanks to the following contributors for helping make Cloudberry Database better this month:"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"@jiaqizho, @yjhjstz, @wenchaozhang-123, @lss602726449, @avamingli, @Ray-Eldath, @shmiwy, @congxuebin, @liyxbeijing, @tuhaihe, @TomShawn, @IdaLee666, @vitalboyzf"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"join-us",children:"Join us"}),"\n",(0,s.jsxs)(r.p,{children:["The Cloudberry Database community welcomes everyone to contribute, regardless of their level of experience. We encourage all types of contributions, no matter how small. Our ",(0,s.jsx)(r.a,{href:"https://cloudberrydb.org/contribute",children:"contribution guide"})," is available to help you get started with the process."]}),"\n",(0,s.jsxs)(r.p,{children:["In addition, we offer various channels for community members to discuss, seek help, provide feedback, and chat. You can find  ",(0,s.jsx)(r.a,{href:"https://cloudberrydb.org/support",children:"support"}),"  here. Let us know if you have any questions or feedback - we're always here to help!"]}),"\n",(0,s.jsx)(r.p,{children:"Join us and be part of our community!"})]})}function c(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85666:(e,r,t)=>{t.d(r,{Z:()=>s});const s=t.p+"assets/images/new-site-screenshot-b46c1e4947fa362020906c91d36c1117.png"},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var s=t(67294);const n={},l=s.createContext(n);function i(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);