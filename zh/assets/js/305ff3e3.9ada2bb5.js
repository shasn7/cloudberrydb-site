"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[1528],{69719:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>t});var d=s(85893),r=s(11151);const l={title:"\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u884c\u6570\u636e"},c="\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u884c\u6570\u636e",i={id:"insert-update-delete-rows",title:"\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u884c\u6570\u636e",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Cloudberry Database \u4e2d\u64cd\u4f5c\u884c\u6570\u636e\uff0c\u5305\u62ec\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/insert-update-delete-rows.md",sourceDirName:".",slug:"/insert-update-delete-rows",permalink:"/zh/docs/insert-update-delete-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/insert-update-delete-rows.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1712904108,formattedLastUpdatedAt:"2024\u5e744\u670812\u65e5",frontMatter:{title:"\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u884c\u6570\u636e"},sidebar:"docsbars",previous:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u7269\u5316\u89c6\u56fe",permalink:"/zh/docs/create-and-manage-materialized-views"},next:{title:"\u4e8b\u52a1\u64cd\u4f5c",permalink:"/zh/docs/work-with-transactions"}},a={},t=[{value:"\u63d2\u5165\u884c",id:"\u63d2\u5165\u884c",level:2},{value:"\u5f80\u5206\u533a\u8868\u4e2d\u63d2\u5165\u884c",id:"\u5f80\u5206\u533a\u8868\u4e2d\u63d2\u5165\u884c",level:3},{value:"\u5728 Append-Optimized \u8868\u4e2d\u63d2\u5165\u884c",id:"\u5728-append-optimized-\u8868\u4e2d\u63d2\u5165\u884c",level:3},{value:"\u66f4\u65b0\u73b0\u6709\u884c",id:"\u66f4\u65b0\u73b0\u6709\u884c",level:2},{value:"\u5220\u9664\u884c",id:"\u5220\u9664\u884c",level:2},{value:"\u6e05\u7a7a\u8868",id:"\u6e05\u7a7a\u8868",level:2},{value:"\u6e05\u7a7a\u6570\u636e\u5e93",id:"\u6e05\u7a7a\u6570\u636e\u5e93",level:2},{value:"\u53e6\u89c1",id:"\u53e6\u89c1",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u63d2\u5165\u66f4\u65b0\u548c\u5220\u9664\u884c\u6570\u636e",children:"\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u884c\u6570\u636e"}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Cloudberry Database \u4e2d\u64cd\u4f5c\u884c\u6570\u636e\uff0c\u5305\u62ec\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#%E6%8F%92%E5%85%A5%E8%A1%8C",children:"\u63d2\u5165\u884c"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#%E6%9B%B4%E6%96%B0%E7%8E%B0%E6%9C%89%E8%A1%8C",children:"\u66f4\u65b0\u73b0\u6709\u884c"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#%E5%88%A0%E9%99%A4%E8%A1%8C",children:"\u5220\u9664\u884c"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#%E6%B8%85%E7%A9%BA%E8%A1%A8",children:"\u6e05\u7a7a\u8868"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#%E6%B8%85%E7%A9%BA%E6%95%B0%E6%8D%AE%E5%BA%93",children:"\u6e05\u7a7a\u6570\u636e\u5e93"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u63d2\u5165\u884c",children:"\u63d2\u5165\u884c"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"INSERT"})," \u8bed\u53e5\u7528\u4e8e\u5f80\u8868\u4e2d\u63d2\u5165\u884c\u3002\u4f7f\u7528\u6b64\u547d\u4ee4\u9700\u8981\u8f93\u5165\u8868\u540d\u4ee5\u53ca\u8981\u63d2\u5165\u7684\u6bcf\u4e2a\u5217\u503c\u3002\u4f60\u53ef\u4ee5\u7528\u4efb\u610f\u987a\u5e8f\u6307\u5b9a\u5217\u540d\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u5217\u540d\uff0c\u8bf7\u6309\u8868\u4e2d\u5217\u7684\u987a\u5e8f\u5217\u51fa\u8981\u63d2\u5165\u7684\u6570\u636e\u503c\uff0c\u5e76\u7528\u9017\u53f7\u5206\u9694\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u6307\u5b9a\u5217\u540d\u548c\u8981\u63d2\u5165\u7684\u503c\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO products (name, price, product_no) VALUES ('Cheese', 9.99, 1);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4ec5\u6307\u5b9a\u8981\u63d2\u5165\u7684\u503c\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO products VALUES (1, 'Cheese', 9.99);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u6570\u636e\u503c\u662f\u5e38\u91cf\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6807\u91cf\u8868\u8fbe\u5f0f\u3002\u4f8b\u5982\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO films SELECT * FROM tmp_films WHERE date_prod <\n'2016-05-07';\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u5355\u6761\u547d\u4ee4\u4e2d\u63d2\u5165\u591a\u884c\u3002\u4f8b\u5982\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO products (product_no, name, price) VALUES\n    (1, 'Cheese', 9.99),\n    (2, 'Bread', 1.99),\n    (3, 'Milk', 2.99);\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5f80\u5206\u533a\u8868\u4e2d\u63d2\u5165\u884c",children:"\u5f80\u5206\u533a\u8868\u4e2d\u63d2\u5165\u884c"}),"\n",(0,d.jsxs)(n.p,{children:["\u8981\u5c06\u6570\u636e\u63d2\u5165\u5206\u533a\u8868\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u6839\u5206\u533a\u8868\uff0c\u8be5\u6839\u5206\u533a\u8868\u662f\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"CREATE TABLE"})," \u547d\u4ee4\u521b\u5efa\u7684\u3002Cloudberry Database \u4e0d\u652f\u6301\u5728 ",(0,d.jsx)(n.code,{children:"INSERT"})," \u547d\u4ee4\u4e2d\u76f4\u63a5\u6307\u5b9a\u53f6\u5206\u533a\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u62a5\u9519\u3002\u8fd9\u662f\u56e0\u4e3a\u6570\u636e\u63d2\u5165\u662f\u7531\u6570\u636e\u5e93\u7cfb\u7edf\u81ea\u52a8\u7ba1\u7406\u7684\uff0c\u6240\u4ee5\u53f6\u5206\u533a\u5bf9\u7528\u6237\u4e0d\u53ef\u89c1\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u63d2\u5165\u7684\u6570\u636e\u4e0d\u7b26\u5408\u4efb\u4f55\u73b0\u6709\u5206\u533a\u7684\u8303\u56f4\uff08\u4f8b\u5982\uff0c\u6307\u5b9a\u7684\u952e\u503c\u4e0e\u4efb\u4f55\u5206\u533a\u89c4\u5219\u90fd\u4e0d\u5339\u914d\uff09\uff0c\u5c06\u8fd4\u56de\u9519\u8bef\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u8981\u786e\u4fdd\u6570\u636e\u6b63\u786e\u5730\u63d2\u5165\u5206\u533a\u8868\uff0c\u53ea\u9700\u8981\u5728 ",(0,d.jsx)(n.code,{children:"INSERT"})," \u8bed\u53e5\u4e2d\u6307\u5b9a\u6839\u5206\u533a\u8868\u3002Cloudberry Database \u6839\u636e\u5206\u533a\u952e\u81ea\u52a8\u5c06\u6570\u636e\u884c\u63d2\u5165\u6b63\u786e\u7684\u53f6\u5206\u533a\u3002\u5982\u679c\u6570\u636e\u884c\u4e0d\u7b26\u5408\u4efb\u4f55\u53f6\u5206\u533a\u7684\u8303\u56f4\uff0cCloudberry Database \u5c06\u8fd4\u56de\u9519\u8bef\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"_-- \u5c06\u6570\u636e\u63d2\u5165\u6839\u5206\u533a\u8868_\nINSERT INTO sales (sale_id, product_no, year, amount) VALUES (1, 'Cheese', 2021, 9.99);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e0a\u8ff0\u8bed\u53e5\uff0cCloudberry Database \u6839\u636e\u5e74\u4efd\u5217\u7684\u503c\u81ea\u52a8\u5c06\u6570\u636e\u884c\u63d2\u5165\u6b63\u786e\u7684\u5206\u533a\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u5728\u8bed\u53e5\u4e2d\u6307\u5b9a\u53f6\u5206\u533a\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u5728-append-optimized-\u8868\u4e2d\u63d2\u5165\u884c",children:"\u5728 Append-Optimized \u8868\u4e2d\u63d2\u5165\u884c"}),"\n",(0,d.jsxs)(n.p,{children:["\u8981\u63d2\u5165\u5927\u91cf\u6570\u636e\u5230 Append-Optimized (AO) \u8868\uff0c\u8bf7\u4f7f\u7528\u5916\u90e8\u8868\u6216 ",(0,d.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\uff0c\u5b83\u4eec\u6bd4 ",(0,d.jsx)(n.code,{children:"INSERT"})," \u66f4\u9ad8\u6548\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["Cloudberry Database \u4e2d AO \u8868\u7684\u5b58\u50a8\u8bbe\u8ba1\uff0c\u662f\u4e3a\u4e86\u9ad8\u6548\u5730\u52a0\u8f7d\u6279\u91cf\u6570\u636e\uff0c\u4e0d\u9002\u5408\u5355\u6761 ",(0,d.jsx)(n.code,{children:"INSERT"})," \u63d2\u5165\u884c\u6570\u636e\u3002\u5982\u679c\u8981\u5c06\u5927\u91cf\u6570\u636e\u63d2\u5165 AO \u8868\uff0c\u5efa\u8bae\u4f7f\u7528\u6279\u5904\u7406\u52a0\u8f7d\u65b9\u6cd5\uff0c\u4f8b\u5982 ",(0,d.jsx)(n.code,{children:"COPY"})," \u547d\u4ee4\u3002Cloudberry Database \u652f\u6301\u5728 AO \u8868\u4e0a\u6267\u884c\u591a\u4e2a\u5e76\u53d1\u7684 ",(0,d.jsx)(n.code,{children:"INSERT"})," \u4e8b\u52a1\uff0c\u4f46\u6b64\u529f\u80fd\u901a\u5e38\u7528\u4e8e\u6279\u91cf\u63d2\u5165\u800c\u4e0d\u662f\u5355\u884c\u63d2\u5165\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u66f4\u65b0\u73b0\u6709\u884c",children:"\u66f4\u65b0\u73b0\u6709\u884c"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"UPDATE"})," \u547d\u4ee4\u7528\u4e8e\u66f4\u65b0\u8868\u4e2d\u7684\u884c\u3002\u4f7f\u7528\u8be5\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u66f4\u65b0\u6240\u6709\u884c\u3001\u6240\u6709\u884c\u7684\u5b50\u96c6\u6216\u5355\u884c\uff0c\u4e5f\u53ef\u4ee5\u5355\u72ec\u66f4\u65b0\u6bcf\u5217\u800c\u4e0d\u5f71\u54cd\u5176\u4ed6\u5217\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u8981\u6267\u884c\u66f4\u65b0\u64cd\u4f5c\uff0c\u4f60\u9700\u8981\u6307\u5b9a\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5f85\u66f4\u65b0\u7684\u8868\u540d\u548c\u5217\u540d\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5217\u7684\u65b0\u503c\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5f85\u66f4\u65b0\u884c\u7684\u6761\u4ef6\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u4ef7\u683c\u4e3a 5 \u7684\u6240\u6709\u4ea7\u54c1\u66f4\u65b0\u81f3\u4ef7\u683c\u4e3a 10\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"UPDATE products SET price = 10 WHERE price = 5;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5220\u9664\u884c",children:"\u5220\u9664\u884c"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"DELETE"})," \u547d\u4ee4\u7528\u4e8e\u5220\u9664\u8868\u4e2d\u7684\u884c\u3002\u901a\u8fc7\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"WHERE"})," \u5b50\u53e5\uff0c\u5373\u53ef\u5220\u9664\u7b26\u5408\u7279\u5b9a\u6761\u4ef6\u7684\u884c\u3002\u5982\u679c\u4e0d\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"WHERE"})," \u5b50\u53e5\uff0c\u5219\u5c06\u5220\u9664\u8868\u4e2d\u7684\u6240\u6709\u884c\uff0c\u7ed3\u679c\u662f\u4e00\u4e2a\u6709\u6548\u4f46\u4e3a\u7a7a\u7684\u8868\u3002\u4f8b\u5982\uff0c\u8981\u4ece\u4ea7\u54c1\u8868\u4e2d\u5220\u9664\u4ef7\u683c\u4e3a 10 \u7684\u6240\u6709\u884c\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM products WHERE price = 10;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5220\u9664\u4ea7\u54c1\u8868\u4e2d\u7684\u6240\u6709\u884c\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM products;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u6e05\u7a7a\u8868",children:"\u6e05\u7a7a\u8868"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"TRUNCATE"})," \u547d\u4ee4\u7528\u4e8e\u5feb\u901f\u5220\u9664\u8868\u4e2d\u7684\u6240\u6709\u884c\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"TRUNCATE mytable;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u5c06\u4e00\u6b21\u6027\u6e05\u7a7a\u8868\u4e2d\u7684\u6240\u6709\u884c\u3002\u6ce8\u610f\uff0c\u5728 Cloudberry Database \u4e2d\uff0c\u5373\u4f7f\u4e0d\u7528 ",(0,d.jsx)(n.code,{children:"CASCADE"})," \u9009\u9879\uff0c",(0,d.jsx)(n.code,{children:"TRUNCATE"})," \u547d\u4ee4\u4e5f\u4f1a\u9ed8\u8ba4\u5f71\u54cd\u7ee7\u627f\u7684\u5b50\u8868\u3002\u6b64\u5916\uff0c\u7531\u4e8e Cloudberry Database \u4e0d\u652f\u6301\u5916\u952e\u7ea6\u675f\uff0c",(0,d.jsx)(n.code,{children:"TRUNCATE"})," \u547d\u4ee4\u4e0d\u4f1a\u89e6\u53d1\u4efb\u4f55 ",(0,d.jsx)(n.code,{children:"ON DELETE"})," \u64cd\u4f5c\u6216\u91cd\u5199\u89c4\u5219\u3002\u8be5\u547d\u4ee4\u4ec5\u6e05\u7a7a\u6307\u5b9a\u8868\u4e2d\u7684\u884c\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6e05\u7a7a\u6570\u636e\u5e93",children:"\u6e05\u7a7a\u6570\u636e\u5e93"}),"\n",(0,d.jsxs)(n.p,{children:["\u88ab\u5220\u9664\u6216\u66f4\u65b0\u540e\u7684\u6570\u636e\u884c\u4ecd\u4f1a\u5360\u7528\u78c1\u76d8\u4e0a\u7684\u7269\u7406\u7a7a\u95f4\u3002\u4f60\u53ef\u4ee5\u5b9a\u671f\u6267\u884c ",(0,d.jsx)(n.code,{children:"VACUUM"})," \u547d\u4ee4\u6765\u5220\u9664\u8fd9\u4e9b\u5df2\u8fc7\u671f\u7684\u884c\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"VACUUM mytable;\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"VACUUM"})," \u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e\u6536\u96c6\u8868\u7ea7\u522b\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f8b\u5982\u884c\u6570\u548c\u9875\u6570\u3002\u5728\u52a0\u8f7d\u6570\u636e\u540e\uff0c\u5bf9\u6240\u6709\u8868\uff08\u5305\u62ec AO \u8868\uff09\u8fdb\u884c ",(0,d.jsx)(n.code,{children:"VACUUM"})," \u64cd\u4f5c\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 Cloudberry Database \u4e2d\u7ef4\u62a4\u6570\u636e\u65f6\uff0c\u7279\u522b\u662f\u9891\u7e41\u6267\u884c\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"VACUUM"}),"\u3001",(0,d.jsx)(n.code,{children:"VACUUM FULL"})," \u548c ",(0,d.jsx)(n.code,{children:"VACUUM ANALYZE"})," \u547d\u4ee4\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53e6\u89c1",children:"\u53e6\u89c1"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/zh/docs/work-with-transactions",children:"\u5904\u7406\u4e8b\u52a1"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/zh/docs/transactional-concurrency-control",children:"\u4e8b\u52a1\u5e76\u53d1\u63a7\u5236"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var d=s(67294);const r={},l=d.createContext(r);function c(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);