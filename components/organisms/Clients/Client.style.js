import { css } from 'styled-components';

export default css`
  .client-text {
    position: relative;
    padding-right: 4.375rem;
    color: #0C6291;
    font-weight: 100;
    line-height: 1.5;
    font-size: 2rem;
    
    &:after {
      content: "";
      position: absolute;
      top: .75rem;
      right: 0;
      border-top-color: #0C6291;
      border-right-color: #0C6291;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-width: 1.0625rem;
      border-style: solid;
    }
  }
  
  .client-img{
    display: grid;
    grid-column-gap: 3.125rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(3,1fr);
    
    .img-grid {
      display: grid;
          text-align: center;
    }
    
    p{
          display: flex;
    align-items: center;
    justify-content: center;
    }
  }
  
  img {
    display: block;
        width: 80%;
    margin: auto;
  }
`;
