import PropTypes from "prop-types";
import styles from "./AssistCell.module.css";

const AssistCell = ({ className = "", state = "Default" }) => {
  return (
    <div
      className={[styles.assistCell, className].join(" ")}
      data-state={state}
    >
      <div className={styles.assistCellChild} />
    </div>
  );
};

AssistCell.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  state: PropTypes.number,
};

export default AssistCell;
