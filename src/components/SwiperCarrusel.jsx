import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function SwiperCarrusel() {
  useEffect(() => {
    new Swiper('.mySwiper', {
      loop: true,
      effect: 'fade', // 👈 Transición suave tipo fade
      fadeEffect: { crossFade: true },
      speed: 1000,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: { delay: 4000 },
    });



    // new Swiper('.mySwiper', {
    //   loop: true,
    //   pagination: { el: '.swiper-pagination', clickable: true },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   autoplay: { delay: 5000 },
    // });
  }, []);

  return null; // No renderiza nada, solo ejecuta JS
}
