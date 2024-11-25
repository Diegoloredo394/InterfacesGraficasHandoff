import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyle1 from "./ButtonStyle1";
import PropTypes from "prop-types";
import styles from "./NewObject.module.css";

const NewObject = ({
  className = "",
  newObjectHeight,
  newObjectJustifyContent,
  newObjectGap,
  newObjectAlignSelf,
  newObjectWidth,
  newObjectFlex,
  showButtonStyle3,
  showButtonStyle31,
  button1,
}) => {
  const newObjectStyle = useMemo(() => {
    return {
      height: newObjectHeight,
      justifyContent: newObjectJustifyContent,
      gap: newObjectGap,
      alignSelf: newObjectAlignSelf,
      width: newObjectWidth,
      flex: newObjectFlex,
    };
  }, [
    newObjectHeight,
    newObjectJustifyContent,
    newObjectGap,
    newObjectAlignSelf,
    newObjectWidth,
    newObjectFlex,
  ]);

  const navigate = useNavigate();

  const onButtonStyle3ContainerClick = useCallback(() => {
    navigate("/desktopupload-resources");
  }, [navigate]);

  return (
    <div
      className={[styles.newObject, className].join(" ")}
      style={newObjectStyle}
    >
      <div className={styles.titles}>
        <div className={styles.heading}>
          <b className={styles.heading1}>Semestre</b>
        </div>
      </div>
      {showButtonStyle3 && (
        <ButtonStyle1
          color="Blue"
          hover="Default"
          showButtonStyle3={showButtonStyle31}
          onButtonStyle3ContainerClick={onButtonStyle3ContainerClick}
        />
      )}
    </div>
  );
};

NewObject.propTypes = {
  className: PropTypes.string,
  showButtonStyle3: PropTypes.bool,
  showButtonStyle31: PropTypes.bool,
  button1: PropTypes.string,

  /** Style props */
  newObjectHeight: PropTypes.string,
  newObjectJustifyContent: PropTypes.string,
  newObjectGap: PropTypes.string,
  newObjectAlignSelf: PropTypes.string,
  newObjectWidth: PropTypes.string,
  newObjectFlex: PropTypes.string,
};

export default NewObject;
