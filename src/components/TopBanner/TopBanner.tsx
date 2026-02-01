import styles from "./TopBanner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { NavigationOptions } from "swiper/types";
import { useRef, useState } from "react";
import { topBannerNavItems } from "./topBannerData";

const carouselImgs = Object.values(import.meta.glob<string>("@/assets/images/top_banner/carousel/carousel_*.webp", { eager: true, import: "default" }));

const bannerImgs = Object.values(import.meta.glob<string>("@/assets/images/top_banner/right_banner/banner_*.webp", { eager: true, import: "default" }));

const navImgs = Object.values(import.meta.glob<string>("@/assets/images/top_banner/nav_*.png", { eager: true, import: "default" }));

function convertPath(path: string) {
  return navImgs.find((img) => {
    return img.includes(path);
  });
}

const topBannerNavList = topBannerNavItems.map((item) => ({
  title: item.title,
  path: convertPath(item.pathKey),
}));

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
                const navigation = swiper.params.navigation as NavigationOptions;
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
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
