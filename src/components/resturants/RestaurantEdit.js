import React from 'react';
import { fetchRestaurant, editRestaurant } from '../../actions/restaurants';
import { connect } from 'react-redux';
import RestaurantForm from './RestaurantForm';
import _ from 'lodash';

class RestaurantEdit extends React.Component {
	componentDidMount() {
		this.props.fetchRestaurant(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editRestaurant(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.restaurant) {
			return (
				<div class="text-center">
					<div class="spinner-border" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			);
		}
		return (
			<div>
				<div className="row">
					<div className="col-sm-6 offset-sm-3 my-6">
						<h3 className="text-center alert alert-primary">Edit Restaurant</h3>
					</div>
				</div>
				<RestaurantForm
					initialValues={_.pick(
						this.props.restaurant,
						'name',
						'description',
						'email',
						'address',
					)}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { restaurant: state.restaurants[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchRestaurant, editRestaurant })(
	RestaurantEdit,
);
