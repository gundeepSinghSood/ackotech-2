import { css } from 'styled-components';

export default css`
padding-top: 0;
 @media ${props => props.theme.largeMediaQuery} {
    margin: 0 3.875rem;
 }
    
    p{
      font-family: "Gilroy-Light",sans-serif;
      color: #9e9e9e;
      font-size: 1.2rem;
      line-height: 1.75;
      letter-spacing: .03125rem;
    }
    
    h1 {
      color: #0b6290;
      background-color: #f0f0f0;
      padding: 4.875rem 3.875rem;
    }
    
    .related-articles {
      padding: 5rem 0;
      
      h3 {
        padding: 0 20px;
        font-size: 1.8rem;
        color: #7ab4db;
      }
      
      .slick-slider {
        .slick-slide {
          padding: 0 20px;
        }
        video {
          width: 100%;
          height: 100%;
        }
        a {
          position: relative;
            &:hover {
              .video {
                &:after {
                  content: "";
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  background-image: linear-gradient(113deg,#134285,#7ab4db);
                  transition: 5s all ease;
                }
              }
            }
        }
        .video {
          &:after{
            content: none;
          }
        }
        .item-title {
          z-index: 2;
        }
      }
    }
    
    .contact-container {
      padding: 5rem 0 0 0;
    }
    
    .contact-box {
      padding: 3.875rem;
      background-color: #0b6290;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      
      h3 {
        font-family: "Gilroy-ExtraBold",sans-serif;
        color: #fff;
        padding-right: 3rem;
        font-size: 1.8rem;
      }
      button {
        font-family: "Gilroy-ExtraBold",sans-serif;
        color: #fff;
        font-size: 2rem;
        position: relative;
        padding: 0;
        display: flex;
        align-items: center;
        
        &:after {
          filter: brightness(0) invert(1);
          width: 35px;
          height: 15px;
        }
      }
    }
`;
