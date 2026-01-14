import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import freeShippingPNG from "@/assets/images/cart/free_shipping.png";
import couponIcon from "@/assets/images/cart/coupon.svg";
import truckIcon from "@/assets/images/cart/truck.webp";
import arrowDownOrangeIcon from "@/assets/images/cart/arrow_down_orange.svg";
import { useState } from "react";
import { decreaseQuantity, deleteFromCart, increaseQuantity } from "../../store/cartSlice";

function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);
  const isAllChecked = selectedIds.length === cart.length;

  function toggleAll() {
    setSelectedIds((prev) => (prev.length === cart.length ? [] : cart.map((item) => item.id)));
  }

  function toggleItem(id) {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  }

  function handleSubtractQuantity(id, quantity) {
    if (quantity === 1) return;
    dispatch(decreaseQuantity(id));
  }

  function handleAddQuantity(id, quantity, remaining) {
    if (quantity === remaining) return;
    dispatch(increaseQuantity(id));
  }

  return (
    <div className={styles.cartWrap}>
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
                      <input value={item.quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
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
      </div>
    </div>
  );
}

export default Cart;
