import React, { PropTypes } from 'react';

const heroImage = ({image, classes, children}) => {
  const heroClassNames = className(
    'react-hero-image',
    classes
  );
  return (
    <section className={heroClassNames}>
      {children}
    </section>
  );
};

export default heroImage;
