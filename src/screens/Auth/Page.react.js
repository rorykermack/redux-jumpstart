import React from 'react';
import Component from 'react-pure-render/component';
import LoginForm from './loginForm/loginForm.react';
import SignupForm from './signupForm/signupForm.react';
import UserNav from '../userNav/userNav.react';

import './auth.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.toggleSignupVisible = this.toggleSignupVisible.bind(this);
    this.state = {
      signupVisible: false
    };
  }

  toggleSignupVisible(visible) {
    this.setState({
      signupVisible: visible
    });
  }

  render() {
    const {auth: {loggedIn}} = this.props;
    const {signupVisible} = this.state;
    return (
      <section className="login-page">
        <div className="container">
          <UserNav {...this.props} />
          {!loggedIn && !signupVisible &&
            <div>
              <LoginForm {...this.props} />
              <p onClick={() => this.toggleSignupVisible(true)}>
                Need an account? Sign up!
              </p>
            </div>
          }
          {!loggedIn && signupVisible &&
            <div>
              <SignupForm {...this.props} />
              <p onClick={() => this.toggleSignupVisible(false)}>
                Have an account? Login!
              </p>
            </div>
          }

          {loggedIn &&
            React.cloneElement(this.props.children, {...this.props})
          }
        </div>
    </section>
    );
  }
}
