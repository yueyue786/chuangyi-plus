export interface DemandScheduleItem {
  phase: string;
  period: string;
  deliverable: string;
}

export interface DemandHighlight {
  label: string;
  value: string;
}

export interface DemandDetailContent {
  summary: string;
  background: string[];
  highlights: DemandHighlight[];
  schedule: DemandScheduleItem[];
  majors: string[];
  skills: string[];
}

export const demandDetails: Record<string, DemandDetailContent> = {
  "1": {
    summary:
      "培田古村现存明清古祠堂 30 余座，是闽西客家建筑的重要样本，村口老祠堂年久失修后完成初步修缮，急需一套成体系的文化标识与导视。",
    background: [
      "培田古村位于福建龙岩连城县，是一座保存完好的明清客家古村落，素有「民间故宫」之称。村内九厅十八井的院落格局与成片的青砖灰瓦，是客家宗族文化的活态样本。",
      "村口的老祠堂是村民议事、祭祖与举办节庆的核心场所，去年完成了主体修缮，但配套的文化标识、导视牌与展陈说明仍停留在手写木牌阶段，游客很难读懂建筑背后的故事。",
      "村两委希望借助设计，把祠堂的历史脉络、楹联匾额与家族故事，转译成一套既尊重传统又便于识读的视觉标识系统，让古建真正「开口说话」。",
    ],
    highlights: [
      { label: "村落类型", value: "客家古村落" },
      { label: "核心场景", value: "老祠堂·村口" },
      { label: "现有人口", value: "约 320 户" },
      { label: "需求来源", value: "村两委申报" },
    ],
    schedule: [
      { phase: "田野调研", period: "第 1-2 周", deliverable: "调研笔记 + 建筑影像档案" },
      { phase: "标识概念", period: "第 3-4 周", deliverable: "2 套风格方向提案" },
      { phase: "深化设计", period: "第 5-7 周", deliverable: "完整标识系统与施工图" },
      { phase: "打样落地", period: "第 8-10 周", deliverable: "制作打样与现场安装指导" },
    ],
    majors: ["视觉传达设计", "环境设计", "工业设计", "建筑学"],
    skills: ["标志设计", "导视系统", "材料工艺", "田野调研"],
  },
  "2": {
    summary:
      "油坊坳村的山茶油沿用古法冷榨，品质优良却包装简陋，急需一套年轻化、可讲故事的产品包装与品牌视觉。",
    background: [
      "油坊坳村地处湖南永州的山间，村中保留着数十年的古法榨油坊，山茶油是村集体最主要的收入来源，年产量约 8 万斤。",
      "目前产品只用透明塑料桶分装，无品牌、无标签，在电商平台上缺乏辨识度，售价长期低于同类品牌产品，村民收益难以提升。",
      "村里希望设计团队为山茶油重新梳理品牌故事、提炼视觉识别，并完成从瓶型、标签到礼盒的一整套包装设计。",
    ],
    highlights: [
      { label: "主营产品", value: "古法山茶油" },
      { label: "年产量", value: "约 8 万斤" },
      { label: "主要渠道", value: "电商 + 线下" },
      { label: "需求来源", value: "村合作社" },
    ],
    schedule: [
      { phase: "品牌调研", period: "第 1-2 周", deliverable: "品牌诊断与竞品分析" },
      { phase: "视觉概念", period: "第 3-4 周", deliverable: "Logo 与主视觉方案" },
      { phase: "包装设计", period: "第 5-7 周", deliverable: "瓶标签 + 礼盒设计稿" },
      { phase: "打样落地", period: "第 8-9 周", deliverable: "印刷打样与量产建议" },
    ],
    majors: ["视觉传达设计", "产品设计", "包装工程", "广告学"],
    skills: ["品牌视觉", "包装结构", "插画绘制", "文案策划"],
  },
  "3": {
    summary:
      "双溪畲寨的畲族口述故事散落在老人记忆里，村小希望把它们转译成一套可读、可传的插画绘本，用于乡土教育与游客传播。",
    background: [
      "双溪畲寨是江西上饶少有的畲族聚居村落，畲族民歌、凤凰装与彩带编织是村里的文化名片，但年轻一代已很少会说畲语、读懂老故事。",
      "村里长年收集了 30 多则口述故事，目前只有零散的录音与手写笔记，缺乏适合儿童与游客阅读的画面表达，故事正在慢慢流失。",
      "村小与乡文化站希望联合设计团队，把其中最具代表性的 12 则故事，转译成一套统一风格的插画绘本与配套展板。",
    ],
    highlights: [
      { label: "文化主题", value: "畲族口述故事" },
      { label: "故事存量", value: "30 余则" },
      { label: "应用场景", value: "乡土课堂 + 展陈" },
      { label: "需求来源", value: "村小 + 文化站" },
    ],
    schedule: [
      { phase: "故事采集", period: "第 1-3 周", deliverable: "故事整理与分镜脚本" },
      { phase: "风格设定", period: "第 4-5 周", deliverable: "插画风格样张" },
      { phase: "绘本绘制", period: "第 6-9 周", deliverable: "12 则故事插画成品" },
      { phase: "排版输出", period: "第 10-11 周", deliverable: "绘本印刷文件 + 展板" },
    ],
    majors: ["视觉传达设计", "插画", "动画", "民族学"],
    skills: ["插画绘制", "叙事设计", "书籍排版", "田野访谈"],
  },
};

export const defaultDemandContent: DemandDetailContent = {
  summary:
    "该需求由村两委与乡文化站联合申报，希望借助高校设计力量，把在地文化转译成看得懂、留得住、用得上的设计成果。",
  background: [
    "这是一座正在寻找新表达的乡村。村里的传统手艺、方言故事与自然风物，长期缺少系统的视觉整理与传播载体。",
    "村民希望设计不只是「好看」，而是能真正被使用——被游客读懂、被年轻人喜欢、被下一代继续讲下去。",
    "创艺+ 平台已完成需求初审与立项评估，现面向高校招募青年设计师组成共创小组，由导师全程指导落地。",
  ],
  highlights: [
    { label: "合作方式", value: "高校共创小组" },
    { label: "指导方式", value: "导师 + 村民共议" },
    { label: "成果归属", value: "公益共享" },
    { label: "需求来源", value: "村两委申报" },
  ],
  schedule: [
    { phase: "田野调研", period: "第 1-2 周", deliverable: "调研笔记与影像档案" },
    { phase: "概念提案", period: "第 3-4 周", deliverable: "2 套设计方向提案" },
    { phase: "深化设计", period: "第 5-8 周", deliverable: "完整设计稿与制作文件" },
    { phase: "落地实施", period: "第 9-11 周", deliverable: "现场落地与成果归档" },
  ],
  majors: ["视觉传达设计", "环境设计", "产品设计", "数字媒体艺术"],
  skills: ["品牌视觉", "空间表达", "插画绘制", "田野调研"],
};