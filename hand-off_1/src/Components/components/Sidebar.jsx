import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButttonStyle from "./ButttonStyle";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

const Sidebar = ({
  className = "",
  property1 = "Default",
  showButttonStyle2,
}) => {
  const navigate = useNavigate();

  const onButttonStyle2ContainerClick = useCallback(() => {
    navigate("/desktopclass");
  }, [navigate]);

  const onButttonStyle2ContainerClick1 = useCallback(() => {
    navigate("/desktopresources");
  }, [navigate]);

  const onButttonStyle2ContainerClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButttonStyle2ContainerClick3 = useCallback(() => {
    navigate("/desktopgrades");
  }, [navigate]);

  const onButttonStyle2ContainerClick4 = useCallback(() => {
    navigate("/desktopnew-reminder");
  }, [navigate]);

  return (
    <div
      className={[styles.sidebar, className].join(" ")}
      data-property1={property1}
    >
      <img className={styles.sidebarChild} alt="" src />
      <ButttonStyle
        state="Default"
        showButttonStyle2={showButttonStyle2}
        button="Semestres"
      />
      <ButttonStyle
        state="Default"
        onButttonStyle2ContainerClick={onButttonStyle2ContainerClick}
        showButttonStyle2={showButttonStyle2}
        butttonStyle2AlignSelf="stretch"
        butttonStyle2Flex="unset"
        button="Asignaturas"
      />
      <ButttonStyle
        state="Default"
        onButttonStyle2ContainerClick={onButttonStyle2ContainerClick1}
        showButttonStyle2={showButttonStyle2}
        butttonStyle2AlignSelf="stretch"
        butttonStyle2Flex="unset"
        button="Recursos"
      />
      <ButttonStyle
        state="Default"
        onButttonStyle2ContainerClick={onButttonStyle2ContainerClick2}
        showButttonStyle2={showButttonStyle2}
        butttonStyle2AlignSelf="stretch"
        butttonStyle2Flex="unset"
        button="Participacion"
      />
      <ButttonStyle
        state="Default"
        onButttonStyle2ContainerClick={onButttonStyle2ContainerClick3}
        showButttonStyle2={showButttonStyle2}
        butttonStyle2AlignSelf="stretch"
        butttonStyle2Flex="unset"
        button="Calificaciones"
      />
      <ButttonStyle
        state="Default"
        onButttonStyle2ContainerClick={onButttonStyle2ContainerClick4}
        showButttonStyle2={showButttonStyle2}
        butttonStyle2AlignSelf="stretch"
        butttonStyle2Flex="unset"
        button="Nuevo Recordatorio"
      />
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  showButttonStyle2: PropTypes.bool,

  /** Variant props */
  property1: PropTypes.number,
};

export default Sidebar;
