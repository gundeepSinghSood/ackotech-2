import NextArrow from '../components/atoms/CarouselArrows/NextArrow';
import PrevArrow from '../components/atoms/CarouselArrows/PrevArrow';

export default {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  cssEase: 'linear',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
