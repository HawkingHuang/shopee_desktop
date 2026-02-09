import styles from "./Category.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { NavigationOptions } from "swiper/types";
import { useRef, useState } from "react";
import { categoryNames } from "./categoryData";

const categoryImgs = Object.entries(
  import.meta.glob<string>("@/assets/images/category/*.webp", {
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

const mergedCategory = categoryImgs.map((img, i) => ({
  name: categoryNames[i],
  img,
}));

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const chunkedCategory = chunk(mergedCategory, 2);

function Category() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scaleLeftArrow, setScaleLeftArrow] = useState(false);
  const [scaleRightArrow, setScaleRightArrow] = useState(false);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  function handleMouseEnter() {
    setScaleLeftArrow(true);
    setScaleRightArrow(true);
  }

  function handleMouseLeave() {
    setScaleLeftArrow(false);
    setScaleRightArrow(false);
  }

  return (
    <div className={styles.categoryWrap}>
      <div className="container">
        <div className={styles.categoryTitle}>分類</div>
        <div className={styles.categoryLine} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
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
            slidesPerView={10}
            slidesPerGroup={10}
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
            {chunkedCategory.map((chunk, i) => (
              <SwiperSlide key={i}>
                <div className={styles.categoryItemWrap}>
                  {chunk.map((item, i) => (
                    <div key={i} className={styles.categoryItem}>
                      <img className={styles.categoryItemImg} src={item.img} alt={item.name} />
                      <div className={styles.categoryItemName}>{item.name}</div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Category;
