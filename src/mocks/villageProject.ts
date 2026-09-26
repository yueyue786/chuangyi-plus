export interface VillageInfoItem {
  label: string;
  value: string;
  icon: string;
}

export interface VillageStage {
  phase: string;
  desc: string;
  status: "done" | "active" | "todo";
}

export interface VillageMajor {
  major: string;
  count: string;
  icon: string;
}

export interface VillageMember {
  name: string;
  school: string;
  major: string;
  role: string;
}

export interface VillagePreviewImage {
  src: string;
  label: string;
}

export const villageTags = ["文化转译", "非遗活化", "视觉系统"];

export const villageTagSections = [
  { label: "文化转译", id: "intro" },
  { label: "非遗活化", id: "culture" },
  { label: "视觉系统", id: "needs" },
];

export const villageBanner =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(45)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23606c38%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23dda15e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

export const villageCover =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(45)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231b4332%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2352b788%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

export const villageStatus = "共创中";
export const villageTitle = "大邵村洋蛇灯视觉转译";
export const villageSubtitle = "大邵村 · 文化转译";

export const villageSummary =
  "洋蛇灯是村里传承数百年的独特民俗，需要把它的造型、色彩与仪式流程，转译成一套年轻人愿意传播的视觉语言。";

export const villageBasicInfo: VillageInfoItem[] = [
  { label: "项目地点", value: "安徽 · 合肥肥东大邵村", icon: "ri-map-pin-2-line" },
  { label: "村庄 / 需求方", value: "大邵村 · 大邵村洋蛇灯民俗传承协会", icon: "ri-home-smile-2-line" },
  { label: "需求类型", value: "文化转译", icon: "ri-bookmark-3-line" },
  { label: "项目周期", value: "45 天", icon: "ri-calendar-line" },
];

export const villageSecondInfo: VillageInfoItem[] = [
  { label: "报名截止", value: "2026-10-16", icon: "ri-timer-line" },
  { label: "招募情况", value: "33 人报名 / 需 4 人", icon: "ri-group-line" },
];

export const villageStages: VillageStage[] = [
  { phase: "需求征集", desc: "乡村提交真实设计需求", status: "done" },
  { phase: "审核立项", desc: "平台核验需求真实性", status: "done" },
  { phase: "设计调研", desc: "进村走访，理解乡土", status: "done" },
  { phase: "方案设计", desc: "与村民一起做设计", status: "active" },
  { phase: "落地实施", desc: "方案真实投入使用", status: "todo" },
  { phase: "评估归档", desc: "多方评价，沉淀案例", status: "todo" },
];

export const villageCurrentStage = 4;

export const villageIntro =
  "大邵村的洋蛇灯是江淮地区罕见的蛇形灯彩民俗，以竹骨为架、彩纸覆面，起舞时如巨蟒游走，气势雄浑。这一民俗已延续数百年，却长期只在节庆时短暂出现。";

export const villageCultureResources = [
  "洋蛇灯扎制技艺",
  "江淮灯彩民俗",
  "竹骨彩纸工艺",
  "蛇形纹样",
];

export const villageDesignProblem =
  "洋蛇灯目前只停留在正月巡游，缺乏可延伸的视觉资产与传播物料，年轻人参与度低，工艺也面临后继无人的困境。";

export const villageDesignNeed =
  "需要把洋蛇灯的造型、色彩与仪式感提炼为系统化的视觉语言，服务导视、文创、传播与体验多场景，让民俗重新回到年轻人的视野。";

export const villageRecruitMajors: VillageMajor[] = [
  { major: "视觉设计", count: "2 人", icon: "ri-eye-line" },
  { major: "插画设计", count: "1 人", icon: "ri-pen-nib-line" },
  { major: "动态设计", count: "1 人", icon: "ri-movie-2-line" },
];

export const villageCycle: VillageInfoItem = {
  label: "项目周期",
  value: "共创周期 45 天，报名截止 2026-10-16",
  icon: "ri-calendar-check-line",
};

export const villageAdvisor: VillageInfoItem = {
  label: "指导教师",
  value: "张玮，安徽农业大学",
  icon: "ri-graduation-cap-line",
};

export const villageMembers: VillageMember[] = [
  {
    name: "杨欢欢",
    school: "安徽农业大学",
    major: "视觉传达设计",
    role: "视觉负责",
  },
  {
    name: "吕彭怡然",
    school: "安徽农业大学",
    major: "视觉传达设计",
    role: "图形设计",
  },
  {
    name: "许嘉琳",
    school: "安徽农业大学",
    major: "视觉传达设计",
    role: "插画设计",
  },
];

export const villageDeliverables = [
  "视觉转译图谱",
  "色彩与图形系统",
  "文创应用示例",
  "传播物料设计",
];

export const villagePreviewImages: VillagePreviewImage[] = [
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(225)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231b4332%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2352b788%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "洋蛇灯信息可视化设计 · 展板一",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23774936%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d5a06c%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "洋蛇灯民俗巡游信息可视化 · 展板二",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(270)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231d3557%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23457b9d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "洋蛇灯出灯流程与仪式转译",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(135)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f5132%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d4a373%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "洋蛇灯扎制工艺转译",
  },
  {
    src: "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(180)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233a5a40%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23e9edc9%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
    label: "色彩与图形系统",
  },
];