import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';

export default class LogoutBtn extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const {actions, history} = this.props;
    console.log(actions);
    console.log(history);
    console.log(this.props);
    actions.auth_logout();
        // history.push('/me/profile')
    // context.push('/me/profile');
  }

  render() {
    return(
      <button onClick={() => this.logout()} className="red">Logout</button>
    );
  }
}
