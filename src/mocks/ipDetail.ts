export const featuredIpCover =
  "/images/4c9ddc23d7aa371acdd9801d9c90f6ee.jpg";

export interface IpMetric {
  label: string;
  value: string;
}

export interface IpProfileItem {
  label: string;
  value: string;
}

export interface IpMember {
  name: string;
  role: string;
  detail: string;
  tone: "primary" | "accent" | "secondary";
}

export interface IpDetailContent {
  title: string;
  subtitle: string;
  location: string;
  tags: string[];
  cover: string;
  summary: string;
  highlights: IpMetric[];
  background: string[];
  profile: IpProfileItem[];
  expressions: string[];
  actions: string[];
  merchandise: string[];
  members: IpMember[];
}

export const ipDetails: Record<string, IpDetailContent> = {
  "1": {
    title: "肥东洋蛇灯 IP 形象设计",
    subtitle: "国家级非遗 · 洋小蛇 IP 形象与延展设计",
    location: "安徽 · 合肥肥东",
    tags: ["非遗文创", "IP设计"],
    cover: featuredIpCover,
    summary:
      "以国家级非物质文化遗产「肥东洋蛇灯」为原型，孵化吉祥物形象「洋小蛇」，用年轻化的 IP 语言，让传统灯彩被更多人看见、记住并喜爱。",
    highlights: [
      { label: "项目类型", value: "非遗 IP 设计" },
      { label: "角色原型", value: "肥东洋蛇灯" },
      { label: "应用延展", value: "表情 · 动作 · 衍生品" },
      { label: "出品年份", value: "2024" },
    ],
    background: [
      "肥东洋蛇灯是安徽省合肥市肥东县国家级非物质文化遗产，拥有六百余年历史，源自当地元宵节祈福民俗。",
      "整条蛇灯由数百节竹篾骨架拼接而成，蒙上彩绸与红灯，夜里巡游时灯火连绵、蜿蜒如蛇，是江淮地区独具特色的大型传统灯彩民俗。",
      "创作团队希望为这项古老的非遗找到一个属于这个时代的形象载体——于是「洋小蛇」诞生了：它保留了洋蛇灯的灯彩与鳞片特征，又以圆润可爱的造型，让年轻人愿意靠近、愿意分享。",
    ],
    profile: [
      { label: "角色名称", value: "洋小蛇" },
      { label: "英文名", value: "Yang Xiaoshe" },
      { label: "角色身份", value: "肥东洋蛇灯文化使者" },
      { label: "物种设定", value: "蛇（灯彩灵兽）" },
      { label: "性格", value: "活泼开朗、乐观爱笑" },
      { label: "出生地", value: "安徽 · 合肥肥东县" },
      { label: "象征意义", value: "吉祥如意、平安喜乐" },
      { label: "核心 Slogan", value: "灯火连绵 · 福泽肥东" },
    ],
    expressions: ["开心", "眨眼", "惊喜", "害羞", "调皮", "得意", "俏皮", "憨厚"],
    actions: ["敲锣鼓", "放烟花", "闹元宵", "迎财接福", "甜甜睡"],
    merchandise: [
      "毛绒玩偶",
      "徽章 / 胸针",
      "贴纸",
      "帆布包",
      "手机壳",
      "亚克力立牌",
      "钥匙扣",
      "笔记本",
      "水杯",
      "红包袋",
    ],
    members: [
      {
        name: "肥东非遗项目组",
        role: "设计团队",
        detail: "IP 形象塑造 · 视觉延展设计",
        tone: "primary",
      },
      {
        name: "指导老师",
        role: "指导老师",
        detail: "非遗文创设计方向",
        tone: "accent",
      },
      {
        name: "肥东县文化馆",
        role: "合作单位",
        detail: "肥东洋蛇灯非遗保护单位",
        tone: "secondary",
      },
    ],
  },
};

export const defaultIpContent: IpDetailContent = ipDetails["1"];