import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDrawerContainer, MatDrawer, MatDrawerContent} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-narvar',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatDrawerContainer,
    MatDrawer, 
    MatDrawerContent
  ],
  templateUrl: './narvar.component.html',
  styleUrl: './narvar.component.css'
})
export class NarvarComponent {
  
}
