import { css } from 'styled-components';

export default css`
  hr {
    border-top: 1px solid rgba(251, 247, 247, 0.1);
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
  }

  &.footer-content {
    background: #fff;
    .container {
      padding-bottom: 1rem !important;
      padding-top: 3rem !important;

      .footer-top {
        h2 {
          a {
            padding-bottom: 3rem;
            padding-top: 1em;
            font-size: 1.2em;
            color: ${props => props.theme.textColorMildGrey};
            padding: 0;
            font-weight: 700;
            margin: 0;
            letter-spacing: 1px;
            position: relative;
            text-transform: uppercase;
          }
        }
      }
    }
    .support-con {
      display: flex;
      justify-content: space-between;
      background-color: ${props => props.theme.brandPrimaryColor};
      padding: 2rem 1rem;
      flex-direction: column;

      @media ${props => props.theme.largeMediaQuery} {
        flex-direction: row;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        padding-left: calc(50vw - 50%);
        padding-right: calc(50vw - 50%);
        padding: 2rem;
      }

      button {
        margin-top: 30px;
        font-size: 0.8rem;
        text-align: left;

        @media ${props => props.theme.largeMediaQuery} {
          margin-top: 0;
          font-size: 1rem;
        }
      }
    }
  }

  .contact-con {
    text-align: center;

    span {
      font-size: 2.5em;
      color: ${props => props.theme.textColorMildGrey};
      font-family: ${props => props.theme.fontFamilyTertiaryBold};
    }

    a {
      display: inline;
      color: ${props => props.theme.textColorSecondary};
    }
  }

  .footer-bottom {
    padding: 2em 0;
  }

  .navbar-brand {
    text-align: center;
    text-decoration: none;
  }

  &.footer-content .footer-top {
    margin-bottom: 3rem !important;
  }

  &.footer-content h2 a span {
    color: #ff0084;
  }

  .con-gd .form-control {
    width: 100%;
    padding: 15px 0px;
    border: 0;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    color: #fff;
    border-radius: 0;
    font-size: 0.9em;
    letter-spacing: 5px;
  }

  .con-gd button.btn {
    margin-left: auto;
    background: #fff;
    margin-bottom: 0;
    border-radius: 4px;
    padding: 15px 5px;
    border: 0px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    width: 100%;
  }

  /*--placeholder-color--*/

  .con-gd,
  .form-control::-webkit-input-placeholder {
    color: #fff;
  }

  .con-gd,
  .form-control :-moz-placeholder {
    /* Firefox 18- */
    color: #fff;
  }

  .con-gd,
  .form-control::-moz-placeholder {
    /* Firefox 19+ */
    color: #fff;
  }

  .con-gd,
  .form-control :-ms-input-placeholder {
    color: #fff;
  }

  ul.list-info {
    padding: 0;
    list-style: none;
  }

  ul.list-info li {
    list-style: none;
    margin: 0.8em 0;
  }

  .footer p a {
    color: #777;
    text-decoration: underline;
  }

  .last-w3layouts-contact p {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.85em;
    letter-spacing: 1px;
  }

  .footer-top p {
    color: #777;
  }

  .list-info li a {
    color: #777;
    font-size: 0.85em;
    letter-spacing: 1px;
    text-decoration: none;
  }

  .footer-links {
    h3.title {
      font-size: 1.2em;
      color: #333;
      font-weight: 600;
    }
    .list-info {
      span {
        &:before {
          transform: rotate(95deg);
          display: inline-block;
        }
      }
    }
  }

  .last-w3layouts-contact a {
    color: #777;
  }

  .subscribe-sec {
    padding: 60px 20px;
    border-radius: 4px;
    background: ${props => props.theme.textColorSecondary};
    box-shadow: 2px 2px 13px rgba(68, 79, 173, 0.35);
    
    @media ${props => props.theme.largeMediaQuery} {
      padding: 60px 80px;
    }
  }

  ul.list-info span {
    margin-right: 0.5em;
    color: #0062cc;
  }
`;
