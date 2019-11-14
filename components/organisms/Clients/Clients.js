import React from "react";
import PropTypes from "prop-types";
import withStyles from '../../../lib/withStyles';
import styles from './Client.style';
// import Image from '../../atoms/'

const imageArr = [
  {
    url: '/static/img/Guru-Nanak-Dev-Engineering-College_logo_gnd.png',
    title: 'GNE College'
  },
  {
    url: '/static/img/bonn-logo.gif',
    title: 'Bonn Bread'
  },
  {
    url: '/static/img/6982_MaloutInstituteofManagementandInformationTechnologyMIMITMalout_1426760546_medium.jpg',
    title: 'EVEREST STUDY'
  },
  {
    url: '/static/img/aarti-steels-ltd.jpg',
    title: 'AARTI STEELS'
  },
  {
    url: '/static/img/6982_MaloutInstituteofManagementandInformationTechnologyMIMITMalout_1426760546_medium.jpg',
    title: 'MIMIT COLLEGE MALOT'
  },
  {
    url: '/static/img/ROCKMAN-OG-TAG-LOGO.jpg',
    title: 'ROCKMAN INDUSTRIES'
  },
  {
    url: '/static/img/HIs-e1446695356478.png',
    title: 'HARVEST INTERNATIONAL SCHOOL'
  },
  {
    url: '/static/img/RIMT-LOGO.png',
    title: 'RIMT -- ROPAR'
  },
  {
    url: '/static/img/centex.png',
    title: 'CENTEX INTERNATINAL'
  }
]

const Clients = props => {
  return(
    <section className={`row ${props.className}`}>
      <div className="col-md-6 col-sm-12 col-xs-12 client-img">
        {imageArr.map(item => {
          return(
            <div className="img-grid" key={item.title}>
              <img src={item.url} />
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
      <div className="col-md-5 col-md-offset-1 col-sm-12 col-xs-12">
        <h3 className="client-text">We've worked with a number of Fortune 500s, but today are a preferred partner of the growing, mid-market enterprise</h3>
      </div>
    </section>
  );
};

Clients.propTypes = {};

Clients.defaultProps = {};

export default withStyles(Clients, styles);

export { Clients as ClientsVanilla };
