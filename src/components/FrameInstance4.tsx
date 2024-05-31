import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameInstance4.module.css";

export type FrameInstance4Type = {
  className?: string;
};

const FrameInstance4: FunctionComponent<FrameInstance4Type> = ({
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
        <b className={styles.paymentDetails}>Links</b>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.label}>Linkedin</div>
            <div className={styles.inputsearchoutline}>
              <div className={styles.input1}>
                <div className={styles.standard}>
                  http://www.linkedin.com/in/vale3000
                </div>
              </div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>Plateform</div>
            <div className={styles.inputsearchoutline}>
              <div className={styles.input1}>
                <div className={styles.standard}>
                  http://www.linkedin.com/in/vale3000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <div className={styles.label}>Plateform</div>
            <div className={styles.inputsearchoutline}>
              <div className={styles.input1}>
                <div className={styles.standard}>
                  http://www.linkedin.com/in/vale3000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.label6}>Add More</div>
        <div className={styles.btnParent}>
          <div className={styles.btn} onClick={onBTNContainerClick}>
            <div className={styles.button}>
              <div className={styles.standard}>Cancel</div>
            </div>
          </div>
          <div className={styles.btn1} onClick={onBTNContainer1Click}>
            <div className={styles.button1}>
              <div className={styles.standard}>Confirm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameInstance4;
