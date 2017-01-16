import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import LogoutBtn from '../auth/logoutBtn/logoutBtn.react';
import { Link } from 'react-router';
import Firebase from 'firebase';


import './userProfile.scss';


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  getName() {
  }

  render() {
    console.log(this.props);
    return(
      <section className="my-profile-page">
        <div className="container">
          <h1>My Profile</h1>
          <button onClick={() => this.getName()}>Get Name</button>
          <div className="profile-photo" style={{
            backgroundImage: `url(https://wallpaperscraft.com/image/cat_face_profile_black_background_66441_602x339.jpg)`
          }} />
          <p>Venmo green juice iPhone, farm-to-table humblebrag hot chicken neutra pabst organic ethical pour-over. Bespoke enamel pin single-origin coffee organic craft beer, forage salvia food truck synth tilde kitsch mixtape. Live-edge iPhone bicycle rights blue bottle echo park humblebrag. DIY +1 tofu kickstarter, before they sold out vice master cleanse air plant hell of poke fam iPhone celiac lyft pitchfork. Aesthetic farm-to-table ugh church-key twee cred. +1 unicorn poutine blog mustache sustainable, photo booth fashion axe 8-bit health goth kombucha trust fund literally skateboard pok pok. Keffiyeh forage lo-fi kombucha jianbing man bun meggings, neutra biodiesel pour-over mlkshk single-origin coffee.</p>
          <p>You are logged in!</p>
        </div>
    </section>
    );
  }
}
