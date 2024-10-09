"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[8364],{95715:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(85893),t=s(11151);const i={title:"ALTER SERVER"},o="ALTER SERVER",a={id:"sql-stmts/alter-server",title:"ALTER SERVER",description:"Changes the definition of a foreign server.",source:"@site/docs/sql-stmts/alter-server.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-server",permalink:"/docs/sql-stmts/alter-server",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/docs/sql-stmts/alter-server.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1724320103,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{title:"ALTER SERVER"},sidebar:"docsbars",previous:{title:"ALTER SEQUENCE",permalink:"/docs/sql-stmts/alter-sequence"},next:{title:"ALTER STATISTICS",permalink:"/docs/sql-stmts/alter-statistics"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alter-server",children:"ALTER SERVER"}),"\n",(0,r.jsx)(n.p,{children:"Changes the definition of a foreign server."}),"\n",(0,r.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER SERVER <name> [ VERSION '<new_version>' ]\n    [ OPTIONS ( [ ADD | SET | DROP ] <option> ['<value>'] [, ... ] ) ]\n\nALTER SERVER <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n                \nALTER SERVER <name> RENAME TO <new_name>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALTER SERVER"})," changes the definition of a foreign server. The first form of the command changes the version string or the generic options of the server. Cloudberry Database requires at least one clause. The second and third forms of the command change the owner or the name of the server."]}),"\n",(0,r.jsx)(n.p,{children:"To alter the server, you must be the owner of the server. To alter the owner you must:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Own the server."}),"\n",(0,r.jsx)(n.li,{children:"Be a direct or indirect member of the new owning role."}),"\n",(0,r.jsxs)(n.li,{children:["Have ",(0,r.jsx)(n.code,{children:"USAGE"})," privilege on the server's foreign-data wrapper."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Superusers automatically satisfy all of these criteria."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})})}),"\n",(0,r.jsx)(n.p,{children:"The name of an existing server."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_version"})})}),"\n",(0,r.jsx)(n.p,{children:"The new server version."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )"})})}),"\n",(0,r.jsxs)(n.p,{children:["Change the server's options. ",(0,r.jsx)(n.code,{children:"ADD"}),", ",(0,r.jsx)(n.code,{children:"SET"}),", and ",(0,r.jsx)(n.code,{children:"DROP"})," specify the action to perform. If no operation is explicitly specified, the default operation is ",(0,r.jsx)(n.code,{children:"ADD"}),". Option names must be unique. Cloudberry Database validates names and values using the server's foreign-data wrapper library."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,r.jsx)(n.p,{children:"Specifies the new owner of the foreign server."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_name"})})}),"\n",(0,r.jsx)(n.p,{children:"Specifies the new name of the foreign server."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Change the definition of a server named ",(0,r.jsx)(n.code,{children:"foo"})," by adding connection options:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER SERVER foo OPTIONS (host 'foo', dbname 'foodb');\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Change the option named ",(0,r.jsx)(n.code,{children:"host"})," for a server named ",(0,r.jsx)(n.code,{children:"foo"}),", and set the server version:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER SERVER foo VERSION '9.1' OPTIONS (SET host 'baz');\n"})}),"\n",(0,r.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALTER SERVER"})," conforms to ISO/IEC 9075-9 (SQL/MED). The ",(0,r.jsx)(n.code,{children:"OWNER TO"})," and ",(0,r.jsx)(n.code,{children:"RENAME"})," forms are Cloudberry Database extensions."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sql-stmts/create-server",children:"CREATE SERVER"}),", ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/drop-server",children:"DROP SERVER"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(67294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);