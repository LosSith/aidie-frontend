import { createContext, useState, useCallback } from "react";
import axios from "axios";
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
	const [interestedEvents, setInterestedEvents] = useState([]);

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

	const seeEvents = useCallback(async () => {
		try {
			const response = await axios.get(`${VITE_SERVER_URL_LOCAL}/events`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setEvents(response.data);
			console.log("Eventos recibidos:", response.data);
		} catch (error) {
			console.error("Error fetching seeEvents:", error);
		}
	}, [token]);

	const seeInterestedEvents = useCallback(async () => {
		try {
			const response = await axios.get(`${VITE_SERVER_URL_LOCAL}/events/like`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setInterestedEvents(response.data);
			console.log("Eventos interesados recibidos:", response.data);
		} catch (error) {
			console.error("Error fetching seeInterestedEvents:", error);
		}
	}, [token]);

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
				seeInterestedEvents,
				interestedEvents
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
