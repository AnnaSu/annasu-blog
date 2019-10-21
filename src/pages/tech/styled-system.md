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
  - Modern Web
  - '2019'
---
## Side

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;"><iframe src="//speakerdeck.com/player/d19639e8f6744ffa834c67f4640f815c" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div>

## 前言
不知道大家有沒有發現，在元件化的時代，無論你是使用 React/Vue.js/Angular，在不同專案裡可能一直重複做同樣功能的元件，只有樣式需要被改變，例如 Button、Checkbox、Radio button、Modal、Carousel 等，我們觀察到大部分元件的行為是一致的，是否能夠彈性的變更樣式？要如何讓我們開發專案更有效率？

隨著時代的演進，各種 UI library 一定會有好與不好的地方，希望可以從中學習各自的優良部份。

## UI library 的迭代演化與優缺點

### CSS Framework / UI Library
觀察早期的 CSS framework（例如：Bootstrap、Pure.css）可以直接在 mockup 加上 class 名稱，修改樣式和改變 DOM 結構是非常直覺的，但是缺少元件化，無法快速完成功能。

### UI Component Library
元件化的 UI Library（例如：Material-UI、Ant Design）可以快速完成功能，但是在使用元件時，並不知道元件有哪些 DOM？ 這些 DOM 對應的 class 名稱是什麼? 必須找到對應的 class 名稱，再覆蓋樣式，修改樣式會變得很麻煩。

使用現成的 Library，可以快速開發，但是無法因應特殊需求，反而提高專案維護的困難度，所以客製化元件成為許多企業選擇的解決方案。

接著跟大家分享實務的 [基本範例](https://speakerdeck.com/annasu/we-need-a-better-ui-component-library-styled-system?slide=34) ，歸納開發（ `React` 搭配 `styled-components` ）客製化元件時所遇到的問題。

## 客製化元件所遭遇的困難
- props 命名
  - 使用元件時，傳遞 props 名稱不一致，容易造成開發者的困惑。
- 客製化樣式需傳入對應的 props，程式碼很繁冗
  - 假如需要開發樣式非常彈性的元件，搭配 styled-components 寫 function 傳入 props 去設定特定樣式，會寫很多重複的程式碼。
- 不同狀態顯示不同樣式時，程式碼需要封裝
  - 如果我們必須根據不同狀態顯示不同樣式，為了讓程式碼更簡潔，可能需要寫一個 higher order function，傳入樣式的 object 和當前的狀態，使用元件時，再透過這個 function 定義樣式。
  - 當元件的樣式更複雜時，例如按鈕有不同特定樣式（Default/Primary/Danger）和尺寸（Default/Small/Large），那要怎麼寫比較好？
- RWD 元件開發複雜
  - 你可能需要寫下面這樣的程式碼，根據不同設備重新再寫一次樣式做修改。

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

綜合以上 UI Library 的優缺點：

- CSS Framework / UI Library => 缺乏元件化
- UI Component Library => 較難客製化樣式
- 客製化元件 => 開發過程會遇到一些問題

所以我們希望有一套 UI component Library 可以同時具有元件化的方便性，又能夠達成客製化的需求，幫助我們建立更有彈性的元件。

## Styled System 介紹
[styled-system](https://github.com/styled-system/styled-system) 是開源專案，2017 Release [第 1 版](https://github.com/styled-system/styled-system/releases/tag/v1.0.0)，到 2018 的 [第 2 版](https://github.com/styled-system/styled-system/releases/tag/v2.0.0) 比較穩定，2019 6 月出 [第 5 版](https://github.com/styled-system/styled-system/releases/tag/v2.0.0)，作者 [Brent Jackson](https://twitter.com/jxnblk) 同時也是 GatsbyJS 的貢獻者。

將簡報提到的基本案例，[重新透過 Styled System 改寫](https://speakerdeck.com/annasu/we-need-a-better-ui-component-library-styled-system?slide=68) 之後，可以發現：

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
因為公司專案是在今年年初時導入 Styled System 開發，目前正和同仁們努力將我們做好的 UI Library 應用在不同的專案中，心得應該會越來越多，最後決定另外再寫一篇 [Q&A](https://anna-su.com/tech/styled-system-q-a/)，可能會不定期更新喔～

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


