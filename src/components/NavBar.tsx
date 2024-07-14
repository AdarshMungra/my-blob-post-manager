// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	const navStyles: React.CSSProperties = {
		color: "#333",
		padding: "10px 20px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		fontFamily: "Libre Baskerville, serif",
		marginBottom: 32,
	};

	const linkStyles: React.CSSProperties = {
		textDecoration: "none",
		color: "#333",
		fontSize: "1.1em",
		padding: "8px 12px",
		borderRadius: "4px",
		transition: "background-color 0.3s ease",
		fontFamily: "Libre Baskerville, serif",
	};

	const logoStyles: React.CSSProperties = {
		fontSize: "1.5em",
		margin: 16,
		fontFamily: "Libre Baskerville, serif",
	};

	return (
		<nav style={navStyles}>
			<h1 style={logoStyles}>Blog Post Manager</h1>
			<div>
				<Link to="/" style={linkStyles}>
					Home
				</Link>
				<Link to="/add-post" style={linkStyles}>
					Post
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
