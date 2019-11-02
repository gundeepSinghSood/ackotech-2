import React from "react";
import Para from '../../atoms/Para';
import PropTypes from "prop-types";
import withStyles from '../../../lib/withStyles';
import styles from './SimpleParaImage.style';
import Button from '../../atoms/Button';
import SlickSlider from '../../molecules/SlickSlider';

const sliderSetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: false,
  cssEase: 'linear',
} 

const SimpleParaImage = props => {
  const {data} = props;
  
  return(
    <section className={`row ${props.className}`}>
      <p className="col-md-6 col-xs-12" dangerouslySetInnerHTML={{ __html: data.content }}/>
      <div className="col-xs-12 contact-container">
        <div className="row">
         <h1 className="col-md-6 col-xs-12">{data.title}</h1>
         <div className="col-md-6 col-xs-12 contact-box">
            <h3>Have one of our Strategists reach out to explain how</h3> 
            <Button buttonWithLink url="/contact">
              LET’S TALK
            </Button>
         </div>
        </div>
      </div>
      {data.related &&
        <div className="related-articles col-xs-12">
          <h3>Related Services</h3>
          <div>
            {data.related && <SlickSlider slider={data.related.data} setting={sliderSetting} />}
          </div>
        </div>
      }
    </section>
  );
};

SimpleParaImage.propTypes = {};

SimpleParaImage.defaultProps = {};

export default withStyles(SimpleParaImage, styles);

export { SimpleParaImage as SimpleParaImageVanilla };