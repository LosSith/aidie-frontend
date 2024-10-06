import { Link } from "react-router-dom";
import "./FormPostBuy.css";

const FormPostBuy = ({ eventName }) => {
	const handleNoClick = () => {
		console.log("User clicked 'NO'");
	};

	const handleYesClick = () => {
		console.log("User clicked 'YES'");
	};

	return (
		<div className="post-buy-container">
			<div className="post-buy-card">
				<p className="post-buy-message">
					We realized you clicked <span className="highlight">BUY</span> for the
					event <span className="event-name">{eventName}</span>
				</p>
				<p className="question">Will you go to the event?</p>
				<div className="button-group">
					<button className="btn btn-no" onClick={handleNoClick}>
						NO
					</button>

					<Link to="/post-buy2" className="btn secondary-button">
						YES
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FormPostBuy;
