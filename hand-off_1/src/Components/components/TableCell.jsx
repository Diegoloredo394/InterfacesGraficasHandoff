import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TableCell.module.css";

const TableCell = ({
  className = "",
  size = "Default",
  tableCellPosition,
  tableCellHeight,
  tableCellWidth,
  tableCellTop,
  tableCellRight,
  tableCellBottom,
  tableCellLeft,
  tableCellMargin,
  tableCell,
  showTableCell,
  tableCellTextAlign,
  tableCellFlex,
}) => {
  const tableCellStyle = useMemo(() => {
    return {
      position: tableCellPosition,
      height: tableCellHeight,
      width: tableCellWidth,
      top: tableCellTop,
      right: tableCellRight,
      bottom: tableCellBottom,
      left: tableCellLeft,
      margin: tableCellMargin,
    };
  }, [
    tableCellPosition,
    tableCellHeight,
    tableCellWidth,
    tableCellTop,
    tableCellRight,
    tableCellBottom,
    tableCellLeft,
    tableCellMargin,
  ]);

  const tableCell1Style = useMemo(() => {
    return {
      textAlign: tableCellTextAlign,
      flex: tableCellFlex,
    };
  }, [tableCellTextAlign, tableCellFlex]);

  return (
    <div
      className={[styles.tableCell1, className].join(" ")}
      data-size={size}
      style={tableCellStyle}
    >
      {showTableCell && (
        <div className={styles.tableCell} style={tableCell1Style}>
          {tableCell}
        </div>
      )}
    </div>
  );
};

TableCell.propTypes = {
  className: PropTypes.string,
  tableCell: PropTypes.string,
  showTableCell: PropTypes.bool,

  /** Variant props */
  size: PropTypes.number,

  /** Style props */
  tableCellPosition: PropTypes.string,
  tableCellHeight: PropTypes.string,
  tableCellWidth: PropTypes.string,
  tableCellTop: PropTypes.string,
  tableCellRight: PropTypes.string,
  tableCellBottom: PropTypes.string,
  tableCellLeft: PropTypes.string,
  tableCellMargin: PropTypes.string,
  tableCellTextAlign: PropTypes.string,
  tableCellFlex: PropTypes.string,
};

export default TableCell;
