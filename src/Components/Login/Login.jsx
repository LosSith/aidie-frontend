import "./Login.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../public/bg.jpeg";
import { AppContext } from "../Contexto/AppContext";
const Login = () => {
  const { handleLoginSubmit } = useContext(AppContext);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="login-container">
        <h1 className="login-title">
          Register your events and let Aidie manage your reminders!
        </h1>
        <form className="form" onSubmit={handleLoginSubmit}>
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
          ¿No tienes una cuenta?{" "}
          <Link to="/register">don't have an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
