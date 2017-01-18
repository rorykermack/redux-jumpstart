/* Libs */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'react-pure-render/component';
import mapStateToProps from '../../common/app/mapStateToProps';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import RouterHandler from '../../common/app/RouterHandler.react';
import Firebase from 'firebase';
import FirebaseConfig from '../../common/auth/firebase.config';
/* --- Libs */

/* Components */
import Navigation from '../navigation/navigation.react';
/* --- Components */

/* Styles */
import './app.scss';
/* --- Styles */

const firebaseApp = Firebase.initializeApp(FirebaseConfig);

class App extends Component {

  componentDidMount() {
    const {actions} = this.props;
    Firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        actions.auth_login_complete(user);

        console.log('logged in');
      } else {
        // No user is signed in.
        console.log('not logged in');
      }
    });
  }

  render() {
    const {router} = this.context;
    const {location, auth} = this.props;

    return (
      <div>
        <Navigation location={location} auth={auth}/>
        <div>
          <RouterHandler {...this.props} router={router} />
        </div>
      </div>
    );
  }
}

/* Connect App to App State & Props */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
