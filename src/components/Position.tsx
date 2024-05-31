import { FunctionComponent } from "react";
import styles from "./Position.module.css";

export type PositionType = {
  className?: string;
};

const Position: FunctionComponent<PositionType> = ({ className = "" }) => {
  return (
    <div className={[styles.position, className].join(" ")}>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector.svg" />
        <div className={styles.position1}>Position</div>
      </div>
      <div className={styles.row1}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.position1}>Position</div>
      </div>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.position1}>Position</div>
      </div>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.position1}>Position</div>
      </div>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.position1}>Position</div>
      </div>
      <div className={styles.row}>
        <img className={styles.selectorIcon} alt="" src="/selector1.svg" />
        <div className={styles.position1}>Position</div>
      </div>
    </div>
  );
};

export default Position;
