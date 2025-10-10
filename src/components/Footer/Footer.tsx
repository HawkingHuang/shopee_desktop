import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

const customerServiceLinks = ["幫助中心", "蝦皮商城", "付款方式", "蝦皮錢包", "蝦幣", "運費補助", "退貨退款", "物流方式", "聯絡客服", "防詐騙宣傳"];
const aboutShopeeLinks = ["關於蝦皮", "加入我們", "政策", "蝦皮隱私權政策", "蝦皮商城", "賣家中心", "限時特賣", "聯絡媒體"];

// 付款圖片
const paymentImgsOrder = ["payment_one", "payment_two", "payment_three"];
const rawPaymentImgs = import.meta.glob<string>("@/assets/images/footer/payment_*.png", { eager: true, import: "default" });
const orderedPaymentImgs = paymentImgsOrder.map((name) => rawPaymentImgs[`/src/assets/images/footer/${name}.png`]);

// 物流合作圖片
const logisticsImgsOrder = ["logistics_one", "logistics_two", "logistics_three", "logistics_four", "logistics_five", "logistics_six", "logistics_seven", "logistics_eight", "logistics_nine"];
const rawLogisticsImgs = import.meta.glob<string>("@/assets/images/footer/logistics_*.png", { eager: true, import: "default" });
const orderedLogisticsImgs = logisticsImgsOrder.map((name) => rawLogisticsImgs[`/src/assets/images/footer/${name}.png`]);

// 標章圖片
const labelImgs = Object.values(import.meta.glob<string>("@/assets/images/footer/reduction_label*.png", { eager: true, import: "default" }));

// 社群圖片
import facebookPNG from "@/assets/images/footer/facebook.png";
import instagramPNG from "@/assets/images/footer/instagram.png";
import linePNG from "@/assets/images/footer/line.png";
import linkedinPNG from "@/assets/images/footer/linkedin.png";
import blogPNG from "@/assets/images/footer/blog.png";

// 下載圖片
import qrcodePNG from "@/assets/images/footer/qr_code.png";
import appStorePNG from "@/assets/images/footer/app_store.png";
import googlePlayPNG from "@/assets/images/footer/google_play.png";
import appGalleryPNG from "@/assets/images/footer/app_gallery.png";

const socialMediaList = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/ShopeeTW",
    img: facebookPNG,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Shopee_TW/",
    img: instagramPNG,
  },
  {
    name: "Line",
    link: "https://page.line.me/shopee?openQrModal=true",
    img: linePNG,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/shopee",
    img: linkedinPNG,
  },
  {
    name: "蝦皮輯部落格",
    link: "https://shopee.tw/blog",
    img: blogPNG,
  },
];

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
              {orderedPaymentImgs.map((img) => (
                <div className={styles.listGridItem}>
                  <img key={img} src={img} alt="" />
                </div>
              ))}
            </div>
            <div className={styles.listTitle}>物流合作</div>
            <div className={styles.listGrid}>
              {orderedLogisticsImgs.map((img) => (
                <div className={styles.listGridItem}>
                  <img key={img} src={img} alt="" />
                </div>
              ))}
            </div>
            <div className={styles.listTitle}>蝦皮直送包裝減量標章</div>
            <div className={styles.listGrid}>
              {labelImgs.map((img) => (
                <div className={styles.listGridItem}>
                  <img key={img} src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.listWrap}>
            <div className={styles.listTitle}>關注我們</div>
            <div className={styles.listContent}>
              {socialMediaList.map((list) => (
                <a key={list.name} href={list.link} className={styles.list} target="_blank">
                  <img src={list.img} alt="" />
                  {list.name}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.listWrap}>
            <div className={styles.listTitle}>下載蝦皮</div>
            <div className={styles.listTwoColumn}>
              <div>
                <img src={qrcodePNG} alt="" />
              </div>
              <div className={styles.listContent}>
                <a href="https://shopee.tw/web" target="_blank">
                  <img src={appStorePNG} alt="" />
                </a>
                <a href="https://shopee.tw/web" target="_blank">
                  <img src={googlePlayPNG} alt="" />
                </a>
                <a href="https://shopee.tw/web" target="_blank">
                  <img src={appGalleryPNG} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
