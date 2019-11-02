import React, { Component } from 'react';
import dynamic from "next/dynamic";
import HomePageData from './../../../mock/homePage.json';
import UniqueBox from '../../organisms/UniqueBox';
import OurPartner from '../../organisms/OurPartner';
import SlickSlider from '../../molecules/SlickSlider';

const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    cssEase: 'linear',
  }

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { hero, uniqueBox, ourPartner } = HomePageData
    
    return (
      <section className="home-page">
        <SlickSlider slider={hero.data} setting={sliderSetting}/>
        <UniqueBox boxData={uniqueBox} />
        <OurPartner compData={ourPartner} />
      </section>
    );
  }
}

export default HomePage;
