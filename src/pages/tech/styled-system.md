---
slug: styled-system
templateKey: tech-post
cover: /img/cleanshot-2019-08-29-at-19.10.12-2x.png
title: We need a better UI component library - Styled System
date: 2019-08-29T05:53:32.782Z
description: >
  我們開發網站時，可能會使用 UI Library 讓專案開發更有效率，例如：早期的動態網站，透過 Bootstrap 或是 Pure CSS 等 CSS
  Framework ，幫助我們快速建立網站。但隨著前端技術的演進，SPA （Single Page Application）架構興起，這些 CSS
  Framework 已經不太適合在「元件化」的專案裡使用，我們可能需要自己封裝，或是使用已經封裝好的 UI Library。

  像是 Material-UI、Ant Design 等元件化的 UI Library，讓我們能夠直接透過 JavaScript 套用 UI
  Library，可以更方便使用別人撰寫好的樣式，但同時也失去了彈性，如果需要開發客製化的網站，我們不再像以前可以直接的修改 HTML 結構或是 CSS
  樣式，使用這些 UI Component Libraries 反而提高專案維護的困難度。

  如今我們希望能夠有一套 UI component Library 可以同時具有元件化的方便性，又能夠達成客製化的需求，透過 Styled System
  幫助我們建立更有彈性的元件，組裝出屬於自己風格的網站！
tags:
  - Styled System
---
## Side

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;"><iframe src="//speakerdeck.com/player/d19639e8f6744ffa834c67f4640f815c" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div>

## 前言

