import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import RestaurantDelete from './resturants/RestaurantDelete';
import RestaurantCreate from './resturants/RestaurantCreate';
import RestaurantEdit from './resturants/RestaurantEdit';
import RestaurantShow from './resturants/RestaurantShow';
import RestaurantList from './resturants/RestaurantList';
import history from '../history'

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div className="col s12">
					<Header />
				</div>
				<div className="row">
					<div className="col s12">
						<Route path="/" exact component={RestaurantList} />
						<Route path="/restaurants/new" exact component={RestaurantCreate} />
						<Route path="/restaurants/show" component={RestaurantShow} />
						<Route path="/restaurants/delete" component={RestaurantDelete} />
						<Route path="/restaurants/edit/:id" component={RestaurantEdit} />
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
