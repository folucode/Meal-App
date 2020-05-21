import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import ResturantDelete from './resturants/ResturantDelete';
import ResturantCreate from './resturants/ResturantCreate';
import ResturantEdit from './resturants/ResturantEdit';
import ResturantShow from './resturants/ResturantShow';
import ResturantList from './resturants/ResturantList';
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
						<Route path="/" exact component={ResturantList} />
						<Route path="/resturants/new" exact component={ResturantCreate} />
						<Route path="/resturants/show" component={ResturantShow} />
						<Route path="/resturants/delete" component={ResturantDelete} />
						<Route path="/resturants/edit/:id" component={ResturantEdit} />
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
