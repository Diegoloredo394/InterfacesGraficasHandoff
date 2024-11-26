import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import NewObject from "../components/NewObject";
import CardSemesterClasAndMateria from "../components/CardSemesterClasAndMateria";
import styles from "./DesktopSemester.module.css";

const DesktopSemester = () => {
  return (
    <div className={styles.desktopsemester}>
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
        <div className={styles.newObjectParent}>
          <NewObject showButtonStyle3 showButtonStyle31 button1="Semestre" />
          <div className={styles.cardSemesterClasAndMateriaParent}>
            <CardSemesterClasAndMateria
              size="Default"
              type="Semester"
              showButttonStyle2
            />
            <CardSemesterClasAndMateria
              size="Default"
              type="Semester"
              showButttonStyle2
            />
          </div>
        </div>
      </div>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
    </div>
  );
};

export default DesktopSemester;
