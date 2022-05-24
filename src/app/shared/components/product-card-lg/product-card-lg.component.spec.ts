import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardLgComponent } from './product-card-lg.component';

describe('ProductCardLgComponent', () => {
  let component: ProductCardLgComponent;
  let fixture: ComponentFixture<ProductCardLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
