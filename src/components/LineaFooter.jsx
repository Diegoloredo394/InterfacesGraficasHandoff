import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./LineaFooter.module.css";

const LineaFooter = ({
  className = "",
  color = "Cian",
  backgroundWidth,
  backgroundHeight,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      width: backgroundWidth,
      height: backgroundHeight,
    };
  }, [backgroundWidth, backgroundHeight]);

  return (
    <div
      className={[styles.background, className].join(" ")}
      data-color={color}
      style={backgroundStyle}
    >
      <div className={styles.backgroundChild} />
    </div>
  );
};

LineaFooter.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  color: PropTypes.number,

  /** Style props */
  backgroundWidth: PropTypes.string,
  backgroundHeight: PropTypes.string,
};

export default LineaFooter;
