import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import LoginForm from './loginForm/loginForm.react';
import { Link } from 'react-router';
import UserNav from '../userNav/userNav.react';


import './auth.scss';


export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {auth: {loggedIn}} = this.props;
    return(
      <section className="login-page">
        <div className="container">
          <UserNav {...this.props} />

          {!loggedIn &&
            <LoginForm {...this.props} />
          }
          {loggedIn &&
            React.cloneElement(this.props.children, {...this.props})
          }
        </div>
    </section>
    );
  }
}
