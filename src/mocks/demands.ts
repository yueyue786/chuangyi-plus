export interface DemandItem {
  id: string;
  title: string;
  village: string;
  location: string;
  category: string;
  status: string;
  applicants: number;
  quota: number;
  cover: string;
}

export const demandCategories = ["全部", "空间环境", "品牌传播", "产品包装", "文化转译"];

export const demandStatuses = ["全部", "招募中", "共创中", "已落地"];

export const demandList: DemandItem[] = [
  {
    id: "d1",
    title: "为村口老祠堂设计一套文化标识系统",
    village: "培田古村",
    location: "福建·龙岩",
    category: "空间环境",
    status: "招募中",
    applicants: 18,
    quota: 6,
    cover:
      "/images/cy-demand-ancestral.jpg",
  },
  {
    id: "d2",
    title: "地方山茶油需要一套年轻化的包装与故事",
    village: "油坊坳村",
    location: "湖南·永州",
    category: "产品包装",
    status: "招募中",
    applicants: 24,
    quota: 5,
    cover:
      "/images/cy-demand-oil.jpg",
  },
  {
    id: "d3",
    title: "把村民口述的畲族故事转译成插画绘本",
    village: "双溪畲寨",
    location: "江西·上饶",
    category: "文化转译",
    status: "招募中",
    applicants: 31,
    quota: 4,
    cover:
      "/images/cy-demand-story.jpg",
  },
  {
    id: "d4",
    title: "村史馆需要一套完整的导视与展陈视觉",
    village: "塘东村",
    location: "广东·潮州",
    category: "空间环境",
    status: "共创中",
    applicants: 12,
    quota: 5,
    cover:
      "/images/cy-demand-museum.jpg",
  },
  {
    id: "d5",
    title: "为古法红糖打造一整套品牌视觉与包装",
    village: "蔗里村",
    location: "广西·河池",
    category: "品牌传播",
    status: "共创中",
    applicants: 27,
    quota: 4,
    cover:
      "/images/cy-demand-brownsugar.jpg",
  },
  {
    id: "d6",
    title: "为乡村民宿设计在地文化主题墙与空间软装",
    village: "云上村",
    location: "云南·元阳",
    category: "空间环境",
    status: "已落地",
    applicants: 20,
    quota: 5,
    cover:
      "/images/cy-demand-homestay.jpg",
  },
  {
    id: "d7",
    title: "本地竹编手艺需要一组现代文创产品设计",
    village: "竹里村",
    location: "四川·崇州",
    category: "文化转译",
    status: "招募中",
    applicants: 15,
    quota: 6,
    cover:
      "/images/cy-demand-bamboo.jpg",
  },
  {
    id: "d8",
    title: "乡村小学需要一面会讲故事的校园文化墙",
    village: "石桥村",
    location: "安徽·黄山",
    category: "空间环境",
    status: "已落地",
    applicants: 22,
    quota: 4,
    cover:
      "/images/cy-demand-schoolwall.jpg",
  },
  {
    id: "d9",
    title: "为手工红薯粉条设计包装与电商主图",
    village: "粉坊村",
    location: "河南·信阳",
    category: "产品包装",
    status: "招募中",
    applicants: 16,
    quota: 5,
    cover:
      "/images/cy-demand-noodle.jpg",
  },
  {
    id: "d10",
    title: "村庄需要一套统一的宣传片视觉与海报体系",
    village: "禾田村",
    location: "江苏·兴化",
    category: "品牌传播",
    status: "共创中",
    applicants: 19,
    quota: 4,
    cover:
      "/images/cy-demand-poster.jpg",
  },
  {
    id: "d11",
    title: "古法扎染需要一套可体验的文创礼盒设计",
    village: "蓝染乡",
    location: "云南·大理",
    category: "文化转译",
    status: "招募中",
    applicants: 25,
    quota: 5,
    cover:
      "/images/cy-demand-tiedye.jpg",
  },
  {
    id: "d12",
    title: "为村口市集设计统一的摊位视觉与导视",
    village: "溪畔村",
    location: "浙江·丽水",
    category: "品牌传播",
    status: "已落地",
    applicants: 14,
    quota: 4,
    cover:
      "/images/cy-demand-market.jpg",
  },
];