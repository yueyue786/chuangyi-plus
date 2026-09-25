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
      "https://readdy.ai/api/search-image?query=Ancient%20Chinese%20ancestral%20hall%20with%20wooden%20brackets%20and%20stone%20courtyard%20in%20a%20green%20mountain%20village%2C%20soft%20morning%20light%2C%20warm%20earthy%20tones%2C%20architectural%20documentary%20photography%2C%20clean%20composition%2C%20high%20detail&width=720&height=480&seq=cy-demand-ancestral&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Camellia%20oil%20glass%20bottles%20with%20minimal%20green%20labels%20styled%20on%20a%20wooden%20board%20with%20dried%20flowers%2C%20simple%20clean%20background%2C%20soft%20natural%20light%2C%20editorial%20product%20photography%2C%20warm%20green%20tones%2C%20high%20detail&width=720&height=480&seq=cy-demand-oil&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Hand%20drawn%20folk%20story%20illustration%20sketches%20spread%20on%20a%20desk%20with%20color%20pencils%20and%20paper%2C%20ethnic%20Chinese%20village%20motifs%2C%20soft%20warm%20light%2C%20cozy%20studio%20scene%2C%20green%20and%20orange%20accents%2C%20high%20detail&width=720&height=480&seq=cy-demand-story&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Minimal%20village%20history%20museum%20interior%20with%20wooden%20exhibition%20walls%2C%20warm%20spotlights%20and%20green%20plants%2C%20traditional%20Chinese%20rural%20craft%20displays%2C%20soft%20ambient%20light%2C%20modern%20minimal%20design%2C%20high%20detail&width=720&height=480&seq=cy-demand-museum&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Traditional%20brown%20sugar%20blocks%20with%20craft%20paper%20packaging%20and%20minimal%20logo%20cards%20on%20a%20rustic%20wooden%20surface%2C%20soft%20warm%20daylight%2C%20clean%20simple%20background%2C%20editorial%20product%20photography%2C%20earthy%20tones%2C%20high%20detail&width=720&height=480&seq=cy-demand-brownsugar&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Cozy%20rural%20homestay%20interior%20with%20wooden%20beams%2C%20woven%20textiles%20and%20greenery%20by%20large%20windows%20overlooking%20rice%20terraces%2C%20soft%20morning%20light%2C%20warm%20natural%20tones%2C%20interior%20photography%2C%20high%20detail&width=720&height=480&seq=cy-demand-homestay&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Handwoven%20bamboo%20craft%20objects%20and%20modern%20minimal%20design%20prototypes%20arranged%20on%20a%20light%20wooden%20table%2C%20soft%20natural%20light%2C%20clean%20simple%20background%2C%20editorial%20craft%20photography%2C%20warm%20green%20tones%2C%20high%20detail&width=720&height=480&seq=cy-demand-bamboo&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Colorful%20illustrated%20school%20culture%20wall%20in%20a%20rural%20primary%20school%20courtyard%20with%20green%20trees%20and%20old%20brick%20buildings%2C%20soft%20afternoon%20light%2C%20warm%20friendly%20atmosphere%2C%20documentary%20photography%2C%20green%20and%20orange%20accents%2C%20high%20detail&width=720&height=480&seq=cy-demand-schoolwall&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Handmade%20sweet%20potato%20starch%20noodles%20in%20craft%20paper%20packaging%20with%20minimal%20green%20labels%20on%20a%20rustic%20table%2C%20soft%20warm%20light%2C%20clean%20simple%20background%2C%20editorial%20food%20photography%2C%20earthy%20tones%2C%20high%20detail&width=720&height=480&seq=cy-demand-noodle&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Graphic%20poster%20design%20mockups%20for%20a%20rural%20village%20campaign%20spread%20on%20a%20desk%20with%20green%20and%20orange%20color%20palette%2C%20soft%20studio%20light%2C%20clean%20minimal%20background%2C%20editorial%20design%20photography%2C%20high%20detail&width=720&height=480&seq=cy-demand-poster&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Indigo%20tie%20dye%20textiles%20and%20gift%20box%20design%20with%20natural%20indigo%20blue%20and%20green%20tones%20on%20a%20light%20wooden%20surface%2C%20soft%20warm%20light%2C%20clean%20simple%20background%2C%20editorial%20craft%20photography%2C%20high%20detail&width=720&height=480&seq=cy-demand-tiedye&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Rural%20village%20market%20stalls%20with%20unified%20green%20canopy%20and%20minimal%20signage%2C%20fresh%20produce%20and%20flowers%2C%20soft%20morning%20light%2C%20warm%20friendly%20atmosphere%2C%20documentary%20photography%2C%20green%20tones%2C%20high%20detail&width=720&height=480&seq=cy-demand-market&orientation=landscape",
  },
];