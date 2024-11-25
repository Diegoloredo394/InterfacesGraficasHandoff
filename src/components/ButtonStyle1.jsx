import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ButtonStyle1.module.css";

const ButtonStyle1 = ({
  className = "",
  color = "Black",
  hover = "Default",
  showButtonStyle3,
  onButtonStyle3ContainerClick,
  buttonStyle3Width,
  buttonStyle3Height,
  divFontSize,
  divTextAlign,
}) => {
  const buttonStyle3Style = useMemo(() => {
    return {
      width: buttonStyle3Width,
      height: buttonStyle3Height,
    };
  }, [buttonStyle3Width, buttonStyle3Height]);

  const divStyle = useMemo(() => {
    return {
      fontSize: divFontSize,
      textAlign: divTextAlign,
    };
  }, [divFontSize, divTextAlign]);

  const navigate = useNavigate();

  const onButtonStyle3ContainerClick1 = useCallback(() => {
    navigate("/desktopupload-resources");
  }, [navigate]);

  return (
    <div
      className={[styles.buttonStyle3, className].join(" ")}
      onClick={onButtonStyle3ContainerClick}
      data-color={color}
      data-hover={hover}
      style={buttonStyle3Style}
    >
      <div className={styles.div} style={divStyle}>
        +
      </div>
    </div>
  );
};

ButtonStyle1.propTypes = {
  className: PropTypes.string,
  showButtonStyle3: PropTypes.bool,

  /** Variant props */
  color: PropTypes.number,
  hover: PropTypes.number,

  /** Style props */
  buttonStyle3Width: PropTypes.string,
  buttonStyle3Height: PropTypes.string,
  divFontSize: PropTypes.string,
  divTextAlign: PropTypes.string,

  /** Action props */
  onButtonStyle3ContainerClick: PropTypes.func,
};

export default ButtonStyle1;
