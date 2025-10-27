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
    hero: "./assets/products/unileader-u-meta-v.jpg",
    images: [
      "./assets/products/unileader-u-meta-v.jpg",
      "./assets/products/unileader-u-cg.jpg",
      "./assets/products/unileader-u-studio-4k.jpg",
      "./assets/products/unileader-u-tianma-tracking.jpg"
    ],
    tagline: "虛擬製播系統核心，結合 Unreal Engine 即時渲染與追蹤技術。",
    badges: ["Virtual Studio", "Unreal Engine", "Tracking", "Compositing"],
    desc:
      "U-Meta V 整合 Unreal Engine 渲染、追蹤與鍵控模組，可支援多機位混合拍攝，適用於教育錄播、企業直播與廣播棚控。",
    specs: {
      "引擎核心": "Unreal Engine 4.27",
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
    hero: "./assets/products/unileader-u-caster-4k.jpg",
    images: [
      "./assets/products/unileader-u-caster-4k.jpg",
      "./assets/products/unileader-u-caster-timeline.jpg",
      "./assets/products/unileader-u-caster-multiview.jpg"
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
    hero: "./assets/products/unileader-u-cg.jpg",
    images: [
      "./assets/products/unileader-u-cg.jpg",
      "./assets/products/unileader-u-title-templates.jpg",
      "./assets/products/unileader-u-cg-live-graphics.jpg",
      "./assets/products/unileader-u-cg-lowerthird.jpg"
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
    hero: "./assets/products/unileader-u-hub.jpg",
    images: [
      "./assets/products/unileader-u-hub.jpg",
      "./assets/products/unileader-u-hub-io.jpg",
      "./assets/products/unileader-u-hub-workflow.jpg"
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
    hero: "./assets/products/unileader-u-tp.jpg",
    images: [
      "./assets/products/unileader-u-tp.jpg",
      "./assets/products/unileader-u-tp-side.jpg",
      "./assets/products/unileader-u-tp-mount.jpg"
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
  hero: "./assets/products/bmd-studio-camera-4k-pro-g2.jpg",
  images: [
    "./assets/products/bmd-studio-camera-4k-pro-g2.jpg",
    "./assets/products/bmd-studio-camera-4k-side.jpg",
    "./assets/products/bmd-studio-camera-4k-rear.jpg",
    "./assets/products/bmd-studio-camera-setup.jpg"
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
  hero: "./assets/products/bmd-atem-mini-extreme-iso.jpg",
  images: [
    "./assets/products/bmd-atem-mini-extreme-iso.jpg",
    "./assets/products/bmd-atem-mini-extreme-rear.jpg",
    "./assets/products/bmd-atem-mini-extreme-top.jpg",
    "./assets/products/bmd-atem-mini-extreme-multiview.jpg"
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
  hero: "./assets/products/bmd-hyperdeck-studio-4k-pro.jpg",
  images: [
    "./assets/products/bmd-hyperdeck-studio-4k-pro.jpg",
    "./assets/products/bmd-hyperdeck-front.jpg",
    "./assets/products/bmd-hyperdeck-rear.jpg",
    "./assets/products/bmd-hyperdeck-setup.jpg"
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
  hero: "./assets/products/bmd-ursa-broadcast-g2.jpg",
  images: [
    "./assets/products/bmd-ursa-broadcast-g2.jpg",
    "./assets/products/bmd-ursa-broadcast-side.jpg",
    "./assets/products/bmd-ursa-broadcast-back.jpg",
    "./assets/products/bmd-ursa-broadcast-setup.jpg"
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
  hero: "./assets/products/bmd-decklink-8k-pro.jpg",
  images: [
    "./assets/products/bmd-decklink-8k-pro.jpg",
    "./assets/products/bmd-decklink-8k-pro-ports.jpg",
    "./assets/products/bmd-decklink-8k-pro-install.jpg",
    "./assets/products/bmd-decklink-8k-pro-system.jpg"
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
  hero: "./assets/products/obsbot-tiny-2.jpg",
  images: [
    "./assets/products/obsbot-tiny-2.jpg",
    "./assets/products/obsbot-tiny-2-side.jpg",
    "./assets/products/obsbot-tiny-2-mount.jpg",
    "./assets/products/obsbot-tiny-2-setup.jpg"
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
  hero: "./assets/products/obsbot-tail-2.jpg",
  images: [
    "./assets/products/obsbot-tail-2.jpg",
    "./assets/products/obsbot-tail-2-back.jpg",
    "./assets/products/obsbot-tail-2-side.jpg",
    "./assets/products/obsbot-tail-2-app.jpg"
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

};
