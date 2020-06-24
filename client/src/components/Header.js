import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import classNames from 'classnames';

const Header = () => {
	const [isCollapsed, toggleCollapse] = useState(true);

	return (
		<nav className="navbar rounded-b navbar-expand-lg navbar-dark bg-dark">
			<div className="navbar-brand">
				<Link to="/" style={{ textDecoration: 'none' }}>
					Book A Meal
				</Link>
			</div>
			<button className="navbar-toggler">
				<span
					className="navbar-toggler-icon"
					onClick={() => {
						toggleCollapse(!isCollapsed);
					}}></span>
			</button>
			<div
				className={classNames({ collapse: isCollapsed }, 'navbar-collapse')}
				id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<div className="nav-item">
						<Link to="/restaurants/new" className="nav-link">
							Create Restauarant
						</Link>
					</div>
					<div className="nav-item">
						<Link to="#" className="nav-link">
							Meals
						</Link>
					</div>
					<div className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</div>
					<div className="float-lg-right">
						<GoogleAuth />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
