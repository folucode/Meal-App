import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className='ui secondary  menu'>
					<Link to='/' className='active item'>
						Home
					</Link>
					<Link to='/restuarants' className='item'>
						Restuarants
					</Link>
					<Link to='/meals' className='item'>
						Meals
					</Link>
					<div className='right menu'>
						<div className='item'>
							<div className='ui icon input'>
								<input type='text' placeholder='Search...' />
								<i className='search link icon'></i>
							</div>
						</div>
						<GoogleAuth />
					</div>
				</div>
	);
};

export default Header;
