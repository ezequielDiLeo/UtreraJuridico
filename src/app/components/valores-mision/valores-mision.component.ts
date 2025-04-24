import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { CaratulaFootComponent } from "../caratula-foot/caratula-foot.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-valores-mision',
  imports: [NavBarComponent, FooterComponent, CaratulaFootComponent],
  templateUrl: './valores-mision.component.html',
  styleUrl: './valores-mision.component.css'
})
export class ValoresMisionComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}
