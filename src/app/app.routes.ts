import { Routes } from '@angular/router';
import { Hero } from './hero/hero'; // Asegúrate de importar tu componente de inicio o Hero
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component:Home },
  { path: 'hero', component: Hero }, // <-- Esto soluciona el Cannot GET / en la raíz
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'login', component: Login },
  { path: '**', component:NotFound}
];
