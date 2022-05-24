import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SlickCarouselModule,
    SharedModule
  ],
  declarations: [
    BannerComponent,
    HomePageComponent
  ]
})
export class PagesModule { }
