import styles from "./OfficialStore.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { NavigationOptions } from "swiper/types";
import { useRef, useState } from "react";
import benefitOneImg from "@/assets/images/official_store/1.png";
import benefitTwoImg from "@/assets/images/official_store/2.png";
import benefitThreeImg from "@/assets/images/official_store/3.png";

const carouselImgsLeft = Object.values(import.meta.glob<string>("@/assets/images/official_store/left_carousel/*.jfif", { eager: true, import: "default" }));

const carouselImgsRight = Object.entries(
  import.meta.glob<string>("@/assets/images/official_store/right_carousel/*.webp", {
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

const carouselRightNames = [
  "最高折$6,072",
  "搶券86折無上限",
  "冷暖空調7折起",
  "領券蝦幣回饋10%",
  "健康動起來3折起",
  "全館滿99起免運",
  "金統納福8折起",
  "全館299up免運",
  "領券蝦幣回饋10%",
  "全館優惠5折起",
  "4折起領券再折",
  "全館五折起",
  "享蝦幣10倍送",
  "破萬熱銷行動電源",
  "領券蝦幣回饋5%",
  "全館299up免運",
];

const mergedcarouselImgsRight = carouselImgsRight.map((img, i) => ({
  name: carouselRightNames[i],
  img,
}));

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const chunkedCategory = chunk(mergedcarouselImgsRight, 2);
chunkedCategory[7][1] = { name: "", img: "" };

function OfficialStore() {
  const [showArrows, setShowArrows] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scaleLeftArrow, setScaleLeftArrow] = useState(false);
  const [scaleRightArrow, setScaleRightArrow] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const prevRefRight = useRef(null);
  const nextRefRight = useRef(null);

  function handleMouseEnter() {
    setScaleLeftArrow(true);
    setScaleRightArrow(true);
  }

  function handleMouseLeave() {
    setScaleLeftArrow(false);
    setScaleRightArrow(false);
  }

  return (
    <div className={styles.officialStoreWrap}>
      <div className="container">
        <div className={styles.officialStoreTitleWrap}>
          <div className={styles.officialStoreTitleWrapLeft}>
            <a className={styles.officialStoreLink} href="">
              蝦皮商成
            </a>
            <div className={styles.officialStoreBenefits}>
              <div className={styles.benefit}>
                <img src={benefitOneImg} alt="" />
                15 天鑑賞期
              </div>
              <div className={styles.benefit}>
                <img src={benefitTwoImg} alt="" />
                蝦皮安心退
              </div>
              <div className={styles.benefit}>
                <img src={benefitThreeImg} alt="" />
                正品保障
              </div>
            </div>
          </div>
          <div className={styles.officialStoreTitleWrapRight}>
            查看全部
            <div className={styles.svgWrap}>
              <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" stroke="#fff">
                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.officialStoreCarouselWrap}>
          <div className={styles.officialStoreCarouselWrapLeft} onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
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
              {carouselImgsLeft.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`carousel-${index}`} className={styles.carouselImg} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.officialStoreCarouselWrapRight} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <div ref={prevRefRight} className={`${styles.customSwiperButtonPrev} ${showLeftArrow ? styles.visible : ""} ${scaleLeftArrow ? styles.scale : ""}`}>
              <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" fill="#0000008a">
                <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
              </svg>
            </div>
            <div ref={nextRefRight} className={`${styles.customSwiperButtonNext} ${showRightArrow ? styles.visible : ""} ${scaleRightArrow ? styles.scale : ""}`}>
              <svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" x="0" y="0" fill="#0000008a">
                <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
              </svg>
            </div>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={4}
              slidesPerGroup={4}
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
                navigation.prevEl = prevRefRight.current;
                navigation.nextEl = nextRefRight.current;
              }}
              navigation={{
                prevEl: prevRefRight.current,
                nextEl: nextRefRight.current,
              }}
              className={styles.carouselSwiper}
            >
              {chunkedCategory.map((chunk, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.categoryItemWrap}>
                    {chunk.map((item, i) => {
                      if (!item.name && !item.img) {
                        return (
                          <div key={i} className={styles.specialItem}>
                            <div className={styles.specialInner}>
                              {" "}
                              查看全部
                              <div className={styles.svgWrap}>
                                <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" stroke="#fff">
                                  <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={i} className={styles.categoryItem}>
                          <img className={styles.categoryItemImg} src={item.img} alt="" />
                          <div className={styles.categoryItemName}>{item.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficialStore;
