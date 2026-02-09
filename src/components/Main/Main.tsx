import styles from "./Main.module.scss";

import officialImg from "@/assets/images/main/official.jfif";
import redBgBottom from "@/assets/images/main/red_bg_bottom.png";
import { productText } from "./mainData";

const productImgs = Object.entries(
  import.meta.glob<string>("@/assets/images/main/products/*.jfif", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([_, img]) => img);

const vendorImgs = Object.entries(
  import.meta.glob<string>("@/assets/images/main/vendors/*.png", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([_, img]) => img);

const productVendorList = productImgs.map((productImg, index) => {
  return {
    productImg,
    vendorImg: vendorImgs[index],
    productText: productText[index],
  };
});

function Main() {
  return (
    <div className={styles.mainWrap}>
      <div className="container">
        <img className={styles.officialImg} src={officialImg} alt="Official store" />
        <div className={styles.main}>
          <div className={styles.mainMiddle}>
            <p className={styles.mainMiddleText}>每週日搶商城95折券，最高折$1,500</p>
            <a className={styles.mainMiddleMore} href="">
              查看更多
              <svg enable-background="new 0 0 13 21" viewBox="0 0 13 21" role="img">
                <path stroke="none" fill="#ffffff" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path>
              </svg>
            </a>
          </div>
          <div className={styles.productsVendorsWrap}>
            {productVendorList.map(({ productImg, vendorImg, productText }) => (
              <div className={styles.productVendor} key={productImg}>
                <div className={styles.productImgWrap}>
                  <img className={styles.productImg} src={productImg} alt={productText} />
                  <div className={styles.vendorImgWrap}>
                    <img className={styles.vendorImg} src={vendorImg} alt="Vendor logo" />
                  </div>
                </div>
                <p className={styles.productText}>{productText}</p>
              </div>
            ))}
          </div>
        </div>
        <img className={styles.redBgBottom} src={redBgBottom} alt="Promotion banner" />
      </div>
    </div>
  );
}

export default Main;
