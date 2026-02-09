import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import { aboutShopeeLinks, countryList, customerServiceLinks, logisticsImgsOrder, paymentImgsOrder, socialMediaList } from "./footerData";

// 付款圖片
const rawPaymentImgs = import.meta.glob<string>("@/assets/images/footer/payment_*.png", { eager: true, import: "default" });
const orderedPaymentImgs = paymentImgsOrder.map((name) => ({
  name,
  img: rawPaymentImgs[`/src/assets/images/footer/${name}.png`],
}));

// 物流合作圖片
const rawLogisticsImgs = import.meta.glob<string>("@/assets/images/footer/logistics_*.png", { eager: true, import: "default" });
const orderedLogisticsImgs = logisticsImgsOrder.map((name) => ({
  name,
  img: rawLogisticsImgs[`/src/assets/images/footer/${name}.png`],
}));

// 標章圖片
const labelImgs = Object.values(import.meta.glob<string>("@/assets/images/footer/reduction_label*.png", { eager: true, import: "default" }));

// 下載圖片
import qrcodePNG from "@/assets/images/footer/qr_code.png";
import appStorePNG from "@/assets/images/footer/app_store.png";
import googlePlayPNG from "@/assets/images/footer/google_play.png";
import appGalleryPNG from "@/assets/images/footer/app_gallery.png";

function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className="container">
        <div className={styles.footerWrapUpper}>
          <div className={styles.listWrap}>
            <div className={styles.listTitle}>客服中心</div>
            <div className={styles.listContent}>
              {customerServiceLinks.map((link) => (
                <NavLink key={link} to="/" className={styles.list}>
                  {link}
                </NavLink>
              ))}
            </div>
          </div>
          <div className={styles.listWrap}>
            <div className={styles.listTitle}>關於蝦皮</div>
            <div className={styles.listContent}>
              {aboutShopeeLinks.map((link) => (
                <NavLink key={link} to="/" className={styles.list}>
                  {link}
                </NavLink>
              ))}
            </div>
          </div>
          <div className={styles.listWrap}>
            <div className={styles.listTitle}>付款</div>
            <div className={styles.listGrid}>
              {orderedPaymentImgs.map(({ img, name }) => (
                <div className={styles.listGridItem}>
                  <img key={img} src={img} alt={name} />
                </div>
              ))}
            </div>
            <div className={styles.listTitle}>物流合作</div>
            <div className={styles.listGrid}>
              {orderedLogisticsImgs.map(({ img, name }) => (
                <div className={styles.listGridItem}>
                  <img key={img} src={img} alt={name} />
                </div>
              ))}
            </div>
            <div className={styles.listTitle}>蝦皮直送包裝減量標章</div>
            <div className={styles.listGrid}>
              {labelImgs.map((img, index) => (
                <div className={styles.listGridItem}>
                  <img key={img} src={img} alt={`減量標章 ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.listWrap}>
            <div className={styles.listTitle}>關注我們</div>
            <div className={styles.listContent}>
              {socialMediaList.map((list) => (
                <a key={list.name} href={list.link} className={styles.list} target="_blank">
                  <img src={list.img} alt={list.name} />
                  {list.name}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.listWrap}>
            <div className={styles.listTitle}>下載蝦皮</div>
            <div className={styles.listTwoColumn}>
              <div>
                <img src={qrcodePNG} alt="Shopee app QR code" />
              </div>
              <div className={styles.listContent}>
                <a href="https://shopee.tw/web" target="_blank">
                  <img src={appStorePNG} alt="App Store" />
                </a>
                <a href="https://shopee.tw/web" target="_blank">
                  <img src={googlePlayPNG} alt="Google Play" />
                </a>
                <a href="https://shopee.tw/web" target="_blank">
                  <img src={appGalleryPNG} alt="AppGallery" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.footerWrapLower}>
          <div className={styles.companyInfo}>
            <p>新加坡商蝦皮娛樂電商有限公司台灣分公司</p>
            <p>統一編號：56801904</p>
          </div>
          <div className={styles.copyright}>
            <p>&#169; 2025 Shopee. 版權所有。</p>
            <div className={styles.countryList}>
              {countryList.map((country) => (
                <p key={country}>{country}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
