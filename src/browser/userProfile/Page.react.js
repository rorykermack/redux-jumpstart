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

  render() {
    console.log(this.props);
    const {
      auth,
      user: {
        about,
        profilePhoto
      }
    } = this.props;
    console.log(profilePhoto)
    const profilePhotoURL = (profilePhoto && profilePhoto.url) ? profilePhoto.url : "https://wallpaperscraft.com/image/cat_face_profile_black_background_66441_602x339.jpg";
    return(
      <section className="my-profile-page">
        <div className="container">
          {auth.firstTime &&
            <div className="first-time">
              <h4>Welcome {auth.userFirstName}!</h4>
              <p>To adjust your settings visit your settings.</p>
            </div>
          }
          <h1>My Profile</h1>
          <div className="profile-photo" style={{
            backgroundImage: `url(${profilePhotoURL})`
          }} />
          <p>{about}</p>
        </div>
    </section>
    );
  }
}
