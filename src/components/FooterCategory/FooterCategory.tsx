import styles from "./FooterCategory.module.scss";
import { Fragment } from "react";
import { firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn } from "./categories";

function FooterCategory() {
  return (
    <div className={styles.footerCategoryWrap}>
      <div className="container">
        <div className={styles.footerCategoryTitleWrap}>分類</div>
        <div className={styles.footerCategoryColumns}>
          <div className={styles.footerCategoryColumn}>
            {firstColumn.map((column, columnIndex) => (
              <div key={`${column.name}-${columnIndex}`} className={styles.sub}>
                <div className={styles.subCategoryTitle}>{column.name}</div>
                <div className={styles.subCategorys}>
                  {column.sub.map((item, index) => (
                    <Fragment key={`${item}-${index}`}>
                      <div className={styles.subCategory}>
                        <span className={styles.text}>{item}</span>
                      </div>
                      {index !== column.sub.length - 1 && <span className={styles.separator} />}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.footerCategoryColumn}>
            {secondColumn.map((column, columnIndex) => (
              <div key={`${column.name}-${columnIndex}`} className={styles.sub}>
                <div className={styles.subCategoryTitle}>{column.name}</div>
                <div className={styles.subCategorys}>
                  {column.sub.map((item, index) => (
                    <Fragment key={`${item}-${index}`}>
                      <div className={styles.subCategory}>
                        <span className={styles.text}>{item}</span>
                      </div>
                      {index !== column.sub.length - 1 && <span className={styles.separator} />}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.footerCategoryColumn}>
            {thirdColumn.map((column, columnIndex) => (
              <div key={`${column.name}-${columnIndex}`} className={styles.sub}>
                <div className={styles.subCategoryTitle}>{column.name}</div>
                <div className={styles.subCategorys}>
                  {column.sub.map((item, index) => (
                    <Fragment key={`${item}-${index}`}>
                      <div className={styles.subCategory}>
                        <span className={styles.text}>{item}</span>
                      </div>
                      {index !== column.sub.length - 1 && <span className={styles.separator} />}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.footerCategoryColumn}>
            {fourthColumn.map((column, columnIndex) => (
              <div key={`${column.name}-${columnIndex}`} className={styles.sub}>
                <div className={styles.subCategoryTitle}>{column.name}</div>
                <div className={styles.subCategorys}>
                  {column.sub.map((item, index) => (
                    <Fragment key={`${item}-${index}`}>
                      <div className={styles.subCategory}>
                        <span className={styles.text}>{item}</span>
                      </div>
                      {index !== column.sub.length - 1 && <span className={styles.separator} />}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.footerCategoryColumn}>
            {fifthColumn.map((column, columnIndex) => (
              <div key={`${column.name}-${columnIndex}`} className={styles.sub}>
                <div className={styles.subCategoryTitle}>{column.name}</div>
                <div className={styles.subCategorys}>
                  {column.sub.map((item, index) => (
                    <Fragment key={`${item}-${index}`}>
                      <div className={styles.subCategory}>
                        <span className={styles.text}>{item}</span>
                      </div>
                      {index !== column.sub.length - 1 && <span className={styles.separator} />}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCategory;
