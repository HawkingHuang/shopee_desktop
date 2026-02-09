import styles from "./DailyNew.module.scss";
import flashIcon from "@/assets/images/daily_new/icons/flash.svg";
import { useState } from "react";
import { mergedMainItemInfo } from "./merchandise";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function DailyNew() {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHoverIndex(null);
  };
  return (
    <div className={styles.dailyNewWrap}>
      <div className="container">
        <div className={styles.dailyNewTitleWrap}>每日新發現</div>
        <div className={styles.dailyNewContentWrap}>
          {mergedMainItemInfo.map((item, index) => (
            <Link to={isLogin ? `/product/${item.id}` : "/login"} className={styles.cardLink}>
              <div className={styles.dailyNewItem} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                {item.discount && <span className={styles.discount}>{item.discount}折</span>}
                <div className={styles.dailyNewItemImgWrap}>
                  <img className={styles.dailyNewItemImg} src={item.img} alt={item.name} />
                  <div className={styles.bottomLeftImgWrap}>
                    <img className={styles.bottomLeftImg} src={item.bottomLeftImg} alt={`${item.name} badge`} />
                  </div>
                </div>
                <div className={styles.dailyNewItemInfo}>
                  <div className={styles.dailyNewItemName}>
                    {item.infoTag && <img className={styles.infoTag} src={item.infoTag} alt={`${item.name} info tag`} />}
                    {item.name}
                  </div>
                  <div className={styles.dailyNewItemTags}>
                    {item.tag.map((tag) => (
                      <div key={tag.name} className={`${styles.dailyNewItemTag} ${styles[tag.color]}`}>
                        {tag.color === "pink" && <img className={styles.flash} src={flashIcon} alt="Flash icon" />}
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
                {isHoverIndex === index && <div className={styles.findSimilar}>找相似</div>}
              </div>
            </Link>
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
