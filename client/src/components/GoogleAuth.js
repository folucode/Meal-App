import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'769233703590-otn0pf69ec5tlqb3ced30d6b576kueg1.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<a
					className="waves-effect waves-light red darken-3 btn"
					onClick={this.onSignOutClick}>
					SignOut
					<span>
						{' '}
						<FontAwesomeIcon icon={faGoogle} />
					</span>
				</a>
			);
		} else {
			return (
				<a
					className="waves-effect waves-light red darken-3 btn"
					onClick={this.onSignInClick}>
					Sign In with Google
					<span>
						{' '}
						<FontAwesomeIcon icon={faGoogle} />
					</span>
				</a>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}
const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
