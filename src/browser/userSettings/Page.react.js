import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import LogoutBtn from '../auth/logoutBtn/logoutBtn.react';

import './userProfile.scss';


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    const {auth: {userFirstName: displayName}} = this.props;
    this.state = {
      name: displayName,
      email: ''
    };
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  submitInfo() {
    const {actions} = this.props;
    const {name} = this.state;
    actions.auth_update_user({displayName: name});
  }

  render() {
    console.log(this.props);
    const {name} = this.state;
    return(
      <section className="my-profile-page">
        <div className="container">
          <h1>My Profile Settings</h1>
          <input type="text" placeholder="your name" value={name} onChange={(e) => this.updateName(e)} />
          <br/>
          <input type="text" placeholder="your email" onChange={(e) => this.updateEmail(e)} />
          <br/>
          <textarea placeholder="about me...">
          </textarea>
          <br/>
          <button className="button" onClick={() => this.submitInfo()}>Submit</button>
        </div>
    </section>
    );
  }
}
