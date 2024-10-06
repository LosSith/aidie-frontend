import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../Contexto/AppContext"; // Asegúrate de importar tu contexto correctamente
import backgroundImage from "../../../public/bg.jpeg";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { logIn, setUserSession, setisLoggedIn, setToken } =
    useContext(AppContext);
  const navigate = useNavigate(); // Para redireccionar después del login

  // Función para manejar los cambios en los inputs
  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      const token = await logIn(user); // Llamada a la función de login en el contexto
      const tokenPayload = token.split(".")[1];
      const userSesion = JSON.parse(atob(tokenPayload));

      setUserSession({
        id: 1,
        name: userSesion.name,
        email: userSesion.email,
      });
      setisLoggedIn(true);

      localStorage.setItem("token", token);
      localStorage.setItem(
        "session",
        JSON.stringify({
          id: 1,
          name: userSesion.name,
          email: userSesion.email,
        })
      );
      setToken(token);

      navigate("/Event"); // Redirigir a la página principal tras el login exitoso
    } catch (error) {
      console.error("Login error:", error);
      window.alert("Error al iniciar sesión. Verifique sus credenciales..");
    }
  };

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="login-container">
        <h1 className="login-title">
          Register your events and let Aidie manage your reminders!
        </h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            <input
              className="input"
              type="email"
              name="email"
              value={user.email}
              onChange={handleUser}
              placeholder="Email"
            />
          </label>
          <label className="label">
            <input
              className="input"
              type="password"
              name="password"
              value={user.password}
              onChange={handleUser}
              placeholder="Password"
            />
          </label>
          <button type="submit" className="button">
            LET'S GO!
          </button>
        </form>
        <p className="paragraph">
          Can't remember your password?{" "}
          <a href="#" className="link">
            Click here
          </a>
        </p>
        <p>
          ¿don't have an account?{" "}
          <Link to="/register"></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
