import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../lib/withStyles';
import styles from './Footer.style';
import Button from '../../atoms/Button';
import Anchor from '../../atoms/Anchor';

const Footer = props => {
  const {
    className,
    pageData: { footer },
  } = props;
  const { title, links } = footer;

  const renderFooterLinks = (links, idx) => (
    <div className="col-lg-3 col-md-6 col-xs-12" key={idx}>
      <div className="footer-links">
        <h3 className="mb-3 title">{links.name}</h3>
        <hr />
        <ul className="list-info">
          {links.children.map((childLinks, idx) => (
            <li key={idx}>
              <a href={childLinks.url}>
                <span className="icon-ctrl" aria-hidden="true" />
                {childLinks.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <footer className={`footer-content ${className}`}>
      <div className="container ">
        <div className="contact-con">
          <span>Question?</span>
          <p>
            IF YOU HAVE ANY QUERIES FEEL FREE TO <Anchor>CONTACT US</Anchor>
          </p>
        </div>

        <div className="footer-top">
          <h2>
            {/* <a className="navbar-brand" href="/">
              <span className="fa fa-angellist" /> <p>{title}</p>
            </a> */}
          </h2>

          <div className="contact-form">
            <form method="post" action="#">
              <div className="row subscribe-sec">
                <div className="col-xs-12 col-md-9 con-gd">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email here..."
                    name="email"
                    required=""
                  />
                </div>
                <div className="col-xs-12 col-md-3 con-gd">
                  <Button type="submit" className="btn btn-default">
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="support-con">
          <span>
            Support. Strategies. Services. Solutions.
            <br />
            You're just one click away!
          </span>
          <Button> SCHEDULE A NETWORK ASSESSMENT </Button>
        </div>

        <div className="row footer-bottom">
          {links.map((item, idx) => renderFooterLinks(item, idx))}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default withStyles(Footer, styles);

export { Footer as FooterVanilla };
