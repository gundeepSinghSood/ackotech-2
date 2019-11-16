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
    const heroText= `<h1>Who is Ackotech<br/>
            <span>A Digital Innovation Agency
                helping businesses achieve
                exponential growth &
                operational efficiency</span></h1>`;
    return (
      <section className="home-page">
        <SlickSlider slider={hero.data} setting={sliderSetting} headerText={heroText} />
        <OurPartner compData={ourPartner} />
        <UniqueBox boxData={uniqueBox} />
      </section>
    );
  }
}

export default HomePage;
