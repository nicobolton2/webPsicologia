import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './components/common/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ErrorPageComponent},
];
