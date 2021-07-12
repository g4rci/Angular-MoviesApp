import { Component, OnInit, Input, AfterViewInit  } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-castslideshow',
  templateUrl: './castslideshow.component.html',
  styleUrls: ['./castslideshow.component.css']
})
export class CastslideshowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}
