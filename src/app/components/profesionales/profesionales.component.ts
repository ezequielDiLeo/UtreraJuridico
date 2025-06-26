import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { WpButtonComponent } from "../wp-button/wp-button.component";
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-profesionales',
  imports: [CommonModule, FooterComponent, NavBarComponent, WpButtonComponent],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent implements OnInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
        });
  }

}
