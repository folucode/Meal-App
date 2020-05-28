import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<nav className="bg-green-400 p-4 clearfix">
			<div className="inline bg-gray-300 float-left p-3 rounded"><Link to="/">Book A Meal</Link></div>
			<div className="inline-block float-right"><GoogleAuth /></div>
			<div className="inline float-right bg-gray-300 p-3 rounded mx-1"><Link to="/restaurants/new">Create Restauarant</Link></div>
			<div className="inline float-right bg-gray-300 p-3 rounded mx-1"><Link to="#">Meals</Link></div>
			<div className="inline float-right bg-gray-300 p-3 rounded mx-1"><Link to="/">Home</Link></div>
		</nav>
	);
};

export default Header;
