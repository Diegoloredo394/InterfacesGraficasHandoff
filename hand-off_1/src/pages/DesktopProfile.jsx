import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PorfilComponent from "../components/PorfilComponent";
import styles from "./DesktopProfile.module.css";

const DesktopProfile = () => {
  return (
    <div className={styles.desktopprofile}>
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <Header
          property1="Variant3"
          headerPosition="absolute"
          headerTop="0px"
          headerLeft="0px"
          headerWidth="1152px"
          headerAlignSelf="unset"
          controlEscolarMargin="unset"
          bell="/bell.svg"
          showButttonStyle2
        />
      </div>
      <div className={styles.sidebarParent}>
        <Sidebar property1="Default" showButttonStyle2 />
        <div className={styles.frameParent}>
          <PorfilComponent />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.titlesParent}>
                <div className={styles.titles}>
                  <div className={styles.heading}>
                    <div className={styles.heading1}>Nombre:</div>
                  </div>
                </div>
                <div className={styles.titles1}>
                  <div className={styles.heading}>
                    <div className={styles.heading3}>RPE:</div>
                  </div>
                </div>
                <div className={styles.titles}>
                  <div className={styles.heading}>
                    <div className={styles.heading5}>Correo:</div>
                  </div>
                </div>
              </div>
              <div className={styles.titlesGroup}>
                <div className={styles.titles3}>
                  <div className={styles.heading}>
                    <div className={styles.heading7}>Nombre Apellidos</div>
                  </div>
                </div>
                <div className={styles.titles4}>
                  <div className={styles.heading}>
                    <div className={styles.heading9}>XX</div>
                  </div>
                </div>
                <div className={styles.titles4}>
                  <div className={styles.heading}>
                    <div className={styles.heading11}>ejemplo@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.titlesParent}>
                <div className={styles.titles6}>
                  <div className={styles.heading}>
                    <div className={styles.heading13}>Número de semestres:</div>
                  </div>
                </div>
                <div className={styles.titles4}>
                  <div className={styles.heading}>
                    <div className={styles.heading15}>Número de materias:</div>
                  </div>
                </div>
                <div className={styles.titles4}>
                  <div className={styles.heading}>
                    <div className={styles.heading15}>Número de alumnos:</div>
                  </div>
                </div>
              </div>
              <div className={styles.titlesParent1}>
                <div className={styles.titles9}>
                  <div className={styles.heading}>
                    <div className={styles.heading19}>2</div>
                  </div>
                </div>
                <div className={styles.titles9}>
                  <div className={styles.heading}>
                    <div className={styles.heading19}>2</div>
                  </div>
                </div>
                <div className={styles.titles9}>
                  <div className={styles.heading}>
                    <div className={styles.heading19}>4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
    </div>
  );
};

export default DesktopProfile;
