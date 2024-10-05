//import Logo from "../Logo/Logo";
import "./Home.css";

const Home = () => {
	console.log("Home component rendered");
	return (
		<div className="home">
			<div className="home-content">
				<h1>Meet Aidie</h1>
        <img className="main-logo" src="../../../public/aidie.png" alt="Aidia Logo"/>
				<p>your event assistant</p>
				<button className="cta-button">Register and start your fun!</button>
			</div>
		</div>
	);
};

export default Home;
