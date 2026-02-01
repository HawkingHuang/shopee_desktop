import styles from "./LimitedTime.module.scss";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { NavigationOptions } from "swiper/types";
import { useRef, useState, useEffect } from "react";
import Digits from "../Digits/Digits";
import limitedTimeImg from "@/assets/images/limited_time/limited_time.png";
import popularFireImg from "@/assets/images/limited_time/corner_imgs/popular_fire.png";
import { mainItemInfo } from "./limitedTimeData";

const mainItemImgs = Object.entries(
  import.meta.glob<string>("@/assets/images/limited_time/carousel_main/*.png", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/\d+/)![0]);
    const numB = parseInt(b.match(/\d+/)![0]);
    return numA - numB;
  })
  .map(([_, img]) => img);

const mergedMainItemInfo = mainItemInfo.map((item, index) => ({
  ...item,
  img: mainItemImgs[index],
}));

const now = dayjs();
const tomorrow = dayjs().add(1, "day").startOf("day");
const remainingSec = tomorrow.diff(now, "second");

function LimitedTime() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scaleLeftArrow, setScaleLeftArrow] = useState(false);
  const [scaleRightArrow, setScaleRightArrow] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [remaining, setRemaining] = useState(remainingSec);
  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;
  const digits = {
    h1: Math.floor(hours / 10),
    h2: hours % 10,
    m1: Math.floor(minutes / 10),
    m2: minutes % 10,
    s1: Math.floor(seconds / 10),
    s2: seconds % 10,
  };

  function handleMouseEnter() {
    setScaleLeftArrow(true);
    setScaleRightArrow(true);
  }

  function handleMouseLeave() {
    setScaleLeftArrow(false);
    setScaleRightArrow(false);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.limitedTimeWrap}>
      <div className="container">
        <div className={styles.limitedTimeTitleWrap}>
          <div className={styles.LimitedTimeTitleWrapLeft}>
            <img src={limitedTimeImg} alt="" />
            <div className={styles.countdown}>
              <div className={styles.hours}>
                <Digits value={digits.h1} />
                <Digits value={digits.h2} />
              </div>
              <div className={styles.minutes}>
                <Digits value={digits.m1} />
                <Digits value={digits.m2} />
              </div>
              <div className={styles.seconds}>
                <Digits value={digits.s1} />
                <Digits value={digits.s2} />
              </div>
            </div>
          </div>
          <div className={styles.LimitedTimeTitleWrapRight}>
            查看全部
            <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" fill="rgb(238 77 45)">
              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.limitedTimeLine} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
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
            {mergedMainItemInfo.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.limitedItemWrap}>
                  <div className={styles.limitedItemImgWrap}>
                    <span className={styles.discount}>
                      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" fill="url(#paint0_linear_2216_10611)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EE4D2D"></stop>
                            <stop offset="1" stop-color="#FF7337"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      {item.discount}折
                    </span>
                    <div className={styles.topLeftImgWrap}>
                      <img className={`${styles.topLeftImg} ${item.notOfficial ? styles.notOfficial : ""}`} src={item.topLeftImg} alt="" />
                    </div>
                    <img className={styles.limitedItemImg} src={item.img} alt="" />
                    <div className={styles.bottomLeftImgWrap}>
                      <img className={styles.bottomLeftImg} src={item.bottomLeftImg} alt="" />
                    </div>
                  </div>
                  <p className={styles.limitedItemPrice}>${item.price}</p>
                  <div className={styles.progressBar} style={{ ["--percent" as string]: item.percentage + "%" }}>
                    <div className={styles.progressBarInner}></div>
                    <p className={styles.progress}>{item.progress}</p>
                    {item.popular && (
                      <div className={styles.popularWrap}>
                        <img className={styles.popular} src={popularFireImg} alt="" />
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default LimitedTime;
