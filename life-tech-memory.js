const MEMORY_STAGES = [
  {
    title: '數位安全站', icon: '🔐', accent: 0x4c9f84, soft: 0xe4f3e9,
    badge: '網路安全徽章', motto: '網路探險，先保護好自己！',
    reflection: '遇到不確定的連結或訊息，先停下來找可信任的大人確認。',
    pairs: [
      { situation: '收到陌生人傳來的免費禮物連結', action: '先不點，請可信任的大人確認', note: '不明連結可能藏有陷阱，先找家長或老師確認。' },
      { situation: '幫自己的帳號設定密碼', action: '每個帳號用不同密碼，不分享給別人', note: '不同又不容易猜的密碼，可以讓帳號更安全。' },
      { situation: '網路上的人詢問姓名和住址', action: '不提供個人資料，告訴可信任的大人', note: '姓名、住址和學校等資料要好好保護。' }
    ]
  },
  {
    title: '居家安全屋', icon: '🏡', accent: 0xd9814e, soft: 0xffeddb,
    badge: '用電安全徽章', motto: '安全使用電器，讓家更安心！',
    reflection: '碰到插頭和電線時，先顧好安全並請大人協助。',
    pairs: [
      { situation: '手濕時想拔掉電器插頭', action: '先擦乾手，再請大人幫忙', note: '水會導電，操作插頭前要保持手部乾燥並請大人協助。' },
      { situation: '發現電線外皮破損', action: '停止使用，告訴大人處理', note: '破損電線可能造成觸電或火災，要交給大人處理。' },
      { situation: '要清理電風扇或電器', action: '先關閉電源，再請大人協助', note: '清潔電器前要先切斷電源，並由大人確認安全。' }
    ]
  },
  {
    title: '節能小基地', icon: '🌱', accent: 0x418c86, soft: 0xdff1ec,
    badge: '節能行動徽章', motto: '每天做一點，地球更有元氣！',
    reflection: '少浪費能源，就從離開空間時關掉不需要的電器開始。',
    pairs: [
      { situation: '離開教室時', action: '關掉不需要的燈和電扇', note: '離開空間時關閉不使用的電器，可以減少能源浪費。' },
      { situation: '使用冷氣時想要省電又舒服', action: '關好門窗，再搭配電扇', note: '冷氣不外漏，再搭配電扇幫助空氣流動，就能舒適又省電。' },
      { situation: '白天教室光線已經很明亮', action: '善用日光，關掉不需要的燈', note: '依照環境光線使用照明，能減少不必要的用電。' }
    ]
  },
  {
    title: '資源回收島', icon: '♻️', accent: 0x6a9251, soft: 0xe8f1dd,
    badge: '資源分類徽章', motto: '分類做得好，資源再利用！',
    reflection: '先看物品狀態和分類標示，再把資源送到對的位置。',
    pairs: [
      { situation: '使用後仍乾淨的紙箱', action: '摺好，放進紙類回收', note: '紙箱保持乾淨並摺好，依照學校或住家規定分類回收。' },
      { situation: '吃完水果留下果皮', action: '依校園分類規定放進廚餘', note: '果皮通常屬於廚餘，記得遵守學校的分類標示。' },
      { situation: '喝完飲料留下空瓶', action: '倒空內容物，依標示分類回收', note: '回收前先倒空容器，再依照學校的回收標示分類。' }
    ]
  },
  {
    title: '創意發明所', icon: '💡', accent: 0x8872b8, soft: 0xeee8f8,
    badge: '創意設計徽章', motto: '觀察問題，動手做出好點子！',
    reflection: '設計時先理解使用者的需要，再製作、測試並改良。',
    pairs: [
      { situation: '想讓紙橋承受更多重量', action: '把紙摺成波浪或拱形，再測試', note: '摺出形狀能讓紙更穩固，測試後還可以繼續改良。' },
      { situation: '設計解決問題的小工具', action: '先觀察問題和使用者需要', note: '先了解誰遇到什麼問題，才能設計真正有幫助的作品。' },
      { situation: '紙橋測試後還是容易倒塌', action: '觀察結果，調整設計再測試', note: '設計需要反覆測試和改良，從結果中找到更好的方法。' }
    ]
  }
];

