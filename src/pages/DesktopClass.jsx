import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ButtonStyle1 from "../components/ButtonStyle1";
import ButttonStyle from "../components/ButttonStyle";
import styles from "./DesktopClass.module.css";

const DesktopClass = () => {
  const navigate = useNavigate();

  const onButtonStyle3ContainerClick = useCallback(() => {
    navigate("/desktopupload-resources");
  }, [navigate]);

  return (
    <div className={styles.desktopclass}>
      <div className={styles.frameParent}>
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
                  <b className={styles.heading1}>Asignaturas</b>
                </div>
              </div>
              {showButtonStyle3 && (
                <ButtonStyle1
                  color="Blue"
                  hover="Default"
                  showButtonStyle3
                  onButtonStyle3ContainerClick={onButtonStyle3ContainerClick}
                  buttonStyle3Width="50px"
                  buttonStyle3Height="50px"
                  divFontSize="42px"
                  divTextAlign="center"
                />
              )}
            </div>
            <div className={styles.cardSemesterClasAndMateriaParent}>
              <div className={styles.cardSemesterClasAndMateria}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image2@2x.png"
                  />
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Velit a turpis eu
                  sollicitudin in nulla at etiam sit.
                </div>
                <div className={styles.butttonStyle2Parent}>
                  <ButttonStyle
                    state="Default"
                    showButttonStyle2
                    butttonStyle2AlignSelf="stretch"
                    butttonStyle2Flex="1"
                    button="Editar"
                  />
                  <ButttonStyle
                    state="Default"
                    showButttonStyle2
                    butttonStyle2AlignSelf="stretch"
                    butttonStyle2Flex="1"
                    button="Eliminar"
                  />
                  <ButttonStyle
                    state="Default"
                    showButttonStyle2
                    butttonStyle2AlignSelf="stretch"
                    butttonStyle2Flex="1"
                    button="Material"
                  />
                </div>
              </div>
              <div className={styles.cardSemesterClasAndMateria}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image2@2x.png"
                  />
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Velit a turpis eu
                  sollicitudin in nulla at etiam sit.
                </div>
                <div className={styles.butttonStyle2Parent}>
                  <ButttonStyle
                    state="Default"
                    showButttonStyle2
                    butttonStyle2AlignSelf="stretch"
                    butttonStyle2Flex="1"
                    button="Editar"
                  />
                  <ButttonStyle
                    state="Default"
                    showButttonStyle2
                    butttonStyle2AlignSelf="stretch"
                    butttonStyle2Flex="1"
                    button="Eliminar"
                  />
                  <ButttonStyle
                    state="Default"
                    showButttonStyle2
                    butttonStyle2AlignSelf="stretch"
                    butttonStyle2Flex="1"
                    button="Material"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background1@2x.png"
        />
      </div>
    </div>
  );
};

export default DesktopClass;
