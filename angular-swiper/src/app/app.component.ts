import { Component, OnInit } from '@angular/core';
import SwiperCore ,{ SwiperOptions, Lazy, Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Lazy, Pagination, Navigation, Autoplay])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-swiper';
  config: SwiperOptions = {
    lazy: true,
    preloadImages: false,
    pagination: true,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 1000
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        watchSlidesProgress: true
      }
    }
  }
}
