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
      "/images/cy-gov-case-01.jpg",
  },
  {
    id: "product",
    tag: "产业振兴",
    title: "乡村文创产品设计",
    intro: "以创意设计赋能乡村特色产业",
    cover:
      "/images/cy-gov-case-02.jpg",
  },
  {
    id: "space",
    tag: "生态振兴",
    title: "乡村景观与公共空间设计",
    intro: "打造美丽乡村，提升乡村生活品质",
    cover:
      "/images/cy-gov-case-03.jpg",
  },
];