import { useState } from "react";
import "./CardEvent.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const CardEvent = ({ event }) => {
	const [isFavorite, setIsFavorite] = useState(event.userFavorite);

	const handleFavoriteChange = () => {
		event.userFavorite = !event.userFavorite;
		setIsFavorite(event.userFavorite);
		console.log("isFavorite", isFavorite);
	};

	const buyButton = 1;

	return (
		<article className="card-event">
			<div className="container-event-image">
				<img src={event.imageurl} alt={event.name} className="event-image" />

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
					<h3 className="event-name-title">{event.name}</h3>
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

				{buyButton === 1 && (
					<button
						className="buy-button button-event"
						onClick={() =>
							window.open(
								"https://www.puntoticket.com/the-metal-fest-2025",
								"_blank"
							)
						}
						type="button"
					>
						Buy tickets!
					</button>
				)}

				{buyButton === 2 && (
					<button className="tellme-button button-event">
						Let me know when the sale starts!
					</button>
				)}
			</div>
		</article>
	);
};

export default CardEvent;
