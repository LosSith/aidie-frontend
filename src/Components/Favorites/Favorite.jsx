import { useEffect, useContext, useState } from "react";
import { AppContext } from "../Contexto/AppContext";
import FavoritaCardEvent from "./FavoriteCard"; // Asegúrate de usar el nombre correcto aquí

const FavoritEvents = () => {
  const { seeInterestedEvents, interestedEvents } = useContext(AppContext);
  const [tokens, setTokens] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  useEffect(() => {
    if (tokens) {
      seeInterestedEvents(); // Llama a la función para obtener eventos favoritos si el token está presente
    } else {
      console.error("No se encontró el token de autenticación.");
    }
  }, [seeInterestedEvents, tokens]);

  return (
    <div>
      <h2>Eventos Favoritos</h2>
      {interestedEvents.length > 0 ? (
        interestedEvents.map((event) => (
          <FavoritaCardEvent key={event.id} event={event} /> // Cambia CardEvent por FavoritaCardEvent
        ))
      ) : (
        <p>No favorite events selected.</p>
      )}
    </div>
  );
};

export default FavoritEvents;
