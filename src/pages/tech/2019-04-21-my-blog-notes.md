---
id: my-blog-notes-1
templateKey: tech-post
title: 個人 Blog 網站開發紀錄
date: 2019-04-21T07:28:59.225Z
description: 本篇文章不是教學文，主要紀錄個人 Blog 所使用到的開發技術，以及實作的小小心得。
---
本篇文章不是教學文，
主要紀錄個人 Blog 所使用到的開發技術，以及實作的小小心得。

由於需要 API 、顯示前台與管理後台，
所以我新增了 3 個 Repositories，依序開發如下：

* API
  * 使用 GraphQL 建立 API

* 前台
  * 顯示 blog 文章
  * 透過 [razzle](https://github.com/jaredpalmer/razzle) 新增 server-rendered universal JavaScript 應用程式
* 後台
  * 用來新增、查詢、刪除、修改文章
  * 透過 [Ant Design](https://ant.design/) 快速建立管理後台

---

### Skills：

- Front-end
    - HTML & CSS
        - HTML5
        - CSS3
          - [styled-components](https://www.styled-components.com/)
            - [polished ](https://polished.js.org/docs/)
    - JavaScript
        - [React](https://reactjs.org/) (Redux)
        - [RxJS](http://reactivex.io/)
        - [Redux Observable](https://github.com/redux-observable/redux-observable)
        - [redux-actions](https://github.com/redux-utilities/redux-actions)
- Back-end
  - [NodeJS](https://nodejs.org/)
  - [GraphQL](https://graphql.org/)
  - [TypeOrm](http://typeorm.io/)
- Build Tools
    - [Webpack](https://webpack.js.org/)
    - [Babel](https://babeljs.io/)
- Databases
    - [PostgreSQL](https://www.postgresql.org/)
- Infrastructure
    - [GCP](https://cloud.google.com/)
    - [PM2](https://github.com/Unitech/pm2)
    - [Ansible](https://github.com/ansible/ansible)
    - [NGINX](https://github.com/nginx/nginx)


***

## Blog 實作心得

一直想要開發屬於自己的 Blog，
畫面和實作技術都可以依照自己的想法來玩，
看自己心情，想怎麼改就怎麼改～
設計可以有自己的想法，API 也自己寫，自己接，
這個願望放在心裡面很久了。

雖然我已經從嫩嫩前端到有點老的前端，
但成為 Full Stack Development 還有非常多的地方需要學習，
不過，總是可以試試看！

***

#### 心得：

* 因為是自己的網站，需求自己開，只會先做基本功能，所以很適合練功。
* 以前對 DevOps 瞭解不多，小小的走了一圈之後，覺得有夠博大精深，內心真的是萬分尊敬。
* 除了前端，其他開發過程卡好卡滿，好不容易把網站做完功能之後，老實說，內心還是沒有很了解，有很多想釐清的觀念。
* 做完 Blog 網站之後會很想好好寫文章，紀錄一下自己奔跑的人生。

***

接下來幾篇，
我會找一些 Blog 使用到的(Back-end 和 DevOps)技術，
用前端的角度來寫文章。
