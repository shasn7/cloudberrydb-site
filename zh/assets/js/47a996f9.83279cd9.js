"use strict";(self.webpackChunkCloudberry_Database_website=self.webpackChunkCloudberry_Database_website||[]).push([[2875],{56537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=a(85893),n=a(11151);const r={title:"[101-0] Lesson 0: Introduction to Database and CloudberryDB Architecture",description:"This page provides an introduction to the basic concepts of databases and explains the architecture of Cloudberry Database."},o=void 0,i={type:"mdx",permalink:"/zh/bootcamp/101-0-introduction-to-database-and-cloudberrydb-architecture",source:"@site/i18n/zh/docusaurus-plugin-content-pages/bootcamp/101-0-introduction-to-database-and-cloudberrydb-architecture.md",title:"[101-0] Lesson 0: Introduction to Database and CloudberryDB Architecture",description:"This page provides an introduction to the basic concepts of databases and explains the architecture of Cloudberry Database.",frontMatter:{title:"[101-0] Lesson 0: Introduction to Database and CloudberryDB Architecture",description:"This page provides an introduction to the basic concepts of databases and explains the architecture of Cloudberry Database."},unlisted:!1},c={},d=[{value:"Background: Database Concepts",id:"background-database-concepts",level:2},{value:"Introduction to the Cloudberry Database Architecture",id:"introduction-to-the-cloudberry-database-architecture",level:2},{value:"CloudberryDB Master (Coordinator)",id:"cloudberrydb-master-coordinator",level:3},{value:"CloudberryDB Segments",id:"cloudberrydb-segments",level:3},{value:"CloudberryDB Interconnect",id:"cloudberrydb-interconnect",level:3}];function l(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"background-database-concepts",children:"Background: Database Concepts"}),"\n",(0,s.jsx)(t.p,{children:"Before starting this tutorials, spend some time to get familiar with how (single instance) databases work. If you already have some knowledge and experience with Oracle, MySQL or especially Postgres - this is great."}),"\n",(0,s.jsx)(t.p,{children:"Databases (relational databases) are pieces of software that are used to store and manage/process data. Usually these databases are built with the client/server concept - the database is implemented as a server and multiple clients can connect and read or update the data."}),"\n",(0,s.jsx)(t.p,{children:"The clients usually use SQL language to access the data (or some dialect of the SQL language specification). The clients can be different implementations - proprietary client libraries or ODBC/JDBC compliant."}),"\n",(0,s.jsx)(t.p,{children:"Database data is usually stored in objects called tables. Tables have predefined structure (columns) and have zero or multiple rows."}),"\n",(0,s.jsx)(t.p,{children:"Tables can be grouped in logical entities called 'schemas' (or namespaces)."}),"\n",(0,s.jsx)(t.p,{children:"Tables/schemas are located in a 'database' entity. Some database software supports multiple databases per instance (MySQL, Postgres), others support one database per instance (Oracle)."}),"\n",(0,s.jsx)(t.p,{children:"Along with tables there are supporting objects such as indexes, sequences, views, etc."}),"\n",(0,s.jsx)(t.p,{children:"The database system needs to maintain some metadata - called the database catalog. The database catalog contains information about the data objects and supporting objects as well as anything else that needs to be stored on system level (user authentication, etc.)."}),"\n",(0,s.jsx)(t.p,{children:"SQL (Structured Query Language) is a descriptive language, not imperative language. Therefore it describes what the user needs, not how to get it. When the user describes what he needs, the database need to decide how to get it. This process is called query optimization. The end result from this process is a query plan, which is a step by step instruction how to get the result."}),"\n",(0,s.jsx)(t.h2,{id:"introduction-to-the-cloudberry-database-architecture",children:"Introduction to the Cloudberry Database Architecture"}),"\n",(0,s.jsx)(t.p,{children:"Cloudberry Database (or CloudberryDB) is a massively parallel processing (MPP) database server with an architecture specially designed to manage large-scale analytic data warehouses and business intelligence workloads."}),"\n",(0,s.jsx)(t.p,{children:"MPP (also known as a shared-nothing architecture) refers to systems with two or more processors that cooperate to carry out an operation, each processor with its own memory, operating system, and disks. Cloudberry Database uses this high-performance system architecture to distribute the load of multi-terabyte data warehouses and all of a system's resources in parallel to process a query."}),"\n",(0,s.jsx)(t.p,{children:"Cloudberry Database is based on the open-source PostgreSQL. It is essentially several PostgreSQL database instances working together as one cohesive database management system (DBMS). It is based on PostgreSQL 14.4 kernel and in most cases it is very similar to PostgreSQL. Database users interact with Cloudberry Database as a regular PostgreSQL DBMS."}),"\n",(0,s.jsx)(t.p,{children:"In CloudberryDB, internals of PostgreSQL have been modified and optimized to support parallel structure of Cloudberry Database. For instance, system catalog, optimizer, query executor and transaction manager components have been modified and enhanced to be able to execute queries simultaneously across the parallel PostgreSQL database instances. CloudberryDB interconnect (the networking layer) enables communication between distinct PostgreSQL instances and allows the system to behave as one logical database."}),"\n",(0,s.jsx)(t.p,{children:"Cloudberry Database also includes features designed to optimize PostgreSQL for business intelligence (BI) workloads. For example, CloudberryDB has added parallel data loading (external tables), resource management, query optimizations and storage enhancements,."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Figure 1. High-Level Cloudberry Database Architecture"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"High-Level Cloudberry Database Architecture",src:a(52926).Z+"",width:"666",height:"530"})}),"\n",(0,s.jsx)(t.p,{children:"The following topics describe the components that make up a Cloudberry Database system and how they work together."}),"\n",(0,s.jsx)(t.h3,{id:"cloudberrydb-master-coordinator",children:"CloudberryDB Master (Coordinator)"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:'In the latest build of Cloudberry Database, the name "Master" has been deprecated, and "Coordinator" has been used instead. You are expected to see "coordinator" in the database output.'})}),"\n",(0,s.jsx)(t.p,{children:"The Cloudberry Database master is the entry to the Cloudberry Database system. It accepts client connections, handles SQL queries, and then distributes workload to the segment instances."}),"\n",(0,s.jsx)(t.p,{children:"Cloudberry Database end-users only interact with Cloudberry Database through master node as a typical PostgreSQL database. They connect to database using client such as psql or drivers like JDBC or ODBC."}),"\n",(0,s.jsx)(t.p,{children:"The master stores global system catalog. Global system catalog is set of system tables that contain metadata for Cloudberry Database itself. Master node does not contain any user table data; user table data resides only on segments. Master node would authenticate client connections, processe incoming SQL commands, distribute workloads among segments, collect the results returned by each segment and return the final results to the client."}),"\n",(0,s.jsx)(t.h3,{id:"cloudberrydb-segments",children:"CloudberryDB Segments"}),"\n",(0,s.jsx)(t.p,{children:"Cloudberry Database segment instances are independent PostgreSQL databases that each of them stores a portion of the data and performs the majority of query execution work."}),"\n",(0,s.jsx)(t.p,{children:"When a user connects to the database via the Cloudberry master and issues queries, accordingly execution plan would be distributed to each segment instance."}),"\n",(0,s.jsx)(t.p,{children:"The server that has segments running on it is called segment host. A segment host usually has two to eight Cloudberry segments running on it, the number depending on serveral factors: CPU cores, memory, disk, network interfaces or workloads. To get better performance in Cloudberry Database, it is suggested to distribute data and workloads evenly across segments so that execution plan can be finished across all segments and with no bottleneck."}),"\n",(0,s.jsx)(t.h3,{id:"cloudberrydb-interconnect",children:"CloudberryDB Interconnect"}),"\n",(0,s.jsx)(t.p,{children:"The interconnect is the networking layer of the Cloudberry Database architecture."}),"\n",(0,s.jsx)(t.p,{children:"The interconnect refers to the inter-process communication mechanism in-between segments. By default, interconnect uses User Datagram Protocol (UDP) to send/receive messages over the network. Interconnect provide datagram verification and retransmission mechanism. Reliability is equivalent to Transmission Control Protocol (TCP), performance and scalability exceeds TCP. If a user chooses TCP in interconnect, Cloudberry would have limit around 1000 segment instances. With UDP and interconncet, the limit does not exit."}),"\n",(0,s.jsx)(t.p,{children:"Now you can start the following lessons by clicking on the links:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./101-1-create-users-and-roles",children:"Lesson 1: Create Users and Roles"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./101-2-create-and-prepare-database",children:"Lesson 2: Create and Prepare Database"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./101-3-create-tables",children:"Lesson 3: Create Tables"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./101-4-data-loading",children:"Lesson 4: Data Loading"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./101-5-queries-and-performance-tuning",children:"Lesson 5: Queries and Performance Tuning"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./101-6-backup-and-recovery-operations",children:"Lesson 6: Backup and Resotre Operations"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},52926:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/highlevel_arch-3c57dadffdbaa8983bd6c34e244b88ed.jpg"},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var s=a(67294);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);