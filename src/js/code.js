



// Рид мор

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("read-more").addEventListener("click", function () {
        document.querySelector('.main__blog').classList.toggle('open')
    })
})

// Включение сайда

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector('.side-menu').classList.toggle('open')
        document.querySelector('.fog').classList.toggle('show')
        document.querySelector('.fog').classList.toggle('hidden')
    })
})

// Выключение сайда

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("cross").addEventListener("click", function () {
        document.querySelector('.side-menu').classList.toggle('open')
        document.querySelector('.fog').classList.toggle('show')
        document.querySelector('.fog').classList.toggle('hidden')
    })
})

// Включение фидбека

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("chat").addEventListener("click", function () {
        document.querySelector('.order-call').classList.toggle('open')
        document.querySelector('.fog2').classList.toggle('show')
        document.querySelector('.fog2').classList.toggle('hidden')
    })
})

// Выключение фидбека

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("order-cros").addEventListener("click", function () {
        document.querySelector('.order-call').classList.toggle('open')
        document.querySelector('.fog2').classList.toggle('show')
        document.querySelector('.fog2').classList.toggle('hidden')
    })
})

// Включение звонка

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("call").addEventListener("click", function () {
        document.querySelector('.feedback').classList.toggle('open')
        document.querySelector('.fog2').classList.toggle('show')
        document.querySelector('.fog2').classList.toggle('hidden')
    })
})

// Выключение звонка

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("feed-cros").addEventListener("click", function () {
        document.querySelector('.feedback').classList.toggle('open')
        document.querySelector('.fog2').classList.toggle('show')
        document.querySelector('.fog2').classList.toggle('hidden')
    })
})

// Включение хедера-фидбека

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("header-chat").addEventListener("click", function () {
      document.querySelector('.order-call').classList.toggle('open')
      document.querySelector('.fog2').classList.toggle('show')
      document.querySelector('.fog2').classList.toggle('hidden')
  })
})

// Включение хедера-звонка

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("header-call").addEventListener("click", function () {
      document.querySelector('.feedback').classList.toggle('open')
      document.querySelector('.fog2').classList.toggle('show')
      document.querySelector('.fog2').classList.toggle('hidden')
  })
})


// Открытие брендов

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("brands-more").addEventListener("click", function () {
        document.querySelector('.main__brand-list__objects').classList.toggle('open')
    })
})

// Открытие техники

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("tech-more").addEventListener("click", function () {
        document.querySelector('.main__tech-list__objects').classList.toggle('open')
    })
})


import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
Swiper.use([Pagination]);

// Свайпер
window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    const someFunc = (instance) => {
      if (instance) {
        instance.on('slideChange', function (e) {
          console.log('*** mySwiper.activeIndex', instance.activeIndex);
        });
      }
    };
  
    resizableSwiper(
      '(max-width: 768px)',
      '.slider-1',
      {
        loop: true,
        spaceBetween: 100,
        slidesPerView: 1.6,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      someFunc
    );

    resizableSwiper(
        '(max-width: 768px)',
        '.slider-2',
        {
          loop: true,
          spaceBetween: 100,
          slidesPerView: 1.6,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
        someFunc
      );

      resizableSwiper(
        '(max-width: 768px)',
        '.slider-3',
        {
          loop: true,
          spaceBetween: 150,
          slidesPerView: 1.6,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
        someFunc
      );
  });