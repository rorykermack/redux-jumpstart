/* Libs */
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import {browserHistory} from 'react-router'

/* Components */
import Form from '../../components/form/form.react';
/* --- Components */

/* Styles */
import './signupForm.scss';
/* --- Styles */

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.onEmailUpdate = this.onEmailUpdate.bind(this);
    this.onFirstNameUpdate = this.onFirstNameUpdate.bind(this);
    this.onPasswordUpdate = this.onPasswordUpdate.bind(this);
    this.state = {
      firstName: '',
      email: '',
      password: '',
    }
  }

  componentWillMount() {
      console.log(this.props)
  }

  signup() {
    const {actions} = this.props;
    const {email, password, firstName} = this.state;
    actions.auth_enlist({
      firstName: firstName,
      email: email,
      password: password
    });
  }

  onFirstNameUpdate(e) {
    this.setState({firstName: e.target.value});
  }

  onEmailUpdate(e) {
    this.setState({email: e.target.value});
  }

  onPasswordUpdate(e) {
    this.setState({password: e.target.value});
  }

  render() {
    const {firstName, email, password} = this.state;
    return(
      <section className="signup-form">
        <div className="container">
          <h1>Signup</h1>
          <Form>
            <input className="block" type="text" placeholder="First name" value={firstName} onChange={this.onFirstNameUpdate}/>
            <input className="block" type="text" placeholder="Enter your email" value={email} onChange={this.onEmailUpdate}/>
            <input className="block" type="password" placeholder="Choose a Password" value={password} onChange={this.onPasswordUpdate}/>
            <button onClick={this.signup}>Signup</button>
          </Form>
        </div>
    </section>
    );
  }
}
