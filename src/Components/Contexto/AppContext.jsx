// Dentro de AppContext
import { createContext, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { VITE_SERVER_URL_LOCAL } = import.meta.env;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isLoggedIn, setisLoggedIn] = useState(!!localStorage.getItem("token"));

	const [userSession, setUserSession] = useState(
		localStorage.getItem("session")
			? JSON.parse(localStorage.getItem("session"))
			: { email: "", name: "" }
	);

	const [token, setToken] = useState(
		localStorage.getItem("token") ? localStorage.getItem("token") : null
	);

	const [events, setEvents] = useState([]);

	const logIn = async (userData) => {
		const tokenJson = await axios.post(
			`${VITE_SERVER_URL_LOCAL}/users/login`,
			userData
		);
		const { token } = tokenJson.data;
		return token;
	};

	const handleRegisterSubmit = async (userData) => {
		try {
			await axios.post(`${VITE_SERVER_URL_LOCAL}/users/register`, userData);
			window.alert("Successfully registered user.");
		} catch (error) {
			console.error("Register error:", error);
			throw new Error("Error registering user. Check the data.");
		}
	};

	const logOut = () => {
		setisLoggedIn(false);
		localStorage.removeItem("token");
		localStorage.removeItem("session");
		setToken(null);
		setUserSession({ email: "", nombre: "" });
	};

	const seeEvents = async () => {
		try {
			const response = await axios.get(`${VITE_SERVER_URL_LOCAL}/events`, {
				headers: {
					Authorization: `Bearer ${token}`, // Asegúrate de que el token esté definido
				},
			});
			setEvents(response.data); // Almacena los eventos en el estado
			console.log("Eventos recibidos:", response.data); // Muestra los eventos en la consola
		} catch (error) {
			console.error("Error al obtener eventos:", error);
		}
	};

	return (
		<AppContext.Provider
			value={{
				isLoggedIn,
				userSession,
				logOut,
				logIn,
				setUserSession,
				setisLoggedIn,
				setToken,
				handleRegisterSubmit,
				seeEvents,
				events,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
