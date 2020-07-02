import React from 'react';
import { createRestaurant, fetchRestaurants } from '../../actions/restaurants';
import { connect } from 'react-redux';
import RestaurantForm from './RestaurantForm';

class RestaurantCreate extends React.Component {
	componentDidMount() {
		this.props.fetchRestaurants();
	}

	onSubmit = (formValues) => {
		this.props.createRestaurant(formValues);
	};

	checkUser = () => {
		let result = this.props.restaurants.find((user) => {
			return user.userId === this.props.currentUser;
		});

		if (result) {
			return (
				<div className="row">
					<div className="col-sm-6 offset-sm-3 my-6">
						<div className="text-center alert alert-danger p-12">
							You can't create another restaurant!
						</div>
					</div>
				</div>
			);
		} else {
			return <RestaurantForm onSubmit={this.onSubmit} />;
		}
	};

	render() {
		let { restaurants, currentUser } = this.props;

		if (!currentUser) {
			return <h3>Login in to create a restaurant</h3>;
		}

		return (
			<div>
				<div className="row">
					<div className="col-sm-6 offset-sm-3 my-6">
						<h3 className="text-center alert alert-primary">
							Create a Restaurant
						</h3>
					</div>
				</div>

				{restaurants && currentUser ? (
					this.checkUser()
				) : (
					<div className="text-center my-32 text-success">
						<div
							className="spinner-border"
							style={{ width: '5rem', height: '5rem' }}
							role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		restaurants: Object.values(state.restaurants),
		currentUser: state.auth.userId,
	};
};

export default connect(mapStateToProps, { createRestaurant, fetchRestaurants })(
	RestaurantCreate,
);
