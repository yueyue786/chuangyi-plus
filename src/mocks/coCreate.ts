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
      "/images/cy-proj-wall.jpg",
  },
  {
    id: "p2",
    title: "山野茶事·品牌视觉系统",
    location: "福建·屏南",
    status: "共创中",
    stage: 4,
    stageTotal: 6,
    cover:
      "/images/cy-proj-brand.jpg",
  },
  {
    id: "p3",
    title: "梯田米香·农产品包装升级",
    location: "贵州·加榜",
    status: "共创中",
    stage: 2,
    stageTotal: 6,
    cover:
      "/images/cy-proj-pack.jpg",
  },
  {
    id: "p4",
    title: "古井旁·乡村公共空间改造",
    location: "浙江·松阳",
    status: "共创中",
    stage: 5,
    stageTotal: 6,
    cover:
      "/images/cy-proj-space.jpg",
  },
  {
    id: "p5",
    title: "老粮仓·乡村文化展厅设计",
    location: "江西·婺源",
    status: "共创中",
    stage: 1,
    stageTotal: 6,
    cover:
      "/images/cy-proj-exhibit.jpg",
  },
];