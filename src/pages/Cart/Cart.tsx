import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import freeShippingPNG from "@/assets/images/cart/free_shipping.png";
import couponIcon from "@/assets/images/cart/coupon.svg";
import truckIcon from "@/assets/images/cart/truck.webp";
import arrowDownOrangeIcon from "@/assets/images/cart/arrow_down_orange.svg";
import coinIcon from "@/assets/images/cart/coin.svg";
import questionIcon from "@/assets/images/cart/question.svg";
import emptyCartPNG from "@/assets/images/cart/empty_cart.png";
import { useEffect, useRef, useState } from "react";
import { decreaseQuantity, deleteFromCart, increaseQuantity, setQuantity } from "../../store/cartSlice";
import { useLocation } from "react-router-dom";

function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

function Cart() {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);
  const isAllChecked = selectedIds.length === cart.length;

  const sentinelRef = useRef(null);
  const checkoutRef = useRef(null);
  const [isStuck, setIsStuck] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  function toggleAll() {
    setSelectedIds((prev) => (prev.length === cart.length ? [] : cart.map((item) => item.id)));
  }

  function toggleItem(id) {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  }

  function handleSetQuantity(id, targetValue) {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (!item) return;

    dispatch(setQuantity({ id, quantity: targetValue }));
  }

  function handleSubtractQuantity(id, quantity) {
    if (quantity === 1) return;
    dispatch(decreaseQuantity(id));
  }

  function handleAddQuantity(id, quantity, remaining) {
    if (quantity === remaining) return;
    dispatch(increaseQuantity(id));
  }

  const totalPrice = cart.filter((item) => selectedIds.includes(item.id)).reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.cartWrap} style={location.pathname === "/cart" ? { marginTop: "130px" } : {}}>
      {cart.length === 0 && (
        <div className="container">
          <div className={styles.emptyCartWrap}>
            <img src={emptyCartPNG} alt="" />
            <div className={styles.cartEmptyText}>你的購物車還是空的</div>
            <button>去蝦拼吧！</button>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="container">
          <div className={styles.tableHeadWrap}>
            <div>
              <input type="checkbox" className={styles.checkbox} checked={isAllChecked} onChange={toggleAll} />
            </div>
            <div>商品</div>
            <div>單價</div>
            <div>數量</div>
            <div>總計</div>
            <div>操作</div>
          </div>

          {cart.map((item) => (
            <>
              <div className={styles.productInfo}>
                <div className={styles.sellerWrap}>
                  <div>
                    <input type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => toggleItem(item.id)} />
                  </div>
                  <div>{item.seller}</div>
                </div>
                <div key={item.id} className={styles.tableItemWrap}>
                  <div>
                    <input type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => toggleItem(item.id)} />
                  </div>
                  <div>
                    <img src={item.image} alt="" />
                    <div className={styles.product}>
                      <div className={styles.productName}>{item.productName}</div>
                      <img src={freeShippingPNG} alt="" />
                    </div>
                  </div>
                  <div>${formatNumber(item.price)}</div>
                  <div className={styles.quantity}>
                    <div className={styles.quantityAdjustment}>
                      <button onClick={() => handleSubtractQuantity(item.id, item.quantity)}>
                        <svg width="10" height="10" enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" fill="rgba(0, 0, 0, 0.8)">
                          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                        </svg>
                      </button>
                      <div className={styles.inputWrap}>
                        <input value={item.quantity} onChange={(e) => handleSetQuantity(item.id, Number(e.target.value))} />
                      </div>
                      <button onClick={() => handleAddQuantity(item.id, item.quantity, item.remaining)}>
                        <svg width="10" height="10" enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" fill="rgba(0, 0, 0, 0.8)">
                          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                        </svg>
                      </button>
                    </div>
                    <div className={styles.remaining}>剩下 {item.remaining} 個商品</div>
                  </div>
                  <div>${formatNumber(item.price * item.quantity)}</div>
                  <div className={styles.deleteWrap}>
                    <div className={styles.delete} onClick={() => dispatch(deleteFromCart(item.id))}>
                      刪除
                    </div>
                    <div className={styles.similar}>
                      找相似
                      <img src={arrowDownOrangeIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.couponWrap}>
                  <div>
                    <img src={couponIcon} alt="" />
                  </div>
                  <div>請輸入賣場優惠券代碼</div>
                </div>
                <div className={styles.shippingWrap}>
                  <div>
                    <img src={truckIcon} alt="" />
                  </div>
                  <div>
                    滿$149，蝦皮店到店，免運費<span>了解更多</span>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div ref={checkoutRef} className={`${styles.checkoutWrap} ${isStuck ? styles.isStuck : ""}`}>
            <div className={styles.firstRow}>
              <div className={styles.couponAll}>
                <img src={couponIcon} alt="" />
                全站優惠券
              </div>
              <div className={styles.chooseCoupon}>選擇優惠券或輸入優惠代碼</div>
            </div>
            <div className={styles.dashedBorder}></div>
            <div className={styles.secondRowLeft}>
              <div className={styles.fakeCheckbox}></div>
            </div>
            <div className={styles.secondRowRight}>
              <div className={styles.shopeeCoin}>
                <img src={coinIcon} alt="" />
                <div>蝦幣</div>
              </div>
              <div className={styles.noItemSelected}>
                <div>尚未選擇商品</div>
                <img src={questionIcon} alt="" />
              </div>
            </div>
            <div className={styles.dashedBorder}></div>
            <div className={styles.thirdRow}>
              <div className={styles.thirdRowLeft}>
                <input type="checkbox" className={styles.checkbox} checked={isAllChecked} onChange={toggleAll} />
                <div>全選 ({cart.length})</div>
              </div>
              <div className={styles.thirdRowRight}>
                <div className={styles.totalPrice}>
                  總金額 ({selectedIds.length}件商品): <span>${formatNumber(totalPrice)}</span>
                </div>
                <button className={styles.checkout}>去買單</button>
              </div>
            </div>
          </div>
          <div ref={sentinelRef} style={{ height: 1 }} />
        </div>
      )}
    </div>
  );
}

export default Cart;
