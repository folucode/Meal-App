import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ResturantCreate extends React.Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : '' } `;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.createResturant(formValues)
	}

	render() {
		return (
			<form
				className="ui form error"
				onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field
					name="name"
					component={this.renderInput}
					label="Enter Your Name"
				/>
				<Field
					name="email"
					component={this.renderInput}
					label="Enter Your Email Address"
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
			</form>
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

export default connect(null, { rest }(reduxForm({
	form: 'resturantCreate',
	validate,
}))(ResturantCreate));
