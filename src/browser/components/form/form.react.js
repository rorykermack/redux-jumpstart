import React, { PropTypes, Children } from 'react';
import Component from 'react-addons-shallow-compare';
import className from 'classnames';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className: propClasses,
      children
    } = this.props;
    // const childrenWithProps = this.getChildrenWithProps();

    return(
      <div className={propClasses}>
        {children}
      </div>
    );
  }
}
