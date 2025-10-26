/* =========================================================
   product.data.js — Uni-Leader 全系列產品資料
   ========================================================= */
window.PRODUCTS = {
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
  }
};