import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import LogoutButton from "../LogOut/LogOut";
import "./UserNav.css";
import "../Nav/Nav.css";
import { FaBell, FaStar, FaRegCalendar, FaUserCircle } from "react-icons/fa";

const NavigationHome = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navigation user-nav">
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
				<div className="user-buttons">
					<Link to="/post-buy">
						<FaBell className="user-icon user-notification selected" />
					</Link>
					<Link to="/events">
						<FaStar className="user-icon user-favorites" />
					</Link>
					{/* 	<Link to="/my-events">
						<FaRegCalendar className="user-icon user-calendar" />
					</Link> */}
					<Link to="/profile">
						<FaUserCircle className="user-icon user-profile" />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavigationHome;
