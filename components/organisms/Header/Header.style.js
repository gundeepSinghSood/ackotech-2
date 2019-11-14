import { css } from 'styled-components';

export default css`
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align: center;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 36px;
    margin-left: 50px;
  }
  #navbar-right.sidenav .closebtn {
    color: #7ab4db;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }

  .menu-icon {
    font-size: 30px;
    cursor: pointer;
    text-align: right;
    display: block;
    line-height: 54px;
    color: #7ab4db;
    
    @media ${props => props.theme.largeMediaQuery} {
      display: none;
    }
  }

  /* Create a sticky/fixed navbar */
  &#navbar {
    overflow: hidden;
    position: absolute;
    /* padding: 0 30px; Large padding which will shrink on scroll (using JS) */
    transition: 0.4s; /* Adds a transition effect when the padding is decreased */
    width: 100%;
    top: 0;
    z-index: 99;
    left: 0;
    right: 0;
    margin: auto;
    background: #fff;

    .desktop-menu {
      display: none;
      
      @media ${props => props.theme.largeMediaQuery} {
        display: block;
        height: 70px;
      } 
    
      ul {
        margin: 0;
        text-decoration: none;
        list-style-type: none;
        height: 100%;
        line-height: 70px;

        .activeItem.item-li {
          background-color: #0C6291;
          color: #fff;
          a {
            color: #fff;
          }
        }
        .item-container {
          height: 100%;
        }
      
        .item-li {
          transition: all 5s ease-in;
          position: relative;
          height: 100%;
          >.desktop-seconlevel {
            position: fixed;
            left: 0;
            right: 0;
            opacity: 0;
            pointer-events: none;
            &:before {
              content: '';
              position: absolute;
              top: 80px;
              right: 0;
              left: 0;
              bottom: 0;
              transform: scale(2,0);
              transform-origin: center top;
              transition: .3s all ease;
            }
          }
          &:hover {
            >.desktop-seconlevel {
              opacity: 1;
              pointer-events: auto;
              padding: 3.125rem;
              height: auto;
              line-height: normal;
              display: flex;
              flex-flow: column;
              text-align: right;
              margin: 0 auto;

              &:before {
                content: '';
                top: 0;
                position: absolute;
                left: 0;
                right: 0;
                background: linear-gradient(to right,rgb(12, 98, 143) 0%,rgba(19, 66, 133, 0.77) 100%) !important;
                justify-content: flex-end;
                align-items: center;
                transform: scale(2,1);
              }
              li {
                position: relative;
                margin-bottom: .625rem;
              }
              
              a {
                color: #fff;
                height: 100%;
                font-size: 22px;
                transition: none;
              }
            }
          }
        }
        
        a {
          color: black;
          padding: 0 10px;
        }
      }
    }
    
    /* .desktop-seconlevel {
      display: none;
       transition: all 5s cubic-bezier(0, 1, 0.5, 1);
      transition: all .5s ease-in;
    } */
    
    .mobile-menu {
    display: block;
    
      @media ${props => props.theme.largeMediaQuery} {
        display: none;
      }
      nav {
        ul {
          margin: 0;
          text-decoration: none;
          list-style-type: none;
          /* padding: 20vh 0 15vh; */
          flex: 1 0 auto;
          flex-flow: column nowrap;
          justify-content: space-evenly;
          /* height: 100vh; */
          
          a {
            float: none;
          }
        }
        .desktop-seconlevel {
          display: block;
        }
      }
    }
    
    a {
      /* float: left; */
      color: white;
      text-align: left;
      /* padding: 12px; */
      text-decoration: none;
      /* font-size: 18px; */
      /* line-height: 25px; */
      /* border-radius: 4px; */
      transition: 0.4s;

      &:hover {
        transition: 0.4s;
        color: ${props => props.theme.textColorSecondary};
      }

      &.active {
        background-color: dodgerblue;
        color: white;
      }
    }

    #logo {
      font-size: 35px;
      font-weight: bold;
      transition: 0.4s;
      height: 50px;

      @media ${props => props.theme.largeMediaQuery} {
        height: 70px;
      }
    }
  }

  &#navbar.fixed {
    position: fixed;
    background: white;
    box-shadow: 2px 2px 10px rgba(12, 98, 145, 0.34);
    background-size: cover;
    /* padding: 10px 30px; */

    a {
      color: ${props => props.theme.textColorSecondary};
    }
  }

  /* Add responsiveness - on screens less than 580px wide, display the navbar vertically instead of horizontally */
  @media screen and (max-width: 580px) {
    &#navbar {
      padding: 20px 10px;
      a {
        /* float: none; */
        display: block;
        /* text-align: right; */
      }
    }
  }
`;
