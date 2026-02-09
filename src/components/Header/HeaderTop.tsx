import { NavLink } from "react-router-dom";
import * as HoverCard from "@radix-ui/react-hover-card";
import styles from "./HeaderTop.module.scss";

import bellIcon from "@/assets/images/icons/bell.svg";
import questionCircleIcon from "@/assets/images/icons/question_circle.svg";
import globalIcon from "@/assets/images/icons/global.svg";
import avatarIcon from "@/assets/images/icons/avatar.svg";

import qrcodePNG from "@/assets/images/header/qr_code.png";
import appStorePNG from "@/assets/images/header/app_store.png";
import googlePlayPNG from "@/assets/images/header/google_play.png";
import appGalleryPNG from "@/assets/images/header/app_gallery.png";
import notiNotLoginPNG from "@/assets/images/header/noti_not_login.png";

import notificationOne from "@/assets/images/header/notifications/1.jfif";
import notificationTwo from "@/assets/images/header/notifications/2.png";

type HeaderTopProps = {
  isLogin: boolean;
  username: string;
  onLogout: () => void;
};

function HeaderTop({ isLogin, username, onLogout }: HeaderTopProps) {
  return (
    <div className={styles.headerTop}>
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
            <img src={qrcodePNG} alt="Shopee app QR code" className={styles.qrCode} />
            <div className={styles.appWrap}>
              <img src={appStorePNG} alt="App Store" />
              <img src={googlePlayPNG} alt="Google Play" />
              <img src={appGalleryPNG} alt="AppGallery" />
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
              <img src={bellIcon} alt="Notifications" />
              通知總覽
            </NavLink>
          </HoverCard.Trigger>

          <HoverCard.Content side="bottom" align="end" sideOffset={4} className={`${styles.notificationPanel} ${styles.hoverCard}`}>
            <HoverCard.Arrow className={styles.arrow} />

            {!isLogin ? (
              <div className={styles.imgWrap}>
                <div className={styles.imgWrapInner}>
                  <img src={notiNotLoginPNG} alt="Notifications prompt" />
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
                  <img src={notificationOne} alt="Notification 1" />
                  <div className={styles.itemRight}>
                    <div className={styles.itemTitle}>驚！1/11神券已送達</div>
                    <div className={styles.itemContent}>天降好禮!請簽收全站滿千折$100、商城滿千折$200優惠券，記得1/11回來下單</div>
                  </div>
                </div>
                <div className={styles.notificationItem}>
                  <img src={notificationTwo} alt="Notification 2" />
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
          <img src={questionCircleIcon} alt="Help" />
          幫助中心
        </NavLink>
        <HoverCard.Root openDelay={100} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <NavLink to="/" className="navLink">
              <img src={globalIcon} alt="Language" />
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
                <img src={avatarIcon} alt="User avatar" className={styles.avatar} />
                {username}
              </NavLink>
            </HoverCard.Trigger>

            <HoverCard.Content side="bottom" align="end" sideOffset={0} className={`${styles.accountPanel} ${styles.hoverCard}`}>
              <HoverCard.Arrow className={styles.arrow} />

              <ul className={styles.accountList}>
                <li>我的帳戶</li>
                <li>購買清單</li>
                <li onClick={onLogout}>登出</li>
              </ul>
            </HoverCard.Content>
          </HoverCard.Root>
        )}
      </div>
    </div>
  );
}

export default HeaderTop;
