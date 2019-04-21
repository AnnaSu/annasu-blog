---
id: my-blog-notes-2
templateKey: tech-post
title: 個人 Blog 開發技術評估
date: 2019-04-21T07:33:02.991Z
description: |-
  針對本網站裡 Back-end、Databases、Infrastructure 所使用到的技術，

  我是怎麼評估使用該技術以及替我解決什麼問題？

  我不是這些領域的專家，只是分享一個前端工程師從零開始挑戰的紀錄。
---
針對本網站裡 Back-end、Databases、Infrastructure 所使用到的技術，

我是怎麼評估使用該技術以及替我解決什麼問題？

我不是這些領域的專家，只是分享一個前端工程師從零開始挑戰的紀錄。

---

### SSR(Server-side Rendering)

因為希望保留傳統動態網站的資料存取、能夠快速地顯示內容，又同時具有 SPA 的良好體驗，

所以最初就規劃要打造一個 server-rendered universal JavaScript 應用程式。

以 Blog 網站為例，繪製簡單的架構圖，用來說明這一連串的存取流程：

<img src="https://res.cloudinary.com/annasu/image/upload/c_scale,w_700/v1537370846/Tech/CleanShot_2018-09-19_at_23.26.16_2x.png" width="700" height="514"/>

* 從使用者輸入網址開始，透過瀏覽器發出第一個 Request。
* 第一次 Request 會回傳完整的 HTML 檔案，顯示在瀏覽器的畫面上。
	* 流程可以參考綠色箭頭，從瀏覽器發 Request 開始，會經過 `Web Server` 和 `API Server` ，最後從 `DB` Response HTML 檔案回到瀏覽器。
	* 這裡的 `API Server` 是使用 `GraphQL`
* 之後所有的 Request 都直接透過 `API Server` (Node.js) => `DB` 回傳我們需要顯示的 API 動態資料。
	* 流程可以參考藍色箭頭
	* 這個時候即使 Disable JavaScript，Blog 網站也能夠正常顯示。

針對 SSR，可以參考：

