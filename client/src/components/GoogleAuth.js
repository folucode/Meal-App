import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import GoogleIcon from '../svgs/google.svg';
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
				<button className="cursor-pointer bg-red-400 p-3 rounded mx-1" onClick={this.onSignOutClick}>
					SignOut
					<span>
						{' '}
						<img
							src={GoogleIcon}
							alt="Google Icon SVG"
							className="fill-current w-5 h-5 inline"
						/>
					</span>
				</button>
			);
		} else {
			return (
				<button
					className="cursor-pointer bg-red-400 p-3 rounded mx-1"
					onClick={this.onSignInClick}>
					Sign In with Google
					<span>
						{' '}
						<img
							src={GoogleIcon}
							alt="Google Icon SVG"
							className="fill-current w-5 h-5 inline"
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
