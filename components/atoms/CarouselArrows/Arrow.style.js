import { css } from 'styled-components';

export default css`
  &.icon-right-arrow-large,
  &.icon-left-arrow-large {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 9px;
    box-shadow: inset 2px -2px 0 1px ${props => props.theme.textColorSecondary};
    cursor: pointer;
    transition: box-shadow 0.15s, margin 0.15s;
    transform: rotate(225deg);
    background: transparent;

    &:hover {
      box-shadow: inset 5px -2px 0 9px ${props => props.theme.textColorSecondary};
      margin: 0 0px;
    }
  }

  &.icon-left-arrow-large {
    transform: rotate(45deg);
    left: 0;
  }
`;
