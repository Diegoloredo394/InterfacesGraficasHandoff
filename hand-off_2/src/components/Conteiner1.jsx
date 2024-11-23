import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyle from "./ButtonStyle";
import PropTypes from "prop-types";
import styles from "./Conteiner1.module.css";

const Conteiner1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonStyle1ContainerClick = useCallback(() => {
    navigate("/desktoplogin");
  }, [navigate]);

  return (
    <div className={[styles.conteiner, className].join(" ")}>
      <div className={styles.titles}>
        <div className={styles.heading}>
          <b className={styles.heading1}>
            <p className={styles.dashboard}>Dashboard</p>
            <p className={styles.dashboard}>Registrar</p>
          </b>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>william.smith</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading2}>
              <div className={styles.heading3}>Usuario</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>example@domain.com</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading2}>
              <div className={styles.heading5}>Email</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>William</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading2}>
              <div className={styles.heading7}>Nombre</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>************</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading2}>
              <div className={styles.heading9}> Contraseña</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>Smith</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading2}>
              <div className={styles.heading11}>Apellido</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>************</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading2}>
              <div className={styles.heading13}> Confirmar contraseña</div>
            </div>
          </div>
        </div>
      </div>
      <ButtonStyle
        state="Default"
        buttonStyle1Width="166.7px"
        buttonStyle1Height="38.6px"
        onButtonStyle1ContainerClick={onButtonStyle1ContainerClick}
        buttonStyle1Position="unset"
        buttonStyle1Top="unset"
        buttonStyle1Right="unset"
        buttonStyle1Bottom="unset"
        buttonStyle1Left="unset"
        button="Registrar"
        button1="Registrar"
      />
    </div>
  );
};

Conteiner1.propTypes = {
  className: PropTypes.string,
};

export default Conteiner1;
