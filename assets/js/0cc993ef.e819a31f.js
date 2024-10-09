"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[4679],{84139:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var n=t(85893),a=t(11151);const d={title:"DROP DATABASE"},o="DROP DATABASE",r={id:"sql-stmts/drop-database",title:"DROP DATABASE",description:"Removes a database.",source:"@site/docs/sql-stmts/drop-database.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-database",permalink:"/docs/sql-stmts/drop-database",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/docs/sql-stmts/drop-database.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1724320103,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{title:"DROP DATABASE"},sidebar:"docsbars",previous:{title:"DROP CONVERSION",permalink:"/docs/sql-stmts/drop-conversion"},next:{title:"DROP DOMAIN",permalink:"/docs/sql-stmts/drop-domain"}},i={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-database",children:"DROP DATABASE"}),"\n",(0,n.jsx)(s.p,{children:"Removes a database."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP DATABASE [IF EXISTS] <name>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP DATABASE"})," drops a database. It removes the catalog entries for the database and deletes the directory containing the data. It can only be run by the database owner. Also, it cannot be run while you or anyone else are connected to the target database. (Connect to ",(0,n.jsx)(s.code,{children:"postgres"})," or any other database to issue this command.)"]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP DATABASE"})," cannot be undone. Use it with care!"]})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if the database does not exist. A notice is issued in this case."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the database to remove."}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP DATABASE"})," cannot be run inside a transaction block."]}),"\n",(0,n.jsx)(s.p,{children:"This command cannot be run while connected to the target database. Thus, it might be more convenient to use the program dropdb instead, which is a wrapper around this command."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Drop the database named ",(0,n.jsx)(s.code,{children:"testdb"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP DATABASE testdb;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["There is no ",(0,n.jsx)(s.code,{children:"DROP DATABASE"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/alter-database",children:(0,n.jsx)(s.code,{children:"ALTER DATABASE"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-database",children:(0,n.jsx)(s.code,{children:"CREATE DATABASE"})})]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(67294);const a={},d=n.createContext(a);function o(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);