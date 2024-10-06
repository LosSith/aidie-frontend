import { useState } from "react";
import "./CardEvent.css"; // Asegúrate de tener tu CSS para estilos
import { FaRegStar, FaStar } from "react-icons/fa";

const FavoritaCardEvent = ({ event }) => {
  const [isFavorite, setIsFavorite] = useState(event.userFavorite);

  

  return (
    <article className="card-event">
      <div className="container-event-image">
        <img src={event.imageurl} alt={event.name} className="event-image" />
        
        <div className="event-favorite">
          <input
            type="checkbox"
            id={`favorite-${event.id}`} // Asegúrate de usar un ID único
            name="favorite"
            checked={isFavorite}
            onChange={handleFavoriteChange}
          />
          {isFavorite ? (
            <FaStar className="star-icon" />
          ) : (
            <FaRegStar className="star-icon" />
          )}
        </div>
        <div className="event-info">
          <h3 className="event-name-title">{event.name}</h3>
          <p className="event-description">{event.description}</p>
        </div>
      </div>
      <div>
        <p className="event-date">
          <span>When?</span> {event.date}
        </p>
        <p className="event-location">
          <span>Where?</span> {event.location}
        </p>
        <p className="event-hour">
          <span>What time?</span> {event.hour}
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

export default FavoritaCardEvent;
