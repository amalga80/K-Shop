import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSmComponent } from './product-card-sm.component';

describe('ProductCardSmComponent', () => {
  let component: ProductCardSmComponent;
  let fixture: ComponentFixture<ProductCardSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
