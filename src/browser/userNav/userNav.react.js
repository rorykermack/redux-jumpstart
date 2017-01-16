import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LogoutBtn from '../auth/logoutBtn/logoutBtn.react';



import './user-nav.scss';


export default class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      auth: {userFirstName, loggedIn}
    } = this.props;
    return(
      <nav className="user-nav">
        { loggedIn && <p>Hey {userFirstName}!</p> }
        <ul>
          <li><Link className="grey" to={`/me/profile`}>Profile</Link></li>
          <li><Link className="grey" to={`/me/settings`}>Settings</Link></li>
          <li><LogoutBtn {...this.props}/></li>
        </ul>
      </nav>
    );
  }
}
