import styles from "./TopBanner.module.scss";

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
  return (
    <div className={styles.topBannerWrap}>
      <div className="container">
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
