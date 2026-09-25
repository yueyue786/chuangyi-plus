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
      "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/1507aecc-9a55-4cb5-9b8a-dd8cef6877cb_compressed_-A32.webp",
    images: [
      "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/1507aecc-9a55-4cb5-9b8a-dd8cef6877cb_compressed_-A32.webp",
      "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/51eb82fd-7ccc-4878-a37f-ece440629124_compressed_A3-1.webp",
      "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/b084372feb4ca48ad61b4fc4076dc17f.jpeg",
      "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/a6a4feac-615b-47b9-852a-d515a6f5e25b_compressed_unnamed.webp",
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
      "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/c0256792b048da73aeb9a0144aceff4c.jpeg",
    images: [
      "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/c0256792b048da73aeb9a0144aceff4c.jpeg",
      "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/dfd678bf-8234-4542-8354-74dc246f6431_compressed_unnamed.webp",
      "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/430f58e97967e137c31460f86cfd8bfa.jpeg",
      "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/cf573c84-3f8b-4207-af35-7d938ad669b1_compressed_221152641.webp",
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
      "https://storage.helloreaddy.io/project_files/d2a78b93-b9ba-4fbf-93af-f7f42f968533/a91f8bff-b198-4c93-9431-5b6c8d24e3eb_compressed_22115334--1.webp",
    images: [
      "https://readdy.ai/api/search-image?query=Stylized%20guofeng%20flat%20illustration%20of%20a%20traditional%20Chinese%20snake%20lantern%20folk%20performance%2C%20villagers%20dancing%20and%20carrying%20a%20long%20illuminated%20serpent%20lantern%20made%20of%20bamboo%20and%20painted%20paper%2C%20deep%20green%20and%20warm%20gold%20palette%2C%20clean%20minimal%20light%20background%2C%20high%20detail&width=800&height=600&seq=cy-village-cover-01&orientation=landscape",
      "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/8800cf2eadddc98d2321f824a1b7c9ab.jpeg",
      "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/0ae3daeb72acf469f241fd2f98a3e155.jpeg",
      "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/bf062bee8219f2eee9ab717429e3be64.jpeg",
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
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20joyful%20traditional%20Chinese%20fish%20lantern%20folk%20parade%20in%20a%20Huizhou%20village%20at%20night%2C%20villagers%20holding%20colorful%20glowing%20fish%20shaped%20lanterns%2C%20warm%20festive%20lighting%2C%20white%20walled%20ancient%20houses%20behind%20the%20crowd%2C%20deep%20green%20and%20amber%20tones%2C%20clean%20composition%2C%20high%20detail&width=800&height=600&seq=wm-fish-cover-01&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20joyful%20traditional%20Chinese%20fish%20lantern%20folk%20parade%20in%20a%20Huizhou%20village%20at%20night%2C%20villagers%20holding%20colorful%20glowing%20fish%20shaped%20lanterns%2C%20warm%20festive%20lighting%2C%20white%20walled%20ancient%20houses%20behind%20the%20crowd%2C%20deep%20green%20and%20amber%20tones%2C%20clean%20composition%2C%20high%20detail&width=800&height=600&seq=wm-fish-cover-01&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Flat%20design%20board%20of%20a%20fish%20lantern%20visual%20extraction%20atlas%20for%20an%20intangible%20cultural%20heritage%20IP%2C%20showing%20stylized%20fish%20lantern%20illustrations%2C%20color%20swatches%20and%20pattern%20studies%20in%20deep%20green%20and%20warm%20amber%20tones%2C%20clean%20light%20background%2C%20minimal%20guofeng%20presentation%2C%20high%20detail&width=800&height=600&seq=wm-fish-prev-01&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Flat%20lay%20photo%20of%20a%20fish%20lantern%20themed%20cultural%20creative%20product%20line%20including%20a%20tote%20bag%2C%20notebooks%2C%20enamel%20pins%20and%20gift%20boxes%20featuring%20cute%20glowing%20fish%20lantern%20illustrations%2C%20deep%20green%20and%20amber%20palette%2C%20clean%20light%20background%2C%20soft%20daylight%2C%20high%20detail&width=800&height=600&seq=wm-fish-prev-02&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Photo%20of%20a%20DIY%20handmade%20fish%20lantern%20craft%20kit%20in%20an%20open%20box%20containing%20bamboo%20strips%2C%20colored%20paper%2C%20small%20LED%20lights%20and%20illustrated%20instructions%2C%20placed%20on%20a%20light%20wooden%20table%20with%20a%20clean%20minimal%20background%20and%20warm%20tones%2C%20high%20detail&width=800&height=600&seq=wm-fish-prev-03&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20completed%20rural%20public%20courtyard%20renovation%20in%20a%20Chinese%20village%2C%20a%20former%20drying%20ground%20turned%20into%20a%20shared%20courtyard%20with%20wooden%20benches%2C%20a%20shade%20pergola%20and%20planted%20greenery%2C%20local%20brick%20and%20stone%20paving%2C%20rural%20houses%20behind%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=my-village-cover-01&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20completed%20rural%20public%20courtyard%20renovation%20in%20a%20Chinese%20village%2C%20a%20former%20drying%20ground%20turned%20into%20a%20shared%20courtyard%20with%20wooden%20benches%2C%20a%20shade%20pergola%20and%20planted%20greenery%2C%20local%20brick%20and%20stone%20paving%2C%20rural%20houses%20behind%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=my-village-cover-01&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20completed%20rural%20courtyard%20renovation%20in%20a%20Chinese%20village%2C%20a%20shaded%20seating%20area%20with%20wooden%20benches%2C%20a%20pergola%20and%20planted%20greenery%20on%20a%20former%20drying%20ground%2C%20local%20brick%20and%20stone%20paving%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=my-village-prev-01&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20revived%20village%20public%20space%20with%20villagers%20gathering%2C%20a%20low%20cost%20renovated%20courtyard%20with%20a%20shade%20structure%2C%20wooden%20seats%20and%20greenery%2C%20rural%20houses%20in%20the%20background%2C%20soft%20daylight%2C%20harmonious%20green%20and%20warm%20tones%2C%20high%20detail&width=800&height=600&seq=my-village-prev-02&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20participatory%20rural%20space%20renewal%20site%2C%20villagers%20and%20designers%20building%20a%20wooden%20shade%20pavilion%20together%20using%20local%20materials%20in%20a%20Chinese%20village%20courtyard%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20tones%2C%20high%20detail&width=800&height=600&seq=my-village-prev-03&orientation=landscape",
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
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20restored%20old%20courtyard%20home%20turned%20into%20a%20boutique%20homestay%20interior%20in%20a%20Huizhou%20village%2C%20wooden%20structure%20with%20a%20bright%20skywell%2C%20local%20stone%20and%20timber%20materials%2C%20simple%20warm%20furnishings%20and%20handmade%20fabric%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-cover-01&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20restored%20old%20courtyard%20home%20turned%20into%20a%20boutique%20homestay%20interior%20in%20a%20Huizhou%20village%2C%20wooden%20structure%20with%20a%20bright%20skywell%2C%20local%20stone%20and%20timber%20materials%2C%20simple%20warm%20furnishings%20and%20handmade%20fabric%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-cover-01&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20renovated%20old%20courtyard%20house%20interior%20in%20a%20Huizhou%20village%20homestay%2C%20showing%20a%20living%20area%20with%20wooden%20beams%2C%20local%20stone%20flooring%20and%20woven%20textiles%2C%20a%20bright%20skywell%20courtyard%20beyond%2C%20warm%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-prev-01&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landscape%20photograph%20of%20a%20quiet%20ancient%20lane%20in%20Chaji%20village%20with%20white%20walled%20grey%20tiled%20Huizhou%20houses%20along%20a%20stone%20paved%20path%2C%20a%20gentle%20stream%20and%20green%20plants%2C%20soft%20daylight%2C%20clean%20composition%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-prev-02&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landscape%20flat%20lay%20of%20Huizhou%20handmade%20soft%20furnishing%20materials%20for%20a%20homestay%2C%20including%20natural%20linen%20fabric%2C%20bamboo%20woven%20baskets%2C%20wooden%20trays%20and%20ceramic%20tea%20ware%20on%20a%20light%20wooden%20table%2C%20soft%20daylight%2C%20clean%20minimal%20background%2C%20warm%20neutral%20and%20green%20tones%2C%20high%20detail&width=800&height=600&seq=cj-house-prev-03&orientation=landscape",
    ],
  },
];