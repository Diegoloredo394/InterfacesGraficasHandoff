import Conteiner1 from "../components/Conteiner1";
import styles from "./DesktopRegister.module.css";

const DesktopRegister = () => {
  return (
    <div className={styles.desktopregister}>
      <div className={styles.frameParent}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
            <div className={styles.headerChild} />
            <div className={styles.controlEscolar}>Control escolar</div>
          </div>
          <div className={styles.background} />
        </div>
        <Conteiner1 />
        <div className={styles.background1}>
          <div className={styles.backgroundChild} />
        </div>
      </div>
    </div>
  );
};

export default DesktopRegister;
