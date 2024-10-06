import './WhoIsAidie.css';
import aidieLarge from "../../../public/imag2.png";
import aidieSmall from "../../../public/imag1.png";
import maps from "../../../public/maps.png"; // Uso correcto de la imagen

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
          <h3>Aidie will provide <br /> the next events in <br /> your area based on <br /> your preferences <br />
            <img
              src={maps}
              alt="Map Icon"
              className="inline-image"
              style={{ width: "40px", height: "40px", marginLeft: "5px" }} // Tamaño ajustado
            />
          </h3>
        </div>
        <div className="text-box middle-50">
          <p>Choose your preferences and Aidie will handle the rest</p>
          <p>Get reminders for events, updates, and more</p>
        </div>
      </div>
    </div>
  );
};

export default WhoIsAidie;
