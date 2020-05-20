import React from 'react';
import { createResturant } from '../../actions';
import { connect } from 'react-redux';
import ResturanForm from './ResturantForm';

class ResturantCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createResturant(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Resturant</h3>
				<ResturanForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createResturant })(ResturantCreate);
