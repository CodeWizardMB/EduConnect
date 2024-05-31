import { FunctionComponent } from "react";
import styles from "./Projects3.module.css";

export type Projects3Type = {
  className?: string;
};

const Projects3: FunctionComponent<Projects3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.projects, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.findProject}>Find Project</div>
      </div>
      <div className={styles.row}>
        <div className={styles.findProject}>Create Project</div>
      </div>
    </div>
  );
};

export default Projects3;
