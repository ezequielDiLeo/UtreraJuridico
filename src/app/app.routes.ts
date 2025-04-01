import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { LegalComponent } from './components/legal/legal.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ResponsabilidadesComponent } from './components/responsabilidades/responsabilidades.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ValoresMisionComponent } from './components/valores-mision/valores-mision.component';
import { RespSocialComponent } from './components/resp-social/resp-social.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { PoliticaPrivComponent } from './components/politica-priv/politica-priv.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

export const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'intro', component: IntroPageComponent },
    { path: 'avisoLegal', component: LegalComponent, data: { title: 'Aviso legal | Utrera & asoc.' } },
    { path: 'profesionales', component: ProfesionalesComponent, data: { title: 'Nuestro Equipo | Utrera & asoc.' } },
    { path: 'nosotros', component: NosotrosComponent, data: { title: 'Sobre nosotros | Mi Estudio Jurídico' } },
    { path: 'contacto', component: ContactoComponent, data: { title: 'Contacto | Utrera & asoc.' } },
    { path: 'responsabilidades', component: ResponsabilidadesComponent, data: { title: 'Responsabilidades | Utrera & asoc.' } },
    { path: 'ayuda', component: AyudaComponent, data: { title: 'Soporte | Utrera & asoc.' } },
    { path: 'valores-y-mision', component: ValoresMisionComponent, data: { title: 'Valores & Misión - Utrera & asoc.' } },
    { path: 'responsabilidad-social', component: RespSocialComponent, data: { title: 'Responsabilidad social - Utrera & asoc.' } },
    { path: 'compromiso', component: CompromisoComponent, data: { title: 'Compromiso con nuestros clientes - Utrera & asoc.' } },
    { path: 'politica-privacidad', component: PoliticaPrivComponent, data: { title: 'Política de privacidad - Utrera & asoc.' } },

];
