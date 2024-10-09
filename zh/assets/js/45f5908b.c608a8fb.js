"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[6001],{7130:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(85893),i=t(11151);const r={title:"ALTER TEXT SEARCH DICTIONARY"},a="ALTER TEXT SEARCH DICTIONARY",o={id:"sql-stmts/alter-text-search-dictionary",title:"ALTER TEXT SEARCH DICTIONARY",description:"Changes the definition of a text search dictionary.",source:"@site/docs/sql-stmts/alter-text-search-dictionary.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-text-search-dictionary",permalink:"/zh/docs/sql-stmts/alter-text-search-dictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/docs/sql-stmts/alter-text-search-dictionary.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1724320103,formattedLastUpdatedAt:"2024\u5e748\u670822\u65e5",frontMatter:{title:"ALTER TEXT SEARCH DICTIONARY"},sidebar:"docsbars",previous:{title:"ALTER TEXT SEARCH CONFIGURATION",permalink:"/zh/docs/sql-stmts/alter-text-search-configuration"},next:{title:"ALTER TEXT SEARCH PARSER",permalink:"/zh/docs/sql-stmts/alter-text-search-parser"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-text-search-dictionary",children:"ALTER TEXT SEARCH DICTIONARY"}),"\n",(0,s.jsx)(n.p,{children:"Changes the definition of a text search dictionary."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TEXT SEARCH DICTIONARY <name> (\n    <option> [ = <value> ] [, ... ]\n)\nALTER TEXT SEARCH DICTIONARY <name> RENAME TO <new_name>\nALTER TEXT SEARCH DICTIONARY <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\nALTER TEXT SEARCH DICTIONARY <name> SET SCHEMA <new_schema>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER TEXT SEARCH DICTIONARY"})," changes the definition of a text search dictionary. You can change the dictionary's template-specific options, or change the dictionary's name or owner."]}),"\n",(0,s.jsxs)(n.p,{children:["You must be the owner of the dictionary to use ",(0,s.jsx)(n.code,{children:"ALTER TEXT SEARCH DICTIONARY"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing text search dictionary."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"option"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of a template-specific option to be set for this dictionary."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"value"})})}),"\n",(0,s.jsx)(n.p,{children:"The new value to use for a template-specific option. If the equal sign and value are omitted, then any previous setting for the option is removed from the dictionary, allowing the default to be used."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The new name of the text search dictionary."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,s.jsx)(n.p,{children:"The new owner of the text search dictionary."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,s.jsx)(n.p,{children:"The new schema for the text search dictionary."}),"\n",(0,s.jsx)(n.p,{children:"Template-specific options can appear in any order."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"The following example command changes the stop word list for a Snowball-based dictionary. Other parameters remain unchanged."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TEXT SEARCH DICTIONARY my_dict ( StopWords = newrussian );\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The following example command changes the language option to ",(0,s.jsx)(n.code,{children:"dutch"}),", and removes the stop word option entirely:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TEXT SEARCH DICTIONARY my_dict ( language = dutch, StopWords );\n"})}),"\n",(0,s.jsx)(n.p,{children:'The following example command "updates" the dictionary\'s definition without actually changing anything:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TEXT SEARCH DICTIONARY my_dict ( dummy );\n"})}),"\n",(0,s.jsxs)(n.p,{children:["(The reason this works is that the option removal code doesn't complain if there is no such option.) This trick is useful when changing configuration files for the dictionary: the ",(0,s.jsx)(n.code,{children:"ALTER"})," will force existing database sessions to re-read the configuration files, which they would otherwise never do if they had read them earlier."]}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["There is no ",(0,s.jsx)(n.code,{children:"ALTER TEXT SEARCH DICTIONARY"})," statement in the SQL standard."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-text-search-dictionary",children:"CREATE TEXT SEARCH DICTIONARY"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-text-search-dictionary",children:"DROP TEXT SEARCH DICTIONARY"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);