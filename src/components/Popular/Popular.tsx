import styles from "./Popular.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { NavigationOptions } from "swiper/types";
import { useRef, useState } from "react";
import topLeftIcon from "@/assets/images/popular/top_left_icon.png";

const popularItemImgs = Object.entries(
  import.meta.glob<string>("@/assets/images/popular/*.jfif", {
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

const popularItemInfo = [
  {
    name: "掃拖機器人",
    sold: "月銷售 5000",
  },
  {
    name: "Nike 水壺",
    sold: "月銷售 295",
  },
  {
    name: "緊身運動長袖",
    sold: "月銷售 557",
  },
  {
    name: "乳清蛋白",
    sold: "月銷售 3萬+",
  },
  {
    name: "慢跑鞋",
    sold: "月銷售 158",
  },
  {
    name: "絨布手套",
    sold: "月銷售 97",
  },
  {
    name: "名牌",
    sold: "月銷售 201",
  },
  {
    name: "融蠟燈",
    sold: "月銷售 59",
  },
  {
    name: "原子筆",
    sold: "月銷售 1001",
  },
  {
    name: "男生四角褲",
    sold: "月銷售 5 萬",
  },
  {
    name: "充電線",
    sold: "月銷售 1321",
  },
  {
    name: "運動短褲",
    sold: "月銷售 588",
  },
];

const mergedPopularItemInfo = popularItemInfo.map((item, index) => ({
  ...item,
  img: popularItemImgs[index],
}));

function Popular() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scaleLeftArrow, setScaleLeftArrow] = useState(false);
  const [scaleRightArrow, setScaleRightArrow] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  function handleMouseEnter() {
    setScaleLeftArrow(true);
    setScaleRightArrow(true);
  }

  function handleMouseLeave() {
    setScaleLeftArrow(false);
    setScaleRightArrow(false);
  }

  return (
    <div className={styles.popularWrap}>
      <div className="container">
        <div className={styles.popularTitleWrap}>
          <div className={styles.popularTitleWrapLeft}>熱門商品</div>
          <div className={styles.popularTitleWrapRight}>
            查看全部
            <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" fill="rgb(238 77 45)">
              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.popularLine} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
          <div ref={prevRef} className={`${styles.customSwiperButtonPrev} ${showLeftArrow ? styles.visible : ""} ${scaleLeftArrow ? styles.scale : ""}`}>
            <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" fill="#0000008a">
              <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
            </svg>
          </div>
          <div ref={nextRef} className={`${styles.customSwiperButtonNext} ${showRightArrow ? styles.visible : ""} ${scaleRightArrow ? styles.scale : ""}`}>
            <svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" fill="#0000008a">
              <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
            </svg>
          </div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={6}
            slidesPerGroup={6}
            autoplay={false}
            grab-cursor={true}
            allowTouchMove={false}
            onSlideChange={(swiper) => {
              setShowLeftArrow(!swiper.isBeginning);
              setShowRightArrow(!swiper.isEnd);
            }}
            onReachBeginning={() => {
              setShowLeftArrow(false);
              setShowRightArrow(true);
            }}
            onReachEnd={() => {
              setShowLeftArrow(true);
              setShowRightArrow(false);
            }}
            onBeforeInit={(swiper) => {
              const navigation = swiper.params.navigation as NavigationOptions;
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className={styles.carouselSwiper}
          >
            {mergedPopularItemInfo.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.popularItemWrap}>
                  <div className={styles.popularItemImgWrap}>
                    <div className={styles.topLeftImgWrap}>
                      <img className={styles.topLeftImg} src={topLeftIcon} alt="" />
                    </div>
                    <img className={styles.popularItemImg} src={item.img} alt="" />
                    <div className={styles.bottomWrap}>{item.sold}</div>
                  </div>
                  <p className={styles.popularItemName}>{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Popular;
