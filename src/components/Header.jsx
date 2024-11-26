import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButttonStyle from "./ButttonStyle";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({
  className = "",
  property1 = "Default",
  headerPosition,
  headerTop,
  headerLeft,
  headerWidth,
  headerAlignSelf,
  controlEscolarMargin,
  bell,
  showButttonStyle2,
}) => {
  const header1Style = useMemo(() => {
    return {
      position: headerPosition,
      top: headerTop,
      left: headerLeft,
      width: headerWidth,
      alignSelf: headerAlignSelf,
    };
  }, [headerPosition, headerTop, headerLeft, headerWidth, headerAlignSelf]);

  const controlEscolar1Style = useMemo(() => {
    return {
      margin: controlEscolarMargin,
    };
  }, [controlEscolarMargin]);

  const navigate = useNavigate();

  const onButttonStyle2ContainerClick = useCallback(() => {
    navigate("/desktopprofile");
  }, [navigate]);

  return (
    <div
      className={[styles.header, className].join(" ")}
      data-property1={property1}
      style={header1Style}
    >
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      <div className={styles.headerChild} />
      <div className={styles.controlEscolar} style={controlEscolar1Style}>
        Control escolar
      </div>
      <div className={styles.headerInner}>
        <div className={styles.bellParent}>
          <img className={styles.bellIcon} alt="" src={bell} />
          <div className={styles.frameChild} />
          <ButttonStyle
            state="White"
            onButttonStyle2ContainerClick={onButttonStyle2ContainerClick}
            showButttonStyle2={showButttonStyle2}
            butttonStyle2AlignSelf="unset"
            butttonStyle2Flex="unset"
            button="Perfil"
          />
          <div className={styles.frameItem} />
          <ButttonStyle
            state="White"
            showButttonStyle2={showButttonStyle2}
            butttonStyle2AlignSelf="unset"
            butttonStyle2Flex="unset"
            button="Cerrar sesión"
          />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  bell: PropTypes.string,
  showButttonStyle2: PropTypes.bool,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  headerPosition: PropTypes.string,
  headerTop: PropTypes.string,
  headerLeft: PropTypes.string,
  headerWidth: PropTypes.string,
  headerAlignSelf: PropTypes.string,
  controlEscolarMargin: PropTypes.string,
};

export default Header;
