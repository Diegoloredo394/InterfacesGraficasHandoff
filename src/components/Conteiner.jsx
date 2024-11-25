import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyle from "./ButtonStyle";
import PropTypes from "prop-types";
import styles from "./Conteiner.module.css";

const Conteiner = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonStyle1ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.conteiner, className].join(" ")}>
      <div className={styles.titles}>
        <div className={styles.heading}>
          <b className={styles.heading1}>
            <p className={styles.dashboard}>Dashboard</p>
            <p className={styles.dashboard}>Iniciar sesion</p>
          </b>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>wiliam.smith</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading}>
              <div className={styles.heading3}>Usuario</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>*************</div>
          </div>
          <div className={styles.titles1}>
            <div className={styles.heading}>
              <div className={styles.heading5}> Contraseña</div>
            </div>
          </div>
        </div>
      </div>
      <ButtonStyle
        state="Default"
        onButtonStyle1ContainerClick={onButtonStyle1ContainerClick}
        button="Iniciar sesion"
        button1="Iniciar sesion"
      />
    </div>
  );
};

Conteiner.propTypes = {
  className: PropTypes.string,
};

export default Conteiner;
