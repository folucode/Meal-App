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
