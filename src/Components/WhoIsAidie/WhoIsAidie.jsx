import './WhoIsAidie.css';
import aidieLarge from "../../../public/imag2.png";
import aidieSmall from "../../../public/imag1.png";
import maps from "../../../public/maps.png";

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
        <div className="text-box">
          <img src={aidieSmall} alt="Aidie Small" className="aidie-small" />
		  <h2>Pick your favorite artist</h2>
        </div>
        <div className="text-box">
          <h3>Aidie will provide the next events in <br /> your area based on your preferents <img src="maps.png" alt="Icon" className="inline-image" /></h3>
        </div>
      </div>

      {/* Parte inferior: 2 divs uno al lado del otro */}
      <div className="bottom-section">
        <div className="text-box">
          <p>Choose your preferences and Aidie will handle the rest</p>
        </div>
        <div className="text-box">
          <p>Get reminders for events, updates, and more</p>
        </div>
      </div>
    </div>
  );
};

export default WhoIsAidie;
