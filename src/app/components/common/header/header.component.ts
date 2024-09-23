import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { NarvarComponent } from '../narvar/narvar.component';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MatSidenav,
    MatSidenavContainer,
    MatToolbar,
    MatSidenavContent,
    MatNavList,
    MatIcon,
    CommonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHandset$!: Observable<boolean>;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Aquí inicializamos isHandset$ después de que el breakpointObserver ha sido inyectado.
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
  
}
