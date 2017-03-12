/* Libs */
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
/* --- Libs */

/* Styles */
import './about.scss';
/* --- Styles */


export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="about-page">
        <div className="container">
          <h1>About</h1>
          <p>Farm-to-table photo booth aesthetic, seitan meggings man braid XOXO blog yuccie tote bag pickled. Lo-fi vice jean shorts, seitan paleo narwhal mumblecore swag migas. Kitsch food truck pitchfork, hammock stumptown tote bag cold-pressed pop-up shabby chic forage scenester typewriter poutine. Meh ugh typewriter, pabst plaid pop-up tumblr gluten-free skateboard fanny pack. Pabst stumptown offal meggings twee migas. +1 pinterest vinyl, keytar you probably
          havent heard of them neutra chia cronut raw denim tilde authentic 8-bit. Deep v fap cliche, messenger bag next level truffaut chartreuse banjo fixie meggings austin drinking vinegar farm-to-table cray.</p>
        </div>
    </section>
    );
  }
}
