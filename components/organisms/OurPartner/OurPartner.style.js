import { css } from 'styled-components';

export default css`
  background-color: ${props => props.theme.brandPrimaryColor};

  .container {
    padding-bottom: 1rem !important;
    padding-top: 1rem !important;
    text-align: center;
    /* margin-top: -105px; */

    h2 {
      color: ${props => props.theme.textColorMildGrey};
      font-size: 1.7em;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 3rem !important;
      top: 0px;
      position: relative;

      @media ${props => props.theme.largeMediaQuery} {
        font-size: 2.7em;
        top: 0px;
      }
    }
  }
`;
