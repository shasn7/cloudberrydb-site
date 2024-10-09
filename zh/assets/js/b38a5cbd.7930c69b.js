"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[2486],{48700:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var d=c(85893),s=c(11151);const r={title:"\u4e8b\u52a1\u64cd\u4f5c"},i="\u5728 Cloudberry Database \u4e2d\u4f7f\u7528\u4e8b\u52a1",l={id:"work-with-transactions",title:"\u4e8b\u52a1\u64cd\u4f5c",description:"SQL \u4e8b\u52a1\u5141\u8bb8\u4f60\u5c06\u591a\u4e2a SQL \u8bed\u53e5\u6346\u7ed1\u5728\u4e00\u8d77\uff0c\u5f62\u6210\u4e00\u4e2a\u5168\u90e8\u6210\u529f\u6216\u5168\u90e8\u5931\u8d25\u7684\u64cd\u4f5c\u3002\u5bf9\u4e8e Cloudberry Database\uff0c\u5176 SQL \u4e8b\u52a1\u547d\u4ee4\u5305\u62ec\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/work-with-transactions.md",sourceDirName:".",slug:"/work-with-transactions",permalink:"/zh/docs/work-with-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/work-with-transactions.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1712904108,formattedLastUpdatedAt:"2024\u5e744\u670812\u65e5",frontMatter:{title:"\u4e8b\u52a1\u64cd\u4f5c"},sidebar:"docsbars",previous:{title:"\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u884c\u6570\u636e",permalink:"/zh/docs/insert-update-delete-rows"},next:{title:"\u4e8b\u52a1\u4e2d\u7684\u5e76\u53d1\u63a7\u5236",permalink:"/zh/docs/transactional-concurrency-control"}},o={},t=[{value:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",level:2},{value:"\u672a\u63d0\u4ea4\u8bfb\u4e0e\u5df2\u63d0\u4ea4\u8bfb",id:"\u672a\u63d0\u4ea4\u8bfb\u4e0e\u5df2\u63d0\u4ea4\u8bfb",level:3},{value:"\u53ef\u91cd\u590d\u8bfb\u4e0e\u5e8f\u5217\u5316\u9694\u79bb\u7ea7\u522b",id:"\u53ef\u91cd\u590d\u8bfb\u4e0e\u5e8f\u5217\u5316\u9694\u79bb\u7ea7\u522b",level:4},{value:"\u53e6\u8bf7\u53c2\u9605",id:"\u53e6\u8bf7\u53c2\u9605",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u5728-cloudberry-database-\u4e2d\u4f7f\u7528\u4e8b\u52a1",children:"\u5728 Cloudberry Database \u4e2d\u4f7f\u7528\u4e8b\u52a1"}),"\n",(0,d.jsx)(n.p,{children:"SQL \u4e8b\u52a1\u5141\u8bb8\u4f60\u5c06\u591a\u4e2a SQL \u8bed\u53e5\u6346\u7ed1\u5728\u4e00\u8d77\uff0c\u5f62\u6210\u4e00\u4e2a\u5168\u90e8\u6210\u529f\u6216\u5168\u90e8\u5931\u8d25\u7684\u64cd\u4f5c\u3002\u5bf9\u4e8e Cloudberry Database\uff0c\u5176 SQL \u4e8b\u52a1\u547d\u4ee4\u5305\u62ec\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"BEGIN"})," \u6216 ",(0,d.jsx)(n.code,{children:"START TRANSACTION"}),"\uff1a\u5f00\u59cb\u4e00\u4e2a\u4e8b\u52a1\u5757\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"END"})," \u6216 ",(0,d.jsx)(n.code,{children:"COMMIT"}),"\uff1a\u63d0\u4ea4\u4e8b\u52a1\u7684\u7ed3\u679c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"ROLLBACK"}),"\uff1a\u653e\u5f03\u4e8b\u52a1\uff0c\u4e0d\u505a\u4efb\u4f55\u66f4\u6539\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"SAVEPOINT"}),"\uff1a\u5728\u4e8b\u52a1\u4e2d\u6807\u8bb0\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u5141\u8bb8\u90e8\u5206\u56de\u6eda\u3002\u4f60\u53ef\u4ee5\u56de\u6eda\u5728\u4fdd\u5b58\u70b9\u4e4b\u540e\u8fd0\u884c\u7684\u547d\u4ee4\uff0c\u540c\u65f6\u4fdd\u6301\u5728\u4fdd\u5b58\u70b9\u4e4b\u524d\u8fd0\u884c\u7684\u547d\u4ee4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"ROLLBACK TO SAVEPOINT"}),"\uff1a\u5c06\u4e8b\u52a1\u56de\u6eda\u5230\u4fdd\u5b58\u70b9\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"RELEASE SAVEPOINT"}),"\uff1a\u5728\u4e8b\u52a1\u4e2d\u9500\u6bc1\u4e00\u4e2a\u4fdd\u5b58\u70b9\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b",children:"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"}),"\n",(0,d.jsx)(n.p,{children:"Cloudberry Database \u652f\u6301\u4ee5\u4e0b\u6807\u51c6 SQL \u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"READ UNCOMMITTED"}),"\uff08\u8bfb\u672a\u63d0\u4ea4\uff09\u548c ",(0,d.jsx)(n.code,{children:"READ COMMITTED"}),"\uff08\u8bfb\u5df2\u63d0\u4ea4\uff09\u7684\u884c\u4e3a\u4e0e\u6807\u51c6\u7684 ",(0,d.jsx)(n.code,{children:"READ COMMITTED"})," \u76f8\u540c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"REPEATABLE READ"}),"\uff08\u53ef\u91cd\u590d\u8bfb\uff09\u548c ",(0,d.jsx)(n.code,{children:"SERIALIZABLE"}),"\uff08\u53ef\u5e8f\u5217\u5316\uff09\u7684\u884c\u4e3a\u4e0e ",(0,d.jsx)(n.code,{children:"REPEATABLE READ"})," \u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u63cf\u8ff0\u4e86 Cloudberry Database \u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u7684\u884c\u4e3a\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u672a\u63d0\u4ea4\u8bfb\u4e0e\u5df2\u63d0\u4ea4\u8bfb",children:"\u672a\u63d0\u4ea4\u8bfb\u4e0e\u5df2\u63d0\u4ea4\u8bfb"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 Cloudberry Database \u4e2d\uff0c\u4efb\u4f55\u6267\u884c\u4e2d\u7684\u547d\u4ee4\u90fd\u65e0\u6cd5\u67e5\u770b\u5176\u4ed6\u5e76\u884c\u4e8b\u52a1\u4e2d\u7684\u672a\u63d0\u4ea4\u66f4\u65b0\uff0c\u56e0\u6b64 ",(0,d.jsx)(n.code,{children:"READ UNCOMMITTED"})," \u6a21\u5f0f\u4e0e ",(0,d.jsx)(n.code,{children:"READ COMMITTED"})," \u6a21\u5f0f\u7684\u6548\u679c\u662f\u76f8\u540c\u7684\u3002",(0,d.jsx)(n.code,{children:"READ COMMITTED"})," \u6a21\u5f0f\u63d0\u4f9b\u4e86\u4e00\u79cd\u5feb\u901f\u4e14\u7b80\u6613\u7684\u65b9\u5f0f\uff0c\u80fd\u591f\u5b9e\u73b0\u4e8b\u52a1\u7684\u90e8\u5206\u9694\u79bb\u6548\u679c\u3002\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c",(0,d.jsx)(n.code,{children:"SELECT"}),"\u3001",(0,d.jsx)(n.code,{children:"UPDATE"})," \u548c ",(0,d.jsx)(n.code,{children:"DELETE"})," \u8bed\u53e5\u90fd\u662f\u5728\u67e5\u8be2\u5f00\u59cb\u65f6\u57fa\u4e8e\u6570\u636e\u5e93\u5f53\u524d\u7684\u5feb\u7167\u6765\u6267\u884c\u7684\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5177\u4f53\u6765\u8bf4\uff0c\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"SELECT"})," \u67e5\u8be2\u4f1a\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u67e5\u770b\u67e5\u8be2\u5f00\u59cb\u524d\u5df2\u7ecf\u63d0\u4ea4\u7684\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u770b\u5230\u5728\u5f53\u524d\u4e8b\u52a1\u5185\u6267\u884c\u7684\u66f4\u65b0\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u4e0d\u4f1a\u770b\u5230\u5f53\u524d\u4e8b\u52a1\u5916\u672a\u63d0\u4ea4\u7684\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5982\u679c\u5728\u67e5\u8be2\u521d\u59cb\u8bfb\u53d6\u540e\uff0c\u5176\u4ed6\u5e76\u884c\u4e8b\u52a1\u63d0\u4ea4\u4e86\u53d8\u66f4\uff0c\u8fd9\u65f6\u53ef\u80fd\u4f1a\u770b\u5230\u8fd9\u4e9b\u53d8\u66f4\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u540c\u4e00\u4e8b\u52a1\u5185\u8fde\u7eed\u6267\u884c\u7684\u591a\u4e2a ",(0,d.jsx)(n.code,{children:"SELECT"})," \u67e5\u8be2\u53ef\u80fd\u4f1a\u770b\u5230\u4e0d\u540c\u7684\u6570\u636e\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728\u8fd9\u4e9b\u67e5\u8be2\u4e4b\u95f4\uff0c\u53ef\u80fd\u6709\u5176\u4ed6\u5e76\u884c\u4e8b\u52a1\u63d0\u4ea4\u4e86\u53d8\u66f4\u3002\u800c ",(0,d.jsx)(n.code,{children:"UPDATE"})," \u548c ",(0,d.jsx)(n.code,{children:"DELETE"})," \u547d\u4ee4\u5219\u53ea\u4f1a\u627e\u5230\u5728\u5b83\u4eec\u5f00\u59cb\u6267\u884c\u524d\u5c31\u5df2\u7ecf\u63d0\u4ea4\u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"READ COMMITTED"})," \u4e8b\u52a1\u9694\u79bb\u6a21\u5f0f\u4e0b\uff0c\u5141\u8bb8\u5e76\u884c\u4e8b\u52a1\u5728 ",(0,d.jsx)(n.code,{children:"UPDATE"})," \u6216 ",(0,d.jsx)(n.code,{children:"DELETE"})," \u6267\u884c\u524d\u5bf9\u6570\u636e\u884c\u8fdb\u884c\u4fee\u6539\u6216\u52a0\u9501\u3002\u7136\u800c\uff0c\u5bf9\u4e8e\u90a3\u4e9b\u6267\u884c\u590d\u6742\u67e5\u8be2\u548c\u66f4\u65b0\uff0c\u540c\u65f6\u53c8\u9700\u8981\u4fdd\u6301\u6570\u636e\u5e93\u89c6\u56fe\u4e00\u81f4\u6027\u7684\u5e94\u7528\u7a0b\u5e8f\u6765\u8bf4\uff0c",(0,d.jsx)(n.code,{children:"READ COMMITTED"})," \u7684\u4e8b\u52a1\u9694\u79bb\u6c34\u5e73\u53ef\u80fd\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53ef\u91cd\u590d\u8bfb\u4e0e\u5e8f\u5217\u5316\u9694\u79bb\u7ea7\u522b",children:"\u53ef\u91cd\u590d\u8bfb\u4e0e\u5e8f\u5217\u5316\u9694\u79bb\u7ea7\u522b"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 SQL \u6807\u51c6\u4e2d\uff0c",(0,d.jsx)(n.code,{children:"SERIALIZABLE"})," \u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u65e8\u5728\u786e\u4fdd\uff0c\u5373\u4fbf\u4e8b\u52a1\u662f\u5e76\u53d1\u8fd0\u884c\u7684\uff0c\u5176\u4ea7\u751f\u7684\u7ed3\u679c\u4e5f\u5e94\u5f53\u4e0e\u4e8b\u52a1\u4f9d\u6b21\u8fd0\u884c\u65f6\u7684\u7ed3\u679c\u76f8\u540c\u3002\u5728 Cloudberry Database \u4e2d\uff0c\u5f53\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"SERIALIZABLE"})," \u9694\u79bb\u7ea7\u522b\u65f6\uff0c\u5b9e\u9645\u4e0a\u4f1a\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"REPEATABLE READ"})," \u9694\u79bb\u7ea7\u522b\u3002",(0,d.jsx)(n.code,{children:"REPEATABLE READ"})," \u9694\u79bb\u7ea7\u522b\u53ef\u4ee5\u5728\u65e0\u9700\u4f7f\u7528\u590d\u6742\u9501\u5b9a\u673a\u5236\u7684\u60c5\u51b5\u4e0b\uff0c\u9632\u6b62\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u8bfb\u73b0\u8c61\uff0c\u4f46\u8fd9\u79cd\u6a21\u5f0f\u5e76\u4e0d\u80fd\u68c0\u6d4b\u5230\u6240\u6709\u5728\u5e76\u53d1\u4e8b\u52a1\u6267\u884c\u671f\u95f4\u53ef\u80fd\u51fa\u73b0\u7684\u5e8f\u5217\u5316\u51b2\u7a81\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u4ed4\u7ec6\u68c0\u67e5\u5e76\u53d1\u4e8b\u52a1\uff0c\u4ee5\u8bc6\u522b\u54ea\u4e9b\u51b2\u7a81\u662f\u4ec5\u9760\u7981\u6b62\u5bf9\u540c\u4e00\u6570\u636e\u5e76\u53d1\u66f4\u65b0\u6240\u65e0\u6cd5\u9884\u9632\u7684\u3002\u4e3a\u907f\u514d\u8fd9\u7c7b\u51b2\u7a81\uff0c\u53ef\u4ee5\u91c7\u7528\u663e\u5f0f\u8868\u9501\u6216\u8005\u66f4\u65b0\u67d0\u4e2a\u7279\u8bbe\u7684\u4ee3\u8868\u51b2\u7a81\u7684\u865a\u62df\u884c\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"REPEATABLE READ"})," \u9694\u79bb\u7ea7\u522b\u4e0b\uff0c",(0,d.jsx)(n.code,{children:"SELECT"})," \u67e5\u8be2\u5c06\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u57fa\u4e8e\u4e8b\u52a1\u5f00\u59cb\u65f6\u523b\uff08\u800c\u975e\u4e8b\u52a1\u5185\u5f53\u524d\u67e5\u8be2\u5f00\u59cb\u65f6\uff09\u7684\u6570\u636e\u5feb\u7167\u8fdb\u884c\u67e5\u770b\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u53ea\u80fd\u770b\u5230\u67e5\u8be2\u5f00\u59cb\u524d\u5df2\u7ecf\u63d0\u4ea4\u7684\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u80fd\u770b\u5230\u5728\u5f53\u524d\u4e8b\u52a1\u5185\u8fdb\u884c\u7684\u66f4\u65b0\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u65e0\u6cd5\u770b\u5230\u4e8b\u52a1\u5916\u672a\u63d0\u4ea4\u7684\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u4e0d\u4f1a\u770b\u5230\u5176\u4ed6\u5e76\u53d1\u4e8b\u52a1\u6240\u505a\u7684\u66f4\u6539\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u5728\u540c\u4e00\u4e8b\u52a1\u4e2d\u8fde\u7eed\u6267\u884c\u7684 ",(0,d.jsx)(n.code,{children:"SELECT"})," \u547d\u4ee4\u603b\u662f\u770b\u5230\u4e00\u81f4\u7684\u6570\u636e\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"UPDATE"}),"\u3001",(0,d.jsx)(n.code,{children:"DELETE"}),"\u3001",(0,d.jsx)(n.code,{children:"SELECT FOR UPDATE"})," \u548c ",(0,d.jsx)(n.code,{children:"SELECT FOR SHARE"})," \u547d\u4ee4\u4ec5\u80fd\u627e\u5230\u5728\u547d\u4ee4\u5f00\u59cb\u524d\u5df2\u7ecf\u63d0\u4ea4\u7684\u884c\u3002\u5982\u679c\u6709\u5e76\u53d1\u4e8b\u52a1\u5bf9\u76ee\u6807\u884c\u8fdb\u884c\u4e86\u66f4\u65b0\u3001\u5220\u9664\u6216\u52a0\u9501\uff0c",(0,d.jsx)(n.code,{children:"REPEATABLE READ"})," \u4e8b\u52a1\u5c06\u7b49\u5f85\u8be5\u5e76\u53d1\u4e8b\u52a1\u63d0\u4ea4\u6216\u64a4\u9500\u66f4\u6539\u3002\u82e5\u5e76\u53d1\u4e8b\u52a1\u63d0\u4ea4\u4e86\u66f4\u6539\uff0c",(0,d.jsx)(n.code,{children:"REPEATABLE READ"})," \u4e8b\u52a1\u5c06\u9009\u62e9\u56de\u6eda\uff1b\u82e5\u5e76\u53d1\u4e8b\u52a1\u64a4\u9500\u4e86\u66f4\u6539\uff0c",(0,d.jsx)(n.code,{children:"REPEATABLE READ"})," \u4e8b\u52a1\u5219\u53ef\u4ee5\u63d0\u4ea4\u81ea\u5df1\u7684\u66f4\u6539\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 Cloudberry Database \u4e2d\uff0c\u9ed8\u8ba4\u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u4e3a ",(0,d.jsx)(n.code,{children:"READ COMMITTED"}),"\u3002\u82e5\u9700\u66f4\u6539\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u53ef\u5728\u5f00\u59cb\u4e8b\u52a1\u65f6\u58f0\u660e\u9694\u79bb\u7ea7\u522b\uff0c\u6216\u5728\u4e8b\u52a1\u5df2\u5f00\u59cb\u540e\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"SET TRANSACTION"})," \u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53e6\u8bf7\u53c2\u9605",children:"\u53e6\u8bf7\u53c2\u9605"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/zh/docs/transactional-concurrency-control",children:"\u4e8b\u52a1\u5e76\u53d1\u63a7\u5236"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/zh/docs/insert-update-delete-rows",children:"\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u884c"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>l,a:()=>i});var d=c(67294);const s={},r=d.createContext(s);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);