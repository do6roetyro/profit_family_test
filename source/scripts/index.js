import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {

  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
