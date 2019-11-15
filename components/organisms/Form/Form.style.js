import { css } from 'styled-components';

export default css`
max-width: 700px;
&.form {
  /* margin: 16rem auto 0 auto; */
  text-align: right;
  
  h1{
    text-align: left;
    
    &:only-child {
      margin: 90px 0;
    }
  }
  
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  
  .field {
    display: block;
    border: 1px solid #BDBDBD;
    float: left;
    width: 100%;
    
    &.tnb {
      border-top: 0;
    }
    
    &.half {
      width: 50%;
    }
    
    &.last {
      border-left: 0;
    }
    
    label {
      display: block;
      font-size: 1.2rem;
      padding: 1.5rem 2rem 0;
      text-transform: uppercase;
      color: #999;
      font-weight: 700;
      letter-spacing: 1px;
    }
    
    input,
    textarea {
      display: block;
      width: 100%;
      padding: .5rem 2rem 1.5rem;
      font-size: 1.8rem;
      border: 0;
      color: #212121;
      outline: 0;
    }
    
    textarea {
      min-height: 150px;
      resize:vertical; 
    }
  }
  .btn-primary {
    border-radius: 3.125rem;
    text-align: center;
    font-size: 1.3rem;
    box-sizing: border-box;
    border: 0 solid #7ab4db;
    color: #0C6291;
    font-family: ${props => props.theme.fontFamilyTertiaryBold};
    transition: .3s all ease;
    cursor: pointer;
    letter-spacing: .0625rem;
    padding: 1.25rem;
    display: inline-block;
    text-transform: uppercase;
    background: #fff;
    text-align: right;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
`;