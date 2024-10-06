import './FormPostBuy.css';
import backgroundImage from '../../../public/bg.jpeg';

const FormPostBuy2 = ({ eventName }) => {
const handleNoClick = () => {
    console.log("User clicked `I'M TALKING PUBLIC LOCOMOTION`");
};

const handleYesClick = () => {
    console.log("User clicked `I'M DRIVING`");
};

return (
    <div className="post-buy-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
    backgroundPosition: 'center' }}>
    <div className="post-buy-card">
        <p className="post-buy-message">
        We realized you clicked <span style={{ color: '#CA27C9' }}>BUY</span>for the event <span className="event-name">{eventName}</span>
        </p>
        <p className="question">How are you going to the event?</p>
        <div className="button-group">
        <button className="btn btn-no" onClick={handleNoClick}>I'M TALKING PUBLIC LOCOMOTION</button>
        <button className="btn btn-yes" onClick={handleYesClick}>I'M DRIVING</button>
        </div>
    </div>
    </div>
);
};

export default FormPostBuy2;
