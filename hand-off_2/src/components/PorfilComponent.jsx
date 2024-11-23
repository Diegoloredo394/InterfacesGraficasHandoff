import Backpage from "./Backpage";
import User1 from "./User1";
import PropTypes from "prop-types";
import styles from "./PorfilComponent.module.css";

const PorfilComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.chevronParent}>
        <Backpage property1="chevron-left" />
        <div className={styles.newObject}>
          <div className={styles.titles}>
            <div className={styles.heading}>
              <b className={styles.heading1}> Perfil</b>
            </div>
          </div>
          <div className={styles.buttonStyle3}>
            <div className={styles.div}>+</div>
          </div>
        </div>
      </div>
      <User1 />
    </div>
  );
};

PorfilComponent.propTypes = {
  className: PropTypes.string,
};

export default PorfilComponent;
