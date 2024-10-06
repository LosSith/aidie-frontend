import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import LogoutButton from "../LogOut/LogOut";
import "./UserNav.css";

const NavigationHome = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navigation">
			<div className="nav-container">
				<button className="hamburger" onClick={toggleMenu}>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
				</button>
				<div className="logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
					<li>
						<Link to="/events">Events</Link>
					</li>
				</ul>
				<LogoutButton />
			</div>
		</nav>
	);
};

export default NavigationHome;
