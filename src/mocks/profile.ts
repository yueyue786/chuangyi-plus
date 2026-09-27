export interface ProfileStat {
  value: string;
  label: string;
}

export const profileStats: ProfileStat[] = [
  { value: "12,80", label: "公益设计时长" },
  { value: "6", label: "参与乡村" },
  { value: "4", label: "完成项目" },
  { value: "11", label: "设计成果" },
];

export const skillTags = ["视觉系统", "包装设计", "插画绘制", "品牌叙事", "田野调研", "非遗活化"];

export interface Badge {
  id: string;
  name: string;
  desc: string;
  icon: string;
  tone: "primary" | "accent" | "secondary";
}

export const badges: Badge[] = [
  { id: "b1", name: "田野探路者", desc: "完成 5 次驻村田野调研", icon: "ri-roadster-line", tone: "primary" },
  { id: "b2", name: "共创先锋", desc: "参与 3 个以上共创项目", icon: "ri-hand-heart-line", tone: "accent" },
  { id: "b3", name: "落地达人", desc: "2 件设计成果成功落地", icon: "ri-plant-line", tone: "secondary" },
  { id: "b4", name: "故事讲述者", desc: "完成 1 份口述史整理", icon: "ri-book-open-line", tone: "primary" },
  { id: "b5", name: "非遗守护", desc: "参与非遗活化专项", icon: "ri-ancient-gate-line", tone: "accent" },
  { id: "b6", name: "全勤共创", desc: "连续 3 个月活跃共创", icon: "ri-calendar-check-line", tone: "secondary" },
];

export interface WorkItem {
  id: string;
  title: string;
  location: string;
  cover: string;
}

export const works: WorkItem[] = [
  {
    id: "w1",
    title: "青砖巷·村口墙绘叙事",
    location: "安徽·宏村",
    cover:
      "/images/cy-proj-wall.jpg",
  },
  {
    id: "w2",
    title: "山野茶事·品牌视觉系统",
    location: "福建·屏南",
    cover:
      "/images/cy-proj-brand.jpg",
  },
  {
    id: "w3",
    title: "梯田米香·农产品包装升级",
    location: "贵州·加榜",
    cover:
      "/images/cy-proj-pack.jpg",
  },
  {
    id: "w4",
    title: "古井旁·乡村公共空间改造",
    location: "浙江·松阳",
    cover:
      "/images/cy-proj-space.jpg",
  },
  {
    id: "w5",
    title: "蓝染乡·非遗文创礼盒",
    location: "云南·大理",
    cover:
      "/images/cy-case-heritage.jpg",
  },
  {
    id: "w6",
    title: "禾田村·市集视觉与导视系统",
    location: "江苏·兴化",
    cover:
      "/images/cy-case-market.jpg",
  },
];

export interface WorkbenchGroup {
  group: string;
  items: { id: string; label: string; icon: string; hint: string; badge?: string }[];
}

export const workbenchGroups: WorkbenchGroup[] = [
  {
    group: "我的工作台",
    items: [
      { id: "my-co", label: "我的共创项目", icon: "ri-lightbulb-flash-line", hint: "3 个进行中", badge: "3" },
      { id: "my-apply", label: "报名中的需求", icon: "ri-file-list-3-line", hint: "2 个待审核" },
      { id: "my-field", label: "田野调研记录", icon: "ri-map-pin-line", hint: "8 篇笔记" },
      { id: "my-mentor", label: "导师指导反馈", icon: "ri-chat-quote-line", hint: "5 条新反馈", badge: "5" },
      { id: "my-portfolio", label: "我的作品集", icon: "ri-gallery-view-2", hint: "11 件作品" },
      { id: "my-archive", label: "公益实践档案", icon: "ri-award-line", hint: "累计 12,80 小时" },
    ],
  },
  {
    group: "平台服务",
    items: [
      { id: "nav-workbench", label: "我的工作台", icon: "ri-dashboard-line", hint: "项目与报名总览" },
      { id: "nav-messages", label: "站内消息", icon: "ri-notification-3-line", hint: "报名与项目通知" },
      { id: "nav-demands", label: "浏览需求大厅", icon: "ri-file-list-3-line", hint: "发现更多乡村需求" },
    ],
  },
];

export interface CommonFeature {
  id: string;
  label: string;
  icon: string;
  hint: string;
}

export const commonFeatures: CommonFeature[] = [
  { id: "f1", label: "我的关注", icon: "ri-star-line", hint: "12 个关注" },
  { id: "f2", label: "我的收藏", icon: "ri-bookmark-line", hint: "34 条收藏" },
  { id: "f3", label: "浏览记录", icon: "ri-history-line", hint: "最近 7 天" },
  { id: "f4", label: "帮助与反馈", icon: "ri-question-line", hint: "常见问题" },
  { id: "f5", label: "设置", icon: "ri-settings-3-line", hint: "账号与通知" },
];