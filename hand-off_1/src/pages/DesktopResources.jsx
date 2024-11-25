import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ButtonStyle1 from "../components/ButtonStyle1";
import CardSemesterClasAndMateria from "../components/CardSemesterClasAndMateria";
import styles from "./DesktopResources.module.css";

const DesktopResources = () => {
  const navigate = useNavigate();

  const onButtonStyle3ContainerClick = useCallback(() => {
    navigate("/desktopupload-resources");
  }, [navigate]);

  return (
    <div className={styles.desktopresources}>
      <div className={styles.headerParent}>
        <Header
          property1="Variant3"
          headerPosition="unset"
          headerTop="unset"
          headerLeft="unset"
          headerWidth="unset"
          headerAlignSelf="stretch"
          controlEscolarMargin="unset"
          bell="/bell.svg"
          showButttonStyle2
        />
        <div className={styles.background} />
      </div>
      <div className={styles.sidebarParent}>
        <Sidebar property1="Default" showButttonStyle2 />
        <div className={styles.newObjectParent}>
          <div className={styles.newObject}>
            <div className={styles.titles}>
              <div className={styles.heading}>
                <b className={styles.heading1}>Recursos</b>
              </div>
            </div>
            {showButtonStyle3 && (
              <ButtonStyle1
                color="Blue"
                hover="Default"
                showButtonStyle3
                buttonStyle3Width="50px"
                buttonStyle3Height="50px"
                divFontSize="42px"
                divTextAlign="center"
                onButtonStyle3ContainerClick={onButtonStyle3ContainerClick}
              />
            )}
          </div>
          <div className={styles.cardSemesterClasAndMateriaParent}>
            <CardSemesterClasAndMateria
              size="Default"
              type="Material"
              showButttonStyle2
            />
            <CardSemesterClasAndMateria
              size="Default"
              type="Material"
              showButttonStyle2
            />
          </div>
        </div>
      </div>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
    </div>
  );
};

export default DesktopResources;
