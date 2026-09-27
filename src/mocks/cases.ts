export type CaseOrientation = "landscape" | "portrait" | "square";

export interface CaseItem {
  id: string;
  title: string;
  type: string;
  location: string;
  intro: string;
  tags: string[];
  team: string;
  views: number;
  stage: string;
  cover: string;
  /** 卡片内 3D 轮播图组：封面图 / 侧面图 / 细节图 / 衍生品图 */
  images: string[];
  orientation: CaseOrientation;
  /** 设计者 / 指导老师（可选，用于卡片展示） */
  designer?: string;
  advisor?: string;
  /** 封面是否使用单图 object-cover 展示（不使用 3D 轮播） */
  plainCover?: boolean;
}

export const caseTypes = ["全部", "UI设计", "品牌包装", "文化导览", "非遗文创", "空间改造"];

export const caseList: CaseItem[] = [
  {
    id: "c1",
    title: "徽州文化视域下歙县瑶礼民宿伴手礼设计",
    type: "非遗文创",
    location: "安徽 · 黄山歙县",
    intro: "以徽州文化为脉络，为歙县瑶礼民宿打造书签、鲜果与文具等系列伴手礼。",
    tags: ["文旅伴手礼", "徽州文化"],
    team: "许嘉琳团队",
    views: 5200,
    stage: "5/5",
    orientation: "landscape",
    cover:
      "/images/1507aecc-9a55-4cb5-9b8a-dd8cef6877cb_compressed_-A32.webp",
    images: [
      "/images/1507aecc-9a55-4cb5-9b8a-dd8cef6877cb_compressed_-A32.webp",
      "/images/51eb82fd-7ccc-4878-a37f-ece440629124_compressed_A3-1.webp",
      "/images/b084372feb4ca48ad61b4fc4076dc17f.jpg",
      "/images/a6a4feac-615b-47b9-852a-d515a6f5e25b_compressed_unnamed.webp",
    ],
  },
  {
    id: "c2",
    title: "歙县德和山庄民宿小程序界面设计",
    type: "UI设计",
    location: "安徽 · 黄山歙县",
    intro: "为德和山庄量身打造的数字化服务小程序，包含品牌图标、交互弹窗卡片及线下落地展板，用 UI 设计提升民宿的线上引流与用户体验。",
    tags: ["UI设计", "民宿小程序", "文旅数字化"],
    team: "安徽农业大学 · 林学与园林学院",
    designer: "吕彭怡然",
    advisor: "张珺",
    views: 3260,
    stage: "5/5",
    orientation: "landscape",
    plainCover: true,
    cover:
      "/images/c0256792b048da73aeb9a0144aceff4c.jpg",
    images: [
      "/images/c0256792b048da73aeb9a0144aceff4c.jpg",
      "/images/dfd678bf-8234-4542-8354-74dc246f6431_compressed_unnamed.webp",
      "/images/430f58e97967e137c31460f86cfd8bfa.jpg",
      "/images/cf573c84-3f8b-4207-af35-7d938ad669b1_compressed_221152641.webp",
    ],
  },
  {
    id: "c8",
    title: "大邵村 洋蛇灯视觉转译",
    type: "非遗文创",
    location: "安徽 · 合肥肥东大邵村",
    intro: "把传承数百年的洋蛇灯民俗，转译成一套年轻人愿意传播的视觉语言。",
    tags: ["非遗活化", "文化转译"],
    team: "安徽农业大学 · 林学与园林学院",
    designer: "杨欢欢",
    advisor: "张玮",
    views: 1860,
    stage: "4/6",
    orientation: "landscape",
    plainCover: true,
    cover:
      "/images/a91f8bff-b198-4c93-9431-5b6c8d24e3eb_compressed_22115334--1.webp",
    images: [
      "/images/cy-village-cover-01.jpg",
      "/images/8800cf2eadddc98d2321f824a1b7c9ab.jpg",
      "/images/0ae3daeb72acf469f241fd2f98a3e155.jpg",
      "/images/bf062bee8219f2eee9ab717429e3be64.jpg",
    ],
  },
  {
    id: "c9",
    title: "汪满田鱼灯民俗IP与文创设计",
    type: "非遗文创",
    location: "安徽 · 黄山歙县汪满田村",
    intro: "让传承数百年的汪满田鱼灯，变成一套既有民俗底色、又能被年轻人喜爱的文创体系。",
    tags: ["民俗IP", "鱼灯", "文创开发"],
    team: "四川美术学院 · 汪满田鱼灯项目组",
    designer: "罗青",
    advisor: "黄舒辞",
    views: 2340,
    stage: "4/6",
    orientation: "landscape",
    plainCover: true,
    cover:
      "/images/wm-fish-cover-01.jpg",
    images: [
      "/images/wm-fish-cover-01.jpg",
      "/images/wm-fish-prev-01.jpg",
      "/images/wm-fish-prev-02.jpg",
      "/images/wm-fish-prev-03.jpg",
    ],
  },
  {
    id: "c10",
    title: "马郢村乡村空间改造",
    type: "空间改造",
    location: "安徽 · 合肥长丰马郢村",
    intro: "用低成本、可参与的方式，把村里的闲置晒场改造成村民与游客都能停留的共享院落。",
    tags: ["乡村空间", "社区营造", "公共空间"],
    team: "安徽农业大学 · 林学与园林学院",
    designer: "蒋雪涵",
    advisor: "张玮",
    views: 3120,
    stage: "6/6",
    orientation: "landscape",
    plainCover: true,
    cover:
      "/images/my-village-cover-01.jpg",
    images: [
      "/images/my-village-cover-01.jpg",
      "/images/my-village-prev-01.jpg",
      "/images/my-village-prev-02.jpg",
      "/images/my-village-prev-03.jpg",
    ],
  },
  {
    id: "c11",
    title: "查济老宅院落民宿空间设计",
    type: "空间改造",
    location: "安徽 · 宣城泾县查济",
    intro: "用在地石材、木构与手作织物，把一间闲置老宅改造成能讲述徽州生活的住宿空间。",
    tags: ["乡村空间", "民宿设计", "在地材料"],
    team: "同济大学 · 查济老宅项目组",
    designer: "骆川",
    advisor: "孟庭之",
    views: 2740,
    stage: "6/6",
    orientation: "landscape",
    plainCover: true,
    cover:
      "/images/cj-house-cover-01.jpg",
    images: [
      "/images/cj-house-cover-01.jpg",
      "/images/cj-house-prev-01.jpg",
      "/images/cj-house-prev-02.jpg",
      "/images/cj-house-prev-03.jpg",
    ],
  },
];