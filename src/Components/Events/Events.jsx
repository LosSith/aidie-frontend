import { useEffect, useContext, useState } from 'react';
import { AppContext } from '../Contexto/AppContext';
import CardEvent from '../CardEvent/CardEvent';

const Events = () => {
	const { seeEvents, events, seeInterestedEvents, interestedEvents } =
		useContext(AppContext);
	const [tokens, setTokens] = useState(
		localStorage.getItem('token') ? localStorage.getItem('token') : null
	);

	useEffect(() => {
		if (tokens) {
			seeEvents();
			seeInterestedEvents();
		} else {
			console.error('No se encontró el token de autenticación.');
		}
	}, [seeEvents, seeInterestedEvents, tokens]);

	return (
		<div>
			<h2>Eventos</h2>
			{events.length > 0 ? (
				events.map((event) => (
					<CardEvent
						key={events.id}
						event={event}
					/>
				))
			) : (
				<p>No hay eventos disponibles.</p>
			)}
		</div>
	);
};

export default Events;