Styled System 大約是 2017 開始推出，到 2018 的 [第 2 版](https://github.com/styled-system/styled-system/releases/tag/v2.0.0) 比較穩定，
今年 6 月出 [第 5 版](https://github.com/styled-system/styled-system/releases/tag/v2.0.0)，主要開發者是 [Brent Jackson](https://twitter.com/jxnblk)， Jackson 其他的專案還有 Theme UI/MDX Deck/Rebass，同時也是 GatsbyJS 的開發者。

由於考慮台灣應該蠻多公司並未導入 [Styled System](https://styled-system.com/)，所以本次分享主要希望透過各種實務上會用到的基本範例，介紹使用 Styled System 之後，能夠幫我們解決哪些問題？ 透過 Styled System 究竟能為我們帶來哪些好處？


## Ui library 的迭代演化與優缺點

在元件化的時代，不知道大家有沒有發現，不管你是用 React/Vue.js/Angular，我們一直在刻元件，在不同專案裡有可能一直重複做同樣功能的元件，或者直接使用現成的元件，但只有樣式做調整，例如 Button, Checkbox, Radio button, Modal, Carousel 等元件，當然還是有特殊情況，但我們可以觀察到大部分元件的行為是一致的。

我們先回過頭來想想，通常我們啟動一個新專案，如何評估技術可行性？

可能需要先考量是否用現成的 Ui library 或者是自己客製化？ 有時候專案很趕，時程就是來不及，當下最快可能就是用別人寫好的輪子。

隨著時代的演進，各種 Ui library 一定會有好的地方和不好的地方，我們檢視簡單的範例，觀察程式碼的細節，希望可以從中學習各自的優良部份。

我們發現早期的 UI framework 可以直接在 mockup 加上 classname 修改，修改樣式是非常直覺的，但是要自己定義元件裡面的樣式，無法快速完成功能。

而元件化的 UI Library 可以快速完成功能，但是在使用元件的時候，我們並不知道元件有哪些 DOM， 這些 DOM 對應的 class 名稱是什麼? 我們必須找到對應的 class 名稱，再覆蓋樣式，修改樣式會變得很麻煩。

用別人寫好的元件能夠快速開發可是較難客製化樣式，反而提高專案維護的困難度，那我們再來看看如果客製化元件，可能會發生哪些問題？

## 客製化元件所遭遇的困難 
- 傳入 props 命名不一致
  - 使用元件時，傳遞 props 名稱不一致，容易造成開發者的困惑。

- 客製化樣式需傳入對應的 props，程式碼很繁冗
  - 假如我們今天要做一個樣式非常彈性的元件，搭配 styled-components 需要寫 function 傳入 props 去設定特定樣式，寫很多重複的程式碼。

- 不同狀態顯示不同樣式時，程式碼需要封裝
  - 如果我們必須根據不同狀態顯示不同樣式，為了讓程式碼更簡潔，我們可能需要自己抽象化，寫一個 higher order function，傳入樣式的 object 和當前的狀態，這樣使用元件時，再透過這個 function 去快速定義特定樣式。
  - 當元件的樣式比較複雜時，例如按鈕在 Default/Primary/Danger 會有不同樣式，同時像是 Default/Small/Large 不同尺寸也會有不同的樣式，那要怎麼寫比較好？當然功能上是都可以達到，但是想要思考看看有沒有更好的寫法？

- RWD 元件開發複雜
  - 我個人覺得要客製化 RWD 元件，其實蠻麻煩的，你可能需要寫下面這樣的程式碼，根據不同設備重新再寫一次樣式做修改。

```javascript
const Article = styled.div`
  width: 100%;
  …

  @media (min-width: 567px) {
    width: 50%;
    …
  }

  @media (min-width: 768px) {
    width: 25%;
    …
  }
`;
```


## Styled System 可以幫我們解決什麼問題

觀察簡報裡面的範例，重新透過 Styled System 改寫之後，可以發現：

- 大幅降低 props 命名或格式不一致的問題
- 更好的抽象化樣式，程式碼變得更少
- 根據不同狀態，更彈性的修改對應樣式
- 靈活的處理 RWD 樣式
- 透過 theme 快速變更主題樣式

我們可以直接在元件上定義排版/字級/顏色/RWD 等樣式，例如：

```jsx
<Box m={2} />
<Box p={[2, 3]} />
<Box fontSize={[1, 2]} />
<Box color="primary" />
```

透過 Styled System，使用元件時，能夠直接設定樣式，變得非常直覺，但同時又能享受元件的語意化以及封裝好的樣式，程式碼更簡潔、組合更彈性、使用更方便，還能夠達成客製化的需求。

## 使用 Styled System 開發專案的心得

公司專案是在今年年初時採用 Styled System 開發，目前正和同仁們努力將我們做好的 UI Library 應用在不同的專案中，將自己開發的心得以及會眾提出很棒的問題，整理如下：


### 什麼情況下適合導入 Styled System？
簡單的來說是希望將專案做系統化的產品，功能相似，但樣式可以彈性修改，例如：
- 同一個公司，但有各種風格的子專案
- 不同公司或專案，但是有相似的功能

建議是與公司同仁取得共識，因為需要專案裡每個角色都互相配合，共同定義規範、討論需變動的規格等細節。

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

---

## 延伸閱讀

- https://jxnblk.com/
- https://github.com/styled-system/styled-system/blob/master/CHANGELOG.md
- https://styled-system.com/guides/migrating/
- https://github.com/styled-system/styled-system/releases/tag/v2.0.0
- https://github.com/styled-system/styled-system/releases/tag/v5.0.0
- https://en.wikipedia.org/wiki/Law_of_the_instrument#Abraham_Maslow

---

最後跟大家分享『錘子理論』，如果你手裡只有一把錘子，那你看什麼東西都像釘子。

> Maslow's hammer - if all you have is a hammer, everything looks like a nail

如果你只有一把錘子，你只能夠釘東西，只有一種執行方法，但我們希望不只是解決問題，我們應該去衡量新工具能夠帶來的優缺點，讓自己擁有更多可行方案。

經過技術的迭代，光是 CSS 的架構方法就有像是 OOCSS/BEM/CSS Modules/Styled Components 等，都是希望能夠改善命名、優化效能、提高程式碼易讀性、增加重用程度等等、讓程式碼做更好的抽象化。

不要對熟悉的工具有過度的依賴，當然也不要為了追求新技術而去使用，大家可以思考 Styled System 是不是真的適合應用在目前的專案裡？ 或許 Styled System 不是你現在的靈藥，但是希望未來會是你其中一個很棒的選擇 🤠

