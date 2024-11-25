import PropTypes from "prop-types";
import styles from "./Materia.module.css";

const Materia = ({ className = "", size = "Default", eNERO2025 }) => {
  return (
    <div className={[styles.month, className].join(" ")} data-size={size}>
      <div className={styles.enero2025}>{eNERO2025}</div>
    </div>
  );
};

Materia.propTypes = {
  className: PropTypes.string,
  eNERO2025: PropTypes.string,

  /** Variant props */
  size: PropTypes.number,
};

export default Materia;
