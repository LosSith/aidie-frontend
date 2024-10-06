//import Logo from "../Logo/Logo";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	console.log("Home component rendered");
	return (
		<div className="home">
			<div className="home-content">
				<h1>Meet Aidie</h1>
				<img
					className="main-logo"
					src="../../../public/aidie.png"
					alt="Aidie Logo"
				/>
				<p>your event assistant</p>
				<Link to="/register" className="principal-button">
					Register and start your fun!
				</Link>
			</div>
		</div>
	);
};

export default Home;
