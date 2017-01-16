/* Libs */
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
/* --- Libs */

/* Styles */
import './_template.scss';
/* --- Styles */

export default class _Template extends Component {
  static propTypes = {
    _template: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    const {
      _template:{active},
      actions} = this.props;
    actions._template_toggle();
  }

  log() {
    console.log('=== Template Log ===');
    console.log(this.props);
  }

  render() {
    const {
      _template: {active}
    } = this.props;

    return(
      <section className="template-page">
        <div className="container">
          <h1>_template</h1>
          <p>This is an example template component</p>
          <p>Duplicate _template in both browser & common to modify</p>
          <div>
            <h2>Examples</h2>
            <p>Log Props:</p>
            <button onClick={this.log}>Log Props</button>
            <p>Template Active: {`${active}`}</p>
            <button onClick={this.toggleActive}>Toggle Active</button>
          </div>
        </div>
      </section>
    );
  }
}
