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
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(0)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23344e41%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23b7e4c7%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
  },
  {
    id: "product",
    tag: "产业振兴",
    title: "乡村文创产品设计",
    intro: "以创意设计赋能乡村特色产业",
    cover:
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(315)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23588157%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a3b18a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
  },
  {
    id: "space",
    tag: "生态振兴",
    title: "乡村景观与公共空间设计",
    intro: "打造美丽乡村，提升乡村生活品质",
    cover:
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(270)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2340916c%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2395d5b2%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
  },
];