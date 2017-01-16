/* Libs */
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import {browserHistory} from 'react-router'

/* Components */
import Form from '../../components/form/form.react';
/* --- Components */

/* Styles */
import './loginForm.scss';
/* --- Styles */

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.onUsernameUpdate = this.onUsernameUpdate.bind(this);
    this.onPasswordUpdate = this.onPasswordUpdate.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillMount() {
      console.log(this.props)
  }

  login() {
    const {actions} = this.props;
    const {username, password} = this.state;
    actions.auth_login({username: username, password: password});
  }

  onUsernameUpdate(e) {
    this.setState({username: e.target.value});
  }

  onPasswordUpdate(e) {
    this.setState({password: e.target.value});
  }

  render() {
    const {username, password} = this.state;
    return(
      <section className="login-form">
        <div className="container">
          <h1>Login</h1>
          <p>Firebase based auth system </p>
          <Form>
          <input type="text" placeholder="username" value={username} onChange={this.onUsernameUpdate}/>
          <input type="password" placeholder="password" value={password} onChange={this.onPasswordUpdate}/>
          <button onClick={this.login}>Login</button>
          </Form>
        </div>
    </section>
    );
  }
}
