import bottomLeftOneImg from "@/assets/images/daily_new/corner_imgs/bottom_left_1.png";
import bottomLeftTwoImg from "@/assets/images/daily_new/corner_imgs/bottom_left_2.png";
import bottomLeftThreeImg from "@/assets/images/daily_new/corner_imgs/bottom_left_3.png";
import bottomLeftFourImg from "@/assets/images/daily_new/corner_imgs/bottom_left_4.png";
import officialIcon from "@/assets/images/daily_new/info_tags/official.png";
import selectionIcon from "@/assets/images/daily_new/info_tags/selection.png";
import flagshipIcon from "@/assets/images/daily_new/info_tags/flagship.png";

export type DailyNewTag = {
  name: string;
  color: "green" | "pink" | "orange" | "red";
};

export type DailyNewItemBase = {
  id: number;
  name: string;
  seller: string;
  price: number;
  progress: string;
  sold: string;
  remaining: number;
  discount: number | null;
  likes: number;
  infoTag: string;
  breadcrumb: string[];
  comments: number;
  tag: DailyNewTag[];
  bottomLeftImg: string;
};

export type DailyNewItem = DailyNewItemBase & {
  img: string;
};

const mainItemImgs = Object.entries(
  import.meta.glob<string>("@/assets/images/daily_new/*.webp", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/\d+/)![0]);
    const numB = parseInt(b.match(/\d+/)![0]);
    return numA - numB;
  })
  .map(([, img]) => img);

