import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private seoData: Record<string, { title: string; description: string; keywords: string }> = {
    '/home': {
      title: 'Home - Utrera & Asociados',
      description: 'Estudio jurídico con amplia experiencia en derecho laboral, civil, penal y comercial. Asesoramiento legal integral y defensa personalizada.',
      keywords: 'estudio jurídico, abogados, asesoramiento legal, derecho laboral, derecho civil, derecho penal, derecho comercial, defensa legal, consulta legal'
    },
    '/nosotros': {
      title: 'Sobre Nosotros - Utrera & Asociados',
      description: 'Conocé la trayectoria y experiencia de nuestro equipo de abogados. Comprometidos con la justicia, la ética y la excelencia profesional.',
      keywords: 'equipo legal, abogados profesionales, experiencia jurídica, estudio jurídico, ética profesional, compromiso legal, Utrera & Asociados'
    },
    '/avisoLegal': {
      title: 'Aviso Legal - Utrera & Asociados',
      description: 'Términos y condiciones de uso del sitio web de Utrera & Asociados. Información legal clara y transparente para usuarios y clientes.',
      keywords: 'aviso legal, términos y condiciones, responsabilidad legal, información legal, privacidad web, política de uso'
    },
    '/profesionales': {
      title: 'Nuestros Profesionales - Utrera & Asociados',
      description: 'Abogados especializados en derecho penal, civil, laboral y comercial. Conocé a nuestro equipo y sus áreas de práctica profesional.',
      keywords: 'abogados especializados, profesionales del derecho, derecho penal, derecho civil, derecho laboral, derecho comercial, asesoría jurídica'
    },
    '/contacto': {
      title: 'Contacto - Consultas Legales',
      description: 'Contactanos para consultas legales y asesoramiento jurídico personalizado. Estamos para ayudarte con tu caso.',
      keywords: 'consultas legales, contacto abogados, asesoramiento jurídico, estudio jurídico, atención personalizada, consulta legal'
    },
    '/ayuda': {
      title: 'Centro de Ayuda Legal - Utrera & Asociados',
      description: 'Respuestas a preguntas frecuentes sobre nuestros servicios legales, trámites y procesos judiciales.',
      keywords: 'preguntas frecuentes legales, ayuda legal, asesoramiento jurídico, soporte legal, trámites judiciales, dudas legales'
    },
    '/mision-y-valores': {
      title: 'Misión y Valores - Utrera & Asociados',
      description: 'Principios éticos, compromiso con la justicia y valores que guían nuestro trabajo en cada caso que atendemos.',
      keywords: 'misión estudio jurídico, valores éticos, compromiso legal, justicia, ética profesional, responsabilidad social'
    },
    '/responsabilidad-social': {
      title: 'Responsabilidad Social - Utrera & Asociados',
      description: 'Comprometidos con la justicia social y el acceso igualitario al derecho a través de acciones comunitarias y apoyo social.',
      keywords: 'responsabilidad social, compromiso comunitario, acceso a la justicia, abogados solidarios, acciones sociales'
    },
    '/compromiso': {
      title: 'Nuestro Compromiso - Utrera & Asociados',
      description: 'Defensa firme de tus derechos con atención personalizada y un enfoque ético en cada caso que tomamos.',
      keywords: 'compromiso legal, defensa de derechos, abogados comprometidos, atención personalizada, ética profesional'
    },
    '/politica-privacidad': {
      title: 'Política de Privacidad - Utrera & Asociados',
      description: 'Protegemos tus datos personales con confidencialidad y seguridad. Conocé cómo manejamos tu información.',
      keywords: 'política de privacidad, protección de datos, confidencialidad, seguridad jurídica, manejo de datos personales'
    }
  };



  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const path = event.urlAfterRedirects;
      this.setSeoTags(path);
    });
  }

  private setSeoTags(path: string) {
    const cleanPath = path.split('?')[0].split('#')[0];
    const seo = this.seoData[cleanPath];
    if (seo) {
      this.title.setTitle(seo.title);
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({ name: 'keywords', content: seo.keywords });

      // Open Graph
      this.meta.updateTag({ property: 'og:title', content: seo.title });
      this.meta.updateTag({ property: 'og:description', content: seo.description });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:url', content: `https://utrerac.com${path}` });
      this.meta.updateTag({ property: 'og:image', content: 'https://utrerac.com/simbolo-wb.png' });

      // Twitter
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:title', content: seo.title });
      this.meta.updateTag({ name: 'twitter:description', content: seo.description });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://utrerac.com/simbolo.png' });
    }
  }

}
