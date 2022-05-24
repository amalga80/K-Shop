import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    { img: 'https://via.placeholder.com/1200x300.png/09f/fff' },
    { img: 'https://via.placeholder.com/1200x300.png/021/fff' },
    { img: 'https://via.placeholder.com/1200x300.png/321/fff' },
    { img: 'https://via.placeholder.com/1200x300.png/422/fff' },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, rtl: true, arrows: true, autoplay: true };

}
