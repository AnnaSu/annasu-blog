---
slug: styled-system-q-a
templateKey: tech-post
title: Styled System 的開發心得與 Q&A
date: 2019-10-21T18:25:01.923Z
description: 將 Styled System 的使用心得以及 2019 Modern Web 會眾提出的問題，整理成 Q&A
tags:
  - Styled System
---

公司專案是在今年年初時導入 Styled System 開發，目前正和同仁們努力將我們做好的 UI Library 應用在不同的專案中，接續上一篇 [We need a better UI component library - Styled System](https://anna-su.com/tech/styled-system/)

將 Styled System 的開發心得以及 2019 Modern Web 會眾提出的問題，整理成 Q&A，此篇會不定期更新喔！



### 什麼情況下適合使用 Styled System？


建議是與公司同仁取得共識，因為需要每個角色互相配合，共同定義規範、討論需變動的規格等細節。

比較適合有系統化目標的產品網站：
- 同一個公司，但有各種風格的子專案
- 不同公司或專案，但是有相似的功能


### 如果 PM 或設計師提供的資訊不完整怎麼辦？

在實際專案中，我們的確很容易發生需求不夠明確、文件不足的狀況，此時溝通就會變得很重要，如果執行的工程師能夠主動提出關鍵問題並給予對應的解決方案，提供選項幫助對方抉擇，如此一來，就可以更快速的確認基本的需求並規劃專案的架構。

### 元件的功能很複雜，自己實作的話，需要花很多時間，時程真的來不及，要怎麼取捨？
仍然可以去找滿足基本功能的現成 library 再去封裝成自己的元件、達到客製化的需求並符合時程，但還是要確認當前的需求，考量修改與維護的成本再取捨。

### theme 透過 array 設定樣式時，在使用時較難對應，這樣在寫的時候是不是很麻煩？
- 例如： `space: [0, 1, 4, 8, 12, 16, 24, 32]`
  - 設定 padding 為 8px, 可以寫成 `p: ${themeGet('space.3')}` 

遭遇問題：需要反覆查看 theme 上面的 index 才能夠確認 space 的值

解決方案一：可以使用有『規律』的方式去定義 array，例如：

案例 1: `透過 2 的次方去定義 space` 

```javascript
space: [1, 2, 4, 8, 16, 32, 64]
```

use: `${themeGet('space.3')}`  => 2 的 3 次方是 8, 所以 `space.3`，會拿到 8px

彈性使用：實務上因為會大量用到 0, 可以多塞一個 0，在使用的時候就是去思考 2 的次方再加 1

```javascript
space: [0, 1, 2, 4, 8, 16, 32, 64]
```

use: `${themeGet('space.4')}`  => 當 index 等於 4，會拿到 8px

2 的 3 次方是 8 , 3 + 1 = 4
 

案例 2: `使用遞減方式定義黑白階顏色，方便擴充與使用`

```javascript
colors: {
  blacks: [
    BLACK,
    rgba(BLACK, 0.9),
    rgba(BLACK, 0.8),
    rgba(BLACK, 0.7),
    rgba(BLACK, 0.6),
    rgba(BLACK, 0.5),
    rgba(BLACK, 0.4),
    rgba(BLACK, 0.3),
    rgba(BLACK, 0.2),
    rgba(BLACK, 0.1),
    rgba(BLACK, 0.05),
  ],
  whites: [
    WHITE,
    rgba(WHITE, 0.9),
    rgba(WHITE, 0.8),
    rgba(WHITE, 0.7),
    rgba(WHITE, 0.6),
    rgba(WHITE, 0.5),
    rgba(WHITE, 0.4),
    rgba(WHITE, 0.3),
    rgba(WHITE, 0.2),
    rgba(WHITE, 0.1),
  ],
  ...
},
```

解決方案二：如果有明確的用途，可以直接使用 Object 去定義，例如：

```javascript
colors: {
...
  primary: '#62c8e0',
  success: '#56d066',
  danger: DANGER,
  errorBackground: rgba(DANGER, 0.1),
  icon: rgba(BLACK, 0.4),
  link: '#88d5e7',
  border: rgba(BLACK, 0.2),
  transparent: 'transparent',
}
```

```javascript
fontWeights: {
  normal: 400,
  semibold: 600,
}
```

結論：和設計師討論，共同定義並盡量使用規範內的數值去做設計與開發，依據能夠彈性的客製化樣式為原則，如果有例外也沒關係，就不使用 theme 的值即可。

### 簡報範例都是 React 搭配 styled-components，其他 JS 框架也可以使用 Styled System 嗎？

[styled-system](https://github.com/styled-system/styled-system) 是近年來新推出的 library，作者是基於 React 去開發，所以無論是版本或功能相對起來完善很多。

基本上 Vue 也支援 Styled System，但現階段，如果你要在 Vue 的技術裡，導入 styled-system，可能要等其他大神開發的專案更穩定，或者自己嘗試做一個。

Styled System 是開源專案，也有提供 [Documentation](https://styled-system.com/)，所以仍然可以參考他的架構，思考在現有專案與技術裡，該如何去改善。
