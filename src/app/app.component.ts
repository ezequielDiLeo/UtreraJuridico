import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WpButtonComponent } from "./components/wp-button/wp-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WpButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
