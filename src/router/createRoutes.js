import React from 'react';
import {Route, IndexRoute} from 'react-router';

/* Main App Route */
import App from '../screens/App/App.react';
/* --- Main App Route */

/* Auth Parent Route */
// import Auth from '../screens/Auth/Page.react';
/* --- Auth Parent Route */

/* App Routes: add your routes here... */
import Home from '../screens/Home/Page.react';
import About from '../screens/About/Page.react';
import ToDo from '../screens/ToDo/Page.react';
// import UserProfile from '../screens/UserProfile/Page.react';
// import UserSettings from '../screens/UserSettings/Page.react';
/* --- App Routes */

/* 404 Page */
import NotFound from '../screens/NotFound/Page.react';

export default function createRoutes() {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='to-do' component={ToDo} />
      <Route path='*' component={NotFound} />
    </Route>
  );
  // <Route component={Auth}>
  //   <IndexRoute component={UserProfile} />
  //   <Route path='settings' component={UserSettings} />
  // </Route>
}
