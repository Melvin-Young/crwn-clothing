import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import { default as Button } from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		const { password, email } = this.state;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<Button type="submit">Sign in</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
