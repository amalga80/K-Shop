import { Component, OnInit } from '@angular/core';
import { PrductsListService } from 'src/app/shared/services/prducts-list.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  public recentProducts: any;
  public products: any;

  constructor(private prductsListService: PrductsListService) { }

  ngOnInit(): void {
    this.prductsListService.getRecentProducts().subscribe((data) => {
      console.log(data);
      this.recentProducts = data;
    });

    this.prductsListService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

}
