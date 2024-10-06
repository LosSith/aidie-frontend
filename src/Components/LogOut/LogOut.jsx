
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Contexto/AppContext";

const LogoutButton = () => {
  const { logOut } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <button onClick={handleLogout} className="custom-cerrar-button">
      Sign out
    </button>
  );
};

export default LogoutButton;