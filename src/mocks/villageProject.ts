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
  "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/a91f8bff-b198-4c93-9431-5b6c8d24e3eb_compressed_22115334--1.webp";

export const villageCover =
  "https://readdy.ai/api/search-image?query=Stylized%20guofeng%20flat%20illustration%20of%20a%20traditional%20Chinese%20snake%20lantern%20folk%20performance%2C%20villagers%20dancing%20and%20carrying%20a%20long%20illuminated%20serpent%20lantern%20made%20of%20bamboo%20and%20painted%20paper%2C%20deep%20green%20and%20warm%20gold%20palette%2C%20clean%20minimal%20light%20background%2C%20high%20detail&width=800&height=600&seq=cy-village-cover-01&orientation=landscape";

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
    src: "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/8800cf2eadddc98d2321f824a1b7c9ab.jpeg",
    label: "洋蛇灯信息可视化设计 · 展板一",
  },
  {
    src: "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/0ae3daeb72acf469f241fd2f98a3e155.jpeg",
    label: "洋蛇灯民俗巡游信息可视化 · 展板二",
  },
  {
    src: "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/bf062bee8219f2eee9ab717429e3be64.jpeg",
    label: "洋蛇灯出灯流程与仪式转译",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20guofeng%20illustration%20of%20hands%20crafting%20a%20traditional%20Chinese%20snake%20lantern%20bamboo%20frame%20wrapped%20with%20painted%20colored%20paper%2C%20warm%20workshop%20light%2C%20deep%20green%20and%20amber%20tones%2C%20clean%20minimal%20background%2C%20flat%20style%2C%20high%20detail&width=800&height=600&seq=cy-village-prev-01&orientation=landscape",
    label: "洋蛇灯扎制工艺转译",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Guofeng%20color%20and%20pattern%20system%20board%20for%20a%20Chinese%20snake%20lantern%20theme%2C%20swatches%20of%20deep%20green%20jade%20and%20warm%20amber%20gold%20with%20scale%20and%20wave%20motifs%2C%20clean%20minimal%20light%20background%2C%20flat%20design%20presentation%2C%20high%20detail&width=800&height=600&seq=cy-village-prev-02&orientation=landscape",
    label: "色彩与图形系统",
  },
];