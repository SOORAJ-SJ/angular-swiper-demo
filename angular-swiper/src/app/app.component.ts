import { Component } from '@angular/core';
import SwiperCore ,{ SwiperOptions} from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-swiper';
  config: SwiperOptions = {
    lazy: true
  }
}
