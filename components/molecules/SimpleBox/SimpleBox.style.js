import { css } from 'styled-components';

export default css`
  &.single-box {
    display: flex;
  }

  .box-container {
    padding: 1rem;
    margin-top: 1.5rem;
    /* background: #f8f9fa; */
    border: 1px solid ${props => props.theme.textColorSecondary};
    transition: 1.8s all;
    /* box-shadow: 7px 7px 10px 0 rgba(76, 110, 245, 0.1); */
    position: relative;

    .heading-container {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    h2 {
      margin: 1rem 0;
      position: relative;
      display: block;
      width: 100%;
      background: white;

      @media ${props => props.theme.largeMediaQuery} {
        left: -15%;
      }
    }

    p {
      color: ${props => props.theme.textColorMildGrey};
      font-family: ${props => props.theme.fontFamilyPrimaryLight};
      font-weight: 200;
    }

    [class^='icon-'],
    [class*=' icon-'] {
      color: ${props => props.theme.textColorSecondary};
      transition: 1s all;

      &::before {
        font-size: 30px;
      }
    }
  }
`;
