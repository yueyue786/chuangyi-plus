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
      "https://readdy.ai/api/search-image?query=Rural%20village%20street%20corner%20micro%20renewal%20design%20sketch%20with%20wooden%20bench%2C%20green%20plants%20and%20white%20Hui-style%20walls%2C%20soft%20daylight%2C%20clean%20minimal%20composition%2C%20green%20and%20warm%20neutral%20tones&width=200&height=150&seq=cy-wb-dm-01&orientation=landscape",
  },
  {
    id: "wd-2",
    title: "歙县徽文化鱼灯导览系统设计",
    org: "黄山市 · 歙县徽州古城",
    tag: "导视设计",
    deadline: "还剩 5 天",
    status: "招募中",
    thumb:
      "https://readdy.ai/api/search-image?query=Traditional%20Huizhou%20fish%20lantern%20wayfinding%20sign%20system%20design%20display%20in%20an%20old%20village%20lane%2C%20warm%20evening%20light%2C%20clean%20minimal%20composition%2C%20green%20and%20warm%20tones&width=200&height=150&seq=cy-wb-dm-02&orientation=landscape",
  },
  {
    id: "wd-3",
    title: "金寨县红色研学课程开发",
    org: "六安市 · 金寨县",
    tag: "课程开发",
    deadline: "还剩 1 天",
    status: "评审中",
    thumb:
      "https://readdy.ai/api/search-image?query=Red%20culture%20study%20course%20material%20mockup%20with%20notebook%2C%20map%20and%20pencil%20on%20a%20wooden%20table%2C%20soft%20natural%20light%2C%20clean%20minimal%20background%2C%20warm%20tones&width=200&height=150&seq=cy-wb-dm-03&orientation=landscape",
  },
  {
    id: "wd-4",
    title: "冯湾村文创产品包装设计",
    org: "宣城市 · 泾县冯湾村",
    tag: "包装设计",
    deadline: "还剩 2 天",
    status: "评审中",
    thumb:
      "https://readdy.ai/api/search-image?query=Rural%20specialty%20product%20packaging%20design%20mockup%20with%20kraft%20paper%20and%20green%20illustration%20labels%20on%20a%20rustic%20wooden%20table%2C%20clean%20simple%20background%2C%20warm%20tones&width=200&height=150&seq=cy-wb-dm-04&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20restored%20old%20courtyard%20home%20turned%20into%20a%20boutique%20homestay%20interior%20in%20a%20Huizhou%20village%2C%20wooden%20structure%20with%20a%20bright%20skywell%2C%20local%20stone%20and%20timber%20materials%2C%20simple%20warm%20furnishings%20and%20handmade%20fabric%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-cover-01&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20completed%20rural%20public%20courtyard%20renovation%20in%20a%20Chinese%20village%2C%20a%20former%20drying%20ground%20turned%20into%20a%20shared%20courtyard%20with%20wooden%20benches%2C%20a%20shade%20pergola%20and%20planted%20greenery%2C%20local%20brick%20and%20stone%20paving%2C%20rural%20houses%20behind%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=my-village-cover-01&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20joyful%20traditional%20Chinese%20fish%20lantern%20folk%20parade%20in%20a%20Huizhou%20village%20at%20night%2C%20villagers%20holding%20colorful%20glowing%20fish%20shaped%20lanterns%2C%20warm%20festive%20lighting%2C%20white%20walled%20ancient%20houses%20behind%20the%20crowd%2C%20deep%20green%20and%20amber%20tones%2C%20clean%20composition%2C%20high%20detail&width=800&height=600&seq=wm-fish-cover-01&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Stylized%20guofeng%20flat%20illustration%20of%20a%20traditional%20Chinese%20snake%20lantern%20folk%20performance%2C%20villagers%20dancing%20and%20carrying%20a%20long%20illuminated%20serpent%20lantern%20made%20of%20bamboo%20and%20painted%20paper%2C%20deep%20green%20and%20warm%20gold%20palette%2C%20clean%20minimal%20light%20background%2C%20high%20detail&width=800&height=600&seq=cy-village-cover-01&orientation=landscape",
  },
  {
    id: "wc-1",
    title: "碧山古村文化品牌设计",
    location: "黄山市 · 碧山村",
    intro: "以在地徽文化为原点，重塑村落品牌视觉与导视系统。",
    tag: "文化振兴",
    cover:
      "https://readdy.ai/api/search-image?query=Landscape%20photo%20of%20a%20rural%20village%20brand%20identity%20showcase%20with%20printed%20logo%20cards%2C%20wooden%20signage%20and%20canvas%20tote%20bags%20arranged%20in%20front%20of%20an%20old%20white-walled%20Hui-style%20village%20lane%2C%20soft%20daylight%2C%20clean%20minimal%20composition%2C%20green%20and%20warm%20neutral%20tones%2C%20high%20detail&width=800&height=560&seq=cy-wb-case-01&orientation=landscape",
  },
  {
    id: "wc-2",
    title: "金寨茶叶文创礼盒设计",
    location: "六安市 · 金寨县",
    intro: "让山间好茶拥有会讲故事的包装，带动乡村特色产业。",
    tag: "产业振兴",
    cover:
      "https://readdy.ai/api/search-image?query=Landscape%20photo%20of%20rural%20tea%20packaging%20and%20gift%20boxes%20with%20minimal%20green%20illustrations%20arranged%20on%20a%20rustic%20wooden%20table%2C%20soft%20natural%20light%2C%20clean%20simple%20background%2C%20green%20and%20warm%20tones%2C%20high%20detail&width=800&height=560&seq=cy-wb-case-02&orientation=landscape",
  },
  {
    id: "wc-3",
    title: "村口口袋公园景观改造",
    location: "安庆市 · 潜山市",
    intro: "用低介入的景观手法，为村民打造可停留的公共客厅。",
    tag: "生态振兴",
    cover:
      "https://readdy.ai/api/search-image?query=Landscape%20photo%20of%20a%20renovated%20rural%20pocket%20park%20with%20a%20wooden%20pavilion%2C%20stone%20path%2C%20green%20plants%20and%20a%20small%20pond%20in%20a%20Chinese%20village%2C%20soft%20morning%20light%2C%20modern%20minimal%20rural%20architecture%2C%20green%20tones%2C%20high%20detail&width=800&height=560&seq=cy-wb-case-03&orientation=landscape",
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