import "./Home.css";

const Home = () => {
	console.log("Home component rendered");
	return (
		<div className="home">
			<div className="home-content">
				<h1>Welcome to the Concert</h1>
				<p>Experience the music like never before</p>
				<button className="cta-button">Get Tickets</button>
			</div>
		</div>
	);
};

export default Home;
