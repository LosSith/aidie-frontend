import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../Contexto/AppContext";

const Login = () => {
	const [user, setUser] = useState({ email: "", password: "" });
	const { logIn, setUserSession, setisLoggedIn, setToken } =
		useContext(AppContext);
	const navigate = useNavigate();

	const handleUser = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const token = await logIn(user);
			console.log("Token recibido:", token); // Comprobar si recibes el token
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

			navigate("/events"); // Redirigir a la página de eventos tras el login exitoso
		} catch (error) {
			console.error("Error en el login:", error);
			window.alert("Failed to log in. Verify your credentials.");
		}
	};

	return (
		<div className="page-container">
			<div className="login-container">
				<h1 className="form-title-h">Login</h1>
				<h3 className="form-subtitle">
					Login to your account to manage your events and let Aidie manage your
					reminders!
				</h3>
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
					<button type="submit" className="principal-button">
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
					Don't have an account? <Link to="/register">Create one</Link>{" "}
					{/* Texto corregido */}
				</p>
			</div>
		</div>
	);
};

export default Login;
