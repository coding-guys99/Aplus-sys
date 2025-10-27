/* =========================================================
   product.data.js — Uni-Leader 全系列產品資料
   ========================================================= */
window.PRODUCT_DATA = {
  /* ------------------ U-Meta V ------------------ */
  "u-meta-v": {
    id: "u-meta-v",
    name: "U-Meta V",
    brand: "Uni-Leader",
    brandKey: "unileader",
    brandLogo: "./assets/brands/UNI-LEADER.svg",
    hero: "./assets/products/UniLeader/unileader-u-meta-v.jpg",
    images: [
      "./assets/products/UniLeader/unileader-u-meta-stage.jpg",
      "./assets/products/UniLeader/unileader-u-meta-engine.jpg",
      "./assets/products/UniLeader/unileader-u-turbo-chromakey.jpg",
      "./assets/products/UniLeader/unileader-u-tianma-tracking.jpg"
    ],
    tagline: "虛擬製播系統核心，結合 Unreal Engine 即時渲染與追蹤技術。",
    badges: ["Virtual Studio", "Unreal Engine", "Tracking", "Compositing"],
    desc:
      "U-Meta V 整合 Unreal Engine 渲染、追蹤與鍵控模組，可支援多機位混合拍攝，適用於教育錄播、企業直播與廣播棚控。",
    specs: {
      "引擎核心": "Unreal Engine",
      "輸入": "SDI / NDI / HDMI 多訊號輸入",
      "輸出": "SDI、NDI、HDMI 監看",
      "解析度": "最高 4K 60p 即時輸出",
      "追蹤": "Free-D / Visca over IP 多協定",
      "鍵控": "Chroma Key / Luma Key / 即時 Matte 調整",
      "控制": "U-Panel 切換台 / 局域網 IP",
      "應用": "教育錄播、企業直播、電視棚控"
    },
    features: [
      "整合 Unreal Engine 即時渲染",
      "支援 Free-D 與光學追蹤",
      "多景場與動畫切換",
      "模組化架構 NDI/SDI 混合製播",
      "與 U-Caster、U-CG、U-Studio、U-TP 整合"
    ]
  },

  /* ------------------ U-Caster 4K ------------------ */
  "u-caster-4k": {
    id: "u-caster-4k",
    name: "U-Caster 4K",
    brand: "Uni-Leader",
    brandKey: "unileader",
    brandLogo: "./assets/brands/UNI-LEADER.svg",
    hero: "./assets/products/UniLeader/unileader-u-caster-switch.jpg",
    images: [
      "./assets/products/UniLeader/unileader-u-caster-switch.jpg",
      "./assets/products/UniLeader/unileader-u-caster-timeline.jpg",
      "./assets/products/UniLeader/unileader-u-caster-multiwindow.jpg",
       "./assets/products/UniLeader/unileader-u-caster-aitracker.jpg"
    ],
    tagline: "多機位導播、錄製與直播的一體化工作站。",
    badges: ["Switcher", "Recorder", "Streaming", "NDI/SDI"],
    desc:
      "U-Caster 4K 將導播、錄製、串流與多畫面合成整合於一台主機。支援多路 SDI/HDMI/NDI 輸入、時間線編排、字幕控制，適合學校、企業與現場活動快速上線。",
    specs: {
      "通道數": "最多 4 路視訊輸入（依型號）",
      "輸入": "SDI / HDMI / NDI / IP",
      "輸出": "SDI / HDMI / NDI / 網路串流",
      "解析度": "最高 4K UHD 60p",
      "錄製": "內建多軌錄製 (ProRes / H.264)",
      "串流": "RTMP / SRT / HLS",
      "字幕/圖文": "可搭配 U-CG 圖文字幕",
      "控制": "U-Panel 控制面板 / 軟體介面 / StreamDeck",
      "應用": "校園電視台、企業線上活動、典禮轉播、多機位直播"
    },
    features: [
      "一機完成導播、錄製與直播",
      "時間線步進式排程 (Step Timeline)",
      "多畫面合成與場景切換",
      "支援 NDI/SDI/HDMI 混合工作流程",
      "與 U-CG、U-Meta V 無縫整合"
    ]
  },

  /* ------------------ U-CG ------------------ */
  "u-cg": {
    id: "u-cg",
    name: "U-CG",
    brand: "Uni-Leader",
    brandKey: "unileader",
    brandLogo: "./assets/brands/UNI-LEADER.svg",
    hero: "./assets/products/UniLeader/unileader-u-cg.jpg",
    images: [
      "./assets/products/UniLeader/unileader-u-cg.jpg",
      "./assets/products/UniLeader/unileader-u-title-templates.jpg",
      "./assets/products/UniLeader/unileader-u-cg-live-graphics.jpg",
      "./assets/products/UniLeader/unileader-u-cg-IO.jpg"
    ],
    tagline: "即時圖文字幕與動畫製播系統，打造專業級畫面呈現。",
    badges: ["Graphics", "Live Titles", "Broadcast", "NDI"],
    desc:
      "U-CG 提供即時標題、動態字幕、下三分之一與多層特效疊加，可與 U-Caster、U-Meta V 同步控制，適用新聞、直播與教育節目。",
    specs: {
      "輸入": "SDI / NDI / HDMI / IP / Alpha Channel",
      "輸出": "SDI Fill/Key、NDI、PNG Sequence、MOV Alpha",
      "解析度": "最高 4K UHD 60p",
      "模板": "內建多款標題與滾動字幕模板",
      "控制": "U-Panel 或 U-CG 軟體介面",
      "資料整合": "Excel / TXT / RSS / Google Sheet",
      "特效": "進出場動畫、動態圖示、文字漸變",
      "應用": "新聞字幕、典禮活動、直播節目、教育錄播"
    },
    features: [
      "不中斷畫面即可即時更新字幕",
      "支援 NDI / SDI Alpha 雙路輸出",
      "模板可客製化，快速套用",
      "自動串接資料來源即時更新",
      "與 U-Caster、U-Meta V 工作流程整合"
    ]
  },

  /* ------------------ U-Hub ------------------ */
  "u-hub": {
    id: "u-hub",
    name: "U-Hub",
    brand: "Uni-Leader",
    brandKey: "unileader",
    brandLogo: "./assets/brands/UNI-LEADER.svg",
    hero: "./assets/products/UniLeader/unileader-u-hub.jpg",
    images: [
      "./assets/products/UniLeader/unileader-u-hub.jpg",
      "./assets/products/UniLeader/unileader-u-hub-io.jpg",
      "./assets/products/UniLeader/unileader-u-hub-workflow.jpg"
    ],
    tagline: "多訊號整合與橋接中心，連接導播、虛擬棚與錄播系統。",
    badges: ["Signal Bridge", "NDI/SDI", "Routing", "Sync"],
    desc:
      "U-Hub 是 Uni-Leader 的訊號整合中樞，用於在多系統環境下分配與管理 SDI、NDI、HDMI、網路串流等多格式訊號。作為虛擬棚、導播與錄播系統間的橋接節點，讓多平台製播流程更穩定靈活。",
    specs: {
      "輸入格式": "SDI / HDMI / NDI / IP Stream",
      "輸出格式": "SDI / NDI / HDMI / RTMP / SRT",
      "轉換模式": "NDI ↔ SDI / SDI ↔ IP / 多源切換",
      "同步控制": "Genlock / Ref / Frame Sync",
      "監看": "多畫面輸出 (Multi-Viewer)",
      "網路協定": "RTMP / RTSP / SRT / UDP / HTTP",
      "控制介面": "U-Panel / Web UI / LAN 遠端控制",
      "應用": "導播訊號分配、虛擬棚橋接、校園電視台、錄播中心"
    },
    features: [
      "集中管理多來源訊號輸入與輸出",
      "支援 SDI、NDI、HDMI 混合架構",
      "可作為虛擬棚與導播機間的橋接節點",
      "內建同步與 Frame Sync 模組，畫面穩定不掉幀",
      "支援網路串流輸出至多平台 (RTMP/SRT)",
      "搭配 U-Caster 與 U-Meta V 建立完整製播網絡"
    ]
  },

  /* ------------------ U-TP ------------------ */
  "u-tp": {
    id: "u-tp",
    name: "U-TP Teleprompter",
    brand: "Uni-Leader",
    brandKey: "unileader",
    brandLogo: "./assets/brands/UNI-LEADER.svg",
    hero: "./assets/products/UniLeader/unileader-u-tp.jpg",
    images: [
      "./assets/products/UniLeader/unileader-u-tp.jpg",
      "./assets/products/UniLeader/unileader-u-tp-ai.png",
      "./assets/products/UniLeader/unileader-u-tp-transparent.jpg"
    ],
    tagline: "棚內專用提詞器，鏡像清晰、操控直覺，支援多種機型安裝。",
    badges: ["Teleprompter", "Mirror Glass", "Remote Control", "Script"],
    desc:
      "U-TP 為棚內錄製與直播設計的提詞器方案，採用高透光分光鏡與高亮顯示面板，字體清晰不刺眼。內建鏡像、速度與段落控制，支援手控、腳控與網路遠端，適用教育錄播、企業發布與新聞節目。",
    specs: {
      "鏡片": "分光鏡 70/30 高透光防反射鍍膜",
      "顯示": "高亮度面板 (室內棚用)，鏡像模式一鍵切換",
      "文字控制": "字體大小 / 行距 / 速度可調 / 段落跳轉",
      "控制方式": "有線轉盤、無線遙控、腳踏開關、LAN 控制",
      "訊號相容": "HDMI (標配)，SDI/NDI 可外接轉換",
      "相機相容": "支援 ENG、Studio Cam、多規鏡頭遮光罩",
      "安裝": "快拆相機板、配重系統、可調水平/仰角",
      "應用": "講稿演說、教學錄播、記者會、新聞與企業直播"
    },
    features: [
      "高透光分光鏡，鏡頭不穿幫、講稿清晰易讀",
      "字體、速度與段落熱鍵控制，上手無門檻",
      "多種控制配件：手控旋鈕、腳踏開關、無線遙控",
      "可與 U-Caster 場景/字幕節奏配合，流程更順",
      "模組化安裝：快拆、配重簡單、維護容易"
    ]
  },
  /* ------------------ Studio Camera 4K Pro G2 ------------------ */
"bmd-studio-4k-pro-g2": {
  id: "bmd-studio-4k-pro-g2",
  name: "Studio Camera 4K Pro G2",
  brand: "Blackmagic Design",
  brandKey: "blackmagic",
  brandLogo: "./assets/brands/Blackmagicdesign.png",
  hero: "./assets/products/BlackmagicDesign/bmd-studio-camera-4k-pro-g2.jpg",
  images: [
    "./assets/products/BlackmagicDesign/bmd-studio-camera-4k-pro-g2.jpg",
    "./assets/products/BlackmagicDesign/bmd-studio-camera-4k-side.jpg",
    "./assets/products/BlackmagicDesign/bmd-studio-camera-4k-rear.jpg",
    "./assets/products/BlackmagicDesign/bmd-studio-camera-setup.jpg"
  ],
  tagline: "廣播級 4K 攝影機，專為導播棚與現場製播設計。",
  badges: ["4K Camera", "Live Production", "NDI / SDI", "Remote Control"],
  desc:
    "Studio Camera 4K Pro G2 結合高感光 4K 感光元件、12G-SDI 與 NDI/IP 輸出，可搭配 ATEM 導播機進行即時控制與色彩調校。具備大型顯示螢幕與多種連線介面，適用教育錄播、演出與專業轉播環境。",
  specs: {
    "感光元件": "4/3” CMOS 感光器（雙原生 ISO 400 / 3200）",
    "解析度": "UHD 4K 60p",
    "輸出介面": "12G-SDI / HDMI / NDI / IP Streaming",
    "音訊": "內建 XLR 輸入 × 2、耳機輸出",
    "控制": "SDI 控制 / ATEM 遠端 / USB-C 擴充",
    "顯示": "7 吋 高亮度觸控螢幕 (2000 nits)",
    "電源": "DC 12 V / PoE+ 供電",
    "應用": "導播棚、校園電視台、舞台演出、直播製播"
  },
  features: [
    "支援 12G-SDI 與 NDI/IP 輸出，靈活融入現代導播流程",
    "高感光 4K 感光器，低光環境下仍保持細膩影像",
    "內建 7 吋 高亮螢幕與 XLR 音訊輸入",
    "可經 ATEM 導播機遠端調整光圈、對焦與色彩",
    "支援 PoE+ 單線供電，佈線簡單、現場更整潔"
  ]
},
/* ------------------ ATEM Mini Extreme ISO ------------------ */
"bmd-atem-mini-extreme-iso": {
  id: "bmd-atem-mini-extreme-iso",
  name: "ATEM Mini Extreme ISO",
  brand: "Blackmagic Design",
  brandKey: "blackmagic",
  brandLogo: "./assets/brands/Blackmagicdesign.png",
  hero: "./assets/products/BlackmagicDesign/bmd-atem-mini-extreme-iso.jpg",
  images: [
    "./assets/products/BlackmagicDesign/bmd-atem-mini-extreme-iso.jpg",
    "./assets/products/BlackmagicDesign/bmd-atem-mini-extreme-rear.jpg",
    "./assets/products/BlackmagicDesign/bmd-atem-mini-extreme-top.jpg",
    "./assets/products/BlackmagicDesign/bmd-atem-mini-extreme-multiview.jpg"
  ],
  tagline: "多機位導播機，支援多畫面預覽與同步錄製。",
  badges: ["Switcher", "Recorder", "Streaming", "HDMI I/O"],
  desc:
    "ATEM Mini Extreme ISO 是一台專為多攝影機現場製播設計的導播機，內建 8 路 HDMI 輸入與 USB-C 串流輸出，可同時錄製每個輸入來源。具備多畫面預覽與自動切換功能，適合教育錄播、企業直播與活動導播。",
  specs: {
    "輸入": "8 路 HDMI 2.0 輸入（支援 1080p60）",
    "輸出": "2 路 HDMI、USB-C WebCam Out、以太網路串流",
    "錄製": "9 軌 ISO 錄製（含節目與各輸入源）",
    "音訊": "3.5mm 立體聲輸入 ×2、Fairlight 效果處理",
    "畫面控制": "多畫面預覽 / 動態轉場 / 下三分之一圖文",
    "媒體支援": "內建 Still Store、可匯入圖像與標題",
    "控制": "ATEM Software Control / 面板按鍵 / StreamDeck",
    "應用": "多機位直播、線上課程、企業轉播、活動導播"
  },
  features: [
    "支援 8 路 HDMI 來源與多畫面預覽",
    "內建 ISO 錄製功能，可同步錄下所有輸入畫面",
    "支援 YouTube / Facebook Live 直接串流",
    "可搭配 ATEM Software Control 遠端操作",
    "內建轉場、鍵控與音訊混音，輕鬆完成專業導播"
  ]
},
/* ------------------ HyperDeck Studio 4K Pro ------------------ */
"bmd-hyperdeck-studio-4k-pro": {
  id: "bmd-hyperdeck-studio-4k-pro",
  name: "HyperDeck Studio 4K Pro",
  brand: "Blackmagic Design",
  brandKey: "blackmagic",
  brandLogo: "./assets/brands/Blackmagicdesign.png",
  hero: "./assets/products/BlackmagicDesign/bmd-hyperdeck-studio-4k-pro.jpg",
  images: [
    "./assets/products/BlackmagicDesign/bmd-hyperdeck-studio-4k-pro.jpg",
    "./assets/products/BlackmagicDesign/bmd-hyperdeck-front.jpg",
    "./assets/products/BlackmagicDesign/bmd-hyperdeck-rear.jpg",
    "./assets/products/BlackmagicDesign/bmd-hyperdeck-setup.jpg"
  ],
  tagline: "專業級錄播與回放機，支援多格式錄製與 4K 輸出。",
  badges: ["Recorder", "Playout", "4K", "SDI / NDI"],
  desc:
    "HyperDeck Studio 4K Pro 是廣播級錄播與回放解決方案，支援 ProRes、DNx 以及 H.264/H.265 格式錄製，並具備雙 SD 卡與 SSD 插槽，確保不中斷記錄。適用導播棚、錄播中心與多機位同步錄製應用。",
  specs: {
    "錄製格式": "ProRes / DNx / H.264 / H.265 / QuickTime",
    "輸入": "12G-SDI ×1、Timecode / Reference In",
    "輸出": "12G-SDI ×2、HDMI、耳機監聽",
    "儲存": "雙 SD 卡槽 + 雙 SSD 槽（支援熱插拔）",
    "解析度": "最高 2160p60 Ultra HD",
    "音訊": "16 聲道嵌入音訊、XLR 時碼輸入",
    "控制": "前面板 / Ethernet / RS-422 / ATEM 遠端",
    "應用": "導播錄製、節目備份、現場播放、廣播中心"
  },
  features: [
    "支援 12G-SDI / HDMI 輸入輸出，最高可錄 4K 60p",
    "雙卡循環錄製不中斷，支援 SSD 熱插拔",
    "錄製格式多樣，涵蓋 ProRes、DNx、H.264/H.265",
    "內建時碼與 Genlock，適合多機同步錄製",
    "可遠端控制與自動化整合，搭配 ATEM 或 U-Caster 使用"
  ]
},
/* ------------------ URSA Broadcast G2 ------------------ */
"bmd-ursa-broadcast-g2": {
  id: "bmd-ursa-broadcast-g2",
  name: "URSA Broadcast G2",
  brand: "Blackmagic Design",
  brandKey: "blackmagic",
  brandLogo: "./assets/brands/Blackmagicdesign.png",
  hero: "./assets/products/BlackmagicDesign/bmd-ursa-broadcast-g2.jpg",
  images: [
    "./assets/products/BlackmagicDesign/bmd-ursa-broadcast-g2.jpg",
    "./assets/products/BlackmagicDesign/bmd-ursa-broadcast-side.jpg",
    "./assets/products/BlackmagicDesign/bmd-ursa-broadcast-back.jpg",
    "./assets/products/BlackmagicDesign/bmd-ursa-broadcast-setup.jpg"
  ],
  tagline: "廣播級 6K 攝影機，適用導播棚與現場製播。",
  badges: ["Camera", "6K", "Broadcast", "SDI / NDI"],
  desc:
    "URSA Broadcast G2 是一款結合電影級影像品質與廣播級操作介面的 6K 攝影機。支援 B4 與 EF 鏡頭卡口，可錄製 Blackmagic RAW、ProRes 等格式，具備 12G-SDI I/O 與 Genlock，同時能融入多機位導播與錄播環境。",
  specs: {
    "感光元件": "6K Super 35 CMOS 感光器（13 段動態範圍）",
    "錄製格式": "Blackmagic RAW / ProRes 422 / ProRes HQ",
    "解析度": "6144 × 3456 (6K)、UHD 4K、1080p",
    "輸入輸出": "12G-SDI ×2、XLR ×2、Timecode / Genlock",
    "鏡頭卡口": "B4（可更換 EF / PL / F Mount）",
    "顯示": "4 吋 可翻轉觸控螢幕 + 2 吋 狀態螢幕",
    "控制": "SDI 遠端控制 / ATEM 導播控制 / USB-C 外錄",
    "儲存": "CFast 2.0 ×2、SD UHS-II ×2、USB-C 外接硬碟",
    "應用": "導播機位、戶外 OB 車、校園錄播、廣播製播"
  },
  features: [
    "6K 感光器提供高解析與寬容度影像",
    "可錄製 Blackmagic RAW 與 ProRes 格式",
    "雙 SD / CFast 卡與 USB-C 外接錄製",
    "支援 ATEM 遠端控制與色彩調整",
    "兼容 B4、EF、PL 卡口，適合不同製播場景"
  ]
},
/* ------------------ DeckLink 8K Pro ------------------ */
"bmd-decklink-8k-pro": {
  id: "bmd-decklink-8k-pro",
  name: "DeckLink 8K Pro",
  brand: "Blackmagic Design",
  brandKey: "blackmagic",
  brandLogo: "./assets/brands/Blackmagicdesign.png",
  hero: "./assets/products/BlackmagicDesign/bmd-decklink-8k-pro.jpg",
  images: [
    "./assets/products/BlackmagicDesign/bmd-decklink-8k-pro.jpg",
    "./assets/products/BlackmagicDesign/bmd-decklink-8k-pro-ports.jpg",
    "./assets/products/BlackmagicDesign/bmd-decklink-8k-pro-install.jpg",
    "./assets/products/BlackmagicDesign/bmd-decklink-8k-pro-system.jpg"
  ],
  tagline: "四通道 SDI 擷取／輸出卡，支援 8K HDR 與多格式切換。",
  badges: ["Capture", "Playback", "8K", "SDI"],
  desc:
    "DeckLink 8K Pro 是一款專業擷取與播放卡，配備四組 12G-SDI 接口，可同時錄製或輸出多路 UHD / HD / 8K 視訊訊號。支援 HDR、Rec.2020 與 12-bit 色深，是虛擬棚、後期製作與錄播系統的核心硬體之一。",
  specs: {
    "輸入/輸出": "4× 12G-SDI（雙向，可個別設定）",
    "解析度": "最高 8K DCI 60p / 4K / HD 多格式",
    "色深": "高達 12-bit YUV 4:2:2 / RGB 4:4:4",
    "色彩空間": "Rec.601 / Rec.709 / Rec.2020 / HDR",
    "音訊": "16 聲道嵌入 SDI 音訊",
    "支援軟體": "DaVinci Resolve / vMix / OBS / Unreal Engine",
    "控制介面": "PCIe 8x、Desktop Video SDK",
    "應用": "虛擬製播、導播錄播、後期剪輯、信號轉換"
  },
  features: [
    "四路 12G-SDI 雙向介面，可自由設定擷取或輸出",
    "支援 8K、HDR、Rec.2020 廣色域與 12-bit 色深",
    "兼容 vMix、OBS、Unreal、Resolve 等主流軟體",
    "低延遲擷取，適合虛擬棚與實時製播應用",
    "PCIe 介面設計，易於整合於工作站或伺服器"
  ]
},
   /* ------------------ OBSBOT Tiny 2 ------------------ */
"obsbot-tiny-2": {
  id: "obsbot-tiny-2",
  name: "OBSBOT Tiny 2",
  brand: "OBSBOT",
  brandKey: "obsbot",
  brandLogo: "./assets/brands/OBSBOT.svg",
  hero: "./assets/products/obsbot/obsbot-tiny-2.jpg",
  images: [
    "./assets/products/obsbot/obsbot-tiny-2.jpg",
    "./assets/products/obsbot/obsbot-tiny-2-side.jpg",
    "./assets/products/obsbot/obsbot-tiny-2-mount.jpg",
    "./assets/products/obsbot/obsbot-tiny-2-setup.jpg"
  ],
  tagline: "AI 智能追蹤攝影機，專為教學、直播與企業會議設計。",
  badges: ["AI Tracking", "PTZ", "4K", "USB-C"],
  desc:
    "OBSBOT Tiny 2 搭載新一代 AI 智能追蹤晶片，具備人臉辨識、手勢控制與自動構圖功能。採用 1/1.5 吋感光元件與 4K 錄製，能在各種燈光環境下呈現自然膚色與清晰細節，適合教學、線上課程與內容創作。",
  specs: {
    "感光元件": "1/1.5 吋 CMOS 感光器",
    "解析度": "4K 60fps / 1080p 60fps",
    "鏡頭焦距": "等效 20mm（廣角）",
    "畫面控制": "AI Auto Framing / Gesture Control",
    "連接介面": "USB-C / HDMI（透過 Dock）",
    "音訊": "內建雙指向性麥克風",
    "安裝": "磁吸底座 / 三腳架 / 顯示器夾具",
    "應用": "線上教學、會議直播、錄播系統、內容創作"
  },
  features: [
    "AI 自動追蹤與智慧構圖，人物移動仍保持居中",
    "手勢控制可切換鏡頭、啟動追蹤、縮放畫面",
    "支援 HDR、低光增益與美顏演算法，畫面自然",
    "支援 OBS / vMix / Zoom / Teams 等主流軟體",
    "多角度安裝方式，靈活融入錄播系統"
  ]
},
/* ------------------ OBSBOT Tail 2 ------------------ */
"obsbot-tail-2": {
  id: "obsbot-tail-2",
  name: "OBSBOT Tail 2",
  brand: "OBSBOT",
  brandKey: "obsbot",
  brandLogo: "./assets/brands/OBSBOT.svg",
  hero: "./assets/products/obsbot/obsbot-tail-2.jpg",
  images: [
    "./assets/products/obsbot/obsbot-tail-2.jpg",
    "./assets/products/obsbot/obsbot-tail-2-back.jpg",
    "./assets/products/obsbot/obsbot-tail-2-side.jpg",
    "./assets/products/obsbot/obsbot-tail-2-app.jpg"
  ],
  tagline: "AI 自動導播攝影機，4K HDR、SSD 錄製、無線直播一機完成。",
  badges: ["AI Tracking", "4K HDR", "Wireless", "SSD Recording"],
  desc:
    "OBSBOT Tail 2 是一款整合 AI 追蹤與即時導播功能的 4K 攝影機。內建 SSD 錄影與無線控制，可自動追蹤主體、切換鏡頭構圖，適用於表演錄影、活動直播與教學錄播等多場景應用。",
  specs: {
    "感光元件": "1/1.8 吋 CMOS 感光器",
    "解析度": "4K 60fps / 1080p 120fps",
    "鏡頭": "等效 25.5mm，f/1.8 大光圈",
    "追蹤系統": "AI Auto Director + DeepTrack 3.0",
    "儲存": "內建 SSD（最高 1TB） / microSD 擴充",
    "錄影格式": "MP4 (H.265 / H.264)",
    "音訊": "內建全向麥克風 + 外接 3.5mm 輸入",
    "連接介面": "USB-C / Wi-Fi / Bluetooth / HDMI（選配）",
    "控制": "OBSBOT App / 手勢控制 / 導播模式",
    "應用": "舞台表演、運動紀錄、教育錄播、活動直播"
  },
  features: [
    "AI Auto Director 智能導播模式，自動構圖與切景",
    "支援 4K HDR 錄製與 H.265 高效壓縮",
    "內建 SSD 可長時間錄製，穩定不掉幀",
    "DeepTrack 3.0 主體辨識演算法，準確追蹤人物",
    "無線連接手機 App，可遠端控制、即時導播與串流"
  ]
},
/* ------------------ SYNCO Xtalk X ------------------ */
"synco-xtalk-x": {
  id: "synco-xtalk-x",
  name: "SYNCO Xtalk X",
  brand: "SYNCO",
  brandKey: "synco",
  brandLogo: "./assets/brands/SYNCO.svg",
  hero: "./assets/products/SYNCO/synco-xtalk-x.jpg",
  images: [
    "./assets/products/SYNCO/synco-xtalk-x.jpg",
    "./assets/products/SYNCO/synco-xtalk-x-case.jpg",
    "./assets/products/SYNCO/synco-xtalk-x-setup.jpg",
    "./assets/products/SYNCO/synco-xtalk-x-meeting.jpg"
  ],
  tagline: "智能全雙工無線會議系統，4 路同時對話，清晰自然。",
  badges: ["Wireless Audio", "Full Duplex", "Conference", "AI Noise Cancel"],
  desc:
    "SYNCO Xtalk X 是專為多方對話與會議錄製設計的無線音訊系統。支援全雙工通話，最多可 4 人同時自由對話，無需搶話等待。搭載 AI 降噪與自動混音技術，適用於遠距會議、線上教學、企業錄播與直播節目。",
  specs: {
    "通訊技術": "2.4GHz 數位無線傳輸（全雙工）",
    "通道數": "最多 4 組設備同時對話",
    "收音範圍": "最遠 150 公尺（空曠環境）",
    "收音模式": "全向高靈敏麥克風 / 外接 3.5mm Lavalier",
    "降噪": "AI 雙重降噪演算法，自動環境優化",
    "電池續航": "約 8 小時（含充電盒可延長至 20 小時）",
    "介面": "USB-C / 3.5mm TRS / Type-C 數位輸出",
    "相容": "相機 / 手機 / 電腦 / 混音器 / 導播機",
    "應用": "會議錄播、直播節目、遠距教學、現場導播"
  },
  features: [
    "全雙工四人對話，無需搶話，溝通自然流暢",
    "AI 智能降噪，有效抑制環境與風聲雜音",
    "收音距離最遠達 150 公尺，穩定低延遲",
    "可接相機、筆電、導播機或手機錄音",
    "支援 USB-C 數位音訊輸出與即時監聽",
    "充電盒收納設計，一次完成收納與充電"
  ]
},
/* ------------------ SYNCO Xtalk Pro ------------------ */
"synco-xtalk-pro": {
  id: "synco-xtalk-pro",
  name: "SYNCO Xtalk Pro",
  brand: "SYNCO",
  brandKey: "synco",
  brandLogo: "./assets/brands/SYNCO.svg",
  hero: "./assets/products/SYNCO/synco-xtalk-pro.jpg",
  images: [
    "./assets/products/SYNCO/synco-xtalk-pro.jpg",
    "./assets/products/SYNCO/synco-xtalk-pro-case.jpg",
    "./assets/products/SYNCO/synco-xtalk-pro-transmitter.jpg",
    "./assets/products/SYNCO/synco-xtalk-pro-conference.jpg"
  ],
  tagline: "專業級全雙工無線會議與導播通話系統，穩定清晰、即時互通。",
  badges: ["Wireless Intercom", "Full Duplex", "Broadcast", "AI Noise Cancel"],
  desc:
    "SYNCO Xtalk Pro 是面向導播室、錄播中心與大型會議的專業全雙工無線通訊系統。支援多達 8 人同時對話與錄音，具備 AI 智能降噪與長距離穩定連線，確保現場協作零延遲。適用於轉播、舞台活動、教育錄播與企業會議。",
  specs: {
    "通訊技術": "2.4GHz 數位無線傳輸，全雙工模式",
    "通道數": "最高支援 8 組同時對話 / 32 組配對",
    "收音範圍": "最遠 350 公尺（開放環境）",
    "收音模式": "全向麥克風 + 外接 Lavalier",
    "降噪": "AI 智能雙向降噪 + 迴音抑制演算法",
    "延遲": "<20ms 低延遲傳輸",
    "電池續航": "10 小時（含充電盒可延長至 25 小時）",
    "介面": "USB-C / 3.5mm TRRS / XLR（透過轉接模組）",
    "相容": "導播機 / 攝影機 / 筆電 / 混音系統",
    "應用": "導播通話、錄播中心、舞台協作、企業多方會議"
  },
  features: [
    "全雙工通訊架構，支援 8 人同時即時對話",
    "AI 智能降噪 + 低延遲傳輸，語音清晰穩定",
    "最遠 350 公尺無線距離，適合大型活動現場",
    "可外接 Lavalier 或頭戴式麥克風，靈活應用",
    "多通道可獨立錄音，方便後期整合與備份",
    "金屬機身設計，抗干擾、耐用度高"
  ]
},
/* ------------------ SYNCO Xtalk XMax ------------------ */
"synco-xtalk-xmax": {
  id: "synco-xtalk-xmax",
  name: "SYNCO Xtalk XMax",
  brand: "SYNCO",
  brandKey: "synco",
  brandLogo: "./assets/brands/SYNCO.svg",
  hero: "./assets/products/SYNCO/synco-xtalk-xmax.jpg",
  images: [
    "./assets/products/SYNCO/synco-xtalk-xmax.jpg",
    "./assets/products/SYNCO/synco-xtalk-xmax-base.jpg",
    "./assets/products/SYNCO/synco-xtalk-xmax-headset.jpg",
    "./assets/products/SYNCO/synco-xtalk-xmax-setup.jpg"
  ],
  tagline: "旗艦級無線全雙工通訊系統，多群組協作、基地台管理、專業導播首選。",
  badges: ["Full Duplex", "Base Station", "Multi-Group", "AI Noise Cancel"],
  desc:
    "SYNCO Xtalk XMax 是 Xtalk 系列的旗艦版，支援多達 16 人同時全雙工對話，並搭載專用 Base Station 基地台，可集中管理、群組分配與錄音備份。適用於大型轉播現場、舞台活動、錄播中心與企業協作指揮系統。",
  specs: {
    "通訊架構": "2.4GHz 數位無線傳輸 + Base Station 管理",
    "通道數": "16 人同時對話 / 64 組設備配對",
    "收音範圍": "最遠 500 公尺（開放環境）",
    "降噪系統": "AI 雙向降噪 + 迴音抑制 + 智慧動態增益",
    "群組管理": "Base Station 可分組、靜音、錄音同步控制",
    "延遲": "<15ms 低延遲全雙工傳輸",
    "電池續航": "耳機約 10 小時、基地台供電持續運作",
    "介面": "USB-C / XLR / RJ45 / LAN 遠端控制",
    "錄音": "Base Station 內建錄音模組（WAV 格式）",
    "應用": "導播指揮、舞台協作、錄播中心、企業通訊"
  },
  features: [
    "旗艦級全雙工架構，支援 16 人即時對話",
    "Base Station 集中管理群組、錄音與靜音功能",
    "AI 智慧降噪與動態音量平衡，長時間使用更清晰",
    "最遠 500 公尺傳輸距離，穿牆抗干擾能力更強",
    "可整合 LAN 網路與導播系統，擴充性高",
    "金屬工業級機身設計，適合長時間現場使用"
  ]
},
/* ------------------ SYNCO Xtalk Link ------------------ */
"synco-xtalk-link": {
  id: "synco-xtalk-link",
  name: "SYNCO Xtalk Link",
  brand: "SYNCO",
  brandKey: "synco",
  brandLogo: "./assets/brands/SYNCO.svg",
  hero: "./assets/products/SYNCO/synco-xtalk-link.jpg",
  images: [
    "./assets/products/SYNCO/synco-xtalk-link.jpg",
    "./assets/products/SYNCO/synco-xtalk-link-range.jpg",
    "./assets/products/SYNCO/synco-xtalk-link-app.jpg",
    "./assets/products/SYNCO/synco-xtalk-family.jpg"
  ],
  tagline: "Xtalk 全雙工通訊的橋接核心：把耳麥連到手機 / 電腦與混合製播流程。",
  badges: ["Bridge Hub", "USB-C", "App Control", "Multi-Group"],
  desc:
    "Xtalk Link 是 Xtalk 系列的橋接中樞，將多個 Xtalk 耳麥/腰包集中到手機或電腦，快速建立混合通訊。適合遠端講者、行動導播與會議/直播協作，提供分組、靜音與優先通話等管控功能，讓現場與遠端團隊能無縫對話。",
  specs: {
    "用途": "Xtalk 系列擴充橋接器（現場 ↔ 手機/電腦）",
    "連線": "2.4GHz 專屬無線（對 Xtalk 系列）／USB-C（對主機）",
    "相容": "Xtalk X / Pro / XMax 耳機與腰包（同系列相容）",
    "群組": "App/桌面軟體分組管理、靜音、優先通話",
    "音訊介面": "UAC（USB Audio Class），可作會議/直播通話裝置",
    "供電": "USB-C 供電；支援行動電源",
    "控制": "行動 App／桌面軟體／基本實體按鍵",
    "應用": "遠端講者串接、混合會議、行動導播、校園/企業活動"
  },
  features: [
    "把 Xtalk 全雙工對講直接帶入手機或電腦的通話系統",
    "可分組、靜音、指揮優先通話，現場調度更直覺",
    "USB-C 即插即用，支援常見會議/串流平台",
    "行動電源即可供電，戶外/臨時架設更輕便",
    "與 Xtalk X／Pro／XMax 搭配，從小組到大型活動皆可擴充"
  ]
},
/* ------------------ SYNCO G4 ------------------ */
"synco-g4": {
  id: "synco-g4",
  name: "SYNCO G4 Wireless Microphone",
  brand: "SYNCO",
  brandKey: "synco",
  brandLogo: "./assets/brands/SYNCO.svg",
  hero: "./assets/products/SYNCO/synco-g4.jpg",
  images: [
    "./assets/products/SYNCO/synco-g4.jpg",
    "./assets/products/SYNCO/synco-g4-kit.jpg",
    "./assets/products/SYNCO/synco-g4-receiver.jpg",
    "./assets/products/SYNCO/synco-g4-transmitter.jpg"
  ],
  tagline: "雙通道無線麥克風系統，4.0 無線架構、OLED 螢幕顯示、即錄即傳。",
  badges: ["Wireless Mic", "2.4GHz", "Dual Channel", "OLED Display"],
  desc:
    "SYNCO G4 是專為創作者與行動錄播設計的雙通道無線麥克風系統。採用第四代 SYNCO 2.4GHz 無線架構，具備低延遲、高穩定性與出色的收音品質。內建錄音與 OLED 顯示螢幕，輕鬆掌控音量與狀態，適合教學、Vlog、企業錄播與行動導播場景。",
  specs: {
    "傳輸技術": "2.4GHz 數位無線傳輸（第四代架構）",
    "通道": "雙通道（2TX + 1RX）",
    "錄音": "TX 內建錄音（最高 8GB / 約 22 小時）",
    "距離": "最遠 250 公尺（開放環境）",
    "延遲": "<20ms 低延遲傳輸",
    "輸入": "內建麥克風 / 外接 Lavalier",
    "輸出": "3.5mm TRS / USB-C / Type-C 數位音訊",
    "顯示": "OLED 顯示螢幕，即時監控電量與音量",
    "電池續航": "8 小時（含充電盒可延長至 20 小時）",
    "應用": "Vlog 拍攝、教育錄播、企業簡報、行動導播"
  },
  features: [
    "第四代 2.4GHz 穩定傳輸架構，抗干擾性能更強",
    "支援 TX 端內錄音，防止訊號中斷造成遺失",
    "OLED 顯示螢幕，音量與電量清楚可視",
    "雙通道設計，可同時錄製兩位講者",
    "USB-C 數位音訊輸出，免轉接可直連筆電或手機",
    "小型輕巧設計，支援磁吸安裝與收納充電盒"
  ]
},
/* ------------------ SYNCO P2S ------------------ */
"synco-p2s": {
  id: "synco-p2s",
  name: "SYNCO P2S Wireless Microphone",
  brand: "SYNCO",
  brandKey: "synco",
  brandLogo: "./assets/brands/SYNCO.svg",
  hero: "./assets/products/SYNCO/synco-p2s.jpg",
  images: [
    "./assets/products/SYNCO/synco-p2s.jpg",
    "./assets/products/SYNCO/synco-p2s-case.jpg",
    "./assets/products/SYNCO/synco-p2s-mobile.jpg",
    "./assets/products/SYNCO/synco-p2s-clip.jpg"
  ],
  tagline: "行動即錄無線麥克風，隨插即用、清晰收音、口袋大小。",
  badges: ["Mobile Mic", "Plug & Play", "Noise Reduction", "Charging Case"],
  desc:
    "SYNCO P2S 是專為手機拍攝與直播設計的無線麥克風系統。具備雙通道收音、即插即用的 Type-C／Lightning 接頭，以及主動降噪與收納充電盒設計。輕巧易攜、免設定，適合創作者、Vlog、線上課程與行動直播使用。",
  specs: {
    "傳輸技術": "2.4GHz 數位無線",
    "通道": "雙通道（2TX + 1RX）",
    "相容介面": "Type-C 或 Lightning（依版本）",
    "距離": "最遠 150 公尺（開放環境）",
    "收音": "內建全指向麥克風",
    "降噪": "AI 智慧降噪，支援即時監聽",
    "電池續航": "TX 約 5 小時，附充電盒可續航至 15 小時",
    "充電": "Type-C 快充，約 1.5 小時充滿",
    "應用": "行動拍攝、線上教學、企業直播、訪談錄音"
  },
  features: [
    "即插即用，無需配對，插上即可錄音",
    "AI 智慧降噪技術，嘈雜環境下語音依然清晰",
    "雙通道錄音，可同時錄製兩人對話",
    "輕巧便攜，配合收納充電盒即錄即收",
    "支援 Type-C／Lightning 多平台相容（Android／iPhone）",
    "適合 Vlog、直播、課程與企業影片錄製"
  ]
},
/* ------------------ SYNCO MMic-U3 ------------------ */
"synco-mmic-u3": {
  id: "synco-mmic-u3",
  name: "SYNCO MMic-U3 Mobile Microphone",
  brand: "SYNCO",
  brandKey: "synco",
  brandLogo: "./assets/brands/SYNCO.svg",
  hero: "./assets/products/SYNCO/synco-mmic-u3.jpg",
  images: [
    "./assets/products/SYNCO/synco-mmic-u3.jpg",
    "./assets/products/SYNCO/synco-mmic-u3-with-phone.jpg",
    "./assets/products/SYNCO/synco-mmic-u3-accessories.jpg"
  ],
  tagline: "輕巧心型指向麥克風，行動拍攝與錄音的高音質解決方案。",
  badges: ["Cardioid Mic", "Plug & Play", "Noise Reduction", "Mobile Ready"],
  desc:
    "SYNCO MMic-U3 是一款專為手機與相機錄音設計的心型指向麥克風。採用鋁合金機身與高靈敏度電容音頭，可有效降低環境噪音並聚焦語音。支援 Type-C／3.5mm TRRS 連接，插上即可錄音，適合 Vlog、線上教學、訪談與行動拍攝。",
  specs: {
    "收音指向": "心型指向（Cardioid）",
    "靈敏度": "-35dB ±3dB (1V/Pa @1kHz)",
    "頻率響應": "50Hz–20kHz",
    "訊噪比": ">75dB",
    "介面": "Type-C／3.5mm TRRS（依版本）",
    "尺寸": "Φ22 × 72mm",
    "重量": "僅 39g",
    "材質": "鋁合金機身，防震支架與防風罩",
    "應用": "手機拍攝、線上教學、Vlog、訪談錄音"
  },
  features: [
    "心型指向設計，有效抑制側面與後方雜音",
    "鋁合金輕量機身，攜帶方便、耐用抗干擾",
    "支援 Type-C／3.5mm 介面，手機與相機皆可使用",
    "免電池設計，插上即可錄音",
    "附防震支架與防風罩，室內外錄音皆穩定"
  ]
},
/* ------------------ Acemic G5 IEM ------------------ */
"acemic-g5-iem": {
  id: "acemic-g5-iem",
  name: "Acemic G5 In-Ear Monitoring System",
  brand: "Acemic",
  brandKey: "acemic",
  brandLogo: "./assets/brands/ACEMIC.svg",
  hero: "./assets/products/acemic/acemic-g5-iem.jpg",
  images: [
    "./assets/products/acemic/acemic-g5-iem.jpg",
    "./assets/products/acemic/acemic-g5-txrx.jpg",
    "./assets/products/acemic/acemic-g5-stage.jpg"
  ],
  tagline: "專業級 UHF 入耳監聽系統，穩定清晰、低延遲、現場必備。",
  badges: ["IEM", "UHF", "Stage Monitoring", "Low Latency"],
  desc:
    "Acemic G5 是為現場製播與舞台演出設計的專業入耳監聽系統。採用 UHF 無線傳輸技術，具備高抗干擾能力與低延遲，確保訊號穩定與聲音清晰。系統可同時設定多組頻道，適合現場導播、表演者或教育錄播使用。",
  specs: {
    "頻率範圍": "UHF 600–700 MHz（依地區版本）",
    "頻道數": "最多 80 組可選頻點",
    "傳輸距離": "最遠 100 米（視環境）",
    "延遲": "< 2 毫秒",
    "音訊響應": "50 Hz – 15 kHz",
    "輸入介面": "XLR / 6.3 mm 複合音源輸入",
    "輸出介面": "耳機 3.5 mm TRS（接收端）",
    "電源": "TX：DC 12 V；RX：AA 電池 × 2",
    "機殼": "金屬機身，耐用抗干擾",
    "應用": "舞台監聽、錄播監聽、教會、企業活動"
  },
  features: [
    "UHF 無線傳輸技術，穩定抗干擾",
    "支援多組頻道同時運作，方便多人使用",
    "高動態範圍與低延遲設計，聲音同步自然",
    "金屬機身與專業耳機輸出，耐用穩定",
    "適合舞台演出、導播監聽、教學錄播等場景"
  ]
},
/* ------------------ Acemic S Series Wireless Microphone ------------------ */
"acemic-s-series": {
  id: "acemic-s-series",
  name: "Acemic S Series Wireless Microphone System",
  brand: "Acemic",
  brandKey: "acemic",
  brandLogo: "./assets/brands/ACEMIC.svg",
  hero: "./assets/products/acemic/acemic-s-series.jpg",
  images: [
    "./assets/products/acemic/acemic-s-series.jpg",
    "./assets/products/acemic/acemic-s2-handheld.jpg",
    "./assets/products/acemic/acemic-s8-rack.jpg"
  ],
  tagline: "多通道 UHF 無線麥克風系統，穩定清晰，適用各類現場環境。",
  badges: ["Wireless Mic", "UHF", "Multi-Channel", "Professional"],
  desc:
    "Acemic S 系列是一套專為專業與教育應用設計的 UHF 無線麥克風系統。系列涵蓋單通道至八通道版本（S2 / S4 / S6 / S8），支援手握、頭戴與領夾式發射器。以穩定、清晰與高性價比著稱，廣泛應用於教學、企業會議、活動轉播與舞台演出。",
  specs: {
    "頻率範圍": "UHF 520–580 MHz（依地區版本）",
    "頻道數": "2 / 4 / 6 / 8 通道可選",
    "傳輸距離": "最遠 100 米（無遮蔽環境）",
    "靈敏度": "-90 dBm",
    "音訊響應": "40 Hz – 18 kHz",
    "輸出介面": "XLR / 6.3 mm 混合輸出",
    "電源": "接收器：DC 12V；發射器：AA 電池 × 2",
    "機身": "金屬機殼，內建 LCD 顯示與紅外對頻",
    "應用": "學校、企業會議、教會、舞台演出"
  },
  features: [
    "UHF 無線傳輸技術，穩定抗干擾",
    "可同時使用多組頻道，支援紅外自動對頻",
    "高動態範圍與低延遲輸出，音質清晰自然",
    "可搭配手握、頭戴或領夾式發射器",
    "適用教育講堂、企業活動與現場演出"
  ]
},
/* ------------------ Acemic Wireless Microphone System ------------------ */
"acemic-wireless": {
  id: "acemic-wireless",
  name: "Acemic Wireless Microphone System",
  brand: "Acemic",
  brandKey: "acemic",
  brandLogo: "./assets/brands/ACEMIC.svg",
  hero: "./assets/products/acemic/acemic-wireless-system.jpg",
  images: [
    "./assets/products/acemic/acemic-wireless-system.jpg",
    "./assets/products/acemic/acemic-handheld-mic.jpg",
    "./assets/products/acemic/acemic-bodypack.jpg",
    "./assets/products/acemic/acemic-dual-receiver.jpg"
  ],
  tagline: "UHF 無線麥克風系統，穩定傳輸、清晰收音，專為教育與專業場域設計。",
  badges: ["Wireless Mic", "UHF", "Professional", "Dual Channel"],
  desc:
    "Acemic 無線麥克風系統廣泛應用於教育錄播、企業活動與舞台演出。具備高穩定度 UHF 傳輸、低延遲輸出與清晰音質，支援手握、領夾與頭戴多型發射器，滿足不同場景需求。提供單、雙、四通道多款配置，操作簡單且抗干擾能力強。",
  specs: {
    "頻率範圍": "UHF 520–580 MHz（依地區版本）",
    "通道數": "單／雙／四通道可選",
    "頻率響應": "40 Hz – 18 kHz",
    "動態範圍": "> 100 dB",
    "傳輸距離": "最遠 100 米（無遮蔽環境）",
    "輸入輸出": "XLR / 6.3 mm 混合輸出",
    "對頻方式": "紅外自動對頻（IR Sync）",
    "電源": "接收器 DC 12V / 發射器 AA × 2",
    "應用": "教育錄播、企業簡報、舞台表演、會議室"
  },
  features: [
    "UHF 無線傳輸技術，穩定抗干擾",
    "高靈敏度收音，動態範圍寬廣",
    "紅外自動對頻設計，操作簡單快速",
    "可搭配手握、領夾或頭戴式發射器",
    "多通道可同時運作，適合大型活動使用"
  ]
},
/* ------------------ Yamaha MG Series Mixer ------------------ */
"yamaha-mg-series": {
  id: "yamaha-mg-series",
  name: "Yamaha MG Series Mixer",
  brand: "Yamaha",
  brandKey: "yamaha",
  brandLogo: "./assets/brands/YAMAHA.svg",
  hero: "./assets/products/yamaha/yamaha-mg-series.jpg",
  images: [
    "./assets/products/yamaha/yamaha-mg-series.jpg",
    "./assets/products/yamaha/yamaha-mg10xu.jpg",
    "./assets/products/yamaha/yamaha-mg16xu.jpg"
  ],
  tagline: "專業類比混音器系列，結合高音質前級與可靠設計。",
  badges: ["Analog Mixer", "D-PRE", "SPX Effects", "USB Interface"],
  desc:
    "Yamaha MG 系列混音器以其穩定性與優異音質著稱，適用於現場演出、錄播與企業活動。採用 Yamaha 獨家的 D-PRE 類比前級與 SPX 效果器，並提供 USB 錄音介面版本（XU 系列），讓使用者能輕鬆整合至數位製播流程。",
  specs: {
    "通道數": "6 / 10 / 12 / 16 / 20（依型號）",
    "麥克風前級": "Yamaha D-PRE Class-A Mic Preamps",
    "EQ": "3-band EQ / High-pass Filter",
    "效果器": "SPX 數位效果（X / XU 型號）",
    "錄音介面": "USB Audio 2-In / 2-Out（XU 型號）",
    "電源": "AC Adaptor (PA-10 / PA-20)",
    "尺寸重量": "依型號而異（MG10XU 約 2.1 kg）",
    "應用": "教會、錄播室、企業活動、音樂表演"
  },
  features: [
    "Yamaha D-PRE 前級，音質清晰飽滿",
    "SPX 效果器內建（含混響、延遲等 24 種效果）",
    "USB 錄音介面（XU 型號）可直接錄音或串流",
    "堅固金屬外殼，適合長期巡演與固定架設",
    "靈活的輸入輸出配置，支援 AUX、GROUP、STEREO BUS"
  ]
},
/* ------------------ MIPRO ACT Series Wireless Microphone ------------------ */
"mipro-act-series": {
  id: "mipro-act-series",
  name: "MIPRO ACT Series Wireless Microphone System",
  brand: "MIPRO",
  brandKey: "mipro",
  brandLogo: "./assets/brands/MIPRO.svg",
  hero: "./assets/products/mipro/mipro-act-series.jpg",
  images: [
    "./assets/products/mipro/mipro-act-series.jpg",
    "./assets/products/mipro/mipro-act-32h.jpg",
    "./assets/products/mipro/mipro-act-312.jpg",
    "./assets/products/mipro/mipro-act-5802.jpg"
  ],
  tagline: "自動對頻無線麥克風系統，專業穩定、收音清晰。",
  badges: ["Wireless Mic", "UHF", "Auto Sync", "Professional"],
  desc:
    "MIPRO ACT 系列以其創新的 Automatic Channel Targeting（ACT）自動對頻技術聞名，讓發射器與接收器快速同步頻道，操作直覺。系列涵蓋 ACT-3、ACT-5、ACT-7 與 ACT-8 等多款型號，從教育會議到專業演出皆能滿足需求，提供穩定清晰的無線收音體驗。",
  specs: {
    "頻率範圍": "UHF 480–934 MHz（依地區版本）",
    "頻道數": "單 / 雙 / 四 / 八通道可選",
    "對頻方式": "ACT 紅外自動對頻",
    "頻率響應": "50 Hz – 18 kHz",
    "動態範圍": "> 100 dB",
    "輸出介面": "XLR / 6.3 mm / AES3 數位輸出（依型號）",
    "電源": "接收器 AC / 發射器 使用 AA 電池或鋰電池",
    "機身材質": "金屬外殼，附 LCD 顯示與群組掃描功能",
    "應用": "教育錄播、會議室、舞台表演、教會、廣播錄音"
  },
  features: [
    "MIPRO 專利 ACT 自動對頻技術，快速精準配對",
    "多通道設計，可同時運作多組無線系統",
    "高動態範圍與低延遲音訊傳輸",
    "金屬機身、抗干擾設計，適合長時間運作",
    "適用各類場合：學校、教會、企業會議與舞台演出"
  ]
},

/* ------------------ MIPRO MI-58 Digital IEM System ------------------ */
"mipro-mi58": {
  id: "mipro-mi58",
  name: "MIPRO MI-58 Digital IEM System",
  brand: "MIPRO",
  brandKey: "mipro",
  brandLogo: "./assets/brands/MIPRO.svg",
  hero: "./assets/products/mipro/mipro-mi58.jpg",
  images: [
    "./assets/products/mipro/mipro-mi58.jpg",
    "./assets/products/mipro/mipro-mi58t.jpg",
    "./assets/products/mipro/mipro-mi58r.jpg"
  ],
  tagline: "5.8 GHz 數位無線入耳監聽系統，低延遲、高音質、抗干擾。",
  badges: ["Digital IEM", "5.8 GHz", "Low Latency", "Stereo"],
  desc:
    "MIPRO MI-58 系列採用 5.8 GHz 無線傳輸技術，提供 CD 級音質與低延遲監聽體驗。具備雙通道立體聲輸出、紅外對頻、自動掃描與多組頻道可選，能有效避開擁擠的 UHF 頻段，確保穩定可靠的舞台與錄播監聽環境。",
  specs: {
    "頻段": "5.725 – 5.850 GHz（免執照頻段）",
    "傳輸模式": "數位 24-bit / 48 kHz 立體聲傳輸",
    "延遲": "< 2.5 ms",
    "頻率響應": "20 Hz – 20 kHz",
    "通道數": "最多 12 組可同時運作",
    "對頻方式": "紅外 IR Sync 自動對頻",
    "輸入介面": "XLR / TRS 平衡輸入",
    "接收器": "腰掛式，OLED 顯示與音量控制",
    "電源": "接收器使用 AA × 2 電池 / 充電座選配",
    "應用": "舞台表演、教會錄播、企業發表、錄音監聽"
  },
  features: [
    "5.8 GHz 無線頻段，有效避開 UHF 干擾",
    "數位 24-bit 傳輸，音質接近 CD 等級",
    "超低延遲 < 2.5 ms，即時監聽無延誤",
    "支援紅外線自動對頻與頻道掃描",
    "立體聲 / 雙單聲道輸出模式可切換",
    "搭配充電底座與耳機組件，完整一體化方案"
  ]
},
/* ------------------ MLS Fixed LED Display Panels ------------------ */
"mls-fixed-led": {
  id: "mls-fixed-led",
  name: "MLS LED Display (Fixed Installation)",
  brand: "MLS LED",
  brandKey: "mls",
  brandLogo: "./assets/brands/MLS.svg",
  hero: "./assets/products/mls/mls-led-fixed.jpg",
  images: [
    "./assets/products/mls/mls-led-fixed.jpg",
    "./assets/products/mls/mls-led-studio.jpg",
    "./assets/products/mls/mls-led-controlroom.jpg"
  ],
  tagline: "高清小間距 LED 顯示屏，專為演播室與控制中心設計。",
  badges: ["LED Display", "COB", "SMD", "Fixed Install"],
  desc:
    "木林森固定安裝型 LED 顯示屏採用高精密模組與 COB 封裝技術，提供高亮度、高對比與零拼縫畫面。適用於演播室、控制中心、展覽廳及企業展示牆等場所，畫面細膩穩定，色彩一致性佳。",
  specs: {
    "顯示技術": "COB / SMD 封裝",
    "間距選項": "P1.25 / P1.56 / P1.875 / P2.5",
    "亮度": "最高 1500 nits（室內專用）",
    "刷新率": "≥3840 Hz",
    "顯示壽命": ">100,000 小時",
    "防護等級": "IP31（室內）",
    "色彩一致性": "逐模組校正，支援 HDR10",
    "控制方式": "同步 / 異步控制卡",
    "安裝方式": "壁掛式 / 嵌入式 / 曲面拼接",
    "應用": "演播室、控制中心、展覽展示、會議廳"
  },
  features: [
    "高解析小間距顯示，畫面銳利無拼縫",
    "高刷新率、色彩精準還原",
    "支援 HDR10 動態範圍成像",
    "模組化磁吸設計，維護方便",
    "長壽命 LED 晶片與低功耗驅動"
  ]
},
/* ------------------ MLS Rental LED Panels ------------------ */
"mls-rental-led": {
  id: "mls-rental-led",
  name: "MLS Rental LED Panels",
  brand: "MLS LED",
  brandKey: "mls",
  brandLogo: "./assets/brands/MLS.svg",
  hero: "./assets/products/mls/mls-led-rental.jpg",
  images: [
    "./assets/products/mls/mls-led-rental.jpg",
    "./assets/products/mls/mls-led-stage.jpg",
    "./assets/products/mls/mls-led-event.jpg"
  ],
  tagline: "快拆式租賃 LED 顯示屏，舞台活動專用。",
  badges: ["LED Display", "Rental", "Fast Lock", "Outdoor"],
  desc:
    "木林森租賃型 LED 顯示屏採用輕量鋁合金框體與快拆結構，專為舞台、演唱會與活動布景設計。具備高亮度與防水結構，可吊裝或堆疊，便於快速搭建與維護。",
  specs: {
    "顯示技術": "SMD 封裝",
    "間距選項": "P2.6 / P3.9 / P4.8 / P5.9",
    "亮度": "4000–6000 nits（戶外可選）",
    "刷新率": "≥3840 Hz",
    "重量": "約 7.5 kg / 模組（500×500 mm）",
    "防護等級": "IP65（前） / IP54（後）",
    "電源/信號": "模組化快拆電源與傳輸設計",
    "結構": "鋁合金箱體，支援吊裝 / 堆疊 / 曲面拼接",
    "應用": "舞台演出、發表會、教會活動、商業展演"
  },
  features: [
    "快拆式結構，2 秒完成拼接與拆裝",
    "高亮防水設計，適用室內外舞台",
    "可吊裝或堆疊，支援曲面造型",
    "高刷新率畫面穩定，無拖影閃爍",
    "低功耗設計，長時間運行穩定"
  ]
}
};
