import { useNavigate } from "react-router-dom";

import styles from "./User.module.css";
import { useAuth } from "../contexts/AuthContext.jsx";

function User() {
  const { logout, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/", { replace: true });
  }

  if (!isAuthenticated) return;

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
