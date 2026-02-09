import styles from "./Product.module.scss";
import { mergedMainItemInfo, type DailyNewItem } from "../../components/DailyNew/merchandise";
import { useNavigate, useParams } from "react-router-dom";
import truckIcon from "../../assets/images/product/truck.svg";
import shieldIcon from "../../assets/images/product/shield.svg";
import arrowRightBlue from "../../assets/images/icons/arrow_right_blue.svg";
import AddToCartIcon from "../../assets/images/icons/add_to_cart.svg";
import emptyHeartIcon from "../../assets/images/product/empty_heart.svg";
import solidHeartIcon from "../../assets/images/product/solid_heart.svg";
import arrowBreadcrumb from "../../assets/images/product/arrow_breadcrumb.svg";
import ratingStarIcon from "../../assets/images/product/rating_star.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import type { AppDispatch } from "../../store";

function Product() {
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const currentProduct: DailyNewItem | undefined = mergedMainItemInfo.find((item) => item.id === Number(productId));
  const [quantity, setQuantity] = useState(1);
  const [likeStatus, setLikeStatus] = useState(false);
  const [likes, setLikes] = useState<number>(currentProduct?.likes ?? 0);
  const navigate = useNavigate();
  const originalPrice = currentProduct && currentProduct.discount ? ((currentProduct.price * 10) / currentProduct.discount).toFixed(0) : null;
  const installmentPrice = currentProduct ? Math.ceil(currentProduct.price / 3) : 0;

  function addLike() {
    setLikeStatus((likeStatus) => !likeStatus);
    setLikes((likes) => likes + 1);
  }

  function removeLike() {
    setLikeStatus((likeStatus) => !likeStatus);
    setLikes((likes) => likes - 1);
  }

  function handleSubtractQuantity() {
    if (quantity === 1) return;
    setQuantity((quantity) => quantity - 1);
  }

  function handleAddQuantity() {
    if (quantity === currentProduct?.remaining) return;
    setQuantity((quantity) => quantity + 1);
  }

  function handleAddtoCart() {
    if (!currentProduct) return;
    dispatch(
      addToCart({
        id: currentProduct.id,
        seller: currentProduct.seller,
        image: currentProduct.img,
        productName: currentProduct.name,
        price: currentProduct.price,
        quantity,
        remaining: currentProduct.remaining,
      }),
    );
  }

  function handleBuyNow() {
    handleAddtoCart();
    navigate("/cart");
  }
  return (
    <div className={styles.productWrap}>
      <div className="container">
        <div className={styles.breadcrumb}>
          {currentProduct?.breadcrumb.map((bread) => (
            <div key={bread} className={styles.bread}>
              <span>{bread}</span>
              <img src={arrowBreadcrumb} alt="Breadcrumb separator" />
            </div>
          ))}
          <div className={styles.productName}>{currentProduct?.name}</div>
        </div>
        <div className={styles.productMainContent}>
          <div className={styles.productMainContentLeft}>
            <div className={styles.item}>
              <div className={styles.itemImgWrap}>
                <img className={styles.itemImg} src={currentProduct?.img} alt={currentProduct?.name ?? "Product image"} />
                <div className={styles.bottomLeftImgWrap}>
                  <img className={styles.bottomLeftImg} src={currentProduct?.bottomLeftImg} alt={currentProduct?.name ? `${currentProduct.name} badge` : "Promotion badge"} />
                </div>
              </div>
            </div>

            <div className={styles.shareSection}>
              <div className={styles.platforms}>
                <div>分享:</div>
                <div className={styles.platformsInner}>
                  <button className={styles.platform}></button>
                  <button className={styles.platform}></button>
                  <button className={styles.platform}></button>
                  <button className={styles.platform}></button>
                </div>
              </div>
              <div className={styles.likes}>
                {!likeStatus ? <img src={emptyHeartIcon} alt="Add to favorites" onClick={() => addLike()} /> : <img src={solidHeartIcon} alt="Remove from favorites" onClick={() => removeLike()} />}
                喜歡 ({likes})
              </div>
            </div>
          </div>
          <div className={styles.productMainContentRight}>
            <div className={styles.itemName}>{currentProduct?.name}</div>
            <div className={styles.rating}>
              <div className={styles.ratingStar}>
                <div className={styles.ratingNumber}>5.0</div>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img src={ratingStarIcon} alt="Rating star" key={index} />
                  ))}
                </div>
              </div>
              <div className={styles.comments}>
                <div className={styles.commentsNumber}>{currentProduct?.comments}</div>
                <span>評價</span>
              </div>
              <div className={styles.sold}>
                <div className={styles.soldNumber}>{currentProduct?.sold}</div>
                <span>已售出</span>
              </div>
            </div>
            <div className={styles.itemPrice}>
              <span className={styles.currentPrice}>${currentProduct?.price}</span>
              {originalPrice && <span className={styles.originalPrice}>${originalPrice}</span>}
              {currentProduct?.discount && <span className={styles.discount}>{currentProduct?.discount}折</span>}
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detail}>
                <div className={styles.detailTitle}>分期0利率</div>
                <div className={styles.installment}>
                  3期x ${installmentPrice} (0利率){" "}
                  <a href="" className={styles.allPlans}>
                    查看全部方案
                    <img src={arrowRightBlue} alt="View plans" />
                  </a>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailTitle}>運送</div>
                <div className={styles.shipping}>
                  <img src={truckIcon} alt="Shipping" />
                  <div className={styles.shippingContent}>
                    <div>預計配達時間 1月14日 - 1月16日</div>
                    <div>運費：$0 起</div>
                    <div className={styles.notes}>如果訂單未能準時配達，您可以領取 $10 優惠券作為補償</div>
                  </div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailTitle}>服務與保障</div>
                <div className={styles.refund}>
                  <img src={shieldIcon} alt="Buyer protection" />
                  <div>蝦皮放心買 · 蝦皮安心退</div>
                  <svg viewBox="0 0 12 12" fill="none" width="12" height="12" color="#0000008a">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailTitle}>數量</div>
                <div className={styles.quantity}>
                  <div className={styles.quantityAdjustment}>
                    <button onClick={() => handleSubtractQuantity()}>
                      <svg width="10" height="10" enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" fill="rgba(0, 0, 0, 0.8)">
                        <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                      </svg>
                    </button>
                    <div className={styles.inputWrap}>
                      <input value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                    </div>
                    <button onClick={() => handleAddQuantity()}>
                      <svg width="10" height="10" enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" fill="rgba(0, 0, 0, 0.8)">
                        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                      </svg>
                    </button>
                  </div>
                  <div className={styles.remaining}>還剩 {currentProduct?.remaining} 件</div>
                </div>
              </div>
            </div>
            <div className={styles.itemActions}>
              <button className={styles.addToCart} onClick={() => handleAddtoCart()}>
                <img src={AddToCartIcon} alt="Add to cart" />
                加入購物車
              </button>
              <button className={styles.buyNow} onClick={() => handleBuyNow()}>
                直接購買
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
