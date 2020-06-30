import React from 'react';
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurants';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createMeal, fetchMeals } from '../../actions/meals';

class RestaurantShow extends React.Component {
	componentDidMount() {
		this.props.fetchRestaurant(this.props.match.params.id);
		this.props.fetchMeals();
	}

	renderRestaurantInfo() {
		if (this.props.restaurant) {
			const { name, description, email, address } = this.props.restaurant;

			return (
				<ul className="list-group list-group-flush">
					<li className="list-group-item bg-info font-weight-bold text-center">
						Restaurant Information
					</li>
					<li className="list-group-item">
						<span className="font-weight-bold">Restaurant Name:</span> {name}
					</li>
					<li className="list-group-item">
						<span className="font-weight-bold">Description:</span> {description}
					</li>
					<li className="list-group-item">
						<span className="font-weight-bold">Restaurant Email:</span> {email}
					</li>
					<li className="list-group-item">
						<span className="font-weight-bold">Restaurant Address:</span>{' '}
						{address}
					</li>
				</ul>
			);
		}
	}

	renderRestaurantMeals() {
		const { meals, match } = this.props;

		let restaurantMeal = meals.filter(
			(meal) => meal.restaurantId === match.params.id,
		);

		let i = 0;

		if (restaurantMeal.length > 0) {
			return (
				<table className="table table-striped overflow-auto">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Meal Name</th>
							<th scope="col">Price</th>
						</tr>
					</thead>
					{restaurantMeal.map((meal) => {
						return (
							<tbody key={meal.id}>
								<tr>
									<th scope="row">{(i += 1)}</th>
									<td>{meal.meal_name}</td>
									<td>{meal.meal_price}</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			);
		} else {
			return (
				<div className="alert alert-info my-4">
					<h2 className="text-center">
						There are no meals for this restaurant
					</h2>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		return (
			<div className="form-group">
				<label htmlFor={label}>{label}</label>
				<input {...input} className="form-control" />
			</div>
		);
	};

	onSubmit = (formValues, dispatch) => {
		this.props.createMeal(this.props.match.params.id, formValues);
		dispatch(this.props.reset('mealCreate'));
	};

	renderAddMeal() {
		if (this.props.restaurant && this.props.currentUserId) {
			if (this.props.restaurant.userId === this.props.currentUserId) {
				return (
					<div className="row">
						<div className="col-sm-12 bg-info my-6 p-4">
							<h1 className="text-center font-weight-bold">Add a new meal</h1>
						</div>
						<div className="col-sm-6 offset-sm-3">
							<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
								<Field
									name="meal_name"
									component={this.renderInput}
									label="Enter Meal Name"
								/>
								<Field
									name="meal_price"
									component={this.renderInput}
									label="Enter Meal Price"
								/>
								<button type="submit" className="btn btn-dark">
									Submit
								</button>
							</form>
						</div>
					</div>
				);
			} else {
				return null;
			}
		} else {
			return (
				<div class="text-center">
					<div class="spinner-border" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="container my-24">
				<div className="row">
					<div className="col-sm-6">{this.renderRestaurantInfo()}</div>
					<div className="col-sm-6">{this.renderRestaurantMeals()}</div>
				</div>
				{this.renderAddMeal()}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		restaurants: Object.values(state.restaurants),
		restaurant: state.restaurants[ownProps.match.params.id],
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
		meals: Object.values(state.meals),
	};
};

export default connect(mapStateToProps, {
	fetchRestaurant,
	fetchRestaurants,
	createMeal,
	fetchMeals,
})(
	reduxForm({
		form: 'mealCreate',
	})(RestaurantShow),
);
