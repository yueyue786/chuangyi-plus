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
  "/images/my-village-banner-01.jpg";

export const mayingCover =
  "/images/my-village-cover-01.jpg";

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
    src: "/images/my-village-prev-01.jpg",
    label: "改造完成的共享院落实景",
  },
  {
    src: "/images/my-village-prev-02.jpg",
    label: "公共空间落地实拍",
  },
  {
    src: "/images/my-village-prev-03.jpg",
    label: "参与式营造现场记录",
  },
  {
    src: "/images/my-village-prev-04.jpg",
    label: "村口公共空间实景",
  },
];