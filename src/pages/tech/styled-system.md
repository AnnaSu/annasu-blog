---
slug: styled-system
templateKey: tech-post
cover: /img/cleanshot-2019-08-29-at-19.10.12-2x.png
title: We need a better UI component library - Styled System
date: 2019-08-29T05:53:32.782Z
description: >-
  我們開發網站時，可能會使用 UI Library 讓專案開發更有效率，例如：早期的動態網站，透過 Bootstrap 或是 Pure CSS 等 CSS
  Framework ，幫助我們快速建立網站。


  但隨著前端技術的演進，SPA （Single Page Application）架構興起，這些 CSS Framework
  已經不太適合在「元件化」的專案裡使用，我們可能需要自己封裝，或是使用已經封裝好的 UI Library。


  像是 Material-UI、Ant Design 等元件化的 UI Library，能夠讓我們直接透過 JavaScript 套用 UI
  Library，可以更方便使用別人撰寫好的樣式，但同時也失去了彈性，如果需要開發客製化的網站，我們不再像以前可以直接的修改 HTML 結構或是 CSS
  樣式，使用這些 UI Component Libraries 反而提高專案維護的困難度。


  如今我們希望能夠有一套 UI component Library 可以同時具有元件化的方便性，又能夠達成客製化的需求，透過 Styled System
  幫助我們建立更有彈性的元件，組裝出屬於自己風格的網站！
tags:
  - Styled System
---
## Side

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;"><iframe src="//speakerdeck.com/player/d19639e8f6744ffa834c67f4640f815c" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div>


我們開發網站時，可能會使用 UI Library 讓專案開發更有效率，例如：早期的動態網站，透過 Bootstrap 或是 Pure CSS 等 CSS Framework ，幫助我們快速建立網站。
但隨著前端技術的演進，SPA （Single Page Application）架構興起，這些 CSS Framework 已經不太適合在「元件化」的專案裡使用，我們可能需要自己封裝，或是使用已經封裝好的 UI Library。
像是 Material-UI、Ant Design 等元件化的 UI Library，能夠讓我們直接透過 JavaScript 套用 UI Library，可以更方便使用別人撰寫好的樣式，但同時也失去了彈性，如果需要開發客製化的網站，我們不再像以前可以直接的修改 HTML 結構或是 CSS 樣式，使用這些 UI Component Libraries 反而提高專案維護的困難度。
如今我們希望能夠有一套 UI component Library 可以同時具有元件化的方便性，又能夠達成客製化的需求，透過 Styled System 幫助我們建立更有彈性的元件，組裝出屬於自己風格的網站！

## 前言

