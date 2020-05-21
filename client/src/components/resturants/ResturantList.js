import React from 'react';
import { connect } from 'react-redux';
import { fetchResturants } from '../../actions';
import { Link } from 'react-router-dom';
import 'materialize-css';
import { Row, Col, Card, CardTitle, Icon, Preloader } from 'react-materialize';

class ResturantList extends React.Component {
	componentDidMount() {
		this.props.fetchResturants();
	}

	renderList() {
		return this.props.resturants.map((resturant) => {
			let admin =
				resturant.userId === this.props.currentUserId && this.props.isSignedIn;
			return (
				<Col xl={3} key={resturant.id}>
					<Card
						key={resturant.id}
						actions={[
							<Link to={'/'}>visit Resturant</Link>,
							admin ? (
								<Link to={`resturants/edit/${resturant.id}`}>Edit</Link>
							) : null,
						]}
						closeIcon={<Icon>close</Icon>}
						header={
							<CardTitle image="https://materializecss.com/images/sample-1.jpg">
								{resturant.name}
							</CardTitle>
						}
						revealIcon={<Icon>more_vert</Icon>}>
						{resturant.description}
					</Card>
				</Col>
			);
		});
	}

	render() {
		return this.props.resturants.length < 1 ? (
			<Col s={4} offset="s5">
				<Preloader active color="blue" flashing={false} size="small" />
			</Col>
		) : (
			<Row>{this.renderList()}</Row>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		resturants: Object.values(state.resturants),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchResturants })(ResturantList);
