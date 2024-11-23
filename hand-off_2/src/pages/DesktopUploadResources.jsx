import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ButtonStyle from "../components/ButtonStyle";
import styles from "./DesktopUploadResources.module.css";

const DesktopUploadResources = () => {
  return (
    <div className={styles.desktopuploadResources}>
      <div className={styles.groupParent}>
        <div className={styles.backgroundParent}>
          <div className={styles.background} />
          <Header
            property1="Variant3"
            headerPosition="absolute"
            headerTop="0px"
            headerLeft="0px"
            headerWidth="1148px"
            headerAlignSelf="unset"
            controlEscolarMargin="unset"
            bell="/bell.svg"
            showButttonStyle2
          />
        </div>
        <div className={styles.sidebarParent}>
          <Sidebar property1="Default" showButttonStyle2 />
          <div className={styles.newObjectParent}>
            <div className={styles.newObject}>
              <div className={styles.titles}>
                <div className={styles.heading}>
                  <b className={styles.heading1}>Subir archivo</b>
                </div>
              </div>
              <div className={styles.buttonStyle3}>
                <div className={styles.div}>+</div>
              </div>
            </div>
            <div className={styles.inputParent}>
              <div className={styles.input}>
                <div className={styles.div}>Subir o arrastrar aqui</div>
              </div>
              <div className={styles.titles1}>
                <div className={styles.heading}>
                  <div className={styles.heading3}>
                    pdf, ppxt, xlm, cve, docx, etc.
                  </div>
                </div>
              </div>
              <ButtonStyle
                state="Default"
                buttonStyle1Width="unset"
                buttonStyle1Height="unset"
                buttonStyle1Position="unset"
                buttonStyle1Top="unset"
                buttonStyle1Right="unset"
                buttonStyle1Bottom="unset"
                buttonStyle1Left="unset"
                button="Subir"
                button1="Subir"
              />
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

export default DesktopUploadResources;
