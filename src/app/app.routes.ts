import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'intro', component: IntroPageComponent },
];
