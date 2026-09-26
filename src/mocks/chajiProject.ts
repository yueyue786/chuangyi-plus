export interface ChajiInfoItem {
  label: string;
  value: string;
  icon: string;
}

export interface ChajiStage {
  phase: string;
  desc: string;
  status: "done" | "active" | "todo";
}

export interface ChajiMajor {
  major: string;
  count: string;
  icon: string;
}

export interface ChajiMember {
  name: string;
  school: string;
  major: string;
  role: string;
}

export interface ChajiPreviewImage {
  src: string;
  label: string;
}

export const chajiTags = ["乡村空间", "民宿设计", "在地材料"];

export const chajiTagSections = [
  { label: "乡村空间", id: "intro" },
  { label: "民宿设计", id: "culture" },
  { label: "在地材料", id: "needs" },
];

export const chajiBanner =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f5132%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d4a373%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

export const chajiCover =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(90)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23283618%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bc6c25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E";

export const chajiStatus = "共创中";
export const chajiTitle = "查济老宅院落民宿空间设计";
export const chajiSubtitle = "查济村 · 空间更新";

export const chajiSummary =
  "用在地石材、木构与手作织物，把一间闲置老宅改造成能讲述徽州生活的住宿空间。";

export const chajiBasicInfo: ChajiInfoItem[] = [
  { label: "项目地点", value: "安徽 · 宣城泾县查济", icon: "ri-map-pin-2-line" },
  { label: "村庄 / 需求方", value: "查济村 · 查济古村文旅发展中心", icon: "ri-home-smile-2-line" },
  { label: "需求类型", value: "空间更新", icon: "ri-bookmark-3-line" },
  { label: "项目周期", value: "55 天", icon: "ri-calendar-line" },
];

export const chajiSecondInfo: ChajiInfoItem[] = [
  { label: "报名截止", value: "2026-10-12", icon: "ri-timer-line" },
  { label: "招募情况", value: "22 人报名 / 需 5 人", icon: "ri-group-line" },
];

export const chajiStages: ChajiStage[] = [
  { phase: "需求征集", desc: "乡村提交真实设计需求", status: "done" },
  { phase: "审核立项", desc: "平台核验需求真实性", status: "done" },
  { phase: "设计调研", desc: "进村走访，理解乡土", status: "done" },
  { phase: "方案设计", desc: "与村民一起做设计", status: "done" },
  { phase: "落地实施", desc: "方案真实投入使用", status: "done" },
  { phase: "评估归档", desc: "多方评价，沉淀案例", status: "active" },
];

export const chajiCurrentStage = 6;

export const chajiIntro =
  "查济保存了大量明清徽派民居，但村民自发改建的民宿普遍照搬城市酒店风格，与古村风貌割裂。";

export const chajiCultureResources = [
  "查济明清民居群",
  "徽派木构营造",
  "天井院落格局",
  "在地竹木石材",
];

export const chajiDesignProblem =
  "闲置老宅被简单翻新，原有的木构、天井与空间格局被破坏，改造后既不像驻村民宿，也丢失了徽州生活的体验感。";

export const chajiDesignNeed =
  "需要一套尊重原有建筑格局、采用在地材料、成本可控的老宅改造与软装方案，并能指导村民自行施工。";

export const chajiRecruitMajors: ChajiMajor[] = [
  { major: "环境设计", count: "2 人", icon: "ri-plant-line" },
  { major: "室内设计", count: "2 人", icon: "ri-home-4-line" },
  { major: "产品设计", count: "1 人", icon: "ri-shopping-bag-3-line" },
];

export const chajiCycle: ChajiInfoItem = {
  label: "项目周期",
  value: "共创周期 55 天，报名截止 2026-10-12",
  icon: "ri-calendar-check-line",
};

export const chajiAdvisor: ChajiInfoItem = {
  label: "指导教师",
  value: "孟庭之，同济大学 副教授",
  icon: "ri-graduation-cap-line",
};

export const chajiMembers: ChajiMember[] = [
  {
    name: "骆川",
    school: "同济大学设计创意学院",
    major: "室内设计",
    role: "空间负责",
  },
  {
    name: "方棂",
    school: "南京艺术学院",
    major: "环境设计",
    role: "环境设计",
  },
];

export const chajiDeliverables = [
  "样板客房改造方案",
  "软装系统清单",
  "在地材料指南",
  "现场落地指导记录",
];

export const chajiPreviewImages: ChajiPreviewImage[] = [
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(0)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23344e41%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23b7e4c7%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "徽派老宅室内空间效果",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23588157%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a3b18a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
    label: "查济古村街景",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(270)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2340916c%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2395d5b2%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "徽州软装手作物料",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(225)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231b4332%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2352b788%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "样板客房空间实景",
  },
];