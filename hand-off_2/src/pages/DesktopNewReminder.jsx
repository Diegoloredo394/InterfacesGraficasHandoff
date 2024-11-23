import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ButtonStyle from "../components/ButtonStyle";
import styles from "./DesktopNewReminder.module.css";

const DesktopNewReminder = () => {
  return (
    <div className={styles.desktopnewReminder}>
      <main className={styles.groupParent}>
        <section className={styles.backgroundParent}>
          <div className={styles.background} />
          <Header
            property1="Variant3"
            headerPosition="absolute"
            headerTop="0px"
            headerLeft="0px"
            headerWidth="1148px"
            headerAlignSelf="unset"
            controlEscolarMargin="0"
            bell="/bell1@2x.png"
            showButttonStyle2
          />
        </section>
        <section className={styles.sidebarParent}>
          <Sidebar property1="Default" showButttonStyle2 />
          <div className={styles.newObjectParent}>
            <div className={styles.newObject}>
              <div className={styles.titles}>
                <div className={styles.heading}>
                  <b className={styles.heading1}>Crear Recordatorio</b>
                </div>
              </div>
              <div className={styles.buttonStyle3}>
                <div className={styles.div}>+</div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.inputWithLabelParent}>
                <div className={styles.inputWithLabel}>
                  <div className={styles.input}>
                    <div className={styles.div}>Examen del tercer parcial</div>
                  </div>
                  <div className={styles.titles1}>
                    <div className={styles.heading2}>
                      <div className={styles.heading3}>Título</div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputWithLabel}>
                  <div className={styles.input}>
                    <div className={styles.div}>
                      El tercer exámen parcial será en dos días.
                    </div>
                  </div>
                  <div className={styles.titles2}>
                    <div className={styles.heading2}>
                      <div className={styles.heading5}> Descripcion</div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputWithLabel}>
                  <div className={styles.input}>
                    <div className={styles.div}>XX/XX/XXXX</div>
                  </div>
                  <div className={styles.titles2}>
                    <div className={styles.heading2}>
                      <div className={styles.heading7}>Fecha</div>
                    </div>
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
                button="Crear"
                button1="Crear"
              />
            </div>
          </div>
        </section>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background1@2x.png"
        />
      </main>
    </div>
  );
};

export default DesktopNewReminder;
