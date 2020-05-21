import React from 'react';
import { createRestaurant } from '../../actions';
import { connect } from 'react-redux';
import RestaurantForm from './RestaurantForm';

class RestaurantCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createResturant(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Restaurant</h3>
				<RestaurantForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		restaurants: state.restaurants
	}
}

export default connect(mapStateToProps, { createRestaurant })(RestaurantCreate);
