import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TableHeader.module.css";

const TableHeader = ({
  className = "",
  property1 = "Default",
  tableHeaderPosition,
  tableHeaderHeight,
  tableHeaderWidth,
  tableHeaderTop,
  tableHeaderRight,
  tableHeaderBottom,
  tableHeaderLeft,
  tableHeaderAlignSelf,
  tableHeaderFlex,
  tableHeader,
  showTableHeader,
  tableHeaderFontSize,
  tableHeaderFontFamily,
}) => {
  const tableHeaderStyle = useMemo(() => {
    return {
      position: tableHeaderPosition,
      height: tableHeaderHeight,
      width: tableHeaderWidth,
      top: tableHeaderTop,
      right: tableHeaderRight,
      bottom: tableHeaderBottom,
      left: tableHeaderLeft,
      alignSelf: tableHeaderAlignSelf,
      flex: tableHeaderFlex,
    };
  }, [
    tableHeaderPosition,
    tableHeaderHeight,
    tableHeaderWidth,
    tableHeaderTop,
    tableHeaderRight,
    tableHeaderBottom,
    tableHeaderLeft,
    tableHeaderAlignSelf,
    tableHeaderFlex,
  ]);

  const tableHeader1Style = useMemo(() => {
    return {
      fontSize: tableHeaderFontSize,
      fontFamily: tableHeaderFontFamily,
    };
  }, [tableHeaderFontSize, tableHeaderFontFamily]);

  return (
    <div
      className={[styles.tableHeader1, className].join(" ")}
      data-property1={property1}
      style={tableHeaderStyle}
    >
      {showTableHeader && (
        <div className={styles.tableHeader} style={tableHeader1Style}>
          {tableHeader}
        </div>
      )}
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
  tableHeader: PropTypes.string,
  showTableHeader: PropTypes.bool,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  tableHeaderPosition: PropTypes.string,
  tableHeaderHeight: PropTypes.string,
  tableHeaderWidth: PropTypes.string,
  tableHeaderTop: PropTypes.string,
  tableHeaderRight: PropTypes.string,
  tableHeaderBottom: PropTypes.string,
  tableHeaderLeft: PropTypes.string,
  tableHeaderAlignSelf: PropTypes.string,
  tableHeaderFlex: PropTypes.string,
  tableHeaderFontSize: PropTypes.string,
  tableHeaderFontFamily: PropTypes.string,
};

export default TableHeader;
