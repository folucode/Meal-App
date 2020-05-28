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
				<div className="inline-block float-left" key={restaurant.id}>
					<div className="max-w-sm overflow-hidden shadow-lg bg-gray-200 m-3 rounded">
						<img
							src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80"
							alt=""
							className="w-full h-64"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">{restaurant.name}</div>
							<p className="text-gray-700 text-base">
								{restaurant.description}
							</p>
						</div>

						<div className="px-6 py-4">
							<span className="inline-block bg-white rounded p-3 text-base font-bold text-gray-700 mr-2">
								<Link to={'/'}>visit Restaurant</Link>
							</span>
							{admin ? (
								<span className="inline-block bg-white rounded p-3 text-base font-bold text-gray-700 mr-2">
									<Link to={`restaurants/edit/${restaurant.id}`}>Edit</Link>
								</span>
							) : null}
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return this.props.restaurants.length < 1 ? (
			<div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 container mx-auto my-32"></div>
		) : (
			<div className="container mx-auto">
				<h1>Featured Restuarants</h1>
				{this.renderList()}
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
