import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ButttonStyle.module.css";

const ButttonStyle = ({
  className = "",
  state = "Default",
  onButttonStyle2ContainerClick,
  showButttonStyle2,
  butttonStyle2AlignSelf,
  butttonStyle2Flex,
  button,
  onButtonTextClick,
}) => {
  const butttonStyle2Style = useMemo(() => {
    return {
      alignSelf: butttonStyle2AlignSelf,
      flex: butttonStyle2Flex,
    };
  }, [butttonStyle2AlignSelf, butttonStyle2Flex]);

  return (
    showButttonStyle2 && (
      <div
        className={[styles.root, className].join(" ")}
        data-state={state}
        onClick={onButttonStyle2ContainerClick}
        style={butttonStyle2Style}
      >
        <div className={styles.button} onClick={onButtonTextClick}>
          {button}
        </div>
      </div>
    )
  );
};

ButttonStyle.propTypes = {
  className: PropTypes.string,
  showButttonStyle2: PropTypes.bool,
  button: PropTypes.string,

  /** Variant props */
  state: PropTypes.string,

  /** Style props */
  butttonStyle2AlignSelf: PropTypes.string,
  butttonStyle2Flex: PropTypes.string,

  /** Action props */
  onButttonStyle2ContainerClick: PropTypes.func,
  onButtonTextClick: PropTypes.func,
};

export default ButttonStyle;
