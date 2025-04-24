import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { WpButtonComponent } from "../wp-button/wp-button.component";
import { CaratulaFootComponent } from "../caratula-foot/caratula-foot.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-resp-social',
  imports: [NavBarComponent, FooterComponent, WpButtonComponent, CaratulaFootComponent],
  templateUrl: './resp-social.component.html',
  styleUrl: './resp-social.component.css'
})
export class RespSocialComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}
