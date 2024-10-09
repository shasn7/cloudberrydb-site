"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[4813],{23639:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=t(85893),n=t(11151);const a={title:"ALTER TEXT SEARCH PARSER"},i="ALTER TEXT SEARCH PARSER",c={id:"sql-stmts/alter-text-search-parser",title:"ALTER TEXT SEARCH PARSER",description:"Description",source:"@site/docs/sql-stmts/alter-text-search-parser.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-text-search-parser",permalink:"/docs/sql-stmts/alter-text-search-parser",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/docs/sql-stmts/alter-text-search-parser.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1724320103,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{title:"ALTER TEXT SEARCH PARSER"},sidebar:"docsbars",previous:{title:"ALTER TEXT SEARCH DICTIONARY",permalink:"/docs/sql-stmts/alter-text-search-dictionary"},next:{title:"ALTER TEXT SEARCH TEMPLATE",permalink:"/docs/sql-stmts/alter-text-search-template"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description-1",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"alter-text-search-parser",children:"ALTER TEXT SEARCH PARSER"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Changes the definition of a text search parser."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER TEXT SEARCH PARSER <name> RENAME TO <new_name>\nALTER TEXT SEARCH PARSER <name> SET SCHEMA <new_schema>\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ALTER TEXT SEARCH PARSER"})," changes the definition of a text search parser. Currently, the only supported functionality is to change the parser's name."]}),"\n",(0,r.jsxs)(s.p,{children:["You must be a superuser to use ",(0,r.jsx)(s.code,{children:"ALTER TEXT SEARCH PARSER"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name (optionally schema-qualified) of an existing text search parser."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"new_name"})})}),"\n",(0,r.jsx)(s.p,{children:"The new name of the text search parser."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"new_schema"})})}),"\n",(0,r.jsx)(s.p,{children:"The new schema for the text search parser."}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(s.p,{children:["There is no ",(0,r.jsx)(s.code,{children:"ALTER TEXT SEARCH PARSER"})," statement in the SQL standard."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sql-stmts/create-text-search-parser",children:"CREATE TEXT SEARCH PARSER"}),", ",(0,r.jsx)(s.a,{href:"/docs/sql-stmts/drop-text-search-parser",children:"DROP TEXT SEARCH PARSER"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>i});var r=t(67294);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);