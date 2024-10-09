"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[6658],{36689:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>t});var s=d(85893),a=d(11151);const o={title:"\u4f7f\u7528 COPY \u52a0\u8f7d\u6570\u636e"},c="\u4f7f\u7528 COPY \u547d\u4ee4\u5c06\u6570\u636e\u52a0\u8f7d\u8fdb Cloudberry Database",r={id:"data-loading/load-data-using-copy",title:"\u4f7f\u7528 COPY \u52a0\u8f7d\u6570\u636e",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528 COPY FROM \u547d\u4ee4\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u6216\u901a\u8fc7\u6807\u51c6\u8f93\u5165\u52a0\u8f7d\u6570\u636e\u5230\u6570\u636e\u5e93\u8868\u4e2d\uff0c\u5e76\u5c06\u8fd9\u4e9b\u6570\u636e\u6dfb\u52a0\u5230\u8868\u7684\u672b\u5c3e\u3002\u4f7f\u7528 COPY \u547d\u4ee4\u52a0\u8f7d\u6570\u636e\u662f\u4e00\u4e2a\u4e32\u884c\u8fc7\u7a0b\uff0c\u5373\u6240\u6709\u6570\u636e\u90fd\u901a\u8fc7\u5355\u8fdb\u7a0b\u5728 Cloudberry Database \u7684 Coordinator \u5b9e\u4f8b\u4e2d\u52a0\u8f7d\u3002\u56e0\u6b64\uff0cCOPY \u547d\u4ee4\u66f4\u9002\u5408\u6570\u636e\u91cf\u8f83\u5c0f\u7684\u60c5\u51b5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-using-copy.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-using-copy",permalink:"/zh/docs/data-loading/load-data-using-copy",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-using-copy.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1712904108,formattedLastUpdatedAt:"2024\u5e744\u670812\u65e5",frontMatter:{title:"\u4f7f\u7528 COPY \u52a0\u8f7d\u6570\u636e"},sidebar:"docsbars",previous:{title:"Data Loading Overview",permalink:"/zh/docs/data-loading/"},next:{title:"\u4f7f\u7528 gpfdist \u52a0\u8f7d\u6570\u636e",permalink:"/zh/docs/data-loading/load-data-using-gpfdist"}},l={},t=[{value:"\u4ece\u6587\u4ef6\u52a0\u8f7d\u6570\u636e",id:"\u4ece\u6587\u4ef6\u52a0\u8f7d\u6570\u636e",level:2},{value:"\u4ece\u6807\u51c6\u8f93\u5165\u52a0\u8f7d\u6570\u636e",id:"\u4ece\u6807\u51c6\u8f93\u5165\u52a0\u8f7d\u6570\u636e",level:2},{value:"\u5728 psql \u4e2d\u4f7f\u7528 <code>\\copy</code> \u52a0\u8f7d\u6570\u636e",id:"\u5728-psql-\u4e2d\u4f7f\u7528-copy-\u52a0\u8f7d\u6570\u636e",level:2},{value:"\u8f93\u5165\u683c\u5f0f",id:"\u8f93\u5165\u683c\u5f0f",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"\u4f7f\u7528-copy-\u547d\u4ee4\u5c06\u6570\u636e\u52a0\u8f7d\u8fdb-cloudberry-database",children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\u5c06\u6570\u636e\u52a0\u8f7d\u8fdb Cloudberry Database"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"COPY FROM"})," \u547d\u4ee4\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u6216\u901a\u8fc7\u6807\u51c6\u8f93\u5165\u52a0\u8f7d\u6570\u636e\u5230\u6570\u636e\u5e93\u8868\u4e2d\uff0c\u5e76\u5c06\u8fd9\u4e9b\u6570\u636e\u6dfb\u52a0\u5230\u8868\u7684\u672b\u5c3e\u3002\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\u52a0\u8f7d\u6570\u636e\u662f\u4e00\u4e2a\u4e32\u884c\u8fc7\u7a0b\uff0c\u5373\u6240\u6709\u6570\u636e\u90fd\u901a\u8fc7\u5355\u8fdb\u7a0b\u5728 Cloudberry Database \u7684 Coordinator \u5b9e\u4f8b\u4e2d\u52a0\u8f7d\u3002\u56e0\u6b64\uff0c",(0,s.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\u66f4\u9002\u5408\u6570\u636e\u91cf\u8f83\u5c0f\u7684\u60c5\u51b5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\u65f6\uff0cCoordinator \u4e3b\u673a\u4e0a\u8fd0\u884c\u7684 ",(0,s.jsx)(n.code,{children:"postgres"})," \u8fdb\u7a0b\u5fc5\u987b\u80fd\u591f\u8bbf\u95ee\u6e90\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u76f8\u5bf9\u4e8e Coordinator \u4e3b\u673a\u6570\u636e\u76ee\u5f55\u7684\u6e90\u6587\u4ef6\u540d\uff0c\u6216\u8005\u6307\u5b9a\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84\u6765\u76f4\u63a5\u6307\u5b9a\u6587\u4ef6\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u5916\uff0cCloudberry Database \u53ef\u4ee5\u901a\u8fc7\u5ba2\u6237\u7aef\u4e0e Coordinator \u670d\u52a1\u5668\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u4ece\u6807\u51c6\u8f93\u5165 (STDIN) \u8bfb\u53d6\u6570\u636e\uff0c\u6216\u5411\u6807\u51c6\u8f93\u51fa (STDOUT) \u5199\u5165\u6570\u636e\u3002\u8be5\u529f\u80fd\u4f7f\u6570\u636e\u52a0\u8f7d\u66f4\u7075\u6d3b\uff0c\u4f7f\u5f97\u4ece\u5404\u79cd\u6570\u636e\u6e90\u5411\u6570\u636e\u5e93\u4f20\u8f93\u6570\u636e\u6210\u4e3a\u53ef\u80fd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4ece\u6587\u4ef6\u52a0\u8f7d\u6570\u636e",children:"\u4ece\u6587\u4ef6\u52a0\u8f7d\u6570\u636e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\u6307\u793a ",(0,s.jsx)(n.code,{children:"postgres"})," \u6570\u636e\u5e93\u7684\u540e\u53f0\u8fdb\u7a0b\u53bb\u6253\u5f00\u4e00\u4e2a\u7279\u5b9a\u7684\u6587\u4ef6\uff0c\u5e76\u8bfb\u53d6\u8be5\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u6700\u540e\u5c06\u8fd9\u4e9b\u5185\u5bb9\u6dfb\u52a0\u5230\u6307\u5b9a\u7684\u8868\u4e2d\u3002\u4e3a\u4e86\u987a\u5229\u5b8c\u6210\u8fd9\u4e00\u8fc7\u7a0b\uff0c\u6570\u636e\u5e93\u540e\u53f0\u8fdb\u7a0b\u5fc5\u987b\u5177\u5907\u5bf9\u8be5\u6587\u4ef6\u7684\u8bfb\u53d6\u6743\u9650\u3002\u8fd9\u5c31\u8981\u6c42\u4f60\u5728\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\u65f6\uff0c\u65e2\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u4f4d\u4e8e Coordinator \u4e3b\u673a\u4e0a\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u7ed9\u51fa\u4e00\u4e2a\u76f8\u5bf9\u4e8e Coordinator \u6570\u636e\u76ee\u5f55\u7684\u8def\u5f84\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4ece\u6807\u51c6\u8f93\u5165\u52a0\u8f7d\u6570\u636e",children:"\u4ece\u6807\u51c6\u8f93\u5165\u52a0\u8f7d\u6570\u636e"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6570\u636e\u52a0\u8f7d\u524d\uff0c\u4e3a\u4e86\u514d\u53bb\u5c06\u6570\u636e\u6587\u4ef6\u4f20\u8f93\u81f3 Coordinator \u4e3b\u673a\u7684\u9ebb\u70e6\uff0c",(0,s.jsx)(n.code,{children:"COPY FROM STDIN"})," \u63d0\u4f9b\u4e86\u4e00\u79cd\u4fbf\u6377\u65b9\u5f0f\uff0c\u5373\u901a\u8fc7\u6807\u51c6\u8f93\u5165\u6e20\u9053 (Standard Input Channel) \u76f4\u63a5\u5411 ",(0,s.jsx)(n.code,{children:"postgres"})," \u6570\u636e\u5e93\u540e\u53f0\u53d1\u9001\u6570\u636e\u3002\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u65f6\uff0c\u6570\u636e\u5e93\u540e\u53f0\u4f1a\u6301\u7eed\u63a5\u6536\u8f93\u5165\u7684\u6570\u636e\u884c\uff0c\u76f4\u5230\u9047\u5230\u4e00\u4e2a\u4ec5\u542b\u6709\u53cd\u659c\u6760\u548c\u70b9\u53f7\uff08",(0,s.jsx)(n.code,{children:"\\."}),"\uff09\u7684\u884c\u4e3a\u6b62\uff0c\u8fd9\u6807\u5fd7\u7740\u6570\u636e\u8f93\u5165\u7684\u7ed3\u675f\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"COPY <table_name> FROM <STDIN>;\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5728-psql-\u4e2d\u4f7f\u7528-copy-\u52a0\u8f7d\u6570\u636e",children:["\u5728 psql \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"\\copy"})," \u52a0\u8f7d\u6570\u636e"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u52ff\u5c06 psql \u7684 ",(0,s.jsx)(n.code,{children:"\\copy"})," \u547d\u4ee4\u548c SQL \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\u6df7\u4e3a\u4e00\u8c08\u3002",(0,s.jsx)(n.code,{children:"\\copy"})," \u5b9e\u9645\u4e0a\u662f\u5728\u5ba2\u6237\u7aef\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"COPY FROM STDIN"})," \u7684\u4e00\u4e2a\u7b80\u5316\u64cd\u4f5c\uff0c\u5b83\u5141\u8bb8\u76f4\u63a5\u4ece psql \u5ba2\u6237\u7aef\u5c06\u6570\u636e\u4f20\u8f93\u5230\u6570\u636e\u5e93\u540e\u7aef\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u8981\u5bfc\u5165\u7684\u6587\u4ef6\u4f4d\u4e8e\u8fd0\u884c psql \u5ba2\u6237\u7aef\u7684\u540c\u4e00\u53f0\u673a\u5668\u4e0a\uff0c\u5e76\u4e14\u8be5\u6587\u4ef6\u5bf9\u8fd0\u884c\u5ba2\u6237\u7aef\u7684\u7528\u6237\u662f\u53ef\u8bbf\u95ee\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u907f\u514d\u5c06\u6570\u636e\u6587\u4ef6\u5148\u4f20\u81f3 Coordinator \u4e3b\u673a\u518d\u8fdb\u884c\u6570\u636e\u52a0\u8f7d\uff0c",(0,s.jsx)(n.code,{children:"COPY FROM STDIN"})," \u547d\u4ee4\u901a\u8fc7\u6807\u51c6\u8f93\u5165\u6e20\u9053\u76f4\u63a5\u5411 ",(0,s.jsx)(n.code,{children:"postgres"})," \u6570\u636e\u5e93\u540e\u7aef\u8f93\u9001\u6570\u636e\u3002\u4e00\u65e6\u6267\u884c\u4e86 ",(0,s.jsx)(n.code,{children:"COPY FROM STDIN"})," \u547d\u4ee4\uff0c\u6570\u636e\u5e93\u540e\u7aef\u5c31\u4f1a\u5f00\u59cb\u63a5\u6536\u6570\u636e\uff0c\u76f4\u5230\u9047\u5230\u4e00\u4e2a\u53ea\u5305\u542b\u53cd\u659c\u6760\u548c\u70b9\u53f7\uff08",(0,s.jsx)(n.code,{children:"\\."}),"\uff09\u7684\u884c\uff0c\u8fd9\u8868\u793a\u6570\u636e\u8f93\u5165\u7ed3\u675f\u3002psql \u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"\\copy"})," \u547d\u4ee4\u5de7\u5999\u5730\u5c01\u88c5\u4e86\u6574\u4e2a\u8fc7\u7a0b\uff0c\u4f7f\u5f97\u4ece\u5ba2\u6237\u7aef\u5230\u6570\u636e\u5e93\u7684\u6570\u636e\u5bfc\u5165\u65e2\u7b80\u4fbf\u53c8\u9ad8\u6548\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"\\copy <table_name> FROM <filename>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8f93\u5165\u683c\u5f0f",children:"\u8f93\u5165\u683c\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"COPY FROM"})," \u63a5\u53d7\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"FORMAT"})," \u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u8f93\u5165\u6570\u636e\u7684\u683c\u5f0f\u3002\u53ef\u9009\u7684\u503c\u6709 ",(0,s.jsx)(n.code,{children:"TEXT"}),"\u3001",(0,s.jsx)(n.code,{children:"CSV"}),"\uff08\u9017\u53f7\u5206\u9694\u503c\uff09\u548c ",(0,s.jsx)(n.code,{children:"BINARY"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename> WITH (FORMAT csv);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FORMAT csv"})," \u4f1a\u8bfb\u53d6\u9017\u53f7\u5206\u9694\u503c\u3002",(0,s.jsx)(n.code,{children:"FORMAT text"})," \u9ed8\u8ba4\u4f7f\u7528\u5236\u8868\u7b26\u5206\u9694\u503c\uff0c",(0,s.jsx)(n.code,{children:"DELIMITER"})," \u9009\u9879\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u5b57\u7b26\u4f5c\u4e3a\u503c\u7684\u5206\u9694\u7b26\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename> WITH (FORMAT text, DELIMITER '|');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCloudberry Database \u4f7f\u7528\u9ed8\u8ba4\u7684\u5ba2\u6237\u7aef\u7f16\u7801\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"ENCODING"})," \u9009\u9879\u6765\u66f4\u6539\u8fd9\u4e00\u8bbe\u7f6e\u3002\u6570\u636e\u6765\u81ea\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u65f6\uff0c\u8fd9\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename> WITH (ENCODING 'latin1');\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>r,a:()=>c});var s=d(67294);const a={},o=s.createContext(a);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);