import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-resp-social',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './resp-social.component.html',
  styleUrl: './resp-social.component.css'
})
export class RespSocialComponent {

}
