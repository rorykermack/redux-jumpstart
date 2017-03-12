import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    }
    this.toggleRegistered = this.toggleRegistered.bind(this);
    this.toggleToggled = this.toggleToggled.bind(this);
  }

  toggleRegistered() {
    const {Home: {registered}, actions} = this.props;
    actions.homeRegister(!registered);
  }

  toggleToggled() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    const {
      Home: {registered}
    } = this.props;

    const {
      toggled
    } = this.state;

    const registerButtonText = (!registered) ? 'register' : 'un-register';
    const toggleButtonText = (!toggled) ? 'toggle' : 'un-toggle';

    return (
      <section className='home-page'>
        <div className='container'>
          <h1>ReduxJumpstart</h1>
          <p>A launch-pad for your next project or experiment.</p>
          <h2>Example of Component State Update</h2>
          <div>Toggled? {`${toggled}`}</div>
          <button onClick={this.toggleToggled}>{toggleButtonText}</button>
          <h2>Example of Redux State Update</h2>
          <div>Has registered? {`${registered}`}</div>
          <button onClick={this.toggleRegistered}>{registerButtonText}</button>
        </div>
      </section>
    );
  }
}
