import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurants';
import { Link } from 'react-router-dom';
class RestaurantList extends React.Component {
	componentDidMount() {
		this.props.fetchRestaurants();
	}

	renderList() {
		return this.props.restaurants.map((restaurant) => {
			let admin =
				restaurant.userId === this.props.currentUserId && this.props.isSignedIn;
			return (
				<div className="col-sm-4 my-2" key={restaurant.id}>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">{restaurant.name}</h5>
							<p className="card-text">{restaurant.description}</p>
							<Link
								to={`/restaurant/show/${restaurant.id}`}
								className="btn btn-primary m-2">
								visit Restaurant
							</Link>
							{admin ? (
								<Link
									to={`restaurants/edit/${restaurant.id}`}
									className="btn btn-primary">
									Edit
								</Link>
							) : null}
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return this.props.restaurants.length < 1 ? (
			// <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 container mx-auto my-32"></div>
			<div className="text-center my-32 text-success">
				<div
					className="spinner-border"
					style={{ width: '5rem', height: '5rem' }}
					role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		) : (
			<div className="container-fluid">
				<div className="row m-4">
					<div className="col-sm-12">
						<h1 className="text-center">Featured Restuarants</h1>
					</div>
				</div>
				<div className="row">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		restaurants: Object.values(state.restaurants),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchRestaurants })(RestaurantList);
