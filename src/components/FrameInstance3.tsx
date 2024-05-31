import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameInstance3.module.css";

export type FrameInstance3Type = {
  className?: string;
};

const FrameInstance3: FunctionComponent<FrameInstance3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBTNContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onBTNContainer1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.paymentDetailsParent}>
        <b className={styles.paymentDetails}>Files</b>
        <div className={styles.frameGroup}>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.label}>{`Resume `}</div>
              <div className={styles.buttonIcon}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.paymentDetails}>upload something</div>
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.label}>Other Files</div>
              <div className={styles.buttonIcon}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.paymentDetails}>upload something</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.label2}>Add More</div>
        <div className={styles.btnParent}>
          <div className={styles.btn} onClick={onBTNContainerClick}>
            <div className={styles.button}>
              <div className={styles.paymentDetails}>Cancel</div>
            </div>
          </div>
          <div className={styles.btn1} onClick={onBTNContainer1Click}>
            <div className={styles.button1}>
              <div className={styles.paymentDetails}>Confirm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameInstance3;
