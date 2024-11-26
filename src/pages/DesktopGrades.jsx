import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Backpage from "../components/Backpage";
import GradesTable from "../components/GradesTable";
import styles from "./DesktopGrades.module.css";

const DesktopGrades = () => {
  const navigate = useNavigate();

  const onChevronContainerClick = useCallback(() => {
    navigate("/DesktopSemester");
  }, [navigate]);

  return (
    <div className={styles.desktopgrades}>
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <Header property1="Variant3" bell="/bell.svg" showButttonStyle2 />
      </div>
      <div className={styles.desktopgradesInner}>
        <div className={styles.frameParent}>
          <div className={styles.chevronParent}>
            <Backpage
              property1="chevron-left"
              onChevronContainerClick={onChevronContainerClick}
            />
            <div className={styles.titles}>
              <div className={styles.heading}>
                <b className={styles.heading1}>Calificaciones</b>
              </div>
            </div>
          </div>
          <div className={styles.gradesTableWrapper}>
            <GradesTable size="Default" />
          </div>
        </div>
      </div>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
    </div>
  );
};

export default DesktopGrades;
