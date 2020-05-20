import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextInput, Button, Icon } from 'react-materialize';
import 'materialize-css';

class ResturantForm extends React.Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return <div className="red lighten-1">{error}</div>;
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `input-field col s12`;

		console.log('validate :>> ', validate);
		return (
			<div className={className}>
				<TextInput {...input} xl={12} s={12} label={label} />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<div>
				<div className="row">
					<div className="col s6 offset-s3">
						<h3>Add a new resturant</h3>
					</div>
				</div>

				<form
					onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field name="name" component={this.renderInput} label="Enter Name" />
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
					<Button node="button" type="submit" waves="light">
						Submit
						<Icon right>send</Icon>
					</Button>
				</form>
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
})(ResturantForm);