Styled System 大約是 2017 開始推出，到 2018 的 [第 2 版](https://github.com/styled-system/styled-system/releases/tag/v2.0.0) 比較穩定，
今年 6 月出 [第 5 版](https://github.com/styled-system/styled-system/releases/tag/v2.0.0)，主要開發者是 [Brent Jackson](https://twitter.com/jxnblk)， Jackson 其他的專案還有 Theme UI/MDX Deck/Rebass ，個人網站也應用 Theme UI 和 Styled System 來開發。

[Jackson 個人網站](https://jxnblk.com/) 的右上角有個按鈕、點擊之後可以切換各種 theme 樣式，Blog 文章也寫得很好，我記得有一次看到他的文章後覺得醍醐灌頂、深受啟發，就讓英文不太好的我，硬是搭配 Google 翻譯，熬夜把他的所有文章看完，Jackson 同時也是 GatsbyJS 的開發者，，總之、無庸置疑就是大神一枚！ 

由於考慮台灣應該蠻多公司並未導入 [Styled System](https://styled-system.com/)，所以本次分享沒有講太多艱深的程式碼，主要希望透過各種實務上會用到的基本範例，介紹使用 Styled System 之後，能夠幫我們解決哪些問題？ 透過 Styled System 究竟能為我們帶來哪些好處？


## Ui library 的迭代演化與優缺點

在元件化的時代，不知道大家有沒有發現，不管你是用 React/Vue.js/Angular，我們一直在刻元件，在不同專案裡有可能一直重複做同樣功能的元件，或者直接使用現成的元件，但只有樣式做調整，例如 Button, Checkbox, Radio button, Modal, Carousel 等元件，當然還是有可能有特殊情況，但我們可以觀察到大部分元件的行為是一致的。

我們先回過頭來想想，通常我們啟動一個新專案，通常會發生什麼事？

我們可能需要先評估是否用現成的 Ui library 或者是自己客製化？ 有時候專案很趕，時程就是來不及，當下最快可能就是用別人寫好的輪子。

隨著時代的演進，各種 Ui library 一定會有好的地方和不好的地方，我們檢視簡單的範例，觀察程式碼的細節，希望可以從中學習各自的優良部份。

我們發現早期的 UI framework 可以直接在 mockup 加上 classname 修改，修改樣式是非常直覺的，但是要自己定義元件裡面的樣式，無法快速完成功能。

而元件化的 UI Library 可以快速完成功能，但是在使用元件的時候，我們並不知道元件有哪些 DOM， 這些 DOM 對應的 class 名稱是什麼? 我們必須找到對應的 class 名稱，再覆蓋樣式，修改樣式會變得很麻煩。

用別人寫好的元件能夠快速開發可是較難客製化樣式，反而提高專案維護的困難度，那我們再來看看如果客製化元件，可能會發生哪些問題？

## 客製化元件所遭遇的困難 
- 傳入 props 命名不一致
  - 使用元件時，傳遞 props 資料所使用的 props 名稱不一致，容易造成開發者的困惑。

- 客製化樣式需傳入對應的 props，程式碼很繁冗
  - 假如我們今天要做一個樣式非常彈性的元件，搭配 styled components 需要寫 function 傳入 props 去設定特定樣式，寫很多重複的程式碼。

- 不同狀態顯示不同樣式時，程式碼需要封裝
  - 如果我們必須根據不同狀態顯示不同樣式，為了讓程式碼更簡潔，我們可能需要自己抽象化，寫一個 higher order function，傳入樣式的 object 和當前的狀態，這樣使用元件時，再透過這個 function 去快速定義特定樣式。
  - 當元件的樣式比較複雜時，例如按鈕在 Default/Primary/Danger 會有不同樣式，同時像是 Default/Small/Large 不同尺寸也會有不同的樣式，那要怎麼寫比較好？當然功能上是都可以達到，但是想要思考看看有沒有更好的寫法？

- RWD 元件開發複雜
  - 我個人覺得要客製化 RWD 元件，其實蠻麻煩的，你可能需要寫下面這樣的程式碼，根據不同設備重新再寫一次樣式做修改。

```
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

透過簡報前面提到的範例，重新透過 Styled System 改寫之後，可以發現：

- 大幅降低 props 命名或格式不一致的問題
- 更好的抽象化樣式，程式碼變得更少
- 根據不同狀態，更彈性的修改對應樣式
- 靈活的處理 RWD 樣式
- 透過 theme 快速變更主題樣式

我們可以直接在元件上定義排版/字級/顏色/RWD 等樣式，例如：

```
<Box m={2} />
<Box p={[2, 3]} />
<Box fontSize={[1, 2]} />
<Box color="primary" />
```

透過 Styled System，使用元件時，能夠直接設定樣式，變得非常直覺，但同時又能享受元件的語意化以及封裝好的樣式，程式碼更簡潔、組合更彈性、使用更方便，還能夠達成客製化的需求。

## 使用 Styled System 開發專案的心得

公司專案是在今年年初時採用 Styled System 開發，目前正和同仁們努力將我們做好的 UI Library 應用在不同的專案中，整理自己開發的心得以及會眾提出很棒的問題，整理如下：

1. 如果專案一開始，設計師提供的文件與資訊不完整怎麼辦？
2. 元件的功能很複雜，自己實作的話，需要花很多時間，時程真的來不及，要怎麼取捨？
3. 什麼情況下適合 Styled System？
4. 透過 theme 給 array 去設定樣式時，在使用時較難對應，例如：要設定 padding 為 8px, 要一直回去看 theme 的檔案是 `space: [0, 4, 8, 16, 24, 32, 64]` 才知道 8px 是 index 第 2 個，這樣在寫的時候是不是很麻煩？
5. 假設有某個元件的樣式，是跟其他專案 theme 定義都不一樣的話怎麼辦？ 
6. 簡報範例都是 React 搭配 styled components，那除了 React 其他 JS 框架也可以使用 Styled System 嗎？

最後跟大家分享『錘子理論』，如果你手裡只有一把錘子，那你看什麼東西都像釘子。

> Maslow's hammer - if all you have is a hammer, everything looks like a nail

如果你只有一把錘子，你只能夠釘東西，只有一種執行方法，但我們希望不只是解決問題，我們應該去衡量新工具能夠帶來的優缺點，讓自己擁有更多可行方案。

經過技術的迭代，光是 CSS 的架構方法就有像是 OOCSS/BEM/CSS Modules/Styled Components 等，都是希望能夠改善命名、優化效能、提高程式碼易讀性、增加重用程度等等、讓程式碼做更好的抽象化。

不要對熟悉的工具有過度的依賴，當然也不要為了追求新技術而去使用，大家可以思考 Styled System 是不是真的適合應用在目前的專案裡？ 或許 Styled System 不是你現在的靈藥，但是希望未來會是你其中一個很棒的選擇 🤠

## 延伸閱讀

- https://jxnblk.com/
- https://github.com/styled-system/styled-system/blob/master/CHANGELOG.md
- https://styled-system.com/guides/migrating/
- https://github.com/styled-system/styled-system/releases/tag/v2.0.0
- https://github.com/styled-system/styled-system/releases/tag/v5.0.0
- https://en.wikipedia.org/wiki/Law_of_the_instrument#Abraham_Maslow


> 最後一部分的問題大家可以先思考一下，晚點再來更新回覆
