import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperAdvertising() {
  const swiper = new Swiper(".swiper-advertising", {
    loop: true,
    parallax: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.1,
        spaceBetween: 25,
      },
      1300: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 2.8,
        spaceBetween: 35,
      },
      1720: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}
export default swiperAdvertising;
