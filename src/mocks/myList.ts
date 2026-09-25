export interface MyListItem {
  id: string;
  title: string;
  location: string;
  status: string;
  meta: string;
  cover: string;
}

export const myApplications: MyListItem[] = [
  {
    id: "a1",
    title: "为村口老祠堂设计一套文化标识系统",
    location: "福建·龙岩 培田古村",
    status: "待审核",
    meta: "报名时间：2026-03-12 · 需求方：培田村委",
    cover:
      "https://readdy.ai/api/search-image?query=Ancient%20Chinese%20ancestral%20hall%20with%20wooden%20brackets%20and%20stone%20courtyard%20in%20a%20green%20mountain%20village%2C%20soft%20morning%20light%2C%20warm%20earthy%20tones%2C%20architectural%20documentary%20photography%2C%20clean%20composition%2C%20high%20detail&width=720&height=480&seq=cy-my-apply-1&orientation=landscape",
  },
  {
    id: "a2",
    title: "把村民口述的畲族故事转译成插画绘本",
    location: "江西·上饶 双溪畲寨",
    status: "已通过",
    meta: "报名时间：2026-02-28 · 需求方：双溪畲寨文化站",
    cover:
      "https://readdy.ai/api/search-image?query=Hand%20drawn%20folk%20story%20illustration%20sketches%20spread%20on%20a%20desk%20with%20color%20pencils%20and%20paper%2C%20ethnic%20Chinese%20village%20motifs%2C%20soft%20warm%20light%2C%20cozy%20studio%20scene%2C%20green%20and%20orange%20accents%2C%20high%20detail&width=720&height=480&seq=cy-my-apply-2&orientation=landscape",
  },
];

export const myWorks: MyListItem[] = [
  {
    id: "w1",
    title: "山野茶事·品牌视觉系统",
    location: "福建·屏南",
    status: "已落地",
    meta: "完成于 2025-11 · 收录于乡村设计案例库",
    cover:
      "https://readdy.ai/api/search-image?query=Village%20tea%20brand%20identity%20design%20flat%20lay%20on%20a%20wooden%20table%20with%20green%20packaging%20cards%2C%20logo%20sketches%2C%20tea%20leaves%20and%20kraft%20paper%2C%20soft%20natural%20daylight%2C%20minimal%20editorial%20product%20photography%2C%20green%20and%20cream%20palette%2C%20high%20detail&width=720&height=480&seq=cy-my-work-1&orientation=landscape",
  },
  {
    id: "w2",
    title: "梯田米香·农产品包装升级",
    location: "贵州·加榜",
    status: "已落地",
    meta: "完成于 2025-09 · 收录于乡村设计案例库",
    cover:
      "https://readdy.ai/api/search-image?query=Premium%20rice%20product%20packaging%20design%20mockup%20with%20green%20and%20kraft%20paper%20bags%20beside%20terraced%20rice%20fields%2C%20soft%20warm%20sunlight%2C%20clean%20simple%20background%2C%20minimal%20editorial%20photography%2C%20earthy%20green%20tones%2C%20high%20detail&width=720&height=480&seq=cy-my-work-2&orientation=landscape",
  },
];