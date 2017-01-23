import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import LogoutBtn from '../auth/logoutBtn/logoutBtn.react';
import Firebase from 'firebase';


import './userProfile.scss';


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.updateAbout = this.updateAbout.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.updateFile = this.updateFile.bind(this);
    const {
      auth: {userFirstName: displayName},
      user: {about}
    } = this.props;
    this.state = {
      name: displayName,
      email: '',
      about: about
    };
  }

  componentWillReceiveProps(newProps) {
    const {user} = this.props;
    const {about} = this.state;
    this.setState({about: newProps.user.about});
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateAbout(e) {
    this.setState({
      about: e.target.value
    })
  }

  updateFile(e) {
    const {actions} = this.props;
    const userId = Firebase.auth().currentUser.uid;
    actions.user_update_profile_photo({
      file: e.target.files[0],
      path: `/images/userImages/${userId}/profilePhotos`
    });
  }

  submitInfo() {
    const {actions} = this.props;
    const {name, about} = this.state;
    actions.auth_update_user({displayName: name});
    actions.user_update_info({about: about});
  }

  render() {
    const {
      auth: {loggedIn}
    } = this.props;
    const {name, about} = this.state;
    return(
      <section className="my-profile-page">
        {loggedIn &&
          <div className="container">
            <h1>My Profile Settings</h1>
            <input type="file" onChange={(e) => this.updateFile(e)} />
            <br/>
            <input type="text" placeholder="your name" value={name} onChange={(e) => this.updateName(e)} />
            <br/>
            <textarea placeholder="about me..." value={about} onChange={(e) => this.updateAbout(e)} />
            <button className="button" onClick={() => this.submitInfo()}>Submit</button>
          </div>
        }
        {!loggedIn &&
          <div>Loading...</div>
        }
    </section>
    );
  }
}
