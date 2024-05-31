import { FunctionComponent, useCallback } from "react";
import styles from "./FrameInstance.module.css";

export type FrameInstanceType = {
  className?: string;
  onClose?: () => void;
};

const FrameInstance: FunctionComponent<FrameInstanceType> = ({
  className = "",
  onClose,
}) => {
  const onBTNContainerClick = useCallback(() => {
    // Please sync "Volunteer" to the project
  }, []);

  const onBTNContainer1Click = useCallback(() => {
    // Please sync "Volunteer" to the project
  }, []);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.paymentDetailsParent}>
        <b className={styles.paymentDetails}>Contact Project</b>
        <div className={styles.theProjectOwner}>
          The project owner will reply to your message via your registered
          email.
        </div>
        <div className={styles.billing}>
          <div className={styles.billingInfo}>Message</div>
          <img
            className={styles.inputKopie7Icon}
            alt=""
            src="/input-kopie-71.svg"
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
              <div className={styles.billingInfo}>Sent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameInstance;
