import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresMisionComponent } from './valores-mision.component';

describe('ValoresMisionComponent', () => {
  let component: ValoresMisionComponent;
  let fixture: ComponentFixture<ValoresMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoresMisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoresMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
