import styles from "./LoginSignup.module.scss";
import mainLogoOrangeIcon from "@/assets/images/icons/main_logo_orange.svg";
import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import type { AppDispatch } from "../../store";

function LoginSignup() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(login(username));
    setUsername("");
    navigate("/");
  }
  return (
    <div className={styles.loginSignupWrap}>
      <div className="container">
        <div className={styles.loginSignupWrapUpper}>
          <div className={styles.loginSignupWrapUpperLeft}>
            <NavLink to="/">
              <img src={mainLogoOrangeIcon} alt="Shopee logo" />
            </NavLink>
            <div className={styles.loginSignupTitle}>{location.pathname === "/login" ? "登入" : "註冊"}</div>
          </div>
          <div className={styles.loginSignupWrapUpperRight}>
            <NavLink to="/" className="navLink">
              需要幫助？
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.loginSignupWrapLower}>
        <div className={styles.loginSignupWrapLowerInner}>
          <div className={styles.formWrap}>
            <div className={styles.formTitle}>{location.pathname === "/login" ? "登入" : "註冊"}</div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              {location.pathname === "/signup" && (
                <>
                  <input type="text" placeholder="手機號碼" />
                </>
              )}
              {location.pathname === "/login" && (
                <>
                  <input type="text" placeholder="電話號碼/使用者名稱/Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <input type="password" placeholder="密碼" />
                </>
              )}
              <input type="submit" value={location.pathname === "/login" ? "登入" : "下一步"} className={styles.formSubmitBtn} />
            </form>
            <NavLink to="/" className="navLink">
              忘記密碼
            </NavLink>
            <div className={styles.dividerWrap}>
              <div className={styles.divider}></div>
              <div>或</div>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.thirdPartyWrap}>
              <button className={styles.thirdPartyBtn}>
                <div className={styles.facebook}></div>
                <div>Facebook</div>
              </button>
              <button className={styles.thirdPartyBtn}>
                <div className={styles.google}></div>
                <div>Google</div>
              </button>
            </div>

            {location.pathname === "/login" && (
              <div className={styles.newFriendWrap}>
                蝦皮新朋友？
                <NavLink to="/signup" className={styles.signup}>
                  註冊
                </NavLink>
              </div>
            )}

            {location.pathname === "/signup" && (
              <>
                <div className={styles.agreements}>
                  點擊「下一步」或繼續註冊，即表示您已閱讀並同意
                  <br />
                  蝦皮購物的<span className={styles.term}>服務條款</span>與<span className={styles.term}>隱私政策</span>
                </div>
                <div className={styles.alreadyFriendWrap}>
                  已經有帳號了嗎？
                  <NavLink to="/login" className={styles.login}>
                    登入
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
