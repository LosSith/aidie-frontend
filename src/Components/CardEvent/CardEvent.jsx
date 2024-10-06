import "./CardEvent.css";
// import { AppContext } from "../Contexto/AppContext";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const event = {
	id: "1",
	name: "Eras Tour",
	date: "2024-11-15",
	location: "Los Angeles, CA, USA",
	preSaleDate: "2024-10-01",
	generalSaleDate: "2024-10-15",
	imageUrl: "../../../public/concert.jpg",
	idArtist: "A101",
	description:
		"Live concert featuring an energetic performance by The Rockers.",
	hour: "20:00 hrs",
	saleStatus: 1,
	userFavorite: true,
};

const CardEvent = () => {
	const [isFavorite, setIsFavorite] = useState(event.userFavorite);

	const handleFavoriteChange = () => {
		event.userFavorite = !event.userFavorite;
		setIsFavorite(event.userFavorite);
		console.log("isFavorite", isFavorite);
	};

	return (
		<article className="card-event">
			<div className="container-event-image">
				<img src={event.imageUrl} alt={event.name} className="event-image" />

				<div className="event-favorite">
					<input
						type="checkbox"
						id="favorite"
						name="favorite"
						checked={event.userFavorite}
						onChange={handleFavoriteChange}
					/>
					{event.userFavorite ? (
						<FaStar className="star-icon" htmlFor="favorite" />
					) : (
						<FaRegStar className="star-icon" htmlFor="favorite" />
					)}
				</div>
				<div className="event-info">
					<h3 className="event-name">{event.name}</h3>
					<p className="event-description">{event.description}</p>
				</div>
			</div>
			<div>
				<p className="event-date">
					<span>When?</span>
					{event.date}
				</p>
				<p className="event-location">
					<span>Where?</span>
					{event.location}
				</p>
				<p className="event-location">
					<span>What time?</span>
					{event.hour}
				</p>

				{event.saleStatus === 1 && (
					<button className="buy-button button-event">Buy tickets!</button>
				)}

				{event.saleStatus === 2 && (
					<button className="tellme-button button-event">
						Let me know when the sale starts!
					</button>
				)}
			</div>
		</article>
	);
};

export default CardEvent;
