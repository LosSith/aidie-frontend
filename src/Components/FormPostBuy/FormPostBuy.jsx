import './FormPostBuy.css';
import backgroundImage from '../../../public/bg.jpeg';

const FormPostBuy = ({ eventName }) => {
const handleNoClick = () => {
    console.log("User clicked 'NO'");
};

const handleYesClick = () => {
    console.log("User clicked 'YES'");
};

return (
    <div className="post-buy-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
    backgroundPosition: 'center' }}>
    <div className="post-buy-card">
        <p className="post-buy-message">
        We realized you clicked <span className="highlight">BUY</span> for the event <span className="event-name">{eventName}</span>
        </p>
        <p className="question">Will you go to the event?</p>
        <div className="button-group">
        <button className="btn btn-no" onClick={handleNoClick}>NO</button>
        <button className="btn btn-yes" onClick={handleYesClick}>YES</button>
        </div>
    </div>
    </div>
);
};

export default FormPostBuy;
