import { Link } from "react-router-dom";
import "./FormPostBuy.css";

const FormPostBuy3 = () => {
	/* 	const handleButtonClick = () => {
		console.log("User clicked 'TAKE ME HOME'");
	}; */

	return (
		<div className="post-buy-container">
			<div
				className="post-buy-card"
				style={{
					backgroundColor: "#2d0c38",
					padding: "20px",
					borderRadius: "10px",
				}}
			>
				<h1
					style={{ color: "white", textAlign: "center", marginBottom: "20px" }}
				>
					Great!
				</h1>
				<p
					style={{ color: "#DED7D3", fontWeight: "bold", textAlign: "center" }}
				>
					If you don't know{" "}
					<span style={{ color: "#CA27C9" }}>where to park</span>, we recommend
					you to use <span style={{ color: "yellow" }}>this app</span> and
					<span style={{ color: "#CA27C9" }}> rent one parking lot</span> near
					the event's location!
				</p>
				<p style={{ color: "white", textAlign: "center" }}>
					Remember to drive responsibly.
				</p>

				<Link
					to="/events"
					className="btn principal-button"
					style={{ backgroundColor: "purple" }}
				>
					Go to my events!
				</Link>
			</div>
		</div>
	);
};

export default FormPostBuy3;
