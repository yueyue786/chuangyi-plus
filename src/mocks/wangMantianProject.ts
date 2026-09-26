export interface WmInfoItem {
  label: string;
  value: string;
  icon: string;
}

export interface WmStage {
  phase: string;
  desc: string;
  status: "done" | "active" | "todo";
}

export interface WmMajor {
  major: string;
  count: string;
  icon: string;
}

export interface WmMember {
  name: string;
  school: string;
  major: string;
  role: string;
}

export interface WmPreviewImage {
  src: string;
  label: string;
}

export const wmTags = ["民俗IP", "鱼灯", "文创开发"];

export const wmTagSections = [
  { label: "民俗IP", id: "intro" },
  { label: "鱼灯", id: "culture" },
  { label: "文创开发", id: "needs" },
];

export const wmBanner =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(180)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233a5a40%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23e9edc9%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

export const wmCover =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(225)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23264653%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232a9d8f%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E";

export const wmStatus = "共创中";
export const wmTitle = "汪满田鱼灯民俗IP与文创设计";
export const wmSubtitle = "汪满田村 · 文化转译";

export const wmSummary =
  "让传承数百年的汪满田鱼灯，变成一套既有民俗底色、又能被年轻人喜爱的文创体系。";

export const wmBasicInfo: WmInfoItem[] = [
  { label: "项目地点", value: "黄山市歙县汪满田村", icon: "ri-map-pin-2-line" },
  { label: "村庄 / 需求方", value: "汪满田村 · 汪满田鱼灯民俗传承协会", icon: "ri-home-smile-2-line" },
  { label: "需求类型", value: "文化转译", icon: "ri-bookmark-3-line" },
  { label: "项目周期", value: "45 天", icon: "ri-calendar-line" },
];

export const wmSecondInfo: WmInfoItem[] = [
  { label: "报名截止", value: "2026-10-20", icon: "ri-timer-line" },
  { label: "招募情况", value: "27 人报名 / 需 6 人", icon: "ri-group-line" },
];

export const wmStages: WmStage[] = [
  { phase: "需求征集", desc: "乡村提交真实设计需求", status: "done" },
  { phase: "审核立项", desc: "平台核验需求真实性", status: "done" },
  { phase: "设计调研", desc: "进村走访，理解鱼灯民俗", status: "done" },
  { phase: "方案设计", desc: "与村民一起设计鱼灯IP与文创方案", status: "active" },
  { phase: "落地实施", desc: "方案投入村落地应用", status: "todo" },
  { phase: "评估归档", desc: "多方评价，沉淀案例", status: "todo" },
];

export const wmCurrentStage = 4;

export const wmIntro =
  "汪满田鱼灯是徽州极具生命力的民俗活动，每年元宵村灯游，但活动之外缺少可持续的文创传播载体。";

export const wmCultureResources = [
  "汪满田鱼灯",
  "徽州元宵民俗",
  "竹编鱼灯技艺",
  "鱼纹吉祥文化",
];

export const wmDesignProblem =
  "鱼灯只在春节短暂出现，缺乏常态化的文创产品与体验内容，年轻人参与感逐年减弱，工艺传承面临断层。";

export const wmDesignNeed =
  "需要把鱼灯造型、色彩与民俗精神转化为可爱、可玩、可传播的文创体系，帮助民俗活动形成自我造血的循环。";

export const wmRecruitMajors: WmMajor[] = [
  { major: "视觉设计", count: "3 人", icon: "ri-eye-line" },
  { major: "产品设计", count: "2 人", icon: "ri-shopping-bag-3-line" },
  { major: "工业设计", count: "1 人", icon: "ri-tools-line" },
];

export const wmCycle: WmInfoItem = {
  label: "项目周期",
  value: "共创周期 45 天，报名截止 2026-10-20",
  icon: "ri-calendar-check-line",
};

export const wmAdvisor: WmInfoItem = {
  label: "指导教师",
  value: "黄舒辞，四川美术学院 副教授",
  icon: "ri-graduation-cap-line",
};

export const wmMembers: WmMember[] = [
  {
    name: "罗青",
    school: "四川美术学院",
    major: "视觉传达设计",
    role: "视觉负责",
  },
  {
    name: "杨芷",
    school: "安徽师范大学美术学院",
    major: "产品设计",
    role: "产品设计",
  },
  {
    name: "林小渊",
    school: "安徽农业大学",
    major: "视觉传达设计",
    role: "文创设计",
  },
];

export const wmDeliverables = [
  "鱼灯视觉提炼图谱",
  "文创产品线方案",
  "手作体验包设计",
  "视觉传播物料",
];

export const wmPreviewImages: WmPreviewImage[] = [
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(225)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23264653%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232a9d8f%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
    label: "汪满田鱼灯视觉图谱",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(270)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231d3557%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23457b9d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "鱼灯文创产品方案",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23774936%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d5a06c%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "手作体验包设计",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(0)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232d6a4f%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2374c69d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
    label: "视觉传播物料预览",
  },
];