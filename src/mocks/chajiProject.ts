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
  "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20restored%20Huizhou%20old%20courtyard%20house%20interior%20in%20an%20ancient%20Chinese%20village%2C%20warm%20wooden%20beams%20and%20stone%20floors%2C%20a%20central%20skywell%20courtyard%20with%20soft%20natural%20daylight%2C%20traditional%20furniture%20and%20handwoven%20textiles%2C%20white%20walls%20and%20grey%20tiles%2C%20refined%20minimal%20renovation%2C%20warm%20neutral%20and%20green%20tones%2C%20clean%20composition%2C%20high%20detail&width=1600&height=900&seq=cj-house-banner-01&orientation=landscape";

export const chajiCover =
  "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20restored%20old%20courtyard%20home%20turned%20into%20a%20boutique%20homestay%20interior%20in%20a%20Huizhou%20village%2C%20wooden%20structure%20with%20a%20bright%20skywell%2C%20local%20stone%20and%20timber%20materials%2C%20simple%20warm%20furnishings%20and%20handmade%20fabric%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-cover-01&orientation=landscape";

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
    src: "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20renovated%20old%20courtyard%20house%20interior%20in%20a%20Huizhou%20village%20homestay%2C%20showing%20a%20living%20area%20with%20wooden%20beams%2C%20local%20stone%20flooring%20and%20woven%20textiles%2C%20a%20bright%20skywell%20courtyard%20beyond%2C%20warm%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-prev-01&orientation=landscape",
    label: "徽派老宅室内空间效果",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20quiet%20ancient%20lane%20in%20Chaji%20village%20with%20white%20walled%20grey%20tiled%20Huizhou%20houses%20along%20a%20stone%20paved%20path%2C%20a%20gentle%20stream%20and%20green%20plants%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-prev-02&orientation=landscape",
    label: "查济古村街景",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Landscape%20flat%20lay%20of%20Huizhou%20handmade%20soft%20furnishing%20materials%20for%20a%20homestay%2C%20including%20natural%20linen%20fabric%2C%20bamboo%20woven%20baskets%2C%20wooden%20trays%20and%20ceramic%20tea%20ware%20on%20a%20light%20wooden%20table%2C%20soft%20daylight%2C%20clean%20minimal%20background%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-prev-03&orientation=landscape",
    label: "徽州软装手作物料",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20restored%20old%20courtyard%20home%20bedroom%20in%20a%20Huizhou%20village%20homestay%2C%20simple%20warm%20wood%20furniture%2C%20local%20stone%20and%20timber%2C%20handmade%20linen%20bedding%20and%20a%20small%20skywell%20window%20with%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-prev-04&orientation=landscape",
    label: "样板客房空间实景",
  },
];