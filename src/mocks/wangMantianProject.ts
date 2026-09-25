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
  "https://readdy.ai/api/search-image?query=Landscape%20night%20photograph%20of%20a%20lively%20traditional%20Wangmantian%20fish%20lantern%20parade%20in%20a%20Huizhou%20ancient%20village%2C%20villagers%20carrying%20glowing%20fish%20shaped%20lanterns%20made%20of%20bamboo%20and%20painted%20paper%20in%20a%20joyful%20procession%2C%20warm%20golden%20lantern%20light%20against%20a%20deep%20evening%20sky%2C%20white%20walled%20Huizhou%20houses%20in%20the%20background%2C%20festive%20folk%20atmosphere%2C%20cinematic%20high%20detail&width=1600&height=900&seq=wm-fish-banner-01&orientation=landscape";

export const wmCover =
  "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20joyful%20traditional%20Chinese%20fish%20lantern%20folk%20parade%20in%20a%20Huizhou%20village%20at%20night%2C%20villagers%20holding%20colorful%20glowing%20fish%20shaped%20lanterns%2C%20warm%20festive%20lighting%2C%20white%20walled%20ancient%20houses%20behind%20the%20crowd%2C%20deep%20green%20and%20amber%20tones%2C%20clean%20composition%2C%20high%20detail&width=800&height=600&seq=wm-fish-cover-01&orientation=landscape";

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
    src: "https://readdy.ai/api/search-image?query=Flat%20design%20board%20of%20a%20fish%20lantern%20visual%20extraction%20atlas%20for%20an%20intangible%20cultural%20heritage%20IP%2C%20showing%20stylized%20fish%20lantern%20illustrations%2C%20color%20swatches%20and%20pattern%20studies%20in%20deep%20green%20and%20warm%20amber%20tones%2C%20clean%20light%20background%2C%20minimal%20guofeng%20presentation%2C%20high%20detail&width=800&height=600&seq=wm-fish-prev-01&orientation=landscape",
    label: "汪满田鱼灯视觉图谱",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Flat%20lay%20photo%20of%20a%20fish%20lantern%20themed%20cultural%20creative%20product%20line%20including%20a%20tote%20bag%2C%20notebooks%2C%20enamel%20pins%20and%20gift%20boxes%20featuring%20cute%20glowing%20fish%20lantern%20illustrations%2C%20deep%20green%20and%20amber%20palette%2C%20clean%20light%20background%2C%20soft%20daylight%2C%20high%20detail&width=800&height=600&seq=wm-fish-prev-02&orientation=landscape",
    label: "鱼灯文创产品方案",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Photo%20of%20a%20DIY%20handmade%20fish%20lantern%20craft%20kit%20in%20an%20open%20box%20containing%20bamboo%20strips%2C%20colored%20paper%2C%20small%20LED%20lights%20and%20illustrated%20instructions%2C%20placed%20on%20a%20light%20wooden%20table%20with%20a%20clean%20minimal%20background%20and%20warm%20tones%2C%20high%20detail&width=800&height=600&seq=wm-fish-prev-03&orientation=landscape",
    label: "手作体验包设计",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Flat%20lay%20photo%20of%20fish%20lantern%20festival%20visual%20communication%20materials%20including%20posters%2C%20postcards%20and%20banners%20with%20cute%20glowing%20fish%20lantern%20illustrations%20in%20deep%20green%20and%20amber%20tones%2C%20clean%20light%20background%2C%20soft%20daylight%2C%20high%20detail&width=800&height=600&seq=wm-fish-prev-04&orientation=landscape",
    label: "视觉传播物料预览",
  },
];