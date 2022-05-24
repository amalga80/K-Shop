import { Component, OnInit, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-card-lg',
  templateUrl: './product-card-lg.component.html',
  styleUrls: ['./product-card-lg.component.scss'],
  providers: [NgbRatingConfig]

})
export class ProductCardLgComponent implements OnInit {

  @Input() product: any = [];
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
  }

}
