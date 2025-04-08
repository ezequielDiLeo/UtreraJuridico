import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FooterComponent } from "../footer/footer.component";
import { PrincipalComponent } from "../principal/principal.component";
import { WpButtonComponent } from "../wp-button/wp-button.component";

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, NavBarComponent, FooterComponent, PrincipalComponent, WpButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  // VIEWCHILD
  @ViewChild('menu', {static: true}) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('firstSection', {static: true}) firstSection!: ElementRef<HTMLDivElement>;
  @ViewChild('secondSection', {static: true}) secondSection!: ElementRef<HTMLDivElement>;
  @ViewChild('imageFirst', {static: true}) imageFirst!: ElementRef<HTMLImageElement>;
  @ViewChild('imageSecond', {static: true}) imageSecond!: ElementRef<HTMLImageElement>;

  constructor(@Inject(PLATFORM_ID)  private platformId: object, @Inject(DOCUMENT) private document: Document){
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0); 
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimation(); 
      this.initialAnimation();
    }
  }

  // INICIO ANIMACIÓN SCROLL
  initScrollAnimation(): void {
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '60% center',
      } as ScrollTrigger.Vars,
      duration: 1.1,
      scale: 1.2,
      height: 250
    });
    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecond.nativeElement,
        scrub: true,
        start: '50% center',
      },
      duration: 1.1,
      scale: 1.2,
      height: 250
    });
    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start:'top 30%',
      },
      color: '#fff',
      duration: 3,
      opacity: 0.2
    });
    gsap.to(this.document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: true,
        start:'top 30% ',
      },
      color: '#fff',
      duration: 1.5,
      opacity: 0.2
    });
    gsap.to(this.document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.btn'),
        scrub: true,
        start:'120% center',
      },
      color: '#fff',
      duration: 1.5,
      opacity: 0.2
    });

    // SECOND INICIO DE ANIMACIÓN
    gsap.from(this.document.querySelector('#contract'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#contract'),
        scrub: true,
        toggleClass: 'active',
        start: 'center bottom',
      },
      duration: 1.5,
      y: 35,
      opacity: 0.3,
    });
    gsap.from(this.document.querySelector('#about'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#about'),
        scrub: true,
        toggleClass: 'active',
        start: 'center bottom',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.box'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.box'),
        scrub: true,
        toggleClass: 'active',        
        start: '-80% bottom',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-100% bottom',
      },
      duration: 1.5,
      height: 0, 
      scale: 1.3,
      opacity: 0.5,
    })
    gsap.from(this.document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: true,
        toggleClass: 'active',
        start: '30% bottom',
      },
      duration: 1,
      opacity: 0,
    })
    gsap.from(this.document.querySelector('.heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-3'),
        scrub: 0.5,
        toggleClass: 'active',
        start: '-350% bottom',
      },
      duration: 1.5,
      color: '#fff',
      y: 40,
      opacity: 0,
    })
  }


// DE DONDE INICIA
  initialAnimation(): void {
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(this.imageFirst.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.5,
    })
    gsap.from(this.imageSecond.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    })
    gsap.from(this.document.querySelector('.heading-1'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      stagger: 0.2,
      delay: 0.5,
    })
    gsap.from(this.document.querySelector('.paragraph'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.7,
    })
    gsap.from(this.document.querySelector('.btn'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.8,
    })
  }

}
