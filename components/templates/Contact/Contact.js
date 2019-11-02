import React, { Component } from 'react';
import Form from '../../organisms/Form';
import axios from 'axios';
import {canUseDOM} from '../../../lib';
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
const hero = {
    "data": [
      {
        "src": "/static/img/adam-solomon-WHUDOzd5IYU-unsplash.jpg",
        "alt": "banner image"
      }
    ]
  };

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false
    }
  }
  
  submitForm = ()=> {
    // document.theForm.submit();
    // console.log(document.theForm.submit());
    // axios.get("/send-mail",{
    //     countValue: 2
    // }).then((response)=> {
    //    console.log("Data submitted successfully", response);
    // }).catch((error)=> {
    //    console.log("got errr while posting data", error);
    // });
  }
  
  render() { 
    const title = 'Contact Page';
    return (  
      <div className="contact-us">
        <SlickSlider slider={hero.data} setting={sliderSetting}/>    
        <div className="container">
          <Form />
          <div className="contact-left">
            <div className="contact_detail">
              <span className="icon-location" /> 
              <div className="contact_description">#1348/17-A,Line-8 Humbra Road,Ludhiana-141001-Punjab- INDIA</div>
            </div>
            <div className="contact_detail">
              <span className="icon-envelop" /> 
              <div className="contact_description">
                <a href="mailto:info@ackoteck.com">info@ackoteck.com</a>
              </div>
            </div>
            <div className="contact_detail">
              <span className="icon-phone" /> 
              <div className="contact_description">
                <a href="tel:+91 9803503000">+91 9803503000</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
  }
}
 
export default Contact;