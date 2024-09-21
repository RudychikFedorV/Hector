import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperNew() {
  const swiper = new Swiper(".swiper-new", {
    loop: true,
    parallax: true,
    slidesPerView: 2.5,
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      620: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      920: {
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
    },
  });
}
export default swiperNew;
