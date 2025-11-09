import styles from "./TopBanner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

const carouselImgs = Object.values(import.meta.glob<string>("@/assets/images/top_banner/carousel/carousel_*.webp", { eager: true, import: "default" }));

const bannerImgs = Object.values(import.meta.glob<string>("@/assets/images/top_banner/right_banner/banner_*.webp", { eager: true, import: "default" }));

const navImgs = Object.values(import.meta.glob<string>("@/assets/images/top_banner/nav_*.png", { eager: true, import: "default" }));

const topBannerNavList = [
  {
    title: "免運無限次",
    path: convertPath("nav_1"),
  },
  {
    title: "免運$99起",
    path: convertPath("nav_1"),
  },
  {
    title: "免運當日到！",
    path: convertPath("nav_3"),
  },
  {
    title: "抽100蝦幣",
    path: convertPath("nav_4"),
  },
  {
    title: "蝦皮商城",
    path: convertPath("nav_5"),
  },
  {
    title: "蝦皮海外直送",
    path: convertPath("nav_6"),
  },
  {
    title: "銀行刷卡優惠",
    path: convertPath("nav_7"),
  },
  {
    title: "蝦皮超便宜",
    path: convertPath("nav_8"),
  },
  {
    title: "蝦皮3C家電",
    path: convertPath("nav_9"),
  },
  {
    title: "活動合集",
    path: convertPath("nav_10"),
  },
];

function convertPath(path: string) {
  return navImgs.find((img) => {
    return img.includes(path);
  });
}

function TopBanner() {
  const [showArrows, setShowArrows] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.topBannerWrap}>
      <div className="container">
        <div className={styles.topBannerCarouselWrap}>
          <div className={styles.topBannerCarouselWrapLeft} onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
            <div ref={prevRef} className={`${styles.customSwiperButtonPrev} ${showArrows ? styles.visible : ""}`}>
              <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" role="img">
                <path stroke="none" fill="#fff" d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"></path>
              </svg>
            </div>
            <div ref={nextRef} className={`${styles.customSwiperButtonNext} ${showArrows ? styles.visible : ""}`}>
              <svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" role="img">
                <path stroke="none" fill="#fff" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path>
              </svg>
            </div>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className={styles.carouselSwiper}
            >
              {carouselImgs.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`carousel-${index}`} className={styles.carouselImg} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.topBannerCarouselWrapRight}>
            {bannerImgs.map((img, index) => (
              <img key={index} src={img} alt={`banner-${index}`} className={styles.rightBannerImg} />
            ))}
          </div>
        </div>
        <div className={styles.topBannerNavWrap}>
          {topBannerNavList.map((item) => (
            <div className={styles.topBannerNav} key={item.title}>
              <img className={styles.topBannerNavImg} src={item.path} alt="" />
              <div className={styles.topBannerNavTitle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
