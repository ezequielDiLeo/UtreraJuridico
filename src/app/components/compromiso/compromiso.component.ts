import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-compromiso',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './compromiso.component.html',
  styleUrl: './compromiso.component.css'
})
export class CompromisoComponent {

}
