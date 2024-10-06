import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../Contexto/AppContext";
import CardEvent from "../CardEvent/CardEvent";

const Events = () => {
	const { seeEvents, events, token } = useContext(AppContext);

	const [tokens, setTokens] = useState(
		localStorage.getItem("token") ? localStorage.getItem("token") : null
	);

	useEffect(() => {
		if (tokens) {
			seeEvents(); // Llama a la función para obtener eventos si el token está presente
		} else {
			console.error("No se encontró el token de autenticación.");
		}
	}, [seeEvents, tokens]);

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

export default Events;
