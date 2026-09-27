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
      "/images/cy-my-apply-1.jpg",
  },
  {
    id: "a2",
    title: "把村民口述的畲族故事转译成插画绘本",
    location: "江西·上饶 双溪畲寨",
    status: "已通过",
    meta: "报名时间：2026-02-28 · 需求方：双溪畲寨文化站",
    cover:
      "/images/cy-my-apply-2.jpg",
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
      "/images/cy-my-work-1.jpg",
  },
  {
    id: "w2",
    title: "梯田米香·农产品包装升级",
    location: "贵州·加榜",
    status: "已落地",
    meta: "完成于 2025-09 · 收录于乡村设计案例库",
    cover:
      "/images/cy-my-work-2.jpg",
  },
];