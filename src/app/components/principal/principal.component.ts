import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-principal',
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalComponent {

  @ViewChild('swiperContainer', { static: false }) swiperEl!: ElementRef;

  ngOnInit(): void {
    if (this.swiperEl) {
      const swiperParams = {
        slidesPerView: 1,
        on: {
          init() {
            console.log('Swiper inicializado');
          },
        },
      };

      Object.assign(this.swiperEl.nativeElement, swiperParams);
      this.swiperEl.nativeElement.initialize();
    }
  }
}
