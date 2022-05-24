import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardLgComponent } from './components/product-card-lg/product-card-lg.component';
import { ProductCardSmComponent } from './components/product-card-sm/product-card-sm.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    ProductCardLgComponent,
    ProductCardSmComponent
  ],
  exports: [
    HeaderComponent,
    ProductCardLgComponent,
    ProductCardSmComponent
  ]
})
export class SharedModule { }
