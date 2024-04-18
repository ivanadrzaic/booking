import { Component } from '@angular/core';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [MenuBarComponent, RouterOutlet],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {

}
