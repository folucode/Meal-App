import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import ResturantDelete from './resturants/ResturantDelete';
import ResturantCreate from './resturants/ResturantCreate';
import ResturantEdit from './resturants/ResturantEdit';
import ResturantShow from './resturants/ResturantShow';
import ResturantList from './resturants/ResturantList';

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div className="col s12">
					<Header />
				</div>
				<div className="row">
					<div className="col s12">
						<Route path="/" exact component={ResturantList} />
						<Route path="/resturants/new" exact component={ResturantCreate} />
						<Route path="/resturants/show" component={ResturantShow} />
						<Route path="/resturants/delete" component={ResturantDelete} />
						<Route path="/resturants/edit" component={ResturantEdit} />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
