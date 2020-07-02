import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth';
import GoogleIcon from '../svgs/google.svg';
class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'769233703590-v6efsu08akj71b7dfrooncd6pjql5s33.apps.googleusercontent.com',
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
				<button className="btn btn-info" onClick={this.onSignOutClick}>
					SignOut
					<span>
						{' '}
						<img
							src={GoogleIcon}
							alt="Google Icon SVG"
							height="20"
							width="20"
						/>
					</span>
				</button>
			);
		} else {
			return (
				<button
					className="btn btn-info btn-sm"
					onClick={this.onSignInClick}>
					Sign In with Google
					<span>
						{' '}
						<img
							src={GoogleIcon}
							alt="Google Icon SVG"
							height="20"
							width="20"
						/>
					</span>
				</button>
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