const PALETTE = {
  ink: 0x244441,
  dark: 0x31584f,
  muted: 0x72877d,
  paper: 0xfffdf8,
  pale: 0xf3f7f3,
  line: 0xdce8df,
  green: 0x347b69,
  gold: 0xf2b35d,
  coral: 0xe9816b,
  white: 0xffffff
};

class LifeTechMemoryScene extends Phaser.Scene {
  constructor() {
    super('LifeTechMemoryScene');
    this.state = 'intro';
    this.stageIndex = 0;
    this.matchedCount = 0;
    this.selected = [];
    this.locked = false;
    this.feedback = '';
    this.cards = [];
    this.elapsedMs = 0;
    this.penaltySeconds = 0;
    this.timerText = null;
    this.lastDisplayedSecond = -1;
  }

  update(_time, delta) {
    if (this.state !== 'play' && this.state !== 'stage-clear') return;
    this.elapsedMs += delta;
    const currentSecond = this.getRaceSeconds();
    if (currentSecond !== this.lastDisplayedSecond) {
      if (this.timerText?.active) this.timerText.setText(`⏱ ${this.formatTime(currentSecond)}`);
      this.lastDisplayedSecond = currentSecond;
    }
  }

  create() {
    this.scale.on('resize', this.handleResize, this);
    this.drawIntro();
  }

  handleResize() {
    if (this.state === 'intro') this.drawIntro();
    else if (this.state === 'play') this.drawPlay();
    else if (this.state === 'stage-clear') this.drawStageClear();
    else this.drawResult();
  }

  clearScreen() {
    this.tweens.killAll();
    this.time.removeAllEvents();
    this.children.removeAll(true);
  }

  color(value) {
    return `#${value.toString(16).padStart(6, '0')}`;
  }

  getRaceSeconds() {
    return Math.floor(this.elapsedMs / 1000) + this.penaltySeconds;
  }

  formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }

  panel(x, y, width, height, fill, radius = 18, stroke = null, lineWidth = 1) {
    const shape = this.add.graphics();
    shape.fillStyle(fill, 1);
    shape.fillRoundedRect(x - width / 2, y - height / 2, width, height, radius);
    if (stroke !== null) {
      shape.lineStyle(lineWidth, stroke, 1);
      shape.strokeRoundedRect(x - width / 2, y - height / 2, width, height, radius);
    }
    return shape;
  }

  text(value, x, y, size, color = PALETTE.ink, options = {}) {
    const item = this.add.text(x, y, value, {
      fontFamily: '"Avenir Next", "Noto Sans TC", "PingFang TC", sans-serif',
      fontSize: `${size}px`,
      fontStyle: options.bold === false ? 'normal' : 'bold',
      color: this.color(color),
      align: options.align || 'center',
      lineSpacing: options.lineSpacing ?? 5,
      wordWrap: options.wrap ? { width: options.wrap } : undefined,
      stroke: options.stroke ? this.color(options.stroke) : undefined,
      strokeThickness: options.stroke ? 3 : 0
    });
    item.setOrigin(options.originX ?? 0.5, options.originY ?? 0.5);
    return item;
  }

  backdrop() {
    const { width, height } = this.scale;
    const bg = this.add.graphics();
    bg.fillStyle(PALETTE.pale, 1);
    bg.fillRect(0, 0, width, height);
    bg.fillStyle(0xe5f1e8, 0.68);
    bg.fillCircle(width * 0.04, height * 0.2, Math.min(width, height) * 0.21);
    bg.fillStyle(0xf8e9d9, 0.7);
    bg.fillCircle(width * 0.96, height * 0.84, Math.min(width, height) * 0.22);
    const dots = this.add.graphics();
    dots.fillStyle(0xbcd8c9, 0.48);
    for (let i = 0; i < 22; i++) {
      dots.fillCircle((i * 139 + 19) % width, (i * 89 + 23) % height, (i % 3) + 1);
    }
  }

  addButton(label, x, y, width, height, callback, fill = PALETTE.green, fontSize = 18) {
    this.panel(x, y, width, height, fill, Math.min(22, height / 2));
    const zone = this.add.zone(x, y, width, height).setInteractive({ useHandCursor: true });
    zone.on('pointerdown', callback);
    this.text(label, x, y, fontSize, PALETTE.white);
    return zone;
  }

  drawIntro() {
    this.clearScreen();
    this.state = 'intro';
    const { width: w, height: h } = this.scale;
    const narrow = w < 560;
    const panelW = Math.min(w - 28, 800);
    this.backdrop();
    this.panel(w / 2, h / 2, panelW, h - 30, PALETTE.paper, 30, PALETTE.line, 2);
    this.text('✦', w / 2, h * 0.15, 33, PALETTE.gold);
    this.text('生活科技闖關任務', w / 2, h * 0.23, narrow ? 15 : 17, PALETTE.muted);
    this.text('情境記憶配對', w / 2, h * 0.31, narrow ? 31 : 39, PALETTE.dark);
    this.text('翻開情境卡，找出能解決問題的正確行動', w / 2, h * 0.39, narrow ? 14 : 17, PALETTE.muted, { wrap: w - 62 });

    const points = [
      { icon: '🧠', label: '五個主題', detail: '每關六張卡' },
      { icon: '⏱️', label: '全程計時', detail: '答錯加 5 秒' },
      { icon: '🎖️', label: '三分鐘內完成', detail: '獲得榮譽勳章' }
    ];
    if (narrow) {
      points.forEach((point, i) => {
        const y = h * 0.51 + i * 54;
        this.panel(w / 2, y, Math.min(330, w - 58), 44, i === 1 ? 0xf0f6ed : 0xf7f5ed, 14, 0xe8ecdf);
        this.text(`${point.icon}  ${point.label}　${point.detail}`, w / 2, y, 14, PALETTE.dark);
      });
    } else {
      points.forEach((point, i) => {
        const x = w / 2 + (i - 1) * 218;
        this.panel(x, h * 0.57, 196, 102, i === 1 ? 0xf0f6ed : 0xf7f5ed, 17, 0xe8ecdf);
        this.text(point.icon, x, h * 0.54, 23, PALETTE.ink);
        this.text(point.label, x, h * 0.585, 14, PALETTE.dark);
        this.text(point.detail, x, h * 0.62, 12, PALETTE.muted);
      });
    }

    this.addButton('開始時間賽　→', w / 2, h * 0.82, Math.min(300, w - 70), 54, () => this.startGame(), PALETTE.green, 18);
    this.text('每關配對三組情境與行動，完成全部五關並挑戰更快時間', w / 2, h * 0.92, narrow ? 11 : 12, PALETTE.muted, { wrap: w - 40 });
  }

  startGame() {
    this.elapsedMs = 0;
    this.penaltySeconds = 0;
    this.lastDisplayedSecond = -1;
    this.stageIndex = 0;
    this.openStage();
  }

  openStage() {
    const stage = MEMORY_STAGES[this.stageIndex];
    this.cards = [];
    stage.pairs.forEach((pair, pairIndex) => {
      this.cards.push({ pairIndex, type: 'situation', label: '情境', value: pair.situation, matched: false, faceUp: false });
      this.cards.push({ pairIndex, type: 'action', label: '行動', value: pair.action, matched: false, faceUp: false });
    });
    Phaser.Utils.Array.Shuffle(this.cards);
    this.matchedCount = 0;
    this.selected = [];
    this.locked = false;
    this.feedback = '先翻開一張情境卡或行動卡';
    this.state = 'play';
    this.drawPlay();
  }

  drawPlay() {
    this.clearScreen();
    this.state = 'play';
    const { width: w, height: h } = this.scale;
    const stage = MEMORY_STAGES[this.stageIndex];
    const compact = w < 560;
    this.backdrop();

    this.panel(w / 2, 42, w - 24, 70, PALETTE.paper, 18, PALETTE.line);
    this.panel(39, 41, 32, 32, stage.soft, 12);
    this.text(stage.icon, 39, 41, 20, stage.accent);
    this.text(stage.title, 68, 31, compact ? 14 : 16, PALETTE.dark, { align: 'left', originX: 0 });
    this.text(`第 ${this.stageIndex + 1} 關`, 68, 54, 11, PALETTE.muted, { align: 'left', originX: 0 });
    const scoreWidth = compact ? 90 : 112;
    const scoreX = w - scoreWidth / 2 - 20;
    this.panel(scoreX, 41, scoreWidth, 42, 0xf0f5e9, 18, 0xe2eadc);
    this.timerText = this.text(`⏱ ${this.formatTime(this.getRaceSeconds())}`, scoreX, 41, compact ? 13 : 15, PALETTE.dark);
    this.lastDisplayedSecond = this.getRaceSeconds();

    const barY = 91;
    const segmentGap = 5;
    const segmentW = (w - 36 - segmentGap * 4) / 5;
    for (let i = 0; i < 5; i++) {
      const x = 18 + segmentW / 2 + i * (segmentW + segmentGap);
      this.panel(x, barY, segmentW, 7, i <= this.stageIndex ? stage.accent : 0xdce7df, 4);
    }

    this.text(stage.motto, w / 2, 120, compact ? 13 : 16, PALETTE.dark, { wrap: w - 40 });
    this.text(`配對進度 ${this.matchedCount} / 3　｜　答錯加 5 秒`, w / 2, 145, compact ? 11 : 12, PALETTE.muted, { wrap: w - 30 });

    const columns = compact ? 2 : 3;
    const rows = Math.ceil(this.cards.length / columns);
    const cardGapX = compact ? 8 : 14;
    const cardGapY = compact ? 8 : 12;
    const cardW = Math.min(compact ? 240 : 320, (w - 28 - cardGapX * (columns - 1)) / columns);
    const cardH = Math.min(182, Math.max(96, (h - 285) / rows));
    const totalW = cardW * columns + cardGapX * (columns - 1);
    const startX = (w - totalW) / 2 + cardW / 2;
    const topY = 166 + cardH / 2;
    const centers = this.cards.map((_card, index) => ({
      x: startX + (index % columns) * (cardW + cardGapX),
      y: topY + Math.floor(index / columns) * (cardH + cardGapY)
    }));

    this.cards.forEach((card, index) => this.drawMemoryCard(card, index, centers[index].x, centers[index].y, cardW, cardH, stage));

    const footerY = h - 43;
    const mismatch = this.feedback.startsWith('配對不合');
    const feedbackFill = this.feedback.startsWith('配對成功') ? 0xe5f3e5 : (mismatch ? 0xffeee3 : 0xfffdf8);
    this.panel(w / 2, footerY, w - 30, 54, feedbackFill, 16, 0xe5e9dc);
    const feedbackSize = compact ? 12 : 14;
    this.text(this.feedback, w / 2, footerY, feedbackSize, mismatch ? 0x9c5948 : PALETTE.dark, { wrap: w - 56 });
  }

  drawMemoryCard(card, index, x, y, width, height, stage) {
    const revealed = card.faceUp || card.matched;
    const fill = card.matched ? 0xe7f4e6 : (revealed ? PALETTE.paper : stage.soft);
    const stroke = card.matched ? 0x82b989 : (revealed ? stage.accent : 0xd7e4db);
    this.panel(x, y, width, height, fill, 20, stroke, card.matched ? 3 : 2);

    if (card.matched) {
      this.text('✓', x, y - height * 0.29, 24, 0x579265);
    } else if (revealed) {
      this.panel(x, y - height * 0.31, Math.min(82, width - 28), 27, stage.soft, 13);
      this.text(card.label, x, y - height * 0.31, 12, stage.accent);
      const fontSize = width < 165 ? 12 : (width < 240 ? 14 : 16);
      this.text(card.value, x, y + height * 0.17, fontSize, PALETTE.dark, { wrap: width - 24, lineSpacing: 4 });
    } else {
      this.text('✦', x, y - 14, width < 190 ? 29 : 34, stage.accent);
      this.text('點我翻牌', x, y + 26, 12, PALETTE.muted);
    }

    if (!card.matched && !card.faceUp && !this.locked) {
      const hit = this.add.zone(x, y, width, height).setInteractive({ useHandCursor: true });
      hit.on('pointerdown', () => this.flipCard(index));
    }
  }

  flipCard(index) {
    if (this.state !== 'play' || this.locked || this.cards[index].matched || this.cards[index].faceUp) return;
    const card = this.cards[index];
    card.faceUp = true;
    this.selected.push(index);
    this.feedback = this.selected.length === 1 ? '記住這張卡，再找出相關的另一張' : '看看兩張卡的情境和行動是否相符';
    this.drawPlay();
    if (this.selected.length === 2) {
      this.locked = true;
      this.time.delayedCall(420, () => this.resolveSelection());
    }
  }

  resolveSelection() {
    const [firstIndex, secondIndex] = this.selected;
    const first = this.cards[firstIndex];
    const second = this.cards[secondIndex];
    const isMatch = first.pairIndex === second.pairIndex && first.type !== second.type;
    if (isMatch) {
      first.matched = true;
      second.matched = true;
      this.matchedCount += 1;
      const pair = MEMORY_STAGES[this.stageIndex].pairs[first.pairIndex];
      this.feedback = `配對成功！${pair.note}`;
      this.selected = [];
      this.locked = false;
      this.drawPlay();
      if (this.matchedCount === 3) {
        this.time.delayedCall(1150, () => this.drawStageClear());
      }
      return;
    }

    this.penaltySeconds += 5;
    this.feedback = '配對不合，計時加 5 秒。再看看情境和行動的關聯';
    this.drawPlay();
    this.time.delayedCall(1150, () => {
      this.cards[firstIndex].faceUp = false;
      this.cards[secondIndex].faceUp = false;
      this.selected = [];
      this.locked = false;
      this.feedback = '先翻開一張情境卡或行動卡';
      this.drawPlay();
    });
  }

  drawStageClear() {
    this.clearScreen();
    this.state = 'stage-clear';
    const { width: w, height: h } = this.scale;
    const stage = MEMORY_STAGES[this.stageIndex];
    const compact = w < 540;
    this.backdrop();
    this.panel(w / 2, h / 2, Math.min(w - 28, 720), h - 36, PALETTE.paper, 30, PALETTE.line, 2);
    this.text('✦', w / 2, h * 0.16, 38, PALETTE.gold);
    this.text(`第 ${this.stageIndex + 1} 關完成`, w / 2, h * 0.25, compact ? 16 : 18, PALETTE.muted);
    this.text(stage.title, w / 2, h * 0.34, compact ? 29 : 37, stage.accent);
    this.panel(w / 2, h * 0.48, compact ? 236 : 280, 72, stage.soft, 22, stage.accent, 2);
    this.text('🏅', w / 2, h * 0.46, 27, stage.accent);
    this.text(stage.badge, w / 2, h * 0.51, compact ? 13 : 15, PALETTE.dark);
    this.text('生活科技小筆記', w / 2, h * 0.62, 14, PALETTE.muted);
    this.text(stage.reflection, w / 2, h * 0.69, compact ? 14 : 16, PALETTE.dark, { wrap: w - 74, lineSpacing: 7 });
    this.timerText = this.text(`目前總用時　${this.formatTime(this.getRaceSeconds())}`, w / 2, h * 0.77, compact ? 14 : 16, PALETTE.dark);
    this.lastDisplayedSecond = this.getRaceSeconds();

    const finalStage = this.stageIndex === MEMORY_STAGES.length - 1;
    this.addButton(finalStage ? '查看結算　→' : '前往下一關　→', w / 2, h * 0.88, Math.min(300, w - 68), 52, () => {
      if (finalStage) this.drawResult();
      else {
        this.stageIndex += 1;
        this.openStage();
      }
    }, stage.accent, compact ? 15 : 17);
  }

  drawResult() {
    this.clearScreen();
    this.state = 'result';
    const { width: w, height: h } = this.scale;
    const compact = w < 560;
    const finishTime = this.getRaceSeconds();
    const earned = finishTime <= 180;
    this.backdrop();
    this.panel(w / 2, h / 2, Math.min(w - 28, 760), h - 32, PALETTE.paper, 30, PALETTE.line, 2);
    this.text('五關挑戰完成', w / 2, h * 0.12, compact ? 16 : 18, PALETTE.muted);
    this.text('生活科技探險家', w / 2, h * 0.2, compact ? 29 : 38, PALETTE.dark);

    this.panel(w / 2, h * 0.36, compact ? 236 : 286, 100, earned ? 0xfff2cf : 0xf0f4ee, 24, earned ? 0xe5bd61 : 0xdce8df, 2);
    this.text(earned ? '🎖️' : '🌟', w / 2, h * 0.325, 34, PALETTE.gold);
    this.text(earned ? '時間賽榮譽勳章' : '完成挑戰徽章', w / 2, h * 0.39, compact ? 15 : 17, earned ? 0x9b7023 : PALETTE.dark);
    this.text(this.formatTime(finishTime), w / 2, h * 0.49, compact ? 22 : 26, PALETTE.dark);

    this.text(earned ? '太棒了，你在三分鐘內完成！' : '全部關卡完成，再挑戰三分鐘內完成！', w / 2, h * 0.56, compact ? 13 : 15, PALETTE.muted, { wrap: w - 50 });
    this.text('完成的主題徽章', w / 2, h * 0.64, 13, PALETTE.muted);

    const badges = MEMORY_STAGES.map((stage, i) => ({ stage, i }));
    const badgeGap = compact ? 7 : 12;
    const badgeW = Math.min(compact ? 58 : 90, (w - 46 - badgeGap * 4) / 5);
    const badgeH = compact ? 62 : 78;
    const totalW = badgeW * 5 + badgeGap * 4;
    const startX = (w - totalW) / 2 + badgeW / 2;
    badges.forEach(({ stage, i }) => {
      const x = startX + i * (badgeW + badgeGap);
      this.panel(x, h * 0.73, badgeW, badgeH, stage.soft, 14, stage.accent);
      this.text(stage.icon, x, h * 0.715, compact ? 18 : 22, stage.accent);
      this.text(`${i + 1} 關`, x, h * 0.755, compact ? 9 : 11, PALETTE.dark);
    });

    this.text('安全・節能・回收・設計，都是生活中的科技行動', w / 2, h * 0.83, compact ? 11 : 13, PALETTE.dark, { wrap: w - 38 });
    this.addButton('再玩一次　↻', w / 2, h * 0.92, Math.min(260, w - 72), 48, () => this.startGame(), PALETTE.green, compact ? 15 : 17);
  }
}

const memoryGame = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#f3f7f3',
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 960,
    height: 720,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  render: {
    antialias: true,
    pixelArt: false
  },
  scene: [LifeTechMemoryScene]
});
