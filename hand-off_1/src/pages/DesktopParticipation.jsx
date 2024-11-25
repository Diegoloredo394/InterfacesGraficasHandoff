import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Backpage from "../components/Backpage";
import AssistTable from "../components/AssistTable";
import styles from "./DesktopParticipation.module.css";

const DesktopParticipation = () => {
  const navigate = useNavigate();

  const onChevronContainerClick = useCallback(() => {
    navigate("/desktopsemester");
  }, [navigate]);

  return (
    <div className={styles.desktopparticipation}>
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
      <div className={styles.desktopparticipationInner}>
        <div className={styles.frameParent}>
          <div className={styles.chevronParent}>
            <Backpage
              property1="chevron-left"
              onChevronContainerClick={onChevronContainerClick}
            />
            <div className={styles.titles}>
              <div className={styles.heading}>
                <b className={styles.heading1}>Asistencia</b>
              </div>
            </div>
          </div>
          <div className={styles.assistTableWrapper}>
            <AssistTable size="Default" />
          </div>
        </div>
      </div>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
    </div>
  );
};

export default DesktopParticipation;
