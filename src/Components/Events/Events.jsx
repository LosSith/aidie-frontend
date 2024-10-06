import React, { useEffect, useContext } from "react";
import { AppContext } from "../Contexto/AppContext";
import CardEvent from "../CardEvent/CardEvent";

const Events = () => {
	const { seeEvents, events, token } = useContext(AppContext);
	//TRAIGO EL TOKEN DE  LOCALSTORAGE
	const tokenLocalStorage = localStorage.getItem("token");
	console.log("tokenLocalStorage", tokenLocalStorage);

	useEffect(() => {
		if (token) {
			seeEvents(); // Llama a la función para obtener eventos si el token está presente
		} else {
			console.error("No se encontró el token de autenticación.");
		}
	}, [seeEvents, token]);

	return (
		<div>
			<h2>Eventos</h2>
			{events.length > 0 ? (
				events.map((event) => <CardEvent key={event.id} event={event} />)
			) : (
				<p>No hay eventos disponibles.</p>
			)}
		</div>
	);
};

export default Events; // Asegúrate de que esta línea esté presente
