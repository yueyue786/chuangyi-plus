export interface WorkbenchStat {
  id: string;
  value: string;
  unit: string;
  label: string;
  icon: string;
  tone: string;
}

export const workbenchStats: WorkbenchStat[] = [
  {
    id: "colleges",
    value: "12",
    unit: "所",
    label: "入驻高校",
    icon: "ri-school-line",
    tone: "bg-primary-100 text-primary-700",
  },
  {
    id: "villages",
    value: "36",
    unit: "个",
    label: "服务乡村",
    icon: "ri-home-smile-2-line",
    tone: "bg-secondary-100 text-secondary-700",
  },
  {
    id: "cases",
    value: "128",
    unit: "个",
    label: "完成案例",
    icon: "ri-award-line",
    tone: "bg-accent-100 text-accent-700",
  },
  {
    id: "designers",
    value: "520",
    unit: "位",
    label: "志愿设计师",
    icon: "ri-team-line",
    tone: "bg-primary-100 text-primary-700",
  },
];

export interface DistributionSlice {
  label: string;
  value: number;
  color: string;
}

export const distributionTotal = 68;

export const demandDistribution: DistributionSlice[] = [
  { label: "品牌设计", value: 26, color: "oklch(var(--primary-500))" },
  { label: "导视设计", value: 24, color: "oklch(var(--accent-500))" },
  { label: "文创设计", value: 20, color: "oklch(var(--secondary-400))" },
  { label: "研学课程", value: 18, color: "oklch(var(--primary-300))" },
  { label: "品牌形象", value: 12, color: "oklch(var(--background-400))" },
];

export interface TrendPoint {
  month: string;
  value: number;
  landed: number;
}

export const demandTrend: TrendPoint[] = [
  { month: "05-01", value: 12, landed: 7 },
  { month: "05-08", value: 19, landed: 11 },
  { month: "05-15", value: 16, landed: 13 },
  { month: "05-22", value: 27, landed: 18 },
  { month: "05-29", value: 34, landed: 24 },
];

export interface WorkbenchDemand {
  id: string;
  title: string;
  org: string;
  tag: string;
  deadline: string;
  status: string;
  thumb: string;
}

export const workbenchDemands: WorkbenchDemand[] = [
  {
    id: "wd-1",
    title: "马郢村生活节点微更新设计",
    org: "合肥市 · 长丰县马郢村",
    tag: "景观更新",
    deadline: "还剩 6 天",
    status: "招募中",
    thumb:
      "/images/cy-wb-dm-01.jpg",
  },
  {
    id: "wd-2",
    title: "歙县徽文化鱼灯导览系统设计",
    org: "黄山市 · 歙县徽州古城",
    tag: "导视设计",
    deadline: "还剩 5 天",
    status: "招募中",
    thumb:
      "/images/cy-wb-dm-02.jpg",
  },
  {
    id: "wd-3",
    title: "金寨县红色研学课程开发",
    org: "六安市 · 金寨县",
    tag: "课程开发",
    deadline: "还剩 1 天",
    status: "评审中",
    thumb:
      "/images/cy-wb-dm-03.jpg",
  },
  {
    id: "wd-4",
    title: "冯湾村文创产品包装设计",
    org: "宣城市 · 泾县冯湾村",
    tag: "包装设计",
    deadline: "还剩 2 天",
    status: "评审中",
    thumb:
      "/images/cy-wb-dm-04.jpg",
  },
];

export interface WorkbenchCase {
  id: string;
  title: string;
  location: string;
  intro: string;
  tag: string;
  /** 卡片标签组（可选，多标签时优先使用） */
  tags?: string[];
  /** 点击卡片跳转的目标（可选，默认跳案例库） */
  to?: string;
  cover: string;
}

export const workbenchCases: WorkbenchCase[] = [
  {
    id: "wc-chaji",
    title: "查济老宅院落民宿空间设计",
    location: "宣城市 · 泾县查济村",
    intro: "用在地石材、木构与手作织物，把闲置老宅改造成能讲述徽州生活的住宿空间。",
    tag: "空间更新",
    tags: ["乡村空间", "民宿设计"],
    to: "/case/11",
    cover:
      "/images/cj-house-cover-01.jpg",
  },
  {
    id: "wc-maying",
    title: "马郢村乡村空间改造",
    location: "合肥市 · 长丰县马郢村",
    intro: "把村里闲置晒场改造成村民与游客都能停留的共享院落。",
    tag: "空间更新",
    tags: ["乡村空间", "社区营造"],
    to: "/case/10",
    cover:
      "/images/my-village-cover-01.jpg",
  },
  {
    id: "wc-fish",
    title: "汪满田鱼灯民俗IP与文创设计",
    location: "黄山市 · 歙县汪满田村",
    intro: "把传承数百年的汪满田鱼灯，转译成年轻人愿意传播的文创体系。",
    tag: "民俗IP",
    tags: ["民俗IP", "文创开发"],
    to: "/case/9",
    cover:
      "/images/wm-fish-cover-01.jpg",
  },
  {
    id: "wc-snake",
    title: "大邵村 洋蛇灯视觉转译",
    location: "合肥市 · 肥东县大邵村",
    intro: "把传承数百年的洋蛇灯民俗，转译成年轻人愿意传播的视觉语言。",
    tag: "非遗活化",
    tags: ["非遗活化", "文化转译"],
    to: "/case/8",
    cover:
      "/images/cy-village-cover-01.jpg",
  },
  {
    id: "wc-1",
    title: "碧山古村文化品牌设计",
    location: "黄山市 · 碧山村",
    intro: "以在地徽文化为原点，重塑村落品牌视觉与导视系统。",
    tag: "文化振兴",
    cover:
      "/images/cy-wb-case-01.jpg",
  },
  {
    id: "wc-2",
    title: "金寨茶叶文创礼盒设计",
    location: "六安市 · 金寨县",
    intro: "让山间好茶拥有会讲故事的包装，带动乡村特色产业。",
    tag: "产业振兴",
    cover:
      "/images/cy-wb-case-02.jpg",
  },
  {
    id: "wc-3",
    title: "村口口袋公园景观改造",
    location: "安庆市 · 潜山市",
    intro: "用低介入的景观手法，为村民打造可停留的公共客厅。",
    tag: "生态振兴",
    cover:
      "/images/cy-wb-case-03.jpg",
  },
];

export interface RegionItem {
  id: string;
  name: string;
  value: number;
}

export const activeRegions: RegionItem[] = [
  { id: "r1", name: "合肥市", value: 24 },
  { id: "r2", name: "黄山市", value: 18 },
  { id: "r3", name: "六安市", value: 12 },
  { id: "r4", name: "宣城市", value: 8 },
  { id: "r5", name: "安庆市", value: 6 },
];

export interface MapCity {
  id: string;
  name: string;
  x: number;
  y: number;
  count: number;
  color: string;
}

export const mapCities: MapCity[] = [
  { id: "xuancheng", name: "宣城市", x: 289, y: 305, count: 6, color: "oklch(var(--secondary-600))" },
  { id: "luan", name: "六安市", x: 156, y: 249, count: 12, color: "oklch(var(--primary-500))" },
  { id: "anqing", name: "安庆市", x: 188, y: 334, count: 9, color: "oklch(var(--accent-500))" },
  { id: "huangshan", name: "黄山市", x: 264, y: 391, count: 15, color: "oklch(var(--primary-600))" },
];