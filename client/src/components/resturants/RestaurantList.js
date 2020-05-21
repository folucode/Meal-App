import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';
import { Link } from 'react-router-dom';
import 'materialize-css';
import { Row, Col, Card, CardTitle, Icon, Preloader } from 'react-materialize';

class RestaurantList extends React.Component {
	componentDidMount() {
		this.props.fetchRestaurants();
	}

	renderList() {
		return this.props.restaurants.map((restaurant) => {
			let admin =
				restaurant.userId === this.props.currentUserId && this.props.isSignedIn;
			return (
				<Col xl={3} key={restaurant.id}>
					<Card
						key={restaurant.id}
						actions={[
							<Link to={'/'}>visit Restaurant</Link>,
							admin ? (
								<Link to={`restaurants/edit/${restaurant.id}`}>Edit</Link>
							) : null,
						]}
						closeIcon={<Icon>close</Icon>}
						header={
							<CardTitle image="https://materializecss.com/images/sample-1.jpg">
								{restaurant.name}
							</CardTitle>
						}
						revealIcon={<Icon>more_vert</Icon>}>
						{restaurant.description}
					</Card>
				</Col>
			);
		});
	}

	render() {
		return this.props.restaurants.length < 1 ? (
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
		restaurants: Object.values(state.restaurants),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchRestaurants })(RestaurantList);
