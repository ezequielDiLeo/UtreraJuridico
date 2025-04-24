import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { isPlatformBrowser } from '@angular/common';
import { WpButtonComponent } from "../wp-button/wp-button.component";
import { CaratulaFootComponent } from "../caratula-foot/caratula-foot.component";

@Component({
  selector: 'app-nosotros',
  imports: [FooterComponent, NavBarComponent, WpButtonComponent, CaratulaFootComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}
