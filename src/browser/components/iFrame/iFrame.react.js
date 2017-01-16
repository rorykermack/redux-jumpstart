import React, { PropTypes } from 'react';

export default class iFrame extends React.Component {

  // static PropTypes = {
  // }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  };

  render() {
    const {
      src,
      width: propWidth,
      height: propHeight} = this.props;

    const height = `${propHeight}px`;
    const width = `${propWidth}px`;

    return(
      <div className="react-iframe">
        <iframe src={src} style={{width: '500px', height: '500px'}}/>
      </div>
    );
  }
}
