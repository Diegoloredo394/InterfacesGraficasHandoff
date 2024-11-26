import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Header1.module.css";

const Header1 = ({
  className = "",
  property1 = "Default",
  headerWidth,
  headerHeight,
  headerAlignSelf,
  image,
  imageIconWidth,
  imageIconFlex,
  imageIconOverflow,
  lineDivWidth,
  lineDivFlex,
  controlEscolarFlex,
}) => {
  const headerStyle = useMemo(() => {
    return {
      width: headerWidth,
      height: headerHeight,
      alignSelf: headerAlignSelf,
    };
  }, [headerWidth, headerHeight, headerAlignSelf]);

  const imageIconStyle = useMemo(() => {
    return {
      width: imageIconWidth,
      flex: imageIconFlex,
      overflow: imageIconOverflow,
    };
  }, [imageIconWidth, imageIconFlex, imageIconOverflow]);

  const lineDivStyle = useMemo(() => {
    return {
      width: lineDivWidth,
      flex: lineDivFlex,
    };
  }, [lineDivWidth, lineDivFlex]);

  const controlEscolarStyle = useMemo(() => {
    return {
      flex: controlEscolarFlex,
    };
  }, [controlEscolarFlex]);

  return (
    <div
      className={[styles.header, className].join(" ")}
      data-property1={property1}
      style={headerStyle}
    >
      <img
        className={styles.imageIcon}
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className={styles.headerChild} style={lineDivStyle} />
      <div className={styles.controlEscolar} style={controlEscolarStyle}>
        Control escolar
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  headerWidth: PropTypes.string,
  headerHeight: PropTypes.string,
  headerAlignSelf: PropTypes.string,
  imageIconWidth: PropTypes.string,
  imageIconFlex: PropTypes.string,
  imageIconOverflow: PropTypes.string,
  lineDivWidth: PropTypes.string,
  lineDivFlex: PropTypes.string,
  controlEscolarFlex: PropTypes.string,
};

export default Header1;
