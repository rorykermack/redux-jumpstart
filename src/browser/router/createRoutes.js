import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Routes */
import App from '../app/App.react';
import Home from '../home/Page.react';
import About from '../about/Page.react';
import ToDos from '../todo/Page.react';
import Auth from '../auth/Page.react';
import UserProfile from '../userProfile/Page.react';
import UserSettings from '../userSettings/Page.react';


/* Template */
import Template from '../_template/Page.react';

/* 404 Page */
import NotFound from '../notFound/Page.react';

export default function createRoutes(getState) {

  const requireAuth = (nextState, replace) => {
    const loggedInUser = getState().users.viewer;
    if (!loggedInUser) replace(`/?next=${nextState.location.pathname}`);
  };

  return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="me" component={Auth}>
        <IndexRoute component={UserProfile} />
        <Route path="settings" component={UserSettings} />
      </Route>
      <Route path="todos" component={ToDos}/>
      <Route path="template" component={Template}/>
      <Route path="*" component={NotFound}/>
		</Route>
	)
}
