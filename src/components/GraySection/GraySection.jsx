import styles from "./GraySection.module.scss";

function GraySection({ children }) {
  return (
    <div className={styles.graySection}>
      <div>{children}</div>
    </div>
  );
}

export default GraySection;