const mainItemInfo: DailyNewItemBase[] = [
  {
    id: 1,
    name: "綜合堅果 手作 堅果 隨手包 體驗包 原味腰果 核桃 胡桃 夏威夷果 杏仁 榛果 低溫烘焙堅果 零食 零嘴 團購伴手禮",
    seller: "CoCo 可可生活館 蘇伯湯",
    price: 18,
    progress: "已售出 3萬+",
    sold: "30,000+",
    remaining: 500,
    discount: 9,
    likes: 100,
    infoTag: selectionIcon,
    breadcrumb: ["蝦皮購物", "美食、伴手禮", "休閒零食", "果乾、堅果"],
    comments: 59,
    tag: [
      {
        name: "隔日到貨",
        color: "green",
      },
      {
        name: "店到家宅配",
        color: "green",
      },
    ],
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    id: 2,
    name: "【🎀CC🎀】莫蘭特 籃球鞋 運動鞋 休閒鞋 Ja 3 莫蘭特三代 藍黃 舒適百搭 籃球鞋 男鞋 藍黃鴛鴦",
    seller: "abigayleross785",
    price: 2980,
    progress: "已售出 30",
    sold: "30",
    remaining: 10,
    discount: 6,
    likes: 4,
    infoTag: "",
    breadcrumb: ["蝦皮購物", "運動/健身", "運動鞋款", "籃球鞋(男)"],
    comments: 5,
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    id: 3,
    name: "進店領9折優惠券🥊 親子智能音樂拳擊靶 親子音樂拳擊靶 拳擊訓練機 音樂拳擊機 藍芽拳擊機 拳擊牆靶 拳擊機 拳擊",
    seller: "本桑株式會社旗艦店",
    price: 1188,
    progress: "已售出 2000+",
    sold: "2,000+",
    remaining: 125,
    discount: 4.7,
    likes: 250,
    infoTag: "",
    breadcrumb: ["蝦皮購物", "運動/健身", "健身運動器材", "拳擊與武術"],
    comments: 125,
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftThreeImg,
  },
  {
    id: 4,
    name: "NIKE 運動水壺 大口徑霸水壺 FUEL JUG 40OZ(約1182ml) 多款任選 N1003110",
    seller: "WFS 運動商城",
    price: 699,
    progress: "已售出 23",
    sold: "23",
    remaining: 54,
    discount: 6.5,
    likes: 3,
    infoTag: officialIcon,
    breadcrumb: ["蝦皮購物", "運動/健身", "運動用品", "運動穿戴配件/運動配備"],
    comments: 3,
    tag: [
      {
        name: "滿額折$170",
        color: "orange",
      },
    ],
    bottomLeftImg: bottomLeftFourImg,
  },
  {
    id: 5,
    name: "【蝦皮直營】高露潔 全效清淨薄荷/專業淨白/專業潔淨凝露/專業潔淨膏狀/專業抗敏感/炭深潔牙膏-150g",
    seller: "蝦皮直營 _ 生活超市 - 最快當日到",
    price: 119,
    progress: "已售出 1000+",
    sold: "1,000+",
    remaining: 2500,
    discount: 6,
    likes: 899,
    infoTag: flagshipIcon,
    breadcrumb: ["蝦皮購物", "居家生活", "日用品", "牙刷、牙膏、漱口水"],
    comments: 899,
    tag: [
      {
        name: "滿額5折",
        color: "orange",
      },
      {
        name: "當日到貨",
        color: "green",
      },
    ],
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    id: 6,
    name: "🌸相遇🌸24H出 搖搖杯 運動水杯 便攜男學生 塑料水杯 大容量水壺 防摔杯子 夏天水杯 ITHZ",
    seller: "邂逅與相遇",
    price: 88,
    progress: "已售出 660",
    sold: "660",
    remaining: 34,
    discount: 5.3,
    likes: 115,
    infoTag: "",
    breadcrumb: ["蝦皮購物", "居家生活", "水壺、杯子", "水杯、馬克杯"],
    comments: 15,
    tag: [
      {
        name: "隔日到貨",
        color: "green",
      },
    ],
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    id: 7,
    name: "🔥黑貓小店 PRO 束衣 運動緊身上衣 NBA束衣 防撞内衣 壓縮衣 透氣吸湿排汗高彈 T恤 速乾衣 健身跑步束衣",
    seller: "Black Cat Shop 黑貓小店精選",
    price: 279,
    progress: "已售出 57",
    sold: "57",
    remaining: 13,
    discount: null,
    likes: 14,
    infoTag: "",
    breadcrumb: ["蝦皮購物", "運動/健身", "運動服飾/配件", "壓縮/緊身衣褲"],
    comments: 14,
    tag: [],
    bottomLeftImg: bottomLeftThreeImg,
  },
  {
    id: 8,
    name: "韓國LEE大學T 大學踢 圓領套頭 胸前大LOGO 男女同款",
    seller: "PENGUIN-Yes",
    price: 799,
    progress: "已售出 8",
    sold: "8",
    remaining: 2,
    discount: 4.8,
    likes: 1,
    infoTag: "",
    breadcrumb: ["蝦皮購物", "女生衣著", "帽T/大學T", "大學T"],
    comments: 1,
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftFourImg,
  },
  {
    id: 9,
    name: "【現貨發出】勾勾襪三入組四季款 加厚毛巾底 短筒中筒長筒襪子 百搭潮流襪子 休閒襪子 運動襪子",
    seller: "Cotton棉語襪倉",
    price: 169,
    progress: "已售出 98",
    sold: "98",
    remaining: 99,
    discount: 3.8,
    likes: 44,
    infoTag: "",
    breadcrumb: ["蝦皮購物", "男生包包與配件", "襪子", "其他襪款"],
    comments: 31,
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    id: 10,
    name: "【VortexKeyboard】TYPE 全尺寸100% 104鍵 注音/英文 三模機械式藍芽2.4G無線鍵盤",
    seller: "VORTEXGEAR",
    price: 2880,
    progress: "已售出 101",
    sold: "101",
    remaining: 42,
    discount: null,
    likes: 68,
    infoTag: officialIcon,
    breadcrumb: ["蝦皮購物", "3C與筆電", "鍵盤滑鼠", "電競鍵盤滑鼠"],
    comments: 25,
    tag: [
      {
        name: "隔日到貨",
        color: "green",
      },
    ],
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    id: 11,
    name: "[美國ON] 高熱量乳清 Serious Mass 6磅/12磅 官方貨",
    seller: "TwinBrothers",
    price: 1849,
    progress: "已售出 4000+",
    sold: "4000+",
    remaining: 600,
    discount: 7.7,
    likes: 2197,
    infoTag: flagshipIcon,
    breadcrumb: ["蝦皮購物", "運動/健身", "運動健身能量補給", "乳清蛋白"],
    comments: 2197,
    tag: [
      {
        name: "滿額折$200",
        color: "orange",
      },
      {
        name: "天天超划算",
        color: "red",
      },
    ],
    bottomLeftImg: bottomLeftThreeImg,
  },
  {
    id: 12,
    name: "【滿十送二！台灣現貨】男生內褲 純棉簡約四角褲 男士內褲 舒適柔軟 透氣抑菌內褲 親膚舒適 自然貼合 吸濕排汗 男內褲",
    seller: "Triki",
    price: 8,
    progress: "已售出 6萬+",
    sold: "60,000+",
    remaining: 4000,
    discount: 0.3,
    likes: 205,
    infoTag: "",
    breadcrumb: ["蝦皮購物", "男生衣著", "男性內著", "內褲"],
    comments: 205,
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftFourImg,
  },
];

export const mergedMainItemInfo: DailyNewItem[] = mainItemInfo.map((item, index) => ({
  ...item,
  img: mainItemImgs[index],
}));
