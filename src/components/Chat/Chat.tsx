import { useSelector } from "react-redux";
import styles from "./Chat.module.scss";
import { useState } from "react";
import type { RootState } from "../../store";

import chatIcon from "@/assets/images/icons/chat.svg";
import chatTextIcon from "@/assets/images/icons/chat_text.svg";
import chatTextChIcon from "@/assets/images/icons/chat_text_ch.svg";
import arrowRightIcon from "@/assets/images/icons/arrow_right.svg";
import arrowDownIcon from "@/assets/images/icons/arrow_down.svg";
import { sellerList } from "./chatData";

import loadingErrorPNG from "@/assets/images/chat/loading_error.png";
import startChatIcon from "@/assets/images/chat/start_chat.svg";
function Chat() {
  const [chatStatus, setChatStatus] = useState(true);
  const [dialogStatus, setDialogStatus] = useState(false);
  const [searchAllStatus, setSearchAllStatus] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [currentSeller, setCurrentSeller] = useState("");

  const filteredSellerList = sellerList
    .filter((item) => item.name.includes(keyword))
    .map((item) => {
      const index = item.name.indexOf(keyword);

      return {
        ...item,
        keyword,
        keywordIndex: index,
      };
    });

  function openDialog() {
    setChatStatus(false);
    setDialogStatus(true);
  }

  function closeDialog() {
    setDialogStatus(false);
    setTimeout(() => setChatStatus(true), 250);
  }
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  return (
    <>
      {!isLogin && (
        <div className={`${styles.chatBtn} ${chatStatus ? styles.active : styles.inactive}`} onClick={() => openDialog()}>
          <img src={chatIcon} alt="Chat" />
          <img src={chatTextIcon} alt="Chat text" />
        </div>
      )}
      {isLogin && (
        <div className={`${styles.chatBtn} ${chatStatus ? styles.active : styles.inactive}`} onClick={() => openDialog()}>
          <img src={chatIcon} alt="Chat" />
          <img src={chatTextChIcon} alt="聊天文字" />
        </div>
      )}
      {!isLogin && (
        <div className={`${styles.chatDialog} ${dialogStatus ? styles.active : styles.inactive}`}>
          <div className={styles.chatDialogTitle}>
            <div className={styles.chatTitleLeft}>
              <img src={chatTextIcon} alt="Chat text" />
            </div>
            <div className={styles.chatTitleRight}>
              <img src={arrowRightIcon} alt="Expand" />
              <img src={arrowDownIcon} alt="Collapse" onClick={() => closeDialog()} />
            </div>
          </div>
          <div className={styles.chatContent}>
            <div className={styles.chatContentInner}>
              <img src={loadingErrorPNG} alt="Load error" />
              <div className={styles.errorText}>抱歉，伺服器錯誤</div>
              <button className={styles.reloadBtn}>點擊重新加載</button>
            </div>
          </div>
        </div>
      )}
      {isLogin && (
        <div className={`${styles.chatDialog} ${dialogStatus ? styles.active : styles.inactive}`}>
          <div className={styles.chatDialogTitle}>
            <div className={styles.chatTitleLeft}>
              <img src={chatTextChIcon} alt="聊天文字" />
            </div>
            <div className={styles.chatTitleRight}>
              <img src={arrowRightIcon} alt="Expand" />
              <img src={arrowDownIcon} alt="Collapse" onClick={() => closeDialog()} />
            </div>
          </div>
          <div className={styles.chatContent}>
            <div className={styles.chatContentLeft}>
              <div className={styles.searchBar}>
                <div className={styles.searchBarLeft}>
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.456 14.456c-.301.3-.789.3-1.09 0L10.012 11.1a4.74 4.74 0 01-2.956 1.011c-1.412 0-2.608-.49-3.587-1.468C2.49 9.664 2 8.47 2 7.056c0-1.413.49-2.61 1.468-3.588C4.447 2.489 5.643 2 7.056 2c1.413 0 2.608.49 3.587 1.468.979.979 1.468 2.175 1.468 3.588A4.74 4.74 0 0111.1 10.01l3.356 3.356c.3.3.3.788 0 1.089zm-7.4-3.9c.972 0 1.798-.34 2.48-1.02.68-.682 1.02-1.508 1.02-2.48 0-.973-.34-1.8-1.02-2.48-.682-.68-1.508-1.02-2.48-1.02-.973 0-1.8.34-2.48 1.02-.68.68-1.02 1.507-1.02 2.48 0 .972.34 1.798 1.02 2.48.68.68 1.507 1.02 2.48 1.02z"
                      fill="#999"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="搜尋名稱"
                    onFocus={() => setSearchAllStatus(false)}
                    onBlur={() => setSearchAllStatus(true)}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                {searchAllStatus && (
                  <div className={styles.searchAll}>
                    全部
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25 9.19L4.28 5.22a.75.75 0 00-1.06 1.06l4.5 4.5a.75.75 0 001.06 0l4.5-4.5a.75.75 0 00-1.06-1.06L8.25 9.19z"
                        fill="#999"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
              <div className={styles.sellerList}>
                {filteredSellerList.map((seller) => (
                  <div className={styles.seller} key={seller.name} onMouseEnter={() => setCurrentSeller(seller.name)} onMouseLeave={() => setCurrentSeller("")}>
                    <img src={seller.img} alt={seller.name} />
                    <div className={styles.sellerInfo}>
                      <div className={styles.sellerInfoUpper}>
                        {!keyword ? (
                          <div className={styles.name}>{seller.name}</div>
                        ) : (
                          <div className={styles.name}>
                            {seller.name.slice(0, seller.keywordIndex)}
                            <span className={styles.keyword}>{seller.keyword}</span>
                            {seller.name.slice(seller.keywordIndex + seller.keyword.length)}
                          </div>
                        )}
                        <div className={styles.timestamp}>{seller.timestamp}</div>
                      </div>
                      <div className={styles.sellerInfoLower}>
                        <div>貼圖</div>
                        {seller.name === currentSeller && (
                          <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.25 9.19L4.28 5.22a.75.75 0 00-1.06 1.06l4.5 4.5a.75.75 0 001.06 0l4.5-4.5a.75.75 0 00-1.06-1.06L8.25 9.19z"
                              fill="#999"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.chatContentRight}>
              <div className={styles.chatContentRightInner}>
                <img src={startChatIcon} alt="Start chat" />
                <div className={styles.startChat}>歡迎使用蝦皮聊聊</div>
                <div className={styles.startChatEn}>Start chatting with our sellers now!</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
