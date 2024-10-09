"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[9525],{51532:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=s(85893),i=s(11151);const a={title:"CREATE TEXT SEARCH TEMPLATE"},r="CREATE TEXT SEARCH TEMPLATE",c={id:"sql-stmts/create-text-search-template",title:"CREATE TEXT SEARCH TEMPLATE",description:"Description",source:"@site/docs/sql-stmts/create-text-search-template.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-text-search-template",permalink:"/zh/docs/sql-stmts/create-text-search-template",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/docs/sql-stmts/create-text-search-template.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1724320103,formattedLastUpdatedAt:"2024\u5e748\u670822\u65e5",frontMatter:{title:"CREATE TEXT SEARCH TEMPLATE"},sidebar:"docsbars",previous:{title:"CREATE TEXT SEARCH PARSER",permalink:"/zh/docs/sql-stmts/create-text-search-parser"},next:{title:"CREATE TRANSFORM",permalink:"/zh/docs/sql-stmts/create-transform"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description-1",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-text-search-template",children:"CREATE TEXT SEARCH TEMPLATE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Defines a new text search template."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TEXT SEARCH TEMPLATE <name> (\n    [ INIT = <init_function> , ]\n    LEXIZE = <lexize_function>\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description-1",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"CREATE TEXT SEARCH TEMPLATE"})," creates a new text search template. Text search templates define the functions that implement text search dictionaries. A template is not useful by itself, but must be instantiated as a dictionary to be used. The dictionary typically specifies parameters to be given to the template functions."]}),"\n",(0,n.jsx)(t.p,{children:"If a schema name is given then the text search template is created in the specified schema. Otherwise it is created in the current schema."}),"\n",(0,n.jsxs)(t.p,{children:["You must be a superuser to use ",(0,n.jsx)(t.code,{children:"CREATE TEXT SEARCH TEMPLATE"}),'. This restriction is made because an erroneous text search template definition could confuse or even crash the server. The reason for separating templates from dictionaries is that a template encapsulates the "unsafe" aspects of defining a dictionary. The parameters that can be set when defining a dictionary are safe for unprivileged users to set, and so creating a dictionary need not be a privileged operation.']}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the text search template to be created. The name can be schema-qualified."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"init_function"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the init function for the template."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"lexize_function"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of the lexize function for the template."}),"\n",(0,n.jsx)(t.p,{children:"The function names can be schema-qualified if necessary. Argument types are not given, since the argument list for each type of function is predetermined. The lexize function is required, but the init function is optional."}),"\n",(0,n.jsx)(t.p,{children:"The arguments can appear in any order, not only the order shown above."}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There is no ",(0,n.jsx)(t.code,{children:"CREATE TEXT SEARCH TEMPLATE"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/drop-text-search-template",children:"DROP TEXT SEARCH TEMPLATE"}),", ",(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/alter-text-search-template",children:"ALTER TEXT SEARCH TEMPLATE"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var n=s(67294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);