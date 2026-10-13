const STAGES = [
  {
    title: '數位安全站', icon: '🔐', accent: 0x50aa91, soft: 0xe0f2ea, room: 0xf0f8f1,
    motto: '網路探險，先保護好自己！',
    questions: [
      {
        prompt: '收到陌生人傳來的「免費禮物」連結，怎麼做最安全？',
        choices: [
          { icon: '🛑', text: '先不點，問可信任的大人', correct: true, note: '不明連結可能藏有陷阱，先找家長或老師確認。' },
          { icon: '👆', text: '馬上點開看看', correct: false },
          { icon: '📨', text: '轉傳給同學一起看', correct: false }
        ]
      },
      {
        prompt: '設定帳號密碼時，哪個習慣最安全？',
        choices: [
          { icon: '🎂', text: '全部都用生日當密碼', correct: false },
          { icon: '🔑', text: '每個帳號用不同密碼，不告訴別人', correct: true, note: '不同又不容易猜的密碼，可以讓帳號更安全。' },
          { icon: '📝', text: '把密碼貼在桌上', correct: false }
        ]
      }
    ]
  },
  {
    title: '居家安全屋', icon: '🏡', accent: 0xe28a52, soft: 0xffecd9, room: 0xfff6e9,
    motto: '安全使用電器，讓家更安心！',
    questions: [
      {
        prompt: '手濕時想拔插頭，應該怎麼做？',
        choices: [
          { icon: '💧', text: '直接拉電線拔掉', correct: false },
          { icon: '🧑‍🏫', text: '先擦乾手，再請大人幫忙', correct: true, note: '水會導電，電器插頭的操作要保持手部乾燥並請大人協助。' },
          { icon: '🔧', text: '用金屬物品挑插頭', correct: false }
        ]
      },
      {
        prompt: '發現電線外皮破損時，應該怎麼處理？',
        choices: [
          { icon: '🛑', text: '停止使用，告訴大人處理', correct: true, note: '破損電線可能造成觸電或火災，要交給大人處理。' },
          { icon: '🩹', text: '用膠帶隨便纏一纏', correct: false },
          { icon: '⏳', text: '繼續用到不能動', correct: false }
        ]
      }
    ]
  },
  {
    title: '節能小基地', icon: '🌱', accent: 0x4d9da0, soft: 0xd9f0ed, room: 0xeaf7f4,
    motto: '每天做一點，地球更有元氣！',
    questions: [
      {
        prompt: '離開教室時，怎麼做可以節省能源？',
        choices: [
          { icon: '💡', text: '關掉不需要的燈和電扇', correct: true, note: '離開空間時關閉不使用的電器，可以減少浪費。' },
          { icon: '🌟', text: '所有燈都開著', correct: false },
          { icon: '💻', text: '讓電腦整晚運作', correct: false }
        ]
      },
      {
        prompt: '開冷氣時，怎樣比較省電又舒服？',
        choices: [
          { icon: '🚪', text: '門窗全打開', correct: false },
          { icon: '🪟', text: '關好門窗，搭配電扇', correct: true, note: '冷氣不外漏，再搭配電扇幫助空氣流動，就能舒適又省電。' },
          { icon: '🧣', text: '冷氣開最強再蓋厚被', correct: false }
        ]
      }
    ]
  },
  {
    title: '資源回收島', icon: '♻️', accent: 0x6b9a5c, soft: 0xe3f0d7, room: 0xf0f7e8,
    motto: '分類做得好，資源再利用！',
    questions: [
      {
        prompt: '乾淨的紙箱通常可以怎麼處理？',
        choices: [
          { icon: '🚰', text: '丟進水槽沖掉', correct: false },
          { icon: '📦', text: '摺好，放進紙類回收', correct: true, note: '紙箱保持乾淨並摺好，依照學校或住家規定分類回收。' },
          { icon: '🫳', text: '丟在地上', correct: false }
        ]
      },
      {
        prompt: '吃完的果皮，應該放在哪裡？',
        choices: [
          { icon: '🍎', text: '依校園分類規定放廚餘', correct: true, note: '果皮通常屬於廚餘，記得遵守學校的分類標示。' },
          { icon: '📄', text: '混進乾淨紙類', correct: false },
          { icon: '🗄️', text: '塞進抽屜忘記它', correct: false }
        ]
      }
    ]
  },
  {
    title: '創意發明所', icon: '💡', accent: 0x8974bd, soft: 0xebe4f7, room: 0xf4effa,
    motto: '觀察問題，動手做出好點子！',
    questions: [
      {
        prompt: '想讓紙橋更能承重，可以怎麼改造？',
        choices: [
          { icon: '〰️', text: '把紙摺成波浪或拱形', correct: true, note: '摺出形狀能讓紙更穩固；做完可以測試，再繼續改良。' },
          { icon: '🗞️', text: '把紙揉成一團', correct: false },
          { icon: '✂️', text: '在橋上剪很多洞', correct: false }
        ]
      },
      {
        prompt: '設計一個解決問題的小工具，第一步是什麼？',
        choices: [
          { icon: '🧩', text: '不看情況直接亂做', correct: false },
          { icon: '👀', text: '觀察問題，想想使用者需要', correct: true, note: '先了解誰遇到什麼問題，才能設計真正有幫助的作品。' },
          { icon: '💎', text: '先選最貴的材料', correct: false }
        ]
      }
    ]
  }
];

