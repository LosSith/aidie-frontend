import React from "react";
import "./CardEvent.css";

const event = {
	id: "1",
	name: "Eras Tour",
	date: "2024-11-15",
	location: "Los Angeles, CA, USA",
	preSaleDate: "2024-10-01",
	generalSaleDate: "2024-10-15",
	imageUrl: "https://example.com/image1.jpg",
	idArtist: "A101",
	description:
		"Live concert featuring an energetic performance by The Rockers.",
	hour: "20:00 hrs",
	saleStatus: 1,
};

const CardEvent = () => {
	return (
		<article className="card-event">
			<img src={event.imageUrl} alt={event.name} className="event-image" />
			<h3 className="event-name">{event.name}</h3>
			<p className="event-description">{event.description}</p>
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
				<>
					{console.log(1)}
					<button className="buy-button">Buy tickets!</button>
				</>
			)}

			{event.saleStatus === 2 && (
				<>
					{console.log(2)}
					<button className="tellme-button">
						Let me know when the sale starts!
					</button>
				</>
			)}
		</article>
	);
};

export default CardEvent;
