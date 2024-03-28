import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="../../public/logo.png"
        alt="TravelNotes logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
