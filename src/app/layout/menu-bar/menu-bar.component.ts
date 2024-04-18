import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Kuća Za Odmor',
        routerLink: ['/vacationhome']

      },
      {
        label: 'Ture',
        routerLink: ['/tour']

      },
      {
        label: 'O Nama',
        routerLink: ['/contact']

      },
    ];
  }
}

