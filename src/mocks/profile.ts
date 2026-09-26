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
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(135)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23588157%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23a3b18a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
  },
  {
    id: "w2",
    title: "山野茶事·品牌视觉系统",
    location: "福建·屏南",
    cover:
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(270)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231d3557%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23457b9d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
  },
  {
    id: "w3",
    title: "梯田米香·农产品包装升级",
    location: "贵州·加榜",
    cover:
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(90)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231d3557%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23457b9d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
  },
  {
    id: "w4",
    title: "古井旁·乡村公共空间改造",
    location: "浙江·松阳",
    cover:
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(225)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23264653%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232a9d8f%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
  },
  {
    id: "w5",
    title: "蓝染乡·非遗文创礼盒",
    location: "云南·大理",
    cover:
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(135)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f5132%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d4a373%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E",
  },
  {
    id: "w6",
    title: "禾田村·市集视觉与导视系统",
    location: "江苏·兴化",
    cover:
      "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(90)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23283618%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bc6c25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E",
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