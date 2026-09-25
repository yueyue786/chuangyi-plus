export interface WorkflowStep {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: "publish",
    title: "需求发布",
    desc: "乡村方在线发布真实设计需求，明确目标与预算",
    icon: "ri-megaphone-line",
  },
  {
    id: "match",
    title: "调研匹配",
    desc: "平台实地调研，精准匹配高校设计团队",
    icon: "ri-file-search-line",
  },
  {
    id: "design",
    title: "共创设计",
    desc: "设计师与村民协同，多轮打磨创意方案",
    icon: "ri-lightbulb-line",
  },
  {
    id: "landing",
    title: "落地实施",
    desc: "方案落地施工，投入乡村实际使用",
    icon: "ri-building-2-line",
  },
  {
    id: "track",
    title: "跟踪反馈",
    desc: "持续回访评估，沉淀可复用的共创经验",
    icon: "ri-line-chart-line",
  },
];

export interface ImpactStat {
  value: string;
  unit: string;
  label: string;
}

export const impactStats: ImpactStat[] = [
  { value: "128", unit: "+", label: "已落地项目" },
  { value: "560", unit: "+", label: "合作设计人才" },
  { value: "32", unit: "个", label: "覆盖乡村地区" },
  { value: "98", unit: "%", label: "项目满意度" },
];

export interface FeaturedCase {
  id: string;
  tag: string;
  title: string;
  intro: string;
  cover: string;
}

export const featuredCases: FeaturedCase[] = [
  {
    id: "brand",
    tag: "文化振兴",
    title: "古村文化品牌设计",
    intro: "挖掘在地文化，打造乡村IP品牌形象",
    cover:
      "https://readdy.ai/api/search-image?query=Landscape%20editorial%20photo%20of%20a%20rural%20village%20brand%20identity%20showcase%2C%20printed%20logo%20cards%2C%20signage%20boards%20and%20tote%20bags%20with%20green%20ink%20designs%20displayed%20in%20front%20of%20an%20old%20Chinese%20village%20street%2C%20soft%20daylight%2C%20clean%20minimal%20composition%2C%20green%20and%20warm%20neutral%20tones%2C%20high%20detail&width=800&height=600&seq=cy-gov-case-01&orientation=landscape",
  },
  {
    id: "product",
    tag: "产业振兴",
    title: "乡村文创产品设计",
    intro: "以创意设计赋能乡村特色产业",
    cover:
      "https://readdy.ai/api/search-image?query=Landscape%20editorial%20photo%20of%20rural%20cultural%20and%20creative%20products%2C%20a%20set%20of%20green%20packaged%20tea%20and%20handicraft%20gift%20boxes%20with%20minimal%20illustrations%20arranged%20on%20a%20wooden%20table%2C%20soft%20natural%20light%2C%20clean%20simple%20background%2C%20green%20and%20warm%20tones%2C%20high%20detail&width=800&height=600&seq=cy-gov-case-02&orientation=landscape",
  },
  {
    id: "space",
    tag: "生态振兴",
    title: "乡村景观与公共空间设计",
    intro: "打造美丽乡村，提升乡村生活品质",
    cover:
      "https://readdy.ai/api/search-image?query=Landscape%20photo%20of%20a%20renovated%20rural%20public%20space%20with%20a%20wooden%20pavilion%2C%20stone%20path%2C%20green%20plants%20and%20a%20small%20pond%20in%20a%20Chinese%20village%2C%20soft%20morning%20light%2C%20modern%20minimal%20rural%20architecture%2C%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cy-gov-case-03&orientation=landscape",
  },
];