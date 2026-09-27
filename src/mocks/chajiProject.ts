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
  "/images/cj-house-banner-01.jpg";

export const chajiCover =
  "/images/cj-house-cover-01.jpg";

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
    src: "/images/cj-house-prev-01.jpg",
    label: "徽派老宅室内空间效果",
  },
  {
    src: "/images/cj-house-prev-02.jpg",
    label: "查济古村街景",
  },
  {
    src: "/images/cj-house-prev-03.jpg",
    label: "徽州软装手作物料",
  },
  {
    src: "/images/cj-house-prev-04.jpg",
    label: "样板客房空间实景",
  },
];