/* Libs */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'react-pure-render/component';
import mapStateToProps from '../../reducers/mapStateToProps';
import mapDispatchToProps from '../../reducers/mapDispatchToProps';
import RouterHandler from './RouterHandler.react';
/* --- Libs */

/* Components */
import Navigation from '../../components/Navigation/navigation.react';
import Footer from '../../components/Footer/footer.react';
/* --- Components */

/* Styles */
import './app.scss';
/* --- Styles */

class App extends Component {
  render() {
    const {router} = this.context;
    const {location, auth} = this.props;

    return (
      <div>
        <Navigation location={location} auth={auth}/>
        <div>
          <RouterHandler {...this.props} router={router} />
        </div>
        <Footer />
      </div>
    );
  }
}

/* Connect App to App State & Props */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
