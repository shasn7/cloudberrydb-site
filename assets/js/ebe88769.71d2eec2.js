"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[7086],{45583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>E,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(85893),i=n(11151);const r={title:"CREATE USER"},a="CREATE USER",o={id:"sql-stmts/create-user",title:"CREATE USER",description:"Defines a new database role.",source:"@site/docs/sql-stmts/create-user.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-user",permalink:"/docs/sql-stmts/create-user",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/docs/sql-stmts/create-user.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1724320103,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{title:"CREATE USER"},sidebar:"docsbars",previous:{title:"CREATE USER MAPPING",permalink:"/docs/sql-stmts/create-user-mapping"},next:{title:"CREATE VIEW",permalink:"/docs/sql-stmts/create-view"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-user",children:"CREATE USER"}),"\n",(0,s.jsx)(t.p,{children:"Defines a new database role."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE USER <name> [[WITH] <option> [ ... ]]\n\nwhere option can be:\n      SUPERUSER | NOSUPERUSER\n    | CREATEDB | NOCREATEDB\n    | CREATEROLE | NOCREATEROLE\n\xa0\xa0\xa0\xa0| CREATEEXTTABLE | NOCREATEEXTTABLE \n\xa0\xa0\xa0\xa0\xa0\xa0[ ( <attribute>='<value>'[, ...] ) ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0where <attributes> and <value> are:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0type='readable'|'writable'\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0protocol='gpfdist'|'http'\n    | INHERIT | NOINHERIT\n    | LOGIN | NOLOGIN\n    | REPLICATION | NOREPLICATION\n    | BYPASSRLS | NOBYPASSRLS\n    | CONNECTION LIMIT <connlimit>\n    | [ ENCRYPTED ] PASSWORD '<password>' | PASSWORD NULL\n    | VALID UNTIL '<timestamp>'\n    | IN ROLE <role_name> [, ...]\n    | IN GROUP <role_name>\n    | ROLE <role_name> [, ...]\n    | ADMIN <role_name> [, ...]\n    | USER <role_name> [, ...]\n    | SYSID <uid>\n\xa0\xa0\xa0\xa0| RESOURCE QUEUE <queue_name>\n\xa0\xa0\xa0\xa0| RESOURCE GROUP <group_name>\n    | [ DENY <deny_point> ]\n    | [ DENY BETWEEN <deny_point> AND <deny_point>]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CREATE USER"})," is an alias for ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-role",children:"CREATE ROLE"}),". The only difference is that when the command ",(0,s.jsx)(t.code,{children:"CREATE USER"})," is invoked, ",(0,s.jsx)(t.code,{children:"LOGIN"})," is assumed by default, whereas ",(0,s.jsx)(t.code,{children:"NOLOGIN"})," is assumed when the command invoked is ",(0,s.jsx)(t.code,{children:"CREATE ROLE"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CREATE USER"})," statement is a Cloudberry Database extension. The SQL standard leaves the definition of users to the implementation."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-role",children:"CREATE ROLE"})})]})}function E(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);