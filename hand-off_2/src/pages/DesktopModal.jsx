import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TableHeader from "../components/TableHeader";
import ButtonStyle from "../components/ButtonStyle";
import styles from "./DesktopModal.module.css";

const DesktopModal = () => {
  const navigate = useNavigate();

  const onButtonStyle1ContainerClick = useCallback(() => {
    navigate("/desktopgrades");
  }, [navigate]);

  return (
    <div className={styles.desktopmodal}>
      <TableHeader
        property1="Default"
        tableHeaderPosition="unset"
        tableHeaderHeight="78px"
        tableHeaderWidth="unset"
        tableHeaderTop="unset"
        tableHeaderRight="unset"
        tableHeaderBottom="unset"
        tableHeaderLeft="unset"
        tableHeaderAlignSelf="stretch"
        tableHeaderFlex="unset"
        tableHeader="Calificaciones"
        showTableHeader
        tableHeaderFontSize="18px"
        tableHeaderFontFamily="Inter"
      />
      <div className={styles.inputWithLabelParent}>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>XX.XX</div>
          </div>
          <div className={styles.titles}>
            <div className={styles.heading}>
              <div className={styles.heading1}>Parcial 1</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>XX.XX</div>
          </div>
          <div className={styles.titles}>
            <div className={styles.heading}>
              <div className={styles.heading1}>Parcial 2</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>XX.XX</div>
          </div>
          <div className={styles.titles}>
            <div className={styles.heading}>
              <div className={styles.heading1}>Parcial 3</div>
            </div>
          </div>
        </div>
        <div className={styles.inputWithLabel}>
          <div className={styles.input}>
            <div className={styles.searchExample}>XX.XX</div>
          </div>
          <div className={styles.titles}>
            <div className={styles.heading}>
              <div className={styles.heading1}>Parcial 4</div>
            </div>
          </div>
        </div>
      </div>
      <ButtonStyle
        state="Default"
        buttonStyle1Width="unset"
        buttonStyle1Height="unset"
        onButtonStyle1ContainerClick={onButtonStyle1ContainerClick}
        buttonStyle1Position="unset"
        buttonStyle1Top="unset"
        buttonStyle1Right="unset"
        buttonStyle1Bottom="unset"
        buttonStyle1Left="unset"
        button="Actualizar"
        button1="Actualizar"
      />
    </div>
  );
};

export default DesktopModal;
