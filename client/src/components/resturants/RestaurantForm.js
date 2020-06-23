import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextInput, Button, Icon } from 'react-materialize';
import 'materialize-css';

class RestaurantForm extends React.Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return <small className="form-text text-danger">{error}</small>;
		}
	};

	renderInput = ({ input, label, meta }) => {
		return (
			<div className="form-group">
				<label htmlFor={label}>{label}</label>
				<input {...input} className="form-control" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 offset-sm-3 my-1">
						<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
							<Field
								name="name"
								component={this.renderInput}
								label="Enter Resturant Name"
							/>
							<Field
								name="email"
								component={this.renderInput}
								label="Enter Email Address"
							/>
							<Field
								name="description"
								component={this.renderInput}
								label="Enter Description"
							/>
							<Field
								name="address"
								component={this.renderInput}
								label="Enter Address"
							/>
							<button type="submit" className="btn btn-dark">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.name) {
		errors.name = 'You must enter your name';
	}

	if (!formValues.email) {
		errors.email = 'You must enter your email';
	}

	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	if (!formValues.address) {
		errors.address = 'You must enter your address';
	}

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate,
})(RestaurantForm);
