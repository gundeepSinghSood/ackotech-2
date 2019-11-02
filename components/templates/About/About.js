import React from 'react';
import Button from '../../atoms/Button';
import SlickSlide from "../../molecules/SlickSlider";
import Client from "../../organisms/Clients";
import Para from '../../atoms/Para';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.slideData = [
      {
        src: "/static/img/apc.png",
        alt: ""
      }
    ]
  }
  
  render() {
    const headerText =`<h1>Using digital & technology to -<br/>
            <span>Reinvent business models, <br/>
            Create new growth channels, <br/>
            Enable companies to be more efficient</span></h1>`;
    return (
      <section className={`container about-page`}>
      <SlickSlide headerText={headerText} />
        <div className="row col-xs-12">
          <article className="col-xs-12 col-md-5">
            <h1>About Ackotech</h1>
            <br/>
            <Para tagName='p'>The mission of Ackotech (System Integrators) desing mantain is to help our clients with Information Technology services of outstanding quality, competence and objectivity, delivering the best solutions to fully satisfy client objectives in information technology,business processes and management. In all we do, builds, maintains, and secures computer networks and it’s what makes us the best in our industry.</Para>
             <article className="marginTB-80">
                <Para tagName='h3'>Our Vision</Para>
                <Para tagName='p'>Ackotech vision is to be a world-class IT Consulting company that helps our clients increase productivity and profitability through the use of the best technology available.We developing the are not even avilable in the gernal market.</Para>
              </article>
              <article className="marginTB-80">
                <Para tagName='h3'>Our Team</Para>
                <Para tagName='p'>Ensuring they are on the cutting edge of industry parctices, and working within the culture that promotes excelent and job satification.</Para>
              </article>
          </article>
          <div className="col-xs-12 col-md-7">
              
              <article className="marginTB-50">
                <Para tagName='h3'>Our Operation</Para>
                <Para tagName='p'>Empling proactive, matrix-driven methods and practices desinged to server with transparance and integrety.</Para>
              </article>
              
              <article className="marginTB-80">
                <Para tagName='h3'>Objective and Integrity</Para>
                <Para tagName='p'>Ackotech and its members exercise the highest degree of independent thinking in selecting the products, services and solutions we recommend to clients.<br/>>The key of our success include a commitments to operational disciplie and excellence and attractig the best people in the business, alongside a healthy culture that promotes creative inovation, skillfull execution and retention of talent.<br/>>We have built a company that has the operational maturity, expertise, and resources to truely secure your network and make sure it operates at its best. And we deliver our services with integrity, accountablity, and an authentic desire to get to the heart of what your small to mid-size business needs.</Para>
              </article>
              
              <Button buttonWithLink url="/contact">
                Contact US
              </Button>
          </div>
        </div>
        <Client />
      </section>
    );
  }
}

export default About;
