import { css } from 'styled-components';

const ButtonStyles = css`
  display: inline-block;
  position: relative;
  text-align: center;
  text-decoration: none;
  outline: 0;
  z-index: 1;
  color: ${props => props.theme.textColorGrey};
  background: transparent;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.3' : '1')};
  transition: 0.5s;

  &::after {
    content: '';
    width: 15px;
    height: 7px;
    display: inline-block;
    background: url('../static/img/icon-page-link.svg') no-repeat;
    background-size: 100%;
    
    transition: right 0.2s;
    position: relative;
    top: -1px;
    right: 0;
    margin-left: 15px;
  }

  &:hover {
    &::after {
      /* background: ${props => props.theme.buttonHoverColor}; */
      right: -5px;
    }
  }

  &:focus {
    outline: 1px dashed ${props => props.theme.colorOutline};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }


  ${props =>
    // eslint-disable-next-line operator-linebreak
    props.secondary &&
    css`
      color: ${props.theme.textColorPrimary};

      &::before {
        background: ${props.theme.textColorWhite};
        border: 2px solid ${props.theme.textColorPrimary};
      }

      &:hover {
        color: ${props.theme.textColorWhite};

        &::before {
          background: ${props.theme.textColorPrimary};
        }
      }

      &::after {
        content: '';
        border: none;
      }
    `}
`;
export default ButtonStyles;
