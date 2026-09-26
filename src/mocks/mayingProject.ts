export interface MayingInfoItem {
  label: string;
  value: string;
  icon: string;
}

export interface MayingStage {
  phase: string;
  desc: string;
  status: "done" | "active" | "todo";
}

export interface MayingMajor {
  major: string;
  count: string;
  icon: string;
}

export interface MayingMember {
  name: string;
  school: string;
  major: string;
  role: string;
}

export interface MayingPreviewImage {
  src: string;
  label: string;
}

export const mayingTags = ["乡村空间", "社区营造", "公共空间"];

export const mayingTagSections = [
  { label: "乡村空间", id: "intro" },
  { label: "社区营造", id: "culture" },
  { label: "公共空间", id: "needs" },
];

export const mayingBanner =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(0)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233a5a40%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23e9edc9%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

export const mayingCover =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f5132%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d4a373%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

export const mayingStatus = "已落地";
export const mayingTitle = "马郢村乡村空间改造";
export const mayingSubtitle = "马郢村 · 空间更新";

export const mayingSummary =
  "用低成本、可参与的方式，把村里的闲置晒场改造成村民与游客都能停留的共享院落，让空间真正被使用起来。";

export const mayingBasicInfo: MayingInfoItem[] = [
  { label: "项目地点", value: "安徽 · 合肥长丰马郢村", icon: "ri-map-pin-2-line" },
  { label: "村庄 / 需求方", value: "马郢村 · 马郢社区营造中心", icon: "ri-home-smile-2-line" },
  { label: "需求类型", value: "空间更新", icon: "ri-bookmark-3-line" },
  { label: "项目周期", value: "60 天", icon: "ri-calendar-line" },
];

export const mayingSecondInfo: MayingInfoItem[] = [
  { label: "报名截止", value: "2026-06-15", icon: "ri-timer-line" },
  { label: "招募情况", value: "41 人报名 / 需 5 人", icon: "ri-group-line" },
];

export const mayingStages: MayingStage[] = [
  { phase: "需求征集", desc: "乡村提交真实设计需求", status: "done" },
  { phase: "审核立项", desc: "平台核验需求真实性", status: "done" },
  { phase: "设计调研", desc: "进村走访，理解乡土", status: "done" },
  { phase: "方案设计", desc: "与村民一起做设计", status: "done" },
  { phase: "落地实施", desc: "方案真实投入使用", status: "done" },
  { phase: "评估归档", desc: "多方评价，沉淀案例", status: "active" },
];

export const mayingCurrentStage = 6;

export const mayingIntro =
  "马郢村是合肥近郊的知名乡建村，早年通过「助学、助农、助村」计划焕发活力。村口的闲置晒场地处入村要道，却因缺乏设计而长年空置。";

export const mayingCultureResources = [
  "马郢村史与乡建记忆",
  "江淮民居院落",
  "晒场农耕场景",
  "在地砖石木材",
];

export const mayingDesignProblem =
  "晒场面积不小，但缺少休憩、遮阳与活动设施，晴天暴晒、雨天积水，村民与游客都无法停留，成为村里的「空白地带」。";

export const mayingDesignNeed =
  "需要一套尊重原有场地、采用在地材料、村民可共同参与施工的公共空间改造方案，让晒场重新成为村里的活力节点。";

export const mayingRecruitMajors: MayingMajor[] = [
  { major: "景观设计", count: "2 人", icon: "ri-plant-line" },
  { major: "空间设计", count: "2 人", icon: "ri-home-4-line" },
  { major: "视觉设计", count: "1 人", icon: "ri-eye-line" },
];

export const mayingCycle: MayingInfoItem = {
  label: "项目周期",
  value: "共创周期 60 天，报名截止 2026-06-15",
  icon: "ri-calendar-check-line",
};

export const mayingAdvisor: MayingInfoItem = {
  label: "指导教师",
  value: "张玮，安徽农业大学 讲师",
  icon: "ri-graduation-cap-line",
};

export const mayingMembers: MayingMember[] = [
  {
    name: "蒋雪涵",
    school: "安徽农业大学林学与园林学院",
    major: "环境设计",
    role: "空间负责",
  },
  {
    name: "张斯琪",
    school: "安徽农业大学林学与园林学院",
    major: "环境设计",
    role: "景观设计",
  },
  {
    name: "谢佳慧",
    school: "安徽农业大学林学与园林学院",
    major: "环境设计",
    role: "视觉设计",
  },
];

export const mayingDeliverables = [
  "晒场改造方案",
  "休憩遮阳设施设计",
  "参与式营造流程",
  "现场落地记录",
];

export const mayingPreviewImages: MayingPreviewImage[] = [
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23588157%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a3b18a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
    label: "改造完成的共享院落实景",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(270)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2340916c%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2395d5b2%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "公共空间落地实拍",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(225)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231b4332%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2352b788%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "参与式营造现场记录",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(180)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232d6a4f%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2374c69d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
    label: "村口公共空间实景",
  },
];