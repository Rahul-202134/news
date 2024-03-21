import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid ">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active text-white"
									aria-current="page" to={`/`}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-white" to={`/Entertainment`}>
									Entertainment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-white" to={`/Technology`}>
									Technology
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-white" to={`/Sports`}>
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-white" to={`/Business`}>
									Business
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-white" to={`/Health`}>
									Health
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-white" to={`/Science`}>
									Science
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
