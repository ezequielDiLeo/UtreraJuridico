import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { WpButtonComponent } from "../wp-button/wp-button.component";

@Component({
  selector: 'app-legal',
  imports: [CommonModule, FooterComponent, NavBarComponent, WpButtonComponent],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css'
})
export class LegalComponent implements OnInit {

  //variables
modalIsOpen = false;

constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0); 
    }
    this.closeModal()
  }

openModal(){
  this.modalIsOpen = true;
}

closeModal(){
  this.modalIsOpen = false;
}

}
