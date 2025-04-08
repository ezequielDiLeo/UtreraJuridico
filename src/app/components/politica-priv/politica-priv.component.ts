import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { WpButtonComponent } from "../wp-button/wp-button.component";

@Component({
  selector: 'app-politica-priv',
  imports: [FooterComponent, NavBarComponent, WpButtonComponent],
  templateUrl: './politica-priv.component.html',
  styleUrl: './politica-priv.component.css'
})
export class PoliticaPrivComponent {

}
