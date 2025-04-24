import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaFootComponent } from './caratula-foot.component';

describe('CaratulaFootComponent', () => {
  let component: CaratulaFootComponent;
  let fixture: ComponentFixture<CaratulaFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaratulaFootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaratulaFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
