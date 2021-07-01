import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTargetComponent } from './product-target.component';

describe('ProductTargetComponent', () => {
  let component: ProductTargetComponent;
  let fixture: ComponentFixture<ProductTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
