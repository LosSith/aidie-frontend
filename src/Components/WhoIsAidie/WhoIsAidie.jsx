import './WhoIsAidie.css';
import aidieLarge from "../../../public/imag2.png";
import aidieSmall from "../../../public/imag1.png";
import maps from "../../../public/maps.png";
import puntoticket from "../../../public/puntoticket.png"; // Corrección en la importación
import ticketmaster from "../../../public/ticketmaster.svg";
import wesmartpark from "../../../public/WESMARTPARK.png";

const WhoIsAidie = () => {
  return (
    <div className="presentation-container">
      <div className="top-section">
        <div className="text-box pink-border">
          <h1>Meet Aidie, your event assistant</h1>
          <p>Aidie will help you to not miss your events</p>
        </div>
        <div className="character-image">
          <img src={aidieLarge} alt="Aidie Large" className="aidie-large" />
        </div>
      </div>

      <div className="middle-section">
        <div className="text-box middle-20">
          <img src={aidieSmall} alt="Aidie Small" className="aidie-small" />
          <h2>Pick your favorite artist</h2>
        </div>
        <div className="text-box middle-50">
          <h3>Aidie will provide <br /> the next events in <br /> your area based on <br />
            your preferences <br />
            <img
              src={maps}
              alt="Map Icon"
              className="inline-image"
              style={{ width: "80px", height: "80px", marginLeft: "5px" }}
            />
          </h3>
        </div>
        <div className="text-box middle-50">
          <p>Choose your preferences and Aidie will handle the rest</p>
          <p>Get reminders for events, updates, and more</p>
          
          {/* Agregando los logos de puntoticket, ticketmaster y wesmartpark */}
          <div className="logo-container">
            <img
              src={puntoticket}
              alt="Punto Ticket Logo"
              className="inline-image"
              style={{ width: "110px", height: "110px", margin: "0 5px" }}
            />
            <img
              src={ticketmaster}
              alt="Ticketmaster Logo"
              className="inline-image"
              style={{ width: "110px", height: "110px", margin: "0 5px" }}
            />
            <img
              src={wesmartpark}
              alt="WeSmartPark Logo"
              className="inline-image"
              style={{ width: "150px", height: "100px", margin: "0 5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsAidie;
