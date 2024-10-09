"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[2108],{63604:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(85893),n=r(11151);const i={title:"ALTER RESOURCE QUEUE"},o="ALTER RESOURCE QUEUE",a={id:"sql-stmts/alter-resource-queue",title:"ALTER RESOURCE QUEUE",description:"Changes the limits of a resource queue.",source:"@site/docs/sql-stmts/alter-resource-queue.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-resource-queue",permalink:"/docs/sql-stmts/alter-resource-queue",draft:!1,unlisted:!1,editUrl:"https://github.com/cloudberrydb/cloudberrydb-site/edit/main/docs/sql-stmts/alter-resource-queue.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1724320103,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{title:"ALTER RESOURCE QUEUE"},sidebar:"docsbars",previous:{title:"ALTER RESOURCE GROUP",permalink:"/docs/sql-stmts/alter-resource-group"},next:{title:"ALTER ROLE",permalink:"/docs/sql-stmts/alter-role"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"alter-resource-queue",children:"ALTER RESOURCE QUEUE"}),"\n",(0,t.jsx)(s.p,{children:"Changes the limits of a resource queue."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE <name> WITH ( <queue_attribute>=<value> [, ... ] ) \n"})}),"\n",(0,t.jsx)(s.p,{children:"where queue_attribute is:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ACTIVE_STATEMENTS=<integer>\nMEMORY_LIMIT='<memory_units>'\nMAX_COST=<float>\nCOST_OVERCOMMIT={TRUE|FALSE}\nMIN_COST=<float>\nPRIORITY={MIN|LOW|MEDIUM|HIGH|MAX}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE <name> WITHOUT ( <queue_attribute> [, ... ] )\n"})}),"\n",(0,t.jsx)(s.p,{children:"where queue_attribute is:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ACTIVE_STATEMENTS\nMEMORY_LIMIT\nMAX_COST\nCOST_OVERCOMMIT\nMIN_COST\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," A resource queue must have either an ",(0,t.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," or a ",(0,t.jsx)(s.code,{children:"MAX_COST"})," value. Do not remove both these ",(0,t.jsx)(s.code,{children:"queue_attributes"})," from a resource queue."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ALTER RESOURCE QUEUE"})," changes the limits of a resource queue. Only a superuser can alter a resource queue. A resource queue must have either an ",(0,t.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," or a ",(0,t.jsx)(s.code,{children:"MAX_COST"})," value (or it can have both). You can also set or reset priority for a resource queue to control the relative share of available CPU resources used by queries associated with the queue, or memory limit of a resource queue to control the amount of memory that all queries submitted through the queue can consume on a segment host."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ALTER RESOURCE QUEUE WITHOUT"})," removes the specified limits on a resource that were previously set. A resource queue must have either an ",(0,t.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," or a ",(0,t.jsx)(s.code,{children:"MAX_COST"})," value. Do not remove both these ",(0,t.jsx)(s.code,{children:"queue_attributes"})," from a resource queue."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name of the resource queue whose limits are to be altered."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"ACTIVE_STATEMENTS integer"})})}),"\n",(0,t.jsxs)(s.p,{children:["The number of active statements submitted from users in this resource queue allowed on the system at any one time. The value for ",(0,t.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," should be an integer greater than 0. To reset ",(0,t.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," to have no limit, enter a value of ",(0,t.jsx)(s.code,{children:"-1"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"MEMORY_LIMIT 'memory_units'"})})}),"\n",(0,t.jsxs)(s.p,{children:["Sets the total memory quota for all statements submitted from users in this resource queue. Memory units can be specified in kB, MB or GB. The minimum memory quota for a resource queue is 10MB. There is no maximum; however the upper boundary at query execution time is limited by the physical memory of a segment host. The default value is no limit (",(0,t.jsx)(s.code,{children:"-1"}),")."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"MAX_COST float"})})}),"\n",(0,t.jsxs)(s.p,{children:["The total query optimizer cost of statements submitted from users in this resource queue allowed on the system at any one time. The value for ",(0,t.jsx)(s.code,{children:"MAX_COST"})," is specified as a floating point number (for example 100.0) or can also be specified as an exponent (for example 1e+2). To reset ",(0,t.jsx)(s.code,{children:"MAX_COST"})," to have no limit, enter a value of ",(0,t.jsx)(s.code,{children:"-1.0"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"COST_OVERCOMMIT boolean"})})}),"\n",(0,t.jsxs)(s.p,{children:["If a resource queue is limited based on query cost, then the administrator can allow cost overcommit (",(0,t.jsx)(s.code,{children:"COST_OVERCOMMIT=TRUE"}),", the default). This means that a query that exceeds the allowed cost threshold will be allowed to run but only when the system is idle. If ",(0,t.jsx)(s.code,{children:"COST_OVERCOMMIT=FALSE"})," is specified, queries that exceed the cost limit will always be rejected and never allowed to run."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"MIN_COST float"})})}),"\n",(0,t.jsxs)(s.p,{children:["Queries with a cost under this limit will not be queued and run immediately. Cost is measured in units of disk page fetches; 1.0 equals one sequential disk page read. The value for ",(0,t.jsx)(s.code,{children:"MIN_COST"})," is specified as a floating point number (for example 100.0) or can also be specified as an exponent (for example 1e+2). To reset ",(0,t.jsx)(s.code,{children:"MIN_COST"})," to have no limit, enter a value of ",(0,t.jsx)(s.code,{children:"-1.0"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"PRIORITY={MIN|LOW|MEDIUM|HIGH|MAX}"})})}),"\n",(0,t.jsx)(s.p,{children:"Sets the priority of queries associated with a resource queue. Queries or statements in queues with higher priority levels will receive a larger share of available CPU resources in case of contention. Queries in low-priority queues may be delayed while higher priority queries are run."}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(s.p,{children:"GPORCA and the Postgres planner utilize different query costing models and may compute different costs for the same query. The Cloudberry Database resource queue resource management scheme neither differentiates nor aligns costs between GPORCA and the Postgres Planner; it uses the literal cost value returned from the optimizer to throttle queries."}),"\n",(0,t.jsxs)(s.p,{children:["When resource queue-based resource management is active, use the ",(0,t.jsx)(s.code,{children:"MEMORY_LIMIT"})," and ",(0,t.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," limits for resource queues rather than configuring cost-based limits. Even when using GPORCA, Cloudberry Database may fall back to using the Postgres Planner for certain queries, so using cost-based limits can lead to unexpected results."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Change the active query limit for a resource queue:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE myqueue WITH (ACTIVE_STATEMENTS=20);\n"})}),"\n",(0,t.jsx)(s.p,{children:"Change the memory limit for a resource queue:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE myqueue WITH (MEMORY_LIMIT='2GB');\n"})}),"\n",(0,t.jsx)(s.p,{children:"Reset the maximum and minimum query cost limit for a resource queue to no limit:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE myqueue WITH (MAX_COST=-1.0, \n  MIN_COST= -1.0);\n"})}),"\n",(0,t.jsx)(s.p,{children:"Reset the query cost limit for a resource queue to 310 (or 30000000000.0) and do not allow overcommit:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE myqueue WITH (MAX_COST=3e+10, \n  COST_OVERCOMMIT=FALSE);\n"})}),"\n",(0,t.jsx)(s.p,{children:"Reset the priority of queries associated with a resource queue to the minimum level:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE myqueue WITH (PRIORITY=MIN);\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Remove the ",(0,t.jsx)(s.code,{children:"MAX_COST"})," and ",(0,t.jsx)(s.code,{children:"MEMORY_LIMIT"})," limits from a resource queue:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER RESOURCE QUEUE myqueue WITHOUT (MAX_COST, MEMORY_LIMIT);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"ALTER RESOURCE QUEUE"})," statement is a Cloudberry Database extension. This command does not exist in standard PostgreSQL."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-resource-queue",children:"CREATE RESOURCE QUEUE"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/drop-resource-queue",children:"DROP RESOURCE QUEUE"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-role",children:"CREATE ROLE"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/alter-role",children:"ALTER ROLE"})]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>o});var t=r(67294);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);