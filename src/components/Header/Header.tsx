import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import type { HeaderProps } from "../../types/components";

import bellIcon from "@/assets/images/icons/bell.svg";
import questionCircleIcon from "@/assets/images/icons/question_circle.svg";
import globalIcon from "@/assets/images/icons/global.svg";
import mainLogoIcon from "@/assets/images/icons/main_logo.svg";
import searchIcon from "@/assets/images/icons/search.svg";
import cartIcon from "@/assets/images/icons/cart.svg";

const hotKeywords = ["手機殼", "美式衣服", "藍芽耳機", "曠野之心", "行動電源", "iPhone 14pro Max", "外套", "質感手機殼", "存錢本", "好看水壺", "流行服飾"];

function Header({ isLogin }: HeaderProps) {
  return (
    <header className={styles.headerWrap}>
      <div className="container">
        <div className={styles.headerWrapUpper}>
          <div className={styles.headerLeft}>
            <NavLink to="/" className="navLink">
              賣家中心
            </NavLink>
            {!isLogin && (
              <NavLink to="/" className="navLink">
                開始隨拍即賣囉！
              </NavLink>
            )}
            <NavLink to="/" className="navLink">
              下載
            </NavLink>
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
            <NavLink to="/" className="navLink">
              <img src={bellIcon} alt="" />
              通知總覽
            </NavLink>
            <NavLink to="/" className="navLink">
              <img src={questionCircleIcon} alt="" />
              幫助中心
            </NavLink>
            <NavLink to="/" className="navLink">
              <img src={globalIcon} alt="" />
              繁體中文
            </NavLink>
            <NavLink to="/" className="navLink">
              註冊
            </NavLink>
            <NavLink to="/" className="navLink">
              登入
            </NavLink>
          </div>
        </div>
        <div className="container">
          <div className={styles.headerWrapLower}>
            <div className={styles.headerLogo}>
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
              <img src={cartIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
