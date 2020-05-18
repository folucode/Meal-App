import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/">Book A Meal</Link>
				<ul id="nav-mobile" className="right">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/resturants/new">Create Restuarant</Link>
					</li>
					<li>
						<Link to="#">Meals</Link>
					</li>
					<li>
						<GoogleAuth />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
