import { FunctionComponent, useState, useCallback } from "react";
import Position from "./Position";
import PortalPopup from "./PortalPopup";
import Duration from "./Duration";
import { useNavigate } from "react-router-dom";
import styles from "./FrameInstance1.module.css";

export type FrameInstance1Type = {
  className?: string;
};

const FrameInstance1: FunctionComponent<FrameInstance1Type> = ({
  className = "",
}) => {
  const [isPositionOpen, setPositionOpen] = useState(false);
  const [isDurationOpen, setDurationOpen] = useState(false);
  const navigate = useNavigate();

  const openPosition = useCallback(() => {
    setPositionOpen(true);
  }, []);

  const closePosition = useCallback(() => {
    setPositionOpen(false);
  }, []);

  const openDuration = useCallback(() => {
    setDurationOpen(true);
  }, []);

  const closeDuration = useCallback(() => {
    setDurationOpen(false);
  }, []);

  const onBTNContainerClick = useCallback(() => {
    navigate("/volunteerp");
  }, [navigate]);

  const onBTNContainer1Click = useCallback(() => {
    navigate("/volunteerp");
  }, [navigate]);

  return (
    <>
      <div className={[styles.frameParent, className].join(" ")}>
        <div className={styles.paymentDetailsParent}>
          <b className={styles.paymentDetails}>Volunteer Application</b>
          <div className={styles.inputParent}>
            <div className={styles.input}>
              <div className={styles.label}>Position Applied For</div>
              <div className={styles.inputsearchoutline}>
                <div className={styles.input1}>
                  <div className={styles.billingInfo}>input text</div>
                </div>
                <img
                  className={styles.iconStroke}
                  alt=""
                  src="/icon-stroke.svg"
                  onClick={openPosition}
                />
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.label}>For How Long ?</div>
              <div className={styles.inputsearchoutline1}>
                <div className={styles.input3}>
                  <div className={styles.billingInfo}>input text</div>
                </div>
                <img
                  className={styles.iconStroke}
                  alt=""
                  src="/icon-stroke.svg"
                  onClick={openDuration}
                />
              </div>
            </div>
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
      {isPositionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePosition}
        >
          <Position onClose={closePosition} />
        </PortalPopup>
      )}
      {isDurationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDuration}
        >
          <Duration onClose={closeDuration} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameInstance1;
