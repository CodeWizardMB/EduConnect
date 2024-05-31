import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameInstance2.module.css";

export type FrameInstance2Type = {
  className?: string;
};

const FrameInstance2: FunctionComponent<FrameInstance2Type> = ({
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
        <b className={styles.paymentDetails}>Profile</b>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.label}>Full Name</div>
            <div className={styles.inputsearchoutline}>
              <div className={styles.input1}>
                <div className={styles.billingInfo}>Name</div>
              </div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>Location</div>
            <div className={styles.inputsearchoutline}>
              <div className={styles.input1}>
                <div className={styles.billingInfo}>Country</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <div className={styles.label}>Expertise</div>
            <div className={styles.inputsearchoutline2}>
              <div className={styles.input1}>
                <div className={styles.billingInfo}>Select</div>
              </div>
              <img
                className={styles.iconStroke}
                alt=""
                src="/icon-stroke.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.billing}>
          <div className={styles.billingInfo}>Bio</div>
          <img
            className={styles.inputKopie7Icon}
            alt=""
            src="/input-kopie-72.svg"
          />
        </div>
        <div className={styles.btnParent}>
          <div className={styles.btn} onClick={onBTNContainerClick}>
            <div className={styles.button}>
              <div className={styles.billingInfo}>Cancel</div>
            </div>
          </div>
          <div className={styles.btn1} onClick={onBTNContainer1Click}>
            <div className={styles.button1}>
              <div className={styles.billingInfo}>Confirm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameInstance2;
