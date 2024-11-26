import Header1 from "../components/Header1";
import Conteiner from "../components/Conteiner";
import LineaFooter from "../components/LineaFooter";
import styles from "./DesktopLogin.module.css";

const DesktopLogin = () => {
  return (
    <div className={styles.desktoplogin}>
      <div className={styles.frameParent}>
        <div className={styles.headerParent}>
          <Header1 property1="Variant2" image="/image@2x.png" />
          <div className={styles.background} />
        </div>
        <Conteiner />
        <LineaFooter color="Blue" />
      </div>
    </div>
  );
};

export default DesktopLogin;
