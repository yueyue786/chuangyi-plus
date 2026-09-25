export interface CoStat {
  value: string;
  unit: string;
  label: string;
}

export const coStats: CoStat[] = [
  { value: "5", unit: "个", label: "进行中项目" },
  { value: "14", unit: "人", label: "参与学生" },
  { value: "5", unit: "位", label: "指导导师" },
];

export interface FlowStep {
  step: number;
  title: string;
  icon: string;
  desc: string;
}

export const flowSteps: FlowStep[] = [
  {
    step: 1,
    title: "需求征集",
    icon: "ri-megaphone-line",
    desc: "走访村庄，把村民口述的真实诉求整理成清晰的设计需求清单。",
  },
  {
    step: 2,
    title: "审核立项",
    icon: "ri-shield-check-line",
    desc: "由导师与公益团队评估可行性，确定预算、周期与共创团队。",
  },
  {
    step: 3,
    title: "设计调研",
    icon: "ri-compass-3-line",
    desc: "青年设计师驻村田野调研，记录方言、手艺、风物与在地纹样。",
  },
  {
    step: 4,
    title: "方案设计",
    icon: "ri-pen-nib-line",
    desc: "在导师指导下完成视觉、空间与产品方案，与村民反复共议打磨。",
  },
  {
    step: 5,
    title: "落地实施",
    icon: "ri-hammer-line",
    desc: "方案进村施工与制作，设计成果真正留在村庄并投入使用。",
  },
  {
    step: 6,
    title: "评估归档",
    icon: "ri-archive-2-line",
    desc: "复盘项目成效，把方法、图纸与调研报告沉淀进乡村案例库。",
  },
];

export interface CoProject {
  id: string;
  title: string;
  location: string;
  status: string;
  stage: number;
  stageTotal: number;
  cover: string;
}

export const coProjects: CoProject[] = [
  {
    id: "p1",
    title: "青砖巷·村口墙绘叙事",
    location: "安徽·宏村",
    status: "共创中",
    stage: 3,
    stageTotal: 6,
    cover:
      "https://readdy.ai/api/search-image?query=Stunning%20village%20wall%20mural%20painting%20with%20green%20hills%20and%20rice%20terraces%20on%20a%20white%20old%20village%20wall%2C%20young%20designers%20painting%20outdoors%2C%20warm%20afternoon%20light%2C%20documentary%20photography%20style%2C%20vivid%20green%20and%20earthy%20tones%2C%20high%20detail%2C%20clean%20composition&width=720&height=480&seq=cy-proj-wall&orientation=landscape",
  },
  {
    id: "p2",
    title: "山野茶事·品牌视觉系统",
    location: "福建·屏南",
    status: "共创中",
    stage: 4,
    stageTotal: 6,
    cover:
      "https://readdy.ai/api/search-image?query=Village%20tea%20brand%20identity%20design%20flat%20lay%20on%20a%20wooden%20table%20with%20green%20packaging%20cards%2C%20logo%20sketches%2C%20tea%20leaves%20and%20kraft%20paper%2C%20soft%20natural%20daylight%2C%20minimal%20editorial%20product%20photography%2C%20green%20and%20cream%20palette%2C%20high%20detail&width=720&height=480&seq=cy-proj-brand&orientation=landscape",
  },
  {
    id: "p3",
    title: "梯田米香·农产品包装升级",
    location: "贵州·加榜",
    status: "共创中",
    stage: 2,
    stageTotal: 6,
    cover:
      "https://readdy.ai/api/search-image?query=Premium%20rice%20product%20packaging%20design%20mockup%20with%20green%20and%20kraft%20paper%20bags%20beside%20terraced%20rice%20fields%2C%20soft%20warm%20sunlight%2C%20clean%20simple%20background%2C%20minimal%20editorial%20photography%2C%20earthy%20green%20tones%2C%20high%20detail&width=720&height=480&seq=cy-proj-pack&orientation=landscape",
  },
  {
    id: "p4",
    title: "古井旁·乡村公共空间改造",
    location: "浙江·松阳",
    status: "共创中",
    stage: 5,
    stageTotal: 6,
    cover:
      "https://readdy.ai/api/search-image?query=Renovated%20village%20public%20plaza%20with%20wooden%20pavilion%2C%20stone%20path%20and%20green%20plants%2C%20traditional%20Chinese%20rural%20architecture%20blended%20with%20modern%20minimal%20design%2C%20soft%20daylight%2C%20warm%20green%20tones%2C%20architectural%20photography%2C%20high%20detail&width=720&height=480&seq=cy-proj-space&orientation=landscape",
  },
  {
    id: "p5",
    title: "老粮仓·乡村文化展厅设计",
    location: "江西·婺源",
    status: "共创中",
    stage: 1,
    stageTotal: 6,
    cover:
      "https://readdy.ai/api/search-image?query=Converted%20old%20granary%20into%20a%20rural%20culture%20exhibition%20hall%20with%20wooden%20structure%2C%20warm%20spotlights%20and%20green%20plants%2C%20minimal%20modern%20interior%20design%2C%20soft%20ambient%20light%2C%20high%20detail&width=720&height=480&seq=cy-proj-exhibit&orientation=landscape",
  },
];