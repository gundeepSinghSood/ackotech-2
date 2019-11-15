import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../lib/withStyles';
import styles from './OurPartner.style';
import SlickSlide from '../../molecules/SlickSlider';

const OurPartner = props => {
  const { className, compData } = props;
  const { title, slideData } = compData;

  return (
    <section className={className}>
      <div className="container">
        {/* <h2>{title}</h2> */}
        <SlickSlide slider={slideData} />
      </div>
    </section>
  );
};

OurPartner.propTypes = {};

OurPartner.defaultProps = {};

export default withStyles(OurPartner, styles);

export { OurPartner as OurPartnerVanilla };
