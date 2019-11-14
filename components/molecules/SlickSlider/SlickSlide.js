import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../lib/withStyles';
import styles from './SlickSlide.style';
import Slider from 'react-slick';
import Settings from '../../../config/CarouselSettings.config';
import Anchor from '../../atoms/Anchor';

class SlickSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  checkFile = (file) => {
    let extension = file.substr((file.lastIndexOf('.') +1));
    if (/(png|jpg)$/ig.test(extension)) {
      return true
    }
    return false
  }
  
  viewArray = this.props.slider && this.props.slider.map(item => {
      return this.checkFile(item.src)
              ? <img src={item.src} />
              : <>
                {item.title
              ? <Anchor to={item.url}>
                  <div className="video">
                    <video autoPlay preLoad loop>
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {item.title && 
                      <div className="item-title">
                        <h3>{item.title}</h3>
                      </div>
                    }
                  </div>
                </Anchor>
              : <div className="video">
                  <video autoPlay preLoad loop>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {item.heroText && <div className="container hero-video-text"><div dangerouslySetInnerHTML={{ __html: item.heroText }}/></div>}
                </div>
              }</>
    });
  
  render() {
    const { slider, setting, headerText, className } = this.props;
    const sliderSetting = {...Settings, ...setting}
    
   const viewText= () => {
     return { __html: headerText };
   }

    return slider 
          ? <Slider className={className} {...sliderSetting}>{this.viewArray}</Slider> 
          : <div className={`${className}`}>
              <section className={`simple-text-header`} dangerouslySetInnerHTML={viewText()}></section>
              <div className="line-break"/>
            </div>;
  }
}

SlickSlide.propTypes = {};

SlickSlide.defaultProps = {};

export default withStyles(SlickSlide, styles);

export { SlickSlide as SlickSlideVanilla };
