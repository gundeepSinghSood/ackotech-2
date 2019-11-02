import { css } from 'styled-components';

export default css`
  > div {
    padding-bottom: 3rem !important;
    padding-top: 3rem !important;
  }

  .unique-title {
    text-align: center;
    font-size: 30px;
    letter-spacing: 2px;
    color: #292a2b;

    span {
      color: ${props => props.theme.textColorSecondary};
    }
  }

  .unique-button {
    width: 100%;
    text-align: right;
    margin-top: 2rem;

    a {
      display: inline-block;
    }
  }
`;
