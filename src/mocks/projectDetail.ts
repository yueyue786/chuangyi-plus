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
          "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(270)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231d3557%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23457b9d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
      },
      {
        title: "四季风物图形提取",
        meta: "调研产出 · 2026.05",
        cover:
          "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23774936%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d5a06c%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
      },
      {
        title: "墙面基层施工记录",
        meta: "落地记录 · 2026.06",
        cover:
          "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(0)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232d6a4f%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2374c69d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
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
        "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(135)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23588157%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a3b18a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
    },
    {
      title: "设计方案阶段成果",
      meta: "设计成果",
      cover:
        "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(180)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23344e41%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23b7e4c7%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    },
  ],
};