const COLORS = {
  ink: 0x244441,
  muted: 0x718783,
  dark: 0x2e5751,
  white: 0xffffff,
  paper: 0xf7faf5,
  line: 0xd8e7de,
  gold: 0xf2b35d,
  coral: 0xe9816b,
  green: 0x4ca77e
};

class AdventureScene extends Phaser.Scene {
  constructor() {
    super('AdventureScene');
    this.gameState = 'intro';
    this.stageIndex = 0;
    this.questionIndex = 0;
    this.score = 0;
    this.answerObjects = [];
    this.touchDir = { left: false, right: false, up: false, down: false };
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D,ENTER,SPACE');
    this.input.keyboard.addCapture(['UP', 'DOWN', 'LEFT', 'RIGHT', 'SPACE']);
    this.input.on('pointerup', this.releaseTouch, this);
    this.input.on('gameout', this.releaseTouch, this);
    this.scale.on('resize', this.handleResize, this);
    this.createHeroTexture();
    this.drawIntro();
  }

  createHeroTexture() {
    const g = this.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0x31524a, 0.12); g.fillEllipse(36, 80, 37, 10);
    g.fillStyle(0x456a5d); g.fillRoundedRect(21, 58, 13, 20, 6);
    g.fillStyle(0x456a5d); g.fillRoundedRect(39, 58, 13, 20, 6);
    g.fillStyle(0xf28a65); g.fillRoundedRect(18, 39, 37, 27, 12);
    g.fillStyle(0xe6ad72); g.fillRoundedRect(11, 43, 12, 23, 6);
    g.fillStyle(0xe6ad72); g.fillRoundedRect(50, 43, 12, 23, 6);
    g.fillStyle(0xf2c98e); g.fillCircle(36, 30, 22);
    g.fillStyle(0x3b4645); g.fillRoundedRect(15, 12, 42, 15, 8);
    g.fillStyle(0x3b4645); g.fillCircle(20, 22, 9);
    g.fillStyle(0x3b4645); g.fillCircle(51, 22, 9);
    g.fillStyle(0x344444); g.fillCircle(29, 32, 2.2);
    g.fillStyle(0x344444); g.fillCircle(43, 32, 2.2);
    g.lineStyle(2, 0xb86c57, 1); g.beginPath(); g.arc(36, 35, 6, 0.25, 2.85, false); g.strokePath();
    g.fillStyle(0xffd265); g.fillCircle(36, 49, 4);
    g.generateTexture('little-explorer', 72, 88);
    g.destroy();
  }

  handleResize() {
    if (this.gameState === 'intro') this.drawIntro();
    else if (this.gameState === 'result') this.drawResult();
    else this.drawQuestion();
  }

  clearScreen() {
    this.tweens.killAll();
    this.time.removeAllEvents();
    this.children.removeAll(true);
    this.answerObjects = [];
    this.player = null;
    this.playerShadow = null;
    this.feedbackPanel = null;
    this.scoreText = null;
  }

  roundedPanel(x, y, width, height, fill, radius = 18, stroke = null, lineWidth = 1) {
    const g = this.add.graphics();
    g.fillStyle(fill, 1);
    g.fillRoundedRect(x - width / 2, y - height / 2, width, height, radius);
    if (stroke !== null) {
      g.lineStyle(lineWidth, stroke, 1);
      g.strokeRoundedRect(x - width / 2, y - height / 2, width, height, radius);
    }
    return g;
  }

  label(text, x, y, size, color = COLORS.ink, options = {}) {
    return this.add.text(x, y, text, {
      fontFamily: 'Nunito, "Noto Sans TC", "Microsoft JhengHei", sans-serif',
      fontSize: `${size}px`,
      fontStyle: options.bold === false ? 'normal' : 'bold',
      color: `#${color.toString(16).padStart(6, '0')}`,
      align: options.align || 'center',
      lineSpacing: options.lineSpacing ?? 4,
      wordWrap: options.wrap ? { width: options.wrap } : undefined,
      stroke: options.stroke || undefined,
      strokeThickness: options.stroke ? 3 : 0,
      shadow: options.shadow || undefined
    }).setOrigin(0.5);
  }

  drawPageBackdrop() {
    const { width: w, height: h } = this.scale;
    const bg = this.add.graphics();
    bg.fillStyle(0xf3f7f3, 1); bg.fillRect(0, 0, w, h);
    bg.fillStyle(0xe8f3ec, 0.65); bg.fillCircle(w * 0.07, h * 0.18, Math.min(w, h) * 0.2);
    bg.fillStyle(0xfcebd8, 0.58); bg.fillCircle(w * 0.94, h * 0.8, Math.min(w, h) * 0.22);
    const dots = this.add.graphics();
    dots.fillStyle(0xbcd8c9, 0.52);
    for (let i = 0; i < 26; i++) {
      const x = ((i * 137) % Math.max(w - 10, 1)) + 5;
      const y = ((i * 83 + 27) % Math.max(h - 10, 1)) + 5;
      dots.fillCircle(x, y, (i % 3) + 1);
    }
  }

  drawIntro() {
    this.clearScreen();
    this.gameState = 'intro';
    const { width: w, height: h } = this.scale;
    const portrait = w < 650;
    this.drawPageBackdrop();

    this.roundedPanel(w / 2, h / 2, Math.min(w - 30, 730), Math.min(h - 34, 590), 0xfffdf8, 30, 0xdce9df, 2);
    this.label('✦', w / 2, h * 0.18, 34, COLORS.gold);
    this.label('歡迎加入', w / 2, h * 0.265, 17, COLORS.muted);
    this.label('生活科技探險隊', w / 2, h * 0.33, portrait ? 31 : 38, COLORS.dark, { stroke: '#f3f7f3' });
    this.label('挑戰五個主題關卡，每關兩題，蒐集答案成為生活科技小達人！', w / 2, h * 0.405, portrait ? 14 : 17, COLORS.muted, { wrap: w - 74 });

    const cardsY = h * 0.53;
    const info = [
      { icon: '🧭', title: '自由探索', body: '走近選項，自動蒐集' },
      { icon: '⭐', title: '答對 +10', body: '好選擇累積分數' },
      { icon: '🎖️', title: '超過 40 分', body: '獲得榮譽勳章' }
    ];
    const cardW = portrait ? Math.min(260, w - 84) : 194;
    const cardH = portrait ? 52 : 116;
    info.forEach((item, i) => {
      const x = portrait ? w / 2 : w / 2 + (i - 1) * 211;
      const y = portrait ? cardsY + i * 62 : cardsY;
      this.roundedPanel(x, y, cardW, cardH, i === 1 ? 0xf5faf2 : 0xf7f5ed, 17, 0xe6eade, 1);
      if (portrait) {
        this.label(item.icon, x - cardW / 2 + 28, y, 22, COLORS.ink);
        this.label(`${item.title}　${item.body}`, x + 13, y, 14, COLORS.dark, { align: 'left' });
      } else {
        this.label(item.icon, x, y - 25, 27, COLORS.ink);
        this.label(item.title, x, y + 10, 15, COLORS.dark);
        this.label(item.body, x, y + 34, 11, COLORS.muted);
      }
    });

    const buttonY = portrait ? h - 78 : h * 0.83;
    const buttonW = Math.min(280, w - 80);
    this.roundedPanel(w / 2, buttonY, buttonW, 56, 0x347b69, 24);
    this.add.zone(w / 2, buttonY, buttonW, 56).setInteractive().on('pointerdown', () => this.startAdventure());
    this.label('開始探險　→', w / 2, buttonY, 18, COLORS.white);
    this.label('方向鍵／WASD　•　或使用畫面方向鈕', w / 2, h - 26, 11, COLORS.muted);
    this.input.keyboard.once('keydown-ENTER', () => this.startAdventure());
    this.input.keyboard.once('keydown-SPACE', () => this.startAdventure());
  }

  startAdventure() {
    if (this.gameState !== 'intro') return;
    this.score = 0;
    this.stageIndex = 0;
    this.questionIndex = 0;
    this.drawQuestion();
  }

  currentQuestion() {
    return STAGES[this.stageIndex].questions[this.questionIndex];
  }

  drawHeader(stage, question) {
    const { width: w } = this.scale;
    this.roundedPanel(w / 2, 36, w - 22, 64, 0xfffdf8, 18, 0xe0ebe3, 1);
    const compact = w < 380;
    this.label('✦', 30, 34, 20, stage.accent);
    this.label('科技探險隊', 51, 29, compact ? 15 : 17, COLORS.dark, { align: 'left' });
    const scoreW = compact ? 88 : 105;
    const scoreX = w - scoreW / 2 - 19;
    this.roundedPanel(scoreX, 35, scoreW, 40, 0xeaf3e8, 18, 0xdce8dc, 1);
    this.label('⭐', scoreX - scoreW * 0.3, 35, 15, COLORS.gold);
    this.scoreText = this.label(`${this.score} 分`, scoreX + scoreW * 0.13, 35, 15, COLORS.dark);

    const barX = 19;
    const barY = 78;
    const gap = 6;
    const segW = (w - 38 - gap * 4) / 5;
    for (let i = 0; i < 5; i++) {
      const seg = this.add.graphics();
      seg.fillStyle(i < this.stageIndex ? stage.accent : (i === this.stageIndex ? stage.accent : 0xdfe9e1), 1);
      seg.fillRoundedRect(barX + i * (segW + gap), barY, segW, 7, 4);
      if (i === this.stageIndex) {
        seg.fillStyle(0xffffff, 0.45);
        seg.fillRoundedRect(barX + i * (segW + gap), barY, segW * ((this.questionIndex + 1) / stage.questions.length), 7, 4);
      }
    }
    this.label(`第 ${this.stageIndex + 1} 關　${stage.title}　·　任務 ${this.questionIndex + 1}/${stage.questions.length}`, w / 2, 101, 13, stage.accent);

    const questionY = 158;
    this.roundedPanel(w / 2, questionY, w - 34, 104, 0xfffdf8, 22, 0xe3ece2, 1);
    this.label(question.prompt, w / 2, questionY - 2, w < 500 ? 17 : 20, COLORS.dark, { wrap: w - 74, lineSpacing: 6 });
  }

  drawArena(stage) {
    const { width: w, height: h } = this.scale;
    const portrait = w < 650;
    const arenaTop = 222;
    const arenaBottom = h - 126;
    this.arena = { left: 23, right: w - 23, top: arenaTop, bottom: arenaBottom, portrait };
    this.physics.world.setBounds(28, arenaTop + 11, w - 56, arenaBottom - arenaTop - 22);

    this.roundedPanel(w / 2, (arenaTop + arenaBottom) / 2, w - 22, arenaBottom - arenaTop, stage.room, 25, stage.soft, 2);
    const pattern = this.add.graphics();
    pattern.lineStyle(1, stage.accent, 0.09);
    const grid = portrait ? 44 : 54;
    for (let x = 40; x < w - 20; x += grid) {
      pattern.beginPath(); pattern.moveTo(x, arenaTop + 22); pattern.lineTo(x, arenaBottom - 20); pattern.strokePath();
    }
    for (let y = arenaTop + 32; y < arenaBottom - 14; y += grid) {
      pattern.beginPath(); pattern.moveTo(35, y); pattern.lineTo(w - 35, y); pattern.strokePath();
    }
    this.add.circle(57, arenaTop + 40, 7, stage.accent, 0.22);
    this.add.circle(w - 58, arenaBottom - 42, 11, stage.accent, 0.16);
    this.add.text(w - 91, arenaTop + 7, stage.icon, { fontSize: '46px' }).setOrigin(0.5).setAlpha(0.13);
    this.label(stage.motto, w / 2, arenaTop + (portrait ? 13 : 27), w < 500 ? 12 : 14, stage.accent);

    const footerY = h - 52;
    this.drawTouchControls(footerY, stage.accent);
    this.label('靠近答案，就會自動蒐集', w < 500 ? w * 0.68 : w / 2, footerY, w < 500 ? 11 : 13, COLORS.muted);
  }

  drawTouchControls(y, accent) {
    const w = this.scale.width;
    const centerX = w < 500 ? 85 : 91;
    const btnSize = w < 500 ? 27 : 30;
    const dirs = [
      { dir: 'left', x: centerX - btnSize * 1.18, y, glyph: '‹' },
      { dir: 'up', x: centerX, y: y - btnSize * 1.08, glyph: '⌃' },
      { dir: 'down', x: centerX, y: y + btnSize * 1.08, glyph: '⌄' },
      { dir: 'right', x: centerX + btnSize * 1.18, y, glyph: '›' }
    ];
    dirs.forEach(({ dir, x, y: cy, glyph }) => {
      const circle = this.add.circle(x, cy, btnSize * 0.52, 0xfffdf8, 0.96).setStrokeStyle(2, accent, 0.58);
      circle.setInteractive();
      circle.on('pointerdown', (pointer) => {
        pointer.event?.preventDefault?.();
        this.touchDir[dir] = true;
      });
      this.label(glyph, x, cy - 1, btnSize * 1.16, accent);
    });
  }

  releaseTouch() {
    Object.keys(this.touchDir).forEach((key) => { this.touchDir[key] = false; });
  }

  drawQuestion() {
    this.clearScreen();
    this.gameState = 'playing';
    const stage = STAGES[this.stageIndex];
    const question = this.currentQuestion();
    const { width: w, height: h } = this.scale;
    this.drawPageBackdrop();
    this.drawHeader(stage, question);
    this.drawArena(stage);
    this.drawAnswers(stage, question);

    const startX = w < 650 ? Math.max(34, w * 0.08) : w / 2;
    const startY = w < 650 ? (this.arena.top + this.arena.bottom) / 2 : this.arena.top + 36;
    this.player = this.physics.add.sprite(startX, startY, 'little-explorer');
    this.player.setDepth(8).setScale(0.78).setCollideWorldBounds(true);
    this.player.body.setAllowGravity(false);
    this.player.body.setSize(34, 41).setOffset(19, 32);
    this.player.setData('spawn', { x: startX, y: startY });
    this.drawPlayerHint();
  }

  drawAnswers(stage, question) {
    const { width: w } = this.scale;
    const { top, bottom, portrait } = this.arena;
    let spots;
    if (portrait) {
      spots = [
        { x: w * 0.62, y: top + 60 },
        { x: w * 0.62, y: (top + bottom) / 2 },
        { x: w * 0.62, y: bottom - 56 }
      ];
    } else {
      spots = [
        { x: w * 0.23, y: top + 115 },
        { x: w * 0.5, y: bottom - 84 },
        { x: w * 0.77, y: top + 115 }
      ];
    }
    const rotate = (this.questionIndex + this.stageIndex) % 3;
    const width = portrait ? Math.min(w - 124, 350) : Math.min(270, w * 0.28);
    const fontSize = portrait ? 14 : 17;
    const textWidth = width - (portrait ? 94 : 87);
    const charsPerLine = Math.max(5, Math.floor(textWidth / (fontSize * 1.08)));
    const height = portrait ? 80 : 115;

    question.choices.forEach((choice, i) => {
      const position = spots[(i + rotate) % 3];
      const card = this.add.container(position.x, position.y);
      const shadow = this.add.graphics();
      shadow.fillStyle(0x557566, 0.08);
      shadow.fillRoundedRect(-width / 2, -height / 2 + 6, width, height, 20);
      const background = this.add.graphics();
      background.fillStyle(0xfffefa, 1);
      background.fillRoundedRect(-width / 2, -height / 2, width, height, 20);
      background.lineStyle(2, stage.accent, 0.29);
      background.strokeRoundedRect(-width / 2, -height / 2, width, height, 20);
      const iconX = -width / 2 + (portrait ? 34 : 36);
      const icon = this.add.circle(iconX, 0, portrait ? 20 : 24, stage.soft, 1);
      const emoji = this.add.text(iconX, -1, choice.icon, { fontSize: portrait ? '20px' : '24px' }).setOrigin(0.5);
      const answer = this.add.text(-width / 2 + (portrait ? 64 : 70), 0, this.wrapAnswer(choice.text, charsPerLine), {
        fontFamily: 'Nunito, "Noto Sans TC", "Microsoft JhengHei", sans-serif',
        fontSize: `${fontSize}px`,
        fontStyle: 'bold',
        color: '#31514b',
        align: 'left',
        lineSpacing: 2,
        wordWrap: { width: textWidth }
      }).setOrigin(0, 0.5);
      card.add([shadow, background, icon, emoji, answer]);
      card.setSize(width, height);
      this.tweens.add({ targets: card, y: position.y + 4, duration: 1000 + i * 170, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' });
      this.answerObjects.push({ container: card, background, choice, position, hitWidth: width, hitHeight: height, originalColor: 0xfffefa });
    });
  }

  wrapAnswer(text, charsPerLine) {
    const chars = Array.from(text);
    const lines = [];
    while (chars.length > charsPerLine) {
      lines.push(chars.splice(0, charsPerLine).join(''));
    }
    if (chars.length) lines.push(chars.join(''));
    return lines.join('\n');
  }

  drawPlayerHint() {
    this.playerShadow = this.add.ellipse(this.player.x, this.player.y + 32, 44, 10, 0x557566, 0.15).setDepth(6);
    this.player.setDepth(7);
  }

  update() {
    if (this.gameState !== 'playing' || !this.player?.body) return;
    if (this.playerShadow) this.playerShadow.setPosition(this.player.x, this.player.y + 32);
    const left = this.cursors.left.isDown || this.keys.A.isDown || this.touchDir.left;
    const right = this.cursors.right.isDown || this.keys.D.isDown || this.touchDir.right;
    const up = this.cursors.up.isDown || this.keys.W.isDown || this.touchDir.up;
    const down = this.cursors.down.isDown || this.keys.S.isDown || this.touchDir.down;
    let vx = (right ? 1 : 0) - (left ? 1 : 0);
    let vy = (down ? 1 : 0) - (up ? 1 : 0);
    if (vx !== 0 || vy !== 0) {
      const norm = Math.hypot(vx, vy);
      vx /= norm; vy /= norm;
    }
    this.player.body.setVelocity(vx * 235, vy * 235);
    let nearestAnswer = null;
    let nearestScore = Infinity;
    this.answerObjects.forEach((answer) => {
      if (!answer.choice || answer.collected) return;
      const dx = Math.abs(this.player.x - answer.container.x);
      const dy = Math.abs(this.player.y - answer.container.y);
      const reachX = answer.hitWidth / 2 + 22;
      const reachY = answer.hitHeight / 2 + 16;
      if (dx <= reachX && dy <= reachY) {
        const proximity = (dx / reachX) ** 2 + (dy / reachY) ** 2;
        if (proximity < nearestScore) {
          nearestAnswer = answer;
          nearestScore = proximity;
        }
      }
    });
    if (nearestAnswer) this.collectAnswer(nearestAnswer);
  }

  collectAnswer(answer) {
    if (this.gameState !== 'playing') return;
    this.gameState = 'feedback';
    answer.collected = true;
    this.player.body.setVelocity(0, 0);
    const correct = answer.choice.correct;
    this.score += correct ? 10 : -5;
    if (this.scoreText) this.scoreText.setText(`${this.score} 分`);

    this.answerObjects.forEach((item) => {
      const color = item.choice.correct ? 0xc9eed6 : (item === answer ? 0xf6d3ca : 0xfffefa);
      item.background.clear();
      item.background.fillStyle(color, 1);
      item.background.fillRoundedRect(-item.container.width / 2, -item.container.height / 2, item.container.width, item.container.height, 20);
      item.background.lineStyle(2, item.choice.correct ? COLORS.green : (item === answer ? COLORS.coral : STAGES[this.stageIndex].accent), 0.65);
      item.background.strokeRoundedRect(-item.container.width / 2, -item.container.height / 2, item.container.width, item.container.height, 20);
    });

    const { width: w } = this.scale;
    const centerY = (this.arena.top + this.arena.bottom) / 2;
    const correctChoice = this.currentQuestion().choices.find((choice) => choice.correct);
    const panelW = Math.min(w - 40, 650);
    const panelH = this.arena.portrait ? 142 : 132;
    const panelColor = correct ? 0xf2fff5 : 0xfff6ed;
    this.roundedPanel(w / 2, centerY, panelW, panelH, panelColor, 23, correct ? 0xa4d9b5 : 0xf0c4a6, 2).setDepth(20);
    const headline = correct ? '答對了！　+10 分' : '再想一想　−5 分';
    this.label(headline, w / 2, centerY - 42, 23, correct ? 0x38805f : 0xb76550).setDepth(21);
    const lesson = correct ? answer.choice.note : `正確答案：${correctChoice.text}`;
    this.label(lesson, w / 2, centerY + 5, this.arena.portrait ? 14 : 15, COLORS.dark, { wrap: panelW - 44, lineSpacing: 5 }).setDepth(21);
    if (!correct) this.label(correctChoice.note, w / 2, centerY + 45, 11, COLORS.muted, { wrap: panelW - 40 }).setDepth(21);

    this.time.delayedCall(1750, () => this.advanceQuestion());
  }

  advanceQuestion() {
    if (this.questionIndex < STAGES[this.stageIndex].questions.length - 1) {
      this.questionIndex += 1;
      this.drawQuestion();
      return;
    }
    if (this.stageIndex < STAGES.length - 1) {
      this.stageIndex += 1;
      this.questionIndex = 0;
      this.drawQuestion();
      return;
    }
    this.drawResult();
  }

  drawResult() {
    this.clearScreen();
    this.gameState = 'result';
    const { width: w, height: h } = this.scale;
    const portrait = w < 650;
    const medal = this.score > 40;
    this.drawPageBackdrop();
    this.roundedPanel(w / 2, h / 2, Math.min(w - 30, 720), Math.min(h - 38, 610), 0xfffdf8, 30, medal ? 0xe8cb91 : 0xdce9df, 2);
    this.label('五關任務完成', w / 2, h * 0.23, 17, COLORS.muted);
    this.label(medal ? '太棒了，生活科技小達人！' : '探險完成，收穫滿滿！', w / 2, h * 0.31, portrait ? 24 : 31, COLORS.dark, { wrap: w - 68 });
    const badgeY = h * 0.51;
    this.add.circle(w / 2, badgeY, portrait ? 69 : 82, medal ? 0xffe2a1 : 0xe8eee7, 1).setStrokeStyle(5, medal ? 0xf2b653 : 0xcbd9ce, 0.8);
    this.add.circle(w / 2, badgeY, portrait ? 56 : 67, medal ? 0xfff2c7 : 0xf5f7f1, 1);
    this.label(medal ? '🎖️' : '🌱', w / 2, badgeY - 10, portrait ? 42 : 52, COLORS.gold);
    this.label(medal ? '榮譽勳章' : '再接再厲', w / 2, badgeY + (portrait ? 38 : 45), 13, medal ? 0x9b7137 : COLORS.muted);
    this.label(`${this.score} 分`, w / 2, h * 0.68, portrait ? 29 : 35, medal ? 0xa97836 : COLORS.dark);
    const message = medal
      ? '你用好習慣和聰明點子，照顧自己也照顧地球！'
      : `再多答對幾題，就能超過 40 分拿到榮譽勳章。`;
    this.label(message, w / 2, h * 0.75, portrait ? 13 : 15, COLORS.muted, { wrap: w - 66 });
    const btnY = h * 0.86;
    const btnW = Math.min(280, w - 84);
    this.roundedPanel(w / 2, btnY, btnW, 54, 0x347b69, 22);
    this.add.zone(w / 2, btnY, btnW, 54).setInteractive().on('pointerdown', () => this.startAgain());
    this.label('再玩一次　↻', w / 2, btnY, 17, COLORS.white);
    this.input.keyboard.once('keydown-ENTER', () => this.startAgain());
    this.input.keyboard.once('keydown-SPACE', () => this.startAgain());
  }

  startAgain() {
    if (this.gameState !== 'result') return;
    this.score = 0;
    this.stageIndex = 0;
    this.questionIndex = 0;
    this.drawQuestion();
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#f3f7f3',
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 1100,
    height: 720,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false }
  },
  input: { activePointers: 4 },
  scene: [AdventureScene]
};

new Phaser.Game(config);
