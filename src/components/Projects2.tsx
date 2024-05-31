import { FunctionComponent } from "react";
import styles from "./Projects2.module.css";

export type Projects2Type = {
  className?: string;
};

const Projects2: FunctionComponent<Projects2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.projects, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.myProfile}>My Profile</div>
      </div>
      <div className={styles.row}>
        <div className={styles.myProfile}>Log Out</div>
      </div>
    </div>
  );
};

export default Projects2;
