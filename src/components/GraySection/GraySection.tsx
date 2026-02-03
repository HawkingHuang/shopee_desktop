import styles from "./GraySection.module.scss";
import type { PropsWithChildren } from "react";

function GraySection({ children }: PropsWithChildren) {
  return (
    <div className={styles.graySection}>
      <div>{children}</div>
    </div>
  );
}

export default GraySection;
