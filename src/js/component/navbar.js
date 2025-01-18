import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 text-center" style={{ background: "black" }}>
			<Link to="/">
				<img src="https://framerusercontent.com/images/HVzApGKkH6YM1vUO9zOo5lJBC4.jpeg" className="ms-3" style={{ height: "50px", width: "90px" }} />
			</Link>
		</nav>

	);
};
