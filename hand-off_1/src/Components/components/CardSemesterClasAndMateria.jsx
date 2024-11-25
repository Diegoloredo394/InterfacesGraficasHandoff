import ButttonStyle from "./ButttonStyle";
import PropTypes from "prop-types";
import styles from "./CardSemesterClasAndMateria.module.css";

const CardSemesterClasAndMateria = ({
  className = "",
  size = "Default",
  type = "Semester",
  showButttonStyle2,
}) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-size={size}
      data-type={type}
    >
      <div className={styles.imageWrapper}>
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
      </div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet consectetur. Velit a turpis eu sollicitudin
        in nulla at etiam sit.
      </div>
      <div className={styles.butttonStyle2Parent}>
        <ButttonStyle
          state="Default"
          showButttonStyle2={showButttonStyle2}
          butttonStyle2AlignSelf="stretch"
          butttonStyle2Flex="1"
          button="Estadísticas"
        />
        <ButttonStyle
          state="Default"
          showButttonStyle2={showButttonStyle2}
          butttonStyle2AlignSelf="stretch"
          butttonStyle2Flex="1"
          button="Editar"
        />
      </div>
    </div>
  );
};

CardSemesterClasAndMateria.propTypes = {
  className: PropTypes.string,
  showButttonStyle2: PropTypes.bool,

  /** Variant props */
  size: PropTypes.number,
  type: PropTypes.string,
};

export default CardSemesterClasAndMateria;
