import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import className from 'classnames';

import './navigation.scss';

export default class Navigation extends Component {

  static propTypes = {
    location: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.isActiveRoute = this.isActiveRoute.bind(this);
  }

  isActiveRoute(route) {
    const {location: {pathname}} = this.props;
    return ( route == pathname.replace('/','') ) ? 'active' : '';
  }

  render() {
    const {
      header,
      auth: {loggedIn}
    } = this.props;

    const navClasses = className('main-navigation');
    const loginText = (loggedIn) ? 'Profile' : 'Login';

    return(
      <div className={ navClasses }>
        <div className={'inner'}>
          <h2 className="logo">Redux Jumpstart</h2>
          <nav>
            <ul>
              <li><Link to={`/`} className={this.isActiveRoute('')}>Home</Link></li>
              <li><Link to={`/about`} className={this.isActiveRoute('about')}>About</Link></li>
              <li><Link to={`/todos`} className={this.isActiveRoute('todos')}>To Dos</Link></li>
              <li><Link to={`/me`} className={this.isActiveRoute('me/profile')}>{loginText}</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
