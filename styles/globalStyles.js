import Theme from './theme';

export default `
* {
  box-sizing: border-box;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
}

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 300ms;
  z-index: 900;
}

.ReactModal__Overlay--after-open{
  opacity: 1;
}

.ReactModal__Overlay--before-close{
  opacity: 0;
}


body {
  font-family: ${Theme.fontFamilyPrimaryLight}, Helvetica, Arial, sans-serif;
  font-size: ${Theme.fontLarge};
  font-weight: ${Theme.fontNormal};
  letter-spacing: ${Theme.letterSpacing}
  padding-top: ${Theme.minHeightHeaderMobile};
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

section {
  padding-bottom: 3rem;
  padding-top: 3rem;
}

main {
  // margin-top: 120px;

  // @media ${Theme.largeMediaQuery} {
  //   margin-top: 160px;
  // }
}


input[type=text]::-ms-clear {
  display: none;
}

.select-box {
  .checkmark {
    &::before {
      content: '';
    }
  }
}

.right {
  float: right;
}

.center-align{
  text-align: center;
}

.margin-0 {
  margin:0;
}

.padding-0 {
  padding:0;
}

.select-box{
  position:relative;
  width:100%;
}

.select-box .arrow-down4{
  position:absolute;
  right: 8px;
  top: 14px;
}

select{
  -webkit-appearance: none;
  -moz-appearance: radio-container;
  appearance: none;
  background: transparent;
  padding: 12px;
  padding-right: 40px;
  border-radius: 0;
  border: 1px solid;
  width:100%;
}

button,
input,
optgroup,
select,
textarea {
  border-radius: 0;
  font-family: ${Theme.fontFamilyPrimaryLight};
  letter-spacing: inherit;
  -webkit-appearance: none;
}

.is-hidden {
  display: none !important;
}

.is-visible {
  display: block;
}

strong {
  font-family: ${Theme.fontFamilyPrimaryBold};
}

.row-negitive {
  margin-right: -.5rem;
  margin-left: -.5rem;
}

h1 {
  margin: 0;
  padding: 0;
}


@media ${Theme.largeMediaQuery} {
  .full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
}

.view-md {
  display: none;
}

.view-xs {
  display: block;
}

a:focus, button:focus, [role="button"]:focus {
  outline: 1px dashed ${Theme.colorOutline};
}

a:focus:not(.focus-visible), button:focus:not(.focus-visible), [role="button"]:focus:not(.focus-visible) {
  outline: none;
}

img {
  object-fit: cover;
  max-width: 100%;
}

@media ${Theme.largeMediaQuery} {
  .view-md {
    display: block;
  }

  .view-xs {
    display: none;
  }

  .zoom-parent {
    display: block;
    position: relative;
    overflow: hidden;
  }

  .zoom-parent img {
    display: block;
  }

  .zoom-child {
    -webkit-transition: all 1.0s;
    -moz-transition: all 1.0s;
    -o-transition: all 1.0s;
    transition: all 1.0s;
  }

  .zoom-parent:hover::before,
  .zoom-parent:focus::before {
    visibility: visible;
  }

  .zoom-parent:hover .zoom-child, .zoom-parent:focus .zoom-child{
    -ms-transform: scale(1.06);
    -moz-transform: scale(1.06);
    -webkit-transform: scale(1.06);
    -o-transform: scale(1.06);
    transform: scale(1.06);
  }

  .zoom-parent::before {
    content: "";
    height: 100%;
    visibility: hidden;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0.2);
  }
}

.strike-through {
  display: flex;
  align-items: center;
  justify-content: center;

  &::before, &::after {
    content: '';
    width: 10px;
    height: 2px;
    background: ${Theme.textColorSecondary};
    margin: 0 20px;
  }
}

  .nav-opened {
    background-color: rgba(0,0,0,0.4);
    overflow-y: hidden;

    .wrapper {
      opacity: 0.2;
    }
  }
  .scroll-x-hidden {
    position: fixed;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }

    .comp-loader,
.comp-loader:before,
.comp-loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.comp-loader {
  color: #39e7b3;
  font-size: 10px;
  margin: -25px 0 0 0;
  position: relative;
  top: 50%;
  left: 50%;
  text-indent: -9999em;
  z-index: 99999;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.comp-loader:before,
.comp-loader:after {
  content: '';
  position: absolute;
  top: 0px;
}
.comp-loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.comp-loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0.5px -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0.5px 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0.5px -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0.5px 0;
  }
}

.iphone-touch {
   -webkit-overflow-scrolling: touch;
}

.text-align-right {
  text-align: right !important;
}

.text-align-left {
  text-align: left !important;
}

.text-align-center {
  text-align: center !important;
}

.text-align-justify {
  text-align: justify !important;
}

`;
