import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

import mainLogoIcon from "@/assets/images/icons/main_logo.svg";
import mainLogoOrangeIcon from "@/assets/images/icons/main_logo_orange.svg";
import searchIcon from "@/assets/images/icons/search.svg";
import cartIcon from "@/assets/images/icons/cart.svg";
import emptyCartPNG from "@/assets/images/cart/empty_cart.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import * as HoverCard from "@radix-ui/react-hover-card";
import type { AppDispatch, RootState } from "../../store";
import { hotKeywords } from "./headerData";
import HeaderTop from "./HeaderTop";

function Header() {
  const cart = useSelector((state: RootState) => state.cart);
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  function formatNumber(num: number) {
    return new Intl.NumberFormat("en-US").format(num);
  }
  const navigate = useNavigate();
  const { isLogin, username } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const headerTop = <HeaderTop isLogin={isLogin} username={username} onLogout={() => dispatch(logout())} />;

  return (
    <header className={isCartPage ? styles.headerWrapCart : styles.headerWrap}>
      {isCartPage ? (
        <>
          <div className={styles.headerWrapUpper}>
            <div className="container">{headerTop}</div>
          </div>
          <div className={styles.bgWhiteSection}>
            <div className="container">
              <div className={styles.headerWrapLower}>
                <div className={styles.headerLogo} onClick={() => navigate("/")}>
                  <img src={mainLogoOrangeIcon} alt="Shopee logo" />
                  <div className={styles.headerCartText}>購物車</div>
                </div>
                <div className={styles.headerSearch}>
                  <form className={styles.headerSearchInputForm} action="">
                    <input className={styles.headerSearchInput} type="text" placeholder="蝦皮直營 用券0門檻最高折$100" />
                    <button className={styles.headerSearchButton}>
                      <img src={searchIcon} alt="Search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className={styles.headerWrapUpper}>{headerTop}</div>
          <div className="container">
            <div className={styles.headerWrapLower}>
              <div className={styles.headerLogo} onClick={() => navigate("/")}>
                <img src={mainLogoIcon} alt="Shopee logo" />
              </div>
              <div className={styles.headerSearch}>
                <form className={styles.headerSearchInputForm} action="">
                  <input className={styles.headerSearchInput} type="text" placeholder="註冊獲得全站優惠券與免運券" />
                  <button className={styles.headerSearchButton}>
                    <img src={searchIcon} alt="Search" />
                  </button>
                </form>
                <div className={styles.headerSearchSuggestion}>
                  {hotKeywords.map((keyword) => (
                    <a key={keyword}>{keyword}</a>
                  ))}
                </div>
              </div>
              <div className={styles.headerCart}>
                <HoverCard.Root openDelay={100} closeDelay={100}>
                  <HoverCard.Trigger asChild>
                    <div className={styles.cartIconWrap} onClick={() => navigate(isLogin ? "/cart" : "/login")}>
                      <img src={cartIcon} alt="Cart" />
                      {cart.length > 0 && <div className={styles.cartItemCount}>{cart.length}</div>}
                    </div>
                  </HoverCard.Trigger>

                  <HoverCard.Content side="bottom" align="end" sideOffset={0} alignOffset={-10} className={`${styles.cartPanel} ${styles.hoverCard}`}>
                    <HoverCard.Arrow className={styles.arrow} />
                    <div className={styles.cartPanelList}>
                      {cart.length === 0 ? (
                        <div className={styles.cartPanelEmpty}>
                          <img src={emptyCartPNG} alt="Empty cart" />
                          尚無商品
                        </div>
                      ) : (
                        <>
                          <div className={styles.cartPanelTitle}>最近加入的商品</div>
                          {cart.map((item) => (
                            <div key={item.id} className={styles.cartPanelItem}>
                              <img src={item.image} alt={item.productName} className={styles.cartPanelItemImage} />
                              <div className={styles.cartPanelItemName}>{item.productName}</div>
                              <div className={styles.cartPanelItemPrice}>${formatNumber(item.price)}</div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    {cart.length > 0 && (
                      <div className={styles.cartPanelFooter}>
                        <NavLink to="/cart" className={styles.cartPanelFooterLink}>
                          查看我的購物車
                        </NavLink>
                      </div>
                    )}
                  </HoverCard.Content>
                </HoverCard.Root>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
