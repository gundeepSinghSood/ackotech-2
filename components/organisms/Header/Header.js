import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../atoms/Anchor';
import withStyles from '../../../lib/withStyles';
import styles from './Header.style';
import { Link } from '../../../routes';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById('navbar').style.paddingTop = '0';
        document.getElementById('navbar').style.paddingBottom = '0';
        document.getElementById('navbar').classList.add('fixed');
        document.getElementById('logo').style.height = '60px';
      } else {
        document.getElementById('navbar').classList.remove('fixed');
        document.getElementById('logo').style.height = '60px';
      }
    }
  }

  /**
   * renderMenuLinks
   * @method
   * @renderMenuLinks which returns the markup for the menu links
   * @param {renderLinks} Array containing the data for the links.
   */
  renderMenuLinks = renderLinks =>
    renderLinks.map(item => {
      return (
        <div className="item-container">
        <li className='item-li' aria-label={item.name} key={item.name}>
          <Anchor to={item.url} title={item.name}>
            {item.name}
          </Anchor>
          {item.secondLevel && <ul className="desktop-seconlevel">
          {item.secondLevel && item.secondLevel.map(secondItem => {
            return (
            <li className={secondItem.name} aria-label={secondItem.name} key={secondItem.name}>
              {/* <Anchor to={secondItem.url} title={secondItem.name}>
                {secondItem.name}
              </Anchor> */}
              <Link route={item.name.toLowerCase()} params={{ slug: secondItem.url }} >  
                <a>
                   {secondItem.name}
                </a>
              </Link>
            </li> )
          })}
        </ul>}
        </li>
        </div>
      );
    });

  openNav = () => {
    document.getElementById('navbar-right').style.width = '100%';
  };

  closeNav = () => {
    document.getElementById('navbar-right').style.width = '0';
  };

  render() {
    const {
      pageData: { header },
      className,
    } = this.props;

    return (
      <header id="navbar" className={`${className} `}>
        <div className="container">
          <div className="row bottom-lg between-xs">
             <span className="col-xs">
              <img id="logo" src={header.logo.image} />
            </span>
            {/* nav menu links */}
            <nav className="desktop-menu col-xs">
               <ul className="row">
                {this.renderMenuLinks(header.firstLevelMenu)}
              </ul>
            </nav>
            
            <div className="mobile-menu" >
            <span onClick={this.openNav} className="menu-icon col-xs">
              &#9776;
            </span>
            
            <nav id="navbar-right" className="nav-con sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={this.closeNav}>
                &times;
              </a>
              <ul className="row">
                {this.renderMenuLinks(header.firstLevelMenu)}
              </ul>
            </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default withStyles(Header, styles);

export { Header as HeaderVanilla };
