import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { WpButtonComponent } from "../wp-button/wp-button.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-politica-priv',
  imports: [FooterComponent, NavBarComponent, WpButtonComponent],
  templateUrl: './politica-priv.component.html',
  styleUrl: './politica-priv.component.css'
})
export class PoliticaPrivComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}
