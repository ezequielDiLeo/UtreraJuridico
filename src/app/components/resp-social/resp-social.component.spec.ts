import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespSocialComponent } from './resp-social.component';

describe('RespSocialComponent', () => {
  let component: RespSocialComponent;
  let fixture: ComponentFixture<RespSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
