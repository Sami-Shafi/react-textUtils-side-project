import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Palletes from "./Palletes";

export default function Navbar(props) {
	return (
		<>
			<nav
				className={`navbar navbar-${
					props.textAndOutlineColor === "light" ? "dark" : "light"
				} navbar-expand-lg navbar-${props.theme} bg-${
					props.theme
				} p-3 mb-5`}
			>
				<div className="container">
					<a
						className={`navbar-brand text-${props.textAndOutlineColor}`}
						href="/"
					>
						{props.brandName}
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									to="/"
									className={`nav-link text-${props.textAndOutlineColor} active`}
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/about"
									className={`nav-link text-${props.textAndOutlineColor}`}
								>
									{props.aboutText}
								</Link>
							</li>
							<span
								style={{
									width: "20px",
								}}
							></span>
							<li className="nav-item mt-3 mt-lg-2">
								<Palletes
									handleTheme={props.handleTheme}
									outlineColor={props.textAndOutlineColor}
								/>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

Navbar.propTypes = {
	brandName: PropTypes.string,
	aboutText: PropTypes.string,
};

Navbar.defaultProps = {
	brandName: "BrandName",
	aboutText: "About",
};
