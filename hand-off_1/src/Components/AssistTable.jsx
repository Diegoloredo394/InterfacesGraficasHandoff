import Materia from "./Materia";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import AssistCell from "./AssistCell";
import PropTypes from "prop-types";
import styles from "./AssistTable.module.css";

const AssistTable = ({ className = "", size = "Default" }) => {
  return (
    <div className={[styles.assistTable, className].join(" ")} data-size={size}>
      <div className={styles.frameGroup}>
        <div className={styles.chevronParent}>
          <div className={styles.chevron}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <Materia size="Default" eNERO2025="Matemáticas" />
          <div className={styles.chevron1}>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.chevronGroup}>
            <div className={styles.chevron2}>
              <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
            </div>
            <Materia size="Default" eNERO2025="Anterior" />
          </div>
          <div className={styles.frameItem} />
          <div className={styles.monthParent}>
            <Materia size="Default" eNERO2025="Siguiente" />
            <div className={styles.chevron3}>
              <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameInner} />
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.frameContainer}>
          <div className={styles.tableHeaderWrapper}>
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="44.6px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="stretch"
              tableHeaderFlex="unset"
              tableHeader="Clave"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
          </div>
          <div className={styles.tableHeaderContainer}>
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="44.6px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="stretch"
              tableHeaderFlex="unset"
              tableHeader="Nombre"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
          </div>
          <div className={styles.tableHeaderParent}>
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="44.6px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="unset"
              tableHeaderFlex="1"
              tableHeader="Lunes 21 Oct"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="44.6px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="unset"
              tableHeaderFlex="1"
              tableHeader="Martes 22 Oct"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="44.6px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="unset"
              tableHeaderFlex="1"
              tableHeader="Miércoles 23 Oct"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="44.6px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="unset"
              tableHeaderFlex="1"
              tableHeader="Jueves 24 Oct"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="44.6px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="unset"
              tableHeaderFlex="1"
              tableHeader="Viernes 25 Oct"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
          </div>
          <div className={styles.tableHeaderFrame}>
            <TableHeader
              property1="Default"
              tableHeaderPosition="unset"
              tableHeaderHeight="45px"
              tableHeaderWidth="unset"
              tableHeaderTop="unset"
              tableHeaderRight="unset"
              tableHeaderBottom="unset"
              tableHeaderLeft="unset"
              tableHeaderAlignSelf="stretch"
              tableHeaderFlex="unset"
              tableHeader="Participación"
              showTableHeader
              tableHeaderFontSize="14px"
              tableHeaderFontFamily="'Open Sans'"
            />
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameDiv}>
            <div className={styles.tableCellParent}>
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44.6px"
                tableCellWidth="118.7px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="123456"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44px"
                tableCellWidth="353px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="Nombre Apellido"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
            </div>
            <div className={styles.assistCellParent}>
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <div className={styles.participationCell}>
                <TableCell
                  size="Default"
                  tableCellPosition="absolute"
                  tableCellHeight="100%"
                  tableCellWidth="100%"
                  tableCellTop="0%"
                  tableCellRight="0%"
                  tableCellBottom="0%"
                  tableCellLeft="0%"
                  tableCellMargin="0 !important"
                  showTableCell={false}
                  tableCellTextAlign="left"
                  tableCellFlex="unset"
                />
                <div className={styles.buttonStyle3}>
                  <div className={styles.div}>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.tableCellGroup}>
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44px"
                tableCellWidth="118.7px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="123456"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44px"
                tableCellWidth="353px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="Nombre Apellido"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
            </div>
            <div className={styles.assistCellGroup}>
              <div className={styles.assistCell}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
              </div>
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <div className={styles.participationCell1}>
                <TableCell
                  size="Default"
                  tableCellPosition="absolute"
                  tableCellHeight="100%"
                  tableCellWidth="100%"
                  tableCellTop="0%"
                  tableCellRight="0%"
                  tableCellBottom="0%"
                  tableCellLeft="0%"
                  tableCellMargin="0 !important"
                  showTableCell={false}
                  tableCellTextAlign="left"
                  tableCellFlex="unset"
                />
                <div className={styles.buttonStyle31}>
                  <div className={styles.div1}>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.tableCellContainer}>
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44px"
                tableCellWidth="118.7px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="123456"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44px"
                tableCellWidth="353px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="Nombre Apellido"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
            </div>
            <div className={styles.assistCellContainer}>
              <div className={styles.assistCell1}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
              </div>
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <div className={styles.participationCell2}>
                <TableCell
                  size="Default"
                  tableCellPosition="absolute"
                  tableCellHeight="100%"
                  tableCellWidth="100%"
                  tableCellTop="0%"
                  tableCellRight="0%"
                  tableCellBottom="0%"
                  tableCellLeft="0%"
                  tableCellMargin="0 !important"
                  showTableCell={false}
                  tableCellTextAlign="left"
                  tableCellFlex="unset"
                />
                <div className={styles.buttonStyle32}>
                  <div className={styles.div2}>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.tableCellParent1}>
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44px"
                tableCellWidth="118.7px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="123456"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
              <TableCell
                size="Default"
                tableCellPosition="unset"
                tableCellHeight="44px"
                tableCellWidth="353px"
                tableCellTop="unset"
                tableCellRight="unset"
                tableCellBottom="unset"
                tableCellLeft="unset"
                tableCellMargin="unset"
                tableCell="Nombre Apellido"
                showTableCell
                tableCellTextAlign="left"
                tableCellFlex="unset"
              />
            </div>
            <div className={styles.assistCellParent1}>
              <div className={styles.assistCell2}>
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.vectorIcon6}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
              </div>
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <AssistCell state="Default" />
              <div className={styles.participationCell3}>
                <TableCell
                  size="Default"
                  tableCellPosition="absolute"
                  tableCellHeight="100%"
                  tableCellWidth="100%"
                  tableCellTop="0%"
                  tableCellRight="0%"
                  tableCellBottom="0%"
                  tableCellLeft="0%"
                  tableCellMargin="0 !important"
                  showTableCell={false}
                  tableCellTextAlign="left"
                  tableCellFlex="unset"
                />
                <div className={styles.buttonStyle33}>
                  <div className={styles.div3}>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AssistTable.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  size: PropTypes.number,
};

export default AssistTable;
