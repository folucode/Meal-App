import React from 'react';
import { createRestaurant, fetchRestaurants } from '../../actions/restaurants';
import { connect } from 'react-redux';
import RestaurantForm from './RestaurantForm';
import { Col, Preloader } from 'react-materialize';

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
			return <div>You can't create another resturant</div>;
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
				<h3>Create a Restaurant</h3>

				{restaurants && currentUser ? (
					this.checkUser()
				) : (
					<Col s={4} offset="s5">
						<Preloader active color="blue" flashing={true} size="small" />
					</Col>
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
