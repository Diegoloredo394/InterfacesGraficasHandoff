import PropTypes from "prop-types";
import styles from "./Backpage.module.css";

const Backpage = ({
  className = "",
  property1 = "chevron-left",
  onChevronContainerClick,
}) => {
  return (
    <div
      className={[styles.chevron, className].join(" ")}
      data-property1={property1}
      onClick={onChevronContainerClick}
    >
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

Backpage.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Action props */
  onChevronContainerClick: PropTypes.func,
};

export default Backpage;
