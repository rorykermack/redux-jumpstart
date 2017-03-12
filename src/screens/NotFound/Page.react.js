import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';

import './404.scss';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="about-page">
        <h1>404 - NOT FOUND!!</h1>
      </section>
    );
  }
}
