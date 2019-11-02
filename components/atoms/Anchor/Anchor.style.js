import { css } from 'styled-components';

export default css`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.textColorWhite};
  padding: ${props => (props.isButtonLink ? '0.75rem 1.5rem' : '0')};
  display: block;

  .icon-next-arrow-white {
    font-size: ${props => props.theme.fontExtraSmall};

    &::before {
      color: ${props => props.theme.textColorPrimary};
    }
  }

  .animate-right {
    margin-right: 9px;
    animation: translate-left-in 0.3s 1 cubic-bezier(0.7, 0, 0.3, 1);
    position: relative;

    + span {
      margin-left: 0.5rem;
    }

    + p {
      margin-left: 0.5rem;
    }

    + div {
      margin-left: 0.5rem;
    }
  }

  &:hover {
    .animate-right {
      animation: translate-left-out 0.3s 1 cubic-bezier(0.7, 0, 0.3, 1);
      left: 0.6875rem;
    }
  }

  /* Keyframes */
  @keyframes translate-left-in {
    0% {
      left: 9px;
    }

    100% {
      left: 0;
    }
  }

  @keyframes translate-left-out {
    0% {
      left: 0;
    }

    100% {
      left: 9px;
    }
  }

  ${props =>
    props.secondary
      ? `
        font-weight: ${props.theme.fontSemiBold}
        color: ${props.theme.linkColorSecondary}
      `
      : ''};
  ${props =>
    props.readMoreButton
      ? `
        color: ${props.theme.textColorPrimary};
          margin-left: 10px;
      `
      : ''};
  ${props =>
    props.viewmorebutton
      ? `
        color: ${props.theme.textColorPrimary};
        margin-right: 15px;
      `
      : ''};

  &.generic-page-anchor {
    .icon-right-arrow-large {
      &::before {
        color: ${props => props.theme.textColorPrimary};
      }
    }
  }
`;
