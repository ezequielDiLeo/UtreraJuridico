import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { WpButtonComponent } from "../wp-button/wp-button.component";
import { isPlatformBrowser } from '@angular/common';
import { CaratulaFootComponent } from "../caratula-foot/caratula-foot.component";

@Component({
  selector: 'app-ayuda',
  imports: [NavBarComponent, FooterComponent, WpButtonComponent, CaratulaFootComponent],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent implements OnInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}
