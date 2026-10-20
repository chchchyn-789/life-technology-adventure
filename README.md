# 遊戲學習基地

網站提供兩個 Phaser 遊戲學習體驗，將生活科技內容融入闖關、配對與其他遊戲機制。

## GitHub Pages

- [遊戲學習基地首頁](https://chchchyn-789.github.io/life-technology-adventure/)
- [遊戲式學習遊樂場](https://chchchyn-789.github.io/life-technology-adventure/game-learning.html)
- [生活科技探險隊](https://chchchyn-789.github.io/life-technology-adventure/life-tech-adventure.html)

## 內容

- `index.html` 是網站主畫面，連結到兩個遊戲體驗。
- `game-learning.html` 介紹遊戲式學習與十種 Phaser 遊戲機制，並嵌入互動範例。
- `life-tech-adventure.html` 是先前設計的生活科技闖關遊戲。共有五個主題關卡，每關兩題；答對加 10 分，答錯扣 5 分，總分超過 40 分即可獲得榮譽勳章。

## 本機預覽

在此資料夾執行：

```sh
python3 -m http.server 8000
```

接著用瀏覽器開啟 `http://localhost:8000`。遊戲透過 CDN 載入 Phaser，因此第一次開啟時需要網路連線。

## 闖關遊戲操作

- 使用方向鍵或 WASD 移動角色；手機或平板可使用畫面下方的方向鈕。
- 走近答案卡片就會自動蒐集，並顯示答題結果和生活科技小知識。
