import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ButtonStyle.module.css";

const ButtonStyle = ({
  className = "",
  state = "Default",
  buttonStyle1Width,
  buttonStyle1Height,
  onButtonStyle1ContainerClick,
  buttonStyle1Position,
  buttonStyle1Top,
  buttonStyle1Right,
  buttonStyle1Bottom,
  buttonStyle1Left,
  button,
  button1,
}) => {
  const buttonStyle1Style = useMemo(() => {
    return {
      width: buttonStyle1Width,
      height: buttonStyle1Height,
      position: buttonStyle1Position,
      top: buttonStyle1Top,
      right: buttonStyle1Right,
      bottom: buttonStyle1Bottom,
      left: buttonStyle1Left,
    };
  }, [
    buttonStyle1Width,
    buttonStyle1Height,
    buttonStyle1Position,
    buttonStyle1Top,
    buttonStyle1Right,
    buttonStyle1Bottom,
    buttonStyle1Left,
  ]);

  const navigate = useNavigate();

  const onButtonStyle1ContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={[styles.buttonStyle1, className].join(" ")}
      onClick={onButtonStyle1ContainerClick}
      data-state={state}
      style={buttonStyle1Style}
    >
      <div className={styles.button}>{button1}</div>
    </div>
  );
};

ButtonStyle.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,

  /** Variant props */
  state: PropTypes.number,

  /** Style props */
  buttonStyle1Width: PropTypes.string,
  buttonStyle1Height: PropTypes.string,
  buttonStyle1Position: PropTypes.string,
  buttonStyle1Top: PropTypes.string,
  buttonStyle1Right: PropTypes.string,
  buttonStyle1Bottom: PropTypes.string,
  buttonStyle1Left: PropTypes.string,

  /** Action props */
  onButtonStyle1ContainerClick: PropTypes.func,
};

export default ButtonStyle;
