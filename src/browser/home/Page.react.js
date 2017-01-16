import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Firebase from 'firebase';


import './home.scss';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.shout = this.shout.bind(this);
    this.toggleRegistered = this.toggleRegistered.bind(this);
  }

  shout() {
    console.log('=== Welcome to ReduxJumpstart! ===');
    alert('This is ReduxJumpstart!');
  }

  toggleRegistered() {
    console.log(Firebase.auth().currentUser)
    const {
      actions,
      home: {registered}
    } = this.props;

    actions.home_register(!registered);
  }

  render() {
    const {
      home: {registered}
    } = this.props;

    const hasRegistered = (registered) ? 'yes' : 'no';
    const toggleRegisteredText = (registered) ? 'Unregister' : 'Register';

    return(
      <section className="home-page">
        <div className="container">
          <h1>ReduxJumpstart</h1>
          <p>Leggings hashtag tbh normcore art party, cliche keytar iceland health goth put a bird on it forage venmo edison bulb taxidermy blog. Blog meditation kombucha 90 salvia umami. Franzen intelligentsia letterpress semiotics. Single-origin coffee taxidermy man braid, food truck leggings blog readymade hexagon. </p>
          <div className="examples">
            <h2>Examples:</h2>
            <section>
              <p>Exaple of local component func:</p>
              <button onClick={this.shout}>Local Function (alert)</button>
            </section>
            <section>
              <p>Exaple of updating the redux store and displaying the value:</p>
              <button onClick={this.toggleRegistered}>{toggleRegisteredText}</button>
              <p>Registered? ({hasRegistered})</p>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
