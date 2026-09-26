export const featuredIpCover =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(225)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231b4332%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2352b788%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

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