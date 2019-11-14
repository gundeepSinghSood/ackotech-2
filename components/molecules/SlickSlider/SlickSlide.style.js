import { css } from 'styled-components';

export default css`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  
  .slick-cloned {
    display: none;
  }
  
  .hero-video-text{
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    h2{
      font-size: 2.4rem;
      line-height: 1.2;
      &:first-child {
        color: #20ecb5;
        margin: 0 0 15px;
      }
    }
  }
  
  video {
      margin:0 auto;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: calc(100vh);
      z-index: -100;
      background-size: cover;
      transition: 1s opacity;
      position: relative;
    }
    
    .video {
      height: 90vh;
      &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #000;
        opacity: .7;
      }
      
      .item-title {
        position: absolute;
        bottom: 30px;
        
        h3 {
          color: #fff;
          padding-right: 3rem;
          font-size: 1.8rem;
        }
      }
    }
  
  .simple-text-header{
    /* margin: 0 3.875rem; */
    margin-top: auto;
    position: relative;
    z-index: 1;
    padding: 6.25rem 0;
    
    h1 {
      position: relative;
      color: #4a4a4a;
      line-height: 1.2
      font-size: 2.4rem;
    }
    span {
      font-size: 3rem;
      line-height: 1.2;
      /* color: #20ecb5; */
      color: #0C6291;
      letter-spacing: .075rem;
    }
    
    .page-title{
      transform: rotate(-90deg) translateY(50%);
      position: absolute;
      top: 70%;
      left: -60px;
      transform-origin: center left;
      font-size: 2rem;
    }
/*     
    &:before{ 
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 0;
      margin-left:   calc(50% - 50vw);
      margin-right:  calc(50% - 50vw);
      padding-left:  calc(50vw - 50%);
      padding-right: calc(50vw - 50%);

      background: linear-gradient(90deg,#ffffff,#0c6291 100%);
    } */
    
    /* &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 20px;
      margin-left:   calc(50% - 50vw);
      margin-right:  calc(50% - 50vw);
      padding-left:  calc(50vw - 50%);
      padding-right: calc(50vw - 50%);
      background-image : linear-gradient(to bottom, 
                    rgba(255,255,255, 0), 
                    rgba(255,255,255, 1) 90%);
    } */
  }
  
  .line-break {
    background: #ff34c1;
    height: .25rem;
    width: 8.75rem;
    position: relative;
    margin-bottom: 20px;
    
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 2.75rem;
      border-left: .25rem solid #fff;
      background: #65318f;
      right: 2.1rem;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 2.75rem;
      border-left: .25rem solid #fff;
      background: #134285;
    }
  }
`;
