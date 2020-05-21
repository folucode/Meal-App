import React from 'react';
import { fetchResturant, editResturant } from '../../actions';
import { connect } from 'react-redux';
import ResturantForm from './ResturantForm';
import _ from 'lodash';
import { Col, Preloader } from 'react-materialize';

class ResturantEdit extends React.Component {
	componentDidMount() {
		this.props.fetchResturant(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editResturant(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.resturant) {
			return (
				<Col s={4} offset="s5">
					<Preloader active color="blue" flashing={false} size="small" />
				</Col>
			);
		}
		return (
			<div>
				<h3>Edit a Stream</h3>
				<ResturantForm
					initialValues={_.pick(
						this.props.resturant,
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
	return { resturant: state.resturants[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchResturant, editResturant })(
	ResturantEdit,
);
