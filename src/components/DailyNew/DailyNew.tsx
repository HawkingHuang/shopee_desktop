import styles from "./DailyNew.module.scss";
import bottomLeftOneImg from "@/assets/images/daily_new/corner_imgs/bottom_left_1.png";
import bottomLeftTwoImg from "@/assets/images/daily_new/corner_imgs/bottom_left_2.png";
import bottomLeftThreeImg from "@/assets/images/daily_new/corner_imgs/bottom_left_3.png";
import bottomLeftFourImg from "@/assets/images/daily_new/corner_imgs/bottom_left_4.png";
import flashIcon from "@/assets/images/daily_new/icons/flash.svg";
import officialIcon from "@/assets/images/daily_new/info_tags/official.png";
import selectionIcon from "@/assets/images/daily_new/info_tags/selection.png";
import flagshipIcon from "@/assets/images/daily_new/info_tags/flagship.png";

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
  .map(([_, img]) => img);

const mainItemInfo = [
  {
    name: "綜合堅果 手作 堅果 隨手包 體驗包 原味腰果 核桃 胡桃 夏威夷果 杏仁 榛果 低溫烘焙堅果 零食 零嘴 團購伴手禮",
    price: 18,
    progress: "已售出 3萬+",
    discount: 9,
    infoTag: selectionIcon,
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
    name: "【🎀CC🎀】莫蘭特 籃球鞋 運動鞋 休閒鞋 Ja 3 莫蘭特三代 藍黃 舒適百搭 籃球鞋 男鞋 藍黃鴛鴦",
    price: 2980,
    progress: "已售出 30",
    discount: 6,
    infoTag: "",
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    name: "進店領9折優惠券🥊 親子智能音樂拳擊靶 親子音樂拳擊靶 拳擊訓練機 音樂拳擊機 藍芽拳擊機 拳擊牆靶 拳擊機 拳擊",
    price: 1188,
    progress: "已售出 2000+",
    discount: 4.7,
    infoTag: "",
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftThreeImg,
  },
  {
    name: "NIKE 運動水壺 大口徑霸水壺 FUEL JUG 40OZ(約1182ml) 多款任選 N1003110",
    price: 699,
    progress: "已售出 23",
    discount: 6.5,
    infoTag: officialIcon,
    tag: [
      {
        name: "滿額折$170",
        color: "orange",
      },
    ],
    bottomLeftImg: bottomLeftFourImg,
  },
  {
    name: "【蝦皮直營】高露潔 全效清淨薄荷/專業淨白/專業潔淨凝露/專業潔淨膏狀/專業抗敏感/炭深潔牙膏-150g",
    price: 119,
    progress: "已售出 1000+",
    discount: 6,
    infoTag: flagshipIcon,
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
    name: "🌸相遇🌸24H出 搖搖杯 運動水杯 便攜男學生 塑料水杯 大容量水壺 防摔杯子 夏天水杯 ITHZ",
    price: 88,
    progress: "已售出 660",
    discount: 5.3,
    infoTag: "",
    tag: [
      {
        name: "隔日到貨",
        color: "green",
      },
    ],
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    name: "🔥黑貓小店 PRO 束衣 運動緊身上衣 NBA束衣 防撞内衣 壓縮衣 透氣吸湿排汗高彈 T恤 速乾衣 健身跑步束衣",
    price: 279,
    progress: "已售出 57",
    discount: null,
    infoTag: "",
    tag: [],
    bottomLeftImg: bottomLeftThreeImg,
  },
  {
    name: "韓國LEE大學T 大學踢 圓領套頭 胸前大LOGO 男女同款",
    price: 799,
    progress: "已售出 8",
    discount: 4.8,
    infoTag: "",
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftFourImg,
  },
  {
    name: "【現貨發出】勾勾襪三入組四季款 加厚毛巾底 短筒中筒長筒襪子 百搭潮流襪子 休閒襪子 運動襪子",
    price: 169,
    progress: "已售出 98",
    discount: 3.8,
    infoTag: "",
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftOneImg,
  },
  {
    name: "【VortexKeyboard】TYPE 全尺寸100% 104鍵 注音/英文 三模機械式藍芽2.4G無線鍵盤",
    price: 2880,
    progress: "已售出 101",
    discount: null,
    infoTag: officialIcon,
    tag: [
      {
        name: "隔日到貨",
        color: "green",
      },
    ],
    bottomLeftImg: bottomLeftTwoImg,
  },
  {
    name: "[美國ON] 高熱量乳清 Serious Mass 6磅/12磅 官方貨",
    price: 1849,
    progress: "已售出 4000+",
    discount: 7.7,
    infoTag: flagshipIcon,
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
    name: "【滿十送二！台灣現貨】男生內褲 純棉簡約四角褲 男士內褲 舒適柔軟 透氣抑菌內褲 親膚舒適 自然貼合 吸濕排汗 男內褲",
    price: 8,
    progress: "已售出 6萬+",
    discount: 0.3,
    infoTag: "",
    tag: [
      {
        name: "熱銷中",
        color: "pink",
      },
    ],
    bottomLeftImg: bottomLeftFourImg,
  },
];

const mergedMainItemInfo = mainItemInfo.map((item, index) => ({
  ...item,
  img: mainItemImgs[index],
}));

function DailyNew() {
  return (
    <div className={styles.dailyNewWrap}>
      <div className="container">
        <div className={styles.dailyNewTitleWrap}>每日新發現</div>
        <div className={styles.dailyNewContentWrap}>
          {mergedMainItemInfo.map((item) => (
            <div className={styles.dailyNewItem}>
              {item.discount && <span className={styles.discount}>{item.discount}折</span>}
              <div className={styles.dailyNewItemImgWrap}>
                <img className={styles.dailyNewItemImg} src={item.img} alt="" />
                <div className={styles.bottomLeftImgWrap}>
                  <img className={styles.bottomLeftImg} src={item.bottomLeftImg} alt="" />
                </div>
              </div>
              <div className={styles.dailyNewItemInfo}>
                <div className={styles.dailyNewItemName}>
                  {item.infoTag && <img className={styles.infoTag} src={item.infoTag} alt="" />}
                  {item.name}
                </div>
                <div className={styles.dailyNewItemTags}>
                  {item.tag.map((tag) => (
                    <div key={tag.name} className={`${styles.dailyNewItemTag} ${styles[tag.color]}`}>
                      {tag.color === "pink" && <img className={styles.flash} src={flashIcon} />}
                      {tag.color === "orange" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16">
                          <path
                            d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                            stroke-width="1"
                            transform=""
                            stroke="#F69113"
                            fill="#F69113"
                          ></path>
                        </svg>
                      )}
                      <div className={styles.dailyNewItemTagName}>{tag.name}</div>
                      {tag.color === "orange" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16">
                          <path
                            d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                            stroke-width="1"
                            transform=""
                            stroke="#F69113"
                            fill="#F69113"
                          ></path>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.priceProgress}>
                  <div className={styles.price}>
                    <span className={styles.dollar}>$</span>
                    {item.price}
                  </div>
                  <div className={styles.progress}>{item.progress}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dailyNewMoreWrap}>
          <a href="/" className={styles.dailyNewMore}>
            查看更多
          </a>
        </div>
      </div>
    </div>
  );
}

export default DailyNew;
