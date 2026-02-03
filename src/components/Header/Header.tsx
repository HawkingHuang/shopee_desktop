import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

import bellIcon from "@/assets/images/icons/bell.svg";
import questionCircleIcon from "@/assets/images/icons/question_circle.svg";
import globalIcon from "@/assets/images/icons/global.svg";
import mainLogoIcon from "@/assets/images/icons/main_logo.svg";
import mainLogoOrangeIcon from "@/assets/images/icons/main_logo_orange.svg";
import searchIcon from "@/assets/images/icons/search.svg";
import cartIcon from "@/assets/images/icons/cart.svg";
import avatarIcon from "@/assets/images/icons/avatar.svg";
import emptyCartPNG from "@/assets/images/cart/empty_cart.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import * as HoverCard from "@radix-ui/react-hover-card";
import type { AppDispatch, RootState } from "../../store";

import qrcodePNG from "@/assets/images/header/qr_code.png";
import appStorePNG from "@/assets/images/header/app_store.png";
import googlePlayPNG from "@/assets/images/header/google_play.png";
import appGalleryPNG from "@/assets/images/header/app_gallery.png";
import notiNotLoginPNG from "@/assets/images/header/noti_not_login.png";

import notificationOne from "@/assets/images/header/notifications/1.jfif";
import notificationTwo from "@/assets/images/header/notifications/2.png";
import { hotKeywords } from "./headerData";

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

  const headerTop = (
    <>
      <div className={styles.headerLeft}>
        <NavLink to="/" className="navLink">
          賣家中心
        </NavLink>
        {!isLogin && (
          <NavLink to="/" className="navLink">
            開始隨拍即賣囉!
          </NavLink>
        )}
        <HoverCard.Root openDelay={100} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <NavLink to="/" className="navLink">
              下載
            </NavLink>
          </HoverCard.Trigger>

          <HoverCard.Content side="bottom" align="start" sideOffset={4} className={`${styles.downloadPanel} ${styles.hoverCard}`}>
            <img src={qrcodePNG} alt="" className={styles.qrCode} />
            <div className={styles.appWrap}>
              <img src={appStorePNG} alt="" />
              <img src={googlePlayPNG} alt="" />
              <img src={appGalleryPNG} alt="" />
            </div>
          </HoverCard.Content>
        </HoverCard.Root>
        <div className="navLink">
          追蹤我們
          <div className="socialMediaGroup">
            <a href="https://facebook.com/ShopeeTW" className="facebook"></a>
            <a href="https://instagram.com/Shopee_TW" className="instagram"></a>
            <a href="https://line.me/R/ti/p/@shopee" className="line"></a>
          </div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <HoverCard.Root openDelay={100} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <NavLink to="/" className="navLink">
              <img src={bellIcon} alt="" />
              通知總覽
            </NavLink>
          </HoverCard.Trigger>

          <HoverCard.Content side="bottom" align="end" sideOffset={4} className={`${styles.notificationPanel} ${styles.hoverCard}`}>
            <HoverCard.Arrow className={styles.arrow} />

            {!isLogin ? (
              <div className={styles.imgWrap}>
                <div className={styles.imgWrapInner}>
                  <img src={notiNotLoginPNG} alt="" />
                  <div>要看通知訊息，請先登入</div>
                </div>
                <div className={styles.btnWrap}>
                  <NavLink to="/signup">註冊</NavLink>
                  <NavLink to="/login">登入</NavLink>
                </div>
              </div>
            ) : (
              <div className={styles.notificationList}>
                <div className={styles.notificationTitle}>最近收到的通知</div>
                <div className={styles.notificationItem}>
                  <img src={notificationOne} alt="" />
                  <div className={styles.itemRight}>
                    <div className={styles.itemTitle}>驚！1/11神券已送達</div>
                    <div className={styles.itemContent}>天降好禮!請簽收全站滿千折$100、商城滿千折$200優惠券，記得1/11回來下單</div>
                  </div>
                </div>
                <div className={styles.notificationItem}>
                  <img src={notificationTwo} alt="" />
                  <div className={styles.itemRight}>
                    <div className={styles.itemTitle}>輝葉品牌日！年節備戰電動麻將桌下殺</div>
                    <div className={styles.itemContent}>品牌日一日限定📢小沙發按摩椅$19,999，年節必備電動麻將桌也只要$19,999，手刀點我下單👉</div>
                  </div>
                </div>
                <NavLink to="/" className={styles.notificationMore}>
                  查看全部
                </NavLink>
              </div>
            )}
          </HoverCard.Content>
        </HoverCard.Root>
        <NavLink to="/" className="navLink">
          <img src={questionCircleIcon} alt="" />
          幫助中心
        </NavLink>
        <HoverCard.Root openDelay={100} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <NavLink to="/" className="navLink">
              <img src={globalIcon} alt="" />
              繁體中文
              <svg viewBox="0 0 12 12" fill="none" width="12" height="12" color="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z" fill="currentColor"></path>
              </svg>
            </NavLink>
          </HoverCard.Trigger>

          <HoverCard.Content side="bottom" align="end" sideOffset={0} className={`${styles.languagePanel} ${styles.hoverCard}`}>
            <HoverCard.Arrow className={styles.arrow} />

            <ul className={styles.languageList}>
              <li>English</li>
              <li className={styles.active}>繁體中文</li>
              <li>简体中文</li>
            </ul>
          </HoverCard.Content>
        </HoverCard.Root>

        {!isLogin && (
          <>
            <NavLink to="/signup" className="navLink">
              註冊
            </NavLink>
            <NavLink to="/login" className={`navLink ${!isLogin ? styles.withBar : ""}`}>
              登入
            </NavLink>
          </>
        )}
        {isLogin && (
          <HoverCard.Root openDelay={100} closeDelay={100}>
            <HoverCard.Trigger asChild>
              <NavLink to="/" className="navLink">
                <img src={avatarIcon} alt="" className={styles.avatar} />
                {username}
              </NavLink>
            </HoverCard.Trigger>

            <HoverCard.Content side="bottom" align="end" sideOffset={0} className={`${styles.accountPanel} ${styles.hoverCard}`}>
              <HoverCard.Arrow className={styles.arrow} />

              <ul className={styles.accountList}>
                <li>我的帳戶</li>
                <li>購買清單</li>
                <li onClick={() => dispatch(logout())}>登出</li>
              </ul>
            </HoverCard.Content>
          </HoverCard.Root>
        )}
      </div>
    </>
  );

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
                  <img src={mainLogoOrangeIcon} alt="" />
                  <div className={styles.headerCartText}>購物車</div>
                </div>
                <div className={styles.headerSearch}>
                  <form className={styles.headerSearchInputForm} action="">
                    <input className={styles.headerSearchInput} type="text" placeholder="蝦皮直營 用券0門檻最高折$100" />
                    <button className={styles.headerSearchButton}>
                      <img src={searchIcon} alt="" />
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
                <img src={mainLogoIcon} alt="" />
              </div>
              <div className={styles.headerSearch}>
                <form className={styles.headerSearchInputForm} action="">
                  <input className={styles.headerSearchInput} type="text" placeholder="註冊獲得全站優惠券與免運券" />
                  <button className={styles.headerSearchButton}>
                    <img src={searchIcon} alt="" />
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
                      <img src={cartIcon} alt="" />
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
                              <img src={item.image} alt="" className={styles.cartPanelItemImage} />
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
