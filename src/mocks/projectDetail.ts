export interface ProjectTimelineStep {
  step: number;
  title: string;
  date: string;
  status: "done" | "active" | "pending";
  desc: string;
}

export interface ProjectMember {
  name: string;
  role: string;
  detail: string;
  tone: "primary" | "accent" | "secondary";
}

export interface ProjectOutcome {
  title: string;
  meta: string;
  cover: string;
}

export interface ProjectDetailContent {
  summary: string;
  progressNote: string;
  timeline: ProjectTimelineStep[];
  students: ProjectMember[];
  mentors: ProjectMember[];
  villagePartners: ProjectMember[];
  outcomes: ProjectOutcome[];
}

export const projectDetails: Record<string, ProjectDetailContent> = {
  "1": {
    summary:
      "在宏村青砖巷的沿街老墙上，用一幅长卷式墙绘把村庄的四季与稻作日常留在村民每天经过的地方。",
    progressNote: "目前已完成墙绘小样与墙面基层处理，正在进行正式上墙绘制。",
    timeline: [
      {
        step: 1,
        title: "需求征集",
        status: "done",
        date: "2026.03",
        desc: "走访 18 户村民，收集巷口墙面的生活记忆与视觉偏好。",
      },
      {
        step: 2,
        title: "审核立项",
        status: "done",
        date: "2026.04",
        desc: "确定 18 米墙面范围与安全施工方案，组建 6 人共创小组。",
      },
      {
        step: 3,
        title: "设计调研",
        status: "active",
        date: "2026.05 - 至今",
        desc: "驻村记录四季风物、方言称谓与老照片，提炼图形语言。",
      },
      {
        step: 4,
        title: "方案设计",
        status: "pending",
        date: "待启动",
        desc: "完成墙绘长卷小样与色彩系统，与村民共议定稿。",
      },
      {
        step: 5,
        title: "落地实施",
        status: "pending",
        date: "待启动",
        desc: "现场打点、上墙绘制与村民共同完成收尾。",
      },
      {
        step: 6,
        title: "评估归档",
        status: "pending",
        date: "待启动",
        desc: "整理施工记录与调研报告，沉淀进乡村案例库。",
      },
    ],
    students: [
      { name: "林小满", role: "视觉主创", detail: "安徽农业大学 · 视觉传达", tone: "primary" },
      { name: "周雨桐", role: "插画设计", detail: "中国美术学院 · 插画", tone: "accent" },
      { name: "陈默", role: "调研记录", detail: "合肥工业大学 · 数字媒体", tone: "secondary" },
    ],
    mentors: [
      { name: "赵筑老师", role: "项目导师", detail: "安徽农业大学 · 副教授", tone: "primary" },
      { name: "吴闽老师", role: "民俗顾问", detail: "徽州文化研究会", tone: "accent" },
    ],
    villagePartners: [
      { name: "汪支书", role: "村负责人", detail: "宏村村委会", tone: "secondary" },
      { name: "老篾匠 何伯", role: "手艺顾问", detail: "青砖巷 12 号", tone: "accent" },
    ],
    outcomes: [
      {
        title: "墙绘长卷概念稿",
        meta: "设计成果 · 2026.05",
        cover:
          "https://readdy.ai/api/search-image?query=Long%20horizontal%20mural%20concept%20sketch%20of%20Chinese%20Hui%20style%20village%20life%20across%20four%20seasons%20with%20rice%20terraces%20green%20hills%20and%20old%20white%20walls%2C%20watercolor%20illustration%20on%20paper%2C%20warm%20earthy%20green%20tones%2C%20clean%20simple%20background%2C%20high%20detail&width=720&height=540&seq=cy-out-wall-01&orientation=landscape",
      },
      {
        title: "四季风物图形提取",
        meta: "调研产出 · 2026.05",
        cover:
          "https://readdy.ai/api/search-image?query=Graphic%20motif%20exploration%20sheet%20with%20hand%20drawn%20rice%20terrace%20hills%20bamboo%20leaves%20and%20Hui%20style%20roof%20patterns%20on%20cream%20paper%2C%20flat%20design%20color%20palette%20of%20green%20and%20orange%2C%20minimal%20clean%20studio%20photography%2C%20high%20detail&width=720&height=540&seq=cy-out-wall-02&orientation=landscape",
      },
      {
        title: "墙面基层施工记录",
        meta: "落地记录 · 2026.06",
        cover:
          "https://readdy.ai/api/search-image?query=Young%20designers%20preparing%20an%20old%20white%20village%20wall%20surface%20with%20brushes%20and%20tools%20in%20a%20narrow%20Hui%20style%20stone%20lane%2C%20soft%20afternoon%20light%2C%20documentary%20photography%2C%20green%20hills%20in%20background%2C%20high%20detail&width=720&height=540&seq=cy-out-wall-03&orientation=landscape",
      },
    ],
  },
};

export const defaultProjectContent: ProjectDetailContent = {
  summary:
    "一支由高校学生与乡村伙伴组成的共创小组，正在把田野里的真实需求，一步步做成能留在村里的设计成果。",
  progressNote: "项目按六步共创流程推进中，当前已进入设计调研与方案迭代阶段。",
  timeline: [
    { step: 1, title: "需求征集", status: "done", date: "已完成", desc: "走访村民，把口述诉求整理成清晰的设计需求清单。" },
    { step: 2, title: "审核立项", status: "done", date: "已完成", desc: "导师与公益团队评估可行性，确定周期与共创小组。" },
    { step: 3, title: "设计调研", status: "active", date: "进行中", desc: "驻村田野调研，记录方言、手艺、风物与在地纹样。" },
    { step: 4, title: "方案设计", status: "pending", date: "待启动", desc: "在导师指导下完成设计方案并与村民反复共议。" },
    { step: 5, title: "落地实施", status: "pending", date: "待启动", desc: "方案进村制作与施工，成果真正投入使用。" },
    { step: 6, title: "评估归档", status: "pending", date: "待启动", desc: "复盘成效，把方法与报告沉淀进乡村案例库。" },
  ],
  students: [
    { name: "林小满", role: "设计主创", detail: "安徽农业大学 · 视觉传达", tone: "primary" },
    { name: "周雨桐", role: "设计助理", detail: "中国美术学院 · 插画", tone: "accent" },
  ],
  mentors: [
    { name: "赵筑老师", role: "项目导师", detail: "安徽农业大学 · 副教授", tone: "primary" },
  ],
  villagePartners: [
    { name: "汪支书", role: "村负责人", detail: "村委会", tone: "secondary" },
  ],
  outcomes: [
    {
      title: "调研报告与影像档案",
      meta: "调研产出",
      cover:
        "https://readdy.ai/api/search-image?query=Field%20research%20notebook%20with%20handwritten%20notes%20village%20sketches%20and%20printed%20photos%20spread%20on%20a%20wooden%20desk%2C%20soft%20natural%20light%2C%20clean%20minimal%20background%2C%20warm%20green%20tones%2C%20editorial%20photography%2C%20high%20detail&width=720&height=540&seq=cy-out-default-01&orientation=landscape",
    },
    {
      title: "设计方案阶段成果",
      meta: "设计成果",
      cover:
        "https://readdy.ai/api/search-image?query=Design%20proposal%20boards%20for%20a%20rural%20village%20project%20displayed%20on%20a%20light%20table%20with%20green%20and%20orange%20color%20palette%2C%20soft%20studio%20light%2C%20clean%20minimal%20background%2C%20editorial%20design%20photography%2C%20high%20detail&width=720&height=540&seq=cy-out-default-02&orientation=landscape",
    },
  ],
};