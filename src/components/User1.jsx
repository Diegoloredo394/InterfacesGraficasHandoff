import PropTypes from "prop-types";
import styles from "./User1.module.css";

const User1 = ({ className = "" }) => {
  return (
    <div className={[styles.user, className].join(" ")}>
      <img className={styles.personIcon} alt="" src="/person.svg" />
    </div>
  );
};

User1.propTypes = {
  className: PropTypes.string,
};

export default User1;
