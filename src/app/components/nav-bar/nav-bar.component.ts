import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  //INJECTIONS
  private _platformId = inject(PLATFORM_ID);

  //VARIABLES
  data: any = HomeComponent;
  isScrolled = false;
  menuAbierto = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.smallNavB();
    }
  }

  smallNavB() {
    window.addEventListener('scroll', function () {
      var header = document.querySelector("header");
      header?.classList.toggle("abajo", window.scrollY > 100)
    })
  }

toggleMenu() {
  this.menuAbierto = !this.menuAbierto;
  if (this.menuAbierto) {
    document.body.style.overflow = 'hidden'; // bloquea scroll
  } else {
    document.body.style.overflow = 'auto';   // lo vuelve a habilitar
  }
}

cerrarMenu() {
  this.menuAbierto = false;
  document.body.style.overflow = 'auto';
}

}