* [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8) 
* Google Chrome Developers 所釋出的[說明影片](https://www.youtube.com/watch?v=RAhYnK0v3rk)

---

### GCP (Google Cloud Platform)
#### 為什麼我使用 GCP ？

* 參考公司專案使用 GCP，跟著大大一起飛。
* 獲得 300 美元試用額度。
	* 但為了避免出現服務中斷等風險，Blog 網站上線後已改成付費版本。
* 曾參加 GCP 小型技術分享會，期間也有申請免費帳號、跟著玩玩看。
* GCP 有台灣機房，ASIA-EAST1 位於彰化。

---

#### GCP 可以幫助我的 Blog 網站解決什麼問題？

* 透過 Compute Engine 服務來建立 Virtual Machine Instances，用來存放 Blog 網站資料。
* 使用 Cloud SQL 管理和維護 DB，存放 Blog 網站裡的文章等資料。

---

### PostgreSQL

PostgreSQL 是一個免費開源的物件關聯式資料庫管理系統(ORDBMS)，超過 30 年的開發、

在可靠性、效能面都蠻穩定、可以處理資料、負荷大量的使用者存取。

到 GCP 的 SQL [新增 Instance](https://cloud.google.com/sql/docs/postgres/create-instance)，有 MySQL 和 PostgreSQL 的選擇，那為什麼我選擇了 [PostgreSQL](https://www.postgresql.org/)？

有三個原因：

* OPEN SOURCE
* THE WORLD'S MOST ADVANCED OPEN SOURCE RELATIONAL DATABASE
	* [PostgreSQL 官網](https://www.postgresql.org/) 表示這是全球最先進的開源關聯式資料庫。
* PostgreSQL 是依據美國國家標準協會(ANSI) 所定義的標準進行實作。

---

### GraphQL

[GraphQL](https://graphql.org/learn/)  和 React 一樣，都是由 Facebook 所推出，

GraphQL 是一個 API 的 query language，從 GraphQL API 改成 Restful API，目前感受到明顯的好處是：

* API 顯示哪些資料是由 Client 決定的，由 Client 給定欄位名稱。

例如： 查詢 posts 這隻 API，只要回傳 title 的資料。
  
`Client Request`

```
query {
	posts(page: 1) {
    data {
      title
    }
  }
}  
```

`Server Response`

```
{
  "data": {
    "posts": {
      "data": [
        {
          "title": "關於 Tech"
        },
        {
          "title": "前端工程師養成計劃"
        }
      ]
    },
  }
}
```

> REST 是會將 Server 的資料全部都給 Client，工程師再自己取需要的欄位做串接，可能會回傳一些不必要的資料。
	

* Client 可以彈性組合多隻 API 的資料，減少 Request 的數量，也可以改善頁面載入的效能。

例如： 我想要同時查詢 posts 和 tags API，而且只要回傳對應的 title 和 name。

`Client Request`

```
query {
	posts(page: 1) {
    data {
      title
    }
    tags {
	    name
	  }
  }
}  
```

`Server Response`

```
{
  "data": {
    "posts": {
      "data": [
        {
          "title": "關於 Tech"
        },
        {
          "title": "前端工程師養成計劃"
        }
      ]
    },
    "tags": [
      {
        "name": "Tech"
      },
      {
        "name": "前端工程師"
      },
    ]
  }
}
```

除了 Facebook 使用之外，還有像是 Github、PayPal、Pinterest、Twitter、Yelp 等[其他知名企業](https://graphql.org/users/) 都使用 GraphQL ，

---

### TypeORM

[TypeORM](https://github.com/typeorm/typeorm) 是基於 TypeScript 和 JavaScript 的 ORM（Object-Relational Mapping），可以跑在 Node.js。

使用 TypeORM 的 API 產生 DB 的 query 指令，查詢 DB 資料，是 mapping DB 和 API server 之間的關聯。

例如：

```  
category = await Category.findOne(categoryId);
```

`findOne` 就是 TypeORM 的 [EntityManager API](https://github.com/typeorm/typeorm/blob/master/docs/entity-manager-api.md)，將會對 DB 執行以下 query:

```  
SELECT * FROM "category" WHERE "categoryId" 
```

從 category 的資料表， 傳入 categoryId 去比對 category 的 id，找到第一個符合的，並回傳對應的 id。


---

### PM2

[PM2](http://pm2.keymetrics.io/) 是一個管理 Node.js process 的工具，可以有效運用 CPU 的資源，除此之外、PM2 可以效能監控、錯誤自動重啟、負載平衡，快速啟動或關閉 server，透過 PM2 的指令，簡單的實作這些細節。

輸入 `pm2 list` ，會顯示所有正在執行的程序：

<img src="https://res.cloudinary.com/annasu/image/upload/c_scale,w_700/v1537368750/Tech/CleanShot_2018-09-19_at_20.47.29_2x.png" width="700" height="182"/>

---

### Ansible

建立一個新網站，可能必須要設定新的環境，進行繁複的安裝，

更新網站也可能需要反覆的執行一些瑣碎的指令，

假如你需要管理正式站或測試站，甚至是多個網站，就會變得更複雜，需要花很多時間在安裝、設定、更新，而 Ansible 可以自動化的完成重複性的任務。

新增 YAML 格式的檔案來描述配置的資訊，建立 roles 和 tasks，再設定對應的 hosts 和 sites 資訊，並且使用 SSH 來做遠端操控。

不需要額外寫 Script 和程式碼去部署或更新你的應用程式，

你可以用一行指令、快速的完成一連串動作。

---

### NGINX

![](https://cdn-images-1.medium.com/max/1600/1*rFCyG1YbQwHWnadRIE0Ddg.png)

REF: [An Introduction to NGINX for Developers](https://medium.freecodecamp.org/an-introduction-to-nginx-for-developers-62179b6a458f)

NGINX 是一個高效能的負載平衡器（Load Balancer）、網站伺服器（Web Server）、反向代理（Reverse Proxy），和 Apache 相比、NGINX 使用的記憶體少、穩定性高。

NGINX 的使用率已經超越 Apache：

<img src="https://res.cloudinary.com/annasu/image/upload/c_scale,w_700/v1537368721/Tech/apache-logs-vs-nginx-logs-large.png" width="700" height="596"/>

REF: [Apache Logs vs. NGINX Logs](https://www.sumologic.com/blog/it-operations/apache-logs-vs-nginx-logs/)


新增 `conf` 的配置檔，針對 Blog 網站做設定，像是 `gzip` 、 `access_log` 、`error_log` 和 `proxy_set_header` 等。 

---

簡單介紹到這裡啦！

目前還在努力學習中，希望未來能夠多參加除了前端以外的活動，

多認識一些高手、向大神們學習，

把技能補好並寫成筆記，再分享文章到 Blog 網站唷～
