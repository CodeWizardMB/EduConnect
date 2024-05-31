import { FunctionComponent } from "react";
import styles from "./Duration.module.css";

export type DurationType = {
  className?: string;
};

const Duration: FunctionComponent<DurationType> = ({ className = "" }) => {
  return (
    <div className={[styles.duration, className].join(" ")}>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector.svg" />
        <div className={styles.to1Month}>0 to 1 month</div>
      </div>
      <div className={styles.row1}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.to1Month}>1 to 3 months</div>
      </div>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.to1Month}>3 to 6 months</div>
      </div>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.to1Month}>{`6 months to 1 year `}</div>
      </div>
    </div>
  );
};

export default Duration;
