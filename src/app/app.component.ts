import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  projects = [
    { name: 'Proyecto 1', description: 'Descripción del proyecto 1.', url: 'http://example.com/proyecto1' },
    { name: 'Proyecto 2', description: 'Descripción del proyecto 2.', url: 'http://example.com/proyecto2' },
    // Agrega más proyectos aquí
  ];
}

